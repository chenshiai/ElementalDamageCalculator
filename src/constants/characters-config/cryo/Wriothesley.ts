import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000086, "莱欧斯利")
@Weapon(WeaponType.Magic)
@Element(ElementType.Cryo, SecondElementType.Start)
@BaseData(Rarity.Five, [13593, 311, 763], 60, [14559, 381, 817])
@Icons("UI_AvatarIcon_Wriothesley")
export class WriothesleyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迅烈倾霜拳", "冰牙突驰", "黑金狼噬"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.533596, 0.577028, 0.62046, 0.682506, 0.725938, 0.775575, 0.843826, 0.912076, 0.980327, 1.054782, 1.129237,
        1.203692, 1.278148, 1.352603, 1.427058,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.517987, 0.560148, 0.60231, 0.662541, 0.704703, 0.752888, 0.819142, 0.885396, 0.95165, 1.023927, 1.096204,
        1.168481, 1.240759, 1.313036, 1.385313,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.672228, 0.726944, 0.78166, 0.859826, 0.914542, 0.977075, 1.063058, 1.14904, 1.235023, 1.328822, 1.422621,
        1.51642, 1.61022, 1.704019, 1.797818,
      ],
    }),
    action(
      "三段伤害·星超导",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          0.672228, 0.726944, 0.78166, 0.859826, 0.914542, 0.977075, 1.063058, 1.14904, 1.235023, 1.328822, 1.422621,
          1.51642, 1.61022, 1.704019, 1.797818,
        ],
      },
      "laiou3"
    ),
    action("四段伤害·单次", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.379041, 0.409893, 0.440745, 0.48482, 0.515672, 0.550931, 0.599413, 0.647895, 0.696377, 0.749266, 0.802156,
        0.855045, 0.907935, 0.960824, 1.013713,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.90742, 0.98128, 1.05514, 1.160654, 1.234514, 1.318925, 1.43499, 1.551056, 1.667121, 1.793738, 1.920355,
        2.046972, 2.173588, 2.300205, 2.426822,
      ],
    }),
    action(
      "五段伤害·星超导",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          0.90742, 0.98128, 1.05514, 1.160654, 1.234514, 1.318925, 1.43499, 1.551056, 1.667121, 1.793738, 1.920355,
          2.046972, 2.173588, 2.300205, 2.426822,
        ],
      },
      "laiou5"
    ),
    action("重击伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [
        1.5296, 1.64432, 1.75904, 1.912, 2.02672, 2.14144, 2.2944, 2.44736, 2.60032, 2.75328, 2.90624, 3.0592, 3.2504,
        3.4416, 3.6328,
      ],
    }),
    action(
      "重击伤害·星超导",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          1.5296, 1.64432, 1.75904, 1.912, 2.02672, 2.14144, 2.2944, 2.44736, 2.60032, 2.75328, 2.90624, 3.0592, 3.2504,
          3.4416, 3.6328,
        ],
      },
      "laiouZ"
    ),
    action("6命·重击冰锥伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [
        1.5296, 1.64432, 1.75904, 1.912, 2.02672, 2.14144, 2.2944, 2.44736, 2.60032, 2.75328, 2.90624, 3.0592, 3.2504,
        3.4416, 3.6328,
      ],
    }),
    action(
      "6命·重击冰锥伤害·星超导",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          1.5296, 1.64432, 1.75904, 1.912, 2.02672, 2.14144, 2.2944, 2.44736, 2.60032, 2.75328, 2.90624, 3.0592, 3.2504,
          3.4416, 3.6328,
        ].map((v) => v * 0.2),
      },
      "laiou"
    ),
    action(
      "6命·五段伤害·冰锥",
      AttackType.Start,
      ElementType.StellarConductCryo,
      {
        atk: [
          0.90742, 0.98128, 1.05514, 1.160654, 1.234514, 1.318925, 1.43499, 1.551056, 1.667121, 1.793738, 1.920355,
          2.046972, 2.173588, 2.300205, 2.426822,
        ].map((v) => v * 0.2),
      },
      "laiou5"
    ),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.272, 1.3674, 1.4628, 1.59, 1.6854, 1.7808, 1.908, 2.0352, 2.1624, 2.2896, 2.4168, 2.544, 2.703, 2.862, 3.021,
      ],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Cryo, {
      atk: [
        0.424, 0.4558, 0.4876, 0.53, 0.5618, 0.5936, 0.636, 0.6784, 0.7208, 0.7632, 0.8056, 0.848, 0.901, 0.954, 1.007,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "元素战技·寒烈的惩裁",
      describe: "生命值高于50%时，强化「迅烈倾霜拳」的斥逐拳，使其造成的伤害提升",
      effect: [
        {
          type: BuffType.NormalRate,
          getValue: (data) => {
            return [
              43.1695, 45.7545, 48.3395, 51.7, 54.285, 56.87, 60.2305, 63.591, 66.9515, 70.312, 80.3935, 83.754,
              87.1145,
            ][data.skillLevel + data.skillLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "公理终有辩诉之日",
      describe:
        "莱欧斯利的生命值低于60%时，将获得「恩典之诫」，使下次迅烈倾霜拳的重击强化为惩戒·凌跃拳：不消耗体力，造成的伤害提升50%，解锁1命后提升200%",
      effect: [{ type: BuffType.StrongPrcent, getValue: (data) => (data.constellation >= 1 ? 200 : 50) }],
      enable: true,
    },
    {
      label: "罪业终有报偿之时",
      describe:
        "莱欧斯利的当前生命值提升或降低时，若莱欧斯利处于冰牙突驰的寒烈的惩裁状态下，寒烈的惩裁将获得一层「检偿之敕」效果，该效果至多叠加至5层，每层使莱欧斯利的攻击力提升6%",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 6 * s }],
      enable: true,
      stackable: true,
      stack: 5,
      limit: 5,
      stackText: "「检偿之敕」",
    },
    {
      label: "冤苦终有显明之期",
      describe:
        "辉映·星超导：被寒烈的惩裁强化的第三段、第五段斥逐拳将分别造成原本60%/80%的冰元素伤害，且天辉·凌跃拳将造成原本100%的冰元素范围伤害；莱欧斯利造成的星超导反应伤害提升30%。",
      effect: [
        { type: BuffType.StellarConductPrcent, getValue: () => 30 },
        {
          type: BuffType.StellarConductRate,
          getValue: (data) => {
            return [
              43.1695, 45.7545, 48.3395, 51.7, 54.285, 56.87, 60.2305, 63.591, 66.9515, 70.312, 80.3935, 83.754,
              87.1145,
            ].map((value) => {
              return (value + 100) * 0.6 - 100;
            })[data.skillLevel + data.skillLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
          special: "laiou3",
        },
        {
          type: BuffType.StellarConductRate,
          getValue: (data) => {
            return [
              43.1695, 45.7545, 48.3395, 51.7, 54.285, 56.87, 60.2305, 63.591, 66.9515, 70.312, 80.3935, 83.754,
              87.1145,
            ].map((value) => {
              return (value + 100) * 0.8 - 100;
            })[data.skillLevel + data.skillLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
          special: "laiou5",
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation < 2,
    },
    {
      label: "冤苦终有显明之期",
      describe:
        "辉映·星超导：被寒烈的惩裁强化的第三段、第五段斥逐拳将分别造成原本90%/120%的冰元素伤害，且天辉·凌跃拳将造成原本150%的冰元素范围伤害；莱欧斯利造成的星超导反应伤害提升30%。",
      effect: [
        { type: BuffType.StellarConductPrcent, getValue: () => 30 },
        {
          type: BuffType.StellarConductRate,
          getValue: (data) => {
            return [
              43.1695, 45.7545, 48.3395, 51.7, 54.285, 56.87, 60.2305, 63.591, 66.9515, 70.312, 80.3935, 83.754,
              87.1145,
            ].map((value) => {
              return (value + 100) * 0.9 - 100;
            })[data.skillLevel + data.skillLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
          special: "laiou3",
        },
        {
          type: BuffType.StellarConductRate,
          getValue: (data) => {
            return [
              43.1695, 45.7545, 48.3395, 51.7, 54.285, 56.87, 60.2305, 63.591, 66.9515, 70.312, 80.3935, 83.754,
              87.1145,
            ].map((value) => {
              return (value + 100) * 1.2 - 100;
            })[data.skillLevel + data.skillLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
          special: "laiou5",
        },
        {
          type: BuffType.StellarConductRate,
          getValue: () => 50,
          actionOn: ActionOn.Indirect,
          special: "laiouZ",
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "1命·予行恶者以惩惧",
      describe: "辉映·星超导：斥逐拳的第五段攻击造成的伤害提升50%；天辉·凌跃拳造成的伤害提升50%",
      effect: [
        { type: BuffType.StellarConductPrcent, getValue: () => 50, special: "laiou5" },
        { type: BuffType.StellarConductPrcent, getValue: () => 50, special: "laiouZ" },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·予骄暴者以镣锁",
      describe: "施放黑金狼噬时，固有天赋「罪业终有报偿之时」的每层「检偿之敕」效果都将使造成的伤害提升40%",
      effect: [{ type: BuffType.BurstPrcent, getValue: (_, s) => 40 * s }],
      enable: true,
      stackable: true,
      stack: 5,
      limit: 5,
      stackText: "「检偿之敕」",
      condition: ({ constellation }) => constellation >= 2,
    },
    {
      label: "2命·予骄暴者以镣锁·星超导",
      describe: "不处于辉映·星超导状态：普通攻击与重击分别造成原本125%/130%的伤害",
      effect: [
        { type: BuffType.StrongRate, getValue: (_, s) => 30 * (1 - s) },
        {
          type: BuffType.NormalRate,
          getValue: (data, s) => {
            return s < 1
              ? [
                  43.1695, 45.7545, 48.3395, 51.7, 54.285, 56.87, 60.2305, 63.591, 66.9515, 70.312, 80.3935, 83.754,
                  87.1145,
                ].map((val) => {
                  return (val + 100) * 1.25 - val - 100;
                })[data.skillLevel + data.skillLevelAdd - 1]
              : 0;
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      stackable: true,
      stack: 1,
      limit: 1,
      stackText: "辉映·星超导",
      stackType: "switch",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_A_3,
    Constellation_Q_5,
    {
      label: "6命·予无罪者以念抚",
      describe:
        "惩戒·凌跃拳的暴击率提升10%，暴击伤害提升80%。辉映·星超导：斥逐拳与天辉·凌跃拳的暴击率提升10%，暴击伤害提升80%，且被寒烈的惩裁强化的第五段斥逐拳与天辉·凌跃拳能够额外生成冰锥，造成原本20%的冰元素伤害",
      effect: [
        { type: BuffType.StrongCritcal, getValue: () => 10 },
        { type: BuffType.StrongCritcalHurt, getValue: () => 80 },
        { type: BuffType.NormalCritcal, getValue: (_, s) => 10 * s },
        { type: BuffType.NormalCritcalHurt, getValue: (_, s) => 80 * s },
        { type: BuffType.StellarConductCritcal, getValue: (_, s) => 10 * s, special: "laiou3" },
        { type: BuffType.StellarConductCritcal, getValue: (_, s) => 10 * s, special: "laiou5" },
        { type: BuffType.StellarConductCritcal, getValue: (_, s) => 10 * s, special: "laiouZ" },
        { type: BuffType.StellarConductCritcalHurt, getValue: (_, s) => 80 * s, special: "laiou3" },
        { type: BuffType.StellarConductCritcalHurt, getValue: (_, s) => 80 * s, special: "laiou5" },
        { type: BuffType.StellarConductCritcalHurt, getValue: (_, s) => 80 * s, special: "laiouZ" },
      ],
      enable: true,
      stackable: true,
      stack: 1,
      limit: 1,
      stackText: "辉映·星超导",
      stackType: "switch",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![莱欧斯利](https://enka.network/ui/UI_AvatarIcon_Wriothesley.png) */
export const Wriothesley = new WriothesleyData();
