<script setup lang="ts">
import { fetchProducts, type ProductType } from '@/assets/utils';
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

const products = ref<ProductType[]>([{
    _id: 0,
    image: './images/bolo-flores.jpg',
    name: 'Bolo',
    price: 100,
}]);
const responsiveOptions = ref([
    {
        breakpoint: '1439px',
        numVisible: 3,
        numScroll: 3,
    },
    {
        breakpoint: '1023px',
        numVisible: 2,
        numScroll: 2,
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
    },
]);

fetchProducts({}).then(res => (products.value = res));
</script>

<template>
    <Carousel
        :value="products"
        :numVisible="4"
        :numScroll="4"
        :responsive-options="responsiveOptions"
        :autoplayInterval="3000"
        circular
    >
        <template #item="slotProps">
            <RouterLink :to="{name: 'produto', params: {id: slotProps.index}}">
                <img :src="slotProps.data.image"/>
            </RouterLink>
        </template>
    </Carousel>
    <section>
        <p>Conheça nossos deliciosos produtos!</p>
        <RouterLink to="/cardapio"><button tabindex="-1">Visite o cardápio</button></RouterLink>
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
        margin: 1rem 5rem;
    }
    @media (min-width: 1025px) {
        margin: 1rem 10rem;
    }
    @media (min-width: 1441px) {
        margin: 1rem 15rem;
    }
}
svg {
    stroke: var(--color-text);
    width: 100%;
}
</style>

<style>
button.p-carousel-prev-button {
    margin-right: -3rem;
    z-index: 99;
    height: 400px !important;
    background-image: linear-gradient(270deg, rgba(0,0,0,0), rgba(0,0,0,0.9)) !important;
    border-radius: 0 !important;
    top: -3px;
    position: relative;
    color: var(--vt-c-white) !important;
    svg {
        width: 3rem;
    }
}
button.p-carousel-prev-button:hover {
    opacity: 1;
    border-radius: 0;
}
button.p-carousel-next-button {
    margin-left: -3rem;
    z-index: 99;
    height: 400px !important;
    background-image: linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.9)) !important;
    border-radius: 0 !important;
    top: -3px;
    position: relative;
    color: var(--vt-c-white) !important;
    svg {
        width: 3rem;
    }
}
button.p-carousel-next-button:hover {
    opacity: 1;
    border-radius: 0;
}
.p-carousel img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
</style>