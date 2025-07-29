import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_CHARGE_26P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000015, "凯亚")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, 11636, 223, 792, 60)
@Icons("UI_AvatarIcon_Kaeya")
export class KaeyaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["仪典剑术", "霜袭", "凛冽轮舞"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.538, 0.581, 0.625, 0.688, 0.731, 0.781, 0.85, 0.919, 0.988, 1.062, 1.148],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.517, 0.559, 0.601, 0.661, 0.703, 0.751, 0.817, 0.883, 0.95, 1.022, 1.104],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.653, 0.706, 0.759, 0.835, 0.888, 0.949, 1.032, 1.116, 1.199, 1.29, 1.395],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.709, 0.766, 0.824, 0.906, 0.964, 1.03, 1.121, 1.211, 1.302, 1.401, 1.514],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.882, 0.954, 1.025, 1.129, 1.2, 1.283, 1.395, 1.508, 1.621, 1.744, 1.885],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.55, 0.595, 0.64, 0.85, 0.704, 0.749, 0.8, 0.87, 0.941, 1.011, 1.088, 1.176],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.731, 0.791, 0.85, 0.935, 0.995, 1.063, 1.156, 1.25, 1.343, 1.445, 1.562],
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
    action("霜袭", AttackType.Skill, ElementType.Cryo, {
      atk: [1.91, 2.06, 2.2, 2.39, 2.53, 2.68, 2.87, 3.06, 3.25, 3.44, 3.63, 3.82, 4.06],
    }),
  ];
  burstSkill = [
    action("凛冽轮舞", AttackType.Burst, ElementType.Cryo, {
      atk: [0.776, 0.834, 0.892, 0.97, 1.03, 1.09, 1.16, 1.24, 1.32, 1.4, 1.47, 1.55, 1.65, 1.75],
    }),
  ];
  otherSkill = [
    action("4命·极寒的轻吻护盾", AttackType.Shield, ElementType.None, {
      hp: [0.3],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_CHARGE_26P,
    {
      label: "1命·卓越的血脉",
      describe: "对受到冰元素影响的敌人，凯亚的普通攻击与重击暴击率提升15%",
      effect: [
        { type: BuffType.NormalCritcal, getValue: () => 15 },
        { type: BuffType.StrongCritcal, getValue: () => 15 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![凯亚](https://enka.network/ui/UI_AvatarIcon_Kaeya.png) */
export const Kaeya = new KaeyaData();
