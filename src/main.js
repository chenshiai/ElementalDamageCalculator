import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import route from './router';

createApp(App).use(route).mount('#app')
