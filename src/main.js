import { createApp } from 'vue';
import mitt from 'mitt';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import card from './views/ProductCard.vue';
import App from './App.vue';
import router from './router';

const emitter = mitt();
const app = createApp(App);

app.component('card', card);
app.use(router);
app.use(VueAxios, axios);
app.use(VueLoading);
app.use(VueSweetalert2);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
