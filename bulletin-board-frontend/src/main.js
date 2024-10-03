import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000'; // Adjust according to your backend URL

createApp(App)
  .use(router)
  .mount('#app');