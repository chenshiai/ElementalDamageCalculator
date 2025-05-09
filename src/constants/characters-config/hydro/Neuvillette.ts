import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";

class NeuvilletteData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  enkaId = 10000087;
  name = "那维莱特";
  element = ElementType.Hydro;
  weapon = WeaponType.Magic;
  rarity = Rarity.Five;
  baseHP = 14695;
  baseATK = 208;
  baseDEF = 576;
  burstCharge = 70;

  icons = {
    avatarIcon: this.getEnkaUI("UI_AvatarIcon_Neuvillette"),
    constsIcon: this.getEnkaUIs([
      "UI_Talent_S_Neuvillette_01",
      "UI_Talent_S_Neuvillette_02",
      "UI_Talent_U_Neuvillette_01",
      "UI_Talent_S_Neuvillette_03",
      "UI_Talent_U_Neuvillette_02",
      "UI_Talent_S_Neuvillette_04",
    ]),
    gachaImage: this.getEnkaImg("UI_AvatarIcon_Neuvillette"),
  };
  talentNames = ["普通攻击·如水从平", "泪水啊，我必偿还", "潮水啊，我已归来"];

  normalAttack = [
    this.action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.546, 0.587, 0.628, 0.682, 0.723, 0.764, 0.819, 0.873, 0.928, 0.982, 1.037, 1.092, 1.16, 1.228],
    }),
    this.action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.463, 0.497, 0.532, 0.578, 0.613, 0.647, 0.694, 0.74, 0.786, 0.832, 0.879, 0.925, 0.983, 1.041],
    }),
    this.action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.723, 0.778, 0.832, 0.904, 0.959, 1.013, 1.085, 1.157, 1.23, 1.302, 1.374, 1.447, 1.537, 1.628],
    }),
    this.action("重击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.368, 1.471, 1.573, 1.71, 1.813, 1.915, 2.052, 2.189, 2.326, 2.462, 2.599, 2.736, 2.907, 3.078],
    }),
    this.action(
      "重击·衡平推裁伤害",
      AttackType.Strong,
      ElementType.Hydro,
      {
        hp: [
          0.0732, 0.0791, 0.0851, 0.0936, 0.0996, 0.1064, 0.1157, 0.1251, 0.1345, 0.1447, 0.1549, 0.1651, 0.1753,
          0.1855,
        ],
      },
      "Neuvillette"
    ),
    this.action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2, 1.282, 1.361, 1.441],
    }),
    this.action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4, 2.56, 2.72, 2.88],
    }),
    this.action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3, 3.2, 3.4, 3.6],
    }),
  ];
  elementSkill = [
    this.action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.1286, 0.1383, 0.1479, 0.1608, 0.1704, 0.1801, 0.193, 0.2058, 0.2187, 0.2316],
    }),
    this.action("灵息之刺伤害", AttackType.Other, ElementType.Hydro, {
      atk: [0.208, 0.224, 0.239, 0.26, 0.276, 0.291, 0.312, 0.333, 0.354, 0.374],
    }),
  ];
  burstSkill = [
    this.action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.2226, 0.2393, 0.256, 0.2782, 0.2949, 0.3116, 0.3339, 0.3561, 0.3784, 0.4006, 0.4229, 0.4452, 0.473],
    }),
    this.action("水瀑伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [0.0911, 0.0979, 0.1047, 0.1138, 0.1206, 0.1275, 0.1366, 0.1457, 0.1548, 0.1639, 0.173, 0.1821, 0.1935],
    }),
  ];
  otherSkill = [
    this.action(
      "6命·洪流伤害",
      AttackType.Strong,
      ElementType.Hydro,
      {
        hp: [0.1],
      },
      "Neuvillette"
    ),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "古海孑遗的权柄",
      describe:
        "队伍中的角色对敌人触发蒸发、冻结、感电、绽放、水元素扩散或水元素结晶反应时，将为那维莱特产生持续30秒，至多叠加3层的「遗龙之荣」效果，使重击·衡平推裁造成原本110%/125%/160%的伤害",
      effect: [{ type: BuffType.StrongRate, getValue: (_, s) => [0, 10, 25, 60][s], special: "Neuvillette" }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "「遗龙之荣」",
    },
    {
      label: "至高仲裁的纪律",
      describe:
        "基于当前生命值超出生命值上限30%的部分，每1%使那维莱特获得0.6%水元素伤害加成，通过这种方式，至多提升30%",
      effect: [{ type: BuffType.HydroPrcent, getValue: (_, s) => Math.min(30, Math.max(s - 30, 0) * 0.6) }],
      enable: true,
      stack: 80,
      limit: 100,
      shareable: true,
      stackText: "当前生命值百分比",
    },
    {
      label: "2命·律法的命诫",
      describe: "每存在一层「遗龙之荣」，就使重击·衡平推裁的暴击伤害提升14%，至多通过这种方式提升42%",
      effect: [{ type: BuffType.StrongCritcalHurt, getValue: (_, s) => s * 14, special: "Neuvillette" }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "「遗龙之荣」",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_A_3,
    Constellation_Q_5,
  ];
}

/** ![那维莱特](https://enka.network/ui/UI_AvatarIcon_Neuvillette.png) */
export const Neuvillette = new NeuvilletteData();
