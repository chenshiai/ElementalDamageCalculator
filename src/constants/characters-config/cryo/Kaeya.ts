import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_CHARGE_26P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000015, "凯亚")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, [11636, 223, 792], 60, [12441, 279, 846])
@Icons("UI_AvatarIcon_Kaeya")
export class KaeyaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["仪典剑术", "霜袭", "凛冽轮舞"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5375, 0.58125, 0.625, 0.6875, 0.73125, 0.78125, 0.85, 0.91875, 0.9875, 1.0625, 1.148438, 1.2495, 1.350562,
        1.451625, 1.561875,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.51686, 0.55893, 0.601, 0.6611, 0.70317, 0.75125, 0.81736, 0.88347, 0.94958, 1.0217, 1.104337, 1.201519,
        1.298701, 1.395883, 1.501899,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.65274, 0.70587, 0.759, 0.8349, 0.88803, 0.94875, 1.03224, 1.11573, 1.19922, 1.2903, 1.394662, 1.517393,
        1.640123, 1.762853, 1.896741,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.70864, 0.76632, 0.824, 0.9064, 0.96408, 1.03, 1.12064, 1.21128, 1.30192, 1.4008, 1.5141, 1.647341, 1.780582,
        1.913822, 2.059176,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.88236, 0.95418, 1.026, 1.1286, 1.20042, 1.2825, 1.39536, 1.50822, 1.62108, 1.7442, 1.885275, 2.051179,
        2.217083, 2.382988, 2.563974,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.5504, 0.5952, 0.64, 0.704, 0.7488, 0.8, 0.8704, 0.9408, 1.0112, 1.088, 1.176, 1.279488, 1.382976, 1.486464,
        1.59936,
      ],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.731, 0.7905, 0.85, 0.935, 0.9945, 1.0625, 1.156, 1.2495, 1.343, 1.445, 1.561875, 1.69932, 1.836765, 1.97421,
        2.12415,
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
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.912,2.0554,2.1988,2.39,2.5334,2.6768,2.868,3.0592,3.2504,3.4416,3.6328,3.824,4.063,4.302,4.541]
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.776,0.8342,0.8924,0.97,1.0282,1.0864,1.164,1.2416,1.3192,1.3968,1.4744,1.552,1.649,1.746,1.843]
    }),
  ];
  otherSkill = [
    action("4命·极寒的轻吻护盾", AttackType.Shield, ElementType.None, {
      hp: [0.3],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_CHARGE_26P,
    {
      label: "1命·卓越的血脉",
      describe: "对受到冰元素影响的敌人，凯亚的普通攻击与重击暴击率提升15%",
      effect: [
        { type: BuffType.NormalCritcal, getValue: () => 15 },
        { type: BuffType.StrongCritcal, getValue: () => 15 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![凯亚](https://enka.network/ui/UI_AvatarIcon_Kaeya.png) */
export const Kaeya = new KaeyaData();
