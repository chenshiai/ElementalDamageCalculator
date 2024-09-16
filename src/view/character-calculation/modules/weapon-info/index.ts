import WeaponInfo from "./index.vue";
export { WeaponInfo };

import { ref } from "vue";

const useWeanponInfo = () => {
  const weapon = ref(null);
  const affix = ref(1);

  const setWeapon = (value) => {
    weapon.value = value;
  };

  const setAffix = (value) => {
    affix.value = value;
  };

  return {
    weapon,
    affix,
    setWeapon,
    setAffix
  }

};

export default useWeanponInfo;