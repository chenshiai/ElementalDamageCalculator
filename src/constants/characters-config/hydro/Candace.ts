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
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000072, "坎蒂丝")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, [10875, 212, 683], 60, [11627, 266, 730])
@Icons("UI_AvatarIcon_Candace")
export class CandaceData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["流耀枪术·守势", "圣仪·苍鹭庇卫", "圣仪·灰鸰衒潮"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.60802, 0.65751, 0.707, 0.7777, 0.82719, 0.88375, 0.96152, 1.03929, 1.11706, 1.2019, 1.28674, 1.37158, 1.45642,
        1.54126, 1.6261,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.61146, 0.66123, 0.711, 0.7821, 0.83187, 0.88875, 0.96696, 1.04517, 1.12338, 1.2087, 1.29402, 1.37934, 1.46466,
        1.54998, 1.6353,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.354879, 0.383765, 0.41265, 0.453915, 0.4828, 0.515813, 0.561204, 0.606596, 0.651987, 0.701505, 0.751023,
        0.800541, 0.850059, 0.899577, 0.949095,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.433741, 0.469046, 0.50435, 0.554785, 0.59009, 0.630438, 0.685916, 0.741395, 0.796873, 0.857395, 0.917917,
        0.978439, 1.038961, 1.099483, 1.16,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.94944, 1.02672, 1.104, 1.2144, 1.29168, 1.38, 1.50144, 1.62288, 1.74432, 1.8768, 2.00928, 2.14176, 2.27424,
        2.40672, 2.5392,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.24184, 1.34292, 1.444, 1.5884, 1.68948, 1.805, 1.96384, 2.12268, 2.28152, 2.4548, 2.62808, 2.80136, 2.97464,
        3.14792, 3.3212,
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
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255, 0.27, 0.285],
      fixed: [
        1155.5629, 1271.1353, 1396.3386, 1531.173, 1675.6384, 1829.7349, 1993.4624, 2166.8208, 2349.8105, 2542.4312,
        2744.6826, 2956.5652, 3178.0789, 3409.2236, 3650,
      ],
    }),
    action("基础伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255, 0.27, 0.285],
    }),
    action("蓄力完成伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.1904, 0.20468, 0.21896, 0.238, 0.25228, 0.26656, 0.2856, 0.30464, 0.32368, 0.34272, 0.36176, 0.3808, 0.4046,
        0.4284, 0.4522,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.066104, 0.071062, 0.07602, 0.08263, 0.087588, 0.092546, 0.099156, 0.105766, 0.112377, 0.118987, 0.125598,
        0.132208, 0.140471, 0.148734, 0.156997,
      ],
    }),
    action("水波冲击伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.066104, 0.071062, 0.07602, 0.08263, 0.087588, 0.092546, 0.099156, 0.105766, 0.112377, 0.118987, 0.125598,
        0.132208, 0.140471, 0.148734, 0.156997,
      ],
    }),
  ];
  otherSkill = [
    action("6命·衍溢的汐潮", AttackType.Burst, ElementType.Hydro, {
      hp: [0.15],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "元素爆发·赤冕祝祷",
      describe: "角色的普通攻击对敌人造成元素伤害时，提高造成的伤害；单手剑、双手剑、长柄武器角色会获得水元素附魔",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => 20 + ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 0.5,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.Enchanting,
          getValue: () => EnchantingType[ElementType.Hydro],
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·贯月的耀锋",
      describe: "圣仪·苍鹭庇卫命中敌人时，坎蒂丝的生命值上限提升20%",
      effect: [{ type: BuffType.HPPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![坎蒂丝](https://enka.network/ui/UI_AvatarIcon_Candace.png) */
export const Candace = new CandaceData();
