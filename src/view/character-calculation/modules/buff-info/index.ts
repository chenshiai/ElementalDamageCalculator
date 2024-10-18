import { ref, watchEffect } from "vue";
import { IBuffBase, ITeamItem } from "@/types/interface";

import BuffInfo from "./index.vue";
export { BuffInfo };

import { useStore } from "vuex";

const useBuffInfo = () => {
  const buffs = ref<IBuffBase[]>([]);
  const store = useStore();

  const stopWatchTeamList = watchEffect(() => {
    buffs.value = [];
    const teamList = store.state.teamBuffs.teamList as ITeamItem[];
    // 元素共鸣触发的buff
    if (teamList.length >= 5) {

    }

    teamList.forEach((item) => {
      if (item) {
        item.buffMap.forEach((buffList, name) => {
          buffList.forEach((buff) => {
            const b = Object.create(buff);
            b.label = `[${name}]${buff.label}`;
            buffs.value.push(b);
          });
        });
      }
    });
  })

  return { buffs, stopWatchTeamList };
};

export default useBuffInfo;
