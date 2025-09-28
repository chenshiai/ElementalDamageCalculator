import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3, ExtraBuff } from "../buffs";

@EnKaId(1000000507, "空·雷")
@Weapon(WeaponType.Sword)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, [10875, 213, 683], 60, [11627, 266, 730])
@Icons("UI_AvatarIcon_PlayerBoy", "PlayerElectric")
export class PlayerBoyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦惊雷", "雷影剑", "雷轰电转"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44462, 0.48081, 0.517, 0.5687, 0.60489, 0.64625, 0.70312, 0.76, 0.81686, 0.8789, 0.94094, 1.00298, 1.06502,
        1.12706, 1.1891,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4343, 0.46965, 0.505, 0.5555, 0.59085, 0.63125, 0.6868, 0.74235, 0.7979, 0.8585, 0.9191, 0.9797, 1.0403,
        1.1009, 1.1615,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.52976, 0.57288, 0.616, 0.6776, 0.72072, 0.77, 0.83776, 0.90552, 0.97328, 1.0472, 1.12112, 1.19504, 1.26896,
        1.34288, 1.4168,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.58308, 0.63054, 0.678, 0.7458, 0.79326, 0.8475, 0.92208, 0.99666, 1.07124, 1.1526, 1.23396, 1.31532, 1.39668,
        1.47804, 1.5594,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.70778, 0.76539, 0.823, 0.9053, 0.96291, 1.02875, 1.11928, 1.20981, 1.30034, 1.3991, 1.49786, 1.59662, 1.69538,
        1.79414, 1.8929,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.6045, 0.65, 0.715, 0.7605, 0.8125, 0.884, 0.9555, 1.027, 1.105, 1.183, 1.261, 1.339, 1.417, 1.495],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.60716, 0.65658, 0.706, 0.7766, 0.82602, 0.8825, 0.96016, 1.03782, 1.11548, 1.2002, 1.28492, 1.36964, 1.45436,
        1.53908, 1.6238,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        0.78664, 0.845638, 0.904636, 0.9833, 1.042298, 1.101296, 1.17996, 1.258624, 1.337288, 1.415952, 1.494616,
        1.57328, 1.67161, 1.76994, 1.86827,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        1.144, 1.2298, 1.3156, 1.43, 1.5158, 1.6016, 1.716, 1.8304, 1.9448, 2.0592, 2.1736, 2.288, 2.431, 2.574, 2.717,
      ],
    }),
    action("威光落雷伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.328, 0.3526, 0.3772, 0.41, 0.4346, 0.4592, 0.492, 0.5248, 0.5576, 0.5904, 0.6232, 0.656, 0.697, 0.738, 0.779,
      ],
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

/** ![空·雷](https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png) */
export const PlayerBoy = new PlayerBoyData();
