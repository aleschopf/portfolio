import { createApp } from 'vue'
import './assets/tailwind.css'
import router from './router'
import App from './App.vue'
import Lara from '@primevue/themes/lara';
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
    theme: {
        preset: Lara,
        options: {
            prefix: 'p',
            cssLayer: false,
            darkModeSelector: '.dark'
        },
    }
});

app.mount('#app')
