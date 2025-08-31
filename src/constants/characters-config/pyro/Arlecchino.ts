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
      atk: [0.475, 0.514, 0.552, 0.608, 0.646, 0.69, 0.751, 0.812, 0.873, 0.939, 1.005, 1.072, 1.138, 1.204],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.521, 0.563, 0.606, 0.666, 0.709, 0.757, 0.824, 0.891, 0.957, 1.03, 1.103, 1.175, 1.248, 1.321],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.654, 0.707, 0.76, 0.836, 0.89, 0.95, 1.034, 1.118, 1.201, 1.293, 1.384, 1.475, 1.566, 1.657],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.371, 0.402, 0.432, 0.475, 0.505, 0.54, 0.587, 0.635, 0.682, 0.734, 0.786, 0.838, 0.89, 0.942],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.371, 0.402, 0.432, 0.475, 0.505, 0.54, 0.587, 0.635, 0.682, 0.734, 0.786, 0.838, 0.89, 0.942],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.7, 0.757, 0.814, 0.895, 0.952, 1.017, 1.107, 1.196, 1.286, 1.383, 1.481, 1.579, 1.676, 1.774],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.908, 0.982, 1.056, 1.162, 1.236, 1.32, 1.436, 1.552, 1.668, 1.795, 1.922, 2.049, 2.175, 2.302],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353, 1.442, 1.531, 1.621],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71, 2.884, 3.062, 3.241],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38, 3.602, 3.825, 4.048],
    }),
  ];
  elementSkill = [
    action("尖刺伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.148, 0.16, 0.171, 0.186, 0.197, 0.208, 0.223, 0.237, 0.252, 0.267],
    }),
    action("切斩伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.336, 1.436, 1.536, 1.67, 1.77, 1.87, 2.003, 2.137, 2.271, 2.404],
    }),
    action("血偿勒令伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.318, 0.342, 0.366, 0.398, 0.421, 0.445, 0.477, 0.509, 0.541, 0.572],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [3.704, 3.982, 4.26, 4.63, 4.908, 5.186, 5.556, 5.926, 6.297, 6.667, 7.038, 7.408, 7.871],
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
              ([1.204, 1.302, 1.4, 1.54, 1.638, 1.75, 1.904, 2.058, 2.212, 2.38, 2.548, 2.716, 2.884, 3.052].map((i) =>
                data.constellation >= 1 ? i + 1 : i
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
