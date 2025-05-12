import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_HEALADD_22P } from "../buffs";

@EnKaId(10000003, "琴")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 14695, 239, 769, 80)
@Icons("UI_AvatarIcon_Qin")
class QinData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·西风剑术", "风压剑", "蒲公英之风"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.483, 0.523, 0.562, 0.618, 0.658, 0.703, 0.764, 0.826, 0.888, 0.955, 1.03],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.456, 0.493, 0.53, 0.583, 0.62, 0.663, 0.721, 0.779, 0.837, 0.901, 0.974],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.603, 0.652, 0.701, 0.771, 0.82, 0.876, 0.95, 1.03, 1.11, 1.19, 1.29],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.659, 0.712, 0.766, 0.843, 0.896, 0.958, 1.04, 1.13, 1.21, 1.3, 1.41],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.792, 0.857, 0.921, 1.01, 1.08, 1.15, 1.25, 1.35, 1.46, 1.57, 1.69],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.62, 1.75, 1.88, 2.07, 2.2, 2.36, 2.56, 2.77, 2.98, 3.2, 3.46],
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
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.92, 3.14, 3.36, 3.65, 3.87, 4.09, 4.38, 4.67, 4.96, 5.26, 5.55, 5.84, 6.2],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [4.25, 4.57, 4.89, 5.31, 5.63, 5.95, 6.37, 6.8, 7.22, 7.65, 8.07, 8.5, 9.03, 9.56],
    }),
    action("出入领域伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.784, 0.843, 0.902, 0.98, 1.04, 1.1, 1.18, 1.25, 1.33, 1.41, 1.49, 1.57, 1.67, 1.76],
    }),
    action("领域发动治疗量", AttackType.Heal, ElementType.None, {
      atk: [2.51, 2.7, 2.89, 3.14, 3.33, 3.52, 3.77, 4.02, 4.27, 4.52, 4.77, 5.02, 5.34, 5.65],
      fixed: [1540, 1694, 1861, 2041, 2234, 2439, 2657, 2888, 3132, 3389, 3659, 3941, 4236, 4544],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.2512, 0.27, 0.2889, 0.314, 0.3328, 0.3517, 0.3768, 0.4019, 0.427, 0.4522, 0.4773, 0.5024, 0.5338, 0.5652],
      fixed: [154, 169, 186, 204, 223, 244, 266, 289, 313, 339, 366, 394, 424, 454],
    }),
  ];
  otherSkill = [
    action("顺风而行治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.15],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_HEALADD_22P,
    {
      label: "1命·流转剑脊的暴风",
      describe: "风压剑长按超过1秒后，提升牵引速度，并使造成的伤害提升40%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 40 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    {
      label: "4命·蒲公英的国土",
      describe: "在蒲公英之风的领域内，所有敌人的风元素抗性下降40%",
      effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -40 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![琴](https://enka.network/ui/UI_AvatarIcon_Qin.png) */
export const Qin = new QinData();
