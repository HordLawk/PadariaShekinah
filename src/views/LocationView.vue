<script setup lang="ts">
</script>

<template>
  <section>
    <h2>Localização</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  </section>
  <section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.838979729145!2d-41.96103412390693!3d-18.849826082308695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb1a7020e394baf%3A0x740d2e6a90256d67!2sAv.%20Veneza%2C%20834%20-%20Gr%C3%A3-Duquesa%2C%20Gov.%20Valadares%20-%20MG%2C%2035057-730!5e0!3m2!1spt-BR!2sbr!4v1732463827796!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
</template>

<style scoped>
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
}

iframe{
  width: 100%;
}
</style>
