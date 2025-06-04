import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "../decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000007, "荧·风")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 10875, 213, 683, 60)
@Icons("UI_AvatarIcon_PlayerGirl", "PlayerWind")
class PlayerGirlData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦铁风", "风涡剑", "风息激荡"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.445, 0.481, 0.517, 0.569, 0.605, 0.646, 0.704, 0.76, 0.817, 0.879, 0.941],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.687, 0.742, 0.798, 0.859, 0.919],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.53, 0.573, 0.616, 0.678, 0.721, 0.77, 0.838, 0.906, 0.973, 1.05, 1.12],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.583, 0.631, 0.678, 0.746, 0.793, 0.848, 0.922, 0.997, 1.07, 1.15, 1.23],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.708, 0.765, 0.823, 0.905, 0.963, 1.03, 1.12, 1.21, 1.3, 1.4, 1.5],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.03, 1.1, 1.18],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.722, 0.781, 0.84, 0.924, 0.983, 1.05, 1.14, 1.23, 1.33, 1.43, 1.53],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.01, 1.09, 1.17, 1.26, 1.35],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("初始切割伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255, 0.27],
    }),
    action("最大切割伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357, 0.378],
    }),
    action("初始爆风伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.76, 1.89, 2.02, 2.2, 2.33, 2.46, 2.64, 2.82, 2.99, 3.17, 3.34, 3.52, 3.74, 3.96],
    }),
    action("最大爆风伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.92, 2.06, 2.21, 2.4, 2.54, 2.69, 2.88, 3.07, 3.26, 3.46, 3.65, 3.84, 4.08, 4.32],
    }),
  ];
  burstSkill = [
    action("龙卷风伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.808, 0.869, 0.929, 1.01, 1.07, 1.13, 1.21, 1.29, 1.37, 1.45, 1.54, 1.62, 1.72, 1.82],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
    }),
  ];
  otherSkill = [
    action("裂空之风", AttackType.Normal, ElementType.Anemo, {
      atk: [0.6],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "2命·革新的旋风",
      describe: "元素充能效率提升16%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 16 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·纠缠的信风",
      describe: "受到风息激荡伤害的目标，风元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·火",
      describe: "受到风息激荡伤害的目标，火元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·水",
      describe: "受到风息激荡伤害的目标，水元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·冰",
      describe: "受到风息激荡伤害的目标，冰元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·纠缠的信风·雷",
      describe: "受到风息激荡伤害的目标，雷元素抗性下降20%。",
      effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![荧·风](https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png) */
export const PlayerGirl = new PlayerGirlData();
