import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_HYDRO_28P } from "../buffs";

@EnKaId(10000054, "珊瑚宫心海")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 13471, 234, 657, 70)
@Icons("UI_AvatarIcon_Kokomi")
class KokomiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·水有常形", "海月之誓", "海人化羽"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.684, 0.735, 0.786, 0.855, 0.906, 0.957, 1.026, 1.094, 1.162, 1.231, 1.299],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.615, 0.662, 0.708, 0.769, 0.815, 0.862, 0.923, 0.985, 1.046, 1.108, 1.169],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.943, 1.014, 1.085, 1.179, 1.25, 1.32, 1.415, 1.509, 1.603, 1.698, 1.792],
    }),
    action("重击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.48, 1.59, 1.71, 1.85, 1.97, 2.08, 2.23, 2.37, 2.52, 2.67, 2.82],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("波纹伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [1.092, 1.174, 1.256, 1.365, 1.447, 1.529, 1.638, 1.747, 1.856, 1.965, 2.075, 2.184, 2.32],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.044, 0.047, 0.051, 0.055, 0.058, 0.062, 0.066, 0.07, 0.075, 0.079, 0.084, 0.088, 0.094, 0.099],
      fixed: [424, 466, 512, 561, 614, 671, 731, 795, 862, 932, 1006, 1084, 1165, 1250],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.104, 0.112, 0.12, 0.13, 0.138, 0.146, 0.156, 0.167, 0.177, 0.188, 0.198, 0.208, 0.221],
    }),
    action("命中治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.0081, 0.0087, 0.0093, 0.0101, 0.0107, 0.0113, 0.0121, 0.0129, 0.0137, 0.0145, 0.0154, 0.0162, 0.0172, 0.0182,
      ],
      fixed: [77, 85, 93, 102, 112, 122, 133, 144, 157, 169, 183, 197, 212, 227],
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
            let a = [0.048, 0.052, 0.056, 0.061, 0.064, 0.068, 0.073, 0.077, 0.082, 0.087, 0.092, 0.097, 0.103][
              data.burstLevel + data.burstLevelAdd - 1
            ];
            return (data.baseHP + data.extraHP + data.extraHP_NT) * a;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => {
            let a = [0.068, 0.073, 0.078, 0.085, 0.09, 0.095, 0.102, 0.108, 0.115, 0.122, 0.129, 0.135, 0.144][
              data.burstLevel + data.burstLevelAdd - 1
            ];
            return (data.baseHP + data.extraHP + data.extraHP_NT) * a;
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => {
            let a = [0.071, 0.076, 0.082, 0.089, 0.094, 0.099, 0.106, 0.114, 0.121, 0.128, 0.135, 0.142, 0.151][
              data.burstLevel + data.burstLevelAdd - 1
            ];
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
