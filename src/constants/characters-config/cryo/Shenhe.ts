import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import {
  Constellation_E_3,
  Constellation_Q_5,
  S_80_ATK_28P,
} from "../buffs";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";

@EnKaId(10000063, "申鹤")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, 12993, 304, 830, 80)
@Icons("UI_AvatarIcon_Shenhe")
class ShenheData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["踏辰摄斗", "仰灵威召将役咒", "神女遣灵真诀"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.468, 0.503, 0.553, 0.589, 0.629, 0.684, 0.739, 0.795, 0.855, 0.916],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.403, 0.435, 0.568, 0.515, 0.548, 0.585, 0.636, 0.688, 0.739, 0.796, 0.852],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.533, 0.577, 0.62, 0.682, 0.725, 0.775, 0.843, 0.911, 0.98, 1.054, 1.128],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.263, 0.285, 0.306, 0.337, 0.358, 0.383, 0.416, 0.45, 0.484, 0.52, 0.557],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.263, 0.285, 0.306, 0.337, 0.358, 0.383, 0.416, 0.45, 0.484, 0.52, 0.557],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.656, 0.71, 0.763, 0.839, 0.893, 0.954, 1.038, 1.122, 1.206, 1.297, 1.389],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.107, 1.197, 1.287, 1.416, 1.506, 1.609, 1.75, 1.892, 2.033, 2.188, 2.342],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("点按技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.39, 1.5, 1.6, 1.74, 1.84, 1.95, 2.09, 2.23, 2.37, 2.51, 2.65, 2.78, 2.96],
    }),
    action("长按技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.888, 2.02, 2.171, 2.36, 2.502, 2.643, 2.832, 3.021, 3.21, 3.398, 3.587, 3.776, 4.012],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.01, 1.08, 1.16, 1.26, 1.34, 1.41, 1.51, 1.61, 1.71, 1.81, 1.92, 2.02, 2.14],
    }),
    action("持续伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.331, 0.356, 0.381, 0.414, 0.439, 0.464, 0.497, 0.53, 0.563, 0.596, 0.629, 0.662, 0.704],
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
            let a = [0.457, 0.491, 0.525, 0.571, 0.605, 0.639, 0.685, 0.731, 0.776, 0.822, 0.868, 0.913, 0.97][
              data.skillLevel + data.skillLevelAdd - 1
            ];
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
