import { createApp } from 'vue';
import mitt from 'mitt';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import card from './views/ProductCard.vue';
import { currency, date, grindText } from './script/util';
import 'bootstrap';
import App from './App.vue';
import router from './router';

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

setLocale('zh_TW');

const emitter = mitt();
const app = createApp(App);

app.component('card', card);
app.use(router);
app.use(VueAxios, axios);
app.use(VueLoading, {
  opacity: 1, color: '#105670', loader: 'dots', width: 64,
});
app.use(VueSweetalert2);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.$filters = {
  currency,
  date,
  grindText,
};
app.mount('#app');
