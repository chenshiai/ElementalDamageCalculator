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
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000106, "玛薇卡")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, [12552, 359, 792], 0, [13444, 440, 848])
@Icons("UI_AvatarIcon_Mavuika")
export class MavuikaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["以命织火", "称名之刻", "燔天之时"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.80035, 0.865495, 0.93064, 1.023704, 1.088849, 1.1633, 1.26567, 1.368041, 1.470411, 1.582088, 1.693765,
        1.805442, 1.917118, 2.028795, 2.140472,
      ],
    }),
    action("二段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.364799, 0.394492, 0.424185, 0.466604, 0.496296, 0.530231, 0.576892, 0.623552, 0.670212, 0.721114, 0.772017,
        0.822919, 0.873821, 0.924723, 0.975625,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.332232, 0.359274, 0.386317, 0.424948, 0.45199, 0.482896, 0.525391, 0.567885, 0.61038, 0.656738, 0.703096,
        0.749454, 0.795812, 0.84217, 0.888528,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.161929, 1.256504, 1.35108, 1.486188, 1.580764, 1.68885, 1.837469, 1.986088, 2.134706, 2.296836, 2.458966,
        2.621095, 2.783225, 2.945354, 3.107484,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.93844, 2.09622, 2.254, 2.4794, 2.63718, 2.8175, 3.06544, 3.31338, 3.56132, 3.8318, 4.10228, 4.37276, 4.64324,
        4.91372, 5.1842,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];

  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.744, 0.7998, 0.8556, 0.93, 0.9858, 1.0416, 1.116, 1.1904, 1.2648, 1.3392, 1.4136, 1.488, 1.581, 1.674, 1.767,
      ],
    }),
    action("焚曜之环伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72, 2.88, 3.04],
    }),
    action(
      "驰轮车普攻一段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [
          0.572648, 0.619259, 0.66587, 0.732457, 0.779068, 0.832337, 0.905583, 0.978829, 1.052075, 1.131979, 1.211883,
          1.291788, 1.371692, 1.451597, 1.531501,
        ],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻二段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [
          0.591327, 0.639459, 0.68759, 0.756349, 0.80448, 0.859488, 0.935122, 1.010757, 1.086392, 1.168903, 1.251414,
          1.333925, 1.416435, 1.498946, 1.581457,
        ],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻三段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [
          0.699868, 0.756834, 0.8138, 0.89518, 0.952146, 1.01725, 1.106768, 1.196286, 1.285804, 1.38346, 1.481116,
          1.578772, 1.676428, 1.774084, 1.87174,
        ],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻四段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [
          0.697047, 0.753784, 0.81052, 0.891572, 0.948308, 1.01315, 1.102307, 1.191464, 1.280622, 1.377884, 1.475146,
          1.572409, 1.669671, 1.766934, 1.864196,
        ],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻五段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [
          0.910035, 0.984107, 1.05818, 1.163998, 1.238071, 1.322725, 1.439125, 1.555525, 1.671924, 1.798906, 1.925888,
          2.052869, 2.179851, 2.306832, 2.433814,
        ],
      },
      "Mavuika"
    ),
    action("驰轮车冲刺伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.8084, 0.8742, 0.94, 1.034, 1.0998, 1.175, 1.2784, 1.3818, 1.4852, 1.598, 1.7108, 1.8236, 1.9364, 2.0492,
        2.162,
      ],
    }),
    action(
      "驰轮车重击循环伤害",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [
          0.989, 1.0695, 1.15, 1.265, 1.3455, 1.4375, 1.564, 1.6905, 1.817, 1.955, 2.093, 2.231, 2.369, 2.507, 2.645,
        ],
      },
      "Mavuika"
    ),
    action(
      "驰轮车重击终结伤害",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [1.376, 1.488, 1.6, 1.76, 1.872, 2, 2.176, 2.352, 2.528, 2.72, 2.912, 3.104, 3.296, 3.488, 3.68],
      },
      "Mavuika"
    ),
    action("驰轮车坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
      atk: [
        1.5996, 1.7298, 1.86, 2.046, 2.1762, 2.325, 2.5296, 2.7342, 2.9388, 3.162, 3.3852, 3.6084, 3.8316, 4.0548,
        4.278,
      ],
    }),
  ];

  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        4.448, 4.7816, 5.1152, 5.56, 5.8936, 6.2272, 6.672, 7.1168, 7.5616, 8.0064, 8.4512, 8.896, 9.452, 10.008,
        10.564,
      ],
    }),
  ];

  otherSkill = [
    action("6命·驰轮车伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [2],
    }),
    action("6命·焚曜之环·灼象伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [5],
    }),
  ];

  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "炎花献礼",
      describe: "队伍中的附近的角色触发「夜魂迸发」时，玛薇卡的攻击力提升30%。",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 30 }],
      enable: true,
    },
    {
      label: "「基扬戈兹」",
      describe:
        "施放元素爆发燔天之时后，依据施放时的战意，每点战意都将使当前场上角色造成的伤害提升0.2%，通过这种方式至多使队伍中的当前场上角色造成的伤害提升40%，该效果持续20秒，并会在持续时间内逐渐降低为0。",
      effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => 0.2 * s }],
      enable: true,
      stack: 200,
      stackable: true,
      limit: 200,
      stackText: "战意",
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "元素爆发·死生之炉",
      describe: "依据元素爆发施放时的战意，提升坠日斩、「古名解放」时的普通攻击与重击造成的伤害。",
      effect: [
        {
          type: BuffType.BurstAdd,
          getValue: (data, s) => {
            let sk = [
              0.016, 0.0172, 0.0184, 0.02, 0.0212, 0.0224, 0.024, 0.0256, 0.0272, 0.0288, 0.0304, 0.032, 0.034, 0.036,
              0.038,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return sk * s;
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.NormalAdd,
          getValue: (data, s) => {
            let sk = [
              0.0026, 0.0028, 0.003, 0.0033, 0.0035, 0.0038, 0.0041, 0.0044, 0.0047, 0.0051, 0.0055, 0.0058, 0.0062,
              0.00654, 0.0069,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return sk * s;
          },
          actionOn: ActionOn.Indirect,
          special: "Mavuika",
        },
        {
          type: BuffType.StrongAdd,
          getValue: (data, s) => {
            let sk =
              [
                0.0026, 0.0028, 0.003, 0.0033, 0.0035, 0.0038, 0.0041, 0.0044, 0.0047, 0.0051, 0.0055, 0.0058, 0.0062,
                0.00654, 0.0069,
              ][data.burstLevel + data.burstLevelAdd - 1] * 2;
            return sk * s;
          },
          actionOn: ActionOn.Indirect,
          special: "Mavuika",
        },
      ],
      enable: true,
      stack: 200,
      stackable: true,
      limit: 200,
      stackText: "战意",
    },
    {
      label: "1命·夜主的授记",
      describe: "获取战意后，玛薇卡的攻击力提升40%。",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 40 }],
      condition: ({ constellation }) => constellation >= 1,
      enable: true,
    },
    {
      label: "2命·灰烬的代价",
      describe: `处于夜魂加持状态下时，玛薇卡的基础攻击力提升200点，并根据诸火武装的形态，获得对应效果：
      <br />·焚曜之环：附近的敌人的防御力降低20%;
      <br />·驰轮车：玛薇卡的普通攻击、重击、元素爆发燔天之时中的坠日斩造成的伤害提升，提升值相当于玛薇卡攻击力的60%/90%/120%`,
      effect: [
        { type: BuffType.ATKBase, getValue: () => 200, actionOn: ActionOn.Front },
        {
          type: BuffType.ReduceArmour,
          getValue: (_, s) => {
            return s === 0 ? 20 : 0;
          },
        },
        {
          type: BuffType.NormalFixed,
          getValue: (data, s) => {
            return s === 1 ? (data.baseATK + data.extraATK + data.extraATK_NT) * 0.6 : 0;
          },
          special: "Mavuika",
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data, s) => {
            return s === 1 ? (data.baseATK + data.extraATK + data.extraATK_NT) * 0.9 : 0;
          },
          special: "Mavuika",
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data, s) => {
            return s === 1 ? (data.baseATK + data.extraATK + data.extraATK_NT) * 1.2 : 0;
          },
          actionOn: ActionOn.External,
        },
      ],
      condition: ({ constellation }) => constellation >= 2,
      enable: true,
      stackable: true,
      stackText: "驰轮车形态",
      stack: 0,
      limit: 1,
      shareable: true,
      stackType: "switch",
      target: BuffTarget.All,
    },
    Constellation_Q_3,
    {
      label: "4命·「领袖」的觉悟",
      describe: "施放元素爆发燔天之时后的伤害提升效果不再随时间降低，并额外获得10%伤害加成。",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 10 }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.All,
    },
    Constellation_E_5,
    {
      label: "6命·「人之名」解放",
      describe: "玛薇卡驾驶驰轮车时，召唤出持续跟随玛薇卡的「焚曜之环·灼象」，使附近的敌人的防御力降低20%。",
      effect: [{ type: BuffType.ReduceArmour, getValue: () => 20 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/**
 * ![玛薇卡](https://enka.network/ui/UI_AvatarIcon_Mavuika.png)
 */
export const Mavuika = new MavuikaData();
