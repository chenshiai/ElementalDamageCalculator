import SkillInfo from "./index.vue";
export { SkillInfo };

import { ref } from "vue";

const useSkillInfo = () => {
  const normalLevel = ref(1);
  const skillLevel = ref(1);
  const burstLevel = ref(1);

  function initSkillInfo() {
    normalLevel.value = 1;
    skillLevel.value = 1;
    burstLevel.value = 1;
  }

  return {
    normalLevel,
    skillLevel,
    burstLevel,
    initSkillInfo
  }
};

export default useSkillInfo;