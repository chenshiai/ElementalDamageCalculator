import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watchEffect } from "vue";
import _ from "lodash";
import { ICharacterInfo, IBuffBase } from "@/types/interface";
import { useStore } from "@/store";

const useCharacterInfo = (initData: ICharacterInfo | null = null, cons: number = 0) => {
  const characterInfo = ref<null | ICharacterInfo>(initData);
  const constellation = ref<number>(cons);
  const characterBuffs = ref<IBuffBase[]>([]);
  const store = useStore();

  watchEffect(() => {
    const currentActiveBuffs = store.state.teamData.currentActiveBuffs;
    const currentEdit = store.state.teamData.currentEdit;

    characterBuffs.value =
      characterInfo.value?.buffs
        .filter((buff) => {
          if (buff.condition) {
            return buff.condition({
              constellation: constellation.value,
              overshoot: characterInfo.value.overshoot || 6,
            });
          } else {
            return true;
          }
        }) // 对buff进行拷贝，防止后续修改buff影响到原数据
        .map((b) => {
          // 读取编辑角色的buff启用情况
          if (currentActiveBuffs[currentEdit]?.[b.label] !== undefined)
            b.enable = currentActiveBuffs[currentEdit][b.label];
          return _.cloneDeep(b);
        }) || [];
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
