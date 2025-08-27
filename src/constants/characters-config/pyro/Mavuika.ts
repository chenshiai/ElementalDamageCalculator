import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000106, "玛薇卡")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, 12552, 359, 792, 0)
@Icons("UI_AvatarIcon_Mavuika")
export class MavuikaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["以命织火", "称名之刻", "燔天之时"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.8, 0.865, 0.931, 1.024, 1.089, 1.163, 1.266, 1.368, 1.47, 1.582, 1.694],
    }),
    action("二段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.365, 0.394, 0.424, 0.467, 0.496, 0.53, 0.577, 0.624, 0.67, 0.721, 0.772],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.332, 0.359, 0.386, 0.425, 0.452, 0.483, 0.525, 0.567, 0.61, 0.657, 0.703],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.162, 1.257, 1.351, 1.486, 1.581, 1.689, 1.837, 1.986, 2.135, 2.297, 2.459],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.94, 2.1, 2.25, 2.48, 2.64, 2.82, 3.07, 3.31, 3.56, 3.83, 4.1],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];

  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.744, 0.8, 0.856, 0.93, 0.986, 1.042, 1.116, 1.19, 1.265, 1.339, 1.414, 1.488, 1.581],
    }),
    action("焚曜之环伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72],
    }),
    action(
      "驰轮车普攻一段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [0.573, 0.619, 0.666, 0.732, 0.779, 0.832, 0.906, 0.979, 1.052, 1.132, 1.212, 1.292, 1.372],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻二段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [0.591, 0.639, 0.688, 0.756, 0.804, 0.859, 0.935, 1.011, 1.086, 1.169, 1.251, 1.334, 1.416],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻三段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [0.7, 0.757, 0.814, 0.895, 0.952, 1.017, 1.107, 1.196, 1.286, 1.383, 1.481, 1.579, 1.676],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻四段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [0.697, 0.754, 0.811, 0.892, 0.948, 1.013, 1.102, 1.191, 1.281, 1.378, 1.475, 1.572, 1.67],
      },
      "Mavuika"
    ),
    action(
      "驰轮车普攻五段伤害",
      AttackType.Normal,
      ElementType.Pyro,
      {
        atk: [0.91, 0.984, 1.058, 1.164, 1.238, 1.323, 1.439, 1.556, 1.672, 1.799, 1.926, 2.053, 2.18],
      },
      "Mavuika"
    ),
    action("驰轮车冲刺伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.808, 0.874, 0.94, 1.034, 1.1, 1.175, 1.278, 1.382, 1.485, 1.598, 1.711, 1.824, 1.936],
    }),
    action(
      "驰轮车重击循环伤害",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [0.989, 1.07, 1.15, 1.265, 1.346, 1.438, 1.564, 1.691, 1.817, 1.955, 2.093, 2.231, 2.369],
      },
      "Mavuika"
    ),
    action(
      "驰轮车重击终结伤害",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [1.376, 1.488, 1.6, 1.76, 1.872, 2, 2.176, 2.352, 2.528, 2.72, 2.912, 3.104, 3.296],
      },
      "Mavuika"
    ),
    action("驰轮车坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
      atk: [1.6, 1.73, 1.86, 2.046, 2.176, 2.325, 2.53, 2.734, 2.939, 3.162, 3.385, 3.608, 3.832],
    }),
  ];

  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [4.448, 4.782, 5.115, 5.56, 5.894, 6.227, 6.672, 7.117, 7.562, 8.006, 8.451, 8.896, 9.452],
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
            let sk = [0.016, 0.0172, 0.0184, 0.02, 0.0212, 0.0224, 0.024, 0.0256, 0.0272, 0.0288, 0.0304, 0.032, 0.034][
              data.burstLevel + data.burstLevelAdd - 1
            ];
            return sk * s;
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.NormalAdd,
          getValue: (data, s) => {
            let sk = [
              0.0026, 0.0028, 0.003, 0.0033, 0.0035, 0.0038, 0.0041, 0.0044, 0.0047, 0.0051, 0.0055, 0.0058, 0.0062,
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
              [0.0026, 0.0028, 0.003, 0.0033, 0.0035, 0.0038, 0.0041, 0.0044, 0.0047, 0.0051, 0.0055, 0.0058, 0.0062][
                data.burstLevel + data.burstLevelAdd - 1
              ] * 2;
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
