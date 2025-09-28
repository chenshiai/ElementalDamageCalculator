import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000050, "托马")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [10331, 202, 751], 80, [11046, 253, 803])
@Icons("UI_AvatarIcon_Tohma")
export class TohmaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迅破枪势", "烈烧佑命之侍护", "真红炽火之大铠"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.443932, 0.480066, 0.5162, 0.56782, 0.603954, 0.64525, 0.702032, 0.758814, 0.815596, 0.87754, 0.939484,
        1.001428, 1.063372, 1.125316, 1.18726,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.436278, 0.471789, 0.5073, 0.55803, 0.593541, 0.634125, 0.689928, 0.745731, 0.801534, 0.86241, 0.923286,
        0.984162, 1.045038, 1.105914, 1.16679,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.26789, 0.289695, 0.3115, 0.34265, 0.364455, 0.389375, 0.42364, 0.457905, 0.49217, 0.52955, 0.56693, 0.60431,
        0.64169, 0.67907, 0.71645,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.673552, 0.728376, 0.7832, 0.86152, 0.916344, 0.979, 1.065152, 1.151304, 1.237456, 1.33144, 1.425424, 1.519408,
        1.613392, 1.707376, 1.80136,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.12746, 1.21923, 1.311, 1.4421, 1.53387, 1.63875, 1.78296, 1.92717, 2.07138, 2.2287, 2.38602, 2.54334, 2.70066,
        2.85798, 3.0153,
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
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.464, 1.5738, 1.6836, 1.83, 1.9398, 2.0496, 2.196, 2.3424, 2.4888, 2.6352, 2.7816, 2.928, 3.111, 3.294, 3.477,
      ],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [
        0.072, 0.0774, 0.0828, 0.09, 0.0954, 0.1008, 0.108, 0.1152, 0.1224, 0.1296, 0.1368, 0.144, 0.153, 0.162, 0.171,
      ],
      fixed: [
        693.33484, 762.678, 837.7997, 918.7, 1005.3789, 1097.8364, 1196.0725, 1300.0872, 1409.8805, 1525.4523,
        1646.8027, 1773.9319, 1906.8395, 2045.5258, 2189.9905,
      ],
    }),
    action("护盾吸收量上限", AttackType.Shield, ElementType.None, {
      hp: [
        0.196, 0.2107, 0.2254, 0.245, 0.2597, 0.2744, 0.294, 0.3136, 0.3332, 0.3528, 0.3724, 0.392, 0.4165, 0.441,
        0.4655,
      ],
      fixed: [
        1887.4199, 2076.1882, 2280.687, 2500.9167, 2736.877, 2988.5679, 3255.9897, 3539.142, 3838.025, 4152.6387,
        4482.983, 4829.058, 5190.8643, 5568.4004, 5961.6675,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.88, 0.946, 1.012, 1.1, 1.166, 1.232, 1.32, 1.408, 1.496, 1.584, 1.672, 1.76, 1.87, 1.98, 2.09],
    }),
    action(
      "炽火崩破伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [0.58, 0.6235, 0.667, 0.725, 0.7685, 0.812, 0.87, 0.928, 0.986, 1.044, 1.102, 1.16, 1.2325, 1.305, 1.3775],
      },
      "Tohma"
    ),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [
        0.01144, 0.012298, 0.013156, 0.0143, 0.015158, 0.016016, 0.01716, 0.018304, 0.019448, 0.020592, 0.021736,
        0.02288, 0.02431, 0.02574, 0.02717,
      ],
      fixed: [
        110.03398, 121.03891, 132.96092, 145.8, 159.55617, 174.2294, 189.81972, 206.3271, 223.75157, 242.09312,
        261.35175, 281.52744, 302.6202, 324.63007, 347.557,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "甲衣交叠",
      describe: "当前场上自己的角色获取或刷新烈烧佑命护盾时，护盾强效提升5%，至多叠加5次",
      effect: [{ type: BuffType.ShieldStrong, getValue: (_, s) => 5 * s }],
      enable: true,
      stack: 5,
      limit: 5,
      stackable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "烈火攻燔",
      describe: "真红炽火之大铠的炽火崩破造成的伤害提高，提高值相当于托马生命值上限的2.2%",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.022,
          special: "Tohma",
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·炽烧的至心",
      describe: "获取或刷新烈烧佑命护盾时，队伍中所有角色的普通攻击，重击与下落攻击造成的伤害提升15%",
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 15 },
        { type: BuffType.StrongPrcent, getValue: () => 15 },
        { type: BuffType.FallingPrcent, getValue: () => 15 },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![托马](https://enka.network/ui/UI_AvatarIcon_Tohma.png) */
export const Tohma = new TohmaData();
