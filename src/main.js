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
import { calDB, relicDB } from "./constants/db";
import VConsole from "vconsole";

if (process.env.NODE_ENV !== "production") {
  new VConsole();
}

db.createStore(calDB.storeName, calDB.keyPath);
db.createStore(relicDB.storeName, relicDB.keyPath, relicDB.autoIncrement);

createApp(App)
.use(BackTop)
.use(route)
.use(store)
.use(Lazyload)
.mount("#app");
