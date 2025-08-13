import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 西风剑 */
export const Sword_Zephyrus = createWeapon(
  {
    name: "西风剑",
    enkaId: 11401,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Zephyrus_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 61.3,
  },
  (affix = 1) => {
    let a = [60, 70, 80, 90, 100][affix - 1] + "%";
    let b = [12, 10.5, 9, 7.5, 6][affix - 1];
    return {
      title: "顺风而行",
      text: highlight`攻击造成暴击时，有${a}的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每${b}秒只能触发一次。`,
    };
  }
);
