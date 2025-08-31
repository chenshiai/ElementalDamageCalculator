import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000071, "赛诺")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, [12491, 318, 859], 80, [13379, 390, 920])
@Icons("UI_AvatarIcon_Cyno")
export class CynoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["七圣枪术", "秘仪·律渊渡魂", "圣仪·煟煌随狼行"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.493, 0.533, 0.573, 0.63, 0.67, 0.716, 0.779, 0.842, 0.905, 0.974, 1.042],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.479, 0.518, 0.557, 0.613, 0.652, 0.697, 0.758, 0.819, 0.88, 0.947, 1.014],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.293, 0.317, 0.341, 0.375, 0.399, 0.426, 0.463, 0.501, 0.538, 0.579, 0.62],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.293, 0.317, 0.341, 0.375, 0.399, 0.426, 0.463, 0.501, 0.538, 0.579, 0.62],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.759, 0.821, 0.882, 0.971, 1.033, 1.103, 1.2, 1.297, 1.394, 1.5, 1.606],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.224, 1.323, 1.423, 1.565, 1.665, 1.779, 1.935, 2.092, 2.248, 2.419, 2.59],
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
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.304, 1.402, 1.5, 1.63, 1.728, 1.826, 1.956, 2.086, 2.217, 2.347, 2.478, 2.608, 2.771],
    }),
    action(
      "冥祭伤害",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [1.568, 1.686, 1.803, 1.96, 2.078, 2.195, 2.352, 2.509, 2.666, 2.822, 2.979, 3.136, 3.332],
      },
      "Cyno"
    ),
  ];
  burstSkill = [
    action(
      "一段伤害",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [0.783, 0.847, 0.91, 1.001, 1.065, 1.138, 1.238, 1.338, 1.438, 1.548, 1.657, 1.766, 1.875],
      },
      "Cyno"
    ),
    action(
      "二段伤害",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [0.825, 0.892, 0.959, 1.055, 1.122, 1.199, 1.304, 1.41, 1.515, 1.63, 1.745, 1.86, 1.975],
      },
      "Cyno"
    ),
    action(
      "三段伤害",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [1.046, 1.132, 1.217, 1.338, 1.424, 1.521, 1.655, 1.789, 1.922, 2.068, 2.214, 2.36, 2.506],
      },
      "Cyno"
    ),
    action(
      "四段伤害·1",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [0.517, 0.559, 0.601, 0.661, 0.703, 0.751, 0.818, 0.884, 0.95, 1.022, 1.094, 1.166, 1.238],
      },
      "Cyno"
    ),
    action(
      "四段伤害·2",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [0.517, 0.559, 0.601, 0.661, 0.703, 0.751, 0.818, 0.884, 0.95, 1.022, 1.094, 1.166, 1.238],
      },
      "Cyno"
    ),
    action(
      "五段伤害",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [1.308, 1.415, 1.522, 1.674, 1.78, 1.9, 2.069, 2.237, 2.404, 2.587, 2.769, 2.952, 3.134],
      },
      "Cyno"
    ),
    action("重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [1.011, 1.093, 1.175, 1.293, 1.375, 1.469, 1.598, 1.727, 1.857, 1.998, 2.139, 2.28, 2.421],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353, 1.442, 1.531],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71, 2.884, 3.062],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38, 3.602, 3.825],
    }),
  ];
  otherSkill = [
    action(
      "渡荒之雷伤害",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [1],
      },
      "Cyno2"
    ),];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "元素爆发·启途誓使",
      describe: "赛诺的元素精通提升100点",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 100,
        },
      ],
      enable: true,
    },
    {
      label: "落羽的裁择",
      describe:
        "赛诺在「末途真眼」状态期间施放秘仪·律渊渡魂时，将触发「裁定」效果，使此次秘仪·律渊渡魂造成的伤害提升35%",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: () => 35,
          special: "Cyno",
        },
      ],
      enable: true,
    },
    {
      label: "九弓的执命",
      describe: `基于赛诺的元素精通，提高自身以下攻击造成的伤害值：
      启途誓使状态下的普通攻击：元素精通的150%；
      固有天赋「落羽的裁择」的渡荒之雷：元素精通的250%`,
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 1.5,
          special: "Cyno",
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 2.5,
          special: "Cyno2",
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    {
      label: "2命·令仪·引谒归灵",
      describe: "赛诺的普通攻击命中敌人后，雷元素伤害加成提升10%，至多叠加5层",
      effect: [
        {
          type: BuffType.ElectroPrcent,
          getValue: (_, s) => s * 10,
        },
      ],
      enable: true,
      stackable: true,
      stack: 5,
      limit: 5,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![赛诺](https://enka.network/ui/UI_AvatarIcon_Cyno.png) */
export const Cyno = new CynoData();
