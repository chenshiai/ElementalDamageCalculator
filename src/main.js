import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import route from './router';
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App).use(route).use(Vant).mount('#app')
