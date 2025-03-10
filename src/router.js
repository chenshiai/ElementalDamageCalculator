import { createRouter, createWebHashHistory } from "vue-router";
import Elemental from "./view/elemental/elemental.vue";
import SingleCalculation from "./view/single-calculation/single-calculation.vue";
import Question from "./view/Question.vue";
import CloudTeam from "./view/cloud-team/cloud-team.vue";
import CloudTeam2 from "./view/cloud-team2/cloud-team.vue";
import Shield from "./view/shield.vue";
import PlayInfo from "./view/PlayInfo.vue";
import CharacterCalculation from "./view/character-calculation/character-calculation.vue";
import Home from './view/home/home.vue'

const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/elemental", component: Elemental },
    { path: "/shield", component: Shield },
    { path: "/increasing-range", component: SingleCalculation },
    { path: "/question-answer", component: Question },
    {
      path: "/cloud-team",
      component: CloudTeam,
    },
    {
      path: "/cloud-team2",
      component: CloudTeam2,
    },
    {
      path: "/play-info",
      component: PlayInfo,
    },
    {
      path: "/character/:mode",
      name: "character",
      component: CharacterCalculation,
    },
  ],
});

export default route;
