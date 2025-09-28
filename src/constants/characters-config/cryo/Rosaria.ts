import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000045, "罗莎莉亚")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, [12289, 240, 710], 60, [13139, 301, 759])
@Icons("UI_AvatarIcon_Rosaria")
export class RosariaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["教会枪术", "噬罪的告解", "终命的圣礼"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5246, 0.5673, 0.61, 0.671, 0.7137, 0.7625, 0.8296, 0.8967, 0.9638, 1.037, 1.1102, 1.1834, 1.2566, 1.3298,
        1.403,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.516, 0.558, 0.6, 0.66, 0.702, 0.75, 0.816, 0.882, 0.948, 1.02, 1.092, 1.164, 1.236, 1.308, 1.38],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3182, 0.3441, 0.37, 0.407, 0.4329, 0.4625, 0.5032, 0.5439, 0.5846, 0.629, 0.6734, 0.7178, 0.7622, 0.8066,
        0.851,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.6966, 0.7533, 0.81, 0.891, 0.9477, 1.0125, 1.1016, 1.1907, 1.2798, 1.377, 1.4742, 1.5714, 1.6686, 1.7658,
        1.863,
      ],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.41624, 0.45012, 0.484, 0.5324, 0.56628, 0.605, 0.65824, 0.71148, 0.76472, 0.8228, 0.88088, 0.93896, 0.99704,
        1.05512, 1.1132,
      ],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91, 0.97, 1.03, 1.09, 1.15],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.3674, 1.4787, 1.59, 1.749, 1.8603, 1.9875, 2.1624, 2.3373, 2.5122, 2.703, 2.8938, 3.0846, 3.2754, 3.4662,
        3.657,
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
    action("技能伤害·1", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.584, 0.6278, 0.6716, 0.73, 0.7738, 0.8176, 0.876, 0.9344, 0.9928, 1.0512, 1.1096, 1.168, 1.241, 1.314, 1.387,
      ],
    }),
    action("技能伤害·2", AttackType.Skill, ElementType.Cryo, {
      atk: [1.36, 1.462, 1.564, 1.7, 1.802, 1.904, 2.04, 2.176, 2.312, 2.448, 2.584, 2.72, 2.89, 3.06, 3.23],
    }),
  ];
  burstSkill = [
    action("技能伤害·1", AttackType.Burst, ElementType.Cryo, {
      atk: [1.04, 1.118, 1.196, 1.3, 1.378, 1.456, 1.56, 1.664, 1.768, 1.872, 1.976, 2.08, 2.21, 2.34, 2.47],
    }),
    action("技能伤害·2", AttackType.Burst, ElementType.Cryo, {
      atk: [1.52, 1.634, 1.748, 1.9, 2.014, 2.128, 2.28, 2.432, 2.584, 2.736, 2.888, 3.04, 3.23, 3.42, 3.61],
    }),
    action("冰枪持续伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.32, 1.419, 1.518, 1.65, 1.749, 1.848, 1.98, 2.112, 2.244, 2.376, 2.508, 2.64, 2.805, 2.97, 3.135],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "聆听忏悔的幽影",
      describe: "噬罪的告解从技能目标的背后攻击时，罗莎莉亚的暴击率提升12%",
      effect: [{ type: BuffType.Critcal, getValue: () => 12 }],
      enable: true,
    },
    {
      label: "暗中支援的黯色",
      describe:
        "施放终命的圣礼时，基于自身暴击率的15%，提高附近的队伍中所有角色（不包括罗莎莉亚自己）的暴击率，持续10秒。通过这种方式获得的暴击率提升，无法超过15%",
      effect: [
        {
          type: BuffType.Critcal,
          getValue: (data) => Math.min(15, data.critcal * 0.15),
          actionOn: ActionOn.Indirect,
        },
      ],
      target: BuffTarget.Other,
      enable: false,
      shareable: true,
    },
    {
      label: "1命·罪之导引",
      describe: "罗莎莉亚的攻击造成暴击后，普通攻击造成的伤害提升10%",
      effect: [{ type: BuffType.NormalPrcent, getValue: () => 10 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    Constellation_Q_5,

    {
      label: "6命·代行裁判",
      describe: "终命的圣礼的攻击会使敌人的物理抗性降低20%",
      effect: [{ type: BuffType.EnemyPhysicalResistance, getValue: () => -20 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.Enemy,
    },
  ];
}

/** ![罗莎莉亚](https://enka.network/ui/UI_AvatarIcon_Rosaria.png) */
export const Rosaria = new RosariaData();
