import { ref } from "vue";
import BuffInfo from "./index.vue";
import { IBuffBase, ICharacterInfo, IWeaponInfo } from "@/types/interface";
export { BuffInfo };

const useRelicInfo = () => {
  const buffs = ref<IBuffBase[]>([]);
  const setBuffs = (value: IBuffBase[]) => {
    buffs.value = value;
  };
  return { buffs, setBuffs };
};

export default useRelicInfo;
