import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";

@EnKaId(10000047, "枫原万叶")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [13348, 297, 807], 60, [14297, 364, 864])
@Icons("UI_AvatarIcon_Kazuha")
export class KazuhaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["我流剑术", "千早振", "万叶之一刀"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44978, 0.48639, 0.523, 0.5753, 0.61191, 0.65375, 0.71128, 0.76881, 0.82634, 0.8891, 0.961013, 1.045582,
        1.130151, 1.21472, 1.306977,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.45236, 0.48918, 0.526, 0.5786, 0.61542, 0.6575, 0.71536, 0.77322, 0.83108, 0.8942, 0.966525, 1.051579,
        1.136633, 1.221688, 1.314474,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.258, 0.279, 0.3, 0.33, 0.351, 0.375, 0.408, 0.441, 0.474, 0.51, 0.55125, 0.59976, 0.64827, 0.69678, 0.7497,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3096, 0.3348, 0.36, 0.396, 0.4212, 0.45, 0.4896, 0.5292, 0.5688, 0.612, 0.6615, 0.719712, 0.777924, 0.836136,
        0.89964,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.60716, 0.65658, 0.706, 0.7766, 0.82602, 0.8825, 0.96016, 1.03782, 1.11548, 1.2002, 1.297275, 1.411435,
        1.525595, 1.639756, 1.764294,
      ],
    }),
    action("五段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.2537, 0.27435, 0.295, 0.3245, 0.34515, 0.36875, 0.4012, 0.43365, 0.4661, 0.5015, 0.542063, 0.589764, 0.637465,
        0.685167, 0.737205,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91875, 0.9996, 1.08045, 1.1613, 1.2495],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.74648, 0.80724, 0.868, 0.9548, 1.01556, 1.085, 1.18048, 1.27596, 1.37144, 1.4756, 1.59495, 1.735306, 1.875661,
        2.016017, 2.169132,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.818335, 0.884943, 0.951552, 1.046707, 1.113316, 1.18944, 1.294111, 1.398781, 1.503452, 1.617638, 1.731825,
        1.846011, 1.960197, 2.074383, 2.18857,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.636323, 1.769512, 1.902701, 2.092971, 2.22616, 2.378376, 2.587673, 2.79697, 3.006267, 3.234591, 3.462915,
        3.69124, 3.919564, 4.147888, 4.376212,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        2.043855, 2.210216, 2.376576, 2.614234, 2.780594, 2.97072, 3.232143, 3.493567, 3.75499, 4.040179, 4.325368,
        4.610557, 4.895747, 5.180936, 5.466125,
      ],
    }),
  ];
  elementSkill = [
    action("点按技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.92, 2.064, 2.208, 2.4, 2.544, 2.688, 2.88, 3.072, 3.264, 3.456, 3.648, 3.84, 4.08, 4.32, 4.56],
    }),
    action("长按技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.608, 2.8036, 2.9992, 3.26, 3.4556, 3.6512, 3.912, 4.1728, 4.4336, 4.6944, 4.9552, 5.216, 5.542, 5.868, 6.194,
      ],
    }),
  ];
  burstSkill = [
    action("斩击伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        2.624, 2.8208, 3.0176, 3.28, 3.4768, 3.6736, 3.936, 4.1984, 4.4608, 4.7232, 4.9856, 5.248, 5.576, 5.904, 6.232,
      ],
    }),
    action("持续伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55, 2.7, 2.85],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765, 0.81, 0.855],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765, 0.81, 0.855],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765, 0.81, 0.855],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765, 0.81, 0.855],
    }),
  ];
  otherSkill = [
    action("下落攻击·乱岚拨止·水", AttackType.Falling, ElementType.Hydro, {
      atk: [2],
    }),
    action("下落攻击·乱岚拨止·火", AttackType.Falling, ElementType.Pyro, {
      atk: [2],
    }),
    action("下落攻击·乱岚拨止·冰", AttackType.Falling, ElementType.Cryo, {
      atk: [2],
    }),
    action("下落攻击·乱岚拨止·雷", AttackType.Falling, ElementType.Electro, {
      atk: [2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_MYSTERY_115,
    {
      label: "风物之诗咏[水增伤]",
      describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
      effect: [
        {
          type: BuffType.HydroPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "风物之诗咏[火增伤]",
      describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
      effect: [
        {
          type: BuffType.PyroPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "风物之诗咏[冰增伤]",
      describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
      effect: [
        {
          type: BuffType.CryoPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "风物之诗咏[雷增伤]",
      describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
      effect: [
        {
          type: BuffType.ElectroPrcent,
          getValue: (data) => data.elementalMystery * 0.04,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·山岚残芯",
      describe: "万叶之一刀的流风秋野持续期间内，枫原万叶自己的元素精通提升200点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 200 }],
      enable: false,
      target: BuffTarget.Self,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·山岚残芯",
      describe: "万叶之一刀的流风秋野持续期间内，其中的场上角色的元素精通提升200点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 200 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
      target: BuffTarget.Other,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·血赤叶红",
      describe:
        "枫原万叶施放千早振或万叶之一刀后的5秒内，获得风元素附魔，并且枫原万叶的每点元素精通，都会使他的普通攻击、重击、下落攻击造成的伤害提高0.2%",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.2,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.StrongPrcent,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.2,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.FallingPrcent,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.2,
          actionOn: ActionOn.Indirect,
        },
        { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Anemo] },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![枫原万叶](https://enka.network/ui/UI_AvatarIcon_Kazuha.png) */
export const Kazuha = new KazuhaData();
