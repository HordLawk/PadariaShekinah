<script setup lang="ts">
import type { ProductType, CartProductType } from '@/assets/utils.js';
import { ref, watch } from 'vue';
import { toPriceString, fetchProducts } from '@/assets/utils.js';
import CartItem from '@/components/CartItem.vue';

const cartJSON = localStorage.getItem('cart');
const cartProducts = ref(cartJSON ? (JSON.parse(cartJSON) as CartProductType[]) : []);
const totalPriceString = ref('');
const products = ref<ProductType[]>([]);

const calcTotalPriceString = (cartProducts: CartProductType[], products: ProductType[]) => {
    return toPriceString(
        cartProducts.reduce(
            (acc, {id, amount}) => (acc + ((products.find(product => (product._id === id))?.price ?? 0) * amount)),
            0,
        )
    );
}

watch(
    [cartProducts],
    () => (totalPriceString.value = calcTotalPriceString(cartProducts.value, products.value)),
);

fetchProducts({ids: cartProducts.value.map(({id}) => id)}).then(res => {
    products.value = res;
    cartProducts.value = cartProducts.value.filter(({id}) => products.value.some(({_id}) => (_id === id)));
    localStorage.setItem('cart', JSON.stringify(cartProducts.value));
    totalPriceString.value = calcTotalPriceString(cartProducts.value, products.value);
});

const empty = () => {
    if(!confirm("Tem certeza que deseja esvaziar o carrinho?")) return;
    cartProducts.value = [];
    localStorage.removeItem('cart');
}

const remove = (id: number) => {
    cartProducts.value.splice(cartProducts.value.findIndex(product => (product.id === id)), 1);
    localStorage.setItem("cart", JSON.stringify(cartProducts.value));
    totalPriceString.value = calcTotalPriceString(cartProducts.value, products.value);
}

const changeAmount = ({id, amount}: CartProductType) => {
    const cartProduct = cartProducts.value.find(p => (p.id === id));
    if(!cartProduct) return;
    cartProduct.amount = amount;
    localStorage.setItem("cart", JSON.stringify(cartProducts.value));
    totalPriceString.value = calcTotalPriceString(cartProducts.value, products.value);
}

const findProduct = (id: number) => products.value.find(product => (product._id === id));
</script>

<template>
    <div class="container">
        <h1>Carrinho</h1>
        <section v-if="products.length">
            <div class="items">
                <CartItem
                    v-for="{id, amount} in cartProducts"
                    :key="id"
                    v-bind="findProduct(id)"
                    :amount="amount"
                    @removeItem="remove"
                    @amountChanged="changeAmount"
                />
            </div>
            <div class="total">
                <h2>Total: {{ totalPriceString }}</h2>
                <RouterLink class="button" to="/pedido">Próximo</RouterLink>
            </div>
        </section>
        <section v-else>Nenhum produto no carrinho</section>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem 2rem;
    > section {
        margin-top: 1rem;
        .items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .total {
            margin-top: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            .button {
                flex-grow: 1;
            }
        }
    }
    @media (min-width: 769px) {
        margin: 1rem 5rem;
    }
    @media (min-width: 1025px) {
        margin: 1rem 10rem;
    }
    @media (min-width: 1441px) {
        margin: 1rem 15rem;
    }
}
</style>