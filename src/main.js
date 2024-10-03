import { createApp } from "vue";
import { Lazyload  } from 'vant';
import App from "./App.vue";
import "vant/lib/index.css";
import "./font.css";
import "./index.css";
import route from "./router";
import store from "./store";
import "default-passive-events";

createApp(App).use(route).use(store).use(Lazyload).mount("#app");
