<script setup lang="ts">
import type { ProductType, CartProductType } from '@/assets/utils.js';
import CartItem from '@/components/CartItem.vue';

const cartConfirmation = defineModel<boolean>();
const {price, products, cart} = defineProps<{
    price: string,
    products: ProductType[],
    cart: CartProductType[],
}>();
defineEmits<{
    (e: 'removeItem', id: number): void,
    (e: 'changeAmount', item: CartProductType): void,
}>();

const findProduct = (id: number) => products.find(product => (product._id === id));
</script>

<template>
    <div class="container">
        <h1>Carrinho</h1>
        <section role="region" v-if="cart.length && products.length">
            <div class="items">
                <CartItem
                    v-for="{id, amount} in cart"
                    :key="id"
                    v-bind="findProduct(id)"
                    :amount="amount"
                    @removeItem="$emit('removeItem', id)"
                    @amountChanged="newAmount => $emit('changeAmount', {id, amount: newAmount})"
                />
            </div>
            <div class="total">
                <h2>Total: {{ price }}</h2>
                <button @click="cartConfirmation = false">Próximo</button>
            </div>
        </section>
        <section role="region" v-else>Nenhum produto no carrinho</section>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem 2rem;
    h1 {
        line-height: 2.5rem;
    }
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
            > button {
                flex-grow: 1;
            }
        }
    }
    @media (min-width: 769px) {
        margin: 5rem 5rem;
    }
    @media (min-width: 1025px) {
        margin: 5rem 10rem;
    }
    @media (min-width: 1441px) {
        margin: 5rem 15rem;
    }
}
</style>