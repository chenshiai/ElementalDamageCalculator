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
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_E_5, Constellation_Q_3, Constellation_Q_5 } from "../buffs";

@EnKaId(1000000702, "荧·火")
@Weapon(WeaponType.Sword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, 10875, 213, 683, 60)
@Icons("UI_AvatarIcon_PlayerGirl", "PlayerFire")
class PlayerGirlData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·异邦烈焰", "流火剑", "灼火燎原"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.445, 0.481, 0.517, 0.569, 0.605, 0.646, 0.704, 0.76, 0.817, 0.879, 0.941],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.687, 0.742, 0.798, 0.859, 0.919],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.53, 0.573, 0.616, 0.678, 0.721, 0.77, 0.838, 0.906, 0.973, 1.05, 1.12],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.583, 0.631, 0.678, 0.746, 0.793, 0.848, 0.922, 0.997, 1.07, 1.15, 1.23],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.708, 0.765, 0.823, 0.905, 0.963, 1.03, 1.12, 1.21, 1.3, 1.4, 1.5],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.03, 1.1, 1.18],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.722, 0.781, 0.84, 0.924, 0.983, 1.05, 1.14, 1.23, 1.33, 1.43, 1.53],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.01, 1.09, 1.17, 1.26, 1.35],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("焰烈之槛伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.281, 0.302, 0.323, 0.351, 0.372, 0.393, 0.421, 0.449, 0.477, 0.505, 0.534, 0.562, 0.597],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.988, 1.062, 1.136, 1.235, 1.309, 1.383, 1.482, 1.581, 1.68, 1.778, 1.877, 1.976, 2.1],
    }),
    action("灼火之槛伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.814, 0.875, 0.937, 1.018, 1.079, 1.14, 1.222, 1.303, 1.384, 1.468, 1.547, 1.629, 1.731],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [4.272, 4.592, 4.913, 5.34, 5.66, 5.981, 6.408, 6.835, 7.262, 7.69, 8.117, 8.544, 9.078],
    }),
  ];
  otherSkill = [
    action("永燃的圣火·流火伤害", AttackType.Other, ElementType.Pyro, {
      atk: [0.96],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
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

/** ![荧·火](https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png) */
export const PlayerGirl = new PlayerGirlData();
