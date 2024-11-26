<script setup lang="ts">
import { ref } from 'vue';

const isDelivery = ref(true);
const name = ref('');
const phone = ref('');
const street = ref('');
const number = ref('');
const complement = ref('');

const sendOrder = () => {
    let message = (
        `*Nome:* ${name.value}\n` +
        `*Telefone:* ${phone.value}\n` +
        `*Modo:* ${isDelivery.value ? 'Entrega' : 'Retirada'}\n`
    );
    if(isDelivery.value){
        message += (
            `*Rua:* ${street.value}\n` +
            `*Número:* ${number.value}\n`
        );
        if(complement.value) message += `*Complemento:* ${complement.value}\n`;
    }
    window.open(`https://wa.me/${''}?text=${encodeURI(message)}`, '_blank');
}
</script>

<template>
    <form class="container" @submit.prevent.stop="sendOrder">
        <h1>Informações</h1>
        <p>Campos com * são obrigatórios</p>
        <div>
            <label for="name">Nome *</label>
            <input type="text" name="name" id="name" placeholder="Pedro" required v-model.trim="name" />
        </div>
        <div>
            <label for="phone">Telefone *</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="(99) 90000-0000"
                pattern="^(\([1-9]{2}\)|[1-9]{2})\s*9?\d{4}-?\d{4}$"
                required
                v-model="phone"
            />
        </div>
        <div class="delivery">
            <div>
                <input type="radio" name="delivery" id="delivery" :value="true" v-model="isDelivery" checked />
                <label for="delivery">Entrega</label>
            </div>
            <div>
                <input type="radio" name="delivery" id="takeout" :value="false" v-model="isDelivery" />
                <label for="takeout">Retirar</label>
            </div>
        </div>
        <template v-if="isDelivery">
            <div>
                <label for="street">Rua *</label>
                <input type="text" name="street" id="street" placeholder="Av. Paulista" required v-model.trim="street"/>
            </div>
            <div>
                <label for="number">Número *</label>
                <input type="number" name="number" id="number" placeholder="82" required v-model="number" />
            </div>
            <div>
                <label for="complement">Complemento</label>
                <input
                    type="text"
                    name="complement"
                    id="complement"
                    placeholder="Bloco B, apto. 1002"
                    v-model.trim="complement"
                />
            </div>
        </template>
        <input type="submit" class="button full" value="Enviar por WhatsApp" />
    </form>
</template>

<style scoped>
.container {
    margin: 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    > div {
        display: flex;
        flex-direction: column;
        label {
            font-size: 1.5rem;
        }
    }
    .delivery {
        flex-direction: row;
        gap: 1rem;
        > div {
            display: flex;
            align-items: baseline;
            gap: .2rem;
            > input {
                width: 1rem;
                height: 1rem;
                accent-color: var(--color-primary);
            }
            > input:checked{
                accent-color: var(--color-secundary);
            }
        }
    }
    > p {
        color: var(--vt-c-red);
    }
    .button {
        background-color: #25d366;
        border: none;
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
</style>