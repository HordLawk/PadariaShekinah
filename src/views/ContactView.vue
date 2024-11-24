<script setup lang="ts">
import { ref } from 'vue';

const mensagem = ref('');
const nome = ref('');
const telefone = ref('(99) 90000-0000'); 
const successMessage = ref(false);

const handleFormSubmit = () => {
  if (!mensagem.value || !telefone.value) {
    alert('Mensagem e Telefone são obrigatórios!');
    return;
  }

  if (telefone.value === '(99) 90000-0000') {
    alert('Telefone inválido!');
    return;
  }

  successMessage.value = true;

  mensagem.value = '';
  nome.value = '';
  telefone.value = '(99) 90000-0000';
};

const hideSuccessMessage = () => {
  setTimeout(() => {
    successMessage.value = false;
  }, 2000);
};
</script>

<template>
  <section>
    <h2>SOBRE NÓS</h2>
    <p>Campos com * são obrigatórios</p>
  </section>
  <section>
    <h1>Mensagem *</h1>
    <textarea v-model="mensagem"></textarea>
  </section>
  <section>
    <h1>Nome</h1>
    <textarea class="contato-textarea-curto" v-model="nome"></textarea>
  </section>
  <section>
    <h1>Telefone *</h1>
    <textarea class="contato-textarea-curto" v-model="telefone">(99) 90000-0000</textarea>
  </section>
<div>
    <div class="button" @click="handleFormSubmit">Enviar</div>
</div>
  <div v-if="successMessage" class="success-message" @transitionend="hideSuccessMessage">
    Dados enviados com sucesso!
  </div>
</template>

<style scoped>

.contato-textarea-curto{
    min-height: auto;
}

section {
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.5rem;
}

section > p {
  font-size: 1.3rem;
  text-align: justify;
  color: #9b111e;
}

textarea {
  resize: none;
  min-height: 100px;
  width: 100%;
  background: transparent;
  color: white;
  border: 1px solid #ffffff;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

textarea:focus {
  background-color: #ffffff;
  color: #000000;
  border-color: #9b111e;
  outline: none;
}

.button {
  background-color: #EA1D2C;
  border-radius: .5rem;
  font-weight: 500;
  color: var(--vt-c-text-dark-1);
  font-size: 1.3rem;
  padding: .2rem 1rem;
  line-height: 2rem;
  display: inline-block;
  margin: 1rem auto;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>