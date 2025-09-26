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
      atk: [
        0.492574, 0.532667, 0.57276, 0.630036, 0.670129, 0.71595, 0.778954, 0.841957, 0.904961, 0.973692, 1.042423,
        1.111154, 1.179886, 1.248617, 1.317348,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.479209, 0.518215, 0.55722, 0.612942, 0.651947, 0.696525, 0.757819, 0.819113, 0.880408, 0.947274, 1.01414,
        1.081007, 1.147873, 1.21474, 1.281606,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.293062, 0.316916, 0.34077, 0.374847, 0.398701, 0.425963, 0.463447, 0.500932, 0.538417, 0.579309, 0.620201,
        0.661094, 0.701986, 0.742879, 0.783771,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.758907, 0.820679, 0.88245, 0.970695, 1.032466, 1.103063, 1.200132, 1.297202, 1.394271, 1.500165, 1.606059,
        1.711953, 1.817847, 1.923741, 2.029635,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.22378, 1.32339, 1.423, 1.5653, 1.66491, 1.77875, 1.93528, 2.09181, 2.24834, 2.4191, 2.58986, 2.76062, 2.93138,
        3.10214, 3.2729,
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
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.304, 1.4018, 1.4996, 1.63, 1.7278, 1.8256, 1.956, 2.0864, 2.2168, 2.3472, 2.4776, 2.608, 2.771, 2.934, 3.097,
      ],
    }),
    action(
      "冥祭伤害",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [
          1.568, 1.6856, 1.8032, 1.96, 2.0776, 2.1952, 2.352, 2.5088, 2.6656, 2.8224, 2.9792, 3.136, 3.332, 3.528,
          3.724,
        ],
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
        atk: [
          0.782832, 0.846551, 0.91027, 1.001297, 1.065016, 1.137838, 1.237967, 1.338097, 1.438227, 1.547459, 1.656691,
          1.765924, 1.875156, 1.984389, 2.093621,
        ],
      },
      "Cyno"
    ),
    action(
      "二段伤害",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [
          0.824688, 0.891814, 0.95894, 1.054834, 1.12196, 1.198675, 1.304158, 1.409642, 1.515125, 1.630198, 1.745271,
          1.860344, 1.975416, 2.090489, 2.205562,
        ],
      },
      "Cyno"
    ),
    action(
      "三段伤害",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [
          1.046336, 1.131503, 1.21667, 1.338337, 1.423504, 1.520837, 1.654671, 1.788505, 1.922339, 2.068339, 2.214339,
          2.36034, 2.50634, 2.652341, 2.798341,
        ],
      },
      "Cyno"
    ),
    action(
      "四段伤害·单次",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [
          0.516942, 0.559018, 0.601095, 0.661205, 0.703281, 0.751369, 0.817489, 0.88361, 0.94973, 1.021861, 1.093993,
          1.166124, 1.238256, 1.310387, 1.382518,
        ],
      },
      "Cyno"
    ),
    action(
      "五段伤害",
      AttackType.Normal,
      ElementType.Electro,
      {
        atk: [
          1.308447, 1.414948, 1.52145, 1.673595, 1.780096, 1.901812, 2.069172, 2.236531, 2.403891, 2.586465, 2.769039,
          2.951613, 3.134187, 3.316761, 3.499335,
        ],
      },
      "Cyno"
    ),
    action("重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [
        1.0105, 1.09275, 1.175, 1.2925, 1.37475, 1.46875, 1.598, 1.72725, 1.8565, 1.9975, 2.1385, 2.2795, 2.4205,
        2.5615, 2.7025,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
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
    ),
  ];
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
