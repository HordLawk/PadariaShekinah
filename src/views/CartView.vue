<script setup lang="ts">
import type { ProductType, CartProductType } from '@/assets/utils.js';
import CartTab from '@/components/CartTab.vue';
import OrderTab from '@/components/OrderTab.vue';
import { ref, watch } from 'vue';
import { toPriceString, fetchProducts } from '@/assets/utils.js';

const cartConfirmation = ref(true);

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

const removeItem = (id: number) => {
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
</script>

<template>
    <Transition name="slide" mode="out-in">
        <CartTab
            v-if="cartConfirmation"
            v-model="cartConfirmation"
            :price="totalPriceString"
            :products="products"
            :cart="cartProducts"
            @removeItem="removeItem"
            @changeAmount="changeAmount"
        />
        <OrderTab v-else v-model="cartConfirmation" :price="totalPriceString" :products="products" :cart="cartProducts" />
    </Transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition-duration: .15s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(400px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}
</style>