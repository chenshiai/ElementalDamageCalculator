import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CHARGE_32P } from "../buffs";

@EnKaId(10000052, "雷电将军")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, [12907, 337, 789], 90, [13825, 413, 845])
@Icons("UI_AvatarIcon_Shougun")
export class ShougunData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["源流", "神变·恶曜开眼", "奥义·梦想真说"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.39646, 0.42873, 0.461, 0.5071, 0.53937, 0.57625, 0.62696, 0.67767, 0.72838, 0.7837, 0.847087, 0.921631,
        0.996175, 1.070719, 1.152039,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.39732, 0.42966, 0.462, 0.5082, 0.54054, 0.5775, 0.62832, 0.67914, 0.72996, 0.7854, 0.848925, 0.92363,
        0.998336, 1.073041, 1.154538,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4988, 0.5394, 0.58, 0.638, 0.6786, 0.725, 0.7888, 0.8526, 0.9164, 0.986, 1.06575, 1.159536, 1.253322,
        1.347108, 1.44942,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.28982, 0.31341, 0.337, 0.3707, 0.39429, 0.42125, 0.45832, 0.49539, 0.53246, 0.5729, 0.619237, 0.67373,
        0.728223, 0.782716, 0.842163,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.65446, 0.70773, 0.761, 0.8371, 0.89037, 0.95125, 1.03496, 1.11867, 1.20238, 1.2937, 1.398338, 1.521391,
        1.644445, 1.767499, 1.901739,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0, 1.07694, 1.158, 1.2738, 1.35486, 1.4475, 1.57488, 1.70226, 1.82964, 1.9686, 2.127825, 2.315074, 2.502322,
        2.689571, 2.893842,
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
        1.172, 1.2599, 1.3478, 1.465, 1.5529, 1.6408, 1.758, 1.8752, 1.9924, 2.1096, 2.2268, 2.344, 2.4905, 2.637,
        2.7835,
      ],
    }),
    action("协同攻击伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.42, 0.4515, 0.483, 0.525, 0.5565, 0.588, 0.63, 0.672, 0.714, 0.756, 0.798, 0.84, 0.8925, 0.945, 0.9975],
    }),
  ];
  burstSkill = [
    action(
      "梦想一刀基础伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          4.008, 4.3086, 4.6092, 5.01, 5.3106, 5.6112, 6.012, 6.4128, 6.8136, 7.2144, 7.6152, 8.016, 8.517, 9.018,
          9.519,
        ],
      },
      "Shougun"
    ),
    action(
      "一段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.447374, 0.477877, 0.50838, 0.54905, 0.579553, 0.61514, 0.660894, 0.706648, 0.752402, 0.798157, 0.843911,
          0.889665, 0.935419, 0.981173, 1.026928,
        ],
      },
      "Shougun2"
    ),
    action(
      "二段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.43956, 0.46953, 0.4995, 0.53946, 0.56943, 0.604395, 0.64935, 0.694305, 0.73926, 0.784215, 0.82917, 0.874125,
          0.91908, 0.964035, 1.00899,
        ],
      },
      "Shougun2"
    ),
    action(
      "三段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.538217, 0.574913, 0.61161, 0.660539, 0.697235, 0.740048, 0.795093, 0.850138, 0.905183, 0.960228, 1.015273,
          1.070318, 1.125362, 1.180407, 1.235452,
        ],
      },
      "Shougun2"
    ),
    action(
      "四段伤害·1",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.30888, 0.32994, 0.351, 0.37908, 0.40014, 0.42471, 0.4563, 0.48789, 0.51948, 0.55107, 0.58266, 0.61425,
          0.64584, 0.67743, 0.70902,
        ],
      },
      "Shougun2"
    ),
    action(
      "四段伤害·2",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.30976, 0.33088, 0.352, 0.38016, 0.40128, 0.42592, 0.4576, 0.48928, 0.52096, 0.55264, 0.58432, 0.616,
          0.64768, 0.67936, 0.71104,
        ],
      },
      "Shougun2"
    ),
    action(
      "五段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.739438, 0.789854, 0.84027, 0.907492, 0.957908, 1.016727, 1.092351, 1.167975, 1.2436, 1.319224, 1.394848,
          1.470473, 1.546097, 1.621721, 1.697345,
        ],
      },
      "Shougun2"
    ),
    action(
      "重击伤害·1",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.616, 0.658, 0.7, 0.756, 0.798, 0.847, 0.91, 0.973, 1.036, 1.099, 1.162, 1.225, 1.288, 1.351, 1.414],
      },
      "Shougun2"
    ),
    action(
      "重击伤害·2",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.7436, 0.7943, 0.845, 0.9126, 0.9633, 1.02245, 1.0985, 1.17455, 1.2506, 1.32665, 1.4027, 1.47875, 1.5548,
          1.63085, 1.7069,
        ],
      },
      "Shougun2"
    ),
    action(
      "下坠期间伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
          1.442196, 1.531404, 1.620612, 1.70982,
        ],
      },
      "Shougun2"
    ),
    action(
      "低空坠地冲击伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
          2.883781, 3.062159, 3.240537, 3.418915,
        ],
      },
      "Shougun2"
    ),
    action(
      "高空坠地冲击伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [
          1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
          3.601998, 3.824802, 4.047606, 4.27041,
        ],
      },
      "Shougun2"
    ),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CHARGE_32P,
    {
      label: "元素战技·雷罚恶曜之眼",
      describe: "雷罚恶曜之眼的角色在持续期间内，元素爆发造成的伤害获得提升，提升程度基于元素爆发的元素能量",
      effect: [
        {
          type: BuffType.BurstPrcent,
          getValue: (data, _, receiverData) => {
            return (
              [0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3][
                data.skillLevel + data.skillLevelAdd - 1
              ] * (receiverData?.burstCharge ? receiverData.burstCharge : data.burstCharge)
            );
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      shareable: true,
      target: BuffTarget.All,
      enable: true,
    },
    {
      label: "殊胜之御体",
      describe: "基于元素充能效率超过100%的部分，每1%使雷电将军雷元素伤害加成提升0.4%",
      effect: [
        {
          type: BuffType.ElectroPrcent,
          getValue: (data) => Math.max(0, data.chargeEfficiency - 100) * 0.4,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "诸愿百眼之轮",
      describe: "依据消耗的愿力层数，增加梦想一刀与梦想一心的攻击造成的伤害",
      effect: [
        {
          type: BuffType.BurstAdd,
          getValue: (data, s) => {
            return (
              [
                0.03888, 0.041796, 0.044712, 0.0486, 0.051516, 0.054432, 0.05832, 0.062208, 0.066096, 0.069984,
                0.073872, 0.07776, 0.08262, 0.08748, 0.09234,
              ][data.burstLevel + data.burstLevelAdd - 1] * s
            );
          },
          actionOn: ActionOn.Indirect,
          special: "Shougun",
        },
        {
          type: BuffType.BurstAdd,
          getValue: (data, s) => {
            return (
              [
                0.007262, 0.007806, 0.008351, 0.009077, 0.009622, 0.010166, 0.010892, 0.011619, 0.012345, 0.013071,
                0.013797, 0.014523, 0.015431, 0.016339, 0.017246,
              ][data.burstLevel + data.burstLevelAdd - 1] * s
            );
          },
          actionOn: ActionOn.Indirect,
          special: "Shougun2",
        },
      ],
      enable: true,
      stack: 60,
      limit: 60,
      stackable: true,
      stackText: "愿力层数",
    },
    {
      label: "2命·斩铁断金",
      describe: "奥义·梦想真说的梦想一刀与梦想一心状态期间的攻击将无视敌人60%的防御力",
      effect: [{ type: BuffType.DefensePenetration, getValue: () => 60 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·誓奉常道",
      describe: "奥义·梦想真说施加的梦想一心状态结束后，附近的队伍中所有角色（不包括雷电将军自己）的攻击力提升30%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 30 }],
      enable: true,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![雷电将军](https://enka.network/ui/UI_AvatarIcon_Shougun.png) */
export const Shougun = new ShougunData();
