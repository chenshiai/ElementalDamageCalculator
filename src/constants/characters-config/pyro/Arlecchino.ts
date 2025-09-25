import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, EnchantingType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000096, "阿蕾奇诺")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [13103, 342, 765], 60, [14034, 419, 819])
@Icons("UI_AvatarIcon_Arlecchino")
export class ArlecchinoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["斩首之邀", "万相化灰", "厄月将升"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.475004, 0.513667, 0.55233, 0.607563, 0.646226, 0.690412, 0.751169, 0.811925, 0.872681, 0.938961, 1.005241,
        1.07152, 1.1378, 1.204079, 1.270359,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.521057, 0.563468, 0.60588, 0.666468, 0.70888, 0.75735, 0.823997, 0.890644, 0.95729, 1.03, 1.102702, 1.175407,
        1.248113, 1.320818, 1.393524,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.653858, 0.707079, 0.7603, 0.83633, 0.889551, 0.950375, 1.034008, 1.117641, 1.201274, 1.29251, 1.383746,
        1.474982, 1.566218, 1.657454, 1.74869,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.371451, 0.401686, 0.43192, 0.475112, 0.505346, 0.5399, 0.587411, 0.634922, 0.682434, 0.734264, 0.786094,
        0.837925, 0.889755, 0.941586, 0.993416,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.699816, 0.756778, 0.81374, 0.895114, 0.952076, 1.017175, 1.106686, 1.196198, 1.285709, 1.383358, 1.481007,
        1.578656, 1.676304, 1.773953, 1.871602,
      ],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.853782, 0.923276, 0.99277, 1.092047, 1.161541, 1.240962, 1.350167, 1.459372, 1.568577, 1.687709, 1.806841,
        1.925974, 2.045106, 2.164239, 2.283371,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.90816, 0.98208, 1.056, 1.1616, 1.23552, 1.32, 1.43616, 1.55232, 1.66848, 1.7952, 1.92192, 2.04864, 2.17536,
        2.30208, 2.4288,
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
    action("尖刺伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.1484, 0.15953, 0.17066, 0.1855, 0.19663, 0.20776, 0.2226, 0.23744, 0.25228, 0.26712, 0.28196, 0.2968, 0.31535,
        0.3339, 0.35245,
      ],
    }),
    action("切斩伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.3356, 1.43577, 1.53594, 1.6695, 1.76967, 1.86984, 2.0034, 2.13696, 2.27052, 2.40408, 2.53764, 2.6712, 2.83815,
        3.0051, 3.17205,
      ],
    }),
    action("血偿勒令伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.318, 0.34185, 0.3657, 0.3975, 0.42135, 0.4452, 0.477, 0.5088, 0.5406, 0.5724, 0.6042, 0.636, 0.67575, 0.7155,
        0.75525,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        3.704, 3.9818, 4.2596, 4.63, 4.9078, 5.1856, 5.556, 5.9264, 6.2968, 6.6672, 7.0376, 7.408, 7.871, 8.334, 8.797,
      ],
    }),
  ];
  otherSkill = [
    action("2命·厄月血火", AttackType.Other, ElementType.Pyro, {
      atk: [9],
    }),
  ];
  buffs = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "红死之宴",
      describe:
        "阿蕾奇诺具有的生命之契大于或等于生命值上限的30%时，将进入红死之宴状态：普通攻击、重击与下落攻击造成的伤害将转为无法被附魔覆盖的火元素伤害；普通攻击命中敌人时，将提升本次攻击造成的伤害，提升值相当于阿蕾奇诺的攻击力乘以当前生命之契百分比的一定比例；解锁1命后进一步提升",
      effect: [
        {
          type: BuffType.Transform,
          getValue: (_, s) => (s >= 30 ? EnchantingType[ElementType.Pyro] : EnchantingType[ElementType.Physical]),
        },
        {
          type: BuffType.NormalFixed,
          getValue: (data, s) => {
            let a =
              ([1.204, 1.302, 1.4, 1.54, 1.638, 1.75, 1.904, 2.058, 2.212, 2.38, 2.548, 2.716, 2.884, 3.052, 3.22].map(
                (i) => (data.constellation >= 1 ? i + 1 : i)
              )[data.normalLevel + data.normalLevelAdd - 1] *
                s) /
              100;
            return s >= 30 ? (data.baseATK + data.extraATK + data.extraATK_NT) * a : 0;
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stackable: true,
      stack: 145,
      limit: 200,
      stackText: "生命之契%",
    },
    {
      label: "唯厄月可知晓",
      describe: "在战斗状态下，阿蕾奇诺获得40%火元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 40 }],
      enable: true,
    },
    Constellation_A_3,
    Constellation_Q_5,
    {
      label: "6命·「自此以后，我们将共飨新生。」",
      describe:
        "厄月将升造成的伤害提高，提升值相当于阿蕾奇诺的攻击力乘以当前生命之契百分比的700%。施放万相化灰后的20秒内，阿蕾奇诺的普通攻击与元素爆发的暴击率提升10%、暴击伤害提升70%",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data, s) => {
            return ((data.baseATK + data.extraATK + data.extraATK_NT) * 7 * s) / 100;
          },
          actionOn: ActionOn.External,
        },
        { type: BuffType.NormalCritcal, getValue: () => 10 },
        { type: BuffType.NormalCritcalHurt, getValue: () => 70 },
        { type: BuffType.BurstCritcal, getValue: () => 10 },
        { type: BuffType.BurstCritcalHurt, getValue: () => 70 },
      ],
      enable: true,
      stackable: true,
      stack: 145,
      limit: 200,
      stackText: "生命之契%",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![阿蕾奇诺](https://enka.network/ui/UI_AvatarIcon_Arlecchino.png) */
export const Arlecchino = new ArlecchinoData();
