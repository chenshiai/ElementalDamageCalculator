import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, EnchantingType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000091, "娜维娅")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, [12650, 352, 793], 60, [13549, 431, 850])
@Icons("UI_AvatarIcon_Navia")
export class NaviaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["直率的辞绝", "典仪式晶火", "如霰澄天的鸣礼"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.93519, 1.01131, 1.08743, 1.196173, 1.272293, 1.359287, 1.478905, 1.598522, 1.718139, 1.848631, 1.979123,
        2.109614, 2.240106, 2.370597, 2.501089,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.865065, 0.935478, 1.00589, 1.106479, 1.176891, 1.257362, 1.36801, 1.478658, 1.589306, 1.710013, 1.83072,
        1.951427, 2.072133, 2.19284, 2.313547,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.348859, 0.377255, 0.40565, 0.446215, 0.47461, 0.507062, 0.551684, 0.596306, 0.640927, 0.689605, 0.738283,
        0.786961, 0.835639, 0.884317, 0.932995,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.334316, 1.442923, 1.55153, 1.706683, 1.81529, 1.939412, 2.110081, 2.280749, 2.451417, 2.637601, 2.823785,
        3.009968, 3.196152, 3.382335, 3.568519,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.62522, 0.67611, 0.727, 0.7997, 0.85059, 0.90875, 0.98872, 1.06869, 1.14866, 1.2359, 1.32314, 1.41038, 1.49762,
        1.58486, 1.6721,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.1309, 1.22295, 1.315, 1.4465, 1.53855, 1.64375, 1.7884, 1.93305, 2.0777, 2.2355, 2.3933, 2.5511, 2.7089,
        2.8667, 3.0245,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("玫瑰晶弹伤害·5枚", AttackType.Skill, ElementType.Geo, {
      atk: [
        3.948, 4.2441, 4.5402, 4.935, 5.2311, 5.5272, 5.922, 6.3168, 6.7116, 7.1064, 7.5012, 7.896, 8.3895, 8.883,
        9.3765,
      ].map((i) => i * 1.2),
    }),
    action("玫瑰晶弹伤害·7枚", AttackType.Skill, ElementType.Geo, {
      atk: [
        3.948, 4.2441, 4.5402, 4.935, 5.2311, 5.5272, 5.922, 6.3168, 6.7116, 7.1064, 7.5012, 7.896, 8.3895, 8.883,
        9.3765,
      ].map((i) => i * 1.4),
    }),
    action("玫瑰晶弹伤害·9枚", AttackType.Skill, ElementType.Geo, {
      atk: [
        3.948, 4.2441, 4.5402, 4.935, 5.2311, 5.5272, 5.922, 6.3168, 6.7116, 7.1064, 7.5012, 7.896, 8.3895, 8.883,
        9.3765,
      ].map((i) => i * 1.66),
    }),
    action("玫瑰晶弹伤害·11枚", AttackType.Skill, ElementType.Geo, {
      atk: [
        3.948, 4.2441, 4.5402, 4.935, 5.2311, 5.5272, 5.922, 6.3168, 6.7116, 7.1064, 7.5012, 7.896, 8.3895, 8.883,
        9.3765,
      ].map((i) => i * 2),
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Geo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [
        0.752, 0.8084, 0.8648, 0.94, 0.9964, 1.0528, 1.128, 1.2032, 1.2784, 1.3536, 1.4288, 1.504, 1.598, 1.692, 1.786,
      ],
    }),
    action("支援炮击伤害", AttackType.Burst, ElementType.Geo, {
      atk: [
        0.4315, 0.463863, 0.496225, 0.539375, 0.571738, 0.6041, 0.64725, 0.6904, 0.73355, 0.7767, 0.81985, 0.863,
        0.916938, 0.970875, 1.024813,
      ],
    }),
  ];
  otherSkill = [];
  buffs = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "元素战技·「裂晶弹片」",
      describe: "消耗的「裂晶弹片」超过3枚时，超过3枚的每枚「裂晶弹片」都将使本次射击造成的伤害额外提升15%",
      effect: [{ type: BuffType.SkillPrcent, getValue: (_, s) => s * 15 }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "超3枚的弹片数量",
    },
    {
      label: "不明流通渠道",
      describe:
        "施放典仪式晶火后，娜维娅的普通攻击、重击与下落攻击造成的伤害转为无法被附魔覆盖的岩元素伤害，且娜维娅的普通攻击、重击与下落攻击造成的伤害提升40%",
      effect: [
        { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Geo] },
        { type: BuffType.NormalPrcent, getValue: () => 40 },
        { type: BuffType.StrongPrcent, getValue: () => 40 },
        { type: BuffType.FallingPrcent, getValue: () => 40 },
      ],
      enable: true,
    },
    {
      label: "互助关系网",
      describe: "队伍中每存在一位火元素/雷元素/冰元素/水元素角色，娜维娅的攻击力提升20%，此效果至多叠加2层",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 20 * s }],
      enable: true,
      stack: 2,
      limit: 2,
      stackable: true,
      stackText: "符合条件的角色数量",
    },
    {
      label: "2命·总指挥的乘胜追击",
      describe:
        "施放典仪式晶火时，每消耗1枚「裂晶弹片」，都将使本次典仪式晶火的暴击率提升12%，至多通过这种方式使其暴击率提高36%",
      effect: [{ type: BuffType.SkillCritcal, getValue: (_, s) => 12 * s }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "「裂晶弹片」消耗量",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·铭誓者的绝不姑息",
      describe: "如霰澄天的鸣礼命中敌人时，将使该敌人的岩元素抗性降低20%",
      effect: [{ type: BuffType.EnemyGeoResistance, getValue: () => -20 }],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·刺玫会长的灵活手腕",
      describe:
        "施放典仪式晶火时，若消耗的「裂晶弹片」超过3枚，超过3枚的每枚「裂晶弹片」都将使本次典仪式晶火的暴击伤害提升45%",
      effect: [{ type: BuffType.SkillCritcalHurt, getValue: (_, s) => 45 * s }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "超3枚的弹片数量",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![娜维娅](https://enka.network/ui/UI_AvatarIcon_Navia.png) */
export const Navia = new NaviaData();
