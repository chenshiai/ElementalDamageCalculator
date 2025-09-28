import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000065, "久岐忍")
@Weapon(WeaponType.Sword)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, [12289, 212, 751], 60, [13139, 266, 803])
@Icons("UI_AvatarIcon_Shinobu")
export class ShinobuData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["忍流飞刃斩", "越祓雷草之轮", "御咏鸣神刈山祭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.48762, 0.52731, 0.567, 0.6237, 0.66339, 0.70875, 0.77112, 0.83349, 0.89586, 0.9639, 1.03194, 1.09998, 1.16802,
        1.23606, 1.3041,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44548, 0.48174, 0.518, 0.5698, 0.60606, 0.6475, 0.70448, 0.76146, 0.81844, 0.8806, 0.94276, 1.00492, 1.06708,
        1.12924, 1.1914,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5934, 0.6417, 0.69, 0.759, 0.8073, 0.8625, 0.9384, 1.0143, 1.0902, 1.173, 1.2558, 1.3386, 1.4214, 1.5042,
        1.587,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7611, 0.82305, 0.885, 0.9735, 1.03545, 1.10625, 1.2036, 1.30095, 1.3983, 1.5045, 1.6107, 1.7169, 1.8231,
        1.9293, 2.0355,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.556334, 0.601617, 0.6469, 0.71159, 0.756873, 0.808625, 0.879784, 0.950943, 1.022102, 1.09973, 1.177358,
        1.254986, 1.332614, 1.410242, 1.48787,
      ],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.667652, 0.721996, 0.77634, 0.853974, 0.908318, 0.970425, 1.055822, 1.14122, 1.226617, 1.319778, 1.412939,
        1.5061, 1.59926, 1.692421, 1.785582,
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
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        0.75712, 0.813904, 0.870688, 0.9464, 1.003184, 1.059968, 1.13568, 1.211392, 1.287104, 1.362816, 1.438528,
        1.51424, 1.60888, 1.70352, 1.79816,
      ],
    }),
    action("越祓草轮伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        0.2524, 0.27133, 0.29026, 0.3155, 0.33443, 0.35336, 0.3786, 0.40384, 0.42908, 0.45432, 0.47956, 0.5048, 0.53635,
        0.5679, 0.59945,
      ],
    }),
    action("越祓草轮治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.03, 0.03225, 0.0345, 0.0375, 0.03975, 0.042, 0.045, 0.048, 0.051, 0.054, 0.057, 0.06, 0.06375, 0.0675,
        0.07125,
      ],
      fixed: [
        288.8908, 317.7839, 349.08475, 382.79337, 418.90976, 457.43387, 498.36575, 541.7054, 587.4528, 635.608,
        686.1709, 739.14154, 794.52, 852.3062, 912.5001,
      ],
    }),
  ];
  burstSkill = [
    action("单次伤害", AttackType.Burst, ElementType.Electro, {
      hp: [
        0.036048, 0.038752, 0.041455, 0.04506, 0.047764, 0.050467, 0.054072, 0.057677, 0.061282, 0.064886, 0.068491,
        0.072096, 0.076602, 0.081108, 0.085614,
      ],
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
