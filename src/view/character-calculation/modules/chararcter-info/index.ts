import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref } from "vue";
import { ICharacterInfo } from "@/constants/characters-config/interface";

const useCharacterInfo = () => {
  const characterInfo = ref<null | ICharacterInfo>(null);
  const setCharacterInfo = (value: ICharacterInfo) => {
    characterInfo.value = value;
  };
  const constellation = ref<number>(0);
  const setConstellation = (value: number) => {
    constellation.value = value;
  };

  return {
    characterInfo,
    setCharacterInfo,
    constellation,
    setConstellation,
  };
};

export default useCharacterInfo;
