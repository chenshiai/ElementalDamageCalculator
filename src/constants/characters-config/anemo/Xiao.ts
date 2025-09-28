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
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000026, "魈")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [12736, 349, 799], 70, [13641, 429, 856])
@Icons("UI_AvatarIcon_Xiao")
export class XiaoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["卷积微尘", "风轮两立", "靖妖傩舞"];
  normalAttack = [
    action("一段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.27544, 0.29422, 0.313, 0.33804, 0.35682, 0.37873, 0.4069, 0.43507, 0.46324, 0.49141, 0.51958, 0.54775,
        0.57592, 0.60409, 0.63226,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.56936, 0.60818, 0.647, 0.69876, 0.73758, 0.78287, 0.8411, 0.89933, 0.95756, 1.01579, 1.07402, 1.13225,
        1.19048, 1.24871, 1.30694,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.68552, 0.73226, 0.779, 0.84132, 0.88806, 0.94259, 1.0127, 1.08281, 1.15292, 1.22303, 1.29314, 1.36325,
        1.43336, 1.50347, 1.57358,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.37664, 0.40232, 0.428, 0.46224, 0.48792, 0.51788, 0.5564, 0.59492, 0.63344, 0.67196, 0.71048, 0.749, 0.78752,
        0.82604, 0.86456,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.71544, 0.76422, 0.813, 0.87804, 0.92682, 0.98373, 1.0569, 1.13007, 1.20324, 1.27641, 1.34958, 1.42275,
        1.49592, 1.56909, 1.64226,
      ],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.95832, 1.02366, 1.089, 1.17612, 1.24146, 1.31769, 1.4157, 1.51371, 1.61172, 1.70973, 1.80774, 1.90575,
        2.00376, 2.10177, 2.19978,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.21088, 1.29344, 1.376, 1.48608, 1.56864, 1.66496, 1.7888, 1.91264, 2.03648, 2.16032, 2.28416, 2.408, 2.53184,
        2.65568, 2.77952,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.818335, 0.884943, 0.951552, 1.046707, 1.113316, 1.18944, 1.294111, 1.398781, 1.503452, 1.617638, 1.731825,
        1.846011, 1.960197, 2.074383, 2.18857,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.636323, 1.769512, 1.902701, 2.092971, 2.22616, 2.378376, 2.587673, 2.79697, 3.006267, 3.234591, 3.462915,
        3.69124, 3.919564, 4.147888, 4.376212,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        2.043855, 2.210216, 2.376576, 2.614234, 2.780594, 2.97072, 3.232143, 3.493567, 3.75499, 4.040179, 4.325368,
        4.610557, 4.895747, 5.180936, 5.466125,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.528, 2.7176, 2.9072, 3.16, 3.3496, 3.5392, 3.792, 4.0448, 4.2976, 4.5504, 4.8032, 5.056, 5.372, 5.688, 6.004,
      ],
    }),
  ];
  burstSkill = [];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素爆发·靖妖傩舞",
      describe: "将攻击伤害转为风元素伤害；普通攻击/重击/下落攻击伤害提升",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => {
            return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4, 117.95][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
        },
        {
          type: BuffType.StrongPrcent,
          getValue: (data) => {
            return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4, 117.95][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
        },
        {
          type: BuffType.FallingPrcent,
          getValue: (data) => {
            return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4, 117.95][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
        },
        {
          type: BuffType.Transform,
          getValue: () => EnchantingType[ElementType.Anemo],
        },
      ],
      enable: true,
    },
    {
      label: "2命·空劫·虚空华开敷变",
      describe: "处在队伍后台时，魈自己的元素充能效率提高25%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 25 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·神通·诸苦灭尽",
      describe: "魈的生命值低于50%时，获得100%的防御力提升",
      effect: [{ type: BuffType.DEFPrcent, getValue: () => 100 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![魈](https://enka.network/ui/UI_AvatarIcon_Xiao.png) */
export const Xiao = new XiaoData();
