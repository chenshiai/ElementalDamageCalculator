import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 祭礼弓 */
export const Bow_Fossil = createWeapon(
  {
    name: "祭礼弓",
    enkaId: 15403,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Fossil_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
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
