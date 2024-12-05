<script setup lang="ts">
import type { CartProductType, ProductType } from '@/assets/utils';
import { fetchProducts, toPriceString } from '@/assets/utils';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const product = ref<ProductType | null>(null);
const route = useRoute();
const cartJSON = localStorage.getItem('cart');
const cartProducts = ref(cartJSON ? (JSON.parse(cartJSON) as CartProductType[]) : []);
const id = parseInt(route.params.id.toString());
const isInCart = ref(cartProducts.value.some(p => (p.id === id)));

fetchProducts({ids: [id]}).then(res => (product.value = res[0]));

const addToCart = () => {
    cartProducts.value.push({id, amount: 1});
    isInCart.value = true;
    localStorage.setItem("cart", JSON.stringify(cartProducts.value));
}
</script>

<template>
    <div class="container">
        <img :src="product?.image ?? 'https://placehold.co/500x600'" :alt="product?.name ?? ''"/>
        <div>
            <h1>{{ product?.name ?? '' }}</h1>
            <h2>{{ toPriceString(product?.price ?? 0) }}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <button v-if="isInCart" class="full" disabled>Produto no carrinho</button>
            <button v-else class="full" @click="addToCart">Adicionar ao carrinho</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem 2rem;
    > img {
        max-width: 100%;
        min-width: 0;
        aspect-ratio: 1/1;
        border-radius: .5rem;
        object-fit: cover;
    }
    @media (min-width: 769px) {
        margin: 5rem 5rem;
        display: flex;
        gap: 1.5rem;
        > * {
            width: 100%;
            flex-grow: 1;
        }
    }
    @media (min-width: 1025px) {
        margin: 5rem 10rem;
        gap: 3rem;
    }
    @media (min-width: 1441px) {
        margin: 5rem 20rem;
        gap: 5rem;
    }
}
</style>