import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watchEffect } from "vue";
import { ICharacterInfo, IBuffBase } from "@/types/interface";

const useCharacterInfo = (initData: ICharacterInfo | null = null, cons: number = 0) => {
  const characterInfo = ref<null | ICharacterInfo>(initData);
  const constellation = ref<number>(cons);
  const characterBuffs = ref<IBuffBase[]>([]);

  watchEffect(() => {
    characterBuffs.value =
      characterInfo.value?.buffs
        .filter((buff) => {
          if (buff.condition) {
            return buff.condition({ constellation: constellation.value });
          } else {
            return true;
          }
        })
        .map((b) => Object.create(b)) || [];
  });

  function initCharacterInfo() {
    characterBuffs.value = [];
    characterInfo.value = null;
    constellation.value = 0;
  }

  return {
    characterInfo,
    characterBuffs,
    constellation,
    initCharacterInfo,
  };
};

export default useCharacterInfo;
