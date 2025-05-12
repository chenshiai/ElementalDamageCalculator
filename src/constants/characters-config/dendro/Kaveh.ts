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
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000081, "卡维")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, 11962, 234, 751, 80)
@Icons("UI_AvatarIcon_Kaveh")
class KavehData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·旋规设矩", "画则巧施", "繁绘隅穹"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.762, 0.824, 0.886, 0.975, 1.037, 1.107, 1.205, 1.302, 1.4, 1.506, 1.612],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.696, 0.753, 0.81, 0.891, 0.947, 1.012, 1.101, 1.19, 1.279, 1.377, 1.474],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.843, 0.911, 0.98, 1.078, 1.146, 1.225, 1.333, 1.44, 1.548, 1.666, 1.783],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.027, 1.111, 1.194, 1.614, 1.397, 1.493, 1.624, 1.755, 1.887, 2.03, 2.173],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.532, 0.575, 0.618, 0.68, 0.723, 0.773, 0.841, 0.909, 0.976, 1.051, 1.125],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.962, 1.04, 1.118, 1.23, 1.308, 1.398, 1.521, 1.644, 1.766, 1.901, 2.035],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [2.04, 2.193, 2.356, 2.55, 2.703, 2.866, 3.06, 3.264, 3.467, 3.672, 3.876, 4.08, 4.335],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4],
    }),
  ];
  otherSkill = [
    action("6命·天园之光", AttackType.Other, ElementType.Dendro, {
      atk: [0.618],
    }),
    action("营造者的担当回复量", AttackType.Heal, ElementType.None, {
      em: [3],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "工艺家的奇想",
      describe: "在繁绘隅穹持续期间，卡维在普通攻击、重击或下落攻击命中敌人后，元素精通将提升25点，至多叠加4层",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => s * 25 }],
      stackable: true,
      stack: 4,
      limit: 4,
      enable: true,
    },
    {
      label: "元素爆发·繁绘隅穹",
      describe: "提高卡维的普通攻击、重击与下落攻击的攻击范围，并将攻击伤害转为无法被附魔覆盖的草元素伤害",
      effect: [{ type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Dendro] }],
      enable: false,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![卡维](https://enka.network/ui/UI_AvatarIcon_Kaveh.png) */
export const Kaveh = new KavehData();
