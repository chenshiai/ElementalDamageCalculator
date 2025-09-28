import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000006, "丽莎")
@Weapon(WeaponType.Magic)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, [9570, 232, 573], 80, [10232, 290, 613])
@Icons("UI_AvatarIcon_Lisa")
export class LisaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["指尖雷暴", "苍雷", "蔷薇的雷光"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.396, 0.4257, 0.4554, 0.495, 0.5247, 0.5544, 0.594, 0.6336, 0.6732, 0.7128, 0.753984, 0.80784, 0.861696,
        0.915552, 0.969408,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.3592, 0.38614, 0.41308, 0.449, 0.47594, 0.50288, 0.5388, 0.57472, 0.61064, 0.64656, 0.683917, 0.732768,
        0.781619, 0.83047, 0.879322,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.428, 0.4601, 0.4922, 0.535, 0.5671, 0.5992, 0.642, 0.6848, 0.7276, 0.7704, 0.814912, 0.87312, 0.931328,
        0.989536, 1.047744,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [
        0.5496, 0.59082, 0.63204, 0.687, 0.72822, 0.76944, 0.8244, 0.87936, 0.93432, 0.98928, 1.046438, 1.121184,
        1.19593, 1.270675, 1.345421,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [
        1.7712, 1.90404, 2.03688, 2.214, 2.34684, 2.47968, 2.6568, 2.83392, 3.01104, 3.18816, 3.372365, 3.613248,
        3.854131, 4.095014, 4.335898,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9],
    }),
    action("无引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [3.2, 3.44, 3.68, 4, 4.24, 4.48, 4.8, 5.12, 5.44, 5.76, 6.08, 6.4, 6.8, 7.2, 7.6],
    }),
    action("一层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [3.68, 3.956, 4.232, 4.6, 4.876, 5.152, 5.52, 5.888, 6.256, 6.624, 6.992, 7.36, 7.82, 8.28, 8.74],
    }),
    action("二层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [4.24, 4.558, 4.876, 5.3, 5.618, 5.936, 6.36, 6.784, 7.208, 7.632, 8.056, 8.48, 9.01, 9.54, 10.07],
    }),
    action("三层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        4.872, 5.2374, 5.6028, 6.09, 6.4554, 6.8208, 7.308, 7.7952, 8.2824, 8.7696, 9.2568, 9.744, 10.353, 10.962,
        11.571,
      ],
    }),
  ];
  burstSkill = [
    action("雷光放电伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.3656, 0.39302, 0.42044, 0.457, 0.48442, 0.51184, 0.5484, 0.58496, 0.62152, 0.65808, 0.69464, 0.7312, 0.7769,
        0.8226, 0.8683,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "静电立场",
      describe: "敌人受到蔷薇的雷光攻击后，降低15%防御力",
      effect: [{ type: BuffType.ReduceArmour, getValue: () => 15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![丽莎](https://enka.network/ui/UI_AvatarIcon_Lisa.png) */
export const Lisa = new LisaData();
