import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watchEffect } from "vue";
import _ from "lodash";
import { ICharacterInfo, IBuffBase } from "@/types/interface";

const useCharacterInfo = (initData: ICharacterInfo | null = null, cons: number = 0, over: number = 6) => {
  const characterInfo = ref<null | ICharacterInfo>(initData);
  const constellation = ref<number>(cons);
  const overshoot = ref<number>(over);
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
        }) // 对buff进行拷贝，防止后续修改buff影响到原数据
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
    overshoot,
    initCharacterInfo,
  };
};

export default useCharacterInfo;
