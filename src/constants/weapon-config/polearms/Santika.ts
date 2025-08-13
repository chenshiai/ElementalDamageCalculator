import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 息灾 */
export const Santika = createWeapon(
  {
    name: "息灾",
    enkaId: 13507,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Santika_Awaken"),
    baseAtk: 741,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 16.5,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    let as = [3.2, 4, 4.8, 5.6, 6.4][affix - 1] + "%";
    return {
      title: "灭却之戒法",
      text: highlight`获得${a}所有元素伤害加成；施放元素战技后，获得持续20秒的「圆顿」，攻击力每1秒提升${as}，该攻击力提升效果至多叠加6次。当装备此武器的角色处于队伍后台时，「圆顿」的攻击力提升效果翻倍。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];
    let as = [3.2, 4, 4.8, 5.6, 6.4][affix - 1];
    return [
      {
        label: "元素伤害加成",
        describe: `获得${a}所有元素伤害加成`,
        effect: [
          { type: BuffType.HydroPrcent, getValue: () => a },
          { type: BuffType.PyroPrcent, getValue: () => a },
          { type: BuffType.ElectroPrcent, getValue: () => a },
          { type: BuffType.AnemoPrcent, getValue: () => a },
          { type: BuffType.CryoPrcent, getValue: () => a },
          { type: BuffType.DendroPrcent, getValue: () => a },
          { type: BuffType.GeoPrcent, getValue: () => a },
        ],
        enable: true,
      },
      {
        label: "前台·攻击力提升",
        describe: `施放元素战技后，攻击力每1秒提升${as}%，该攻击力提升效果至多叠加6次`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => as * stack }],
        stackable: true,
        stackText: "圆顿",
        limit: 6,
        stack: 6,
        enable: false,
      },
      {
        label: "后台·攻击力提升",
        describe: `施放元素战技后，攻击力每1秒提升${as}%，至多叠加6次，处于后台时攻击力提升效果翻倍`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => as * stack * 2 }],
        stackText: "圆顿",
        stackable: true,
        limit: 6,
        stack: 6,
        enable: false,
      },
    ];
  }
);
