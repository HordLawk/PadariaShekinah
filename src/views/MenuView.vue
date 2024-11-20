<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import { ref, useTemplateRef } from 'vue';

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
const isSearchOpen = ref(false);
const showedProducts = ref(products);
const searchQuery = ref('');
const searchInput = useTemplateRef('searchInput');

const filterSearch = () => {
    showedProducts.value = (
        searchQuery.value
        ? showedProducts.value.filter(p => p.name.toLocaleLowerCase().startsWith(searchQuery.value.toLocaleLowerCase()))
        : products
    );
}
const toggleSearch = (open: boolean) => {
    isSearchOpen.value = open;
    searchInput.value?.focus();
}
</script>

<template>
    <div class="container">
        <div class="head">
            <h1>Cardápio</h1>
            <IconSearch v-if="!isSearchOpen" @click="toggleSearch(true)"/>
            <input
                type="text"
                :class="{open: isSearchOpen}"
                v-model="searchQuery"
                @input="filterSearch"
                placeholder="Nome do produto"
                ref="searchInput"
            />
            <IconClose v-if="isSearchOpen" class="buttonClose" @click="toggleSearch(false)"/>
        </div>
        <section>
            <RouterLink v-for="(product, id) in showedProducts" :to="{name: 'produto', params: {id}}">
                <div class="productCard">
                    <img :src="product.image"/>
                    <div>
                        <h2>{{product.name}}</h2>
                        <p>R$ {{product.price.toFixed(2)}}</p>
                    </div>
                </div>
            </RouterLink>
        </section>
    </div>
</template>

<style scoped>
.container {
    margin: 1rem 2rem;
    .head {
        position: relative;
        height: 2.5rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        > * {
            position: absolute;
            top: 0;
            height: 100%;
            text-align: center;
            line-height: 2.5rem;
        }
        svg, > input {
            right: 0;
        }
        > input {
            width: 0%;
            padding: 0rem;
            border-width: 0;
            border-radius: .5rem;
            transition: .3s;
            text-align: left;
        }
        > input::placeholder {
            color: var(--vt-c-divider-dark-1)
        }
        > input.open {
            width: 100%;
            padding: .1rem .5rem;
        }
        svg {
            width: 2.5rem;
        }
        .buttonClose {
            fill: var(--color-primary)
        }
    }
    > section {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
    }
    > section > a {
        max-width: calc(50% - 0.5rem);
    }
    > section .productCard {
        background-color: var(--color-background-mute);
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        > img {
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
            max-width: 100%;
        }
        > div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            margin: .5rem .8rem .5rem .8rem;
            color: var(--color-text)
        }
    }
}
</style>