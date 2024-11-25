<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const {image, name, price} = [
    {
        image: 'https://placehold.co/400/fdd/000',
        name: 'Bolo',
        price: 100,
    },
    {
        image: 'https://placehold.co/400/dfd/000',
        name: 'Casadinho',
        price: 50,
    },
    {
        image: 'https://placehold.co/400/ddf/000',
        name: 'Hamburguer',
        price: 25,
    },
    {
        image: 'https://placehold.co/400/ffd/000',
        name: 'Palha italiana',
        price: 5,
    },
][parseInt(route.params.id.toString())];
</script>

<template>
    <div class="container">
        <img :src="image"/>
        <div>
            <h1>{{ name }}</h1>
            <h2>R$ {{ price.toFixed(2) }}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <div class="button full">Adicionar ao carrinho</div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem 2rem;
    > img {
        max-width: 100%;
        aspect-ratio: 1/1;
        border-radius: .5rem;
        object-fit: cover;
    }
    @media (min-width: 769px) {
        margin: 5rem 3rem;
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
        margin: 5rem 25rem;
        gap: 5rem;
    }
}
</style>