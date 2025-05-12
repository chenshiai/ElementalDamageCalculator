import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_CRYO_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000039, "迪奥娜")
@Weapon(WeaponType.Bow)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, 9570, 212, 601, 80)
@Icons("UI_AvatarIcon_Diona")
class DionaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·猎人射术", "猫爪冻冻", "最烈特调"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.772],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.335, 0.363, 0.39, 0.429, 0.456, 0.488, 0.53, 0.573, 0.616, 0.663, 0.717],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.456, 0.493, 0.53, 0.583, 0.62, 0.663, 0.721, 0.779, 0.837, 0.901, 0.974],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.919],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.538, 0.581, 0.625, 0.688, 0.731, 0.781, 0.85, 0.919, 0.988, 1.063, 1.148],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.69, 0.75, 0.806, 0.867, 0.937],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("猫爪伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.419, 0.451, 0.482, 0.524, 0.555, 0.587, 0.629, 0.671, 0.713, 0.755, 0.796, 0.838, 0.891],
    }),
    action("护盾基础吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.072, 0.077, 0.083, 0.09, 0.095, 0.101, 0.108, 0.115, 0.122, 0.13, 0.137, 0.144, 0.153, 0.162],
      fixed: [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044],
    }),
    action("长按护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.072, 0.077, 0.083, 0.09, 0.095, 0.101, 0.108, 0.115, 0.122, 0.13, 0.137, 0.144, 0.153, 0.162].map(
        (i) => i * 1.75
      ),
      fixed: [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044].map((i) => i * 1.75),
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8],
    }),
    action("领域持续伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.526, 0.566, 0.605, 0.658, 0.697, 0.737, 0.79, 0.842, 0.895, 0.948, 1, 1.053, 1.119, 1.184],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.0534, 0.0574, 0.0614, 0.0667, 0.0707, 0.0747, 0.08, 0.0854, 0.0907, 0.096, 0.1014, 0.1067, 0.1134, 0.1201],
      fixed: [513, 565, 620, 680, 744, 813, 885, 962, 1044, 1129, 1219, 1313, 1411, 1514],
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
