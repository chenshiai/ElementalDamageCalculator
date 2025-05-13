import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, EnchantingType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000091, "娜维娅")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, 12650, 352, 793, 60)
@Icons("UI_AvatarIcon_Navia")
class NaviaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·直率的辞绝", "典仪式晶火", "如霰澄天的鸣礼"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.935, 1.011, 1.087, 1.196, 1.272, 1.359, 1.479, 1.599, 1.718, 1.849, 1.979],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.865, 0.936, 1.006, 1.107, 1.177, 1.257, 1.368, 1.479, 1.589, 1.71, 1.831],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.349, 0.377, 0.406, 0.446, 0.475, 0.507, 0.552, 0.596, 0.641, 0.69, 0.738],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.334, 1.443, 1.552, 1.707, 1.815, 1.939, 2.11, 2.281, 2.451, 2.638, 2.824],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.323],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.131, 1.223, 1.315, 1.447, 1.539, 1.644, 1.788, 1.933, 2.078, 2.236, 2.393],
    }),
    action("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.7459, 0.8066, 0.8673, 0.954, 1.0147, 1.0841, 1.1795, 1.2749, 1.3703, 1.4744, 1.5937],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.491, 1.613, 1.734, 1.908, 2.029, 2.168, 2.359, 2.549, 2.74, 2.948, 3.156],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.863, 2.014, 2.166, 2.383, 2.534, 2.708, 2.946, 3.184, 3.422, 3.683, 3.942],
    }),
  ];
  elementSkill = [
    action("玫瑰晶弹伤害·5枚", AttackType.Skill, ElementType.Geo, {
      atk: [3.948, 4.244, 4.54, 4.935, 5.231, 5.527, 5.922, 6.317, 6.712, 7.106, 7.501, 7.896, 8.39].map(
        (i) => i * 1.2
      ),
    }),
    action("玫瑰晶弹伤害·7枚", AttackType.Skill, ElementType.Geo, {
      atk: [3.948, 4.244, 4.54, 4.935, 5.231, 5.527, 5.922, 6.317, 6.712, 7.106, 7.501, 7.896, 8.39].map(
        (i) => i * 1.4
      ),
    }),
    action("玫瑰晶弹伤害·9枚", AttackType.Skill, ElementType.Geo, {
      atk: [3.948, 4.244, 4.54, 4.935, 5.231, 5.527, 5.922, 6.317, 6.712, 7.106, 7.501, 7.896, 8.39].map(
        (i) => i * 1.66
      ),
    }),
    action("玫瑰晶弹伤害·11枚", AttackType.Skill, ElementType.Geo, {
      atk: [3.948, 4.244, 4.54, 4.935, 5.231, 5.527, 5.922, 6.317, 6.712, 7.106, 7.501, 7.896, 8.39].map((i) => i * 2),
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Geo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [0.752, 0.808, 0.865, 0.94, 0.996, 1.053, 1.128, 1.203, 1.278, 1.354, 1.429, 1.504, 1.598],
    }),
    action("支援炮击伤害", AttackType.Burst, ElementType.Geo, {
      atk: [0.432, 0.464, 0.496, 0.539, 0.572, 0.604, 0.647, 0.69, 0.734, 0.777, 0.82, 0.863, 0.917],
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
