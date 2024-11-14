import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Carousel } from 'primevue';
import PrimeVue from 'primevue/config';

const app = createApp(App)

app.use(PrimeVue)
app.component('Carousel', Carousel);

app.use(router)

app.mount('#app')
