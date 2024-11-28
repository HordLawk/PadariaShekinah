<script setup lang="ts">
import { ref } from 'vue';

const team = [
    {
        image: `${import.meta.env.BASE_URL}/assets/defaultavatar2.jpg`,
        name: 'Dona',
    },
    {
        image: `${import.meta.env.BASE_URL}/assets/defaultavatar2.jpg`,
        name: 'Gerente',
    },
    {
        image: `${import.meta.env.BASE_URL}/assets/defaultavatar2.jpg`,
        name: 'Atendente',
    },
    {
        image: `${import.meta.env.BASE_URL}/assets/defaultavatar2.jpg`,
        name: 'Padeiro',
    },
];


console.log(team);

const showedteam = ref(team);
</script>

<template>
    <section class="sobre-nos-texto-primeira-parte">
        <h1>Sobre Nós</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </section>
    <div class="container">
        <div class="head">
            <h1>Equipe</h1>
        </div>
        <section>
            <div v-for="(team, id) in showedteam" :key="id" class="teamCard">
                <img :src="team.image"/>
                <div>
                    <h2>{{ team.name }}</h2>
                </div>
            </div>
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
            padding: 0rem;
            border-width: 0;
            border-radius: .5rem;
            transition: .3s;
            text-align: left;
        }
        > input::placeholder {
            color: var(--vt-c-divider-dark-1)
        }
        > input.open, input:focus {
            width: 100%;
            padding: .1rem .5rem;
        }
        svg {
            width: 2.5rem;
            fill: var(--color-text);
            cursor: pointer;
        }
        .buttonClose {
            fill: var(--vt-c-black);
        }
    }
    > section {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
    }
    > section .teamCard {
        background-color: var(--color-background-mute);
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        max-width: calc(50% - 0.5rem);
        > img {
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
            max-width: 100%;
        }
        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            margin: .5rem .8rem .5rem .8rem;
            color: var(--color-text)
        }
    }
    @media (min-width: 1025px) {
        margin: 5rem 15rem;
        > section .teamCard {
            max-width: 20rem;
        }
    }
}

.sobre-nos-texto-primeira-parte {
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.5rem;
  > h1 {
    height: 2.5rem;
  }
}
</style>
