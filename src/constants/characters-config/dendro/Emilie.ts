import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
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
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";

import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000099, "艾梅莉埃")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, 13568, 335, 730, 50)
@Icons("UI_AvatarIcon_Emilie")
class EmilieData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["逐影枪术·改", "撷萃调香", "香氛演绎"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.486, 0.525, 0.565, 0.621, 0.661, 0.706, 0.768, 0.83, 0.892, 0.96, 1.028],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.449, 0.486, 0.522, 0.574, 0.611, 0.653, 0.71, 0.767, 0.825, 0.887, 0.95],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.593, 0.641, 0.69, 0.758, 0.807, 0.862, 0.938, 1.014, 1.089, 1.172, 1.255],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.751, 0.812, 0.873, 0.961, 1.022, 1.092, 1.188, 1.284, 1.38, 1.485, 1.589],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.913, 0.988, 1.062, 1.168, 1.243, 1.328, 1.444, 1.561, 1.678, 1.805, 1.933],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.48, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action(
      "技能伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [0.471, 0.506, 0.541, 0.589, 0.624, 0.659, 0.706, 0.753, 0.8, 0.847, 0.895, 0.942, 1],
      },
      "Emilie"
    ),
    action(
      "柔灯之匣·一阶伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [0.396, 0.426, 0.455, 0.495, 0.525, 0.554, 0.594, 0.634, 0.673, 0.713, 0.752, 0.792, 0.842],
      },
      "Emilie"
    ),
    action(
      "柔灯之匣·二阶伤害·单次",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [0.84, 0.903, 0.966, 1.05, 1.113, 1.176, 1.26, 1.344, 1.428, 1.512, 1.596, 1.68, 1.785],
      },
      "Emilie"
    ),
    action("灵息之刺伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [0.385, 0.414, 0.443, 0.482, 0.51, 0.539, 0.578, 0.616, 0.655, 0.693, 0.732, 0.77, 0.819],
    }),
  ];
  burstSkill = [
    action("柔灯之匣·三阶伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [2.172, 2.335, 2.498, 2.715, 2.878, 3.041, 3.258, 3.475, 3.692, 3.91, 4.127, 4.344, 4.616],
    }),
  ];
  otherSkill = [
    action(
      "固有天赋·余薰",
      AttackType.Other,
      ElementType.Dendro,
      {
        atk: [6],
      },
      "Emilie"
    ),
  ];
  buffs = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "精馏",
      describe: "艾梅莉埃对处于燃烧状态下的敌人造成的伤害：每1000点攻击力都将提升15%伤害，至多通过这种方式提升36%伤害",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (data) => {
            return Math.min(36, ((data.baseATK + data.extraATK + data.extraATK_NT) / 1000) * 15);
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    {
      label: "1命·淡香浸析",
      describe: "撷萃调香与固有天赋「余薰」的清露香氛造成的伤害提升20%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 20, special: "Emilie" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·湖光顶调",
      describe: "撷萃调香与固有天赋「余薰」的清露香氛命中敌人时，降低敌人草元素抗性30%",
      effect: [{ type: BuffType.EnemyDendroResistance, getValue: () => -30 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·茉洁香迹",
      describe: "普通攻击与重击转为无法被附魔覆盖的草元素伤害，并提升造成的伤害，提升值相当于艾梅莉埃攻击力的300%",
      effect: [
        { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Dendro] },
        {
          type: BuffType.NormalFixed,
          getValue: (data) => {
            return (data.baseATK + data.extraATK + data.extraATK_NT) * 3;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => {
            return (data.baseATK + data.extraATK + data.extraATK_NT) * 3;
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![艾梅莉埃](https://enka.network/ui/UI_AvatarIcon_Emilie.png) */
export const Emilie = new EmilieData();
