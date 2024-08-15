import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from '@/router/index.js';
import VueSweetalert2 from 'vue-sweetalert2';
import '@/assets/css/index.css';
import imageBackground from '@/directives/imageBackground.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import SwalService from '@/helper/sweetalert.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue'
import apiService from '@/apiService';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueSweetalert2);

app.directive('background', imageBackground);
const BASE_URL = import.meta.env.VITE_APP_BASE_URL
apiService.init(BASE_URL)

const swalService = new SwalService(app.config.globalProperties.$swal);
app.provide('swalService', swalService);
app.provide('apiService', apiService);

app.mount('#app');
