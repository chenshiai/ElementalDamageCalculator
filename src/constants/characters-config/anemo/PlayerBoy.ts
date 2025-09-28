import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3, ExtraBuff } from "../buffs";

@EnKaId(10000005, "空·风")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [10875, 213, 683], 60, [11627, 266, 730])
@Icons("UI_AvatarIcon_PlayerBoy", "PlayerWind")
export class PlayerBoyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦铁风", "风涡剑", "风息激荡"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44462, 0.48081, 0.517, 0.5687, 0.60489, 0.64625, 0.70312, 0.76, 0.81686, 0.8789, 0.94094, 1.00298, 1.06502,
        1.12706, 1.1891,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4343, 0.46965, 0.505, 0.5555, 0.59085, 0.63125, 0.6868, 0.74235, 0.7979, 0.8585, 0.9191, 0.9797, 1.0403,
        1.1009, 1.1615,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.52976, 0.57288, 0.616, 0.6776, 0.72072, 0.77, 0.83776, 0.90552, 0.97328, 1.0472, 1.12112, 1.19504, 1.26896,
        1.34288, 1.4168,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.58308, 0.63054, 0.678, 0.7458, 0.79326, 0.8475, 0.92208, 0.99666, 1.07124, 1.1526, 1.23396, 1.31532, 1.39668,
        1.47804, 1.5594,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.70778, 0.76539, 0.823, 0.9053, 0.96291, 1.02875, 1.11928, 1.20981, 1.30034, 1.3991, 1.49786, 1.59662, 1.69538,
        1.79414, 1.8929,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.6045, 0.65, 0.715, 0.7605, 0.8125, 0.884, 0.9555, 1.027, 1.105, 1.183, 1.261, 1.339, 1.417, 1.495],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.60716, 0.65658, 0.706, 0.7766, 0.82602, 0.8825, 0.96016, 1.03782, 1.11548, 1.2002, 1.28492, 1.36964, 1.45436,
        1.53908, 1.6238,
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
    action("初始切割伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255, 0.27, 0.285],
    }),
    action("最大切割伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        0.168, 0.1806, 0.1932, 0.21, 0.2226, 0.2352, 0.252, 0.2688, 0.2856, 0.3024, 0.3192, 0.336, 0.357, 0.378, 0.399,
      ],
    }),
    action("初始爆风伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.76, 1.892, 2.024, 2.2, 2.332, 2.464, 2.64, 2.816, 2.992, 3.168, 3.344, 3.52, 3.74, 3.96, 4.18],
    }),
    action("最大爆风伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.92, 2.064, 2.208, 2.4, 2.544, 2.688, 2.88, 3.072, 3.264, 3.456, 3.648, 3.84, 4.08, 4.32, 4.56],
    }),
  ];
  burstSkill = [
    action("龙卷风伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.808, 0.8686, 0.9292, 1.01, 1.0706, 1.1312, 1.212, 1.2928, 1.3736, 1.4544, 1.5352, 1.616, 1.717, 1.818, 1.919,
      ],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.248, 0.2666, 0.2852, 0.31, 0.3286, 0.3472, 0.372, 0.3968, 0.4216, 0.4464, 0.4712, 0.496, 0.527, 0.558, 0.589,
      ],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [
        0.248, 0.2666, 0.2852, 0.31, 0.3286, 0.3472, 0.372, 0.3968, 0.4216, 0.4464, 0.4712, 0.496, 0.527, 0.558, 0.589,
      ],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.248, 0.2666, 0.2852, 0.31, 0.3286, 0.3472, 0.372, 0.3968, 0.4216, 0.4464, 0.4712, 0.496, 0.527, 0.558, 0.589,
      ],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.248, 0.2666, 0.2852, 0.31, 0.3286, 0.3472, 0.372, 0.3968, 0.4216, 0.4464, 0.4712, 0.496, 0.527, 0.558, 0.589,
      ],
    }),
  ];
  otherSkill = [
    action("裂空之风", AttackType.Normal, ElementType.Anemo, {
      atk: [0.6],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    ...ExtraBuff,
    {
      label: "2命·革新的旋风",
      describe: "元素充能效率提升16%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 16 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·纠缠的信风",
      describe: "受到风息激荡伤害的目标，风元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·火",
      describe: "受到风息激荡伤害的目标，火元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·水",
      describe: "受到风息激荡伤害的目标，水元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·冰",
      describe: "受到风息激荡伤害的目标，冰元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·雷",
      describe: "受到风息激荡伤害的目标，雷元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![空·风](https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png) */
export const PlayerBoy = new PlayerBoyData();
