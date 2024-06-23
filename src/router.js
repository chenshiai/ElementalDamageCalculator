import { createRouter, createWebHashHistory } from "vue-router";
import Elemental from "./view/elemental/elemental.vue";
import SingleCalculation from "./view/single-calculation/single-calculation.vue";
import Question from "./view/Question.vue";
import CloudTeam from "./view/cloud-team/cloud-team.vue";
import Shield from "./view/shield.vue";
import PlayInfo from "./view/PlayInfo.vue";

const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Elemental },
    { path: "/shield", component: Shield },
    { path: "/increasing-range", component: SingleCalculation },
    { path: "/question-answer", component: Question },
    {
      path: "/cloud-team",
      component: CloudTeam,
    },
    {
      path: "/play-info",
      component: PlayInfo,
    }
  ],
});

export default route;
