import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 和璞鸢 */
export const Pole_Morax = createWeapon(
  {
    name: "和璞鸢",
    enkaId: 13505,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Morax_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    let a = [3.2, 3.9, 4.6, 5.3, 6][affix - 1] + "%";
    let b = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "昭理的鸢之枪",
      text: highlight`命中敌人时自身攻击力提高${a}，持续6秒，最高可以叠加7层。该效果每0.3秒最多触发一次。满层状态时伤害提升${b}。`,
    };
  },
  (affix = 1) => {
    let a = [3.2, 3.9, 4.6, 5.3, 6][affix - 1];
    let b = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "命中敌人时自身攻击力提高",
        describe: `命中敌人时自身攻击力提高${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * a }],
        stackable: true,
        limit: 7,
        stack: 7,
        enable: false,
      },
      {
        label: "满层状态时伤害提升",
        describe: `满层状态时伤害提升${b}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => b }],
        enable: false,
      },
    ];
  }
);
