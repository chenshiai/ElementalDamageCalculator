import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ELECTRO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000024, "北斗")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, [13050, 225, 648], 80, [13953, 282, 693])
@Icons("UI_AvatarIcon_Beidou")
export class BeidouData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["征涛", "捉浪", "斫雷"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.711, 0.769, 0.827, 0.91, 0.968, 1.03, 1.12, 1.22, 1.31, 1.41, 1.52],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.709, 0.767, 0.824, 0.906, 0.964, 1.03, 1.12, 1.21, 1.3, 1.4, 1.51],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.883, 0.955, 1.03, 1.13, 1.2, 1.28, 1.4, 1.51, 1.62, 1.75, 1.89],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.865, 0.936, 1.01, 1.11, 1.18, 1.26, 1.37, 1.48, 1.59, 1.71, 1.85],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.12, 1.21, 1.3, 1.43, 1.53, 1.63, 1.77, 1.92, 2.06, 2.22, 2.4],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.562, 0.608, 0.654, 0.719, 0.765, 0.818, 0.889, 0.961, 1.03, 1.11, 1.2],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.02, 1.1, 1.18, 1.3, 1.39, 1.48, 1.61, 1.74, 1.87, 2.01, 2.18],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.01, 1.08, 1.18, 1.27, 1.37, 1.47, 1.58],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.144, 0.155, 0.166, 0.18, 0.191, 0.202, 0.216, 0.23, 0.245, 0.259, 0.274, 0.288, 0.306, 0.324],
      fixed: [1386, 1525, 1675, 1837, 2010, 2195, 2392, 2600, 2819, 3050, 3293, 3547, 3813, 4090],
    }),
    action("基础伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.22, 1.31, 1.4, 1.52, 1.61, 1.7, 1.82, 1.95, 2.07, 2.19, 2.31, 2.43, 2.58],
    }),
    action("一层伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.22 + 1.6,
        1.31 + 1.72,
        1.4 + 1.84,
        1.52 + 2,
        1.61 + 2.12,
        1.7 + 2.24,
        1.82 + 2.4,
        1.95 + 2.56,
        2.07 + 2.72,
        2.19 + 2.88,
        2.31 + 3.04,
        2.43 + 3.2,
        2.58 + 3.4,
      ],
    }),
    action("两层伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.22 + 1.6 * 2,
        1.31 + 1.72 * 2,
        1.4 + 1.84 * 2,
        1.52 + 2 * 2,
        1.61 + 2.12 * 2,
        1.7 + 2.24 * 2,
        1.82 + 2.4 * 2,
        1.95 + 2.56 * 2,
        2.07 + 2.72 * 2,
        2.19 + 2.88 * 2,
        2.31 + 3.04 * 2,
        2.43 + 3.2 * 2,
        2.58 + 3.4 * 2,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.22, 1.31, 1.4, 1.52, 1.61, 1.7, 1.82, 1.95, 2.07, 2.19, 2.31, 2.43, 2.58, 2.74],
    }),
    action("闪雷伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04, 2.16],
    }),
  ];
  otherSkill = [
    action("1命·鱼龙沉八方", AttackType.Shield, ElementType.None, {
      hp: [0.16],
    }),
    action("4命·牵星觅乡岸", AttackType.Other, ElementType.Electro, {
      atk: [0.2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ELECTRO_24P,
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·北斗祓幽孽",
      describe: "斫雷持续期间，周围敌人的雷元素抗性降低15%",
      effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -15 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.Enemy,
    },
  ];
}

/** ![北斗](https://enka.network/ui/UI_AvatarIcon_Beidou.png) */
export const Beidou = new BeidouData();
