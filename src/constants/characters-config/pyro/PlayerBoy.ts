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
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5, ExtraBuff } from "../buffs";

@EnKaId(1000000502, "空·火")
@Weapon(WeaponType.Sword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [10875, 213, 683], 60, [11627, 266, 730])
@Icons("UI_AvatarIcon_PlayerBoy", "PlayerFire")
export class PlayerBoyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦烈焰", "流火剑", "灼火燎原"];

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
    action("焰烈之槛伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.2808, 0.30186, 0.32292, 0.351, 0.37206, 0.39312, 0.4212, 0.44928, 0.47736, 0.50544, 0.53352, 0.5616, 0.5967,
        0.6318, 0.6669,
      ],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.988, 1.0621, 1.1362, 1.235, 1.3091, 1.3832, 1.482, 1.5808, 1.6796, 1.7784, 1.8772, 1.976, 2.0995, 2.223,
        2.3465,
      ],
    }),
    action("灼火之槛伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.8144, 0.87548, 0.93656, 1.018, 1.07908, 1.14016, 1.2216, 1.30304, 1.38448, 1.46592, 1.54736, 1.6288, 1.7306,
        1.8324, 1.9342,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        4.272, 4.5924, 4.9128, 5.34, 5.6604, 5.9808, 6.408, 6.8352, 7.2624, 7.6896, 8.1168, 8.544, 9.078, 9.612, 10.146,
      ],
    }),
  ];
  otherSkill = [
    action("永燃的圣火·流火伤害", AttackType.Other, ElementType.Pyro, {
      atk: [0.96],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    ...ExtraBuff,
    {
      label: "1命·流光的星火",
      describe:
        "焰烈之槛或灼火之槛存在期间，当前场上角色造成的伤害提升6%；若当前场上角色处于夜魂加持状态，造成的伤害还会提升9%。",
      effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => 6 + 9 * s }],
      enable: false,
      stackable: true,
      stack: 0,
      limit: 1,
      stackType: "switch",
      stackText: "夜魂加持",
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    {
      label: "4命·燎灼的烈火",
      describe: "施放元素爆发灼火燎原后，旅行者获得20%火元素伤害加成。",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·永燃的圣火",
      describe:
        "处于夜魂加持状态下时，旅行者的普通攻击、重击与下落攻击将转化为具有夜魂性质且无法被附魔覆盖的火元素伤害，且这些攻击的暴击伤害提升40%。",
      effect: [
        { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Pyro] },
        { type: BuffType.NormalCritcalHurt, getValue: () => 40 },
        { type: BuffType.StrongCritcalHurt, getValue: () => 40 },
        { type: BuffType.FallingCritcalHurt, getValue: () => 40 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "对抗「古斯托特」，攻击力提升",
      describe: "对抗「古斯托特」化形的蚀灭的源焰之主时，焰烈之槛或灼火之槛存在期间，旅行者的攻击力提高40%。",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 40 }],
      enable: false,
    },
    {
      label: "对抗「古斯托特」，敌人火抗性降低",
      describe:
        "对抗「古斯托特」化形的蚀灭的源焰之主时，处于夜魂加持状态下时，旅行者的元素类型为火元素的攻击命中敌人后，该敌人的火元素抗性降低20%，持续6秒，此效果至多叠加2层。",
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: (_, s) => -20 * s }],
      enable: false,
      shareable: true,
      stackable: true,
      stack: 2,
      limit: 2,
      target: BuffTarget.Enemy,
    },
    {
      label: "对抗「古斯托特」，火元素伤害提升",
      describe: "对抗「古斯托特」化形的蚀灭的源焰之主时，旅行者获得40%火元素伤害加成。",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 40 }],
      enable: false,
    },
    {
      label: "对抗「古斯托特」，双爆提升",
      describe: "对抗「古斯托特」化形的蚀灭的源焰之主时，旅行者的暴击率提升20%，暴击伤害提升40%。",
      effect: [
        { type: BuffType.Critcal, getValue: () => 20 },
        { type: BuffType.CritcalHurt, getValue: () => 40 },
      ],
      enable: false,
    },
  ];
}

/** ![空·火](https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png) */
export const PlayerBoy = new PlayerBoyData();
