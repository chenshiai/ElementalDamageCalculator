import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watchEffect } from "vue";
import { ICharacterInfo, IBuffBase } from "@/constants/characters-config/interface.d";

const useCharacterInfo = () => {
  const characterInfo = ref<null | ICharacterInfo>(null);
  const setCharacterInfo = (value: ICharacterInfo) => {
    characterInfo.value = value;
  };
  const constellation = ref<number>(0);
  const setConstellation = (value: number) => {
    constellation.value = value;
  };

  const characterBuffs = ref<IBuffBase[]>();
  watchEffect(() => {
    characterBuffs.value = characterInfo.value?.buffs
      .filter((buff) => {
        if (buff.condition) {
          return buff.condition({ constellation: constellation.value });
        } else {
          return true;
        }
      })
      .map((b) => Object.create(b));
  });

  return {
    characterInfo,
    characterBuffs,
    setCharacterInfo,
    constellation,
    setConstellation,
  };
};

export default useCharacterInfo;
