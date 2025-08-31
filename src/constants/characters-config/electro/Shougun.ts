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
      atk: [0.397, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784, 0.847],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.397, 0.43, 0.462, 0.508, 0.541, 0.578, 0.628, 0.679, 0.73, 0.785, 0.849],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.499, 0.539, 0.58, 0.638, 0.679, 0.725, 0.789, 0.853, 0.916, 0.986, 1.066],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.29, 0.313, 0.337, 0.371, 0.394, 0.421, 0.458, 0.495, 0.533, 0.573, 0.619],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.29, 0.313, 0.337, 0.371, 0.394, 0.421, 0.458, 0.495, 0.533, 0.573, 0.619],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.655, 0.708, 0.761, 0.837, 0.89, 0.951, 1.035, 1.119, 1.202, 1.294, 1.398],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.996, 1.077, 1.158, 1.274, 1.355, 1.448, 1.575, 1.702, 1.83, 1.969, 2.128],
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
      atk: [1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227, 2.344, 2.491],
    }),
    action("协同攻击伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.42, 0.452, 0.483, 0.525, 0.557, 0.588, 0.63, 0.672, 0.714, 0.756, 0.798, 0.84, 0.893],
    }),
  ];
  burstSkill = [
    action(
      "梦想一刀基础伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [4.01, 4.31, 4.61, 5.01, 5.31, 5.61, 6.01, 6.41, 6.81, 7.21, 7.62, 8.02, 8.52, 9.02],
      },
      "Shougun"
    ),
    action(
      "一段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.447, 0.478, 0.508, 0.549, 0.58, 0.615, 0.661, 0.707, 0.752, 0.798, 0.844, 0.89, 0.935, 0.981],
      },
      "Shougun2"
    ),
    action(
      "二段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.44, 0.47, 0.5, 0.54, 0.569, 0.604, 0.649, 0.694, 0.739, 0.784, 0.829, 0.874, 0.919, 0.964],
      },
      "Shougun2"
    ),
    action(
      "三段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.538, 0.575, 0.612, 0.661, 0.697, 0.74, 0.795, 0.85, 0.905, 0.96, 1.015, 1.07, 1.125, 1.18],
      },
      "Shougun2"
    ),
    action(
      "四段伤害·1",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.309, 0.33, 0.351, 0.379, 0.4, 0.425, 0.456, 0.488, 0.519, 0.551, 0.583, 0.614, 0.646, 0.677],
      },
      "Shougun2"
    ),
    action(
      "四段伤害·2",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.31, 0.331, 0.352, 0.38, 0.401, 0.426, 0.458, 0.489, 0.521, 0.553, 0.584, 0.616, 0.648, 0.679],
      },
      "Shougun2"
    ),
    action(
      "五段伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.739, 0.79, 0.84, 0.908, 0.958, 1.017, 1.092, 1.168, 1.244, 1.319, 1.395, 1.471, 1.546, 1.622],
      },
      "Shougun2"
    ),
    action(
      "重击伤害·1",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.616, 0.658, 0.7, 0.756, 0.798, 0.847, 0.91, 0.973, 1.036, 1.099, 1.162, 1.225, 1.288, 1.351],
      },
      "Shougun2"
    ),
    action(
      "重击伤害·2",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.744, 0.794, 0.845, 0.913, 0.963, 1.023, 1.099, 1.175, 1.251, 1.327, 1.403, 1.479, 1.555, 1.631],
      },
      "Shougun2"
    ),
    action(
      "下坠期间伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353, 1.442, 1.531, 1.621],
      },
      "Shougun2"
    ),
    action(
      "低空坠地冲击伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71, 2.88, 3.06, 3.24],
      },
      "Shougun2"
    ),
    action(
      "高空坠地冲击伤害",
      AttackType.Burst,
      ElementType.Electro,
      {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38, 3.6, 3.82, 4.05],
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
              [0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.3, 0.3, 0.3, 0.3][
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
                0.0389, 0.0418, 0.0447, 0.0486, 0.0515, 0.0544, 0.0583, 0.0622, 0.0661, 0.07, 0.0739, 0.0778, 0.0826,
                0.0875,
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
                0.0073, 0.0078, 0.0084, 0.0091, 0.0096, 0.0102, 0.0109, 0.0116, 0.0123, 0.0131, 0.0138, 0.0145, 0.0154,
                0.0163,
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
