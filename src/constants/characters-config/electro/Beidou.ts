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
      atk: [
        0.71122, 0.76911, 0.827, 0.9097, 0.96759, 1.03375, 1.12472, 1.21569, 1.30666, 1.4059, 1.519613, 1.653338,
        1.787064, 1.92079, 2.066673,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.70864, 0.76632, 0.824, 0.9064, 0.96408, 1.03, 1.12064, 1.21128, 1.30192, 1.4008, 1.5141, 1.647341, 1.780582,
        1.913822, 2.059176,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.88322, 0.95511, 1.027, 1.1297, 1.20159, 1.28375, 1.39672, 1.50969, 1.62266, 1.7459, 1.887112, 2.053178,
        2.219244, 2.38531, 2.566473,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.86516, 0.93558, 1.006, 1.1066, 1.17702, 1.2575, 1.36816, 1.47882, 1.58948, 1.7102, 1.848525, 2.011195,
        2.173865, 2.336536, 2.513994,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.12144, 1.21272, 1.304, 1.4344, 1.52568, 1.63, 1.77344, 1.91688, 2.06032, 2.2168, 2.3961, 2.606957, 2.817814,
        3.02867, 3.258696,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.56244, 0.60822, 0.654, 0.7194, 0.76518, 0.8175, 0.88944, 0.96138, 1.03332, 1.1118, 1.201725, 1.307477,
        1.413229, 1.51898, 1.634346,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.01824, 1.10112, 1.184, 1.3024, 1.38528, 1.48, 1.61024, 1.74048, 1.87072, 2.0128, 2.1756, 2.367053, 2.558506,
        2.749958, 2.958816,
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
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [
        0.144, 0.1548, 0.1656, 0.18, 0.1908, 0.2016, 0.216, 0.2304, 0.2448, 0.2592, 0.2736, 0.288, 0.306, 0.324, 0.342,
      ],
      fixed: [
        1386.3678, 1525.0239, 1675.2346, 1837, 2010.3201, 2195.1948, 2391.6243, 2599.6084, 2819.147, 3050.2405,
        3292.8887, 3547.0913, 3812.8489, 4090.161, 4379.028,
      ],
    }),
    action("基础伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.216, 1.3072, 1.3984, 1.52, 1.6112, 1.7024, 1.824, 1.9456, 2.0672, 2.1888, 2.3104, 2.432, 2.584, 2.736, 2.888,
      ],
    }),
    action("一层伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.216 + 1.6,
        1.3072 + 1.72,
        1.3984 + 1.84,
        1.52 + 2,
        1.6112 + 2.12,
        1.7024 + 2.24,
        1.824 + 2.4,
        1.9456 + 2.56,
        2.0672 + 2.72,
        2.1888 + 2.88,
        2.3104 + 3.04,
        2.432 + 3.2,
        2.584 + 3.4,
        2.736 + 3.6,
        2.888 + 3.8,
      ],
    }),
    action("两层伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.216 + 1.6 * 2,
        1.3072 + 1.72 * 2,
        1.3984 + 1.84 * 2,
        1.52 + 2 * 2,
        1.6112 + 2.12 * 2,
        1.7024 + 2.24 * 2,
        1.824 + 2.4 * 2,
        1.9456 + 2.56 * 2,
        2.0672 + 2.72 * 2,
        2.1888 + 2.88 * 2,
        2.3104 + 3.04 * 2,
        2.432 + 3.2 * 2,
        2.584 + 3.4 * 2,
        2.736 + 3.6 * 2,
        2.888 + 3.8 * 2,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        1.216, 1.3072, 1.3984, 1.52, 1.6112, 1.7024, 1.824, 1.9456, 2.0672, 2.1888, 2.3104, 2.432, 2.584, 2.736, 2.888,
      ],
    }),
    action("闪雷伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
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
