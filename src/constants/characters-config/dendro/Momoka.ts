import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000061, "绮良良")
@Weapon(WeaponType.Sword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, [12180, 223, 546], 60, [13022, 279, 584])
@Icons("UI_AvatarIcon_Momoka")
export class MomokaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["箱纸切削术", "呜喵町飞足", "秘法·惊喜特派"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.47902, 0.51801, 0.557, 0.6127, 0.65169, 0.69625, 0.75752, 0.81879, 0.88006, 0.9469, 1.01374, 1.08058, 1.14742,
        1.21426, 1.2811,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.46354, 0.50127, 0.539, 0.5929, 0.63063, 0.67375, 0.73304, 0.79233, 0.85162, 0.9163, 0.98098, 1.04566, 1.11034,
        1.17502, 1.2397,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.254216, 0.274908, 0.2956, 0.32516, 0.345852, 0.3695, 0.402016, 0.434532, 0.467048, 0.50252, 0.537992,
        0.573464, 0.608936, 0.644408, 0.67988,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.381324, 0.412362, 0.4434, 0.48774, 0.518778, 0.55425, 0.603024, 0.651798, 0.700572, 0.75378, 0.806988,
        0.860196, 0.913404, 0.966612, 1.01982,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.73272, 0.79236, 0.852, 0.9372, 0.99684, 1.065, 1.15872, 1.25244, 1.34616, 1.4484, 1.55064, 1.65288, 1.75512,
        1.85736, 1.9596,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.223772, 0.241986, 0.2602, 0.28622, 0.304434, 0.32525, 0.353872, 0.382494, 0.411116, 0.44234, 0.473564,
        0.504788, 0.536012, 0.567236, 0.59846,
      ],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.447544, 0.483972, 0.5204, 0.57244, 0.608868, 0.6505, 0.707744, 0.764988, 0.822232, 0.88468, 0.947128,
        1.009576, 1.072024, 1.134472, 1.19692,
      ],
    }),
    action("重击伤害·3", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.447544, 0.483972, 0.5204, 0.57244, 0.608868, 0.6505, 0.707744, 0.764988, 0.822232, 0.88468, 0.947128,
        1.009576, 1.072024, 1.134472, 1.19692,
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
    action("甩尾飞踢伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [1.04, 1.118, 1.196, 1.3, 1.378, 1.456, 1.56, 1.664, 1.768, 1.872, 1.976, 2.08, 2.21, 2.34, 2.47],
    }),
    action("猫箱急件冲撞伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        0.336, 0.3612, 0.3864, 0.42, 0.4452, 0.4704, 0.504, 0.5376, 0.5712, 0.6048, 0.6384, 0.672, 0.714, 0.756, 0.798,
      ],
    }),
    action("翻正爪击伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [1.44, 1.548, 1.656, 1.8, 1.908, 2.016, 2.16, 2.304, 2.448, 2.592, 2.736, 2.88, 3.06, 3.24, 3.42],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.1, 0.1075, 0.115, 0.125, 0.1325, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.2125, 0.225, 0.2375],
      fixed: [
        962.2313, 1058.4679, 1162.7241, 1275, 1395.2957, 1523.611, 1659.946, 1804.3008, 1956.6753, 2117.0693, 2285.4834,
        2461.917, 2646.3704, 2838.8433, 3039.336,
      ],
    }),
    action("护盾吸收量上限", AttackType.Shield, ElementType.None, {
      hp: [0.16, 0.172, 0.184, 0.2, 0.212, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32, 0.34, 0.36, 0.38],
      fixed: [
        1541.0796, 1695.2089, 1862.1824, 2042, 2234.6616, 2440.1675, 2658.5176, 2889.7117, 3133.7498, 3390.632,
        3660.3584, 3942.929, 4238.3438, 4546.6025, 4867.705,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        5.7024, 6.13008, 6.55776, 7.128, 7.55568, 7.98336, 8.5536, 9.12384, 9.69408, 10.26432, 10.83456, 11.4048,
        12.1176, 12.8304, 13.5432,
      ],
    }),
    action("猫草豆蔻爆炸伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        0.3564, 0.38313, 0.40986, 0.4455, 0.47223, 0.49896, 0.5346, 0.57024, 0.60588, 0.64152, 0.67716, 0.7128, 0.75735,
        0.8019, 0.84645,
      ],
    }),
  ];
  otherSkill = [
    action("4命·韦驮骏足", AttackType.Burst, ElementType.Dendro, {
      atk: [2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "应时惑目之灵",
      describe:
        "基于绮良良的生命值上限，每1000点生命值上限将使呜喵町飞足造成的伤害提升0.4%，秘法·惊喜特派造成的伤害提升0.3%",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => ((data.baseHP + data.extraHP + data.extraHP_NT) * 0.4) / 1000,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => ((data.baseHP + data.extraHP + data.extraHP_NT) * 0.3) / 1000,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·沿途百景会心",
      describe: "绮良良施放元素战技或元素爆发后的15秒内，附近的队伍中所有角色获得12%所有元素伤害加成",
      effect: [
        { type: BuffType.PyroPrcent, getValue: () => 12 },
        { type: BuffType.HydroPrcent, getValue: () => 12 },
        { type: BuffType.ElectroPrcent, getValue: () => 12 },
        { type: BuffType.CryoPrcent, getValue: () => 12 },
        { type: BuffType.AnemoPrcent, getValue: () => 12 },
        { type: BuffType.GeoPrcent, getValue: () => 12 },
        { type: BuffType.DendroPrcent, getValue: () => 12 },
      ],
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
      target: BuffTarget.All,
      enable: false,
    },
  ];
}

/** ![绮良良](https://enka.network/ui/UI_AvatarIcon_Momoka.png) */
export const Momoka = new MomokaData();
