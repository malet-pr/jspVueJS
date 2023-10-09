import "primeicons/primeicons.css";
import "primevue/resources/themes/md-light-indigo/theme.css";

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import mitt from 'mitt';
import App from './App.vue';
import router from './router';

const emitter = mitt()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.config.globalProperties.emitter = emitter
app.mount('#app')

