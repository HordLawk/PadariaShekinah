<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';

const products = [
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
];
</script>

<template>
    <div class="content">
        <div class="head">
            <h1>Cardápio</h1>
            <IconSearch/>
            <input type="text"/>
        </div>
        <section>
            <div v-for="{image, name, price} in products">
                <img :src="image"/>
                <h2>{{name}}</h2>
                <span>R$ {{price.toFixed(2)}}</span>
            </div>
        </section>
    </div>
</template>

<style scoped>
.content {
    margin: 1rem 2rem;
    .head {
        position: relative;
        height: 2.5rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        * {
            position: absolute;
            top: 0;
            height: 100%;
            text-align: center;
            line-height: 2.5rem;
        }
        svg, input {
            right: 0;
        }
        input {
            width: 0%;
            padding: 0rem;
            border: none;
        }
        svg {
            width: 2.5rem;
        }
    }
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    section div {
        max-width: calc(50vw - 2.5rem);
        background-color: var(--color-background-mute);
        border-radius: .5rem;
        img {
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
            max-width: 100%;
        }
    }
}
</style>