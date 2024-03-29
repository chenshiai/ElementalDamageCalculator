import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import route from "./router";
import "vant/lib/index.css";
import store from "./store";
import "default-passive-events";

createApp(App).use(route).use(store).mount("#app");
