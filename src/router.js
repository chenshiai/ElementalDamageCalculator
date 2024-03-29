import { createRouter, createWebHashHistory } from "vue-router";
import Elemental from "./view/Elemental.vue";
import Increase from "./view/Increase.vue";
import Question from "./view/Question.vue";
import CloudTeam from "./view/CloudTeam.vue";
import Shield from "./view/shield.vue"

const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Elemental },
    { path: "/shield", component: Shield },
    { path: "/increasing-range", component: Increase },
    { path: "/question-answer", component: Question },
    {
      path: "/cloud-team",
      component: CloudTeam,
    },
  ],
});

export default route;
