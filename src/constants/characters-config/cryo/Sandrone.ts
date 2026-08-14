import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, PolestarField, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000133, "桑多涅")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Cryo, SecondElementType.Start)
@BaseData(Rarity.Five, [13226, 342, 752], 60, [14166, 419, 806])
@Icons("UI_AvatarIcon_MarionetteNew")
export class SandroneData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["事象数式·自明演绎", "事象数式·游衍解析", "事象数式·万理证毕"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7629, 0.825, 0.887, 0.9758, 1.0378, 1.1088, 1.2064, 1.304, 1.4015, 1.508, 1.6144, 1.7209, 1.8273, 1.9338,
        2.0402,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.672, 0.7267, 0.7814, 0.8595, 0.9142, 0.9767, 1.0626, 1.1486, 1.2345, 1.3283, 1.4221, 1.5158, 1.6096, 1.7034,
        1.7971,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.028, 1.1117, 1.1954, 1.3149, 1.3986, 1.4942, 1.6257, 1.7572, 1.8887, 2.0322, 2.1756, 2.3191, 2.4625, 2.606,
        2.7494,
      ],
    }),
    action("重击扫射伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91, 0.97, 1.03, 1.09, 1.15],
    }),
    action("重击冷凝射线伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [
        1.2255, 1.3253, 1.425, 1.5675, 1.6673, 1.7812, 1.938, 2.0947, 2.2515, 2.4225, 2.5935, 2.7645, 2.9355, 3.1065,
        3.2775,
      ],
    }),
    action(
      "重击冷凝射线星超导伤害",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          0.817, 0.8835, 0.95, 1.045, 1.1115, 1.1875, 1.292, 1.3965, 1.501, 1.615, 1.729, 1.843, 1.957, 2.071, 2.185,
        ],
      },
      "sdnz1"
    ),
    action(
      "重击冷凝射线星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlCryo,
      {
        atk: [
          1.2255, 1.3253, 1.425, 1.5675, 1.6673, 1.7812, 1.938, 2.0947, 2.2515, 2.4225, 2.5935, 2.7645, 2.9355, 3.1065,
          3.2775,
        ],
      },
      "sdnz1"
    ),
    action("功率过载时伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91, 0.97, 1.03, 1.09, 1.15],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.7459, 0.8066, 0.8673, 0.954, 1.0147, 1.0841, 1.1795, 1.2749, 1.3703, 1.4744, 1.5785, 1.6826, 1.7866, 1.8907,
        1.9948,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.4914, 1.6128, 1.7342, 1.9077, 2.0291, 2.1678, 2.3586, 2.5493, 2.7401, 2.9482, 3.1563, 3.3644, 3.5725, 3.7806,
        3.9887,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.8629, 2.0145, 2.1662, 2.3828, 2.5344, 2.7077, 2.946, 3.1842, 3.4225, 3.6825, 3.9424, 4.2023, 4.4623, 4.7222,
        4.9821,
      ],
    }),
  ];
  elementSkill = [
    action("棱晶弹伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.2255, 1.3253, 1.425, 1.5675, 1.6673, 1.7812, 1.938, 2.0947, 2.2515, 2.4225, 2.5935, 2.7645, 2.9355, 3.1065,
        3.2775,
      ],
    }),
    action(
      "棱晶弹星超导伤害",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          0.216, 0.2322, 0.2484, 0.27, 0.2862, 0.3024, 0.324, 0.3456, 0.3672, 0.3888, 0.4104, 0.432, 0.459, 0.486,
          0.513,
        ],
      },
      "sdn1"
    ),
    action(
      "棱晶弹星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlCryo,
      {
        atk: [
          0.324, 0.3483, 0.3726, 0.405, 0.4293, 0.4536, 0.486, 0.5184, 0.5508, 0.5832, 0.6156, 0.648, 0.6885, 0.729,
          0.7695,
        ],
      },
      "sdn1"
    ),
  ];

  burstSkill = [
    action("轰炸伤害·单次", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.8822, 0.9483, 1.0145, 1.1027, 1.1689, 1.235, 1.3232, 1.4115, 1.4997, 1.5879, 1.6761, 1.7643, 1.8746, 1.9849,
        2.0951,
      ],
    }),
    action("聚能光束伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        3.308, 3.5561, 3.8042, 4.135, 4.3831, 4.6312, 4.962, 5.2928, 5.6236, 5.9544, 6.2852, 6.616, 7.0295, 7.443,
        7.8565,
      ],
    }),
    action(
      "聚能光束星超导伤害",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          2.2053, 2.3707, 2.5361, 2.7567, 2.9221, 3.0875, 3.308, 3.5285, 3.7491, 3.9696, 4.1901, 4.4107, 4.6863, 4.962,
          5.2377,
        ],
      },
      "sdn2"
    ),
    action(
      "聚能光束星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlCryo,
      {
        atk: [
          3.308, 3.5561, 3.8042, 4.135, 4.3831, 4.6312, 4.962, 5.2928, 5.6236, 5.9544, 6.2852, 6.616, 7.0295, 7.443,
          7.8565,
        ],
      },
      "sdn2"
    ),
  ];
  otherSkill = [
    action("4命·世事皆数，昼来夜往·伤害", AttackType.Start, ElementType.StellarConductCryo, {
      atk: [1.25],
    }),
    action("4命·世事皆数，昼来夜往·伤害", AttackType.Start, ElementType.StellarSwirlCryo, {
      atk: [1.875],
    }),
    action("6命·水仙梦醒，且望晨光·伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [1],
    }),
    action(
      "6命·水仙梦醒，且望晨光·星超导伤害",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [0.8],
      },
      "sdnz1"
    ),
    action(
      "6命·水仙梦醒，且望晨光·星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlCryo,
      {
        atk: [1.2],
      },
      "sdnz1"
    ),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "悠久的演算机关",
      describe:
        "辉映·星超导：向附近敌人发射的第二枚棱晶弹造成原本400%的伤害；清除全部的改进战术层数，使负温聚能光束造成原本100%+清除层数*10%的伤害",
      effect: [
        {
          type: BuffType.StellarConductRate,
          getValue: () => 300,
          special: "sdn1",
        },
        {
          type: BuffType.StellarConductRate,
          getValue: (_, s) => s * 10,
          special: "sdn2",
        },
        {
          type: BuffType.StellarSwirlRate,
          getValue: () => 300,
          special: "sdn1",
        },
        {
          type: BuffType.StellarSwirlRate,
          getValue: (_, s) => s * 10,
          special: "sdn2",
        },
      ],
      enable: true,
      stack: 10,
      limit: 10,
      stackable: true,
      stackText: "改进战术",
    },
    {
      label: "淑女的行事准则",
      describe:
        "基于桑多涅的攻击力，提升其元素精通：每100点攻击力都将使桑多涅的元素精通提升8点，至多通过这种方式提升160点元素精通",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) * 0.08),
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "星耀祝礼·唯理为光",
      describe:
        "基于桑多涅的攻击力，提升队伍中角色造成的星烁反应的基础伤害：每100点攻击力都将提升0.7%星烁反应的基础伤害，至多通过这种方式提升14%伤害",
      effect: [
        {
          type: BuffType.StellarConductBasePercent,
          getValue: (data) => Math.min(14, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.007),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StellarSwirlBasePercent,
          getValue: (data) => Math.min(14, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.007),
          actionOn: ActionOn.External,
        },
      ],
      shareable: true,
      enable: true,
    },
    PolestarField,
    {
      label: "1命·鎏金未凋，夕暮已远",
      describe: "队伍中的所有角色造成的星超导反应伤害提升30%",
      effect: [{ type: BuffType.GlobalStartPrcent, getValue: () => 30 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
      shareable: true,
    },
    {
      label: "2命·回望镜中，时岁翩然",
      describe:
        "辉映·星烁：重击发射的冷凝射线的暴击伤害提升40%，且每次发射冷凝射线时，都会使本次解算模式期间，发射的所有冷凝射线的暴击伤害进一步提升20%，该效果至多叠加3层",
      effect: [
        { type: BuffType.StellarConductCritcalHurt, getValue: (_, s) => 40 + 20 * s, special: "sdnz1" },
        { type: BuffType.StellarSwirlCritcalHurt, getValue: (_, s) => 40 + 20 * s, special: "sdnz1" },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 3,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_A_3,
    Constellation_Q_5,
    {
      label: "6命·水仙梦醒，且望晨光",
      describe: "桑多涅造成的所有星烁反应伤害擢升20%",
      effect: [
        { type: BuffType.StellarConductPromote, getValue: () => 20 },
        { type: BuffType.StellarSwirlPromote, getValue: () => 20 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![桑多涅](https://enka.network/ui/UI_AvatarIcon_MarionetteNew.png) */
export const Sandrone = new SandroneData();
