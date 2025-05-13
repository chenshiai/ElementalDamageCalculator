import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000036, "重云")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, 10984, 223, 648, 40)
@Icons("UI_AvatarIcon_Chongyun")
class ChongyunData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·灭邪四式", "灵刃·重华叠霜", "灵刃·云开星落"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.7, 0.757, 0.814, 0.895, 0.952, 1.018, 1.107, 1.197, 1.286, 1.384, 1.481],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.631, 0.683, 0.734, 0.807, 0.859, 0.918, 0.998, 1.079, 1.16, 1.248, 1.336],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.803, 0.869, 0.934, 1.028, 1.093, 1.168, 1.27, 1.373, 1.476, 1.588, 1.7],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.012, 1.095, 1.177, 1.295, 1.377, 1.471, 1.601, 1.73, 1.86, 2.001, 2.142],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.563, 0.609, 0.654, 0.72, 0.766, 0.818, 0.89, 0.962, 1.034, 1.113, 1.192],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.012, 1.095, 1.177, 1.295, 1.377, 1.471, 1.601, 1.73, 1.86, 2.001, 2.142],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [1.02, 1.1, 1.18, 1.3, 1.38, 1.48, 1.61, 1.74, 1.87, 2.01, 2.15],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.72, 1.85, 1.98, 2.15, 2.28, 2.41, 2.58, 2.75, 2.92, 3.1, 3.27, 3.44, 3.66],
    }),
    action("追冰剑诀", AttackType.Skill, ElementType.Cryo, {
      atk: [1.72, 1.85, 1.98, 2.15, 2.28, 2.41, 2.58, 2.75, 2.92, 3.1, 3.27, 3.44, 3.66],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.42, 1.53, 1.64, 1.78, 1.89, 1.99, 2.14, 2.28, 2.42, 2.56, 2.71, 2.85, 3.03, 3.2],
    }),
  ];
  otherSkill = [
    action("1命·释凌咏冰", AttackType.Other, ElementType.Cryo, {
      atk: [0.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "追冰剑诀·敌人冰元素抗性降低",
      describe: "灵刃·重华叠霜领域消失时，会唤出一柄灵刃自动攻击附近的敌人，被击中的敌人冰元素抗性降低10%",
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => 10 }],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·四灵捧圣",
      describe: "灵刃·云开星落对生命值百分比低于重云的敌人造成伤害时，伤害提升15%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![重云](https://enka.network/ui/UI_AvatarIcon_Chongyun.png) */
export const Chongyun = new ChongyunData();
