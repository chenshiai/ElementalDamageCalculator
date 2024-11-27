import { ref, watchEffect } from "vue";
import _ from 'lodash';
import { IBuffExtra, ITeamItem } from "@/types/interface";
import { ElementType } from "@/types/enum";

import BuffInfo from "./index.vue";
export { BuffInfo };

import { useStore } from "vuex";
import { CryoResonance, DendroResonance, DendroResonance1, DendroResonance2, HydroResonance, PyroResonance } from "@/constants/characters-config/buffs";

function countCharacterElements(teamList: ITeamItem[]): Map<ElementType, number> {
  const elementCount = new Map<ElementType, number>();

  for (const item of teamList) {
    if (item) {
      const element = item.calculation.panel.element;
      const currentCount = elementCount.get(element) || 0;
      elementCount.set(element, currentCount + 1);
    }
  }
  

  return elementCount;
}

const useBuffInfo = () => {
  const buffs = ref<IBuffExtra[]>([]);
  const store = useStore();

  const stopWatchTeamList = watchEffect(() => {
    buffs.value = [];
    const teamList = store.state.teamBuffs.teamList as ITeamItem[];

    // 元素共鸣触发的buff
    if (teamList.length >= 5) {
      const elementCount = countCharacterElements(teamList);
      if (elementCount.get(ElementType.Pyro) >= 2) {
        buffs.value.push(PyroResonance)
      }
      if (elementCount.get(ElementType.Dendro) >= 2) {
        buffs.value.push(DendroResonance)
        buffs.value.push(DendroResonance1)
        buffs.value.push(DendroResonance2)
      }
      if (elementCount.get(ElementType.Cryo) >= 2) {
        buffs.value.push(CryoResonance)
      }
      if (elementCount.get(ElementType.Hydro) >= 2) {
        buffs.value.push(HydroResonance)
      }
    }

    teamList.forEach((item) => {
      if (item) {
        item.buffMap.forEach((buffList, name) => {
          buffList.forEach((buff) => {
            const b = _.cloneDeep(buff);
            b.label = `[${name}]${buff.label}`;
            buffs.value.push(b);
          });
        });
      }
    });
  });


  return { buffs, stopWatchTeamList };
};

export default useBuffInfo;
