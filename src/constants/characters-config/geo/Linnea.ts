import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, IconsV2, action } from "@/utils/decorator";

@EnKaId(10000130, "莉奈娅")
@Weapon(WeaponType.Bow)
@Element(ElementType.Geo, SecondElementType.Moon)
@BaseData(Rarity.Five, [9895, 144, 907], 60, [10598, 176, 971])
@IconsV2("UI_AvatarIcon_Linnea")
export class LinneaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["捕获方案", "对策·露米呀吼吼！", "备忘·绝境生存指南"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.59, 0.638, 0.686, 0.7546, 0.8026, 0.8575, 0.933, 1.0084, 1.0839, 1.1662, 1.2485, 1.3309, 1.4132, 1.4955,
        1.5778,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5115, 0.5532, 0.5948, 0.6543, 0.6959, 0.7435, 0.8089, 0.8743, 0.9398, 1.0111, 1.0825, 1.1539, 1.2253, 1.2966,
        1.368,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.8163, 0.8828, 0.9492, 1.0441, 1.1106, 1.1865, 1.2909, 1.3953, 1.4997, 1.6136, 1.7275, 1.8414, 1.9554, 2.0693,
        2.1832,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Geo, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.5683, 0.6145, 0.6608, 0.7269, 0.7731, 0.826, 0.8987, 0.9714, 1.0441, 1.1234, 1.2027, 1.282, 1.3612, 1.4405,
        1.5198,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.1363, 1.2288, 1.3213, 1.4535, 1.5459, 1.6516, 1.797, 1.9423, 2.0877, 2.2462, 2.4048, 2.5634, 2.7219, 2.8805,
        3.039,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.4193, 1.5349, 1.6504, 1.8154, 1.931, 2.063, 2.2445, 2.4261, 2.6076, 2.8057, 3.0037, 3.2018, 3.3998, 3.5979,
        3.7959,
      ],
    }),
  ];

  elementSkill = [
    action("露米捶捶乱打伤害", AttackType.Skill, ElementType.Geo, {
      def: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
    }),
    action("露米加力重锤伤害", AttackType.Moon, ElementType.MoonCrystal, {
      def: [1, 1.075, 1.15, 1.25, 1.325, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.125, 2.25, 2.375],
    }),
    action(
      "露米百万吨重锤伤害",
      AttackType.Moon,
      ElementType.MoonCrystal,
      {
        def: [4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.5, 9, 9.5],
      },
      "lumi"
    ),
  ];
  burstSkill = [
    action("首次治疗量", AttackType.Heal, ElementType.None, {
      def: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6, 3.8],
      fixed: [
        770.38, 847.42, 930.89, 1020.78, 1117.09, 1219.82, 1328.98, 1444.55, 1566.54, 1694.95, 1829.79, 1971.04,
        2118.72, 2272.82, 2433.33,
      ],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      def: [0.32, 0.344, 0.368, 0.4, 0.424, 0.448, 0.48, 0.512, 0.544, 0.576, 0.608, 0.64, 0.68, 0.72, 0.76],
      fixed: [
        154.08, 169.48, 186.18, 204.16, 223.42, 243.96, 265.8, 288.91, 313.31, 338.99, 365.96, 394.21, 423.74, 454.56,
        486.67,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "野外观察手记",
      describe:
        "露米在场上时，露米附近敌人的岩元素抗性会降低15%。</br>月兆·满辉，露米附近敌人的岩元素抗性还会进一步降低15%。",
      effect: [
        {
          type: BuffType.EnemyGeoResistance,
          getValue: (_, s) => -15 * (s + 1),
        },
      ],
      enable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackText: "月兆·满辉",
      stackType: "switch",
      shareable: true,
    },
    {
      label: "万类博物图鉴",
      describe:
        "基于莉奈娅防御力的5%。若队伍中自己的当前场上角色：</br>为月兆角色：提升该角色的元素精通；</br>不为月兆角色：提升莉奈娅自己的元素精通。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF) * 0.05,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      shareable: true,
      shareCondition: ({ secondElement }) => secondElement === SecondElementType.Moon,
    },
    {
      label: "月兆祝赐·栖地考察",
      describe:
        "基于莉奈娅的防御力，提升队伍中角色造成的月结晶反应的基础伤害：每100点防御力都将提升0.7%月结晶反应的基础伤害，至多通过这种方式提升14%伤害。",
      effect: [
        {
          type: BuffType.MoonCrystalBasePercent,
          getValue: (data) => Math.min(((data.baseDEF + data.extraDEF + data.extraDEF_NT) / 100) * 0.7, 14),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      shareable: true,
    },
    {
      label: "1命·未完成的分类",
      describe:
        "队伍中附近的角色造成月结晶反应伤害时，将消耗一层「历览编录」，提升造成的伤害，提升值相当于莉奈娅防御力的75%。此外，露米在究极厉害形态下使用百万吨重锤时，莉奈娅可以消耗至多5层「历览编录」，每层都会使造成的伤害提升，提升值相当于莉奈娅防御力的150%。",
      effect: [
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.75,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data, s) => s * (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 1.5,
          actionOn: ActionOn.External,
          special: "lumi",
        },
      ],
      enable: true,
      stack: 5,
      limit: 5,
      stackable: true,
      stackText: "露米消耗历览编录",
      shareable: true,
      condition: ({ constellation }) => constellation >= 1 && constellation < 6,
    },
    {
      label: "1命·未完成的分类(6命强化)",
      describe:
        "队伍中附近的角色造成月结晶反应伤害时，将消耗一层「历览编录」，提升造成的伤害，提升值相当于莉奈娅防御力的75%。此外，露米在究极厉害形态下使用百万吨重锤时，莉奈娅可以消耗至多5层「历览编录」，每层都会使造成的伤害提升，提升值相当于莉奈娅防御力的150%。",
      effect: [
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 1.125,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.MoonCrystalFixed,
          getValue: (data, s) => s * (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 2.25,
          actionOn: ActionOn.External,
          special: "lumi",
        },
      ],
      enable: true,
      stack: 5,
      limit: 5,
      stackable: true,
      stackText: "露米消耗历览编录",
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "2命·喜或悲的谕告",
      describe:
        "队伍中所有元素类型为水元素与岩元素的角色的暴击伤害提升40%，且露米在究极厉害形态下使用百万吨重锤的暴击伤害额外提升150%。",
      effect: [
        { type: BuffType.CritcalHurt, getValue: () => 40 },
        { type: BuffType.CritcalHurt, getValue: (_, s) => s * 150, special: "lumi" },
      ],
      enable: true,
      stackable: true,
      stackText: "月兆·满辉",
      shareable: true,
      limit: 1,
      stack: 1,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·专家的直感觉",
      describe:
        "触发月笼谐奏后的5秒内，莉奈娅与队伍中自己的当前场上角色的防御力分别提升25%。莉奈娅在场上时，上述防御力提升效果可叠加。",
      effect: [{ type: BuffType.DEFPrcent, getValue: () => 25 }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.Other,
    },
    {
      label: "4命·专家的直感觉",
      describe:
        "触发月笼谐奏后的5秒内，莉奈娅与队伍中自己的当前场上角色的防御力分别提升25%。莉奈娅在场上时，上述防御力提升效果可叠加。",
      effect: [{ type: BuffType.DEFPrcent, getValue: (_, s) => (s + 1) * 25 }],
      enable: true,
      stackable: true,
      stackText: "莉奈娅在场上",
      limit: 1,
      stack: 1,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.Self,
    },
    Constellation_Q_5,
    {
      label: "6命·黄金猎犬之梦",
      describe:
        "消耗「历览编录」时，将消耗原本2倍的层数，并使伤害提升效果提高至原本的150%。月兆 · 满辉队伍中附近的角色造成的月结晶反应伤害擢升25%。",
      effect: [{ type: BuffType.MoonCrystalPromote, getValue: () => 25 }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![莉奈娅](https://enka.network/ui/UI_AvatarIcon_Linnea.png) */
export const Linnea = new LinneaData();
