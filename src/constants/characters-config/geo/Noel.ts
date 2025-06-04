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
import { A_80_DEF_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000034, "诺艾尔")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, 12071, 191, 799, 60)
@Icons("UI_AvatarIcon_Noel")
class NoelData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·女仆", "护心铠", "大扫除"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.791, 0.856, 0.92, 1.01, 1.08, 1.15, 1.25, 1.35, 1.45, 1.56, 1.67],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.734, 0.793, 0.853, 0.938, 0.998, 1.07, 1.16, 1.25, 1.35, 1.45, 1.55],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.863, 0.933, 1, 1.1, 1.17, 1.25, 1.36, 1.47, 1.58, 1.71, 1.83],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.13, 1.23, 1.32, 1.45, 1.54, 1.65, 1.79, 1.94, 2.08, 2.24, 2.4],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.507, 0.549, 0.59, 0.649, 0.69, 0.738, 0.802, 0.867, 0.932, 1.003, 1.074],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.905, 0.978, 1.05, 1.16, 1.23, 1.32, 1.43, 1.55, 1.66, 1.79, 1.92],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.01, 1.08, 1.18, 1.27, 1.37, 1.47, 1.58],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
    }),
    action("高空坠地冲击伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      def: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55],
    }),
    action("吸收量", AttackType.Shield, ElementType.None, {
      def: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6],
      fixed: [770, 847, 930, 1020, 1116, 1219, 1328, 1443, 1565, 1694, 1828, 1970, 2117, 2271],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      def: [0.213, 0.229, 0.245, 0.266, 0.282, 0.298, 0.319, 0.34, 0.362, 0.383, 0.404, 0.426, 0.452, 0.479],
      fixed: [103, 113, 124, 136, 149, 163, 177, 193, 209, 226, 244, 263, 282, 303],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Geo, {
      atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.01, 1.08, 1.14, 1.21, 1.28, 1.34, 1.43],
    }),
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [0.928, 0.998, 1.07, 1.16, 1.23, 1.3, 1.39, 1.48, 1.58, 1.67, 1.76, 1.86, 1.97],
    }),
  ];
  otherSkill = [
    action("4命·之后会扫干净的", AttackType.Skill, ElementType.Geo, {
      atk: [4],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_DEF_24P,
    {
      label: "元素爆发·大扫除",
      describe: "基于诺艾尔的防御力，提高攻击力；将攻击伤害转为岩元素伤害",
      effect: [
        {
          type: BuffType.Transform,
          getValue: () => EnchantingType[ElementType.Geo],
        },
        {
          type: BuffType.ATKFixed,
          getValue(data) {
            let rate = [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85][
              data.burstLevel + data.burstLevelAdd - 1
            ];
            if (data.constellation >= 6) rate += 0.5;
            return (data.baseDEF + data.extraDEF) * rate;
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
    },
    {
      label: "2命·旋风女仆",
      describe: "诺艾尔的重击体力消耗降低20%，造成的伤害提升15%",
      effect: [{ type: BuffType.StrongPrcent, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![诺艾尔](https://enka.network/ui/UI_AvatarIcon_Noel.png) */
export const Noel = new NoelData();
