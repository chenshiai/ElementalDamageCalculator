import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000115, "塔利雅")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, [12506, 189, 506], 60, [13371, 237, 598])
@Icons("UI_AvatarIcon_Dahlia")
export class DahliaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·祭仪", "圣浸的礼典", "纯耀的祷咏"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.43547, 0.470915, 0.50636, 0.556996, 0.592441, 0.63295, 0.68865, 0.744349, 0.800049, 0.860812, 0.921575,
        0.982338, 1.043102, 1.103865, 1.164628,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.401001, 0.43364, 0.46628, 0.512908, 0.545548, 0.58285, 0.634141, 0.685432, 0.736722, 0.792676, 0.84863,
        0.904583, 0.960537, 1.01649, 1.072444,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.237446, 0.256773, 0.2761, 0.30371, 0.323037, 0.345125, 0.375496, 0.405867, 0.436238, 0.46937, 0.502502,
        0.535634, 0.568766, 0.601898, 0.63503,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.290164, 0.313782, 0.3374, 0.37114, 0.394758, 0.42175, 0.458864, 0.495978, 0.533092, 0.57358, 0.614068,
        0.654556, 0.695044, 0.735532, 0.77602,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.656576, 0.710018, 0.76346, 0.839806, 0.893248, 0.954325, 1.038306, 1.122286, 1.206267, 1.297882, 1.389497,
        1.481112, 1.572728, 1.664343, 1.755958,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.398765, 0.431222, 0.46368, 0.510048, 0.542506, 0.5796, 0.630605, 0.68161, 0.732614, 0.788256, 0.843898,
        0.899539, 0.955181, 1.010822, 1.066464,
      ],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.550675, 0.595498, 0.64032, 0.704352, 0.749174, 0.8004, 0.870835, 0.94127, 1.011706, 1.088544, 1.165382,
        1.242221, 1.319059, 1.395898, 1.472736,
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
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        2.328, 2.5026, 2.6772, 2.91, 3.0846, 3.2592, 3.492, 3.7248, 3.9576, 4.1904, 4.4232, 4.656, 4.947, 5.238, 5.529,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [
        4.064, 4.3688, 4.6736, 5.08, 5.3848, 5.6896, 6.096, 6.5024, 6.9088, 7.3152, 7.7216, 8.128, 8.636, 9.144, 9.652,
      ],
    }),
    action("圣眷护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [
        0.0336, 0.03612, 0.03864, 0.042, 0.04452, 0.04704, 0.0504, 0.05376, 0.05712, 0.06048, 0.06384, 0.0672, 0.0714,
        0.0756, 0.0798,
      ],
      fixed: [
        323.5577, 355.91797, 390.97495, 428.72858, 469.17892, 512.3259, 558.1697, 606.7101, 657.94714, 711.8809,
        768.5114, 827.83856, 889.8624, 954.58295, 1022,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "2命·眷怜启应",
      describe:
        "塔利雅消耗元素爆发纯耀的祷咏中的「祝颂」效果唤出圣眷护盾后，处于圣眷护盾庇护下的角色，护盾强效提升25%。",
      effect: [{ type: BuffType.ShieldStrong, getValue: () => 25, actionOn: ActionOn.Direct }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![塔利雅](https://enka.network/ui/UI_AvatarIcon_Dahlia.png) */
export const Dahlia = new DahliaData();
