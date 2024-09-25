import { IWeaponInfo, IBuffBase } from "@/types/interface";
import WeaponInfo from "./index.vue";
export { WeaponInfo };

import { ref, watchEffect } from "vue";

const useWeanponInfo = () => {
  const weapon = ref<IWeaponInfo>(null);
  const affix = ref(1);
  const weaponBuffs = ref<IBuffBase[]>([]);

  watchEffect(() => {
    weaponBuffs.value = weapon.value?.getBuffs(affix.value).map((b) => Object.create(b)) || [];
  });

  return {
    weapon,
    weaponBuffs,
    affix,
  };
};

export default useWeanponInfo;
