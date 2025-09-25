import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
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
import { Constellation_E_3, Constellation_Q_5, S_80_DEF_28P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000103, "希诺宁")
@Weapon(WeaponType.Sword)
@Element(ElementType.Geo, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, [12405, 275, 930], 60, [13287, 337, 996])
@Icons("UI_AvatarIcon_Xilonen")
export class XilonenData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["锐锋攫猎", "音火锻淬", "豹烈律动！"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.517918, 0.560074, 0.60223, 0.662453, 0.704609, 0.752788, 0.819033, 0.885278, 0.951523, 1.023791, 1.096059,
        1.168326, 1.240594, 1.312861, 1.385129,
      ],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.273738, 0.296019, 0.3183, 0.35013, 0.372411, 0.397875, 0.432888, 0.467901, 0.502914, 0.54111, 0.579306,
        0.617502, 0.655698, 0.693894, 0.73209,
      ],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.273738, 0.296019, 0.3183, 0.35013, 0.372411, 0.397875, 0.432888, 0.467901, 0.502914, 0.54111, 0.579306,
        0.617502, 0.655698, 0.693894, 0.73209,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.729495, 0.788872, 0.84825, 0.933075, 0.992452, 1.060312, 1.15362, 1.246927, 1.340235, 1.442025, 1.543815,
        1.645605, 1.747395, 1.849185, 1.950975,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.91332, 0.98766, 1.062, 1.1682, 1.24254, 1.3275, 1.44432, 1.56114, 1.67796, 1.8054, 1.93284, 2.06028, 2.18772,
        2.31516, 2.4426,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      def: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      def: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      def: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
    action("刃轮巡猎一段伤害", AttackType.Normal, ElementType.Geo, {
      def: [
        0.560221, 0.605821, 0.65142, 0.716562, 0.762161, 0.814275, 0.885931, 0.957587, 1.029244, 1.107414, 1.185584,
        1.263755, 1.341925, 1.420096, 1.498266,
      ],
    }),
    action("刃轮巡猎二段伤害", AttackType.Normal, ElementType.Geo, {
      def: [
        0.550477, 0.595284, 0.64009, 0.704099, 0.748905, 0.800113, 0.870522, 0.940932, 1.011342, 1.088153, 1.164964,
        1.241775, 1.318585, 1.395396, 1.472207,
      ],
    }),
    action("刃轮巡猎三段伤害", AttackType.Normal, ElementType.Geo, {
      def: [
        0.658158, 0.711729, 0.7653, 0.84183, 0.895401, 0.956625, 1.040808, 1.124991, 1.209174, 1.30101, 1.392846,
        1.484682, 1.576518, 1.668354, 1.76019,
      ],
    }),
    action("刃轮巡猎四段伤害", AttackType.Normal, ElementType.Geo, {
      def: [
        0.860275, 0.930298, 1.00032, 1.100352, 1.170374, 1.2504, 1.360435, 1.47047, 1.580506, 1.700544, 1.820582,
        1.940621, 2.060659, 2.180698, 2.300736,
      ],
    }),
  ];
  elementSkill = [
    action("突进伤害", AttackType.Skill, ElementType.Geo, {
      def: [
        1.792, 1.9264, 2.0608, 2.24, 2.3744, 2.5088, 2.688, 2.8672, 3.0464, 3.2256, 3.4048, 3.584, 3.808, 4.032, 4.256,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      def: [
        2.8128, 3.02376, 3.23472, 3.516, 3.72696, 3.93792, 4.2192, 4.50048, 4.78176, 5.06304, 5.34432, 5.6256, 5.9772,
        6.3288, 6.6804,
      ],
    }),
    action("追加节拍伤害", AttackType.Burst, ElementType.Geo, {
      def: [
        2.8128, 3.02376, 3.23472, 3.516, 3.72696, 3.93792, 4.2192, 4.50048, 4.78176, 5.06304, 5.34432, 5.6256, 5.9772,
        6.3288, 6.6804,
      ],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      def: [1.04, 1.118, 1.196, 1.3, 1.378, 1.456, 1.56, 1.664, 1.768, 1.872, 1.976, 2.08, 2.21, 2.34, 2.47],
      fixed: [
        500.73764, 550.81836, 605.0725, 663.5, 726.1009, 792.8752, 863.8229, 938.944, 1018.23846, 1101.7063, 1189.3477,
        1281.1622, 1377.1503, 1477.3118, 1581.6466,
      ],
    }),
  ];
  otherSkill = [
    action("6命·治疗量", AttackType.Heal, ElementType.None, {
      def: [1.2],
    }),
  ];
  buffs = [
    ...S_80_DEF_28P,
    {
      label: "四境四象回声",
      describe: "若希诺宁拥有少于两枚经过元素转化的「源音采样」，普通攻击与下落攻击造成的伤害提升30%",
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 30 },
        { type: BuffType.FallingPrcent, getValue: () => 30 },
      ],
      enable: false,
    },
    {
      label: "便携铠装护层",
      describe: "队伍中的附近的角色触发「夜魂迸发」时，希诺宁的防御力提升20%",
      effect: [{ type: BuffType.DEFPrcent, getValue: () => 20 }],
      enable: false,
    },
    {
      label: "元素战技·「源音采样」·火",
      describe: "「源音采样」激活时，附近的敌人的对应元素抗性降低，同元素类型「源音采样」的效果不能叠加",
      effect: [
        {
          type: BuffType.EnemyPyroResistance,
          getValue: (data) => {
            return -[9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "元素战技·「源音采样」·水",
      describe: "「源音采样」激活时，附近的敌人的对应元素抗性降低，同元素类型「源音采样」的效果不能叠加",
      effect: [
        {
          type: BuffType.EnemyHydroResistance,
          getValue: (data) => {
            return -[9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "元素战技·「源音采样」·冰",
      describe: "「源音采样」激活时，附近的敌人的对应元素抗性降低，同元素类型「源音采样」的效果不能叠加",
      effect: [
        {
          type: BuffType.EnemyCryoResistance,
          getValue: (data) => {
            return -[9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "元素战技·「源音采样」·雷",
      describe: "「源音采样」激活时，附近的敌人的对应元素抗性降低，同元素类型「源音采样」的效果不能叠加",
      effect: [
        {
          type: BuffType.EnemyElectroResistance,
          getValue: (data) => {
            return -[9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "元素战技·「源音采样」·岩",
      describe: "「源音采样」激活时，附近的敌人的对应元素抗性降低，同元素类型「源音采样」的效果不能叠加",
      effect: [
        {
          type: BuffType.EnemyGeoResistance,
          getValue: (data) => {
            return -[9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "2命·岩元素角色造成的伤害提升",
      describe: `希诺宁的「源音采样」激活时，将根据「源音采样」的元素类型，使队伍中附近所有元素类型相同的角色获得对应效果：岩元素：造成的伤害提升50%`,
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 50 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·岩元素角色造成的伤害提升",
      describe: `希诺宁的「源音采样」激活时，将根据「源音采样」的元素类型，使队伍中附近所有元素类型相同的角色获得对应效果：岩元素：造成的伤害提升50%`,
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 50 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      shareCondition: ({ element }) => element === ElementType.Geo,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·火元素角色攻击力提升45%",
      describe: `希诺宁的「源音采样」激活时，将根据「源音采样」的元素类型，使队伍中附近所有元素类型相同的角色获得对应效果：火元素：攻击力提升45%`,
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 45 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      shareCondition: ({ element }) => element === ElementType.Pyro,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·水元素角色生命值上限提升45%",
      describe: `希诺宁的「源音采样」激活时，将根据「源音采样」的元素类型，使队伍中附近所有元素类型相同的角色获得对应效果：水元素：生命值上限提升45%`,
      effect: [{ type: BuffType.HPPrcent, getValue: () => 45 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      shareCondition: ({ element }) => element === ElementType.Hydro,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·冰元素角色暴击伤害提升60%",
      describe: `希诺宁的「源音采样」激活时，将根据「源音采样」的元素类型，使队伍中附近所有元素类型相同的角色获得对应效果：冰元素：暴击伤害提升60%`,
      effect: [{ type: BuffType.CryoCritcalHurt, getValue: () => 60 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      shareCondition: ({ element }) => element === ElementType.Cryo,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·献予灼原的五重奏",
      describe: `希诺宁施放音火锻淬后，将为队伍中附近的所有角色施加「荣花之赐」效果。
      拥有「荣花之赐」的角色的普通攻击、重击与下落攻击造成的伤害提升，提升值相当于希诺宁的防御力的65%`,
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.65,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.65,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.FallingFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.65,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·献予永夜的狂欢舞",
      describe: `希诺宁在夜魂加持状态下的普通攻击与下落攻击造成的伤害提升，提升值相当于希诺宁的防御力的300%`,
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 3,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.FallingFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 3,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/**
 * ![希诺宁](https://enka.network/ui/UI_AvatarIcon_Xilonen.png)
 */
export const Xilonen = new XilonenData();
