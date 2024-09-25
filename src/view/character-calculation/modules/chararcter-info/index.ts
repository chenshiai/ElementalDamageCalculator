import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watchEffect } from "vue";
import { ICharacterInfo, IBuffBase } from "@/types/interface";

const useCharacterInfo = () => {
  const characterInfo = ref<null | ICharacterInfo>(null);
  const constellation = ref<number>(0);
  const characterBuffs = ref<IBuffBase[]>([]);

  watchEffect(() => {
    characterBuffs.value = characterInfo.value?.buffs
      .filter((buff) => {
        if (buff.condition) {
          return buff.condition({ constellation: constellation.value });
        } else {
          return true;
        }
      })
      .map((b) => Object.create(b)) || [];
  });

  return {
    characterInfo,
    characterBuffs,
    constellation,
  };
};

export default useCharacterInfo;
