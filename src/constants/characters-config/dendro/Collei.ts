import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000067, "柯莱")
@Weapon(WeaponType.Bow)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, 9787, 223, 601, 60)
@Icons("UI_AvatarIcon_Collei")
class ColleiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["祈颂射艺", "拂花偈叶", "猫猫秘宝"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.436, 0.472, 0.507, 0.558, 0.593, 0.634, 0.69, 0.745, 0.801, 0.862, 0.923],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.427, 0.461, 0.496, 0.546, 0.58, 0.62, 0.675, 0.729, 0.784, 0.843, 0.903],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.541, 0.585, 0.629, 0.692, 0.736, 0.786, 0.855, 0.925, 0.994, 1.069, 1.145],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.68, 0.736, 0.791, 0.87, 0.926, 0.989, 1.076, 1.163, 1.25, 1.345, 1.44],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Dendro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [1.512, 1.625, 1.739, 1.89, 2.003, 2.117, 2.268, 2.419, 2.57, 2.722, 2.873, 3.024, 3.213],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [2.018, 2.17, 2.321, 2.523, 2.674, 2.826, 3.027, 3.229, 3.431, 3.633, 3.835, 4.047, 4.289],
    }),
    action("跃动伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [0.433, 0.465, 0.497, 0.541, 0.573, 0.606, 0.649, 0.692, 0.735, 0.779, 0.822, 0.865, 0.919],
    }),
  ];
  otherSkill = [
    action("飞叶迴斜", AttackType.Skill, ElementType.Dendro, {
      atk: [0.4],
    }),
    action("6命·坠镞为林", AttackType.Other, ElementType.Dendro, {
      atk: [2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "1命·巡护深林",
      describe: "柯莱处于队伍后台时，元素充能效率提升20%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![柯莱](https://enka.network/ui/UI_AvatarIcon_Collei.png) */
export const Collei = new ColleiData();
