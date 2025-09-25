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
import { Constellation_E_3, Constellation_Q_5, S_80_MYSTERY_115 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000107, "茜特菈莉")
@Weapon(WeaponType.Magic)
@Element(ElementType.Cryo, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, [11634, 127, 763], 60, [12460, 155, 817])
@Icons("UI_AvatarIcon_Citlali")
export class CitlaliData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["玄鸾画水", "凤缕随翦舞", "鹍弦踏月出"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.434072, 0.466627, 0.499183, 0.54259, 0.575145, 0.607701, 0.651108, 0.694515, 0.737922, 0.78133, 0.824737,
        0.868144, 0.922403, 0.976662, 1.030921,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.388136, 0.417246, 0.446356, 0.48517, 0.51428, 0.54339, 0.582204, 0.621018, 0.659831, 0.698645, 0.737458,
        0.776272, 0.824789, 0.873306, 0.921823,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.537712, 0.57804, 0.618369, 0.67214, 0.712468, 0.752797, 0.806568, 0.860339, 0.91411, 0.967882, 1.021653,
        1.075424, 1.142638, 1.209852, 1.277066,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [
        0.992, 1.0664, 1.1408, 1.24, 1.3144, 1.3888, 1.488, 1.5872, 1.6864, 1.7856, 1.8848, 1.984, 2.108, 2.232, 2.356,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("黑曜星魔伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.7296, 0.78432, 0.83904, 0.912, 0.96672, 1.02144, 1.0944, 1.16736, 1.24032, 1.31328, 1.38624, 1.4592, 1.5504,
        1.6416, 1.7328,
      ],
    }),
    action(
      "霜陨风暴伤害",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [
          0.17024, 0.183008, 0.195776, 0.2128, 0.225568, 0.238336, 0.25536, 0.272384, 0.289408, 0.306432, 0.323456,
          0.34048, 0.36176, 0.38304, 0.40432,
        ],
      },
      "Citlali"
    ),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      em: [5.76, 6.192, 6.624, 7.2, 7.632, 8.064, 8.64, 9.216, 9.792, 10.368, 10.944, 11.52, 12.24, 12.96, 13.68],
      fixed: [
        1386.6759, 1525.3628, 1675.6068, 1837.4082, 2010.7667, 2195.6826, 2392.1558, 2600.186, 2819.7734, 3050.9182,
        3293.6204, 3547.8796, 3813.696, 4091.0698, 4380,
      ],
    }),
  ];
  burstSkill = [
    action(
      "冰风暴伤害",
      AttackType.Burst,
      ElementType.Cryo,
      {
        atk: [
          5.376, 5.7792, 6.1824, 6.72, 7.1232, 7.5264, 8.064, 8.6016, 9.1392, 9.6768, 10.2144, 10.752, 11.424, 12.096,
          12.768,
        ],
      },
      "Citlali"
    ),
    action("宿灵之髑伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.344, 1.4448, 1.5456, 1.68, 1.7808, 1.8816, 2.016, 2.1504, 2.2848, 2.4192, 2.5536, 2.688, 2.856, 3.024, 3.192,
      ],
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
