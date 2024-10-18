import { createApp } from "vue";
import { Lazyload, BackTop } from "vant";
import App from "./App.vue";
import "vant/lib/index.css";
import "./font.css";
import "./index.css";
import route from "./router";
import store from "./store";
import "default-passive-events";
import db from "./utils/db";
import { calDB } from "./constants/db";
import VConsole from "vconsole";
const vConsole = new VConsole();

db.createStore(calDB.storeName, calDB.keyPath);

createApp(App).use(BackTop).use(route).use(store).use(Lazyload).use(vConsole).mount("#app");
