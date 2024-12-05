<script setup lang="ts">
import IconDelete from '@/components/icons/IconDelete.vue';
import { toPriceString } from '../assets/utils.js';
import IconRemove from './icons/IconRemove.vue';
import IconAdd from './icons/IconAdd.vue';

const {_id, name, image, price, amount} = defineProps<{
    _id?: number,
    name?: string,
    image?: string,
    price?: number,
    amount: number,
}>();
const emit = defineEmits<{
    (e: 'removeItem'): void,
    (e: 'amountChanged', amount: number): void,
}>();

const remove = () => {
    if(confirm("Tem certeza que deseja remover o produto do carrinho?")) emit('removeItem');
}

const incrementAmount = (inc: number) => {
    const newAmount = amount + inc;
    if(newAmount < 1) return remove();
    emit('amountChanged', newAmount);
}
</script>

<template>
    <div class="item">
        <RouterLink :to="`/produto/${_id ?? 0}`">
            <img :src="image ?? 'https://placehold.co/500x600'" :alt="name ?? ''"/>
        </RouterLink>
        <div>
            <div>
                <RouterLink :to="`/produto/${_id ?? 0}`"> {{ name ?? '' }} </RouterLink>
                <IconDelete class="clickableIcon" tabindex="0" @click="remove" @keyup.enter.space="remove"/>
            </div>
            <div>
                <h3>{{ toPriceString(price ?? 0) }}</h3>
                <div class="amount">
                    <IconRemove
                        class="clickableIcon"
                        tabindex="0"
                        @click="incrementAmount(-1)"
                        @keyup.enter.space="incrementAmount(-1)"
                    />
                    <h3>{{ amount }}</h3>
                    <IconAdd
                        class="clickableIcon"
                        tabindex="0"
                        @click="incrementAmount(1)"
                        @keyup.enter.space="incrementAmount(1)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    height: 7rem;
    background-color: var(--color-background-mute);
    border-radius: .5rem;
    gap: 1rem;
    > a > img {
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: .5rem;
        object-fit: cover;
    }
    > div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: .5rem;
            .clickableIcon {
                min-width: 24px;
            }
            > a {
                font-size: 1.5rem;
                color: var(--color-text);
                flex-shrink: 1;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            > a:hover {
                color: var(--vt-c-yellow);
            }
            .amount {
                display: flex;
                align-items: center;
                gap: .5rem;
            }
        }
    }
    @media (min-width: 769px) {
        height: 8rem;
    }
    @media (min-width: 1025px) {
        height: 9rem;
    }
    @media (min-width: 1441px) {
        height: 10rem;
    }
}
</style>