import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 祭礼剑 */
export const Sword_Fossil = createWeapon(
  {
    name: "祭礼剑",
    enkaId: 11403,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Fossil_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 61.3,
  },
  (affix = 1) => {
    let rat = [40, 50, 60, 70, 80][affix - 1] + "%";
    let sec = [30, 26, 22, 19, 16][affix - 1];
    return {
      title: "气定神闲",
      text: highlight`元素战技造成伤害时，有${rat}的概率重置该技能的冷却时间，该效果每${sec}秒只能触发一次。`,
    };
  }
);
