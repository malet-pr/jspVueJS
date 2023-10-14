import "/node_modules/primeflex/primeflex.css";
//import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import '@/assets/theme.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import mitt from 'mitt';
import App from './App.vue';

const emitter = mitt()
const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.config.globalProperties.emitter = emitter

app.mount('#app')

