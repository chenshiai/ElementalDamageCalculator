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
@BaseData(Rarity.Five, 10899, 234, 676, 40)
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
        atk: [0.2112, 0.2256, 0.24, 0.2592, 0.2736, 0.2904, 0.312, 0.3336, 0.3552, 0.3768, 0.3984],
      },
      "Aloy"
    ),
    action(
      "一段伤害·2",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [0.2376, 0.2538, 0.27, 0.2916, 0.3078, 0.3267, 0.351, 0.3753, 0.3996, 0.4239, 0.4482],
      },
      "Aloy"
    ),
    action(
      "二段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [0.4312, 0.4606, 0.49, 0.5292, 0.5586, 0.5929, 0.637, 0.6811, 0.7252, 0.7693, 0.8134],
      },
      "Aloy"
    ),
    action(
      "三段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [0.528, 0.564, 0.6, 0.648, 0.684, 0.726, 0.78, 0.834, 0.888, 0.942, 0.996],
      },
      "Aloy"
    ),
    action(
      "四段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [0.6565, 0.7012, 0.746, 0.8057, 0.8504, 0.9027, 0.9698, 1.0369, 1.1041, 1.1712, 1.2384],
      },
      "Aloy"
    ),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.937],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("冰尘弹伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.776, 1.9092, 2.0424, 2.22, 2.3532, 2.4864, 2.664, 2.8416, 3.0192, 3.1968, 3.3744],
    }),
    action("冷冻炸弹伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [3.592, 3.8614, 4.1308, 4.49, 4.7594, 5.0288, 5.388, 5.7472, 6.1064, 6.4656, 6.8248],
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
