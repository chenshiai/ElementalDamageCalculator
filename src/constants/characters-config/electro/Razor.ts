import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_PHYSICAL_30P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000020, "雷泽")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, [11962, 234, 751], 80, [12790, 293, 803])
@Icons("UI_AvatarIcon_Razor")
export class RazorData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["钢脊", "利爪与苍雷", "雷牙"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.959, 1.024, 1.09, 1.177, 1.24, 1.32, 1.42, 1.52, 1.61, 1.71, 1.81],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.826, 0.883, 0.939, 1.01, 1.07, 1.14, 1.22, 1.31, 1.39, 1.47, 1.56],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.033, 1.103, 1.174, 1.27, 1.34, 1.42, 1.53, 1.63, 1.74, 1.84, 1.95],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.36, 1.45, 1.546, 1.67, 1.76, 1.87, 2.01, 2.15, 2.29, 2.43, 2.57],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.99, 1.07, 1.15, 1.24, 1.32],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.82, 0.887, 0.954, 1.05, 1.12, 1.19, 1.3, 1.4, 1.51, 1.62, 1.74],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.64, 1.77, 1.91, 2.1, 2.23, 2.38, 2.59, 2.8, 3.01, 3.24, 3.47],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [2.05, 2.22, 2.38, 2.62, 2.79, 2.98, 3.24, 3.5, 3.76, 4.05, 4.34],
    }),
  ];
  elementSkill = [
    action("点按技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.99, 2.14, 2.29, 2.49, 2.64, 2.79, 2.99, 3.19, 3.39, 3.586, 3.785, 3.984, 4.233],
    }),
    action("长按技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [2.95, 3.17, 3.39, 3.69, 3.91, 4.13, 4.43, 4.72, 5.02, 5.31, 5.61, 5.9, 6.27],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6],
    }),
    action("狼魂·1伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.959, 1.024, 1.09, 1.177, 1.24, 1.32, 1.42, 1.52, 1.61, 1.71, 1.81].map((item, index) => {
        return (
          item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
        );
      }),
    }),
    action("狼魂·2伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.826, 0.883, 0.939, 1.01, 1.07, 1.14, 1.22, 1.31, 1.39, 1.47, 1.56].map((item, index) => {
        return (
          item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
        );
      }),
    }),
    action("狼魂·三段伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.033, 1.103, 1.174, 1.27, 1.34, 1.42, 1.53, 1.63, 1.74, 1.84, 1.95].map((item, index) => {
        return (
          item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
        );
      }),
    }),
    action("狼魂·四段伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.36, 1.45, 1.546, 1.67, 1.76, 1.87, 2.01, 2.15, 2.29, 2.43, 2.57].map((item, index) => {
        return (
          item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
        );
      }),
    }),
  ];
  otherSkill = [
    action("6命·天狼落雷", AttackType.Other, ElementType.Electro, {
      atk: [1],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_PHYSICAL_30P,
    {
      label: "饥饿",
      describe: "雷泽的元素能量在50%以下时，元素充能效率提高30%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 }],
      enable: true,
    },
    {
      label: "雷之印充能",
      describe: "每有一个雷之印，元素充能效率提高20%",
      effect: [{ type: BuffType.ChargeFixed, getValue: (_, s) => 20 * s }],
      enable: true,
      stackable: true,
      limit: 3,
      stack: 0,
      stackText: "雷之印",
    },
    {
      label: "1命·狼性",
      describe: "雷泽获取元素晶球或元素微粒后的8秒内，造成的伤害提高10%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 10 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·压制",
      describe: "雷泽攻击生命值低于30%的敌人时，暴击率提高10%",
      effect: [{ type: BuffType.Critcal, getValue: () => 10 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·撕咬",
      describe: "利爪与苍雷点按时，会使命中的敌人防御力降低15%，持续7秒",
      effect: [{ type: BuffType.ReduceArmour, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_E_5,
  ];
}

/** ![雷泽](https://enka.network/ui/UI_AvatarIcon_Razor.png) */
export const Razor = new RazorData();
