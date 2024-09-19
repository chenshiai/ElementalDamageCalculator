import { ref } from "vue";
import RelicInfo from "./index.vue";
export { RelicInfo };
import { IRelicItem } from "@/constants/characters-config/relic-class";
const useRelicInfo = () => {
  const relics = ref<IRelicItem[]>(new Array(5).fill(null));
  const setRelics = (value: IRelicItem[]) => {
    relics.value = value;
  }
  
  return {
    relics,
    setRelics,
  }
}

export default useRelicInfo;