import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_CRYO_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000039, "迪奥娜")
@Weapon(WeaponType.Bow)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, [9570, 212, 601], 80, [10232, 266, 642])
@Icons("UI_AvatarIcon_Diona")
export class DionaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["猎人射术", "猫爪冻冻", "最烈特调"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3612, 0.3906, 0.42, 0.462, 0.4914, 0.525, 0.5712, 0.6174, 0.6636, 0.714, 0.77175, 0.839664, 0.907578,
        0.975492, 1.04958,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3354, 0.3627, 0.39, 0.429, 0.4563, 0.4875, 0.5304, 0.5733, 0.6162, 0.663, 0.716625, 0.779688, 0.842751,
        0.905814, 0.97461,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4558, 0.4929, 0.53, 0.583, 0.6201, 0.6625, 0.7208, 0.7791, 0.8374, 0.901, 0.973875, 1.059576, 1.145277,
        1.230978, 1.32447,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91875, 0.9996, 1.08045, 1.1613, 1.2495],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5375, 0.58125, 0.625, 0.6875, 0.73125, 0.78125, 0.85, 0.91875, 0.9875, 1.0625, 1.148438, 1.2495, 1.350562,
        1.451625, 1.561875,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.937125, 1.019592, 1.102059,
        1.184526, 1.27449,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
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
    action("猫爪伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.4192, 0.45064, 0.48208, 0.524, 0.55544, 0.58688, 0.6288, 0.67072, 0.71264, 0.75456, 0.79648, 0.8384, 0.8908,
        0.9432, 0.9956,
      ],
    }),
    action("护盾基础吸收量", AttackType.Shield, ElementType.None, {
      hp: [
        0.072, 0.0774, 0.0828, 0.09, 0.0954, 0.1008, 0.108, 0.1152, 0.1224, 0.1296, 0.1368, 0.144, 0.153, 0.162, 0.171,
      ],
      fixed: [
        692.8066, 762.09686, 837.1613, 918, 1004.61285, 1097, 1195.1611, 1299.0966, 1408.8062, 1524.29, 1645.548,
        1772.5802, 1905.3866, 2043.9672, 2188.322,
      ],
    }),
    action("长按护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [
        0.072, 0.0774, 0.0828, 0.09, 0.0954, 0.1008, 0.108, 0.1152, 0.1224, 0.1296, 0.1368, 0.144, 0.153, 0.162, 0.171,
      ].map((i) => i * 1.75),
      fixed: [
        692.8066, 762.09686, 837.1613, 918, 1004.61285, 1097, 1195.1611, 1299.0966, 1408.8062, 1524.29, 1645.548,
        1772.5802, 1905.3866, 2043.9672, 2188.322,
      ].map((i) => i * 1.75),
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9],
    }),
    action("领域持续伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.5264, 0.56588, 0.60536, 0.658, 0.69748, 0.73696, 0.7896, 0.84224, 0.89488, 0.94752, 1.00016, 1.0528, 1.1186,
        1.1844, 1.2502,
      ],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.05336, 0.057362, 0.061364, 0.0667, 0.070702, 0.074704, 0.08004, 0.085376, 0.090712, 0.096048, 0.101384,
        0.10672, 0.11339, 0.12006, 0.12673,
      ],
      fixed: [
        513.19006, 564.5162, 620.1195, 680, 744.15765, 812.5925, 885.30457, 962.29376, 1043.5602, 1129.1038, 1218.9244,
        1313.0223, 1411.3975, 1514.0498, 1620.9792,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_CRYO_24P,
    {
      label: "2命·猫爪冰摇",
      describe: "猫爪冻冻造成的伤害、护盾吸收量提高15%",
      effect: [
        { type: BuffType.SkillPrcent, getValue: () => 15 },
        { type: BuffType.ShieldAdd, getValue: () => 15 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·猫尾打烊之时",
      describe: "最烈特调领域内的角色生命值高于50%时，元素精通提升200",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 200 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.All,
    },
  ];
}

/** ![迪奥娜](https://enka.network/ui/UI_AvatarIcon_Diona.png) */
export const Diona = new DionaData();
