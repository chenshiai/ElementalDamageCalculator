import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_A_3, Constellation_E_5 } from "../buffs";

@EnKaId(10000085, "菲米尼")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, 12070, 255, 708, 60)
@Icons("UI_AvatarIcon_Freminet")
class FreminetData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["洑流剑", "浮冰增压", "猎影潜袭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.842, 0.911, 0.98, 1.078, 1.146, 1.224, 1.332, 1.44, 1.548, 1.665, 1.783, 1.9, 2.018, 2.135],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.807, 0.872, 0.938, 1.032, 1.098, 1.173, 1.276, 1.379, 1.482, 1.595, 1.707, 1.82, 1.933, 2.045],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.019, 1.102, 1.185, 1.303, 1.386, 1.481, 1.612, 1.742, 1.872, 2.014, 2.157, 2.299, 2.441, 2.583],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.238, 1.339, 1.44, 1.584, 1.684, 1.8, 1.958, 2.116, 2.275, 2.447, 2.62, 2.793, 2.966, 3.138],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.323, 1.41, 1.498, 1.585],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39, 2.55, 2.71, 2.87],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579, 1.683, 1.787, 1.891],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16, 3.364, 3.573, 3.781],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94, 4.202, 4.462, 4.722],
    }),
  ];
  elementSkill = [
    action("上挑攻击伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.8304, 0.8927, 0.955, 1.038, 1.1003, 1.1626, 1.2456, 1.3286, 1.4117, 1.4947, 1.5778, 1.6608, 1.7646],
    }),
    action("霜寒伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.0716, 0.077, 0.0823, 0.0895, 0.0949, 0.1002, 0.1074, 0.1146, 0.1217, 0.1289, 0.136, 0.1432, 0.1522],
    }),
    action(
      "零阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [2.0048, 2.1552, 2.3055, 2.506, 2.6564, 2.8067, 3.0072, 3.2077, 3.4082, 3.6086, 3.8091, 4.0096, 4.2602],
      },
      "Freminet"
    ),
    action(
      "一阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [1.002, 1.078, 1.153, 1.253, 1.328, 1.403, 1.504, 1.604, 1.704, 1.804, 1.905, 2.005, 2.13],
      },
      "Freminet"
    ),
    action(
      "一阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Physical,
      {
        atk: [0.487, 0.523, 0.56, 0.609, 0.645, 0.682, 0.73, 0.779, 0.828, 0.876, 0.925, 0.974, 1.035],
      },
      "Freminet"
    ),
    action(
      "二阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [0.702, 0.754, 0.807, 0.877, 0.93, 0.982, 1.052, 1.123, 1.193, 1.263, 1.333, 1.403, 1.491],
      },
      "Freminet"
    ),
    action(
      "二阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Physical,
      {
        atk: [0.852, 0.916, 0.98, 1.065, 1.129, 1.193, 1.278, 1.363, 1.448, 1.534, 1.619, 1.704, 1.811],
      },
      "Freminet"
    ),
    action(
      "三阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [0.401, 0.431, 0.461, 0.501, 0.531, 0.561, 0.601, 0.642, 0.682, 0.722, 0.762, 0.802, 0.852],
      },
      "Freminet"
    ),
    action(
      "三阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Physical,
      {
        atk: [1.217, 1.308, 1.4, 1.522, 1.613, 1.704, 1.826, 1.948, 2.069, 2.191, 2.313, 2.434, 2.586],
      },
      "Freminet"
    ),
    action(
      "四阶高压粉碎伤害",
      AttackType.Skill,
      ElementType.Physical,
      {
        atk: [2.4344, 2.617, 2.7996, 3.043, 3.2256, 3.4082, 3.6516, 3.895, 4.1385, 4.3819, 4.6254, 4.8688, 5.1731],
      },
      "Freminet"
    ),
    action("灵息之刺伤害", AttackType.Other, ElementType.Cryo, {
      atk: [0.144, 0.1548, 0.1656, 0.18, 0.1908, 0.2016, 0.216, 0.2304, 0.2448, 0.2592, 0.2736, 0.288, 0.306],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [3.184, 3.4228, 3.6616, 3.98, 4.2188, 4.4576, 4.776, 5.0944, 5.4128, 5.7312],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "并流式冷凝机关",
      describe: "菲米尼对敌人触发碎冰反应后，会使浮冰增压·高压粉碎造成的伤害提高40%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 40, special: "Freminet" }],
      enable: true,
    },
    {
      label: "1命·深水与泡沫之梦",
      describe: "浮冰增压·高压粉碎的暴击率提高15%",
      effect: [{ type: BuffType.SkillCritcal, getValue: () => 15, special: "Freminet" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_A_3,
    {
      label: "4命·雪月与芦笛之舞",
      describe: "菲米尼对敌人触发冰冻、碎冰、超导反应后，攻击力提升9%。至多叠加2次",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 9 * s }],
      enable: true,
      stack: 2,
      limit: 2,
      stackable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·梦晓与决意之刻",
      describe: "菲米尼对敌人触发冰冻、碎冰、超导反应后，暴击伤害提升12%。至多叠加3次",
      effect: [{ type: BuffType.CritcalHurt, getValue: (_, s) => 12 * s }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![菲米尼](https://enka.network/ui/UI_AvatarIcon_Freminet.png) */
export const Freminet = new FreminetData();
