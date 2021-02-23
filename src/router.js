import { createRouter, createWebHashHistory } from "vue-router";
import Elemental from "./view/Elemental.vue";
import Increase from "./view/Increase.vue";

const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Elemental,
    },
    { path: "/increasing-range", component: Increase },
  ],
});

export default route;
