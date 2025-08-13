import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 西风长枪 */
export const Pole_Zephyrus = createWeapon(
  {
    name: "西风长枪",
    enkaId: 13407,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Zephyrus_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    const rat = [60, 70, 80, 90, 100][affix - 1] + "%";
    const sec = [12, 10.5, 9, 7.5, 6][affix - 1];
    return {
      title: "顺风而行",
      text: highlight`攻击造成暴击时，有${rat}的几率产生少量元素微粒，能为角色恢复6点元素能量。该效果每${sec}秒只能触发一次。`,
    };
  }
);
