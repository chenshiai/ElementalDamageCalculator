import { createRouter, createWebHashHistory } from "vue-router";
import Elemental from "./view/Elemental.vue";
import Increase from "./view/Increase.vue";
import Question from "./view/Question.vue";

const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Elemental },
    { path: "/increasing-range", component: Increase },
    { path: "/question-answer", component: Question },
  ],
});

export default route;
