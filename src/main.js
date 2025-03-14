import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './index.js';
import "@/style.css"; // Import global styles


const app = createApp(App);
app.use(router);
app.mount('#app');
