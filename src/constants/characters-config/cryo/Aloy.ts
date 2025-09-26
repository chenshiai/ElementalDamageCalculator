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
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "@/utils/decorator";
import { S_80_CRYO_28P } from "../buffs";

@EnKaId(10000062, "埃洛伊")
@Weapon(WeaponType.Bow)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [10899, 234, 676], 40, [11673, 287, 724])
@Icons("UI_AvatarIcon_Aloy")
export class AloyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["快速射击", "冰尘雪野", "曙光预言"];
  normalAttack = [
    action(
      "一段伤害·1",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.2112, 0.2256, 0.24, 0.2592, 0.2736, 0.2904, 0.312, 0.3336, 0.3552, 0.3768, 0.3984, 0.42, 0.4416, 0.4632,
          0.4848,
        ],
      },
      "Aloy"
    ),
    action(
      "一段伤害·2",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.2376, 0.2538, 0.27, 0.2916, 0.3078, 0.3267, 0.351, 0.3753, 0.3996, 0.4239, 0.4482, 0.4725, 0.4968, 0.5211,
          0.5454,
        ],
      },
      "Aloy"
    ),
    action(
      "二段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.4312, 0.4606, 0.49, 0.5292, 0.5586, 0.5929, 0.637, 0.6811, 0.7252, 0.7693, 0.8134, 0.8575, 0.9016, 0.9457,
          0.9898,
        ],
      },
      "Aloy"
    ),
    action(
      "三段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [0.528, 0.564, 0.6, 0.648, 0.684, 0.726, 0.78, 0.834, 0.888, 0.942, 0.996, 1.05, 1.104, 1.158, 1.212],
      },
      "Aloy"
    ),
    action(
      "四段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.65648, 0.70124, 0.746, 0.80568, 0.85044, 0.90266, 0.9698, 1.03694, 1.10408, 1.17122, 1.23836, 1.3055,
          1.37264, 1.43978, 1.50692,
        ],
      },
      "Aloy"
    ),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("冰尘弹伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.776, 1.9092, 2.0424, 2.22, 2.3532, 2.4864, 2.664, 2.8416, 3.0192, 3.1968, 3.3744, 3.552, 3.774, 3.996, 4.218,
      ],
    }),
    action("冷冻炸弹伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9, 0.95],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        3.592, 3.8614, 4.1308, 4.49, 4.7594, 5.0288, 5.388, 5.7472, 6.1064, 6.4656, 6.8248, 7.184, 7.633, 8.082, 8.531,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRYO_28P,
    {
      label: "冰尘雪野",
      describe:
        "依据线圈层数，提高埃洛伊的普通攻击造成的伤害；拥有4层线圈时，埃洛伊清除所有的线圈效果，并获得「冰驰」，进一步提高普通攻击造成的伤害，并将普通攻击造成的伤害转为冰元素伤害",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data, s) => {
            let a = [
              [5.85, 11.69, 17.54, 29.23],
              [5.2, 12.39, 18.58, 30.98],
              [6.54, 13.09, 19.64, 32.73],
              [7, 14, 21, 35],
              [7.35, 14.7, 22.05, 36.75],
              [7.7, 15.4, 23.1, 38.5],
              [8.16, 16.31, 24.47, 40.78],
              [8.61, 17.22, 25.83, 43.05],
              [9.07, 18.13, 27.2, 45.33],
              [9.52, 19.04, 28.56, 47.6],
              [9.98, 19.95, 29.93, 49.88],
              [10.43, 20.86, 31.29, 52.15],
              [10.885, 21.77, 32.655, 54.425],
              [11.34, 22.68, 34.02, 56.7],
              [11.795, 23.59, 35.385, 58.975],
            ][data.skillLevel + data.skillLevelAdd - 1][s - 1];
            return a;
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.Transform,
          getValue: (_, s) => {
            return s >= 4 ? EnchantingType[ElementType.Cryo] : 0;
          },
          special: "Aloy",
        },
      ],
      enable: false,
      stackable: true,
      stack: 0,
      limit: 4,
      stackText: "线圈",
    },
    {
      label: "战斗覆盖",
      describe: "埃洛伊获得冰尘雪野的线圈效果时，埃洛伊的攻击力提升16%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 16 }],
      enable: false,
    },
    {
      label: "战斗覆盖",
      describe: "埃洛伊获得冰尘雪野的线圈效果时，队伍中附近的其他角色的攻击力提升8%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 8 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
  ];
}

/** ![埃洛伊](https://enka.network/ui/UI_AvatarIcon_Aloy.png) */
const Aloy = new AloyData();
Aloy.icons = {
  ...Aloy.icons,
  constsIcon: [
    "UI_Talent_S_Aloy_Lock",
    "UI_Talent_S_Aloy_Lock",
    "UI_Talent_S_Aloy_Lock",
    "UI_Talent_S_Aloy_Lock",
    "UI_Talent_S_Aloy_Lock",
    "UI_Talent_S_Aloy_Lock",
  ].map((str) => getEnkaUI(str, false, false, true)),
};
export { Aloy };
