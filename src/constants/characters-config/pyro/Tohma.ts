import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000050, "托马")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, 10331, 202, 751, 80)
@Icons("UI_AvatarIcon_Tohma")
class TohmaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迅破枪势", "烈烧佑命之侍护", "真红炽火之大铠"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.444, 0.48, 0.516, 0.568, 0.604, 0.645, 0.702, 0.759, 0.816, 0.878, 0.94],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.436, 0.472, 0.507, 0.558, 0.594, 0.634, 0.69, 0.746, 0.802, 0.862, 0.923],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.268, 0.29, 0.312, 0.343, 0.365, 0.389, 0.424, 0.458, 0.492, 0.53, 0.567],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.268, 0.29, 0.312, 0.343, 0.365, 0.389, 0.424, 0.458, 0.492, 0.53, 0.567],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.674, 0.728, 0.783, 0.862, 0.916, 0.979, 1.065, 1.151, 1.238, 1.331, 1.425],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.13, 1.22, 1.31, 1.44, 1.53, 1.64, 1.78, 1.93, 2.07, 2.23, 2.39],
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
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.46, 1.57, 1.68, 1.83, 1.94, 2.05, 2.2, 2.34, 2.49, 2.64, 2.78, 2.93, 3.11],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.072, 0.077, 0.0828, 0.09, 0.095, 0.101, 0.108, 0.115, 0.122, 0.13, 0.137, 0.144, 0.153, 0.162],
      fixed: [693, 763, 838, 919, 1005, 1098, 1196, 1300, 1410, 1525, 1647, 1774, 1907, 2046],
    }),
    action("护盾吸收量上限", AttackType.Shield, ElementType.None, {
      hp: [0.1969, 0.2107, 0.2254, 0.245, 0.2597, 0.2744, 0.294, 0.3136, 0.3332, 0.3528, 0.3724, 0.392, 0.417, 0.441],
      fixed: [1887, 2076, 2281, 2501, 2737, 3000, 3256, 3539, 3838, 4153, 4483, 4829, 5191, 5568],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.88, 0.95, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
    }),
    action(
      "炽火崩破伤害",
      AttackType.Burst,
      ElementType.Pyro,
      {
        atk: [0.58, 0.62, 0.67, 0.73, 0.77, 0.81, 0.87, 0.93, 0.99, 1.04, 1.1, 1.16, 1.23, 1.31],
      },
      "Tohma"
    ),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.011, 0.012, 0.013, 0.014, 0.015, 0.016, 0.017, 0.018, 0.019, 0.021, 0.022, 0.023, 0.024, 0.0257],
      fixed: [110, 121, 133, 146, 160, 174, 190, 206, 224, 242, 261, 282, 303, 325],
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
      stack: 0,
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
