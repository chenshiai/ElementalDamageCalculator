import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { S_80_CRITAL_19P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000116, "伊涅芙")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro, SecondElementType.Moon)
@BaseData(Rarity.Five, 12613, 330, 828, 60)
@Icons("UI_AvatarIcon_Ineffa")
export class IneffaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["除尘旋刃", "涤净模式·稳态载频", "至高律令·全域扫灭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.34835, 0.376706, 0.40506, 0.445566, 0.47392, 0.506325, 0.550882, 0.595438, 0.64, 0.688602, 0.737209, 0.785816,
        0.834424, 0.883031, 0.931638,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.342211, 0.370066, 0.39792, 0.437712, 0.465566, 0.4974, 0.541171, 0.584942, 0.628714, 0.676464, 0.724214,
        0.771965, 0.819715, 0.867466, 0.915216,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.227556, 0.246078, 0.2646, 0.29106, 0.309582, 0.33075, 0.359856, 0.388962, 0.418068, 0.44982, 0.481572,
        0.513324, 0.545076, 0.576828, 0.60858,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.560677, 0.606314, 0.64195, 0.717145, 0.762782, 0.814938, 0.886652, 0.958367, 1.03, 1.108315, 1.186549,
        1.264783, 1.343017, 1.421251, 1.499485,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.94944, 1.02672, 1.104, 1.2144, 1.29168, 1.38, 1.50114, 1.62288, 1.74432, 1.8768, 2.009, 2.14176, 2.27424,
        2.40672, 2.5392,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.1174572, 1.26378, 1.352988,
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
      atk: [0.864, 0.9288, 0.9936, 1.08, 1.145, 1.2096, 1.296, 1.3824, 1.4688, 1.555, 1.64, 1.728, 1.836, 1.944, 2.05],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      atk: [2.21184, 2.3777, 2.5436, 2.765, 2.931, 3.097, 3.318, 3.539, 3.76, 3.981, 4.2, 4.424, 4.7, 4.98, 5.25],
      fixed: [1387, 1525, 1676, 1837, 2011, 2196, 2392, 2600, 2820, 3051, 3294, 3548, 3814, 4091, 4380],
    }),
    action("薇尔琪塔放电伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [6.768, 7.2756, 7.7832, 8.46, 8.9676, 9.475, 10.152, 10.83, 11.51, 12.18, 12.86, 13.54, 14.38, 15.23, 16.07],
    }),
  ];
  otherSkill = [
    action("频率超限回路伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [0.65],
    }),
    action("2命·「惩戒敕谕」伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [3],
    }),
    action("6命·献予你的明晨伤害", AttackType.Moon, ElementType.MoonElectro, {
      atk: [1.35],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "全相重构协议",
      describe:
        "施放元素爆发至高律令 · 全域扫灭时，将为队伍中自己的所有角色赋予「参数重构」效果：基于伊涅芙攻击力的6%，提升伊涅芙与队伍中自己当前场上角色的元素精通，持续20秒。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => (data.baseATK + data.extraATK) * 0.06,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "月兆祝赐·象拟中继",
      describe:
        "队伍中的角色触发感电反应时，将转为触发月感电反应，且基于伊涅芙的攻击力，提升月感电反应的基础伤害：每100点攻击力都将提升0.7%基础伤害，至多通过这种方式提升14%伤害。",
      effect: [
        {
          type: BuffType.MoonElectroRate,
          getValue: (data) => Math.min(14, ((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 0.7),
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "1命·循环整流引擎",
      describe:
        "伊涅芙展开光流屏障护盾时，将为队伍中附近的所有角色赋予持续20秒的「载流复合」效果，使月感电反应造成的伤害提升，提升值基于伊涅芙的攻击力：每100点攻击力都将提升2.5%伤害，至多通过这种方式提升50%伤害。",
      effect: [
        {
          type: BuffType.MoonElectroPrcent,
          getValue: (data) => Math.min(50, ((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 2.5),
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![伊涅芙](https://enka.network/ui/UI_AvatarIcon_Ineffa.png) */
export const Ineffa = new IneffaData();
