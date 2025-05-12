import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000045, "罗莎莉亚")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, 12289, 240, 710, 60)
@Icons("UI_AvatarIcon_Rosaria")
class RosariaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·教会枪术", "噬罪的告解", "终命的圣礼"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.525, 0.567, 0.61, 0.671, 0.714, 0.763, 0.83, 0.897, 0.964, 1.037, 1.11],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.516, 0.558, 0.6, 0.66, 0.702, 0.75, 0.816, 0.882, 0.948, 1.02, 1.092],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.318, 0.344, 0.37, 0.407, 0.433, 0.463, 0.503, 0.544, 0.585, 0.629, 0.673],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.318, 0.344, 0.37, 0.407, 0.433, 0.463, 0.503, 0.544, 0.585, 0.629, 0.673],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.697, 0.753, 0.81, 0.891, 0.948, 1.013, 1.102, 1.191, 1.28, 1.377, 1.474],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.416, 0.45, 0.484, 0.532, 0.566, 0.605, 0.658, 0.711, 0.765, 0.823, 0.881],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.37, 1.48, 1.59, 1.75, 1.86, 1.99, 2.16, 2.34, 2.51, 2.7, 2.89],
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
    action("技能伤害·1", AttackType.Skill, ElementType.Cryo, {
      atk: [0.58, 0.63, 0.67, 0.73, 0.77, 0.82, 0.88, 0.93, 0.99, 1.05, 1.11, 1.17, 1.24],
    }),
    action("技能伤害·2", AttackType.Skill, ElementType.Cryo, {
      atk: [1.36, 1.46, 1.56, 1.7, 1.8, 1.9, 2.04, 2.18, 2.31, 2.45, 2.58, 2.72, 2.89],
    }),
  ];
  burstSkill = [
    action("技能伤害·1", AttackType.Burst, ElementType.Cryo, {
      atk: [1.04, 1.18, 1.2, 1.3, 1.38, 1.46, 1.56, 1.66, 1.77, 1.87, 1.98, 2.08, 2.21, 2.34],
    }),
    action("技能伤害·2", AttackType.Burst, ElementType.Cryo, {
      atk: [1.52, 1.634, 1.75, 1.9, 2.01, 2.13, 2.28, 2.43, 2.58, 2.74, 2.89, 3.04, 3.23, 3.42],
    }),
    action("冰枪持续伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81, 2.97],
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
