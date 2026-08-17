import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 星锋剑 */
export const WeaponQuestSnezhnaya = createWeapon(
  {
    name: "星锋剑",
    enkaId: 11521,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_WeaponQuestSnezhnaya"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 33.1,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 32, 40][affix - 1] + "%";
    let b = [0, 6, 6, 6, 6][affix - 1] + "%";
    let c = [3, 3, 5, 5, 5][affix - 1];
    return {
      title: "旅者之路",
      text: highlight`旅行者装备时，每与一种元素共鸣过，旅行者的暴击伤害就会提升${b}。此外，旅行者的攻击命中敌人后，攻击力提升${a}，持续8秒，并使旅行者恢复${c}点元素能量。该效果每5秒至多触发一次，角色处于队伍后台也能触发。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 32, 40][affix - 1];
    let b = [0, 6, 6, 6, 6][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `旅行者的攻击命中敌人后，攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "暴击伤害提升",
        describe: `每与一种元素共鸣过，旅行者的暴击伤害就会提升${b}%`,
        effect: [{ type: BuffType.CritcalHurt, getValue: (_, s) => s * b }],
        enable: true,
        stack: 7,
        limit: 7,
        stackable: true,
        stackText: "元素共鸣数量",
      },
    ];
  }
);
