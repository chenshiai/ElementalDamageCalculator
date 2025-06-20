import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "../decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3, ExtraBuff } from "../buffs";

@EnKaId(1000000707, "荧·雷")
@Weapon(WeaponType.Sword)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, 10875, 213, 683, 60)
@Icons("UI_AvatarIcon_PlayerGirl", "PlayerElectric")
class PlayerGirlData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦惊雷", "雷影剑", "雷轰电转"];

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
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.79, 0.85, 0.9, 0.98, 1.04, 1.1, 1.18, 1.26, 1.34, 1.42, 1.49, 1.57, 1.67, 1.77],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.144, 1.23, 1.316, 1.43, 1.516, 1.602, 1.716, 1.83, 1.945, 2.059, 2.174, 2.288, 2.431, 2.574],
    }),
    action("威光落雷伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697, 0.738],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    ...ExtraBuff,
    {
      label: "雷影剑·丰穰勾玉",
      describe: "元素充能效率提升20%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "回响的轰雷",
      describe: "基于旅行者自己元素充能效率的10%，提升雷影剑的丰穰勾玉提供的元素充能效率",
      effect: [
        {
          type: BuffType.ChargeFixed,
          getValue: (data) => data.chargeEfficiency * 0.1,
          transform: true,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·震怒的苍雷",
      describe: "雷轰电转的威光落雷命中敌人后，会使敌人的雷元素抗性降低15%",
      effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![荧·雷](https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png) */
export const PlayerGirl = new PlayerGirlData();
