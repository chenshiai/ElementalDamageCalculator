import { IWeaponInfo, IBuffBase } from "@/types/interface";
import WeaponInfo from "./index.vue";
import _ from 'lodash';
export { WeaponInfo };

import { ref, watchEffect } from "vue";

const useWeanponInfo = (initData: IWeaponInfo | null = null, aff: number = 1) => {
  const weapon = ref<IWeaponInfo>(initData);
  const affix = ref(aff);
  const weaponBuffs = ref<IBuffBase[]>([]);

  watchEffect(() => {
    weaponBuffs.value = weapon.value?.getBuffs?.(affix.value).map((b) => _.cloneDeep(b)) || [];
  });

  function initWeaponInfo() {
    weapon.value = null;
    affix.value = 1;
    weaponBuffs.value = [];
  }

  return {
    weapon,
    weaponBuffs,
    affix,
    initWeaponInfo,
  };
};

export default useWeanponInfo;
