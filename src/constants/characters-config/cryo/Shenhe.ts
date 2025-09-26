import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_ATK_28P } from "../buffs";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";

@EnKaId(10000063, "申鹤")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [12993, 304, 830], 80, [13916, 372, 889])
@Icons("UI_AvatarIcon_Shenhe")
export class ShenheData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["踏辰摄斗", "仰灵威召将役咒", "神女遣灵真诀"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.43258, 0.46779, 0.503, 0.5533, 0.58851, 0.62875, 0.68408, 0.73941, 0.79474, 0.8551, 0.91546, 0.97582, 1.03618,
        1.09654, 1.1569,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.40248, 0.43524, 0.468, 0.5148, 0.54756, 0.585, 0.63648, 0.68796, 0.73944, 0.7956, 0.85176, 0.90792, 0.96408,
        1.02024, 1.0764,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5332, 0.5766, 0.62, 0.682, 0.7254, 0.775, 0.8432, 0.9114, 0.9796, 1.054, 1.1284, 1.2028, 1.2772, 1.3516,
        1.426,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.26316, 0.28458, 0.306, 0.3366, 0.35802, 0.3825, 0.41616, 0.44982, 0.48348, 0.5202, 0.55692, 0.59364, 0.63036,
        0.66708, 0.7038,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.65618, 0.70959, 0.763, 0.8393, 0.89271, 0.95375, 1.03768, 1.12161, 1.20554, 1.2971, 1.38866, 1.48022, 1.57178,
        1.66334, 1.7549,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.106734, 1.196817, 1.2869, 1.41559, 1.505673, 1.608625, 1.750184, 1.891743, 2.033302, 2.18773, 2.342158,
        2.496586, 2.651014, 2.805442, 2.95987,
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
    action("点按技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.392, 1.4964, 1.6008, 1.74, 1.8444, 1.9488, 2.088, 2.2272, 2.3664, 2.5056, 2.6448, 2.784, 2.958, 3.132, 3.306,
      ],
    }),
    action("长按技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.888, 2.0296, 2.1712, 2.36, 2.5016, 2.6432, 2.832, 3.0208, 3.2096, 3.3984, 3.5872, 3.776, 4.012, 4.248, 4.484,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.008, 1.0836, 1.1592, 1.26, 1.3356, 1.4112, 1.512, 1.6128, 1.7136, 1.8144, 1.9152, 2.016, 2.142, 2.268, 2.394,
      ],
    }),
    action("持续伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.3312, 0.35604, 0.38088, 0.414, 0.43884, 0.46368, 0.4968, 0.52992, 0.56304, 0.59616, 0.62928, 0.6624, 0.7038,
        0.7452, 0.7866,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_ATK_28P,
    {
      label: "元素战技·冰翎",
      describe: `普通攻击、重击、下落攻击、元素战技和元素爆发对敌人造成冰元素伤害时，基于申鹤自己当前的攻击力，提高造成的伤害`,
      effect: [
        {
          type: BuffType.CryoFixed,
          getValue: (data) => {
            let a = [
              0.45656, 0.490802, 0.525044, 0.5707, 0.604942, 0.639184, 0.68484, 0.730496, 0.776152, 0.821808, 0.867464,
              0.91312, 0.97019, 1.02726, 1.08433,
            ][data.skillLevel + data.skillLevelAdd - 1];
            return (data.baseATK + data.extraATK + data.extraATK_NT) * a;
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "元素爆发·「箓灵」领域",
      describe: `使其中敌人的冰元素抗性与物理抗性降低`,
      effect: [
        {
          type: BuffType.EnemyCryoResistance,
          getValue: (data) => {
            return -[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15][data.burstLevel + data.burstLevelAdd - 1];
          },
        },
        {
          type: BuffType.EnemyPhysicalResistance,
          getValue: (data) => {
            return -[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 15, 15][data.burstLevel + data.burstLevelAdd - 1];
          },
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "大洞弥罗尊法",
      describe: `处于神女遣灵真诀的领域中的当前场上角色，冰元素伤害加成提高15%`,
      effect: [
        {
          type: BuffType.CryoPrcent,
          getValue: () => 15,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "缚灵通真法印",
      describe: `元素战技和元素爆发、普通攻击、重击和下落攻击造成的伤害提高15%`,
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 15 },
        { type: BuffType.StrongPrcent, getValue: () => 15 },
        { type: BuffType.FallingPrcent, getValue: () => 15 },
        { type: BuffType.SkillPrcent, getValue: () => 15 },
        { type: BuffType.BurstPrcent, getValue: () => 15 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·定蒙",
      describe: `神女遣灵真诀领域中的当前场上角色，冰元素伤害的暴击伤害提高15%`,
      effect: [
        {
          type: BuffType.CryoCritcalHurt,
          getValue: () => 15,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·洞观",
      describe: `申鹤自己施放仰灵威召将役咒时，将清除所有「霜霄诀」，并根据清除的层数，每层使本次仰灵威召将役咒造成的伤害提高5%`,
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (_, s) => 5 * s,
        },
      ],
      enable: true,
      stackable: true,
      stack: 0,
      limit: 50,
      stackText: "「霜霄诀」",
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![申鹤](https://enka.network/ui/UI_AvatarIcon_Shenhe.png) */
export const Shenhe = new ShenheData();
