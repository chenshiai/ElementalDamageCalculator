import { ref, watch } from "vue";
import { IBuffBase } from "@/types/interface";

import BuffInfo from "./index.vue";
export { BuffInfo };

import { useStore } from "vuex";

const useBuffInfo = () => {
  const buffs = ref<IBuffBase[]>([]);
  const store = useStore();

  const teamList = store.state.teamBuffs.teamList;
  watch(
    () => teamList,
    () => {
      buffs.value = [];
      teamList.forEach((item) => {
        if (item) {
          item.buffMap.forEach((buffList, name) => {
            buffList.forEach((buff) => {
              const b = Object.create(buff);
              b.label = `【${name}】${buff.label}`;
              buffs.value.push(b);
            });
          });
        }
      });
    },
    { immediate: true, deep: true }
  );

  return { buffs };
};

export default useBuffInfo;
