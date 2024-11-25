<script setup lang="ts">
import Carousel from 'primevue/carousel';

const products = [
    {
        image: 'https://placehold.co/600x400/fdd/000',
        name: 'Bolo',
        price: 100,
    },
    {
        image: 'https://placehold.co/600x400/dfd/000',
        name: 'Casadinho',
        price: 50,
    },
    {
        image: 'https://placehold.co/600x400/ddf/000',
        name: 'Hamburguer',
        price: 25,
    },
    {
        image: 'https://placehold.co/600x400/ffd/000',
        name: 'Palha italiana',
        price: 5,
    },
];
</script>

<template>
    <Carousel :value="products" :numVisible="1">
        <template #item="slotProps">
            <RouterLink :to="{name: 'produto', params: {id: slotProps.index}}">
                <img :src="slotProps.data.image"/>
            </RouterLink>
        </template>
    </Carousel>
    <section>
        <p>Conheça nossos deliciosos produtos!</p>
        <RouterLink to="/cardapio"><div class="button">Visite o cardápio</div></RouterLink>
    </section>
    <svg height="2"><path d="M0 1H1980" stroke-dasharray="20 20"/></svg>
    <section>
        <h2>SOBRE NÓS</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
    </section>
</template>

<style scoped>
section {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    > p {
        font-size: 1.3rem;
        text-align: justify;
    }
    @media (min-width: 769px) {
        margin: 1rem 15rem;
    }
}
svg {
    stroke: var(--color-text);
    width: 100%;
}
</style>

<style>
.p-carousel-prev-button {
    margin-right: -2rem;
    color: black !important;
    z-index: 100;
    svg {
        width: 2rem;
        height: 2rem;
    }
}
.p-carousel-next-button {
    margin-left: -2rem;
    color: black !important;
    z-index: 100;
    svg {
        width: 2rem;
        height: 2rem;
    }
}
.p-carousel img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
}
</style>