import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watchEffect } from "vue";
import _ from "lodash";
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
            return buff.condition({
              baseHP: characterInfo.value.baseHP,
              constellation: constellation.value,
              overshoot: characterInfo.value.overshoot || 6,
            });
          } else {
            return true;
          }
        })
        .map((b) => _.cloneDeep(b)) || [];
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
