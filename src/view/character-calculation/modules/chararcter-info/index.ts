import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watch, watchEffect } from "vue";
import _ from "lodash";
import { ICharacterInfo, IBuffBase } from "@/types/interface";

const useCharacterInfo = (initData: ICharacterInfo | null = null, cons: number = 0) => {
  const characterInfo = ref<null | ICharacterInfo>(initData);
  const constellation = ref<number>(cons);
  const levelUp = ref<number>(0);

  const characterBuffs = ref<IBuffBase[]>([]);

  const calculateStat = (baseStat: number, limitStat: number) => {
    if (characterInfo.value?.level <= 90 || !characterInfo.value?.limitData) return baseStat;
    return levelUp.value === 1 ? Math.round((baseStat + limitStat) / 2) : levelUp.value === 2 ? limitStat : baseStat;
  };

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

    if (characterInfo.value && characterInfo.value.level >= 90) {
      characterInfo.value.level = [90, 95, 100][levelUp.value];
      characterInfo.value.baseHP = characterInfo.value.limitData[levelUp.value].baseHP;
      characterInfo.value.baseATK = characterInfo.value.limitData[levelUp.value].baseATK;
      characterInfo.value.baseDEF = characterInfo.value.limitData[levelUp.value].baseDEF;
    }
  });

  function initCharacterInfo() {
    characterBuffs.value = [];
    characterInfo.value = null;
    constellation.value = 0;
    levelUp.value = 0;
  }

  return {
    characterInfo,
    characterBuffs,
    constellation,
    levelUp,
    initCharacterInfo,
  };
};

export default useCharacterInfo;
