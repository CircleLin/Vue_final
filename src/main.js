import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
import router from './router';
import 'swiper/swiper-bundle.css';

const emitter = mitt();
const app = createApp(App);

app.use(router);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
