import { IWeaponInfo, IBuffBase, ICalculatorValue } from "@/types/interface";
import WeaponInfo from "./index.vue";
export { WeaponInfo };

import { ref, watchEffect } from "vue";
import { AppendProp } from "@/types/enum";
import calculateBuffs from "@/utils/calculate/calculate-buffs";
import { calculateWeaponSubStat } from "@/utils/calculate/calculate-equip";

const useWeanponInfo = () => {
  const weapon = ref<IWeaponInfo>(null);
  const affix = ref(1);
  const weaponBuffs = ref<IBuffBase[]>([]);

  watchEffect(() => {
    weaponBuffs.value = weapon.value?.getBuffs(affix.value).map((b) => Object.create(b)) || [];
  });

  const calculateWeapon = (data: ICalculatorValue): Partial<ICalculatorValue> => {
    if (weapon.value) {
      const baseATK = weapon.value.weaponStats.find((i) => i.appendPropId === AppendProp.BASE_ATTACK).statValue;
      return {
        baseATK: data.baseATK + baseATK,
        ...calculateWeaponSubStat(data, weapon.value),
        ...calculateBuffs(data, weaponBuffs.value)
      };
    } else {
      return data;
    }
  };

  return {
    weapon,
    weaponBuffs,
    affix,
    calculateWeapon,
  };
};

export default useWeanponInfo;
