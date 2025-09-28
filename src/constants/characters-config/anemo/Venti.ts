import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CHARGE_32P } from "../buffs";

@EnKaId(10000022, "温迪")
@Weapon(WeaponType.Bow)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [10531, 263, 669], 60, [11280, 323, 716])
@Icons("UI_AvatarIcon_Venti")
export class VentiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["神代射术", "高天之歌", "风神之诗"];
  normalAttack = [
    action("一段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.20382, 0.22041, 0.237, 0.2607, 0.27729, 0.29625, 0.32232, 0.34839, 0.37446, 0.4029, 0.435487, 0.47381,
        0.512133, 0.550456, 0.592263,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44376, 0.47988, 0.516, 0.5676, 0.60372, 0.645, 0.70176, 0.75852, 0.81528, 0.8772, 0.94815, 1.031587, 1.115024,
        1.198462, 1.289484,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.52374, 0.56637, 0.609, 0.6699, 0.71253, 0.76125, 0.82824, 0.89523, 0.96222, 1.0353, 1.119037, 1.217513,
        1.315988, 1.414463, 1.521891,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.26058, 0.28179, 0.303, 0.3333, 0.35451, 0.37875, 0.41208, 0.44541, 0.47874, 0.5151, 0.556762, 0.605758,
        0.654753, 0.703748, 0.757197,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.50654, 0.54777, 0.589, 0.6479, 0.68913, 0.73625, 0.80104, 0.86583, 0.93062, 1.0013, 1.082288, 1.177529,
        1.27277, 1.368011, 1.471911,
      ],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7095, 0.76725, 0.825, 0.9075, 0.96525, 1.03125, 1.122, 1.21275, 1.3035, 1.4025, 1.515937, 1.64934, 1.782742,
        1.916145, 2.061675,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.937125, 1.019592, 1.102059,
        1.184526, 1.27449,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
      atk: [
        1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.36096, 2.5296, 2.69824, 2.86688, 3.03552,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.76, 2.967, 3.174, 3.45, 3.657, 3.864, 4.14, 4.416, 4.692, 4.968, 5.244, 5.52, 5.865, 6.21, 6.555],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [3.8, 4.085, 4.37, 4.75, 5.035, 5.32, 5.7, 6.08, 6.46, 6.84, 7.22, 7.6, 8.075, 8.55, 9.025],
    }),
  ];
  burstSkill = [
    action("持续伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        0.376, 0.4042, 0.4324, 0.47, 0.4982, 0.5264, 0.564, 0.6016, 0.6392, 0.6768, 0.7144, 0.752, 0.799, 0.846, 0.893,
      ],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [
        0.188, 0.2021, 0.2162, 0.235, 0.2491, 0.2632, 0.282, 0.3008, 0.3196, 0.3384, 0.3572, 0.376, 0.3995, 0.423,
        0.4465,
      ],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.188, 0.2021, 0.2162, 0.235, 0.2491, 0.2632, 0.282, 0.3008, 0.3196, 0.3384, 0.3572, 0.376, 0.3995, 0.423,
        0.4465,
      ],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.188, 0.2021, 0.2162, 0.235, 0.2491, 0.2632, 0.282, 0.3008, 0.3196, 0.3384, 0.3572, 0.376, 0.3995, 0.423,
        0.4465,
      ],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.188, 0.2021, 0.2162, 0.235, 0.2491, 0.2632, 0.282, 0.3008, 0.3196, 0.3384, 0.3572, 0.376, 0.3995, 0.423,
        0.4465,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CHARGE_32P,
    {
      label: "2命·眷恋的泠风",
      describe: `高天之歌会使敌人的风元素抗性与物理抗性降低12%。被高天之歌击飞的敌人在落地前，风元素抗性与物理抗性额外降低12%`,
      effect: [
        { type: BuffType.EnemyAnemoResistance, getValue: (_, s) => -12 - 12 * s },
        { type: BuffType.EnemyPhysicalResistance, getValue: (_, s) => -12 - 12 * s },
      ],
      enable: false,
      stackable: true,
      stack: 0,
      limit: 1,
      stackText: "敌人被击飞",
      shareable: true,
      stackType: "switch",
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·自由的凛风",
      describe: `温迪获取元素晶球或元素微粒后，获得25%的风元素伤害加成`,
      effect: [{ type: BuffType.AnemoPrcent, getValue: () => 25 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·抗争的暴风",
      describe: `受风神之诗伤害的敌人，风元素抗性降低20%； `,
      effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·水",
      describe: `若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·火",
      describe: `若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·冰",
      describe: `若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·雷",
      describe: `若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![温迪](https://enka.network/ui/UI_AvatarIcon_Venti.png) */
export const Venti = new VentiData();
