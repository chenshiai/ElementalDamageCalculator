import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000084, "林尼")
@Weapon(WeaponType.Bow)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [11021, 318, 538], 60, [11805, 390, 576])
@Icons("UI_AvatarIcon_Liney")
export class LineyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迫牌易位式", "眩惑光戏法", "大魔术·灵迹巡游"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.38786, 0.41943, 0.451, 0.4961, 0.52767, 0.56375, 0.61336, 0.66297, 0.71258, 0.7667, 0.82082, 0.87494, 0.92906,
        0.98318, 1.0373,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.38012, 0.41106, 0.442, 0.4862, 0.51714, 0.5525, 0.60112, 0.64974, 0.69836, 0.7514, 0.80444, 0.85748, 0.91052,
        0.96356, 1.0166,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.27262, 0.29481, 0.317, 0.3487, 0.37089, 0.39625, 0.43112, 0.46599, 0.50086, 0.5389, 0.57694, 0.61498, 0.65302,
        0.69106, 0.7291,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.56932, 0.61566, 0.662, 0.7282, 0.77454, 0.8275, 0.90032, 0.97314, 1.04596, 1.1254, 1.20484, 1.28428, 1.36372,
        1.44316, 1.5226,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("一段蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("隐具魔术箭伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.728, 1.8576, 1.9872, 2.16, 2.2896, 2.4192, 2.592, 2.7648, 2.9376, 3.1104, 3.2832, 3.456, 3.672, 3.888, 4.104,
      ],
    }),
    action(
      "礼花术弹伤害",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [2.12, 2.279, 2.438, 2.65, 2.809, 2.968, 3.18, 3.392, 3.604, 3.816, 4.028, 4.24, 4.505, 4.77, 5.035],
      },
      "Liney"
    ),
    action("6命·礼花术弹·重奏伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [2.12, 2.279, 2.438, 2.65, 2.809, 2.968, 3.18, 3.392, 3.604, 3.816, 4.028, 4.24, 4.505, 4.77, 5.035].map(
        (i) => i * 0.8
      ),
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
    action("灵息之刺伤害", AttackType.Other, ElementType.Pyro, {
      atk: [
        0.27552, 0.296184, 0.316848, 0.3444, 0.365064, 0.385728, 0.41328, 0.440832, 0.468384, 0.495936, 0.523488,
        0.55104, 0.58548, 0.61992, 0.65436,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.672, 1.7974, 1.9228, 2.09, 2.2154, 2.3408, 2.508, 2.6752, 2.8424, 3.0096, 3.1768, 3.344, 3.553, 3.762, 3.971,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.54, 1.6555, 1.771, 1.925, 2.0405, 2.156, 2.31, 2.464, 2.618, 2.772, 2.926, 3.08, 3.2725, 3.465, 3.6575],
    }),
    action("引爆礼花伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [4.14, 4.4505, 4.761, 5.175, 5.4855, 5.796, 6.21, 6.624, 7.038, 7.452, 7.866, 8.28, 8.7975, 9.315, 9.8325],
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
          type: BuffType.SkillAdd,
          getValue: (data, s) => {
            let a = [
              0.532, 0.5719, 0.6118, 0.665, 0.7049, 0.7448, 0.798, 0.8512, 0.9044, 0.9576, 1.0108, 1.064, 1.1305, 1.197,
              1.2635,
            ][data.skillLevel + data.skillLevelAdd - 1];
            return a * s;
          },
          actionOn: ActionOn.Indirect,
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
      enable: true,
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
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![林尼](https://enka.network/ui/UI_AvatarIcon_Liney.png) */
export const Liney = new LineyData();
