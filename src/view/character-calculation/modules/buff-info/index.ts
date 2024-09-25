import { ref } from "vue";
import BuffInfo from "./index.vue";
import { IBuffBase, ICharacterInfo, IWeaponInfo } from "@/types/interface";
export { BuffInfo };

const useRelicInfo = () => {
  const buffs = ref<IBuffBase[]>([]);
  return { buffs };
};

export default useRelicInfo;
