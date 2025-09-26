import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5, ExtraBuff } from "../buffs";

@EnKaId(1000000503, "空·水")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [10875, 213, 683], 60, [11627, 266, 730])
@Icons("UI_AvatarIcon_PlayerBoy", "PlayerWater")
export class PlayerBoyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦激流", "水纹剑", "扬水制流"];

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
    action(
      "喷发激流伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        atk: [
          1.8928, 2.03476, 2.17672, 2.366, 2.50796, 2.64992, 2.8392, 3.02848, 3.21776, 3.40704, 3.59632, 3.7856, 4.0222,
          4.2588, 4.4954,
        ],
      },
      "water"
    ),
    action("露滴伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        0.328, 0.3526, 0.3772, 0.41, 0.4346, 0.4592, 0.492, 0.5248, 0.5576, 0.5904, 0.6232, 0.656, 0.697, 0.738, 0.779,
      ],
    }),
    action("50%生命以上·露滴伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
      hp: [
        0.0064, 0.00688, 0.00736, 0.008, 0.00848, 0.00896, 0.0096, 0.01024, 0.01088, 0.01152, 0.01216, 0.0128, 0.0136,
        0.0144, 0.0152,
      ],
    }),
    action("灵息之刺伤害", AttackType.Other, ElementType.Hydro, {
      atk: [
        0.328, 0.3526, 0.3772, 0.41, 0.4346, 0.4592, 0.492, 0.5248, 0.5576, 0.5904, 0.6232, 0.656, 0.697, 0.738, 0.779,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [
        1.018664, 1.095064, 1.171464, 1.27333, 1.34973, 1.42613, 1.527996, 1.629862, 1.731729, 1.833595, 1.935462,
        2.037328, 2.164661, 2.291994, 2.419327,
      ],
    }),
  ];
  otherSkill = [
    action("4命·倾落的迸水护盾", AttackType.Shield, ElementType.None, {
      hp: [0.1],
    }),
  ];
  buffs = [
    ...A_80_ATK_24P,
    ...ExtraBuff,
    {
      label: "澄明的净水",
      describe:
        "长按施放水纹剑时如果通过充盈消耗了生命值，则在施放结束时的喷发激流造成的伤害提高，提高值为旅行者在此次施放期间通过充盈消耗的生命值总和的45%。通过这种方式，至多使伤害提高5000点。",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => Math.min(5000, (data.baseHP + data.extraHP + data.extraHP_NT) * 0.225),
          special: "water",
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![空·水](https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png) */
export const PlayerBoy = new PlayerBoyData();
