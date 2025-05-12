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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000042, "刻晴")
@Weapon(WeaponType.Sword)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, 13103, 323, 799, 40)
@Icons("UI_AvatarIcon_Keqing")
class KeqingData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·云来剑法", "星斗归位", "天街巡游"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.41, 0.444, 0.477, 0.525, 0.558, 0.596, 0.649, 0.701, 0.754, 0.811, 0.868],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.41, 0.444, 0.477, 0.525, 0.558, 0.596, 0.649, 0.701, 0.754, 0.811, 0.868],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.544, 0.589, 0.633, 0.696, 0.741, 0.791, 0.861, 0.931, 1, 1.08, 1.152],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.315, 0.34, 0.366, 0.403, 0.428, 0.458, 0.498, 0.538, 0.578, 0.622, 0.666],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.344, 0.372, 0.4, 0.44, 0.468, 0.5, 0.544, 0.588, 0.632, 0.68, 0.728],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.67, 0.724, 0.779, 0.857, 0.911, 0.974, 1.06, 1.15, 1.23, 1.32, 1.42],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.77, 0.83, 0.893, 0.982, 1.04, 1.12, 1.21, 1.31, 1.41, 1.52, 1.63],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.86, 0.93, 1, 1.1, 1.17, 1.25, 1.36, 1.47, 1.58, 1.7, 1.82],
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
    action("雷楔伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.5, 0.542, 0.58, 0.63, 0.668, 0.706, 0.756, 0.806, 0.86, 0.907, 0.958, 1.01, 1.07, 1.13],
    }),
    action("斩击伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.68, 1.81, 1.93, 2.1, 2.23, 2.35, 2.52, 2.69, 2.86, 3.02, 3.19, 3.36, 3.57, 3.78],
    }),
    action("雷暴连斩伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.84, 0.903, 0.966, 1.05, 1.11, 1.18, 1.26, 1.34, 1.43, 1.51, 1.6, 1.68, 1.79, 1.89],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
    }),
    action("连斩伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54],
    }),
    action("最后一击伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.89, 2.03, 2.17, 2.36, 2.5, 2.64, 2.83, 3.02, 3.21, 3.4, 3.59, 3.78, 4.01, 4.25],
    }),
  ];
  otherSkill = [
    action("1命·雷厉", AttackType.Skill, ElementType.Electro, {
      atk: [0.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "抵天雷罚",
      describe: "雷楔存在期间再次施放星斗归位后的5秒内，刻晴获得雷元素附魔",
      effect: [{ type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Electro] }],
      enable: false,
    },
    {
      label: "玉衡之贵",
      describe: "施放天街巡游时，刻晴的暴击率提升15%，元素充能效率提升15%",
      effect: [
        { type: BuffType.Critcal, getValue: () => 15 },
        { type: BuffType.ChargeFixed, getValue: () => 15 },
      ],
      enable: false,
    },
    Constellation_Q_3,
    {
      label: "4命·调律",
      describe: "刻晴触发雷元素相关反应后的10秒内，攻击力提升25%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 25 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·廉贞",
      describe:
        "进行普通攻击、重击、施放元素战技或元素爆发时，刻晴获得6%雷元素伤害加成，由普通攻击、重击、元素战技或元素爆发引起的效果分别独立存在",
      effect: [{ type: BuffType.ElectroPrcent, getValue: (_, s) => 6 * s }],
      enable: false,
      stackable: true,
      stack: 4,
      limit: 4,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![刻晴](https://enka.network/ui/UI_AvatarIcon_Keqing.png) */
export const Keqing = new KeqingData();
