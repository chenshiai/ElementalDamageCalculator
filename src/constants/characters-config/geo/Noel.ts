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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_DEF_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000034, "诺艾尔")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, [12071, 191, 799], 60, [12906, 239, 854])
@Icons("UI_AvatarIcon_Noel")
export class NoelData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·女仆", "护心铠", "大扫除"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7912, 0.8556, 0.92, 1.012, 1.0764, 1.15, 1.2512, 1.3524, 1.4536, 1.564, 1.6744, 1.7848, 1.8952, 2.0056, 2.116,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.73358, 0.79329, 0.853, 0.9383, 0.99801, 1.06625, 1.16008, 1.25391, 1.34774, 1.4501, 1.55246, 1.65482, 1.75718,
        1.85954, 1.9619,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.86258, 0.93279, 1.003, 1.1033, 1.17351, 1.25375, 1.36408, 1.47441, 1.58474, 1.7051, 1.82546, 1.94582, 2.06618,
        2.18654, 2.3069,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.13434, 1.22667, 1.319, 1.4509, 1.54323, 1.64875, 1.79384, 1.93893, 2.08402, 2.2423, 2.40058, 2.55886, 2.71714,
        2.87542, 3.0337,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.5074, 0.5487, 0.59, 0.649, 0.6903, 0.7375, 0.8024, 0.8673, 0.9322, 1.003, 1.0738, 1.1446, 1.2154, 1.2862,
        1.357,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.90472, 0.97836, 1.052, 1.1572, 1.23084, 1.315, 1.43072, 1.54644, 1.66216, 1.7884, 1.91464, 2.04088, 2.16712,
        2.29336, 2.4196,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      def: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55, 2.7, 2.85],
    }),
    action("吸收量", AttackType.Shield, ElementType.None, {
      def: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6, 3.8],
      fixed: [
        769.7851, 846.7743, 930.17926, 1020, 1116.2365, 1218.8888, 1327.9568, 1443.4407, 1565.3402, 1693.6555,
        1828.3867, 1969.5336, 2117.0962, 2271.0747, 2431.4688,
      ],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      def: [
        0.2128, 0.22876, 0.24472, 0.266, 0.28196, 0.29792, 0.3192, 0.34048, 0.36176, 0.38304, 0.40432, 0.4256, 0.4522,
        0.4788, 0.5054,
      ],
      fixed: [
        102.71802, 112.99125, 124.12058, 136.10602, 148.94756, 162.64519, 177.19893, 192.60878, 208.87473, 225.99677,
        243.97491, 262.80917, 282.49954, 303.046, 324.44855,
      ],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Geo, {
      atk: [
        0.672, 0.7224, 0.7728, 0.84, 0.8904, 0.9408, 1.008, 1.0752, 1.1424, 1.2096, 1.2768, 1.344, 1.428, 1.512, 1.596,
      ],
    }),
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [
        0.928, 0.9976, 1.0672, 1.16, 1.2296, 1.2992, 1.392, 1.4848, 1.5776, 1.6704, 1.7632, 1.856, 1.972, 2.088, 2.204,
      ],
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
            let rate = [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9, 0.95][
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
