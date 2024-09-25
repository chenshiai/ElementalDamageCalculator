import { ref, watchEffect } from "vue";
import RelicInfo from "./index.vue";
export { RelicInfo };
import { IBuffBase } from "@/types/interface";
import relicLibrary from "@/constants/characters-config/relic";
import { IRelicItem } from "@/constants/characters-config/relic-class";

export interface IRelicSuitText {
  name: string;
  texts: string[];
}
const useRelicInfo = () => {
  /** 圣遗物列表 */
  const relicList = ref<IRelicItem[]>(new Array(5).fill(null));

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
      
      const suit2 = Object.create(targetRelic.buffs.suit2);
      relicBuffs.value.push(suit2);
    }
    if (num === 4) {
      const suit4 = Object.create(targetRelic.buffs.suit4);
      relicBuffs.value.push(suit4);

      relicSuitTexts.value
        .find((item) => {
          return item.name === targetRelic.name;
        })
        .texts.push(targetRelic.suit4);
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

  return {
    relicList,
    relicBuffs,
    relicSuitTexts,
  };
};

export default useRelicInfo;
