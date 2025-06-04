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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000026, "魈")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 12736, 349, 799, 70)
@Icons("UI_AvatarIcon_Xiao")
class XiaoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["卷积微尘", "风轮两立", "靖妖傩舞"];
  normalAttack = [
    action("一段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.275, 0.294, 0.313, 0.338, 0.357, 0.379, 0.407, 0.435, 0.463, 0.491, 0.52],
    }),
    action("一段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.275, 0.294, 0.313, 0.338, 0.357, 0.379, 0.407, 0.435, 0.463, 0.491, 0.52],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.569, 0.608, 0.647, 0.699, 0.738, 0.783, 0.841, 0.899, 0.958, 1.016, 1.074],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.6855, 0.7323, 0.779, 0.8413, 0.8881, 0.9426, 1.0127, 1.0828, 1.1539, 1.223, 1.2931],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.377, 0.402, 0.428, 0.462, 0.488, 0.518, 0.556, 0.595, 0.633, 0.672, 0.71],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.377, 0.402, 0.428, 0.462, 0.488, 0.518, 0.556, 0.595, 0.633, 0.672, 0.71],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.715, 0.764, 0.813, 0.878, 0.927, 0.984, 1.057, 1.13, 1.203, 1.276, 1.35],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.958, 1.024, 1.089, 1.176, 1.241, 1.318, 1.416, 1.514, 1.612, 1.71, 1.808],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.21, 1.29, 1.38, 1.49, 1.57, 1.66, 1.79, 1.91, 2.04, 2.16, 2.28],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.8183, 0.8849, 0.9516, 1.0467, 1.1133, 1.1894, 1.2941, 1.3988, 1.5035, 1.6276, 1.7318],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.636, 1.77, 1.903, 2.093, 2.226, 2.378, 2.588, 2.799, 3.006, 3.235, 3.463],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [2.044, 2.21, 2.377, 2.614, 2.781, 2.971, 3.232, 3.494, 3.755, 4.04, 4.325],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.528, 2.7176, 2.9072, 3.16, 3.3496, 3.5392, 3.792, 4.0448, 4.2976, 4.5504, 4.8032, 5.056, 5.372],
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
            return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
        },
        {
          type: BuffType.StrongPrcent,
          getValue: (data) => {
            return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
        },
        {
          type: BuffType.FallingPrcent,
          getValue: (data) => {
            return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
        },
        {
          type: BuffType.Transform,
          getValue: () => EnchantingType[ElementType.Anemo],
        },
      ],
      enable: false,
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
