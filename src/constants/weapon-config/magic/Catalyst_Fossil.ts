import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 祭礼残章 */
export const Catalyst_Fossil = createWeapon(
  {
    name: "祭礼残章",
    enkaId: 14403,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Fossil_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 221,
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1] + "%";
    let b = [30, 26, 22, 19, 16][affix - 1];
    return {
      title: "气定神闲",
      text: highlight`元素战技造成伤害时，有${a}的概率重置该技能的冷却时间，该效果每${b}秒只能触发一次。`,
    };
  }
);
