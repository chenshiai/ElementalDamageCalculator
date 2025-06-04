import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_A_5, Constellation_Q_3, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000111, "瓦雷莎")
@Weapon(WeaponType.Magic)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, 12699, 356, 782, 70)
@Icons("UI_AvatarIcon_Varesa")
class VaresaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["角力搏摔", "夜虹逐跃", "闪烈降临！"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.468, 0.503, 0.538, 0.585, 0.62, 0.655, 0.702, 0.748, 0.795, 0.842, 0.889, 0.936, 0.994, 1.052],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.721, 0.76, 0.801, 0.851, 0.901],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.563, 0.605, 0.648, 0.704, 0.746, 0.788, 0.845, 0.901, 0.957, 1.014, 1.07, 1.126, 1.197, 1.267],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [0.893, 0.96, 1.027, 1.116, 1.183, 1.25, 1.339, 1.428, 1.518, 1.607, 1.696, 1.786, 1.897, 2.009],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.578, 1.683, 1.787, 1.891],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16, 3.36, 3.57, 3.78],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94, 4.2, 4.46, 4.72],
    }),
    action("炽热激情状态一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.544, 0.585, 0.626, 0.68, 0.721, 0.762, 0.816, 0.871, 0.925, 0.979, 1.034, 1.088, 1.156, 1.224],
    }),
    action("炽热激情状态二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.52, 0.559, 0.598, 0.65, 0.689, 0.728, 0.78, 0.832, 0.884, 0.937, 0.985, 1.041, 1.106, 1.171],
    }),
    action("炽热激情状态三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.736, 0.791, 0.846, 0.92, 0.975, 1.03, 1.104, 1.177, 1.251, 1.325, 1.398, 1.472, 1.564, 1.656],
    }),
    action("炽热激情状态重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [0.926, 0.996, 1.065, 1.158, 1.227, 1.297, 1.39, 1.482, 1.575, 1.668, 1.76, 1.853, 1.969, 2.084],
    }),
    action("炽热激情状态下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.578, 1.683, 1.787, 1.891],
    }),
    action("炽热激情状态低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [2.24, 2.42, 2.6, 2.86, 3.04, 3.25, 3.54, 3.82, 4.11, 4.42, 4.73, 5.05, 5.36, 5.67],
    }),
    action("炽热激情状态高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [2.79, 3.02, 3.25, 3.57, 3.8, 4.06, 4.42, 4.78, 5.13, 5.52, 5.91, 6.3, 6.69, 7.08],
    }),
  ];
  elementSkill = [
    action("突进伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.745, 0.801, 0.857, 0.931, 0.987, 1.043, 1.117, 1.192, 1.266, 1.341, 1.415],
    }),
    action("炽热激情状态突进伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.064, 1.144, 1.224, 1.33, 1.41, 1.49, 1.596, 1.702, 1.809, 1.915, 2.022],
    }),
  ];
  burstSkill = [
    action("飞踢伤害", AttackType.Burst, ElementType.Electro, {
      atk: [3.454, 3.71, 3.969, 4.314, 4.573, 4.832, 5.177, 5.522, 5.867, 6.212, 6.557, 6.902, 7.334],
    }),
    action("炽热激情状态飞踢伤害", AttackType.Burst, ElementType.Electro, {
      atk: [5.752, 6.183, 6.615, 7.19, 7.621, 8.053, 8.628, 9.203, 9.778, 10.354, 10.929, 11.504, 12.223],
    }),
    action("「大火山崩落」伤害", AttackType.Falling, ElementType.Electro, {
      atk: [4.026, 4.328, 4.63, 5.033, 5.335, 5.637, 6.04, 6.442, 6.845, 7.248, 7.65, 8.053, 8.556],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "连势，三重腾跃！",
      describe:
        "施放元素战技夜虹逐跃后，瓦雷莎获得「虹色坠击」，瓦雷莎进行下落攻击时，坠地冲击能额外造成50%攻击力的伤害；若瓦雷莎处于炽热激情状态，则坠地冲击改为能额外造成180%攻击力的伤害。",
      effect: [
        {
          type: BuffType.FallingFixed,
          getValue: (d, s) => {
            return (d.baseATK + d.extraATK + d.extraATK_NT) * (s === 1 ? 1.8 : 0.5);
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stack: 1,
      limit: 1,
      stackType: "switch",
      stackable: true,
      stackText: "炽热激情状态",
    },
    {
      label: "英雄，二度归来！",
      describe:
        "队伍中的附近的角色触发「夜魂迸发」时，瓦雷莎的攻击力提升35%，持续12秒。该效果至多叠加两层，每层独立计算持续时间。",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * 35 }],
      enable: false,
      stack: 2,
      limit: 2,
      stackable: true,
    },
    Constellation_Q_3,
    Constellation_A_5,
    {
      label: "6命·正义英雄的凯旋",
      describe: "瓦雷莎的下落攻击与元素爆发闪烈降临！的暴击率提升10%，暴击伤害提升100%。",
      effect: [
        { type: BuffType.FallingCritcal, getValue: () => 10 },
        { type: BuffType.FallingCritcalHurt, getValue: () => 100 },
        { type: BuffType.BurstCritcal, getValue: () => 10 },
        { type: BuffType.BurstCritcalHurt, getValue: () => 100 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![瓦雷莎](https://enka.network/ui/UI_AvatarIcon_Varesa.png) */
export const Varesa = new VaresaData();
