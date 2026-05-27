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
import { Constellation_E_3, Constellation_Q_5, S_80_ATK_28P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000131, "尼可")
@Weapon(WeaponType.Magic)
@Element(ElementType.Pyro, SecondElementType.Magus)
@BaseData(Rarity.Five, [10409, 342, 563], 60, [11149, 419, 603])
@Icons("UI_AvatarIcon_Nicole")
export class NicoleData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["托喻", "圣言默示·未现之光", "圣言默示·天路历程"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.3518, 0.3782, 0.4046, 0.4397, 0.4661, 0.4925, 0.5277, 0.5629, 0.598, 0.6332, 0.6684, 0.7036, 0.7476, 0.7915,
        0.8355,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.2963, 0.3186, 0.3408, 0.3704, 0.3926, 0.4149, 0.4445, 0.4741, 0.5038, 0.5334, 0.563, 0.5927, 0.6297, 0.6668,
        0.7038,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.4619, 0.4965, 0.5312, 0.5774, 0.612, 0.6466, 0.6928, 0.739, 0.7852, 0.8314, 0.8776, 0.9238, 0.9815, 1.0392,
        1.097,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.1232, 1.2074, 1.2917, 1.404, 1.4882, 1.5725, 1.6848, 1.7971, 1.9094, 2.0218, 2.1341, 2.2464, 2.3868, 2.5272,
        2.6676,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Pyro, {
      atk: [
        0.5683, 0.6145, 0.6608, 0.7269, 0.7731, 0.826, 0.8987, 0.9714, 1.0441, 1.1234, 1.2027, 1.282, 1.3612, 1.4405,
        1.5198,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
      atk: [
        1.1363, 1.2288, 1.3213, 1.4535, 1.5459, 1.6516, 1.797, 1.9423, 2.0877, 2.2462, 2.4048, 2.5634, 2.7219, 2.8805,
        3.039,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
      atk: [
        1.4193, 1.5349, 1.6504, 1.8154, 1.931, 2.063, 2.2445, 2.4261, 2.6076, 2.8057, 3.0037, 3.2018, 3.3998, 3.5979,
        3.7959,
      ],
    }),
  ];

  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.384, 1.4878, 1.5916, 1.73, 1.8338, 1.9376, 2.076, 2.2144, 2.3528, 2.4912, 2.6296, 2.768, 2.941, 3.114, 3.287,
      ],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      atk: [
        2.2118, 2.3777, 2.5436, 2.7648, 2.9307, 3.0966, 3.3178, 3.5389, 3.7601, 3.9813, 4.2025, 4.4237, 4.7002, 4.9766,
        5.2531,
      ],
      fixed: [1387, 1525, 1676, 1837, 2011, 2196, 2392, 2600, 2820, 3051, 3294, 3548, 3814, 4091, 4380],
    }),
  ];

  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        3.168, 3.4056, 3.6432, 3.96, 4.1976, 4.4352, 4.752, 5.0688, 5.3856, 5.7024, 6.0192, 6.336, 6.732, 7.128, 7.524,
      ],
    }),
  ];

  otherSkill = [];

  buffs: IBuffBase[] = [
    ...S_80_ATK_28P,
    {
      label: "圣言默示·未现之光",
      describe: "为队伍中附近的所有角色赋予虚己之赐效果，提升这些角色的攻击力;可变为圣祝之引，使其额外提升300点攻击力",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data, s) => {
            const atk = [3.3, 3.6, 3.9, 4.2, 4.5, 4.8, 5.1, 5.4, 5.7, 6, 6.36, 6.72, 7.08, 7.44, 7.8].map(
              (item) => item * 100
            );
            return (
              Math.min((data.baseATK + data.extraATK) * 0.15, atk[data.skillLevel + data.skillAdd - 1]) + [0, 300][s]
            );
          },
          actionOn: ActionOn.Indirect,
          transform: true,
        },
      ],
      enable: true,
      stack: 0,
      limit: 1,
      stackable: true,
      stackType: "switch",
      stackText: "圣祝之引",
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·「我要教导你，指引你应走的路」",
      describe: "虚己之赐还会额外提升300点攻击力，附近敌人的火元素抗性降低25%",
      effect: [
        { type: BuffType.ATKFixed, getValue: () => 300 },
        { type: BuffType.EnemyPyroResistance, getValue: () => -25 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
      shareCondition: ({ element }) => element === ElementType.Pyro,
    },
    {
      label: "2命·「我要教导你，指引你应走的路」",
      describe: "虚己之赐还会额外提升300点攻击力，附近敌人的水元素抗性降低25%",
      effect: [
        { type: BuffType.ATKFixed, getValue: () => 300 },
        { type: BuffType.EnemyHydroResistance, getValue: () => -25 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
      shareCondition: ({ element }) => element === ElementType.Hydro,
    },
    {
      label: "2命·「我要教导你，指引你应走的路」",
      describe: "虚己之赐还会额外提升300点攻击力，附近敌人的雷元素抗性降低25%",
      effect: [
        { type: BuffType.ATKFixed, getValue: () => 300 },
        { type: BuffType.EnemyElectroResistance, getValue: () => -25 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
      shareCondition: ({ element }) => element === ElementType.Electro,
    },
    {
      label: "2命·「我要教导你，指引你应走的路」",
      describe: "虚己之赐还会额外提升300点攻击力，附近敌人的冰元素抗性降低25%",
      effect: [
        { type: BuffType.ATKFixed, getValue: () => 300 },
        { type: BuffType.EnemyCryoResistance, getValue: () => -25 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
      shareCondition: ({ element }) => element === ElementType.Cryo,
    },
    {
      label: "2命·「我要教导你，指引你应走的路」",
      describe: "虚己之赐还会额外提升300点攻击力，附近敌人的风元素抗性降低25%",
      effect: [
        { type: BuffType.ATKFixed, getValue: () => 300 },
        { type: BuffType.EnemyAnemoResistance, getValue: () => -25 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
      shareCondition: ({ element }) => element === ElementType.Anemo,
    },
    {
      label: "2命·「我要教导你，指引你应走的路」",
      describe: "虚己之赐还会额外提升300点攻击力，附近敌人的岩元素抗性降低25%",
      effect: [
        { type: BuffType.ATKFixed, getValue: () => 300 },
        { type: BuffType.EnemyGeoResistance, getValue: () => -25 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
      shareCondition: ({ element }) => element === ElementType.Geo,
    },
    {
      label: "2命·「我要教导你，指引你应走的路」",
      describe: "虚己之赐还会额外提升300点攻击力，附近敌人的草元素抗性降低25%",
      effect: [
        { type: BuffType.ATKFixed, getValue: () => 300 },
        { type: BuffType.EnemyDendroResistance, getValue: () => -25 },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
      shareCondition: ({ element }) => element === ElementType.Dendro,
    },
    Constellation_E_3,
    {
      label: "4命·「向左或向右，无论你行往何方」",
      describe: "角色的普通攻击、重击、下落攻击、元素战技与元素爆发造成的伤害提升，提升值相当于尼可攻击力的70%",
      effect: [
        { type: BuffType.NormalFixed, getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.7 },
        { type: BuffType.StrongFixed, getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.7 },
        { type: BuffType.FallingFixed, getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.7 },
        { type: BuffType.SkillFixed, getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.7 },
        { type: BuffType.BurstFixed, getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 0.7 },
      ],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.All,
    },
    Constellation_Q_5,
    {
      label: "6命·「这便是正确的道路，莫要彷徨」",
      describe: "拥有圣祝之引的角色造成的伤害将无视敌人40%的防御力",
      effect: [{ type: BuffType.DefensePenetration, getValue: () => 40 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/**
 * ![尼可](https://enka.network/ui/UI_AvatarIcon_Nicole.png)
 */
export const Nicole = new NicoleData();
