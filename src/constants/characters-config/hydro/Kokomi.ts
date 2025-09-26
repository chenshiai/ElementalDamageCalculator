import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_HYDRO_28P } from "../buffs";

@EnKaId(10000054, "珊瑚宫心海")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [13471, 234, 657], 70, [14428, 287, 704])
@Icons("UI_AvatarIcon_Kokomi")
export class KokomiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["水有常形", "海月之誓", "海人化羽"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.68376, 0.735042, 0.786324, 0.8547, 0.905982, 0.957264, 1.02564, 1.094016, 1.162392, 1.230768, 1.299144,
        1.36752, 1.45299, 1.53846, 1.62393,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.615384, 0.661538, 0.707692, 0.76923, 0.815384, 0.861538, 0.923076, 0.984614, 1.046153, 1.107691, 1.16923,
        1.230768, 1.307691, 1.384614, 1.461537,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.943056, 1.013785, 1.084514, 1.17882, 1.249549, 1.320278, 1.414584, 1.50889, 1.603195, 1.697501, 1.791806,
        1.886112, 2.003994, 2.121876, 2.239758,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.4832, 1.59444, 1.70568, 1.854, 1.96524, 2.07648, 2.2248, 2.37312, 2.52144, 2.66976, 2.81808, 2.9664, 3.1518,
        3.3372, 3.5226,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("波纹伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        1.091904, 1.173797, 1.25569, 1.36488, 1.446773, 1.528666, 1.637856, 1.747046, 1.856237, 1.965427, 2.074618,
        2.183808, 2.320296, 2.456784, 2.593272,
      ],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.044, 0.0473, 0.0506, 0.055, 0.0583, 0.0616, 0.066, 0.0704, 0.0748, 0.0792, 0.0836, 0.088, 0.0935, 0.099,
        0.1045,
      ],
      fixed: [
        423.7063, 466.08282, 511.99072, 561.43, 614.40063, 670.90265, 730.9361, 794.50085, 861.59705, 932.22455,
        1006.3835, 1084.0737, 1165.2954, 1250.0485, 1338.3329,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.10416, 0.111972, 0.119784, 0.1302, 0.138012, 0.145824, 0.15624, 0.166656, 0.177072, 0.187488, 0.197904,
        0.20832, 0.22134, 0.23436, 0.24738,
      ],
    }),
    action("命中治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.00808, 0.008686, 0.009292, 0.0101, 0.010706, 0.011312, 0.01212, 0.012928, 0.013736, 0.014544, 0.015352,
        0.01616, 0.01717, 0.01818, 0.01919,
      ],
      fixed: [
        77.03738, 84.74218, 93.08906, 102.078, 111.70901, 121.98209, 132.89723, 144.45445, 156.65373, 169.49507,
        182.97849, 197.10397, 211.87152, 227.28113, 243.33281,
      ],
    }),
  ];
  otherSkill = [
    action("1命·决水于溪", AttackType.Other, ElementType.Hydro, {
      hp: [0.3],
    }),
    action("2命·化海月治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.045],
    }),
    action("2命·海人化羽治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.006],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_HYDRO_28P,
    {
      label: "庙算无遗",
      describe: "珊瑚宫心海的治疗加成提升25%，暴击率降低100%",
      effect: [
        { type: BuffType.HealAdd, getValue: () => 25 },
        { type: BuffType.Critcal, getValue: () => -100 },
      ],
      enable: true,
    },
    {
      label: "元素爆发·「仪来羽衣」",
      describe: `增加珊瑚宫心海的普通攻击、重击以及元素战技的「化海月」造成的伤害，增加值基于珊瑚宫心海的生命值上限
      普通攻击和重击命中敌人时，为队伍中附近的所有角色恢复生命值，回复量受益于珊瑚宫心海的生命值上限
      `,
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => {
            let a = [
              0.0484, 0.05203, 0.05566, 0.0605, 0.06413, 0.06776, 0.0726, 0.07744, 0.08228, 0.08712, 0.09196, 0.0968,
              0.10285, 0.1089, 0.11495,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return (data.baseHP + data.extraHP + data.extraHP_NT) * a;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => {
            let a = [
              0.06776, 0.072842, 0.077924, 0.0847, 0.089782, 0.094864, 0.10164, 0.108416, 0.115192, 0.121968, 0.128744,
              0.13552, 0.14399, 0.15246, 0.16093,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return (data.baseHP + data.extraHP + data.extraHP_NT) * a;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => {
            let a = [
              0.070963, 0.076285, 0.081608, 0.088704, 0.094026, 0.099348, 0.106445, 0.113541, 0.120637, 0.127734,
              0.13483, 0.141926, 0.150797, 0.159667, 0.168538,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return (data.baseHP + data.extraHP + data.extraHP_NT) * a;
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
    },
    {
      label: "真珠御呗",
      describe: `处于海人化羽的仪来羽衣状态下时，珊瑚宫心海的普通攻击和重击基于生命值上限造成的伤害获得额外提升，提升程度相当于她的治疗加成的15%`,
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => {
            return ((data.baseHP + data.extraHP + data.extraHP_NT) * data.healAdd * 0.15) / 100;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => {
            return ((data.baseHP + data.extraHP + data.extraHP_NT) * data.healAdd * 0.15) / 100;
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·珊瑚一心",
      describe:
        "处于海人化羽的仪来羽衣状态下时，珊瑚宫心海的普通攻击和重击为生命值高于或等于80%的角色恢复生命后，将获得40%水元素伤害加成",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 40 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![珊瑚宫心海](https://enka.network/ui/UI_AvatarIcon_Kokomi.png) */
export const Kokomi = new KokomiData();
