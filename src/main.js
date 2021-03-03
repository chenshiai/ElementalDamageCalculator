import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import route from "./router";
import "vant/lib/index.css";
import { Toast } from "vant";

createApp(App).use(route).use(Toast).mount("#app");
