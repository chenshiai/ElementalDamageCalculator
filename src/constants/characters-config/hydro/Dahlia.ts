import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000115, "塔利雅")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, [12506, 189, 506], 60, [13371, 237, 598])
@Icons("UI_AvatarIcon_Dahlia")
export class DahliaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·祭仪", "圣浸的礼典", "纯耀的祷咏"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.435, 0.471, 0.506, 0.557, 0.592, 0.633, 0.689, 0.744, 0.8, 0.861, 0.922],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.401, 0.434, NaN, 0.513, 0.546, 0.583, 0.634, 0.685, 0.737, 0.793, 0.849],
    }),
    action("三段伤害·前段", AttackType.Normal, ElementType.Physical, {
      atk: [0.237, 0.257, 0.276, 0.304, 0.323, 0.345, 0.375, 0.406, 0.436, 0.469, 0.502],
    }),
    action("三段伤害·后段", AttackType.Normal, ElementType.Physical, {
      atk: [0.29, 0.314, 0.337, 0.371, 0.395, 0.422, 0.459, 0.496, 0.533, 0.574, 0.614],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.657, 0.71, 0.763, 0.84, 0.893, 0.954, 1.038, 1.122, 1.206, 1.298, 1.389],
    }),
    action("重击伤害·前段", AttackType.Strong, ElementType.Physical, {
      atk: [0.399, 0.431, 0.464, 0.51, 0.543, 0.58, 0.631, 0.682, 0.733, 0.788, 0.844],
    }),
    action("重击伤害·后段", AttackType.Strong, ElementType.Physical, {
      atk: [0.551, 0.595, 0.64, 0.704, 0.749, 0.8, 0.871, 0.941, 1.012, 1.089, 1.165],
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
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [2.328, 2.503, 2.677, 2.91, 3.085, 3.259, 3.492, 3.725, 3.958, 4.19, 4.423, 4.656, 4.947, 5.238],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [2.328, 2.503, 2.677, 2.91, 3.085, 3.259, 3.492, 3.725, 3.958, 4.19, 4.423, 4.656, 4.947, 5.238],
    }),
    action("圣眷护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.034, 0.036, 0.039, 0.042, 0.045, 0.047, 0.05, 0.054, 0.057, 0.06, 0.064, 0.067, 0.071],
      fixed: [324, 356, 391, 429, 469, 512, 558, 607, 658, 712, 768, 828, 890],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "2命·眷怜启应",
      describe:
        "塔利雅消耗元素爆发纯耀的祷咏中的「祝颂」效果唤出圣眷护盾后，处于圣眷护盾庇护下的角色，护盾强效提升25%。",
      effect: [{ type: BuffType.ShieldStrong, getValue: () => 25, actionOn: ActionOn.Direct }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![塔利雅](https://enka.network/ui/UI_AvatarIcon_Dahlia.png) */
export const Dahlia = new DahliaData();
