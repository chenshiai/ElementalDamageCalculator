import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000080, "米卡")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, [12506, 223, 713], 70, [13371, 279, 763])
@Icons("UI_AvatarIcon_Mika")
export class MikaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风枪术·镝传", "星霜的流旋", "苍翎的颂愿"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.432632, 0.467846, 0.50306, 0.553366, 0.58858, 0.628825, 0.684162, 0.739498, 0.794835, 0.855202, 0.915569,
        0.975936, 1.036304, 1.096671, 1.157038,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.415019, 0.448799, 0.48258, 0.530838, 0.564619, 0.603225, 0.656309, 0.709393, 0.762476, 0.820386, 0.878296,
        0.936205, 0.994115, 1.052024, 1.109934,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.545034, 0.589397, 0.63376, 0.697136, 0.741499, 0.7922, 0.861914, 0.931627, 1.001341, 1.077392, 1.153443,
        1.229494, 1.305546, 1.381597, 1.457648,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.276146, 0.298623, 0.3211, 0.35321, 0.375687, 0.401375, 0.436696, 0.472017, 0.507338, 0.54587, 0.584402,
        0.622934, 0.661466, 0.7, 0.73853,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.708743, 0.766432, 0.82412, 0.906532, 0.96422, 1.03015, 1.120803, 1.211456, 1.30211, 1.401004, 1.499898,
        1.598793, 1.697687, 1.796582, 1.895476,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.12746, 1.21923, 1.311, 1.4421, 1.53387, 1.63875, 1.78296, 1.92717, 2.07138, 2.2287, 2.38602, 2.54334, 2.70066,
        2.85798, 3.0153,
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
    action("霜流矢伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.672, 0.7224, 0.7728, 0.84, 0.8904, 0.9408, 1.008, 1.0752, 1.1424, 1.2096, 1.2768, 1.344, 1.428, 1.512, 1.596,
      ],
    }),
    action("冰星信标伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.84, 0.903, 0.966, 1.05, 1.113, 1.176, 1.26, 1.344, 1.428, 1.512, 1.596, 1.68, 1.785, 1.89, 1.995],
    }),
    action("冰星破片伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.252, 0.2709, 0.2898, 0.315, 0.3339, 0.3528, 0.378, 0.4032, 0.4284, 0.4536, 0.4788, 0.504, 0.5355, 0.567,
        0.5985,
      ],
    }),
  ];
  burstSkill = [
    action("施放回复量", AttackType.Heal, ElementType.None, {
      hp: [
        0.12168, 0.130806, 0.139932, 0.1521, 0.161226, 0.170352, 0.18252, 0.194688, 0.206856, 0.219024, 0.231192,
        0.24336, 0.25857, 0.27378, 0.28899,
      ],
      fixed: [
        1172.0355, 1289.2554, 1416.2435, 1553, 1699.5248, 1855.8179, 2021.8794, 2197.7092, 2383.3071, 2578.6736,
        2783.8083, 2998.7114, 3223.3828, 3457.8225, 3702.0305,
      ],
    }),
    action("鹰翎回复量", AttackType.Heal, ElementType.None, {
      hp: [
        0.02432, 0.026144, 0.027968, 0.0304, 0.032224, 0.034048, 0.03648, 0.038912, 0.041344, 0.043776, 0.046208,
        0.04864, 0.05168, 0.05472, 0.05776,
      ],
      fixed: [
        233.95428, 257.35297, 282.70154, 310, 339.24835, 370.4466, 403.59473, 438.69275, 475.74066, 514.73846,
        555.68616, 598.58374, 643.4312, 690.2286, 738.9758,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "速射牵制",
      describe:
        "星霜的流旋的灵风状态将获得侦明效果强化，使角色处于场上时，造成的物理伤害提升10%(普通情况最高3层，开启元素爆发后最高4层，解锁6命后最高5层)",
      effect: [{ type: BuffType.PhysicalPrcent, getValue: (_, s) => s * 10 }],
      stack: 0,
      limit: 5,
      stackText: "侦明",
      stackable: true,
      shareable: true,
      target: BuffTarget.All,
      enable: true,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·依随的策援",
      describe: "处于灵风状态下的当前场上角色，其物理伤害的暴击伤害提高60%",
      effect: [{ type: BuffType.PhysicalCritcalHurt, getValue: () => 60 }],
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
      target: BuffTarget.All,
      enable: false,
    },
  ];
}

/** ![米卡](https://enka.network/ui/UI_AvatarIcon_Mika.png) */
export const Mika = new MikaData();
