import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_DEF_28P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000103, "希诺宁")
@Weapon(WeaponType.Sword)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, 12405, 275, 930, 60)
@Icons("UI_AvatarIcon_Xilonen")
export class XilonenData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["锐锋攫猎", "音火锻淬", "豹烈律动！"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.518, 0.56, 0.602, 0.662, 0.705, 0.753, 0.819, 0.885, 0.952, 1.024, 1.096],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.274, 0.296, 0.318, 0.35, 0.372, 0.398, 0.433, 0.468, 0.503, 0.541, 0.579],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.274, 0.296, 0.318, 0.35, 0.372, 0.398, 0.433, 0.468, 0.503, 0.541, 0.579],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.729, 0.789, 0.848, 0.933, 0.992, 1.06, 1.154, 1.247, 1.34, 1.442, 1.544],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.913, 0.988, 1.062, 1.168, 1.243, 1.328, 1.444, 1.561, 1.678, 1.805, 1.933],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      def: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      def: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      def: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
    action("刃轮巡猎一段伤害", AttackType.Normal, ElementType.Geo, {
      def: [0.56, 0.606, 0.651, 0.717, 0.762, 0.814, 0.886, 0.958, 1.029, 1.107, 1.186],
    }),
    action("刃轮巡猎二段伤害", AttackType.Normal, ElementType.Geo, {
      def: [0.55, 0.595, 0.64, 0.704, 0.749, 0.8, 0.871, 0.941, 1.011, 1.088, 1.165],
    }),
    action("刃轮巡猎三段伤害", AttackType.Normal, ElementType.Geo, {
      def: [0.658, 0.712, 0.765, 0.842, 0.895, 0.957, 1.041, 1.125, 1.209, 1.301, 1.393],
    }),
    action("刃轮巡猎四段伤害", AttackType.Normal, ElementType.Geo, {
      def: [0.86, 0.93, 1, 1.1, 1.17, 1.25, 1.36, 1.47, 1.581, 1.701, 1.821],
    }),
  ];
  elementSkill = [
    action("突进伤害", AttackType.Skill, ElementType.Geo, {
      def: [1.792, 1.926, 2.061, 2.24, 2.374, 2.509, 2.688, 2.867, 3.046, 3.226, 3.405, 3.584, 3.808],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      def: [2.813, 3.024, 3.235, 3.516, 3.727, 3.938, 4.219, 4.5, 4.782, 5.063, 5.344, 5.626, 5.977],
    }),
    action("追加节拍伤害", AttackType.Burst, ElementType.Geo, {
      def: [2.813, 3.024, 3.235, 3.516, 3.727, 3.938, 4.219, 4.5, 4.782, 5.063, 5.344, 5.626, 5.977],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      def: [1.04, 1.118, 1.196, 1.306, 1.378, 1.456, 1.56, 1.664, 1.768, 1.872, 1.976, 2.08, 2.11],
      fixed: [501, 551, 605, 664, 726, 793, 864, 939, 1018, 1101, 1189, 1281, 1377],
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
