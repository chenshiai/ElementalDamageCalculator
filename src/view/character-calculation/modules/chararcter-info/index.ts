import CharacterInfo from "./index.vue";
export { CharacterInfo };

import { ref, watchEffect } from "vue";
import { ICharacterInfo, IBuffBase, ICalculatorValue } from "@/types/interface";
import calculateBuffs from "@/utils/calculate/calculate-buffs";

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

  const calculateCharacterModules = (data: ICalculatorValue): Partial<ICalculatorValue> => {
    if (characterInfo.value) {
      return {
        level: characterInfo.value.level,
        constellation: constellation.value,
        baseHP: characterInfo.value.baseHP,
        baseATK: data.baseATK + characterInfo.value.baseATK,
        baseDEF: characterInfo.value.baseDEF,
        ...calculateBuffs(data, characterBuffs.value)
      };
    } else {
      return {};
    }
  }

  return {
    characterInfo,
    characterBuffs,
    constellation,
    calculateCharacterModules,
  };
};

export default useCharacterInfo;
