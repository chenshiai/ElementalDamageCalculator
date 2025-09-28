import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000051, "优菈")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [13226, 342, 751], 80, [14166, 419, 804])
@Icons("UI_AvatarIcon_Eula")
export class EulaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·宗室", "冰潮的涡旋", "凝浪之光剑"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.897324, 0.970362, 1.0434, 1.14774, 1.220778, 1.30425, 1.419024, 1.533798, 1.648572, 1.77378, 1.917248,
        2.085965, 2.254683, 2.423401, 2.607457,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.935508, 1.011654, 1.0878, 1.19658, 1.272726, 1.35975, 1.479408, 1.599066, 1.718724, 1.84926, 1.998833,
        2.17473, 2.350627, 2.526524, 2.718412,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.567987, 0.614219, 0.66045, 0.726495, 0.772726, 0.825562, 0.898212, 0.970861, 1.043511, 1.122765, 1.213577,
        1.320372, 1.427166, 1.533961, 1.650465,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.126428, 1.218114, 1.3098, 1.44078, 1.532466, 1.63725, 1.781328, 1.925406, 2.069484, 2.22666, 2.406758,
        2.618552, 2.830347, 3.042141, 3.27319,
      ],
    }),
    action("五段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.718336, 0.776806, 0.835275, 0.918803, 0.977272, 1.044094, 1.135974, 1.227854, 1.319735, 1.419968, 1.534818,
        1.669882, 1.804946, 1.94001, 2.087352,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.688, 0.744, 0.8, 0.88, 0.936, 1, 1.088, 1.176, 1.264, 1.36, 1.47, 1.59936, 1.72872, 1.85808, 1.9992],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.24399, 1.345245, 1.4465, 1.59115, 1.692405, 1.808125, 1.96724, 2.126355, 2.28547, 2.45905, 2.657944, 2.891843,
        3.125742, 3.359641, 3.614804,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.593664,
        1.733906, 1.874149, 2.014391, 2.167383,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.186652,
        3.467078, 3.747503, 4.027928, 4.333847,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.980301,
        4.330567, 4.680834, 5.0311, 5.413209,
      ],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.464, 1.5738, 1.6836, 1.83, 1.9398, 2.0496, 2.196, 2.3424, 2.4888, 2.6352, 2.7816, 2.928, 3.111, 3.294, 3.477,
      ],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        2.456, 2.6402, 2.8244, 3.07, 3.2542, 3.4384, 3.684, 3.9296, 4.1752, 4.4208, 4.6664, 4.912, 5.219, 5.526, 5.833,
      ],
    }),
    action("冰涡之剑伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        2.456, 2.6402, 2.8244, 3.07, 3.2542, 3.4384, 3.684, 3.9296, 4.1752, 4.4208, 4.6664, 4.912, 5.219, 5.526, 5.833,
      ],
    }),
    action("光降之剑基础伤害", AttackType.Burst, ElementType.Physical, {
      atk: [
        3.67048, 3.96924, 4.268, 4.6948, 4.99356, 5.335, 5.80448, 6.27396, 6.74344, 7.2556, 7.84245, 8.532586, 9.222721,
        9.912857, 10.665732,
      ],
    }),
    action(
      "光降之剑总伤害",
      AttackType.Burst,
      ElementType.Physical,
      {
        atk: [
          3.67048, 3.96924, 4.268, 4.6948, 4.99356, 5.335, 5.80448, 6.27396, 6.74344, 7.2556, 7.84245, 8.532586,
          9.222721, 9.912857, 10.665732,
        ],
      },
      "Eula"
    ),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "点按元素战技·冰潮的涡旋",
      describe: "命中敌人时，优菈自己获得一层冷酷之心效果，提高优菈的防御力，最多叠加2次",
      effect: [{ type: BuffType.DEFPrcent, getValue: (_, s) => s * 30 }],
      enable: false,
      stack: 0,
      stackable: true,
      limit: 2,
      stackText: "冷酷之心",
    },
    {
      label: "长按元素战技·冰潮的涡旋",
      describe: "使身边的敌人的物理抗性与冰元素抗性降低",
      effect: [
        {
          type: BuffType.EnemyPhysicalResistance,
          getValue: (data) => {
            return -[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 25][
              data.skillLevel + data.skillLevelAdd - 1
            ];
          },
        },
        {
          type: BuffType.EnemyCryoResistance,
          getValue: (data) => {
            return -[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 25][
              data.skillLevel + data.skillLevelAdd - 1
            ];
          },
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "元素爆发·光降之剑",
      describe: "优菈自己的普通攻击、元素战技或元素爆发对敌人造成伤害时，为光降之剑积蓄能量",
      effect: [
        {
          type: BuffType.BurstAdd,
          getValue: (data, s) => {
            return (
              [
                0.74992, 0.81096, 0.872, 0.9592, 1.02024, 1.09, 1.18592, 1.28184, 1.37776, 1.4824, 1.6023, 1.743302,
                1.884305, 2.025307, 2.179128,
              ][data.burstLevel + data.burstLevelAdd - 1] * s
            );
          },
          special: "Eula",
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      stackable: true,
      stack: 13,
      limit: 30,
      stackText: "能量层数",
    },
    {
      label: "1命·光潮的幻象",
      describe: "消耗冰潮的涡旋的冷酷之心效果后，优菈的物理伤害加成提高30%",
      effect: [{ type: BuffType.PhysicalPrcent, getValue: () => 30 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    {
      label: "4命·光潮的幻象",
      describe: "对生命值低于50%的敌人，光降之剑造成的伤害提高25%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 25, special: "Eula" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![优菈](https://enka.network/ui/UI_AvatarIcon_Eula.png) */
export const Eula = new EulaData();
