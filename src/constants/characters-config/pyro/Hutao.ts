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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000046, "胡桃")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [15552, 106, 876], 60, [16658, 130, 938])
@Icons("UI_AvatarIcon_Hutao")
export class HutaoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["往生秘传枪法", "蝶引来生", "安神秘法"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.468864, 0.500832, 0.5328, 0.575424, 0.607392, 0.644688, 0.69264, 0.740592, 0.788544, 0.836496, 0.884448,
        0.9324, 0.980352, 1.028304, 1.076256,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.482539, 0.51544, 0.54834, 0.592207, 0.625108, 0.663491, 0.712842, 0.762193, 0.811543, 0.860894, 0.910244,
        0.959595, 1.008946, 1.058296, 1.107647,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.6105, 0.652125, 0.69375, 0.74925, 0.790875, 0.839438, 0.901875, 0.964313, 1.02675, 1.089188, 1.151625,
        1.214063, 1.2765, 1.338938, 1.401375,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.65641, 0.701165, 0.74592, 0.805594, 0.850349, 0.902563, 0.969696, 1.036829, 1.103962, 1.171094, 1.238227,
        1.30536, 1.372493, 1.439626, 1.506758,
      ],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.332737, 0.355423, 0.37811, 0.408359, 0.431045, 0.457513, 0.491543, 0.525573, 0.559603, 0.593633, 0.627663,
        0.661693, 0.695722, 0.729752, 0.763782,
      ],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.352, 0.376, 0.4, 0.432, 0.456, 0.484, 0.52, 0.556, 0.592, 0.628, 0.664, 0.7, 0.736, 0.772, 0.808],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.859584, 0.918192, 0.9768, 1.054944, 1.113552, 1.181928, 1.26984, 1.357752, 1.445664, 1.533576, 1.621488,
        1.7094, 1.797312, 1.885224, 1.973136,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.3596, 1.4523, 1.545, 1.6686, 1.7613, 1.86945, 2.0085, 2.14755, 2.2866, 2.42565, 2.5647, 2.70375, 2.8428,
        2.98185, 3.1209,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.654192, 0.698796, 0.7434, 0.802872, 0.847476, 0.899514, 0.96642, 1.033326, 1.100232, 1.167138, 1.234044,
        1.30095, 1.367856, 1.434762, 1.501668,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.308107, 1.397296, 1.486485, 1.605404, 1.694593, 1.798647, 1.932431, 2.066214, 2.2, 2.333781, 2.467565,
        2.601349, 2.735132, 2.868916, 3.0027,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.633896, 1.745298, 1.8567, 2.005236, 2.116638, 2.246607, 2.41371, 2.580813, 2.747916, 2.915019, 3.082122,
        3.249225, 3.416328, 3.583431, 3.750534,
      ],
    }),
  ];
  elementSkill = [
    action("血梅香伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.64, 0.688, 0.736, 0.8, 0.848, 0.896, 0.96, 1.024, 1.088, 1.152, 1.216, 1.28, 1.36, 1.44, 1.52],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        3.03272, 3.21432, 3.39592, 3.632, 3.8136, 3.9952, 4.23128, 4.46736, 4.70344, 4.93952, 5.1756, 5.41168, 5.64776,
        5.88384, 6.11992,
      ],
    }),
    action("低血量时技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        3.7909, 4.0179, 4.2449, 4.54, 4.767, 4.994, 5.2891, 5.5842, 5.8793, 6.1744, 6.4695, 6.7646, 7.0597, 7.3548,
        7.6499,
      ],
    }),
    action("技能治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.062625, 0.066375, 0.070125, 0.075, 0.07875, 0.0825, 0.087375, 0.09225, 0.097125, 0.102, 0.106875, 0.11175,
        0.116625, 0.1215, 0.126375,
      ],
    }),
    action("低血量时技能治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.0835, 0.0885, 0.0935, 0.1, 0.105, 0.11, 0.1165, 0.123, 0.1295, 0.136, 0.1425, 0.149, 0.1555, 0.162, 0.1685,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "元素战技·蝶引来生",
      describe:
        "基于进入该状态时胡桃的生命值上限，提高胡桃的攻击力。通过这种方式获得的攻击力提升，不能超过胡桃基础攻击力的400%；将攻击伤害转为火元素伤害",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data) => {
            let a = [
              0.03841, 0.04071, 0.04301, 0.046, 0.0483, 0.0506, 0.05359, 0.05658, 0.05957, 0.06256, 0.06555, 0.06854,
              0.07153, 0.07452, 0.07751,
            ][data.skillLevel + data.skillLevelAdd - 1];
            return Math.min(data.baseATK * 4, (data.baseHP + data.extraHP) * a);
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.Transform,
          getValue: () => EnchantingType[ElementType.Pyro],
        },
      ],
      enable: true,
    },
    {
      label: "蝶隐之时",
      describe: "蝶引来生施加的彼岸蝶舞状态结束后，队伍中所有角色（不包括胡桃自己）的暴击率提高12%",
      effect: [{ type: BuffType.Critcal, getValue: () => 12 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "血之灶火",
      describe: "胡桃的生命值低于或等于50%时,获得33%火元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 33 }],
      enable: true,
    },
    {
      label: "2命·最不安神晴又复雨",
      describe: "血梅香造成的伤害提高，提高值相当于效果附加时胡桃生命值上限的10%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.1,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·伴君眠花房",
      describe:
        "处于胡桃自己施加的血梅香状态影响下的敌人被击败时，附近的队伍中所有角色（不包括胡桃自己）的暴击率提高12%",
      effect: [{ type: BuffType.Critcal, getValue: () => 12 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·幽蝶能留一缕芳",
      describe: "胡桃的生命值降至25%以下，暴击率提高100%",
      effect: [{ type: BuffType.Critcal, getValue: () => 100 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![胡桃](https://enka.network/ui/UI_AvatarIcon_Hutao.png) */
export const Hutao = new HutaoData();
