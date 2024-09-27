import SkillInfo from "./index.vue";
export { SkillInfo };

import { ref } from "vue";

const useSkillInfo = () => {
  const normalLevel = ref(1);
  const skillLevel = ref(1);
  const burstLevel = ref(1);

  return {
    normalLevel,
    skillLevel,
    burstLevel
  }
};

export default useSkillInfo;