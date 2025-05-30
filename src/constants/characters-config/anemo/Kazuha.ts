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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";

@EnKaId(10000047, "枫原万叶")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 13348, 297, 807, 60)
@Icons("UI_AvatarIcon_Kazuha")
class KazuhaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·我流剑术", "千早振", "万叶之一刀"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.45, 0.486, 0.523, 0.575, 0.612, 0.654, 0.711, 0.769, 0.826, 0.889, 0.961],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.452, 0.489, 0.526, 0.579, 0.615, 0.657, 0.715, 0.773, 0.831, 0.894, 0.966],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.258, 0.279, 0.3, 0.33, 0.351, 0.375, 0.408, 0.441, 0.474, 0.51, 0.551],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.31, 0.335, 0.36, 0.396, 0.421, 0.45, 0.49, 0.529, 0.569, 0.612, 0.661],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.882, 0.96, 1.038, 1.116, 1.2, 1.3],
    }),
    action("五段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.254, 0.274, 0.295, 0.325, 0.345, 0.369, 0.401, 0.433, 0.466, 0.501, 0.542],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.919],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.746, 0.807, 0.868, 0.955, 1.016, 1.085, 1.18, 1.276, 1.371, 1.475, 1.595],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.818, 0.885, 0.951, 1.046, 1.113, 1.189, 1.294, 1.399, 1.503, 1.618, 1.731],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.64, 1.77, 1.9, 2.09, 2.23, 2.38, 2.59, 2.8, 3.01, 3.23, 3.46],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [2.04, 2.21, 2.38, 2.61, 2.78, 2.97, 3.23, 3.49, 3.75, 4.04, 4.33],
    }),
  ];
  elementSkill = [
    action("点按技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.92, 2.06, 2.21, 2.4, 2.54, 2.69, 2.88, 3.07, 3.26, 3.46, 3.65, 3.84, 4.08],
    }),
    action("长按技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.61, 2.8, 3, 3.26, 3.46, 3.65, 3.91, 4.17, 4.43, 4.69, 4.96, 5.22, 5.54],
    }),
  ];
  burstSkill = [
    action("斩击伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [2.62, 2.82, 3.02, 3.28, 3.48, 3.67, 3.94, 4.2, 4.46, 4.72, 4.99, 5.25, 5.58],
    }),
    action("持续伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
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
