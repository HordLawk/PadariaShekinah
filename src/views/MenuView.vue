<script setup lang="ts">
import type { ProductType } from '@/assets/utils';
import { fetchProducts, toPriceString } from '@/assets/utils';
import IconClose from '@/components/icons/IconClose.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import { ref, useTemplateRef } from 'vue';

const products = ref<ProductType[]>([]);
const isSearchOpen = ref(false);
const searchQuery = ref('');
const searchInput = useTemplateRef('searchInput');

fetchProducts({}).then(res => (products.value = res));

const filterSearch = () => fetchProducts({query: searchQuery.value}).then(res => (products.value = res));

const toggleSearch = (open: boolean) => {
    isSearchOpen.value = open;
    if(open) searchInput.value?.focus();
}
</script>

<template>
    <div class="container">
        <div class="head">
            <h1>Cardápio</h1>
            <IconSearch
                v-if="!isSearchOpen"
                class="clickableIcon"
                tabindex="0"
                @click="toggleSearch(true)"
                @keyup.space.enter="toggleSearch(true)"
            />
            <input
                type="text"
                :class="{open: isSearchOpen}"
                v-model="searchQuery"
                @input="filterSearch"
                placeholder="Nome do produto"
                ref="searchInput"
            />
            <IconClose
                v-if="isSearchOpen"
                class="clickableIcon"
                tabindex="0"
                @click="toggleSearch(false)"
                @keyup.space.enter="toggleSearch(false)"
            />
        </div>
        <section role="region">
            <RouterLink
                v-for="{_id, name, image, price} in products"
                :key="_id"
                :to="{name: 'produto', params: {id: _id}}"
            >
                <div class="productCard">
                    <img :src="image" :alt="name"/>
                    <div>
                        <h2>{{name}}</h2>
                        <p>{{toPriceString(price)}}</p>
                    </div>
                </div>
            </RouterLink>
        </section>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem 2rem;
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
            text-align: left;
            padding: 0;
        }
        > input.open, input:focus {
            width: 100%;
            padding: .1rem .5rem;
        }
        svg {
            width: 2.5rem;
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
        transition: .3s;
        height: 100%;
        > img {
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
            max-width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
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
    > section .productCard:hover {
        background-color: var(--color-border);
        transform: translate(0, -.5rem);
    }
    @media (min-width: 769px) {
        margin: 5rem 5rem;
        > section .productCard {
            max-width: 20rem;
        }
    }
    @media (min-width: 1025px) {
        margin: 5rem 10rem;
    }
    @media (min-width: 1441px) {
        margin: 5rem 15rem;
    }
}
</style>