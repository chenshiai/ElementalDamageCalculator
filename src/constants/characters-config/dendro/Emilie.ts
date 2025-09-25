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

import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000099, "艾梅莉埃")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, [13568, 335, 730], 50, [14533, 410, 782])
@Icons("UI_AvatarIcon_Emilie")
export class EmilieData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["逐影枪术·改", "撷萃调香", "香氛演绎"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.485608, 0.525134, 0.56466, 0.621126, 0.660652, 0.705825, 0.767938, 0.83005, 0.892163, 0.959922, 1.027681,
        1.09544, 1.1632, 1.230959, 1.298718,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.448954, 0.485497, 0.52204, 0.574244, 0.610787, 0.65255, 0.709974, 0.767399, 0.824823, 0.887468, 0.950113,
        1.012758, 1.075402, 1.138047, 1.200692,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.593004, 0.641272, 0.68954, 0.758494, 0.806762, 0.861925, 0.937774, 1.013624, 1.089473, 1.172218, 1.254963,
        1.337708, 1.420452, 1.503197, 1.585942,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.751029, 0.81216, 0.87329, 0.960619, 1.021749, 1.091613, 1.187674, 1.283736, 1.379798, 1.484593, 1.589388,
        1.694183, 1.798977, 1.903772, 2.008567,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.91332, 0.98766, 1.062, 1.1682, 1.24254, 1.3275, 1.44432, 1.56114, 1.67796, 1.8054, 1.93284, 2.06028, 2.18772,
        2.31516, 2.4426,
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
    action(
      "技能伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [
          0.4708, 0.50611, 0.54142, 0.5885, 0.62381, 0.65912, 0.7062, 0.75328, 0.80036, 0.84744, 0.89452, 0.9416,
          1.00045, 1.0593, 1.11815,
        ],
      },
      "Emilie"
    ),
    action(
      "柔灯之匣·一阶伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [
          0.396, 0.4257, 0.4554, 0.495, 0.5247, 0.5544, 0.594, 0.6336, 0.6732, 0.7128, 0.7524, 0.792, 0.8415, 0.891,
          0.9405,
        ],
      },
      "Emilie"
    ),
    action(
      "柔灯之匣·二阶伤害·单次",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [0.84, 0.903, 0.966, 1.05, 1.113, 1.176, 1.26, 1.344, 1.428, 1.512, 1.596, 1.68, 1.785, 1.89, 1.995],
      },
      "Emilie"
    ),
    action("灵息之刺伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        0.3852, 0.41409, 0.44298, 0.4815, 0.51039, 0.53928, 0.5778, 0.61632, 0.65484, 0.69336, 0.73188, 0.7704, 0.81855,
        0.8667, 0.91485,
      ],
    }),
  ];
  burstSkill = [
    action("柔灯之匣·三阶伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        2.172, 2.3349, 2.4978, 2.715, 2.8779, 3.0408, 3.258, 3.4752, 3.6924, 3.9096, 4.1268, 4.344, 4.6155, 4.887,
        5.1585,
      ],
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
