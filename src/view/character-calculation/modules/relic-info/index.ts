import { ref, watchEffect } from "vue";
import _ from "lodash";
import RelicInfo from "./index.vue";
export { RelicInfo };
import { IBuffBase } from "@/types/interface";
import relicLibrary from "@/constants/relics-config/relic";
import { IRelicItem } from "@/constants/relics-config/relic-class";

export interface IRelicSuitText {
  name: string;
  texts: string[];
}
const useRelicInfo = (initData: IRelicItem[] = new Array(5).fill(null)) => {
  /** 圣遗物列表 */
  const relicList = ref<IRelicItem[]>(initData);

  /** 套装buff */
  const relicBuffs = ref<IBuffBase[]>([]);
  const relicSuitTexts = ref<IRelicSuitText[]>([]);

  const checkRelicNumber = (hash, num) => {
    const targetRelic = relicLibrary.find((relic) => {
      return relic.setNameTextMapHash === hash;
    });
    if (num === 2) {
      relicSuitTexts.value.push({
        name: targetRelic.name,
        texts: [targetRelic.suit2],
      });

      targetRelic.buffs.suit2.forEach((element) => {
        const suit2 = _.cloneDeep(element);
        relicBuffs.value.push(suit2);
      });
    }
    if (num === 4) {
      relicSuitTexts.value
        .find((item) => {
          return item.name === targetRelic.name;
        })
        .texts.push(targetRelic.suit4);

      targetRelic.buffs.suit4.forEach((element) => {
        const suit4 = _.cloneDeep(element);
        relicBuffs.value.push(suit4);
      });
    }
  };

  watchEffect(() => {
    relicBuffs.value = [];
    relicSuitTexts.value = [];
    const countMap = {};

    // 计算每个 setNameTextMapHash 的出现次数
    relicList.value.forEach((relic) => {
      const hash = relic?.setNameTextMapHash;
      if (!hash) return;
      if (countMap[hash]) {
        countMap[hash] += 1;
        checkRelicNumber(hash, countMap[hash]);
      } else {
        countMap[hash] = 1;
      }
    });
  });

  function initRelicInfo() {
    relicList.value = new Array(5).fill(null);
    relicBuffs.value = [];
    relicSuitTexts.value = [];
  }

  return {
    relicList,
    relicBuffs,
    relicSuitTexts,
    initRelicInfo,
  };
};

export default useRelicInfo;
