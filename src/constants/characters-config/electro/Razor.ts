import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_PHYSICAL_30P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000020, "雷泽")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Electro, SecondElementType.Magus)
@BaseData(Rarity.Four, [11962, 234, 751], 80, [12790, 293, 803])
@Icons("UI_AvatarIcon_Razor")
export class RazorData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["钢脊", "利爪与苍雷", "雷牙"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.9592, 1.0246, 1.09, 1.1772, 1.2426, 1.3189, 1.417, 1.5151, 1.6132, 1.7113, 1.8094, 1.9075, 2.0056, 2.1037,
        2.2018,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.82632, 0.88266, 0.939, 1.01412, 1.07046, 1.13619, 1.2207, 1.30521, 1.38972, 1.47423, 1.55874, 1.64325,
        1.72776, 1.81227, 1.89678,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.03312, 1.10356, 1.174, 1.26792, 1.33836, 1.42054, 1.5262, 1.63186, 1.73752, 1.84318, 1.94884, 2.0545, 2.16016,
        2.26582, 2.37148,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.36048, 1.45324, 1.546, 1.66968, 1.76244, 1.87066, 2.0098, 2.14894, 2.28808, 2.42722, 2.56636, 2.7055, 2.84464,
        2.98378, 3.12292,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.625392, 0.676296, 0.7272, 0.79992, 0.850824, 0.909, 0.988992, 1.068984, 1.148976, 1.23624, 1.323504, 1.410768,
        1.498032, 1.585296, 1.67256,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.1309, 1.22295, 1.315, 1.4465, 1.53855, 1.64375, 1.7884, 1.93305, 2.0777, 2.2355, 2.3933, 2.5511, 2.7089,
        2.8667, 3.0245,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.820466, 0.887248, 0.95403, 1.049433, 1.116215, 1.192538, 1.297481, 1.402424, 1.507367, 1.621851, 1.736335,
        1.850818, 1.965302, 2.079785, 2.194269,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.640584, 1.77412, 1.907656, 2.098421, 2.231957, 2.38457, 2.594412, 2.804254, 3.014096, 3.243015, 3.471933,
        3.700852, 3.929771, 4.15869, 4.387608,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        2.049178, 2.215971, 2.382765, 2.621042, 2.787835, 2.978456, 3.24056, 3.502665, 3.764769, 4.050701, 4.336632,
        4.622564, 4.908496, 5.194428, 5.48036,
      ],
    }),
  ];
  elementSkill = [
    action("点按技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.992, 2.1414, 2.2908, 2.49, 2.6394, 2.7888, 2.988, 3.1872, 3.3864, 3.5856, 3.7848, 3.984, 4.233, 4.482, 4.731,
      ],
    }),
    action("长按技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        2.952, 3.1734, 3.3948, 3.69, 3.9114, 4.1328, 4.428, 4.7232, 5.0184, 5.3136, 5.6088, 5.904, 6.273, 6.642, 7.011,
      ],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6, 3.8],
    }),
    action(
      "狼魂·一段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.9592, 1.0246, 1.09, 1.1772, 1.2426, 1.3189, 1.417, 1.5151, 1.6132, 1.7113, 1.8094, 1.9075, 2.0056, 2.1037,
          2.2018,
        ].map((item, index) => {
          return (
            item *
            [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54, 0.57][index]
          );
        }),
      },
      "razor"
    ),
    action(
      "狼魂·二段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.82632, 0.88266, 0.939, 1.01412, 1.07046, 1.13619, 1.2207, 1.30521, 1.38972, 1.47423, 1.55874, 1.64325,
          1.72776, 1.81227, 1.89678,
        ].map((item, index) => {
          return (
            item *
            [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54, 0.57][index]
          );
        }),
      },
      "razor"
    ),
    action(
      "狼魂·三段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          1.03312, 1.10356, 1.174, 1.26792, 1.33836, 1.42054, 1.5262, 1.63186, 1.73752, 1.84318, 1.94884, 2.0545,
          2.16016, 2.26582, 2.37148,
        ].map((item, index) => {
          return (
            item *
            [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54, 0.57][index]
          );
        }),
      },
      "razor"
    ),
    action(
      "狼魂·四段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          1.36048, 1.45324, 1.546, 1.66968, 1.76244, 1.87066, 2.0098, 2.14894, 2.28808, 2.42722, 2.56636, 2.7055,
          2.84464, 2.98378, 3.12292,
        ].map((item, index) => {
          return (
            item *
            [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54, 0.57][index]
          );
        }),
      },
      "razor"
    ),
  ];
  otherSkill = [
    action(
      "魔导·秘仪·落雷伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [1.5],
      },
      "razor"
    ),
    action("6命·天狼落雷伤害", AttackType.Other, ElementType.Electro, {
      atk: [1],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_PHYSICAL_30P,
    {
      label: "饥饿",
      describe: "雷泽的元素能量在50%以下时，元素充能效率提高30%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 }],
      enable: true,
    },
    {
      label: "雷之印充能",
      describe: "每有一个雷之印，元素充能效率提高20%",
      effect: [{ type: BuffType.ChargeFixed, getValue: (_, s) => 20 * s }],
      enable: true,
      stackable: true,
      limit: 3,
      stack: 3,
      stackText: "雷之印",
    },
    {
      label: "魔女的前夜礼·苍雷奔涌",
      describe: "雷泽的元素爆发雷牙获得强化：雷狼造成的伤害提升，提升值相当于雷泽的攻击力的70%。",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.7,
          special: "razor",
        },
      ],
      enable: true,
    },
    {
      label: "1命·狼性",
      describe: "雷泽获取元素晶球或元素微粒后的8秒内，造成的伤害提高10%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 10 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·压制",
      describe: "雷泽攻击生命值低于30%的敌人时，暴击率提高10%",
      effect: [{ type: BuffType.Critcal, getValue: () => 10 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·撕咬",
      describe: "利爪与苍雷点按时，会使命中的敌人防御力降低15%，持续7秒",
      effect: [{ type: BuffType.ReduceArmour, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_E_5,
    {
      label: "6命·天狼",
      describe: "消耗雷之印后的15秒内，雷泽的暴击率提升10%，暴击伤害提升50%。",
      effect: [
        { type: BuffType.Critcal, getValue: () => 10 },
        { type: BuffType.CritcalHurt, getValue: () => 50 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![雷泽](https://enka.network/ui/UI_AvatarIcon_Razor.png) */
export const Razor = new RazorData();
