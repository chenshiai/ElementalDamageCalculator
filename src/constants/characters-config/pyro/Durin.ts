import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000123, "杜林")
@Weapon(WeaponType.Sword)
@Element(ElementType.Pyro, SecondElementType.Magus)
@BaseData(Rarity.Five, [12430, 347, 822], 70, [13313, 425, 881])
@Icons("UI_AvatarIcon_Durin")
export class DurinData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["芒焰之翼斩", "二元式·聚分熔炼", "白化法·如光流变"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.456505, 0.493663, 0.53082, 0.583902, 0.621059, 0.663525, 0.721915, 0.780305, 0.838696, 0.902394, 0.966092,
        1.029791, 1.093489, 1.157188, 1.220886,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.410048, 0.443424, 0.4768, 0.52448, 0.557856, 0.596, 0.648448, 0.700896, 0.753344, 0.81056, 0.867776, 0.924992,
        0.982208, 1.039424, 1.09664,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.291617, 0.315354, 0.33909, 0.373, 0.396735, 0.423863, 0.461162, 0.498462, 0.535762, 0.576453, 0.617144,
        0.657835, 0.698525, 0.739216, 0.779907,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.711521, 0.769436, 0.82735, 0.910085, 0.968, 1.034188, 1.125196, 1.216205, 1.307213, 1.406495, 1.505777,
        1.605059, 1.704341, 1.803623, 1.902905,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.13434, 1.22667, 1.319, 1.4509, 1.54323, 1.64875, 1.79384, 1.93893, 2.08402, 2.2423, 2.40058, 2.55886, 2.71714,
        2.87542, 3.0337,
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
    action("转变·白化之是伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.056, 1.1352, 1.2144, 1.32, 1.3992, 1.4784, 1.584, 1.6896, 1.7952, 1.9008, 2.0064, 2.112, 2.244, 2.376, 2.508,
      ],
    }),
    action("转变·黑度之否·一段伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.7224, 0.77658, 0.83076, 0.903, 0.95718, 1.01136, 1.0836, 1.15584, 1.22808, 1.30032, 1.37256, 1.4448, 1.5351,
        1.6254, 1.7157,
      ],
    }),
    action("转变·黑度之否·二段伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.532, 0.5719, 0.6118, 0.665, 0.7049, 0.7448, 0.798, 0.8512, 0.9044, 0.9576, 1.0108, 1.064, 1.1305, 1.197,
        1.2635,
      ],
    }),
    action("转变·黑度之否·三段伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.6464, 0.69488, 0.74336, 0.808, 0.85648, 0.90496, 0.9696, 1.03424, 1.09888, 1.16352, 1.22816, 1.2928, 1.3736,
        1.4544, 1.5352,
      ],
    }),
  ];
  burstSkill = [
    action(
      "白化法·如光流变一段伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          1.1896, 1.27882, 1.36804, 1.487, 1.57622, 1.66544, 1.7844, 1.90336, 2.02232, 2.14128, 2.26024, 2.3792, 2.5279,
          2.6766, 2.8253,
        ],
      },
      "durin"
    ),
    action(
      "白化法·如光流变二段伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          0.964, 1.0363, 1.1086, 1.205, 1.2773, 1.3496, 1.446, 1.5424, 1.6388, 1.7352, 1.8316, 1.928, 2.0485, 2.169,
          2.2895,
        ],
      },
      "durin"
    ),
    action(
      "白化法·如光流变三段伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          1.1184, 1.20228, 1.28616, 1.398, 1.48188, 1.56576, 1.6776, 1.78944, 1.90128, 2.01312, 2.12496, 2.2368, 2.3766,
          2.5164, 2.6562,
        ],
      },
      "durin"
    ),
    action(
      "黑度法·如星阴燃一段伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          1.2544, 1.34848, 1.44256, 1.568, 1.66208, 1.75616, 1.8816, 2.00704, 2.13248, 2.25792, 2.38336, 2.5088, 2.6656,
          2.8224, 2.9792,
        ],
      },
      "durin2"
    ),
    action(
      "黑度法·如星阴燃二段伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          1.0176, 1.09392, 1.17024, 1.272, 1.34832, 1.42464, 1.5264, 1.62816, 1.72992, 1.83168, 1.93344, 2.0352, 2.1624,
          2.2896, 2.4168,
        ],
      },
      "durin2"
    ),
    action(
      "黑度法·如星阴燃三段伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          1.1184, 1.20228, 1.28616, 1.398, 1.48188, 1.56576, 1.6776, 1.78944, 1.90128, 2.01312, 2.12496, 2.2368, 2.3766,
          2.5164, 2.6562,
        ],
      },
      "durin2"
    ),
    action(
      "白焰之龙伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          0.9464, 1.01738, 1.08836, 1.183, 1.25398, 1.32496, 1.4196, 1.51424, 1.60888, 1.70352, 1.79816, 1.8928, 2.0111,
          2.1294, 2.2477,
        ],
      },
      "durin"
    ),
    action(
      "黑蚀之龙伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [
          1.2984, 1.39578, 1.49316, 1.623, 1.72038, 1.81776, 1.9476, 2.07744, 2.20728, 2.33712, 2.46696, 2.5968, 2.7591,
          2.9214, 3.0837,
        ],
      },
      "durin2"
    ),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "光灵遵神数显现·白化之龙",
      describe: `队伍中附近的角色对敌人触发燃烧、超载、火元素扩散、火元素结晶反应后，或对处于燃烧状态下的敌人造成火元素伤害或草元素伤害时，该敌人的火元素抗性与参与反应的对应元素抗性降低20%，持续6秒。
      <br/>魔导·秘仪：上述效果提升75%。`,
      effect: [
        { type: BuffType.EnemyAnemoResistance, getValue: (_, s) => [-20, -35][s] },
        { type: BuffType.EnemyDendroResistance, getValue: (_, s) => [-20, -35][s] },
        { type: BuffType.EnemyElectroResistance, getValue: (_, s) => [-20, -35][s] },
        { type: BuffType.EnemyGeoResistance, getValue: (_, s) => [-20, -35][s] },
        { type: BuffType.EnemyPyroResistance, getValue: (_, s) => [-20, -35][s] },
      ],
      enable: false,
      shareable: true,
      stackable: true,
      stack: 1,
      limit: 1,
      stackText: "魔导·秘仪",
      stackType: "switch",
    },
    {
      label: "光灵遵神数显现·黑蚀之龙",
      describe: `杜林触发的蒸发反应造成的伤害提升40%，融化反应造成的伤害提升40%。<br/>魔导·秘仪：上述效果提升75%。`,
      effect: [
        { type: BuffType.AmplifiedRate, getValue: (_, s) => [40, 70][s] },
        { type: BuffType.AmplifiedRate2, getValue: (_, s) => [40, 70][s] },
      ],
      enable: true,
      stackable: true,
      stack: 1,
      limit: 1,
      stackText: "魔导·秘仪",
      stackType: "switch",
    },
    {
      label: "混沌如黑夜构成",
      describe:
        "白焰之龙与黑蚀之龙的间歇性攻击造成伤害时，将消耗1层「肇象」，提升造成的伤害，每100点攻击力都将额外造成相当于原本3%的伤害，至多通过这种方式额外造成相当于原本75%的伤害。",
      effect: [
        {
          type: BuffType.BurstRate,
          getValue: (data) => Math.max(75, ((data.baseATK + data.extraATK + data.extraATK_NT) / 100) * 3),
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "1命·红土之逆·黑度法·如星阴燃",
      describe: `杜林造成元素爆发伤害时，将消耗2层「轮变启迪」，提升造成的伤害，提升值相当于杜林攻击力的150%。`,
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 1.5,
          actionOn: ActionOn.External,
          special: 'durin2'
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "1命·红土之逆·白化法·如光流变",
      describe: `当前场上角色的普通攻击、重击、下落攻击、元素战技或元素爆发造成伤害时，将消耗1层「轮变启迪」，提升造成的伤害，提升值相当于杜林攻击力的60%。`,
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.6,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.6,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.FallingFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.6,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.6,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.6,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·无底之想",
      describe: `杜林施放元素爆发后的20秒内，队伍中附近的角色对敌人触发蒸发、融化、燃烧、超载、火元素扩散或火元素结晶反应后，或对处于燃烧状态下的敌人造成火元素伤害或草元素伤害时，队伍中附近的角色造成的火元素伤害与参与反应的对应元素伤害提升50%，持续6秒。`,
      effect: [
        { type: BuffType.AnemoPrcent, getValue: () => 50 },
        { type: BuffType.DendroPrcent, getValue: () => 50 },
        { type: BuffType.ElectroPrcent, getValue: () => 50 },
        { type: BuffType.GeoPrcent, getValue: () => 50 },
        { type: BuffType.PyroPrcent, getValue: () => 50 },
        { type: BuffType.HydroPrcent, getValue: () => 50 },
        { type: BuffType.CryoPrcent, getValue: () => 50 },
      ],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·双重诞生",
      describe: `杜林造成的元素爆发伤害将无视敌人30%的防御力。
<br/>此外，杜林的元素爆发白化法·如光流变与黑度法·如星阴燃分别获得强化：
<br/>·元素爆发白化法·如光流变与「白焰之龙」命中敌人时，该敌人的防御力降低30%，持续6秒；
<br/>·元素爆发黑度法·如星阴燃与「黑蚀之龙」造成的伤害将额外无视敌人40%的防御力。`,
      effect: [
        { type: BuffType.ReduceArmour, getValue: (_, s) => [0, 30][s] },
        { type: BuffType.DefensePenetration, getValue: () => 30, special: "durin" },
        { type: BuffType.DefensePenetration, getValue: () => 30, special: "durin2" },
        { type: BuffType.DefensePenetration, getValue: (_, s) => [40, 0][s], special: "durin2" },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
      stackable: true,
      stack: 1,
      limit: 1,
      stackText: "白化法·如光流变",
      stackType: "switch",
      shareable: true,
    },
  ];
}

/** ![杜林](https://enka.network/ui/UI_AvatarIcon_Durin.png) */
export const Durin = new DurinData();
