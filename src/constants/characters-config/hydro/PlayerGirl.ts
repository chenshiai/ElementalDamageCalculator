import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_E_5, Constellation_Q_3, Constellation_Q_5 } from "../buffs";

@EnKaId(1000000703, "荧·水")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, 10875, 213, 683, 60)
@Icons("UI_AvatarIcon_PlayerGirl", "PlayerWater")
class PlayerGirlData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·异邦激流", "水纹剑", "扬水制流"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.445, 0.481, 0.517, 0.569, 0.605, 0.646, 0.704, 0.76, 0.817, 0.879, 0.941],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.687, 0.742, 0.798, 0.859, 0.919],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.53, 0.573, 0.616, 0.678, 0.721, 0.77, 0.838, 0.906, 0.973, 1.05, 1.12],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.583, 0.631, 0.678, 0.746, 0.793, 0.848, 0.922, 0.997, 1.07, 1.15, 1.23],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.708, 0.765, 0.823, 0.905, 0.963, 1.03, 1.12, 1.21, 1.3, 1.4, 1.5],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.03, 1.1, 1.18],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.722, 0.781, 0.84, 0.924, 0.983, 1.05, 1.14, 1.23, 1.33, 1.43, 1.53],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.01, 1.09, 1.17, 1.26, 1.35],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action(
      "喷发激流伤害",
      AttackType.Skill,
      ElementType.Hydro,
      {
        atk: [1.893, 2.035, 2.177, 2.366, 2.508, 2.65, 2.839, 3.028, 3.218, 3.407, 3.596, 3.786, 4.022],
      },
      "water"
    ),
    action("露滴伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
    }),
    action("50%生命以上·露滴伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
      hp: [0.0064, 0.0069, 0.0074, 0.008, 0.0085, 0.009, 0.0096, 0.0102, 0.0109, 0.0115, 0.0122, 0.0128, 0.0136],
    }),
    action("灵息之刺伤害", AttackType.Other, ElementType.Hydro, {
      atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [1.019, 1.095, 1.171, 1.273, 1.35, 1.426, 1.528, 1.63, 1.732, 1.834, 1.935, 2.037, 2.165],
    }),
  ];
  otherSkill = [
    action("4命·倾落的迸水护盾", AttackType.Shield, ElementType.None, {
      hp: [0.1],
    }),
  ];
  buffs = [
    ...A_80_ATK_24P,
    {
      label: "澄明的净水",
      describe:
        "长按施放水纹剑时如果通过充盈消耗了生命值，则在施放结束时的喷发激流造成的伤害提高，提高值为旅行者在此次施放期间通过充盈消耗的生命值总和的45%。通过这种方式，至多使伤害提高5000点。",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => Math.min(5000, (data.baseHP + data.extraHP + data.extraHP_NT) * 0.225),
          special: "water",
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![荧·水](https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png) */
export const PlayerGirl = new PlayerGirlData();
