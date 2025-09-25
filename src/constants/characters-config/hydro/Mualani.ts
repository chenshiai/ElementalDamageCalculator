import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000102, "玛拉妮")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, [15185, 182, 570], 60, [16264, 223, 611])
@Icons("UI_AvatarIcon_Mualani")
export class MualaniData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["降温处理", "踏鲨破浪", "爆瀑飞弹"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.51396, 0.552507, 0.591054, 0.64245, 0.680997, 0.719544, 0.77094, 0.822336, 0.873732, 0.925128, 0.976524,
        1.02792, 1.092165, 1.15641, 1.220655,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.446256, 0.479725, 0.513194, 0.55782, 0.591289, 0.624758, 0.669384, 0.71401, 0.758635, 0.803261, 0.847886,
        0.892512, 0.948294, 1.004076, 1.059858,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.700344, 0.75287, 0.805396, 0.87543, 0.927956, 0.980482, 1.050516, 1.12055, 1.190585, 1.260619, 1.330654,
        1.400688, 1.488231, 1.575774, 1.663317,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.4288, 1.53596, 1.64312, 1.786, 1.89316, 2.00032, 2.1432, 2.28608, 2.42896, 2.57184, 2.71472, 2.8576, 3.0362,
        3.2148, 3.3934,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("鲨鲨撕咬基础伤害", AttackType.Normal, ElementType.Hydro, {
      hp: [
        0.0868, 0.09331, 0.09982, 0.1085, 0.11501, 0.12152, 0.1302, 0.13888, 0.14756, 0.15624, 0.16492, 0.1736, 0.18445,
        0.1953, 0.20615,
      ],
    }),
    action(
      "巨浪鲨鲨撕咬伤害",
      AttackType.Normal,
      ElementType.Hydro,
      {
        hp: [
          0.434, 0.4667, 0.4991, 0.5427, 0.575, 0.6077, 0.651, 0.6953, 0.7379, 0.7811, 0.8247, 0.868, 0.9222, 0.9765,
          1.03075,
        ],
      },
      "Mualani"
    ),
  ];
  burstSkill = [
    action("爆瀑飞弹", AttackType.Burst, ElementType.Hydro, {
      hp: [0.584, 0.628, 0.672, 0.73, 0.774, 0.818, 0.877, 0.935, 0.993, 1.05, 1.11, 1.169, 1.242],
    }),
  ];
  otherSkill = [];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "1命·悠闲的「梅兹特利」",
      describe:
        "进入夜魂加持状态后的第一次巨浪鲨鲨撕咬及它所触发的鲨鲨飞弹造成的伤害提升，提升值相当于玛拉妮生命值上限的66%",
      effect: [
        {
          type: BuffType.NormalAdd,
          getValue: () => {
            return 0.66;
          },
          special: "Mualani",
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    {
      label: "4命·鲨鲨主食是豚豚。",
      describe: "爆瀑飞弹造成的伤害提升75%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 75 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·「流泉之众」的精神",
      describe: "1命效果没有次数限制",
      effect: [],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/**
 * ![玛拉妮](https://enka.network/ui/UI_AvatarIcon_Mualani.png)
 */
export const Mualani = new MualaniData();
