import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000025, "行秋")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, 10222, 202, 758, 80)
@Icons("UI_AvatarIcon_Xingqiu")
class XingqiuData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["古华剑法", "古华剑·画雨笼山", "古华剑·裁雨留虹"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.466, 0.504, 0.542, 0.596, 0.634, 0.678, 0.737, 0.797, 0.856, 0.921, 0.996],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.476, 0.515, 0.554, 0.609, 0.648, 0.693, 0.753, 0.814, 0.875, 0.942, 1.018],
    }),
    action("三段伤害·前段", AttackType.Normal, ElementType.Physical, {
      atk: [0.286, 0.309, 0.332, 0.365, 0.388, 0.415, 0.452, 0.488, 0.525, 0.564, 0.61],
    }),
    action("三段伤害·后段", AttackType.Normal, ElementType.Physical, {
      atk: [0.286, 0.309, 0.332, 0.365, 0.388, 0.415, 0.452, 0.488, 0.525, 0.564, 0.61],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.56, 0.605, 0.651, 0.716, 0.762, 0.814, 0.885, 0.957, 1.029, 1.107, 1.196],
    }),
    action("五段伤害·前段", AttackType.Normal, ElementType.Physical, {
      atk: [0.359, 0.388, 0.417, 0.459, 0.488, 0.521, 0.567, 0.613, 0.659, 0.709, 0.766],
    }),
    action("五段伤害·后段", AttackType.Normal, ElementType.Physical, {
      atk: [0.359, 0.388, 0.417, 0.459, 0.488, 0.521, 0.567, 0.613, 0.659, 0.709, 0.766],
    }),
    action("重击伤害·前段", AttackType.Strong, ElementType.Physical, {
      atk: [0.473, 0.512, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.935, 1.011],
    }),
    action("重击伤害·后段", AttackType.Strong, ElementType.Physical, {
      atk: [0.562, 0.607, 0.653, 0.718, 0.764, 0.816, 0.888, 0.96, 1.032, 1.11, 1.2],
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
    action("技能伤害·前段", AttackType.Skill, ElementType.Hydro, {
      atk: [1.68, 1.81, 1.93, 2.1, 2.23, 2.35, 2.52, 2.69, 2.86, 3.02, 3.19, 3.36, 3.57],
    }),
    action("技能伤害·后段", AttackType.Skill, ElementType.Hydro, {
      atk: [1.91, 2.06, 2.2, 2.39, 2.53, 2.68, 2.87, 3.06, 3.25, 3.44, 3.63, 3.82, 4.06],
    }),
  ];
  burstSkill = [
    action("剑雨伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [0.543, 0.583, 0.624, 0.678, 0.719, 0.76, 0.814, 0.868, 0.923, 0.977, 1.03, 1.09, 1.15, 1.22],
    }),
  ];
  otherSkill = [
    action("生水要诀", AttackType.Heal, ElementType.None, {
      hp: [0.06],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "虚实工笔",
      describe: "行秋获得20%水元素伤害加成",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 20 }],
      enable: true,
    },
    {
      label: "2命·天青现虹",
      describe: "受到剑雨攻击的敌人，水元素抗性降低15%",
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    {
      label: "4命·孤舟斩蛟",
      describe: "在古华剑·裁雨留虹效果持续期间，古华剑·画雨笼山造成的伤害提升50%",
      effect: [{ type: BuffType.SkillRate, getValue: () => 50 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![行秋](https://enka.network/ui/UI_AvatarIcon_Xingqiu.png) */
export const Xingqiu = new XingqiuData();
