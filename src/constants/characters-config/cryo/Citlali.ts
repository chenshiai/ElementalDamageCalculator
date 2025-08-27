import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000107, "茜特菈莉")
@Weapon(WeaponType.Magic)
@Element(ElementType.Cryo, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, 11634, 127, 763, 60)
@Icons("UI_AvatarIcon_Citlali")
export class CitlaliData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["玄鸾画水", "凤缕随翦舞", "鹍弦踏月出"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.434, 0.467, 0.499, 0.543, 0.575, 0.608, 0.651, 0.695, 0.738, 0.781, 0.825],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.388, 0.417, 0.446, 0.485, 0.514, 0.543, 0.582, 0.621, 0.66, 0.699, 0.737],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.538, 0.578, 0.618, 0.672, 0.712, 0.753, 0.807, 0.86, 0.914, 0.968, 1.022],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [0.992, 1.066, 1.141, 1.24, 1.314, 1.389, 1.488, 1.587, 1.686, 1.786, 1.885],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("黑曜星魔伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.73, 0.784, 0.839, 0.912, 0.967, 1.021, 1.094, 1.167, 1.24, 1.313, 1.386, 1.459, 1.55],
    }),
    action(
      "霜陨风暴伤害",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [0.17, 0.183, 0.196, 0.213, 0.226, 0.238, 0.255, 0.272, 0.289, 0.306, 0.323, 0.34, 0.362],
      },
      "Citlali"
    ),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      em: [5.76, 6.192, 6.624, 7.2, 7.632, 8.064, 8.64, 9.216, 9.792, 10.368, 10.944, 11.52, 12.24],
      fixed: [1386, 1525, 1675, 1837, 2011, 2196, 2392, 2600, 2820, 3051, 3294, 3548, 3814],
    }),
  ];
  burstSkill = [
    action(
      "冰风暴伤害",
      AttackType.Burst,
      ElementType.Cryo,
      {
        atk: [5.376, 5.779, 6.182, 6.72, 7.123, 7.526, 8.064, 8.602, 9.139, 9.677, 10.214, 10.752, 11.424],
      },
      "Citlali"
    ),
    action("宿灵之髑伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.344, 1.445, 1.546, 1.68, 1.781, 1.882, 2.016, 2.15, 2.285, 2.419, 2.554, 2.688, 2.856],
    }),
  ];
  otherSkill = [
    action("4命·宿灵之髑·黑星伤害", AttackType.Other, ElementType.Cryo, {
      em: [18],
    }),
  ];
  buffs = [
    ...S_80_MYSTERY_115,
    {
      label: "五重天的寒雨",
      describe:
        "伊兹帕帕存在期间，队伍中附近的角色触发冻结反应或融化反应后，受本次反应影响的敌人的火元素与水元素抗性还会降低20%。",
      shareable: true,
      enable: true,
      target: BuffTarget.Enemy,
      effect: [
        { type: BuffType.EnemyHydroResistance, getValue: () => -20 },
        { type: BuffType.EnemyPyroResistance, getValue: () => -20 },
      ],
    },
    {
      label: "白燧蝶的星衣",
      describe:
        "元素战技霜昼黑星中，伊兹帕帕的霜陨风暴造成的伤害提升，提升值相当于茜特菈莉的元素精通的90%；元素爆发诸曜饬令中，冰风暴造成的伤害提升，提升值相当于茜特菈莉的元素精通的1200%。",
      enable: true,
      target: BuffTarget.Self,
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.9,
          actionOn: ActionOn.External,
          special: "Citlali",
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 12,
          actionOn: ActionOn.External,
          special: "Citlali",
        },
      ],
    },
    {
      label: "1命·四百星的芒刃",
      describe:
        "除茜特菈莉外的附近的当前场上角色的普通攻击、重击、下落攻击、元素战技或元素爆发造成伤害时，将消耗1层「星刃」，提升造成的伤害，提升值相当于茜特菈莉元素精通的200%。",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 2,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 2,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.FallingFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 2,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 2,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 2,
          actionOn: ActionOn.External,
        },
      ],
      condition: ({ constellation }) => constellation >= 1,
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "2命·吞心者的巡行",
      describe: `处于白曜护盾的庇护下或是伊兹帕帕跟随的其他角色的元素精通提升250点。
      <br />固有天赋「五重天的寒雨」的效果获得提升：伊兹帕帕存在期间，队伍中附近的角色触发冻结反应或融化反应后，受本次反应影响的敌人的火元素与水元素抗性还会额外降低20%`,
      effect: [
        { type: BuffType.EnemyHydroResistance, getValue: () => -20 },
        { type: BuffType.EnemyPyroResistance, getValue: () => -20 },
        { type: BuffType.MysteryFixed, getValue: () => 250 },
      ],
      condition: ({ constellation }) => constellation >= 2,
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "2命·吞心者的巡行",
      describe: `茜特菈莉的元素精通提升125点
      <br />固有天赋「五重天的寒雨」的效果获得提升：伊兹帕帕存在期间，队伍中附近的角色触发冻结反应或融化反应后，受本次反应影响的敌人的火元素与水元素抗性还会额外降低20%。`,
      effect: [
        { type: BuffType.MysteryFixed, getValue: () => 125 },
        { type: BuffType.EnemyHydroResistance, getValue: () => -20 },
        { type: BuffType.EnemyPyroResistance, getValue: () => -20 },
      ],
      condition: ({ constellation }) => constellation >= 2,
      enable: true,
      target: BuffTarget.Self,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·原动天的密契",
      describe: `施放元素战技霜昼黑星时，伊兹帕帕将消耗所有夜魂值，并在存在期间内持续消耗夜魂值；每通过上述方式消耗1点夜魂值，茜特菈莉就会获得1点「秘律之数」。
      <br />「秘律之数」上限为40点，基于茜特菈莉持有的「秘律之数」，每1点「秘律之数」会使附近的队伍中所有角色获得1.5%火元素与水元素伤害加成，并使茜特菈莉造成的伤害提升2.5%。`,
      effect: [
        { type: BuffType.PyroPrcent, getValue: (_, s) => 1.5 * s },
        { type: BuffType.HydroPrcent, getValue: (_, s) => 1.5 * s },
      ],
      condition: ({ constellation }) => constellation >= 6,
      enable: false,
      stackable: true,
      shareable: true,
      stackText: "「秘律之数」",
      stack: 40,
      limit: 40,
      target: BuffTarget.Other,
    },
    {
      label: "6命·原动天的密契",
      describe: `施放元素战技霜昼黑星时，伊兹帕帕将消耗所有夜魂值，并在存在期间内持续消耗夜魂值；每通过上述方式消耗1点夜魂值，茜特菈莉就会获得1点「秘律之数」。
      <br />「秘律之数」上限为40点，基于茜特菈莉持有的「秘律之数」，每1点「秘律之数」会使附近的队伍中所有角色获得1.5%火元素与水元素伤害加成，并使茜特菈莉造成的伤害提升2.5%。`,
      effect: [
        { type: BuffType.PyroPrcent, getValue: (_, s) => 1.5 * s },
        { type: BuffType.HydroPrcent, getValue: (_, s) => 1.5 * s },
        { type: BuffType.GlobalPrcent, getValue: (_, s) => 2.5 * s },
      ],
      condition: ({ constellation }) => constellation >= 6,
      enable: true,
      stackable: true,
      shareable: true,
      stackText: "「秘律之数」",
      stack: 40,
      limit: 40,
      target: BuffTarget.Self,
    },
  ];
}

/**
 * ![茜特菈莉](https://enka.network/ui/UI_AvatarIcon_Citlali.png)
 */
export const Citlali = new CitlaliData();
