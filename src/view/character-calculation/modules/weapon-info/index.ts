import { IWeaponInfo, IBuffBase } from "@/constants/characters-config/interface";
import WeaponInfo from "./index.vue";
export { WeaponInfo };

import { ref, watchEffect } from "vue";

const useWeanponInfo = () => {
  const weapon = ref<IWeaponInfo>(null);
  const affix = ref(1);
  const weaponBuffs = ref<IBuffBase[]>();

  watchEffect(() => {
    weaponBuffs.value = weapon.value?.getBuffs(affix.value).map((b) => Object.create(b));
  });
  
  const setWeapon = (value) => {
    weapon.value = value;
  };

  const setAffix = (value) => {
    affix.value = value;
  };

  return {
    weapon,
    weaponBuffs,
    affix,
    setWeapon,
    setAffix
  }

};

export default useWeanponInfo;