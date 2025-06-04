import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000084, "林尼")
@Weapon(WeaponType.Bow)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, 11021, 318, 538, 60)
@Icons("UI_AvatarIcon_Liney")
class LineyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迫牌易位式", "眩惑光戏法", "大魔术·灵迹巡游"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.388, 0.419, 0.451, 0.496, 0.528, 0.564, 0.613, 0.663, 0.713, 0.767, 0.821, 0.875, 0.929, 0.983],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.38, 0.411, 0.442, 0.486, 0.517, 0.553, 0.601, 0.65, 0.698, 0.751, 0.804, 0.858, 0.911, 0.964],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.273, 0.295, 0.317, 0.349, 0.371, 0.396, 0.431, 0.466, 0.501, 0.539, 0.577, 0.615, 0.653, 0.691],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.273, 0.295, 0.317, 0.349, 0.371, 0.396, 0.431, 0.466, 0.501, 0.539, 0.577, 0.615, 0.653, 0.691],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.569, 0.616, 0.662, 0.728, 0.775, 0.828, 0.9, 0.973, 1.046, 1.125, 1.205, 1.284, 1.364, 1.443],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928, 0.989, 1.051, 1.112],
    }),
    action("一段蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36, 2.48, 2.635, 2.79],
    }),
    action("隐具魔术箭伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [1.728, 1.86, 1.99, 2.16, 2.29, 2.42, 2.59, 2.76, 2.94, 3.11, 3.28, 3.456, 3.672, 3.888],
    }),
    action(
      "礼花术弹伤害",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [2.12, 2.28, 2.44, 2.65, 2.81, 2.97, 3.18, 3.39, 3.6, 3.82, 4.03, 4.24, 4.51, 4.77],
      },
      "Liney"
    ),
    action("6命·礼花术弹·重奏伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [2.12, 2.28, 2.44, 2.65, 2.81, 2.97, 3.18, 3.39, 3.6, 3.82, 4.03, 4.24, 4.51, 4.77].map((i) => i * 0.8),
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2, 1.282, 1.361, 1.441],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4, 2.563, 2.722, 2.881],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3, 3.202, 3.4, 3.598],
    }),
    action("灵息之刺伤害", AttackType.Other, ElementType.Pyro, {
      atk: [0.276, 0.296, 0.317, 0.344, 0.365, 0.386, 0.413, 0.441, 0.468, 0.496, 0.524, 0.551, 0.586, 0.62],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.672, 1.797, 1.923, 2.09, 2.215, 2.341, 2.508, 2.675, 2.842, 3.01],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.54, 1.656, 1.771, 1.925, 2.041, 2.156, 2.31, 2.464, 2.618, 2.772, 2.926, 3.08, 3.273],
    }),
    action("引爆礼花伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [4.14, 4.451, 4.761, 5.175, 5.486, 5.796, 6.21, 6.624, 7.038, 7.452, 7.866, 8.28, 8.798],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素战技·「隐具余数」",
      describe: "施放时，将清除已有的「隐具余数」，根据清除的层数，提升造成的伤害",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data, s) => {
            let a = [0.532, 0.572, 0.612, 0.665, 0.705, 0.745, 0.798, 0.851, 0.904, 0.958][
              data.skillLevel + data.skillLevelAdd - 1
            ];
            return a * s * (data.baseATK + data.extraATK + data.extraATK_NT);
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stack: 5,
      limit: 5,
      stackable: true,
      stackText: "「隐具余数」",
    },
    {
      label: "惊险演出",
      describe:
        "如果林尼通过发射隐具魔术箭消耗了生命值，该隐具魔术箭召唤的怪笑猫猫帽命中敌人时会基于攻击力的80%提高造成的伤害",
      effect: [
        {
          type: BuffType.StrongFixed,
          getValue: (data) => {
            return 0.8 * (data.baseATK + data.extraATK + data.extraATK_NT);
          },
          actionOn: ActionOn.External,
          special: "Liney",
        },
      ],
      enable: true,
    },
    {
      label: "完场喝彩",
      describe:
        "林尼对处于火元素影响下的敌人造成的伤害提升，基础提升60%，队伍中林尼以外每个元素类型为火元素的角色，提升20%，至多使林尼对处于火元素影响下的敌人造成的伤害提升100%",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (_, s) => {
            return 60 + 20 * s;
          },
        },
      ],
      enable: true,
      stackable: true,
      stack: 2,
      limit: 2,
      stackText: "其它火元素队友数量",
    },
    {
      label: "2命·巧言贴耳的诱引",
      describe: "林尼在场上时，每2秒将获得一层「集意专注」效果，使林尼的暴击伤害提升20%。此效果至多叠加3层",
      effect: [{ type: BuffType.CritcalHurt, getValue: (_, s) => 20 * s }],
      enable: false,
      stackable: true,
      stack: 3,
      limit: 3,
      stackText: "集意专注层数",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_A_3,
    {
      label: "4命·熟稔习练的筹谋",
      describe: "林尼的元素类型为火元素的重击攻击命中敌人后，该敌人的火元素抗性降低20%",
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![林尼](https://enka.network/ui/UI_AvatarIcon_Liney.png) */
export const Liney = new LineyData();
