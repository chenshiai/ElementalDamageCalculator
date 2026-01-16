import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3, ExtraBuff } from "../buffs";

@EnKaId(1000000506, "空·岩")
@Weapon(WeaponType.Sword)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, [10875, 213, 683], 60, [11627, 266, 730])
@Icons("UI_AvatarIcon_PlayerBoy", "PlayerRock")
export class PlayerBoyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦岩峰", "星陨剑", "岩潮叠嶂"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44462, 0.48081, 0.517, 0.5687, 0.60489, 0.64625, 0.70312, 0.76, 0.81686, 0.8789, 0.94094, 1.00298, 1.06502,
        1.12706, 1.1891,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4343, 0.46965, 0.505, 0.5555, 0.59085, 0.63125, 0.6868, 0.74235, 0.7979, 0.8585, 0.9191, 0.9797, 1.0403,
        1.1009, 1.1615,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.52976, 0.57288, 0.616, 0.6776, 0.72072, 0.77, 0.83776, 0.90552, 0.97328, 1.0472, 1.12112, 1.19504, 1.26896,
        1.34288, 1.4168,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.58308, 0.63054, 0.678, 0.7458, 0.79326, 0.8475, 0.92208, 0.99666, 1.07124, 1.1526, 1.23396, 1.31532, 1.39668,
        1.47804, 1.5594,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.70778, 0.76539, 0.823, 0.9053, 0.96291, 1.02875, 1.11928, 1.20981, 1.30034, 1.3991, 1.49786, 1.59662, 1.69538,
        1.79414, 1.8929,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.6045, 0.65, 0.715, 0.7605, 0.8125, 0.884, 0.9555, 1.027, 1.105, 1.183, 1.261, 1.339, 1.417, 1.495],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.60716, 0.65658, 0.706, 0.7766, 0.82602, 0.8825, 0.96016, 1.03782, 1.11548, 1.2002, 1.28492, 1.36964, 1.45436,
        1.53908, 1.6238,
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
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      atk: [2.48,2.666,2.852,3.1,3.286,3.472,3.72,3.968,4.216,4.464,4.712,4.96,5.27,5.58,5.89],
    }),
  ];
  burstSkill = [
    action("地震波单次伤害", AttackType.Burst, ElementType.Geo, {
      atk: [1.48,1.591,1.702,1.85,1.961,2.072,2.22,2.368,2.516,2.664,2.812,2.96,3.145,3.33,3.515],
    }),
  ];
  otherSkill = [
    action("狂乱的崩岩", AttackType.Normal, ElementType.Geo, {
      atk: [0.6],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    ...ExtraBuff,
    {
      label: "元素共鸣强化",
      describe:
        "每与一种元素进行过共鸣，旅行者便会获得对应的属性提升：风元素：暴击率提升10%；岩元素：防御力提升20%；雷元素：元素充能效率提升20%；草元素：元素精通提升60点；水元素：生命值提升20%；火元素：攻击力提升20%；冰元素：暴击伤害提升20%。",
      effect: [
        {
          type: BuffType.Critcal,
          getValue: (_, s) => (s >= 1 ? 10 : 0),
        },
        {
          type: BuffType.DEFPrcent,
          getValue: (_, s) => (s >= 2 ? 20 : 0),
        },
        {
          type: BuffType.ChargeFixed,
          getValue: (_, s) => (s >= 3 ? 20 : 0),
        },
        {
          type: BuffType.MysteryFixed,
          getValue: (_, s) => (s >= 4 ? 60 : 0),
        },
        {
          type: BuffType.HPPrcent,
          getValue: (_, s) => (s >= 5 ? 20 : 0),
        },
        {
          type: BuffType.ATKPrcent,
          getValue: (_, s) => (s >= 6 ? 20 : 0),
        },
        {
          type: BuffType.CritcalHurt,
          getValue: (_, s) => (s >= 7 ? 20 : 0),
        },
      ],
      stack: 6,
      limit: 7,
      stackable: true,
      stackText: "共鸣数量",
      enable: true,
    },
    {
      label: "1命·巍然的青岩",
      describe: "队伍中角色处于岩潮叠嶂的岩嶂包围中时，暴击率提升10%",
      effect: [{ type: BuffType.Critcal, getValue: () => 10 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![空·岩](https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png) */
export const PlayerBoy = new PlayerBoyData();
