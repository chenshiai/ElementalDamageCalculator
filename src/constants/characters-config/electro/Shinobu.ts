import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000065, "久岐忍")
@Weapon(WeaponType.Sword)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, 12289, 212, 751, 60)
@Icons("UI_AvatarIcon_Shinobu")
export class ShinobuData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["忍流飞刃斩", "越祓雷草之轮", "御咏鸣神刈山祭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.488, 0.527, 0.567, 0.624, 0.663, 0.709, 0.771, 0.834, 0.896, 0.964, 1.032],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.446, 0.482, 0.518, 0.57, 0.606, 0.648, 0.705, 0.762, 0.818, 0.881, 0.943],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.593, 0.642, 0.69, 0.759, 0.807, 0.863, 0.938, 1.014, 1.09, 1.173, 1.256],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.761, 0.823, 0.885, 0.974, 1.036, 1.106, 1.204, 1.301, 1.398, 1.505, 1.611],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.556, 0.602, 0.647, 0.717, 0.757, 0.809, 0.88, 0.951, 1.022, 1.1, 1.177],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.668, 0.722, 0.776, 0.854, 0.908, 0.97, 1.056, 1.141, 1.227, 1.32, 1.413],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.757, 0.814, 0.871, 0.946, 1.003, 1.06, 1.136, 1.211, 1.287, 1.363, 1.439, 1.514, 1.609],
    }),
    action("越祓草轮伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.252, 0.271, 0.29, 0.316, 0.334, 0.353, 0.379, 0.404, 0.429, 0.454, 0.48, 0.505, 0.536],
    }),
    action("越祓草轮治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.03, 0.032, 0.035, 0.038, 0.04, 0.042, 0.045, 0.048, 0.051, 0.054, 0.057, 0.06, 0.064],
      fixed: [289, 318, 349, 383, 419, 457, 498, 842, 587, 636, 686, 739, 795],
    }),
  ];
  burstSkill = [
    action("单次伤害", AttackType.Burst, ElementType.Electro, {
      hp: [0.036, 0.039, 0.041, 0.045, 0.048, 0.05, 0.054, 0.058, 0.061, 0.065, 0.068, 0.072, 0.077],
    }),
  ];
  otherSkill = [
    action("4命·割舍封闭之心", AttackType.Other, ElementType.Electro, {
      hp: [0.097],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "安心之所",
      describe: "基于久岐忍的元素精通，越祓雷草之轮伤害提升，值为元素精通的25%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.25,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![久岐忍](https://enka.network/ui/UI_AvatarIcon_Shinobu.png) */
export const Shinobu = new ShinobuData();
