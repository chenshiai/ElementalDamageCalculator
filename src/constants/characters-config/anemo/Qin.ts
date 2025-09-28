import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_HEALADD_22P } from "../buffs";

@EnKaId(10000003, "琴")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [14695, 239, 769], 80, [15740, 293, 823])
@Icons("UI_AvatarIcon_Qin")
export class QinData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术", "风压剑", "蒲公英之风"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.48332, 0.52266, 0.562, 0.6182, 0.65754, 0.7025, 0.76432, 0.82614, 0.88796, 0.9554, 1.032675, 1.12355,
        1.214426, 1.305301, 1.404438,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4558, 0.4929, 0.53, 0.583, 0.6201, 0.6625, 0.7208, 0.7791, 0.8374, 0.901, 0.973875, 1.059576, 1.145277,
        1.230978, 1.32447,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.60286, 0.65193, 0.701, 0.7711, 0.82017, 0.87625, 0.95336, 1.03047, 1.10758, 1.1917, 1.288088, 1.401439,
        1.514791, 1.628143, 1.751799,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.65876, 0.71238, 0.766, 0.8426, 0.89622, 0.9575, 1.04176, 1.12602, 1.21028, 1.3022, 1.407525, 1.531387,
        1.655249, 1.779112, 1.914234,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.79206, 0.85653, 0.921, 1.0131, 1.07757, 1.15125, 1.25256, 1.35387, 1.45518, 1.5657, 1.692338, 1.841263,
        1.990189, 2.139115, 2.301579,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.62024, 1.75212, 1.884, 2.0724, 2.20428, 2.355, 2.56224, 2.76948, 2.97672, 3.2028, 3.46185, 3.766493, 4.071136,
        4.375778, 4.708116,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.92, 3.139, 3.358, 3.65, 3.869, 4.088, 4.38, 4.672, 4.964, 5.256, 5.548, 5.84, 6.205, 6.57, 6.935],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        4.248, 4.5666, 4.8852, 5.31, 5.6286, 5.9472, 6.372, 6.7968, 7.2216, 7.6464, 8.0712, 8.496, 9.027, 9.558, 10.089,
      ],
    }),
    action("出入领域伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.784, 0.8428, 0.9016, 0.98, 1.0388, 1.0976, 1.176, 1.2544, 1.3328, 1.4112, 1.4896, 1.568, 1.666, 1.764, 1.862,
      ],
    }),
    action("领域发动治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        2.512, 2.7004, 2.8888, 3.14, 3.3284, 3.5168, 3.768, 4.0192, 4.2704, 4.5216, 4.7728, 5.024, 5.338, 5.652, 5.966,
      ],
      fixed: [
        1540.3248, 1694.3788, 1861.2705, 2041, 2233.5674, 2438.9727, 2657.2156, 2888.2964, 3132.215, 3388.9717,
        3658.566, 3940.998, 4236.268, 4544.376, 4865.3213,
      ],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        0.2512, 0.27004, 0.28888, 0.314, 0.33284, 0.35168, 0.3768, 0.40192, 0.42704, 0.45216, 0.47728, 0.5024, 0.5338,
        0.5652, 0.5966,
      ],
      fixed: [
        154.03249, 169.43788, 186.12704, 204.1, 223.35674, 243.89726, 265.72156, 288.82965, 313.2215, 338.89716,
        365.8566, 394.0998, 423.6268, 454.4376, 486.53214,
      ],
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
