import {
  AttackType,
  ElementType,
  BuffType,
  WeaponType,
  Rarity,
  EnchantingType,
  ActionOn,
  BuffTarget,
} from "@/types/enum";
import { ICharacterInfo } from "@/types/interface";
import {
  A_80_ATK_24P,
  Constellation_E_3,
  Constellation_Q_3,
  Constellation_A_3,
  Constellation_Q_5,
  S_80_CRITALHUNT_38P,
  S_80_CRITAL_19P,
  Constellation_E_5,
  A_80_CHARGE_26P,
  A_80_DEF_24P,
  A_80_GEO_24P,
  A_80_HP_24P,
  A_80_MYSTERY_96,
  A_80_ELECTRO_24P,
  A_80_PHYSICAL_30P,
  A_80_ANEMO_24P,
  A_80_CRYO_24P,
  A_80_PYRO_24P,
  S_80_HEALADD_22P,
  S_80_CHARGE_32P,
  S_80_PYRO_28P,
  S_80_HYDRO_28P,
  S_80_GEO_28P,
  S_80_MYSTERY_115,
} from "./buffs";

import { cha, createAttack } from "@/utils/calculate/create-data-methods";

/// 用来复制粘贴的模板
const a = {
  ...cha(1000000, "", ElementType.Dendro, WeaponType.Polearms)(Rarity.Five, 15552, 106, 876, 40)("", [], []),
  normalAttack: [],
  elementSkill: [],
  burstSkill: [],
  otherSkill: [],
  buffs: [S_80_CRITALHUNT_38P],
};
// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)
export const Character: (ICharacterInfo & Record<any, any>)[] = [
  {
    ...cha(10000052, "雷电将军", ElementType.Electro, WeaponType.Polearms)(Rarity.Five, 12907, 337, 789, 90)(
      "UI_AvatarIcon_Shougun",
      [
        "UI_Talent_S_Shougun_01",
        "UI_Talent_S_Shougun_03",
        "UI_Talent_U_Shougun_02",
        "UI_Talent_S_Shougun_02",
        "UI_Talent_U_Shougun_01",
        "UI_Talent_S_Shougun_04",
      ],
      ["普通攻击·源流", "神变·恶曜开眼", "奥义·梦想真说"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.397, 0.429, 0.461, 0.507, 0.539, 0.576, 0.627, 0.678, 0.728, 0.784, 0.847],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.397, 0.43, 0.462, 0.508, 0.541, 0.578, 0.628, 0.679, 0.73, 0.785, 0.849],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.499, 0.539, 0.58, 0.638, 0.679, 0.725, 0.789, 0.853, 0.916, 0.986, 1.066],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.29, 0.313, 0.337, 0.371, 0.394, 0.421, 0.458, 0.495, 0.533, 0.573, 0.619],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.29, 0.313, 0.337, 0.371, 0.394, 0.421, 0.458, 0.495, 0.533, 0.573, 0.619],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.655, 0.708, 0.761, 0.837, 0.89, 0.951, 1.035, 1.119, 1.202, 1.294, 1.398],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.996, 1.077, 1.158, 1.274, 1.355, 1.448, 1.575, 1.702, 1.83, 1.969, 2.128],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.172, 1.26, 1.348, 1.465, 1.553, 1.641, 1.758, 1.875, 1.992, 2.11, 2.227, 2.344, 2.491],
      }),
      createAttack("协同攻击伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.42, 0.452, 0.483, 0.525, 0.557, 0.588, 0.63, 0.672, 0.714, 0.756, 0.798, 0.84, 0.893],
      }),
    ],
    burstSkill: [
      createAttack(
        "梦想一刀基础伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [4.01, 4.31, 4.61, 5.01, 5.31, 5.61, 6.01, 6.41, 6.81, 7.21, 7.62, 8.02, 8.52, 9.02],
        },
        "Shougun"
      ),
      createAttack(
        "一段伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.447, 0.478, 0.508, 0.549, 0.58, 0.615, 0.661, 0.707, 0.752, 0.798, 0.844, 0.89, 0.935, 0.981],
        },
        "Shougun2"
      ),
      createAttack(
        "二段伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.44, 0.47, 0.5, 0.54, 0.569, 0.604, 0.649, 0.694, 0.739, 0.784, 0.829, 0.874, 0.919, 0.964],
        },
        "Shougun2"
      ),
      createAttack(
        "三段伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.538, 0.575, 0.612, 0.661, 0.697, 0.74, 0.795, 0.85, 0.905, 0.96, 1.015, 1.07, 1.125, 1.18],
        },
        "Shougun2"
      ),
      createAttack(
        "四段伤害·1",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.309, 0.33, 0.351, 0.379, 0.4, 0.425, 0.456, 0.488, 0.519, 0.551, 0.583, 0.614, 0.646, 0.677],
        },
        "Shougun2"
      ),
      createAttack(
        "四段伤害·2",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.31, 0.331, 0.352, 0.38, 0.401, 0.426, 0.458, 0.489, 0.521, 0.553, 0.584, 0.616, 0.648, 0.679],
        },
        "Shougun2"
      ),
      createAttack(
        "五段伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.739, 0.79, 0.84, 0.908, 0.958, 1.017, 1.092, 1.168, 1.244, 1.319, 1.395, 1.471, 1.546, 1.622],
        },
        "Shougun2"
      ),
      createAttack(
        "重击伤害·1",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.616, 0.658, 0.7, 0.756, 0.798, 0.847, 0.91, 0.973, 1.036, 1.099, 1.162, 1.225, 1.288, 1.351],
        },
        "Shougun2"
      ),
      createAttack(
        "重击伤害·2",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.744, 0.794, 0.845, 0.913, 0.963, 1.023, 1.099, 1.175, 1.251, 1.327, 1.403, 1.479, 1.555, 1.631],
        },
        "Shougun2"
      ),
      createAttack(
        "下坠期间伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353, 1.442, 1.531, 1.621],
        },
        "Shougun2"
      ),
      createAttack(
        "低空坠地冲击伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71, 2.88, 3.06, 3.24],
        },
        "Shougun2"
      ),
      createAttack(
        "高空坠地冲击伤害",
        AttackType.Burst,
        ElementType.Electro,
        {
          atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38, 3.6, 3.82, 4.05],
        },
        "Shougun2"
      ),
    ],
    otherSkill: [],
    buffs: [
      S_80_CHARGE_32P,
      {
        label: "元素战技·雷罚恶曜之眼",
        describe: "雷罚恶曜之眼的角色在持续期间内，元素爆发造成的伤害获得提升，提升程度基于元素爆发的元素能量",
        effect: [
          {
            type: BuffType.BurstPrcent,
            getValue: (data, _, receiverData) => {
              return (
                [0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.3, 0.3, 0.3, 0.3][
                  data.skillLevel + data.skillLevelAdd - 1
                ] * (receiverData?.burstCharge ? receiverData.burstCharge : data.burstCharge)
              );
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        shareable: true,
        target: BuffTarget.All,
        enable: true,
      },
      {
        label: "殊胜之御体",
        describe: "基于元素充能效率超过100%的部分，每1%使雷电将军雷元素伤害加成提升0.4%",
        effect: [
          {
            type: BuffType.ElectroPrcent,
            getValue: (data) => Math.max(0, data.chargeEfficiency - 100) * 0.4,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
      {
        label: "诸愿百眼之轮",
        describe: "依据消耗的愿力层数，增加梦想一刀与梦想一心的攻击造成的伤害",
        effect: [
          {
            type: BuffType.BurstFixed,
            getValue: (data, s) => {
              return (
                [
                  0.0389, 0.0418, 0.0447, 0.0486, 0.0515, 0.0544, 0.0583, 0.0622, 0.0661, 0.07, 0.0739, 0.0778, 0.0826,
                  0.0875,
                ][data.burstLevel + data.burstLevelAdd - 1] *
                s *
                (data.baseATK + data.extraATK + data.extraATK_NT)
              );
            },
            actionOn: ActionOn.Indirect,
            special: "Shougun",
          },
          {
            type: BuffType.BurstFixed,
            getValue: (data, s) => {
              return (
                [
                  0.0073, 0.0078, 0.0084, 0.0091, 0.0096, 0.0102, 0.0109, 0.0116, 0.0123, 0.0131, 0.0138, 0.0145,
                  0.0154, 0.0163,
                ][data.burstLevel + data.burstLevelAdd - 1] *
                s *
                (data.baseATK + data.extraATK + data.extraATK_NT)
              );
            },
            actionOn: ActionOn.Indirect,
            special: "Shougun2",
          },
        ],
        enable: true,
        stack: 60,
        limit: 60,
        stackable: true,
        stackText: "愿力层数",
      },
      {
        label: "2命·斩铁断金",
        describe: "奥义·梦想真说的梦想一刀与梦想一心状态期间的攻击将无视敌人60%的防御力",
        effect: [
          { type: BuffType.DefensePenetration, getValue: () => 60 },
        ],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      {
        label: "4命·誓奉常道",
        describe: "奥义·梦想真说施加的梦想一心状态结束后，附近的队伍中所有角色（不包括雷电将军自己）的攻击力提升30%",
        effect: [{ type: BuffType.ATKPrcent, getValue: () => 30 }],
        enable: true,
        shareable: true,
        target: BuffTarget.Other,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000049, "宵宫", ElementType.Pyro, WeaponType.Bow)(Rarity.Five, 10164, 323, 615, 60)(
      "UI_AvatarIcon_Yoimiya",
      [
        "UI_Talent_S_Yoimiya_01",
        "UI_Talent_S_Yoimiya_02",
        "UI_Talent_U_Yoimiya_01",
        "UI_Talent_S_Yoimiya_03",
        "UI_Talent_U_Yoimiya_02",
        "UI_Talent_S_Yoimiya_04",
      ],
      ["普通攻击·烟火打扬", "焰硝庭火舞", "琉金云间草"]
    ),
    normalAttack: [
      createAttack("一段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.356, 0.381, 0.405, 0.437, 0.462, 0.49, 0.527, 0.563, 0.599, 0.636, 0.672],
      }),
      createAttack("一段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.356, 0.381, 0.405, 0.437, 0.462, 0.49, 0.527, 0.563, 0.599, 0.636, 0.672],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.684, 0.73, 0.777, 0.839, 0.886, 0.94, 1.01, 1.08, 1.15, 1.22, 1.29],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.889, 0.95, 1.01, 1.091, 1.154, 1.222, 1.313, 1.404, 1.495, 1.586, 1.677],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.464, 0.496, 0.528, 0.57, 0.601, 0.638, 0.686, 0.733, 0.781, 0.828, 0.876],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.464, 0.496, 0.528, 0.57, 0.601, 0.638, 0.686, 0.733, 0.781, 0.828, 0.876],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.059, 1.131, 1.203, 1.299, 1.371, 1.456, 1.564, 1.672, 1.78, 1.889, 1.997],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("焰硝矢伤害", AttackType.Strong, ElementType.Pyro, {
        atk: [0.16, 0.18, 0.19, 0.21, 0.22, 0.23, 0.25, 0.26, 0.28, 0.3, 0.31],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.27, 1.38, 1.46, 1.59, 1.69, 1.78, 1.91, 2.04, 2.16, 2.29, 2.42, 2.54, 2.7],
      }),
      createAttack("琉金火光爆炸伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.22, 1.31, 1.4, 1.53, 1.62, 1.71, 1.83, 1.95, 2.07, 2.2, 2.32, 2.44, 2.59],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CRITAL_19P,
      {
        label: "元素战技·焰硝庭火舞",
        describe: "将宵宫的普通攻击发射的箭矢转为炽焰箭，造成的伤害转为火元素伤害，并提高普通攻击造成的伤害",
        effect: [
          { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Pyro] },
          {
            type: BuffType.NormalRate,
            getValue: (data) => {
              return [37.9, 40.2, 42.5, 45.4, 47.7, 49.9, 52.9, 55.8, 58.8, 61.7, 64.7, 67.7, 70.6][
                data.skillLevel + data.skillLevelAdd - 1
              ];
            },
          },
        ],
        enable: true,
      },
      {
        label: "袖火百景图",
        describe: "在焰硝庭火舞的持续期间内，宵宫的普通攻击命中后，将为宵宫提供2%火元素伤害加成。至多叠加10次",
        effect: [{ type: BuffType.PyroPrcent, getValue: (_, s) => s * 2 }],
        enable: true,
        stackable: true,
        stack: 10,
        limit: 10,
      },
      {
        label: "炎昼风物诗",
        describe:
          "施放琉金云间草后，附近的队伍中所有其它角色（不包括宵宫自己）攻击力提高10%。此外，依据宵宫自己施放琉金云间草时固有天赋「袖火百景图」的叠加层数，将额外提升上述的攻击力效果，每层提升1%攻击力",
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 + s }],
        enable: false,
        shareable: true,
        stackable: true,
        stack: 10,
        limit: 10,
        stackText: "「袖火百景图」",
        target: BuffTarget.Other,
      },
      {
        label: "1命·赤玉琉金",
        describe: "琉金火光影响下的敌人在持续期间内被击败时，宵宫的攻击力提高20%",
        effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 1,
      },
      {
        label: "2命·万灯送火",
        describe: "宵宫的火元素伤害造成暴击后的6秒内，宵宫获得25%火元素伤害加成",
        effect: [{ type: BuffType.PyroPrcent, getValue: () => 25 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000002, "神里绫华", ElementType.Cryo, WeaponType.Sword)(Rarity.Five, 12858, 342, 784, 80)(
      "UI_AvatarIcon_Ayaka",
      [
        "UI_Talent_S_Ayaka_01",
        "UI_Talent_S_Ayaka_02",
        "UI_Talent_U_Ayaka_02",
        "UI_Talent_S_Ayaka_03",
        "UI_Talent_U_Ayaka_01",
        "UI_Talent_S_Ayaka_04",
      ],
      ["普通攻击·神里流·倾", "神里流·冰华", "神里流·霜灭"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.457, 0.494, 0.532, 0.585, 0.622, 0.665, 0.723, 0.781, 0.84, 0.904, 0.968],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.487, 0.526, 0.566, 0.623, 0.662, 0.708, 0.77, 0.832, 0.894, 0.962, 1.03],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.626, 0.677, 0.728, 0.801, 0.852, 0.91, 0.99, 1.07, 1.15, 1.238, 1.325],
      }),
      createAttack("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
        atk: [0.226, 0.245, 0.263, 0.29, 0.308, 0.329, 0.358, 0.387, 0.416, 0.448, 0.479],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.782, 0.845, 0.909, 1, 1.064, 1.136, 1.236, 1.336, 1.436, 1.545, 1.655],
      }),
      createAttack("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
        atk: [0.551, 0.596, 0.641, 0.705, 0.75, 0.801, 0.872, 0.942, 1.013, 1.09, 1.167],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [2.392, 2.571, 2.751, 2.99, 3.169, 3.349, 3.588, 3.827, 4.066, 4.305, 4.545, 4.784, 5.083],
      }),
    ],
    burstSkill: [
      createAttack("切割伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [1.123, 1.207, 1.291, 1.404, 1.488, 1.572, 1.684, 1.797, 1.909, 2.021, 2.134, 2.246, 2.386],
      }),
      createAttack("绽放伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [1.684, 1.81, 1.937, 2.106, 2.232, 2.358, 2.527, 2.695, 2.864, 3.032, 3.2, 3.369, 3.58],
      }),
      createAttack("2命·霜见雪关扉", AttackType.Burst, ElementType.Cryo, {
        atk: [1.123, 1.207, 1.291, 1.404, 1.488, 1.572, 1.684, 1.797, 1.909, 2.021, 2.134, 2.246, 2.386].map(
          (i) => i * 0.2
        ),
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CRITALHUNT_38P,
      {
        label: "神里流·霰步",
        describe: "结束霰步现身时，使神里绫华在短时间内获得冰元素附魔；获得18%冰元素伤害加成",
        effect: [
          { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Cryo], actionOn: ActionOn.Front },
          { type: BuffType.CryoPrcent, getValue: () => 18 },
        ],
        enable: true,
      },
      {
        label: "天罪国罪镇词",
        describe: "施放神里流·冰华后，神里绫华的普通攻击与重击造成的伤害提升30%",
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => 30 },
          { type: BuffType.StrongPrcent, getValue: () => 30 },
        ],
        enable: false,
      },
      Constellation_Q_3,
      {
        label: "4命·盈缺流返",
        describe: "敌人受到神里流·霜灭的霜见雪关扉造成的伤害后，防御力降低30%",
        effect: [{ type: BuffType.ReduceArmour, getValue: () => -30 }],
        enable: true,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_E_5,
      {
        label: "6命·间水月",
        describe: "每过10秒，神里绫华会获得「薄冰舞踏」，使重击造成的伤害提高298%",
        effect: [{ type: BuffType.StrongPrcent, getValue: () => 298 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000047, "枫原万叶", ElementType.Anemo, WeaponType.Sword)(Rarity.Five, 13348, 297, 807, 60)(
      "UI_AvatarIcon_Kazuha",
      [
        "UI_Talent_S_Kazuha_01",
        "UI_Talent_S_Kazuha_02",
        "UI_Talent_U_Kazuha_01",
        "UI_Talent_S_Kazuha_03",
        "UI_Talent_U_Kazuha_02",
        "UI_Talent_S_Kazuha_04",
      ],
      ["普通攻击·我流剑术", "千早振", "万叶之一刀"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.45, 0.486, 0.523, 0.575, 0.612, 0.654, 0.711, 0.769, 0.826, 0.889, 0.961],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.452, 0.489, 0.526, 0.579, 0.615, 0.657, 0.715, 0.773, 0.831, 0.894, 0.966],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.258, 0.279, 0.3, 0.33, 0.351, 0.375, 0.408, 0.441, 0.474, 0.51, 0.551],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.31, 0.335, 0.36, 0.396, 0.421, 0.45, 0.49, 0.529, 0.569, 0.612, 0.661],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.882, 0.96, 1.038, 1.116, 1.2, 1.3],
      }),
      createAttack("五段伤害·单段", AttackType.Normal, ElementType.Physical, {
        atk: [0.254, 0.274, 0.295, 0.325, 0.345, 0.369, 0.401, 0.433, 0.466, 0.501, 0.542],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.919],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.746, 0.807, 0.868, 0.955, 1.016, 1.085, 1.18, 1.276, 1.371, 1.475, 1.595],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.818, 0.885, 0.951, 1.046, 1.113, 1.189, 1.294, 1.399, 1.503, 1.618, 1.731],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.64, 1.77, 1.9, 2.09, 2.23, 2.38, 2.59, 2.8, 3.01, 3.23, 3.46],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [2.04, 2.21, 2.38, 2.61, 2.78, 2.97, 3.23, 3.49, 3.75, 4.04, 4.33],
      }),
    ],
    elementSkill: [
      createAttack("点按技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.92, 2.06, 2.21, 2.4, 2.54, 2.69, 2.88, 3.07, 3.26, 3.46, 3.65, 3.84, 4.08],
      }),
      createAttack("长按技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.61, 2.8, 3, 3.26, 3.46, 3.65, 3.91, 4.17, 4.43, 4.69, 4.96, 5.22, 5.54],
      }),
    ],
    burstSkill: [
      createAttack("斩击伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [2.62, 2.82, 3.02, 3.28, 3.48, 3.67, 3.94, 4.2, 4.46, 4.72, 4.99, 5.25, 5.58],
      }),
      createAttack("持续伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55],
      }),
      createAttack("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
      }),
      createAttack("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
      }),
      createAttack("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
      }),
      createAttack("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
      }),
    ],
    otherSkill: [
      createAttack("下落攻击·乱岚拨止·水", AttackType.FallingOther, ElementType.Hydro, {
        atk: [2],
      }),
      createAttack("下落攻击·乱岚拨止·火", AttackType.FallingOther, ElementType.Pyro, {
        atk: [2],
      }),
      createAttack("下落攻击·乱岚拨止·冰", AttackType.FallingOther, ElementType.Cryo, {
        atk: [2],
      }),
      createAttack("下落攻击·乱岚拨止·雷", AttackType.FallingOther, ElementType.Electro, {
        atk: [2],
      }),
    ],
    buffs: [
      S_80_MYSTERY_115,
      {
        label: "风物之诗咏[水增伤]",
        describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
        effect: [
          {
            type: BuffType.HydroPrcent,
            getValue: (data) => data.elementalMystery * 0.04,
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "风物之诗咏[火增伤]",
        describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
        effect: [
          {
            type: BuffType.PyroPrcent,
            getValue: (data) => data.elementalMystery * 0.04,
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "风物之诗咏[冰增伤]",
        describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
        effect: [
          {
            type: BuffType.CryoPrcent,
            getValue: (data) => data.elementalMystery * 0.04,
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "风物之诗咏[雷增伤]",
        describe: "枫原万叶触发扩散反应后，枫原万叶的每点元素精通，会为队伍中所有角色提供0.04%对应元素伤害加成",
        effect: [
          {
            type: BuffType.ElectroPrcent,
            getValue: (data) => data.elementalMystery * 0.04,
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·山岚残芯",
        describe: "万叶之一刀的流风秋野持续期间内，枫原万叶自己的元素精通提升200点",
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 200 }],
        enable: false,
        target: BuffTarget.Self,
        condition: ({ constellation }) => constellation >= 2,
      },
      {
        label: "2命·山岚残芯",
        describe: "万叶之一刀的流风秋野持续期间内，其中的场上角色的元素精通提升200点",
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 200 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 2,
        target: BuffTarget.Other,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·血赤叶红",
        describe:
          "枫原万叶施放千早振或万叶之一刀后的5秒内，获得风元素附魔，并且枫原万叶的每点元素精通，都会使他的普通攻击、重击、下落攻击造成的伤害提高0.2%",
        effect: [
          {
            type: BuffType.NormalPrcent,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.2,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.StrongPrcent,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.2,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.FallingPrcent,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.2,
            actionOn: ActionOn.Indirect,
          },
          { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Anemo] },
        ],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000051, "优菈", ElementType.Cryo, WeaponType.GreatSword)(Rarity.Five, 13226, 342, 751, 80)(
      "UI_AvatarIcon_Eula",
      [
        "UI_Talent_S_Eula_02",
        "UI_Talent_S_Eula_01",
        "UI_Talent_U_Eula_01",
        "UI_Talent_S_Eula_03",
        "UI_Talent_U_Eula_02",
        "UI_Talent_S_Eula_04",
      ],
      ["普通攻击·西风剑术·宗室", "冰潮的涡旋", "凝浪之光剑"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.8973, 0.9704, 1.0434, 1.1477, 1.2208, 1.3043, 1.419, 1.5338, 1.6486, 1.7738, 1.9172],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.9355, 1.0117, 1.0878, 1.1966, 1.2727, 1.3598, 1.4794, 1.5991, 1.7187, 1.8493, 1.9988],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.568, 0.614, 0.66, 0.727, 0.773, 0.826, 0.898, 0.971, 1.044, 1.123, 1.214],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.568, 0.614, 0.66, 0.727, 0.773, 0.826, 0.898, 0.971, 1.044, 1.123, 1.214],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.1264, 1.2181, 1.3098, 1.4408, 1.5325, 1.6373, 1.7813, 1.9254, 2.0695, 2.2267, 2.4068],
      }),
      createAttack("五段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.718, 0.777, 0.835, 0.919, 0.977, 1.044, 1.136, 1.228, 1.32, 1.42, 1.535],
      }),
      createAttack("五段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.718, 0.777, 0.835, 0.919, 0.977, 1.044, 1.136, 1.228, 1.32, 1.42, 1.535],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.688, 0.744, 0.8, 0.88, 0.936, 1, 1.088, 1.176, 1.264, 1.36, 1.47],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.25, 1.35, 1.45, 1.6, 1.7, 1.81, 1.97, 2.13, 2.29, 2.47, 2.66],
      }),
      createAttack("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.7459, 0.8066, 0.8673, 0.954, 1.0147, 1.0841, 1.1795, 1.2749, 1.3703, 1.4744, 1.5937],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.491, 1.613, 1.734, 1.908, 2.029, 2.168, 2.359, 2.549, 2.74, 2.948, 3.187],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.863, 2.014, 2.166, 2.383, 2.534, 2.708, 2.946, 3.184, 3.422, 3.683, 3.97],
      }),
    ],
    elementSkill: [
      createAttack("点按伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [1.464, 1.5738, 1.6836, 1.83, 1.9398, 2.0496, 2.196, 2.3424, 2.4888, 2.6352, 2.7816, 2.928, 3.111],
      }),
      createAttack("长按伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [2.456, 2.6402, 2.8244, 3.07, 3.2542, 3.4384, 3.684, 3.9296, 4.1752, 4.4208, 4.6664, 4.912, 5.219],
      }),
      createAttack("冰涡之剑伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [2.456, 2.6402, 2.8244, 3.07, 3.2542, 3.4384, 3.684, 3.9296, 4.1752, 4.4208, 4.6664, 4.912, 5.219],
      }),
      createAttack("光降之剑基础伤害", AttackType.Burst, ElementType.Physical, {
        atk: [3.6705, 3.9692, 4.268, 4.6948, 4.9936, 5.335, 5.8045, 6.274, 6.7434, 7.2556, 7.8425, 8.5326, 9.2227],
      }),
      createAttack(
        "光降之剑总伤害",
        AttackType.Burst,
        ElementType.Physical,
        {
          atk: [3.6705, 3.9692, 4.268, 4.6948, 4.9936, 5.335, 5.8045, 6.274, 6.7434, 7.2556, 7.8425, 8.5326, 9.2227],
        },
        "Eula"
      ),
    ],
    otherSkill: [],
    buffs: [
      S_80_CRITALHUNT_38P,
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
              return -[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25][data.skillLevel + data.skillLevelAdd - 1];
            },
          },
          {
            type: BuffType.EnemyCryoResistance,
            getValue: (data) => {
              return -[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25][data.skillLevel + data.skillLevelAdd - 1];
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
            type: BuffType.BurstFixed,
            getValue: (data, s) => {
              let atk = data.baseATK + data.extraATK + data.extraATK_NT;
              return (
                [0.7499, 0.811, 0.872, 0.9592, 1.0202, 1.09, 1.1859, 1.2818, 1.3778, 1.4824, 1.6023, 1.7433, 1.8843][
                  data.burstLevel + data.burstLevelAdd - 1
                ] *
                s *
                atk
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
    ],
  },
  {
    ...cha(10000046, "胡桃", ElementType.Pyro, WeaponType.Polearms)(Rarity.Five, 15552, 106, 876, 60)(
      "UI_AvatarIcon_Hutao",
      [
        "UI_Talent_S_Hutao_03",
        "UI_Talent_S_Hutao_01",
        "UI_Talent_U_Hutao_01",
        "UI_Talent_S_Hutao_02",
        "UI_Talent_U_Hutao_02",
        "UI_Talent_S_Hutao_04",
      ],
      ["普通攻击·往生秘传枪法", "蝶引来生", "安神秘法"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.469, 0.501, 0.533, 0.575, 0.607, 0.645, 0.693, 0.741, 0.789, 0.836, 0.884],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.483, 0.515, 0.548, 0.592, 0.625, 0.663, 0.713, 0.762, 0.812, 0.861, 0.91],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.611, 0.652, 0.694, 0.749, 0.791, 0.839, 0.902, 0.964, 1.027, 1.089, 1.152],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.656, 0.701, 0.746, 0.806, 0.85, 0.903, 0.97, 1.037, 1.104, 1.171, 1.238],
      }),
      createAttack("五段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.333, 0.355, 0.378, 0.408, 0.431, 0.458, 0.492, 0.526, 0.56, 0.594, 0.628],
      }),
      createAttack("五段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.352, 0.376, 0.4, 0.432, 0.456, 0.484, 0.52, 0.556, 0.592, 0.628, 0.664],
      }),
      createAttack("六段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.86, 0.918, 0.977, 1.055, 1.114, 1.182, 1.27, 1.358, 1.446, 1.534, 1.622],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.36, 1.452, 1.545, 1.667, 1.761, 1.869, 2.009, 2.148, 2.287, 2.426, 2.565],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.654, 0.699, 0.743, 0.803, 0.848, 0.9, 0.966, 1.033, 1.1, 1.167, 1.234],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.31, 1.4, 1.49, 1.61, 1.69, 1.8, 1.93, 2.07, 2.2, 2.33, 2.47],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.63, 1.75, 1.86, 2.01, 2.12, 2.25, 2.41, 2.58, 2.75, 2.92, 3.08],
      }),
    ],
    elementSkill: [
      createAttack("血梅香伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.64, 0.69, 0.74, 0.8, 0.85, 0.9, 0.96, 1.02, 1.09, 1.15, 1.22, 1.28, 1.36],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [3.03, 3.21, 3.4, 3.63, 3.81, 4, 4.23, 4.47, 4.7, 4.94, 5.18, 5.41, 5.65, 5.88],
      }),
      createAttack("低血量时技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [3.79, 4.02, 4.24, 4.54, 4.77, 4.99, 5.29, 5.58, 5.88, 6.17, 6.47, 6.76, 7.06, 7.35],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CRITALHUNT_38P,
      {
        label: "元素战技·蝶引来生",
        describe:
          "基于进入该状态时胡桃的生命值上限，提高胡桃的攻击力。通过这种方式获得的攻击力提升，不能超过胡桃基础攻击力的400%；将攻击伤害转为火元素伤害",
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => {
              let a = [
                0.0384, 0.0407, 0.043, 0.046, 0.0483, 0.0506, 0.0536, 0.0566, 0.0596, 0.0626, 0.0656, 0.0685, 0.0715,
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
        enable: false,
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
        enable: false,
      },
      {
        label: "2命·最不安神晴又复雨",
        describe: "血梅香造成的伤害提高，提高值相当于效果附加时胡桃生命值上限的10%",
        effect: [
          { type: BuffType.SkillFixed, getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.1 },
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
    ],
  },
  {
    ...cha(10000026, "魈", ElementType.Anemo, WeaponType.Polearms)(Rarity.Five, 12736, 349, 799, 70)(
      "UI_AvatarIcon_Xiao",
      [
        "UI_Talent_S_Xiao_01",
        "UI_Talent_S_Xiao_02",
        "UI_Talent_U_Xiao_01",
        "UI_Talent_S_Xiao_03",
        "UI_Talent_U_Xiao_02",
        "UI_Talent_S_Xiao_04",
      ],
      ["普通攻击·卷积微尘", "风轮两立", "靖妖傩舞"]
    ),
    normalAttack: [
      createAttack("一段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.275, 0.294, 0.313, 0.338, 0.357, 0.379, 0.407, 0.435, 0.463, 0.491, 0.52],
      }),
      createAttack("一段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.275, 0.294, 0.313, 0.338, 0.357, 0.379, 0.407, 0.435, 0.463, 0.491, 0.52],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.569, 0.608, 0.647, 0.699, 0.738, 0.783, 0.841, 0.899, 0.958, 1.016, 1.074],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.6855, 0.7323, 0.779, 0.8413, 0.8881, 0.9426, 1.0127, 1.0828, 1.1539, 1.223, 1.2931],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.377, 0.402, 0.428, 0.462, 0.488, 0.518, 0.556, 0.595, 0.633, 0.672, 0.71],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.377, 0.402, 0.428, 0.462, 0.488, 0.518, 0.556, 0.595, 0.633, 0.672, 0.71],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.715, 0.764, 0.813, 0.878, 0.927, 0.984, 1.057, 1.13, 1.203, 1.276, 1.35],
      }),
      createAttack("六段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.958, 1.024, 1.089, 1.176, 1.241, 1.318, 1.416, 1.514, 1.612, 1.71, 1.808],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.21, 1.29, 1.38, 1.49, 1.57, 1.66, 1.79, 1.91, 2.04, 2.16, 2.28],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.8183, 0.8849, 0.9516, 1.0467, 1.1133, 1.1894, 1.2941, 1.3988, 1.5035, 1.6276, 1.7318],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.636, 1.77, 1.903, 2.093, 2.226, 2.378, 2.588, 2.799, 3.006, 3.235, 3.463],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [2.044, 2.21, 2.377, 2.614, 2.781, 2.971, 3.232, 3.494, 3.755, 4.04, 4.325],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.528, 2.7176, 2.9072, 3.16, 3.3496, 3.5392, 3.792, 4.0448, 4.2976, 4.5504, 4.8032, 5.056, 5.372],
      }),
    ],
    burstSkill: [],
    otherSkill: [],
    buffs: [
      S_80_CRITAL_19P,
      {
        label: "元素爆发·靖妖傩舞",
        describe: "将攻击伤害转为风元素伤害；普通攻击/重击/下落攻击伤害提升",
        effect: [
          {
            type: BuffType.NormalPrcent,
            getValue: (data) => {
              return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4][
                data.burstLevel + data.burstLevelAdd - 1
              ];
            },
          },
          {
            type: BuffType.StrongPrcent,
            getValue: (data) => {
              return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4][
                data.burstLevel + data.burstLevelAdd - 1
              ];
            },
          },
          {
            type: BuffType.FallingPrcent,
            getValue: (data) => {
              return [58.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4][
                data.burstLevel + data.burstLevelAdd - 1
              ];
            },
          },
          {
            type: BuffType.Transform,
            getValue: () => EnchantingType[ElementType.Anemo],
          },
        ],
        enable: false,
      },
      {
        label: "2命·空劫·虚空华开敷变",
        describe: "处在队伍后台时，魈自己的元素充能效率提高25%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 25 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      {
        label: "4命·神通·诸苦灭尽",
        describe: "魈的生命值低于50%时，获得100％的防御力提升",
        effect: [{ type: BuffType.DEFPrcent, getValue: () => 100 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000037, "甘雨", ElementType.Cryo, WeaponType.Bow)(Rarity.Five, 9797, 335, 630, 60)(
      "UI_AvatarIcon_Ganyu",
      [
        "UI_Talent_S_Ganyu_01",
        "UI_Talent_S_Ganyu_02",
        "UI_Talent_U_Ganyu_01",
        "UI_Talent_S_Ganyu_03",
        "UI_Talent_U_Ganyu_02",
        "UI_Talent_S_Ganyu_04",
      ],
      ["普通攻击·流天射术", "山泽麟迹", "降众天华"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.317, 0.343, 0.369, 0.406, 0.432, 0.461, 0.502, 0.542, 0.583, 0.627, 0.678],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.356, 0.385, 0.414, 0.455, 0.484, 0.518, 0.563, 0.609, 0.654, 0.704, 0.761],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.455, 0.492, 0.529, 0.582, 0.619, 0.661, 0.719, 0.778, 0.836, 0.899, 0.972],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.455, 0.492, 0.529, 0.582, 0.619, 0.661, 0.719, 0.778, 0.836, 0.899, 0.972],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.483, 0.522, 0.561, 0.617, 0.656, 0.701, 0.763, 0.825, 0.886, 0.954, 1.031],
      }),
      createAttack("六段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.576, 0.623, 0.67, 0.737, 0.784, 0.838, 0.911, 0.985, 1.059, 1.139, 1.231],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack(
        "霜华矢命中伤害",
        AttackType.Strong,
        ElementType.Cryo,
        {
          atk: [1.28, 1.38, 1.47, 1.6, 1.7, 1.79, 1.92, 2.05, 2.18, 2.3, 2.43],
        },
        "Ganyu"
      ),
      createAttack(
        "霜华矢·霜华绽发伤害",
        AttackType.Strong,
        ElementType.Cryo,
        {
          atk: [2.18, 2.34, 2.5, 2.72, 2.88, 3.05, 3.26, 3.48, 3.7, 3.92, 4.13],
        },
        "Ganyu"
      ),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81],
      }),
    ],
    burstSkill: [
      createAttack("冰棱伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [0.7, 0.76, 0.81, 0.88, 0.93, 0.98, 1.05, 1.12, 1.19, 1.26, 1.34, 1.41, 1.49, 1.58],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CRITALHUNT_38P,
      {
        label: "唯此一心",
        describe: "霜华矢发射后的5秒内，会使接下来的发射的霜华矢与这些霜华矢引发的霜华绽发的暴击率提高20%",
        effect: [{ type: BuffType.StrongCritcal, getValue: () => 20, special: "Ganyu" }],
        enable: false,
      },
      {
        label: "天地交泰",
        describe: "降众天华领域内的队伍中当前场上角色获得20%冰元素伤害加成",
        effect: [{ type: BuffType.CryoPrcent, getValue: () => 20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "1命·饮露",
        describe: "二段蓄力重击的霜华矢或霜华绽发命中敌人时，会使敌人的冰元素抗性降低15%",
        effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -15 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_Q_3,
      {
        label: "4命·西狩",
        describe: "在降众天华的领域内，敌人受到的伤害会增加，这个效果会随时间逐步加强，至多提升至25%",
        effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => 5 + 5 * s }],
        enable: false,
        shareable: true,
        stack: 4,
        limit: 4,
        stackable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000038, "阿贝多", ElementType.Geo, WeaponType.Sword)(Rarity.Five, 13226, 251, 876, 40)(
      "UI_AvatarIcon_Albedo",
      [
        "UI_Talent_S_Albedo_01",
        "UI_Talent_S_Albedo_02",
        "UI_Talent_U_Albedo_01",
        "UI_Talent_S_Albedo_03",
        "UI_Talent_U_Albedo_02",
        "UI_Talent_S_Albedo_04",
      ],
      ["普通攻击·西风剑术·白", "创生法·拟造阳华", "诞生式·大地之潮"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.367, 0.3973, 0.4272, 0.4699, 0.4998, 0.534, 0.581, 0.628, 0.675, 0.7262, 0.785],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.367, 0.3973, 0.4272, 0.4699, 0.4998, 0.534, 0.581, 0.628, 0.675, 0.7262, 0.785],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.475, 0.513, 0.551, 0.607, 0.645, 0.689, 0.75, 0.811, 0.872, 0.938, 1.014],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.498, 0.538, 0.579, 0.636, 0.677, 0.723, 0.787, 0.85, 0.914, 0.984, 1.063],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.621, 0.671, 0.722, 0.794, 0.845, 0.902, 0.981, 1.061, 1.14, 1.227, 1.326],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.473, 0.511, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.935, 1.011],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.602, 0.651, 0.7, 0.77, 0.819, 0.875, 0.952, 1.029, 1.106, 1.19, 1.286],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Geo, {
        atk: [1.304, 1.4018, 1.4996, 1.63, 1.7278, 1.8256, 1.956, 2.0864, 2.2168, 2.3472, 2.4776, 2.608, 2.771],
      }),
      createAttack(
        "刹那之花伤害",
        AttackType.Skill,
        ElementType.Geo,
        {
          def: [1.34, 1.4362, 1.5364, 1.67, 1.7702, 1.8704, 2.004, 2.1376, 2.2712, 2.4048, 2.5384, 2.672, 2.839],
        },
        "Albedo"
      ),
    ],
    burstSkill: [
      createAttack("爆发伤害", AttackType.Burst, ElementType.Geo, {
        atk: [3.672, 3.9474, 4.2228, 4.59, 4.8654, 5.1408, 5.508, 5.8752, 6.2424, 6.6096, 6.9768, 7.344, 7.803, 8.262],
      }),
      createAttack("生灭之花", AttackType.Burst, ElementType.Geo, {
        atk: [0.72, 0.774, 0.828, 0.9, 0.954, 1.008, 1.08, 1.152, 1.224, 1.296, 1.368, 1.44, 1.53, 1.62],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_GEO_28P,
      {
        label: "白垩色的威压",
        describe: "创生法·拟造阳华的刹那之花对生命值低于50%的敌人造成的伤害提高25%",
        effect: [{ type: BuffType.SkillPrcent, getValue: () => 25, special: "Albedo" }],
        enable: false,
      },
      {
        label: "瓶中人的天慧",
        describe: "施放诞生式·大地之潮时，使附近的队伍中角色的元素精通提高125点",
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 125 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·显生之宙",
        describe:
          "创生法·拟造阳华的刹那之花绽放时，会为阿贝多赋予生灭计数效果，每消耗一层生灭计数，诞生式·大地之潮会提高等同于阿贝多防御力的30%的伤害",
        effect: [
          {
            type: BuffType.BurstFixed,
            getValue: (data, s) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.3 * s,
          },
        ],
        enable: false,
        stackable: true,
        stack: 0,
        limit: 4,
        condition: ({ constellation }) => constellation >= 2,
        stackText: "生灭计数",
      },
      Constellation_E_3,
      {
        label: "4命·神性之陨",
        describe: "处于阳华的领域中的队伍中当前场上角色，造成的下落攻击伤害提高30%",
        effect: [{ type: BuffType.FallingPrcent, getValue: () => 30 }],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_Q_5,
      {
        label: "6命·无垢之土",
        describe: "处在阳华的领域中的队伍中当前场上角色，若处于结晶反应产生的护盾庇护下，造成的伤害提高17%",
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => 17 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000030, "钟离", ElementType.Geo, WeaponType.Polearms)(Rarity.Five, 14695, 251, 738, 40)(
      "UI_AvatarIcon_Zhongli",
      [
        "UI_Talent_S_Zhongli_01",
        "UI_Talent_S_Zhongli_02",
        "UI_Talent_U_Zhongli_01",
        "UI_Talent_S_Zhongli_03",
        "UI_Talent_U_Zhongli_02",
        "UI_Talent_S_Zhongli_04",
      ],
      ["普通攻击·岩雨", "元素战技·地心", "元素爆发·天星"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.308, 0.333, 0.358, 0.394, 0.419, 0.448, 0.487, 0.526, 0.565, 0.608, 0.657],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.314, 0.337, 0.362, 0.399, 0.424, 0.453, 0.493, 0.533, 0.572, 0.616, 0.666],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.386, 0.417, 0.449, 0.493, 0.525, 0.561, 0.61, 0.659, 0.709, 0.763, 0.824],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.429, 0.464, 0.499, 0.549, 0.584, 0.624, 0.679, 0.734, 0.789, 0.849, 0.917],
      }),
      createAttack("五段伤害·单段", AttackType.Normal, ElementType.Physical, {
        atk: [0.108, 0.116, 0.125, 0.138, 0.146, 0.156, 0.17, 0.184, 0.198, 0.213, 0.23],
      }),
      createAttack("六段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.545, 0.589, 0.634, 0.697, 0.741, 0.792, 0.862, 0.932, 1.001, 1.077, 1.164],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.11, 1.2, 1.29, 1.42, 1.51, 1.61, 1.76, 1.9, 2.04, 2.2, 2.37],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("岩脊伤害", AttackType.Skill, ElementType.Geo, {
        atk: [0.16, 0.172, 0.184, 0.2, 0.212, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32, 0.34],
      }),
      createAttack("共鸣伤害", AttackType.Skill, ElementType.Geo, {
        atk: [0.32, 0.344, 0.368, 0.4, 0.424, 0.448, 0.48, 0.512, 0.544, 0.576, 0.608, 0.64, 0.68],
      }),
      createAttack("长按伤害", AttackType.Skill, ElementType.Geo, {
        atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Geo, {
        atk: [4.01, 4.44, 4.88, 5.42, 5.91, 6.4, 7.05, 7.7, 8.35, 9, 9.65, 10.3, 10.84, 11.38],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_GEO_28P,
      {
        label: "悬岩宸断",
        describe: "玉璋护盾受到伤害时，处于玉璋护盾庇护下的角色，护盾强效提升5%；",
        effect: [{ type: BuffType.ShieldStrong, getValue: (_, s) => s * 5 }],
        enable: false,
        stackable: true,
        stack: 0,
        limit: 5,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "玉璋护盾",
        describe: "处于玉璋护盾庇护下的角色，会使附近小范围内敌人的所有元素抗性与物理抗性降低20%",
        effect: [
          { type: BuffType.EnemyAnemoResistance, getValue: () => -20 },
          { type: BuffType.EnemyCryoResistance, getValue: () => -20 },
          { type: BuffType.EnemyDendroResistance, getValue: () => -20 },
          { type: BuffType.EnemyElectroResistance, getValue: () => -20 },
          { type: BuffType.EnemyGeoResistance, getValue: () => -20 },
          { type: BuffType.EnemyHydroResistance, getValue: () => -20 },
          { type: BuffType.EnemyPhysicalResistance, getValue: () => -20 },
          { type: BuffType.EnemyPyroResistance, getValue: () => -20 },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      {
        label: "炊金馔玉",
        describe:
          "基于生命值上限，钟离的以下攻击造成的伤害提高；普通攻击、重击与下落攻击造成的伤害提高值：生命值上限的1.39%；地心的岩脊、共鸣伤害与长按伤害提高值：生命值上限的1.9%；天星伤害提高值：生命值上限的33%",
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.0139,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.FallingFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.0139,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.StrongFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.0139,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.SkillFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.019,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.BurstFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.33,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000033, "达达利亚", ElementType.Hydro, WeaponType.Bow)(Rarity.Five, 13103, 301, 815, 60)(
      "UI_AvatarIcon_Tartaglia",
      [
        "UI_Talent_S_Tartaglia_01",
        "UI_Talent_S_Tartaglia_02",
        "UI_Talent_U_Tartaglia_01",
        "UI_Talent_S_Tartaglia_05",
        "UI_Talent_U_Tartaglia_02",
        "UI_Talent_S_Tartaglia_04",
      ],
      ["普通攻击·断雨", "魔王武装·狂澜", "极恶技·尽灭闪"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.413, 0.446, 0.48, 0.528, 0.562, 0.6, 0.653, 0.706, 0.758, 0.816, 0.874],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.463, 0.5, 0.538, 0.592, 0.629, 0.673, 0.732, 0.791, 0.85, 0.915, 0.979],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.554, 0.599, 0.644, 0.708, 0.753, 0.805, 0.876, 0.947, 1.018, 1.095, 1.172],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.57, 0.617, 0.663, 0.729, 0.776, 0.829, 0.902, 0.975, 1.048, 1.127, 1.207],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.609, 0.658, 0.708, 0.779, 0.828, 0.885, 0.963, 1.041, 1.119, 1.204, 1.289],
      }),
      createAttack("六段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.728, 0.787, 0.846, 0.931, 0.99, 1.058, 1.151, 1.244, 1.337, 1.438, 1.54],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Hydro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("断流·闪 伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.124, 0.133, 0.143, 0.155, 0.164, 0.174, 0.186, 0.198, 0.211, 0.223, 0.236],
      }),
      createAttack("断流·破 伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.62, 0.667, 0.713, 0.775, 0.822, 0.868, 0.93, 0.992, 1.054, 1.116, 1.178],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("状态激发伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.72, 0.77, 0.83, 0.9, 0.95, 1.01, 1.08, 1.15, 1.22, 1.3, 1.37, 1.44, 1.53],
      }),
      createAttack("一段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.389, 0.42, 0.452, 0.497, 0.529, 0.565, 0.615, 0.664, 0.714, 0.768, 0.823, 0.877, 0.931],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.416, 0.45, 0.484, 0.532, 0.566, 0.605, 0.658, 0.711, 0.765, 0.823, 0.881, 0.939, 0.997],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.563, 0.609, 0.655, 0.721, 0.766, 0.819, 0.891, 0.963, 1.035, 1.114, 1.192, 1.271, 1.349],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.599, 0.648, 0.697, 0.767, 0.815, 0.871, 0.948, 1.025, 1.101, 1.185, 1.269, 1.352, 1.436],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.553, 0.598, 0.643, 0.707, 0.752, 0.804, 0.874, 0.945, 1.016, 1.093, 1.17, 1.247, 1.325],
      }),
      createAttack("六段伤害·1", AttackType.Normal, ElementType.Hydro, {
        atk: [0.354, 0.383, 0.412, 0.453, 0.482, 0.515, 0.56, 0.606, 0.651, 0.7, 0.75, 0.799, 0.849],
      }),
      createAttack("六段伤害·2", AttackType.Normal, ElementType.Hydro, {
        atk: [0.377, 0.407, 0.438, 0.482, 0.512, 0.548, 0.596, 0.644, 0.692, 0.745, 0.797, 0.85, 0.902],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Hydro, {
        atk: [0.602, 0.651, 0.7, 0.77, 0.819, 0.875, 0.952, 1.029, 1.106, 1.19, 1.274, 1.358, 1.442],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Hydro, {
        atk: [0.72, 0.778, 0.837, 0.921, 0.979, 1.046, 1.138, 1.23, 1.322, 1.423, 1.523, 1.624, 1.724],
      }),
      createAttack("断流·斩 伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.6, 0.65, 0.7, 0.77, 0.82, 0.88, 0.95, 1.03, 1.11, 1.19, 1.27, 1.36, 1.44],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害·近战", AttackType.Burst, ElementType.Hydro, {
        atk: [4.64, 4.99, 5.34, 5.8, 6.15, 6.5, 6.96, 7.42, 7.89, 8.35, 8.82, 9.28, 9.86, 10.44],
      }),
      createAttack("技能伤害·远程", AttackType.Burst, ElementType.Hydro, {
        atk: [3.78, 4.07, 4.35, 4.73, 5.01, 5.3, 5.68, 6.05, 6.43, 6.81, 7.19, 7.57, 8.04, 8.51],
      }),
      createAttack("断流·爆伤害", AttackType.Burst, ElementType.Hydro, {
        atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55, 2.7],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_HYDRO_28P,
      {
        label: "诸武精通",
        describe: "队伍中自己的角色普通攻击等级提高1级",
        effect: [{ type: BuffType.NormalLevel, getValue: () => 1, actionOn: ActionOn.Front }],
        enable: true,
        shareable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000029, "可莉", ElementType.Pyro, WeaponType.Magic)(Rarity.Five, 10287, 311, 615, 60)(
      "UI_AvatarIcon_Klee",
      [
        "UI_Talent_S_Klee_01",
        "UI_Talent_S_Klee_02",
        "UI_Talent_U_Klee_01",
        "UI_Talent_S_Klee_03",
        "UI_Talent_U_Klee_02",
        "UI_Talent_S_Klee_04",
      ],
      ["普通攻击·砰砰", "蹦蹦炸弹", "轰轰火花"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.722, 0.776, 0.83, 0.902, 0.956, 1.01, 1.08, 1.15, 1.23, 1.3, 1.37],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.624, 0.671, 0.718, 0.78, 0.827, 0.874, 0.936, 0.998, 1.06, 1.12, 1.19],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.899, 0.967, 1.03, 1.12, 1.19, 1.26, 1.35, 1.44, 1.53, 1.62, 1.71],
      }),
      createAttack("重击", AttackType.Strong, ElementType.Pyro, {
        atk: [1.57, 1.69, 1.81, 1.97, 2.09, 2.2, 2.36, 2.52, 2.68, 2.83, 3],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Pyro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("蹦蹦炸弹伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.952, 1.02, 1.09, 1.19, 1.26, 1.33, 1.43, 1.52, 1.62, 1.71, 1.81, 1.9, 2.02],
      }),
      createAttack("诡雷伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
      }),
    ],
    burstSkill: [
      createAttack("轰轰火花伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.426, 0.458, 0.49, 0.533, 0.565, 0.597, 0.64, 0.682, 0.725, 0.768, 0.81, 0.852, 0.906, 0.959],
      }),
    ],
    otherSkill: [
      createAttack("一触即发", AttackType.Other, ElementType.Pyro, {
        atk: [5.55],
      }),
    ],
    buffs: [
      S_80_PYRO_28P,
      {
        label: "砰砰礼物",
        describe:
          "蹦蹦炸弹与普通攻击造成伤害时，有50%的几率赋予可莉一朵爆裂火花。施放重击时将消耗爆裂火花，使本次重击不消耗体力，造成的伤害提升50%",
        effect: [{ type: BuffType.StrongPrcent, getValue: () => 50 }],
        enable: false,
      },
      {
        label: "2命·破破弹片",
        describe: "蹦蹦炸弹的诡雷会使敌人防御力降低23%",
        effect: [{ type: BuffType.ReduceArmour, getValue: () => -23 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·火力全开",
        describe: "施放轰轰火花后的25秒内，队伍中所有角色获得10%火元素伤害加成",
        effect: [{ type: BuffType.PyroPrcent, getValue: () => 10 }],
        shareable: true,
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000022, "温迪", ElementType.Anemo, WeaponType.Bow)(Rarity.Five, 10531, 263, 669, 60)(
      "UI_AvatarIcon_Venti",
      [
        "UI_Talent_S_Venti_01",
        "UI_Talent_S_Venti_02",
        "UI_Talent_U_Venti_02",
        "UI_Talent_S_Venti_03",
        "UI_Talent_U_Venti_01",
        "UI_Talent_S_Venti_04",
      ],
      ["普通攻击·神代射术", "高天之歌", "风神之诗"]
    ),
    normalAttack: [
      createAttack("一段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.204, 0.22, 0.237, 0.261, 0.277, 0.296, 0.322, 0.348, 0.375, 0.403, 0.435],
      }),
      createAttack("一段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.204, 0.22, 0.237, 0.261, 0.277, 0.296, 0.322, 0.348, 0.375, 0.403, 0.435],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.444, 0.48, 0.516, 0.568, 0.604, 0.645, 0.702, 0.759, 0.815, 0.877, 0.948],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.524, 0.566, 0.609, 0.67, 0.713, 0.761, 0.828, 0.895, 0.962, 1.035, 1.12],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.507, 0.548, 0.589, 0.648, 0.689, 0.736, 0.801, 0.866, 0.931, 1.001, 1.082],
      }),
      createAttack("六段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.71, 0.767, 0.825, 0.908, 0.965, 1.031, 1.122, 1.213, 1.304, 1.403, 1.516],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.937],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("点按伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.76, 2.97, 3.17, 3.45, 3.66, 3.86, 4.14, 4.42, 4.69, 4.97, 5.24, 5.52, 5.87],
      }),
      createAttack("长按伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [3.8, 4.09, 4.37, 4.75, 5.04, 5.32, 5.7, 6.08, 6.46, 6.84, 7.22, 7.6, 8.08],
      }),
    ],
    burstSkill: [
      createAttack("持续伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.376, 0.404, 0.432, 0.47, 0.498, 0.526, 0.564, 0.602, 0.639, 0.677, 0.714, 0.752, 0.799, 0.846],
      }),
      createAttack("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
      }),
      createAttack("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
      }),
      createAttack("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
      }),
      createAttack("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CHARGE_32P,
      {
        label: "2命·眷恋的泠风",
        describe: `高天之歌会使敌人的风元素抗性与物理抗性降低12%。 被高天之歌击飞的敌人在落地前，风元素抗性与物理抗性额外降低12%`,
        effect: [
          { type: BuffType.EnemyAnemoResistance, getValue: (_, s) => [-12, -24][s] || 0 },
          { type: BuffType.EnemyPhysicalResistance, getValue: (_, s) => [-12, -24][s] || 0 },
        ],
        enable: false,
        stackable: true,
        stack: 0,
        limit: 1,
        stackText: "敌人被击飞",
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      {
        label: "4命·自由的凛风",
        describe: `温迪获取元素晶球或元素微粒后，获得25％的风元素伤害加成`,
        effect: [{ type: BuffType.AnemoPrcent, getValue: () => 25 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_E_5,
      {
        label: "6命·抗争的暴风",
        describe: `受风神之诗伤害的敌人，风元素抗性降低20％； 若产生了元素转化，则使转换的元素抗性也降低20％`,
        effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·抗争的暴风·水",
        describe: `受风神之诗伤害的敌人，风元素抗性降低20％； 若产生了元素转化，则使转换的元素抗性也降低20％`,
        effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·抗争的暴风·火",
        describe: `受风神之诗伤害的敌人，风元素抗性降低20％； 若产生了元素转化，则使转换的元素抗性也降低20％`,
        effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·抗争的暴风·冰",
        describe: `受风神之诗伤害的敌人，风元素抗性降低20％； 若产生了元素转化，则使转换的元素抗性也降低20％`,
        effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·抗争的暴风·雷",
        describe: `受风神之诗伤害的敌人，风元素抗性降低20％； 若产生了元素转化，则使转换的元素抗性也降低20％`,
        effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000003, "琴", ElementType.Anemo, WeaponType.Sword)(Rarity.Five, 14695, 239, 769, 80)(
      "UI_AvatarIcon_Qin",
      [
        "UI_Talent_S_Qin_01",
        "UI_Talent_S_Qin_02",
        "UI_Talent_U_Qin_02",
        "UI_Talent_S_Qin_03",
        "UI_Talent_U_Qin_01",
        "UI_Talent_S_Qin_04",
      ],
      ["普通攻击·西风剑术", "风压剑", "蒲公英之风"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.483, 0.523, 0.562, 0.618, 0.658, 0.703, 0.764, 0.826, 0.888, 0.955, 1.03],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.456, 0.493, 0.53, 0.583, 0.62, 0.663, 0.721, 0.779, 0.837, 0.901, 0.974],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.603, 0.652, 0.701, 0.771, 0.82, 0.876, 0.95, 1.03, 1.11, 1.19, 1.29],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.659, 0.712, 0.766, 0.843, 0.896, 0.958, 1.04, 1.13, 1.21, 1.3, 1.41],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.792, 0.857, 0.921, 1.01, 1.08, 1.15, 1.25, 1.35, 1.46, 1.57, 1.69],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.62, 1.75, 1.88, 2.07, 2.2, 2.36, 2.56, 2.77, 2.98, 3.2, 3.46],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.92, 3.14, 3.36, 3.65, 3.87, 4.09, 4.38, 4.67, 4.96, 5.26, 5.55, 5.84, 6.2],
      }),
    ],
    burstSkill: [
      createAttack("爆发伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [4.25, 4.57, 4.89, 5.31, 5.63, 5.95, 6.37, 6.8, 7.22, 7.65, 8.07, 8.5, 9.03, 9.56],
      }),
      createAttack("出入领域伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.784, 0.843, 0.902, 0.98, 1.04, 1.1, 1.18, 1.25, 1.33, 1.41, 1.49, 1.57, 1.67, 1.76],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_HEALADD_22P,
      {
        label: "1命·流转剑脊的暴风",
        describe: "风压剑长按超过1秒后，提升牵引速度，并使造成的伤害提升40%",
        effect: [{ type: BuffType.SkillPrcent, getValue: () => 40 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 1,
      },
      Constellation_Q_3,
      {
        label: "4命·蒲公英的国土",
        describe: "在蒲公英之风的领域内，所有敌人的风元素抗性下降40％",
        effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -40 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000042, "刻晴", ElementType.Electro, WeaponType.Sword)(Rarity.Five, 13103, 323, 799, 40)(
      "UI_AvatarIcon_Keqing",
      [
        "UI_Talent_S_Keqing_01",
        "UI_Talent_S_Keqing_02",
        "UI_Talent_U_Keqing_01",
        "UI_Talent_S_Keqing_03",
        "UI_Talent_U_Keqing_02",
        "UI_Talent_S_Keqing_04",
      ],
      ["普通攻击·云来剑法", "星斗归位", "天街巡游"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.41, 0.444, 0.477, 0.525, 0.558, 0.596, 0.649, 0.701, 0.754, 0.811, 0.868],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.41, 0.444, 0.477, 0.525, 0.558, 0.596, 0.649, 0.701, 0.754, 0.811, 0.868],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.544, 0.589, 0.633, 0.696, 0.741, 0.791, 0.861, 0.931, 1, 1.08, 1.152],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.315, 0.34, 0.366, 0.403, 0.428, 0.458, 0.498, 0.538, 0.578, 0.622, 0.666],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.344, 0.372, 0.4, 0.44, 0.468, 0.5, 0.544, 0.588, 0.632, 0.68, 0.728],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.67, 0.724, 0.779, 0.857, 0.911, 0.974, 1.06, 1.15, 1.23, 1.32, 1.42],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.77, 0.83, 0.893, 0.982, 1.04, 1.12, 1.21, 1.31, 1.41, 1.52, 1.63],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.86, 0.93, 1, 1.1, 1.17, 1.25, 1.36, 1.47, 1.58, 1.7, 1.82],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("雷楔伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.5, 0.542, 0.58, 0.63, 0.668, 0.706, 0.756, 0.806, 0.86, 0.907, 0.958, 1.01, 1.07, 1.13],
      }),
      createAttack("斩击伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.68, 1.81, 1.93, 2.1, 2.23, 2.35, 2.52, 2.69, 2.86, 3.02, 3.19, 3.36, 3.57, 3.78],
      }),
      createAttack("雷暴连斩伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.84, 0.903, 0.966, 1.05, 1.11, 1.18, 1.26, 1.34, 1.43, 1.51, 1.6, 1.68, 1.79, 1.89],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
      }),
      createAttack("连斩伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54],
      }),
      createAttack("最后一击伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.89, 2.03, 2.17, 2.36, 2.5, 2.64, 2.83, 3.02, 3.21, 3.4, 3.59, 3.78, 4.01, 4.25],
      }),
    ],
    otherSkill: [
      createAttack("1命·雷厉", AttackType.Skill, ElementType.Electro, {
        atk: [0.5],
      }),
    ],
    buffs: [
      S_80_CRITALHUNT_38P,
      {
        label: "抵天雷罚",
        describe: "雷楔存在期间再次施放星斗归位后的5秒内，刻晴获得雷元素附魔",
        effect: [{ type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Electro] }],
        enable: false,
      },
      {
        label: "玉衡之贵",
        describe: "施放天街巡游时，刻晴的暴击率提升15%，元素充能效率提升15%",
        effect: [
          { type: BuffType.Critcal, getValue: () => 15 },
          { type: BuffType.ChargeFixed, getValue: () => 15 },
        ],
        enable: false,
      },
      Constellation_Q_3,
      {
        label: "4命·调律",
        describe: "刻晴触发雷元素相关反应后的10秒内，攻击力提升25%",
        effect: [{ type: BuffType.ATKPrcent, getValue: () => 25 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_E_5,
      {
        label: "6命·廉贞",
        describe:
          "进行普通攻击、重击、施放元素战技或元素爆发时，刻晴获得6%雷元素伤害加成，由普通攻击、重击、元素战技或元素爆发引起的效果分别独立存在",
        effect: [{ type: BuffType.ElectroPrcent, getValue: (_, s) => 6 * s }],
        enable: false,
        stackable: true,
        stack: 4,
        limit: 4,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000016, "迪卢克", ElementType.Pyro, WeaponType.GreatSword)(Rarity.Five, 12981, 335, 784, 40)(
      "UI_AvatarIcon_Diluc",
      [
        "UI_Talent_S_Diluc_01",
        "UI_Talent_S_Diluc_02",
        "UI_Talent_U_Diluc_01",
        "UI_Talent_S_Diluc_03",
        "UI_Talent_U_Diluc_02",
        "UI_Talent_S_Diluc_04",
      ],
      ["普通攻击·淬炼之剑", "逆焰之刃", "黎明"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.897, 0.97, 1.04, 1.15, 1.22, 1.3, 1.42, 1.53, 1.65, 1.77, 1.92],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.876, 0.948, 1.02, 1.12, 1.19, 1.27, 1.39, 1.5, 1.61, 1.73, 1.87],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.988, 1.07, 1.15, 1.26, 1.34, 1.44, 1.56, 1.69, 1.82, 1.95, 2.11],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.34, 1.45, 1.56, 1.71, 1.82, 1.95, 2.12, 2.29, 2.46, 2.65, 2.86],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.688, 0.744, 0.8, 0.88, 0.94, 1, 1.09, 1.18, 1.26, 1.36, 1.47],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.25, 1.35, 1.45, 1.6, 1.7, 1.81, 1.97, 2.13, 2.29, 2.47, 2.66],
      }),
      createAttack("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.895, 0.968, 1.04, 1.14, 1.22, 1.3, 1.42, 1.53, 1.64, 1.77, 1.89],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.79, 1.94, 2.08, 2.29, 2.43, 2.6, 2.83, 3.06, 3.29, 3.54, 3.79],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [2.24, 2.42, 2.6, 2.86, 3.04, 3.25, 3.54, 3.82, 4.11, 4.42, 4.73],
      }),
    ],
    elementSkill: [
      createAttack("一段伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.944, 1.01, 1.09, 1.18, 1.25, 1.32, 1.42, 1.51, 1.6, 1.7, 1.79, 1.89, 2.01],
      }),
      createAttack(
        "二段伤害",
        AttackType.Skill,
        ElementType.Pyro,
        {
          atk: [0.976, 1.05, 1.12, 1.22, 1.29, 1.37, 1.46, 1.56, 1.66, 1.76, 1.85, 1.95, 2.07],
        },
        "Diluc"
      ),
      createAttack(
        "三段伤害",
        AttackType.Skill,
        ElementType.Pyro,
        {
          atk: [1.29, 1.38, 1.48, 1.61, 1.71, 1.8, 1.93, 2.06, 2.19, 2.32, 2.45, 2.58, 2.74],
        },
        "Diluc"
      ),
    ],
    burstSkill: [
      createAttack("斩击伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [2.04, 2.19, 2.35, 2.55, 2.7, 2.86, 3.06, 3.26, 3.47, 3.67, 3.88, 4.08, 4.34, 4.59],
      }),
      createAttack("持续伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.29, 1.38, 1.48, 1.61, 1.71, 1.8, 1.93, 2.06, 2.19, 2.32, 2.45, 2.58, 2.74],
      }),
      createAttack("爆裂伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.29, 1.38, 1.48, 1.61, 1.71, 1.8, 1.93, 2.06, 2.19, 2.32, 2.45, 2.58, 2.74],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CRITAL_19P,
      {
        label: "元素爆发·熔毁之翼",
        describe: "黎明提供的火元素附魔持续时间延长4秒；此外，在效果持续期间，迪卢克获得20%火元素伤害加成",
        effect: [
          { type: BuffType.PyroPrcent, getValue: () => 20 },
          { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Pyro], actionOn: ActionOn.Front },
        ],
        enable: false,
      },
      {
        label: "1命·罪罚裁断",
        describe: "对生命值高于50％的敌人，迪卢克造成的伤害提高15%",
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => 15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 1,
      },
      {
        label: "2命·炙热余烬",
        describe: "迪卢克受到伤害时，攻击力提高10%，攻击速度提高5%， 该效果至多叠加3层",
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 * s }],
        enable: false,
        stackable: true,
        stack: 3,
        limit: 3,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      {
        label: "4命·流火焦灼",
        describe: "施放逆焰之刃的2秒后，下一段逆焰之刃的伤害提高40%",
        effect: [{ type: BuffType.SkillPrcent, getValue: () => 40, special: "Diluc" }],
        enable: false,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_Q_5,
      {
        label: "6命·清算黑暗的炎之剑",
        describe: "施放逆焰之刃后，接下来6秒内的2次普通攻击的攻击速度提升30%，造成伤害提高30%",
        effect: [{ type: BuffType.NormalPrcent, getValue: () => 30 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000041, "莫娜", ElementType.Hydro, WeaponType.Magic)(Rarity.Five, 10409, 287, 653, 60)(
      "UI_AvatarIcon_Mona",
      [
        "UI_Talent_S_Mona_01",
        "UI_Talent_S_Mona_02",
        "UI_Talent_U_Mona_01",
        "UI_Talent_S_Mona_03",
        "UI_Talent_U_Mona_02",
        "UI_Talent_S_Mona_04",
      ],
      ["普通攻击·因果点破", "水中幻愿", "虚实流动"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.376, 0.404, 0.432, 0.47, 0.498, 0.526, 0.564, 0.602, 0.639, 0.677, 0.714],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.448, 0.482, 0.515, 0.56, 0.594, 0.627, 0.672, 0.717, 0.762, 0.806, 0.851],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.562, 0.604, 0.646, 0.702, 0.744, 0.786, 0.842, 0.899, 0.955, 1.01, 1.07],
      }),
      createAttack("重击", AttackType.Strong, ElementType.Hydro, {
        atk: [1.5, 1.61, 1.72, 1.87, 1.98, 2.1, 2.25, 2.4, 2.55, 2.69, 2.85],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("持续伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.32, 0.344, 0.368, 0.4, 0.424, 0.448, 0.48, 0.512, 0.544, 0.576, 0.608, 0.64, 0.68],
      }),
      createAttack("爆裂伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [1.33, 1.43, 1.53, 1.66, 1.76, 1.86, 1.99, 2.12, 2.26, 2.39, 2.52, 2.66, 2.82],
      }),
    ],
    burstSkill: [
      createAttack("泡影破裂伤害", AttackType.Burst, ElementType.Hydro, {
        atk: [4.42, 4.76, 5.09, 5.53, 5.86, 6.19, 6.64, 7.08, 7.52, 7.96, 8.41, 8.85, 9.4, 9.95],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CHARGE_32P,
      {
        label: "「托付于命运吧!」",
        describe: "莫娜的水元素伤害加成获得额外提升，提升程度相当于她的元素充能效率的20%",
        effect: [
          { type: BuffType.HydroPrcent, getValue: (data) => data.chargeEfficiency * 0.2, actionOn: ActionOn.Indirect },
        ],
        enable: true,
      },
      {
        label: "元素爆发·星命定轨",
        describe: "星异持续时间内，提高目标对象受到的伤害",
        effect: [
          {
            type: BuffType.GlobalPrcent,
            getValue: (data) => {
              return [42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 60, 60, 60, 60][data.burstLevel + data.burstLevelAdd - 1];
            },
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "1命·沉没的预言",
        describe: "队伍中自己的角色攻击命中处于星异状态下的敌人后，蒸发反应造成的伤害提升15%",
        effect: [{ type: BuffType.AmplifiedRate, getValue: () => 15 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      Constellation_Q_3,
      {
        label: "4命·沉没的预言",
        describe: "队伍中所有角色攻击处于星异状态下的敌人时，暴击率提升15%",
        effect: [{ type: BuffType.GlobalCritcal, getValue: () => 15 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      Constellation_E_5,
      {
        label: "6命·厄运的修辞",
        describe:
          "进入虚实流动状态后，每移动1秒，莫娜的下一次重击伤害就增加60%， 通过这种方式至多可以获得180%重击伤害加成",
        effect: [{ type: BuffType.StrongPrcent, getValue: (_, s) => 60 * s }],
        enable: true,
        stack: 3,
        limit: 3,
        stackable: true,
      },
    ],
  },
  {
    ...cha(10000035, "七七", ElementType.Cryo, WeaponType.Sword)(Rarity.Five, 12368, 287, 922, 80)(
      "UI_AvatarIcon_Qiqi",
      [
        "UI_Talent_S_Qiqi_01",
        "UI_Talent_S_Qiqi_02",
        "UI_Talent_U_Qiqi_01",
        "UI_Talent_S_Qiqi_03",
        "UI_Talent_U_Qiqi_02",
        "UI_Talent_S_Qiqi_04",
      ],
      ["普通攻击·云来古剑法", "仙法·寒病鬼差", "仙法·救苦度厄"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.378, 0.408, 0.439, 0.483, 0.514, 0.549, 0.597, 0.645, 0.694, 0.746, 0.799],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.389, 0.42, 0.452, 0.497, 0.529, 0.565, 0.615, 0.664, 0.714, 0.768, 0.823],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.242, 0.261, 0.281, 0.309, 0.329, 0.351, 0.382, 0.413, 0.444, 0.478, 0.511],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.242, 0.261, 0.281, 0.309, 0.329, 0.351, 0.382, 0.413, 0.444, 0.478, 0.511],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.247, 0.267, 0.287, 0.316, 0.336, 0.359, 0.39, 0.422, 0.453, 0.488, 0.522],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.247, 0.267, 0.287, 0.316, 0.336, 0.359, 0.39, 0.422, 0.453, 0.488, 0.522],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.63, 0.682, 0.733, 0.806, 0.858, 0.916, 0.997, 1.08, 1.16, 1.25, 1.33],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.643, 0.696, 0.748, 0.823, 0.875, 0.935, 1.02, 1.1, 1.18, 1.27, 1.36],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.643, 0.696, 0.748, 0.823, 0.875, 0.935, 1.02, 1.1, 1.18, 1.27, 1.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04],
      }),
      createAttack("寒病鬼差伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.68, 0.72, 0.765],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [2.85, 3.06, 3.28, 3.56, 3.77, 3.99, 4.27, 4.56, 4.84, 5.13, 5.41, 5.7, 6.05, 6.41],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_HEALADD_22P,
      {
        label: "延命妙法",
        describe: "处于仙法·寒病鬼差状态下的角色触发元素反应时，受治疗加成提升20%",
        effect: [{ type: BuffType.BeHealAdd, getValue: () => 20 }],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·冰寒蚀骨",
        describe: "对受到冰元素影响的敌人，七七的普通攻击与重击造成的伤害提升15%",
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => 15 },
          { type: BuffType.StrongPrcent, getValue: () => 15 },
        ],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000100, "卡齐娜", ElementType.Geo, WeaponType.Polearms)(Rarity.Four, 11799, 217, 792, 70)(
      "UI_AvatarIcon_Kachina",
      [
        "UI_Talent_S_Kachina_01",
        "UI_Talent_S_Kachina_02",
        "UI_Talent_U_Kachina_01",
        "UI_Talent_S_Kachina_03",
        "UI_Talent_U_Kachina_02",
        "UI_Talent_S_Kachina_04",
      ],
      ["普通攻击·嵴之啮咬", "出击，冲天转转！", "现在，认真时间！"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.494, 0.534, 0.574, 0.632, 0.672, 0.718, 0.781, 0.844, 0.908, 0.976, 1.045],
      }),
      createAttack("二段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.276, 0.298, 0.321, 0.353, 0.375, 0.401, 0.436, 0.471, 0.506, 0.545, 0.583],
      }),
      createAttack("二段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.306, 0.331, 0.356, 0.392, 0.417, 0.445, 0.484, 0.524, 0.563, 0.606, 0.648],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.704, 0.762, 0.819, 0.901, 0.958, 1.024, 1.114, 1.204, 1.294, 1.392, 1.49],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.774, 0.837, 0.9, 0.99, 1.053, 1.126, 1.225, 1.324, 1.423, 1.531, 1.639],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.127, 1.218, 1.31, 1.441, 1.533, 1.638, 1.782, 1.926, 2.07, 2.227, 2.384],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("冲天转转搭乘伤害", AttackType.Skill, ElementType.Geo, {
        def: [0.878, 0.943, 1.009, 1.097, 1.163, 1.229, 1.316, 1.404, 1.492, 1.58, 1.667, 1.755, 1.865],
      }),
      createAttack("冲天转转独立伤害", AttackType.Skill, ElementType.Geo, {
        def: [0.638, 0.685, 0.733, 0.797, 0.845, 0.893, 0.956, 1.02, 1.084, 1.148, 1.211, 1.275, 1.355],
      }),
    ],
    burstSkill: [
      createAttack("现在，认真时间！", AttackType.Burst, ElementType.Geo, {
        def: [3.806, 4.137, 4.425, 4.81, 5.099, 5.387, 5.772, 6.157, 6.542, 6.926, 7.311, 7.696, 8.177],
      }),
    ],
    otherSkill: [
      createAttack("6命·这一次，我一定要赢", AttackType.Other, ElementType.Geo, {
        def: [2],
      }),
    ],
    buffs: [
      A_80_GEO_24P,
      {
        label: "山的回声",
        describe: "队伍中的附近的角色触发「夜魂迸发」后，卡齐娜的岩元素伤害加成提升20%",
        effect: [{ type: BuffType.GeoPrcent, getValue: () => 20 }],
        enable: true,
      },
      {
        label: "坚岩之重",
        describe: "冲天转转造成的伤害提升，提升值相当于卡齐娜的防御力的20%",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.2,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      {
        label: "4命·敌人越多，越要小心",
        describe:
          "现在，认真时间！的超级钻钻领域中，存在的敌人数量为1/2/3/4名或更多时，领域中的队伍中当前场上角色的防御力提升8%/12%/16%/20%",
        effect: [{ type: BuffType.DEFPrcent, getValue: (_, s) => [8, 12, 16, 20][s - 1] || 0 }],
        enable: true,
        stackable: true,
        stack: 4,
        limit: 4,
        shareable: true,
        target: BuffTarget.All,
        stackText: "敌人数量",
      },
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000097, "赛索斯", ElementType.Electro, WeaponType.Bow)(Rarity.Four, 9787, 227, 560, 60)(
      "UI_AvatarIcon_Sethos",
      [
        "UI_Talent_S_Sethos_01",
        "UI_Talent_S_Sethos_02",
        "UI_Talent_U_Sethos_01",
        "UI_Talent_S_Sethos_03",
        "UI_Talent_U_Sethos_02",
        "UI_Talent_S_Sethos_04",
      ],
      ["普通攻击·王家苇箭术", "古仪·鸣砂掣雷", "秘仪·瞑光贯影"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.526, 0.569, 0.612, 0.673, 0.716, 0.765, 0.832, 0.899, 0.967, 1.04, 1.113, 1.187, 1.26, 1.334],
      }),
      createAttack("二段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.238, 0.257, 0.277, 0.304, 0.324, 0.346, 0.376, 0.407, 0.437, 0.47, 0.504, 0.537, 0.57, 0.603],
      }),
      createAttack("二段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.266, 0.288, 0.309, 0.34, 0.362, 0.387, 0.421, 0.455, 0.489, 0.526, 0.563, 0.6, 0.637, 0.674],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.74, 0.8, 0.86, 0.946, 1.007, 1.075, 1.17, 1.265, 1.359, 1.463, 1.566, 1.669, 1.772, 1.875],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.637, 0.694, 0.75, 0.806, 0.867, 0.928, 0.989, 1.051, 1.112],
      }),
      createAttack("一段蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
        atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79],
      }),
      createAttack(
        "贯影箭伤害",
        AttackType.Strong,
        ElementType.Electro,
        {
          atk: [1.4, 1.505, 1.61, 1.75, 1.855, 1.96, 2.1, 2.24, 2.38, 2.52, 2.66, 2.8, 2.975, 3.15],
          em: [1.346, 1.447, 1.547, 1.682, 1.783, 1.884, 2.018, 2.153, 2.288, 2.422, 2.557, 2.691, 2.859, 3.028],
        },
        "Sethos"
      ),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203, 1.282, 1.361, 1.441],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.136, 1.229, 1.321, 1.453, 1.546, 1.652, 1.797, 1.942, 2.088, 2.246, 2.405, 2.563, 2.722, 2.88],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.419, 1.535, 1.65, 1.815, 1.931, 2.063, 2.245, 2.426, 2.608, 2.806, 3.004, 3.202, 3.4, 3.598],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.156, 1.243, 1.329, 1.445, 1.532, 1.618, 1.734, 1.85, 1.965, 2.081],
      }),
    ],
    burstSkill: [
      createAttack("瞑弦矢伤害提升", AttackType.Strong, ElementType.Electro, {
        em: [1.962, 2.109, 2.256, 2.452, 2.599, 2.746, 2.942, 3.139, 3.335, 3.531, 3.727, 3.923, 4.168],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_MYSTERY_96,
      {
        label: "砂王的赐礼",
        describe: "使贯影箭造成的伤害值提升，提升值相当于赛索斯的元素精通的700%",
        effect: [
          {
            type: BuffType.StrongFixed,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 7,
            actionOn: ActionOn.Indirect,
            special: "Sethos",
          },
        ],
        enable: true,
      },
      {
        label: "1命·封龛谒灵歌",
        describe: "贯影箭的暴击率提升15%",
        effect: [{ type: BuffType.StrongCritcal, getValue: () => 15, special: "Sethos" }],
        condition: (data) => data.constellation >= 1,
        enable: true,
      },
      {
        label: "2命·寂秘纸草经",
        describe: "满足条件时，赛索斯的雷元素伤害加成提升15%，至多叠加2层",
        effect: [{ type: BuffType.ElectroPrcent, getValue: (_, s) => 15 * s }],
        condition: (data) => data.constellation >= 2,
        enable: true,
        stack: 0,
        limit: 2,
        stackable: true,
      },
      Constellation_A_3,
      {
        label: "4命·真念鸵羽集",
        describe: "贯影箭或瞑弦矢命中2名及以上的敌人时，队伍中附近的所有角色的元素精通提升80点",
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
        condition: (data) => data.constellation >= 4,
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000092, "嘉明", ElementType.Pyro, WeaponType.GreatSword)(Rarity.Four, 11419, 302, 703, 60)(
      "UI_AvatarIcon_Gaming",
      [
        "UI_Talent_S_Gaming_01",
        "UI_Talent_S_Gaming_02",
        "UI_Talent_U_Gaming_01",
        "UI_Talent_S_Gaming_03",
        "UI_Talent_U_Gaming_02",
        "UI_Talent_S_Gaming_04",
      ],
      ["普通攻击·刃爪悬星", "瑞兽登高楼", "璨焰金猊舞"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.839, 0.907, 0.975, 1.073, 1.141, 1.219, 1.326, 1.433, 1.541, 1.658, 1.775],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.79, 0.855, 0.919, 1.011, 1.075, 1.149, 1.25, 1.351, 1.452, 1.563, 1.673],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.066, 1.153, 1.24, 1.364, 1.451, 1.55, 1.686, 1.823, 1.959, 2.108, 2.257],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.279, 1.384, 1.488, 1.637, 1.741, 1.86, 2.023, 2.187, 2.351, 2.529, 2.708],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.323],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
      }),
      createAttack("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.641, 0.694, 0.746, 0.82, 0.873, 0.932, 1.014, 1.096, 1.178, 1.268, 1.358],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.39, 1.49, 1.64, 1.74, 1.86, 2.03, 2.19, 2.36, 2.54, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.05, 2.18, 2.33, 2.53, 2.74, 2.94, 3.17, 3.39],
      }),
    ],
    elementSkill: [
      createAttack(
        "下落攻击·踏云献瑞",
        AttackType.Falling,
        ElementType.Pyro,
        {
          atk: [2.304, 2.477, 2.65, 2.88, 3.053, 3.226, 3.456, 3.686, 3.917, 4.147, 4.378, 4.608, 4.896],
        },
        "Gaming"
      ),
    ],
    burstSkill: [
      createAttack("猊兽·文仔砸击", AttackType.Burst, ElementType.Pyro, {
        atk: [3.704, 3.982, 4.26, 4.63, 4.908, 5.186, 5.556, 5.926, 6.297, 6.667, 7.038, 7.408, 7.871],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "祥烟瑞气",
        describe: "嘉明的生命值高于或等于50%时，下落攻击·踏云献瑞造成的伤害提升20%",
        effect: [{ type: BuffType.FallingPrcent, getValue: () => 20, special: "Gaming" }],
        enable: true,
      },
      {
        label: "2命·步踏梅花",
        describe: "嘉明受到治疗时，若此次治疗回复量溢出，嘉明的攻击力将提升20%",
        effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
        condition: (data) => data.constellation >= 2,
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·百兽俱驯",
        describe: "下落攻击·踏云献瑞的暴击率提升20%、暴击伤害提升40%",
        effect: [
          { type: BuffType.FallingCritcal, getValue: () => 20, special: "Gaming" },
          { type: BuffType.FallingCritcalHurt, getValue: () => 40, special: "Gaming" },
        ],
        condition: (data) => data.constellation === 6,
        enable: true,
      },
    ],
  },
  {
    ...cha(10000090, "夏沃蕾", ElementType.Pyro, WeaponType.Polearms)(Rarity.Four, 11962, 193, 605, 60)(
      "UI_AvatarIcon_Chevreuse",
      [
        "UI_Talent_S_Chevreuse_01",
        "UI_Talent_S_Chevreuse_02",
        "UI_Talent_U_Chevreuse_01",
        "UI_Talent_S_Chevreuse_03",
        "UI_Talent_U_Chevreuse_02",
        "UI_Talent_S_Chevreuse_04",
      ],
      ["普通攻击·线列枪刺·改", "近迫式急促拦射", "圆阵掷弹爆轰术"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.531, 0.575, 0.618, 0.68, 0.723, 0.772, 0.84, 0.908, 0.976, 1.05, 1.124],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.493, 0.533, 0.573, 0.631, 0.671, 0.717, 0.78, 0.843, 0.906, 0.975, 1.044],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.276, 0.299, 0.322, 0.354, 0.376, 0.402, 0.437, 0.473, 0.508, 0.547, 0.585],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.325, 0.351, 0.377, 0.415, 0.442, 0.472, 0.513, 0.555, 0.596, 0.642, 0.687],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.773, 0.836, 0.898, 0.988, 1.051, 1.123, 1.222, 1.321, 1.42, 1.527, 1.635],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.217, 1.316, 1.415, 1.557, 1.656, 1.769, 1.924, 2.08, 2.236, 2.406, 2.575],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("点按伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.152, 1.238, 1.325, 1.44, 1.526, 1.613, 1.728, 1.843, 1.958, 2.074, 2.189, 2.304, 2.448],
      }),
      createAttack("长按伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.728, 1.858, 1.987, 2.16, 2.29, 2.419, 2.592, 2.765, 2.938, 3.11, 3.283, 3.456, 3.672],
      }),
      createAttack("「超量装药弹头」伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [2.824, 3.036, 3.248, 3.53, 3.742, 3.954, 4.236, 4.518, 4.801, 5.083, 5.366, 5.648, 6.001],
      }),
      createAttack("流涌之刃伤害", AttackType.Other, ElementType.Pyro, {
        atk: [0.288, 0.31, 0.331, 0.36, 0.382, 0.403, 0.432, 0.461, 0.49, 0.518, 0.547, 0.576, 0.612],
      }),
    ],
    burstSkill: [
      createAttack("爆轰榴弹伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [3.682, 3.958, 4.234, 4.602, 4.878, 5.154, 5.522, 5.891, 6.259, 6.627, 6.995, 7.363, 7.823],
      }),
      createAttack("二重毁伤弹伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.491, 0.528, 0.565, 0.614, 0.65, 0.687, 0.736, 0.785, 0.835, 0.884, 0.933, 0.982, 1.043],
      }),
    ],
    otherSkill: [
      createAttack("2命·连锁殉爆", AttackType.Skill, ElementType.Pyro, {
        atk: [1.2],
      }),
    ],
    buffs: [
      A_80_HP_24P,
      {
        label: "尖兵协同战法",
        describe: `队伍中所有角色的元素类型均为火元素与雷元素，并且至少有一名火元素角色、一名雷元素角色时；
          夏沃蕾将为队伍中附近的角色施加「协同战法」：角色触发超载反应后，受本次反应影响的敌人的火元素与雷元素抗性降低40%，持续6秒。
          当队伍中角色的元素类型不满足本固有天赋的条件时，将移除已有的协同战法效果`,
        effect: [
          { type: BuffType.EnemyElectroResistance, getValue: () => -40 },
          { type: BuffType.EnemyPyroResistance, getValue: () => -40 },
        ],
        enable: true,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      {
        label: "纵阵武力统筹",
        describe: `夏沃蕾发射近迫式急促拦射的「超量装药弹头」后，基于夏沃蕾的生命值上限，每1000点生命值上限都将使队伍中附近的所有火元素与雷元素角色的攻击力提升1%，持续30秒，至多通过这种方式提升40%的攻击力`,
        effect: [
          {
            type: BuffType.ATKPrcent,
            getValue: (data) => Math.min(40, (data.baseHP + data.extraHP + data.extraHP_NT) / 1000),
          },
        ],
        enable: true,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·终结罪恶的追缉",
        describe: `队伍中的角色受到近迫式急促拦射的治疗后，获得20%火元素伤害加成与雷元素伤害加成，此效果至多叠加3层`,
        effect: [
          {
            type: BuffType.ElectroPrcent,
            getValue: (_, s) => 20 * s,
          },
          {
            type: BuffType.PyroPrcent,
            getValue: (_, s) => 20 * s,
          },
        ],
        enable: false,
        shareable: true,
        stackable: true,
        stack: 3,
        limit: 3,
        target: BuffTarget.Enemy,
      },
    ],
  },
  {
    ...cha(10000088, "夏洛蒂", ElementType.Cryo, WeaponType.Magic)(Rarity.Four, 10766, 173, 546, 80)(
      "UI_AvatarIcon_Charlotte",
      [
        "UI_Talent_S_Charlotte_01",
        "UI_Talent_S_Charlotte_02",
        "UI_Talent_U_Charlotte_01",
        "UI_Talent_S_Charlotte_03",
        "UI_Talent_U_Charlotte_02",
        "UI_Talent_S_Charlotte_04",
      ],
      ["普通攻击·冷色摄影律", "取景·冰点构图法", "定格·全方位确证"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Cryo, {
        atk: [0.499, 0.536, 0.573, 0.623, 0.661, 0.698, 0.748, 0.798, 0.847, 0.897, 0.947],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Cryo, {
        atk: [0.434, 0.466, 0.499, 0.542, 0.575, 0.607, 0.651, 0.694, 0.737, 0.781, 0.824],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Cryo, {
        atk: [0.646, 0.695, 0.743, 0.808, 0.856, 0.904, 0.969, 1.034, 1.098, 1.163, 1.227],
      }),
      createAttack("重击", AttackType.Strong, ElementType.Cryo, {
        atk: [1.005, 1.081, 1.156, 1.256, 1.332, 1.407, 1.508, 1.608, 1.709, 1.809, 1.91],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
      createAttack("灵息之刺伤害", AttackType.Other, ElementType.Cryo, {
        atk: [0.112, 0.12, 0.128, 0.14, 0.148, 0.156, 0.168, 0.179, 0.19, 0.201, 0.212],
      }),
    ],
    elementSkill: [
      createAttack("点按拍照伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.008, 1.075, 1.142, 1.21, 1.277, 1.344, 1.428],
      }),
      createAttack("长按拍照伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [1.392, 1.496, 1.601, 1.74, 1.844, 1.949, 2.088, 2.227, 2.366, 2.506, 2.645, 2.784, 2.958],
      }),
      createAttack("「瞬时剪影」印记伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.392, 0.421, 0.451, 0.49, 0.519, 0.549, 0.588, 0.627, 0.666, 0.706, 0.745, 0.784, 0.833],
      }),
      createAttack("「聚焦印象」印记伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.406, 0.437, 0.467, 0.508, 0.538, 0.568, 0.609, 0.65, 0.69, 0.731, 0.771, 0.812, 0.863],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [0.776, 0.834, 0.893, 0.97, 1.028, 1.087, 1.164, 1.242, 1.32, 1.397, 1.475, 1.552, 1.649],
      }),
      createAttack("相机伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [0.065, 0.07, 0.074, 0.081, 0.086, 0.091, 0.097, 0.104, 0.11, 0.116, 0.123, 0.129, 0.137],
      }),
    ],
    otherSkill: [
      createAttack("6命·「温亨廷先生」协同攻击伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [1.8],
      }),
    ],
    buffs: [
      A_80_ATK_24P,
      {
        label: "多样性调查",
        describe:
          "除夏洛蒂自己以外，队伍中每存在1/2/3位枫丹角色，夏洛蒂自己获得5%/10%/15%治疗加成；队伍中每存在1/2/3位非枫丹的角色，都将使夏洛蒂自己获得5%/10%/15%冰元素伤害加成",
        effect: [
          { type: BuffType.HealAdd, getValue: (_, s) => [5, 10, 15][s - 1] || 0 },
          { type: BuffType.CryoPrcent, getValue: (_, s) => [5, 10, 15][3 - s - 1] || 0 },
        ],
        enable: true,
        stackable: true,
        limit: 3,
        stack: 0,
        stackText: "枫丹角色数量",
      },
      {
        label: "2命·以求真为职守",
        describe:
          "施放取景·冰点构图法时，「温亨廷先生」的攻击命中了1/2/3及以上名敌人时，夏洛蒂自身的攻击力提升10%/20%/30%",
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => [10, 20, 30][s - 1] || 0 }],
        enable: false,
        stackable: true,
        limit: 3,
        stack: 3,
        stackText: "命中敌人数量",
      },
      Constellation_Q_3,
      {
        label: "4命·以督促为责任",
        describe: "定格·全方位确证命中附有「瞬时剪影」或「聚焦印象」印记的敌人时，造成的伤害提升10%",
        effect: [{ type: BuffType.BurstPrcent, getValue: () => 10 }],
        enable: true,
      },
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000085, "菲米尼", ElementType.Cryo, WeaponType.GreatSword)(Rarity.Four, 12070, 255, 708, 60)(
      "UI_AvatarIcon_Freminet",
      [
        "UI_Talent_S_Freminet_01",
        "UI_Talent_S_Freminet_02",
        "UI_Talent_U_Freminet_01",
        "UI_Talent_S_Freminet_03",
        "UI_Talent_U_Freminet_02",
        "UI_Talent_S_Freminet_04",
      ],
      ["普通攻击·洑流剑", "浮冰增压", "猎影潜袭"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.842, 0.911, 0.98, 1.078, 1.146, 1.224, 1.332, 1.44, 1.548, 1.665, 1.783, 1.9, 2.018, 2.135],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.807, 0.872, 0.938, 1.032, 1.098, 1.173, 1.276, 1.379, 1.482, 1.595, 1.707, 1.82, 1.933, 2.045],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.019, 1.102, 1.185, 1.303, 1.386, 1.481, 1.612, 1.742, 1.872, 2.014, 2.157, 2.299, 2.441, 2.583],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.238, 1.339, 1.44, 1.584, 1.684, 1.8, 1.958, 2.116, 2.275, 2.447, 2.62, 2.793, 2.966, 3.138],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.323, 1.41, 1.498, 1.585],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39, 2.55, 2.71, 2.87],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579, 1.683, 1.787, 1.891],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16, 3.364, 3.573, 3.781],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94, 4.202, 4.462, 4.722],
      }),
    ],
    elementSkill: [
      createAttack("上挑攻击伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.8304, 0.8927, 0.955, 1.038, 1.1003, 1.1626, 1.2456, 1.3286, 1.4117, 1.4947, 1.5778, 1.6608, 1.7646],
      }),
      createAttack("霜寒伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.0716, 0.077, 0.0823, 0.0895, 0.0949, 0.1002, 0.1074, 0.1146, 0.1217, 0.1289, 0.136, 0.1432, 0.1522],
      }),
      createAttack(
        "零阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [2.0048, 2.1552, 2.3055, 2.506, 2.6564, 2.8067, 3.0072, 3.2077, 3.4082, 3.6086, 3.8091, 4.0096, 4.2602],
        },
        "Freminet"
      ),
      createAttack(
        "一阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [1.002, 1.078, 1.153, 1.253, 1.328, 1.403, 1.504, 1.604, 1.704, 1.804, 1.905, 2.005, 2.13],
        },
        "Freminet"
      ),
      createAttack(
        "一阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Physical,
        {
          atk: [0.487, 0.523, 0.56, 0.609, 0.645, 0.682, 0.73, 0.779, 0.828, 0.876, 0.925, 0.974, 1.035],
        },
        "Freminet"
      ),
      createAttack(
        "二阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [0.702, 0.754, 0.807, 0.877, 0.93, 0.982, 1.052, 1.123, 1.193, 1.263, 1.333, 1.403, 1.491],
        },
        "Freminet"
      ),
      createAttack(
        "二阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Physical,
        {
          atk: [0.852, 0.916, 0.98, 1.065, 1.129, 1.193, 1.278, 1.363, 1.448, 1.534, 1.619, 1.704, 1.811],
        },
        "Freminet"
      ),
      createAttack(
        "三阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [0.401, 0.431, 0.461, 0.501, 0.531, 0.561, 0.601, 0.642, 0.682, 0.722, 0.762, 0.802, 0.852],
        },
        "Freminet"
      ),
      createAttack(
        "三阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Physical,
        {
          atk: [1.217, 1.308, 1.4, 1.522, 1.613, 1.704, 1.826, 1.948, 2.069, 2.191, 2.313, 2.434, 2.586],
        },
        "Freminet"
      ),
      createAttack(
        "四阶高压粉碎伤害",
        AttackType.Skill,
        ElementType.Physical,
        {
          atk: [2.4344, 2.617, 2.7996, 3.043, 3.2256, 3.4082, 3.6516, 3.895, 4.1385, 4.3819, 4.6254, 4.8688, 5.1731],
        },
        "Freminet"
      ),
      createAttack("灵息之刺伤害", AttackType.Other, ElementType.Cryo, {
        atk: [0.144, 0.1548, 0.1656, 0.18, 0.1908, 0.2016, 0.216, 0.2304, 0.2448, 0.2592, 0.2736, 0.288, 0.306],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [3.184, 3.4228, 3.6616, 3.98, 4.2188, 4.4576, 4.776, 5.0944, 5.4128, 5.7312],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
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
    ],
  },
  {
    ...cha(10000083, "琳妮特", ElementType.Anemo, WeaponType.Sword)(Rarity.Four, 12397, 232, 712, 70)(
      "UI_AvatarIcon_Linette",
      [
        "UI_Talent_S_Linette_01",
        "UI_Talent_S_Linette_02",
        "UI_Talent_U_Linette_01",
        "UI_Talent_S_Linette_03",
        "UI_Talent_U_Linette_02",
        "UI_Talent_S_Linette_04",
      ],
      ["普通攻击·迅捷礼刺剑", "谜影障身法", "魔术·运变惊奇"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.431, 0.466, 0.501, 0.551, 0.586, 0.626, 0.681, 0.736, 0.792, 0.852, 0.912],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.376, 0.407, 0.437, 0.481, 0.512, 0.547, 0.595, 0.643, 0.691, 0.743, 0.796],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.279, 0.301, 0.324, 0.356, 0.379, 0.405, 0.441, 0.476, 0.512, 0.551, 0.59],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.216, 0.234, 0.251, 0.276, 0.294, 0.314, 0.341, 0.369, 0.397, 0.427, 0.457],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.632, 0.683, 0.734, 0.808, 0.859, 0.918, 0.999, 1.079, 1.16, 1.248, 1.337],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.442, 0.478, 0.514, 0.565, 0.601, 0.643, 0.699, 0.756, 0.812, 0.874, 0.936],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.614, 0.664, 0.714, 0.785, 0.835, 0.893, 0.971, 1.05, 1.128, 1.214, 1.3],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("谜影突刺伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.68, 2.881, 3.082, 3.35, 3.551, 3.752, 4.02, 4.288, 4.556, 4.824, 5.092, 5.36, 5.695],
      }),
      createAttack("流涌之刃伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [0.312, 0.335, 0.359, 0.39, 0.413, 0.437, 0.468, 0.499, 0.53, 0.562, 0.593, 0.624, 0.663],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.832, 0.894, 0.957, 1.04, 1.102, 1.165, 1.248, 1.331, 1.414, 1.498, 1.581, 1.664, 1.768],
      }),
      createAttack("惊奇猫猫盒伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.512, 0.55, 0.589, 0.64, 0.678, 0.717, 0.768, 0.819, 0.87, 0.922, 0.973, 1.024, 1.088],
      }),
      createAttack("彩练术弹伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
      }),
      createAttack("彩练术弹伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
      }),
      createAttack("彩练术弹伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
      }),
      createAttack("彩练术弹伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.456, 0.49, 0.524, 0.57, 0.604, 0.638, 0.684, 0.73, 0.775, 0.821, 0.866, 0.912, 0.969],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "巧施协同",
        describe:
          "施放魔术·运变惊奇后，队伍中分别存在1/2/3/4种元素类型的角色时，队伍中所有角色的攻击力分别提升8%/12%/16%/20%",
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => [8, 12, 16, 20][s - 1] || 0 }],
        stackable: true,
        stack: 1,
        limit: 4,
        enable: true,
        shareable: true,
        stackText: "元素类型数量",
        target: BuffTarget.All,
      },
      {
        label: "道具完备",
        describe: "魔术·运变惊奇召唤的惊奇猫猫盒发生了元素转化后，琳妮特元素爆发造成的伤害提升15%",
        effect: [{ type: BuffType.BurstPrcent, getValue: () => 15 }],
        enable: true,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·示辨真意的眼",
        describe: "琳妮特施放谜影障身法的谜影突刺时，将获得风元素附魔，风元素伤害加成提升20%",
        effect: [
          { type: BuffType.AnemoPrcent, getValue: () => 20 },
          { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Anemo] },
        ],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000061, "绮良良", ElementType.Dendro, WeaponType.Sword)(Rarity.Four, 12180, 223, 546, 60)(
      "UI_AvatarIcon_Momoka",
      [
        "UI_Talent_S_Momoka_01",
        "UI_Talent_S_Momoka_02",
        "UI_Talent_U_Momoka_01",
        "UI_Talent_S_Momoka_04",
        "UI_Talent_U_Momoka_02",
        "UI_Talent_S_Momoka_03",
      ],
      ["普通攻击·箱纸切削术", "呜喵町飞足", "秘法·惊喜特派"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.479, 0.518, 0.557, 0.613, 0.652, 0.696, 0.758, 0.819, 0.88, 0.947, 1.014],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.464, 0.501, 0.539, 0.593, 0.631, 0.674, 0.733, 0.792, 0.852, 0.916, 0.981],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.254, 0.275, 0.296, 0.325, 0.346, 0.37, 0.402, 0.435, 0.467, 0.503, 0.538],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.381, 0.412, 0.443, 0.488, 0.519, 0.554, 0.603, 0.652, 0.701, 0.754, 0.807],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.733, 0.792, 0.852, 0.937, 0.997, 1.065, 1.159, 1.252, 1.346, 1.448, 1.551],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.224, 0.242, 0.26, 0.286, 0.304, 0.325, 0.354, 0.382, 0.411, 0.442, 0.474],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.448, 0.484, 0.52, 0.572, 0.609, 0.651, 0.708, 0.765, 0.822, 0.885, 0.947],
      }),
      createAttack("重击伤害·3", AttackType.Strong, ElementType.Physical, {
        atk: [0.448, 0.484, 0.52, 0.572, 0.609, 0.651, 0.708, 0.765, 0.822, 0.885, 0.947],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("甩尾飞踢伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [1.04, 1.118, 1.196, 1.3, 1.378, 1.456, 1.56, 1.664, 1.758, 1.872, 1.976, 2.08, 2.21],
      }),
      createAttack("猫箱急件冲撞伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [0.336, 0.361, 0.386, 0.42, 0.445, 0.47, 0.504, 0.538, 0.571, 0.605, 0.638, 0.672, 0.714],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [5.702, 6.13, 6.558, 7.128, 7.556, 7.983, 8.554, 9.124, 9.694, 10.264, 10.835, 11.405, 12.118],
      }),
      createAttack("猫草豆蔻爆炸伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [0.356, 0.383, 0.41, 0.446, 0.472, 0.499, 0.535, 0.57, 0.606, 0.642, 0.677, 0.713, 0.757],
      }),
    ],
    otherSkill: [
      createAttack("4命·韦驮骏足", AttackType.Burst, ElementType.Dendro, {
        atk: [2],
      }),
    ],
    buffs: [
      A_80_HP_24P,
      {
        label: "应时惑目之灵",
        describe:
          "基于绮良良的生命值上限，每1000点生命值上限将使呜喵町飞足造成的伤害提升0.4%，秘法·惊喜特派造成的伤害提升0.3%",
        effect: [
          {
            type: BuffType.SkillPrcent,
            getValue: (data) => ((data.baseHP + data.extraHP + data.extraHP_NT) * 0.4) / 1000,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.BurstPrcent,
            getValue: (data) => ((data.baseHP + data.extraHP + data.extraHP_NT) * 0.3) / 1000,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·沿途百景会心",
        describe: "绮良良施放元素战技或元素爆发后的15秒内，附近的队伍中所有角色获得12%所有元素伤害加成",
        effect: [
          { type: BuffType.PyroPrcent, getValue: () => 12 },
          { type: BuffType.HydroPrcent, getValue: () => 12 },
          { type: BuffType.ElectroPrcent, getValue: () => 12 },
          { type: BuffType.CryoPrcent, getValue: () => 12 },
          { type: BuffType.AnemoPrcent, getValue: () => 12 },
          { type: BuffType.GeoPrcent, getValue: () => 12 },
          { type: BuffType.DendroPrcent, getValue: () => 12 },
        ],
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
        target: BuffTarget.All,
        enable: false,
      },
    ],
  },
  {
    ...cha(10000081, "卡维", ElementType.Dendro, WeaponType.GreatSword)(Rarity.Four, 11962, 234, 751, 80)(
      "UI_AvatarIcon_Kaveh",
      [
        "UI_Talent_S_Kaveh_01",
        "UI_Talent_S_Kaveh_02",
        "UI_Talent_U_Kaveh_02",
        "UI_Talent_S_Kaveh_03",
        "UI_Talent_U_Kaveh_01",
        "UI_Talent_S_Kaveh_04",
      ],
      ["普通攻击·旋规设矩", "画则巧施", "繁绘隅穹"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.762, 0.824, 0.886, 0.975, 1.037, 1.107, 1.205, 1.302, 1.4, 1.506, 1.612],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.696, 0.753, 0.81, 0.891, 0.947, 1.012, 1.101, 1.19, 1.279, 1.377, 1.474],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.843, 0.911, 0.98, 1.078, 1.146, 1.225, 1.333, 1.44, 1.548, 1.666, 1.783],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.027, 1.111, 1.194, 1.614, 1.397, 1.493, 1.624, 1.755, 1.887, 2.03, 2.173],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.532, 0.575, 0.618, 0.68, 0.723, 0.773, 0.841, 0.909, 0.976, 1.051, 1.125],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.962, 1.04, 1.118, 1.23, 1.308, 1.398, 1.521, 1.644, 1.766, 1.901, 2.035],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [2.04, 2.193, 2.356, 2.55, 2.703, 2.866, 3.06, 3.264, 3.467, 3.672, 3.876, 4.08, 4.335],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4],
      }),
    ],
    otherSkill: [
      createAttack("6命·天园之光", AttackType.Other, ElementType.Dendro, {
        atk: [0.618],
      }),
    ],
    buffs: [
      A_80_MYSTERY_96,
      {
        label: "工艺家的奇想",
        describe: "在繁绘隅穹持续期间，卡维在普通攻击、重击或下落攻击命中敌人后，元素精通将提升25点，至多叠加4层",
        effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => s * 25 }],
        stackable: true,
        stack: 4,
        limit: 4,
        enable: true,
      },
      {
        label: "元素爆发·繁绘隅穹",
        describe: "提高卡维的普通攻击、重击与下落攻击的攻击范围，并将攻击伤害转为无法被附魔覆盖的草元素伤害",
        effect: [{ type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Dendro] }],
        enable: false,
      },
      Constellation_Q_5,
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000080, "米卡", ElementType.Cryo, WeaponType.Polearms)(Rarity.Four, 12506, 223, 713, 70)(
      "UI_AvatarIcon_Mika",
      [
        "UI_Talent_S_Mika_01",
        "UI_Talent_S_Mika_02",
        "UI_Talent_U_Mika_01",
        "UI_Talent_S_Mika_03",
        "UI_Talent_U_Mika_02",
        "UI_Talent_S_Mika_04",
      ],
      ["普通攻击·西风枪术·镝传", "星霜的流旋", "苍翎的颂愿"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.433, 0.468, 0.503, 0.553, 0.589, 0.629, 0.684, 0.74, 0.795, 0.855, 0.916],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.415, 0.449, 0.483, 0.531, 0.565, 0.603, 0.656, 0.709, 0.763, 0.82, 0.878],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.545, 0.589, 0.634, 0.697, 0.742, 0.792, 0.862, 0.932, 1.001, 1.077, 1.154],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.276, 0.299, 0.321, 0.353, 0.376, 0.401, 0.437, 0.472, 0.507, 0.546, 0.584],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.276, 0.299, 0.321, 0.353, 0.376, 0.401, 0.437, 0.472, 0.507, 0.546, 0.584],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.709, 0.766, 0.824, 0.907, 0.964, 1.03, 1.121, 1.212, 1.302, 1.401, 1.5],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.128, 1.219, 1.311, 1.442, 1.534, 1.639, 1.783, 1.927, 2.071, 2.229, 2.386],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("霜流矢伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.008, 1.075, 1.142, 1.21, 1.277, 1.344, 1.428],
      }),
      createAttack("冰星信标伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.84, 0.903, 0.966, 1.05, 1.113, 1.176, 1.26, 1.344, 1.428, 1.512, 1.596, 1.68, 1.785],
      }),
      createAttack("冰星破片伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.252, 0.271, 0.29, 0.315, 0.334, 0.353, 0.378, 0.403, 0.428, 0.454, 0.479, 0.504, 0.536],
      }),
    ],
    burstSkill: [],
    otherSkill: [],
    buffs: [
      A_80_HP_24P,
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
    ],
  },
  {
    ...cha(10000077, "瑶瑶", ElementType.Dendro, WeaponType.Polearms)(Rarity.Four, 12289, 212, 751, 80)(
      "UI_AvatarIcon_Yaoyao",
      [
        "UI_Talent_S_Yaoyao_01",
        "UI_Talent_S_Yaoyao_02",
        "UI_Talent_U_Yaoyao_01",
        "UI_Talent_S_Yaoyao_03",
        "UI_Talent_U_Yaoyao_02",
        "UI_Talent_S_Yaoyao_04",
      ],
      ["普通攻击·颠扑连环枪", "云台团团降芦菔", "玉颗珊珊月中落"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.51, 0.552, 0.593, 0.652, 0.694, 0.741, 0.807, 0.872, 0.937, 1.008, 1.079],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.474, 0.513, 0.552, 0.607, 0.645, 0.69, 0.75, 0.811, 0.872, 0.938, 1.004],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.314, 0.339, 0.365, 0.401, 0.427, 0.456, 0.496, 0.536, 0.577, 0.62, 0.664],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.33, 0.356, 0.383, 0.421, 0.448, 0.479, 0.521, 0.563, 0.605, 0.651, 0.697],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.779, 0.843, 0.906, 0.997, 1.06, 1.133, 1.232, 1.332, 1.432, 1.541, 1.649],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.128, 1.219, 1.311, 1.442, 1.534, 1.639, 1.783, 1.927, 2.071, 2.229, 2.386],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("白玉萝卜伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [0.299, 0.322, 0.344, 0.374, 0.396, 0.419, 0.449, 0.479, 0.509, 0.539, 0.569, 0.598, 0.636],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [1.146, 1.232, 1.317, 1.432, 1.518, 1.604, 1.718, 1.833, 1.948, 2.062, 2.177, 2.291, 2.434],
      }),
      createAttack("桂子仙机白玉萝卜伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [0.722, 0.776, 0.83, 0.902, 0.956, 1.01, 1.082, 1.155, 1.227, 1.3, 1.371, 1.443, 1.533],
      }),
    ],
    otherSkill: [
      createAttack("6命·超厉害·大萝卜", AttackType.Skill, ElementType.Dendro, {
        atk: [0.75],
      }),
    ],
    buffs: [
      A_80_HP_24P,
      {
        label: "1命·妙受琼阁",
        describe: "白玉萝卜炸裂时，处在其影响范围内的当前场上角色获得15%草元素伤害加成",
        effect: [{ type: BuffType.DendroPrcent, getValue: () => 15 }],
        enable: true,
        shareable: true,
        condition: ({ constellation }) => constellation >= 1,
      },
      Constellation_E_3,
      {
        label: "4命·爰爰可亲",
        describe:
          "施放云台团团降芦菔或玉颗珊珊月中落后，基于瑶瑶生命值上限的0.3%，提升瑶瑶的元素精通，至多提升120点元素精通",
        effect: [
          {
            type: BuffType.MysteryFixed,
            getValue: (data) => Math.min(120, (data.baseHP + data.extraHP + data.extraHP_NT) * 0.003),
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000076, "珐露珊", ElementType.Anemo, WeaponType.Bow)(Rarity.Four, 9570, 196, 628, 80)(
      "UI_AvatarIcon_Faruzan",
      [
        "UI_Talent_S_Faruzan_01",
        "UI_Talent_S_Faruzan_02",
        "UI_Talent_U_Faruzan_01",
        "UI_Talent_S_Faruzan_03",
        "UI_Talent_U_Faruzan_02",
        "UI_Talent_S_Faruzan_04",
      ],
      ["普通攻击·迴身箭术", "非想风天", "抟风秘道"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.447, 0.484, 0.52, 0.572, 0.609, 0.651, 0.707, 0.765, 0.822, 0.884, 0.947],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.422, 0.456, 0.491, 0.54, 0.514, 0.613, 0.667, 0.721, 0.775, 0.834, 0.893],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.532, 0.575, 0.618, 0.68, 0.723, 0.773, 0.841, 0.909, 0.977, 1.051, 1.125],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.706, 0.764, 0.821, 0.903, 0.961, 1.027, 1.117, 1.207, 1.297, 1.396, 1.495],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.488, 1.6, 1.711, 1.861, 1.972, 2.083, 2.232, 2.381, 2.53, 2.678, 2.827, 2.976, 3.162],
      }),
      createAttack("风压塌陷风涡伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.08, 1.161, 1.242, 1.35, 1.431, 1.512, 1.62, 1.728, 1.836, 1.944, 2.052, 2.16, 2.295],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [3.776, 4.059, 4.342, 4.72, 5.003, 5.286, 5.664, 6.042, 6.419, 6.797, 7.174, 7.552, 8.024],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "元素爆发·烈风波",
        describe: "降低敌人的风元素抗性；所有角色获得风元素伤害加成",
        effect: [
          {
            type: BuffType.EnemyAnemoResistance,
            getValue: () => -30,
          },
          {
            type: BuffType.AnemoPrcent,
            getValue: (data) => {
              let a = [18, 19.4, 20.7, 22.5, 23.9, 25.2, 27, 28.8, 30.6, 32.4, 34.2, 36, 38.3];
              return a[data.burstLevel + data.burstLevelAdd - 1];
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        shareable: true,
      },
      {
        label: "七窟遗智",
        describe:
          "处于抟风秘道的「祈风之赐」效果下的角色的普通攻击、重击、下落攻击、元素战技或元素爆发对敌人造成风元素伤害时，会产生烈风护持效果：基于珐露珊基础攻击力的32%，提高造成的伤害",
        effect: [{ type: BuffType.AnemoFixed, getValue: (data) => data.baseATK * 0.32, actionOn: ActionOn.Indirect }],
        enable: false,
        shareable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·妙道合真",
        describe: "处于抟风秘道的「祈风之赐」效果影响下的角色，造成风元素伤害时的暴击伤害提升40%",
        effect: [{ type: BuffType.AnemoCritcalHurt, getValue: () => 40 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000074, "莱依拉", ElementType.Cryo, WeaponType.Sword)(Rarity.Four, 11092, 217, 655, 40)(
      "UI_AvatarIcon_Layla",
      [
        "UI_Talent_S_Layla_01",
        "UI_Talent_S_Layla_02",
        "UI_Talent_U_Layla_01",
        "UI_Talent_S_Layla_03",
        "UI_Talent_U_Layla_02",
        "UI_Talent_S_Layla_04",
      ],
      ["普通攻击·熠辉轨度剑", "垂裳端凝之夜", "星流摇床之梦"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.512, 0.554, 0.596, 0.655, 0.697, 0.744, 0.81, 0.876, 0.941, 1.012, 1.084],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.485, 0.524, 0.564, 0.62, 0.66, 0.705, 0.767, 0.829, 0.891, 0.958, 1.026],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.73, 0.789, 0.849, 0.933, 0.993, 1.061, 1.154, 1.247, 1.341, 1.443, 1.544],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.477, 0.516, 0.555, 0.611, 0.649, 0.694, 0.755, 0.816, 0.877, 0.944, 1.01],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.526, 0.568, 0.611, 0.672, 0.715, 0.764, 0.831, 0.898, 0.965, 1.039, 1.112],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.128, 0.138, 0.147, 0.16, 0.17, 0.179, 0.192, 0.205, 0.218, 0.23, 0.243, 0.256, 0.272],
      }),
      createAttack(
        "飞星伤害",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [0.147, 0.158, 0.169, 0.184, 0.195, 0.206, 0.221, 0.236, 0.25, 0.265, 0.28, 0.294, 0.313],
        },
        "Layla"
      ),
    ],
    burstSkill: [
      createAttack(
        "星光弹伤害",
        AttackType.Burst,
        ElementType.Cryo,
        {
          hp: [0.047, 0.05, 0.054, 0.058, 0.062, 0.065, 0.07, 0.074, 0.079, 0.084, 0.088, 0.093, 0.099],
        },
        "Layla"
      ),
    ],
    otherSkill: [],
    buffs: [
      A_80_HP_24P,
      {
        label: "如光骤现角色",
        describe: "安眠帷幕护盾在存在期间，每获得一枚晚星时，处于安眠帷幕护盾庇护下的角色，护盾强效提升6%，至多叠加4次",
        effect: [{ type: BuffType.ShieldStrong, getValue: (_, s) => s * 6 }],
        enable: true,
        stack: 4,
        stackText: "晚星",
        limit: 4,
        stackable: true,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "勿扰沉眠",
        describe: "垂裳端凝之夜发射的飞星造成的伤害提高，提高值相当于莱依拉生命值上限的1.5%",
        effect: [
          {
            type: BuffType.BurstFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.015,
            actionOn: ActionOn.Indirect,
            special: "Layla",
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      {
        label: "4命·星示昭明",
        describe:
          "垂裳端凝之夜开始发射一轮飞星时，将为附近的队伍中所有角色赋予「启明」效果，使普通攻击与重击造成的伤害提升，提升值相当于莱依拉生命值上限的5%",
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.05,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.StrongFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.05,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
        condition: ({ constellation }) => constellation >= 4,
        shareable: true,
        target: BuffTarget.All,
      },
      Constellation_Q_5,
      {
        label: "6命·曜光灵炬",
        describe: "垂裳端凝之夜的飞星造成的伤害提升40%，星流摇床之梦的星光弹造成的伤害提升40%",
        effect: [
          { type: BuffType.SkillPrcent, getValue: () => 40, special: "Layla" },
          { type: BuffType.BurstPrcent, getValue: () => 40, special: "Layla" },
        ],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000072, "坎蒂丝", ElementType.Hydro, WeaponType.Polearms)(Rarity.Four, 10875, 212, 683, 60)(
      "UI_AvatarIcon_Candace",
      [
        "UI_Talent_S_Candace_01",
        "UI_Talent_S_Candace_02",
        "UI_Talent_U_Candace_01",
        "UI_Talent_S_Candace_03",
        "UI_Talent_U_Candace_02",
        "UI_Talent_S_Candace_04",
      ],
      ["普通攻击·流耀枪术·守势", "圣仪·苍鹭庇卫", "圣仪·灰鸰衒潮"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.608, 0.658, 0.707, 0.778, 0.827, 0.884, 0.962, 1.039, 1.117, 1.202, 1.287],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.611, 0.661, 0.711, 0.782, 0.832, 0.889, 0.967, 1.045, 1.123, 1.209, 1.294],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.355, 0.384, 0.413, 0.454, 0.483, 0.516, 0.561, 0.607, 0.652, 0.702, 0.751],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.434, 0.469, 0.504, 0.555, 0.59, 0.63, 0.686, 0.741, 0.797, 0.857, 0.918],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.949, 1.027, 1.104, 1.214, 1.292, 1.38, 1.501, 1.623, 1.744, 1.877, 2.009],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.242, 1.343, 1.444, 1.588, 1.69, 1.905, 1.964, 2.123, 2.282, 2.455, 2.628],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("基础伤害", AttackType.Skill, ElementType.Hydro, {
        hp: [0.12, 0.129, 0.138, 0.15, 0.16, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255],
      }),
      createAttack("蓄力完成伤害", AttackType.Skill, ElementType.Hydro, {
        hp: [0.19, 0.205, 0.219, 0.238, 0.252, 0.267, 0.286, 0.305, 0.324, 0.343, 0.362, 0.381, 0.405],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Hydro, {
        hp: [0.066, 0.071, 0.076, 0.083, 0.088, 0.093, 0.099, 0.106, 0.112, 0.119, 0.126, 0.132, 0.141],
      }),
      createAttack("水波冲击伤害", AttackType.Burst, ElementType.Hydro, {
        hp: [0.066, 0.071, 0.076, 0.083, 0.088, 0.093, 0.099, 0.106, 0.112, 0.119, 0.126, 0.132, 0.141],
      }),
    ],
    otherSkill: [
      createAttack("6命·衍溢的汐潮", AttackType.Burst, ElementType.Hydro, {
        hp: [0.15],
      }),
    ],
    buffs: [
      A_80_HP_24P,
      {
        label: "元素爆发·赤冕祝祷",
        describe: "角色的普通攻击对敌人造成元素伤害时，提高造成的伤害；单手剑、双手剑、长柄武器角色会获得水元素附魔",
        effect: [
          {
            type: BuffType.NormalPrcent,
            getValue: (data) => 20 + ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 0.5,
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.Enchanting,
            getValue: () => EnchantingType[ElementType.Hydro],
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·贯月的耀锋",
        describe: "圣仪·苍鹭庇卫命中敌人时，坎蒂丝的生命值上限提升20%",
        effect: [{ type: BuffType.HPPrcent, getValue: () => 20 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000068, "多莉", ElementType.Electro, WeaponType.GreatSword)(Rarity.Four, 12397, 223, 723, 80)(
      "UI_AvatarIcon_Dori",
      [
        "UI_Talent_S_Dori_01",
        "UI_Talent_S_Dori_02",
        "UI_Talent_U_Dori_02",
        "UI_Talent_S_Dori_03",
        "UI_Talent_U_Dori_01",
        "UI_Talent_S_Dori_04",
      ],
      ["普通攻击·妙显剑舞·改", "镇灵之灯·烦恼解决炮", "卡萨扎莱宫的无微不至"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.902, 0.976, 1.049, 1.154, 1.227, 1.311, 1.427, 1.542, 1.657, 1.783, 1.909],
      }),
      createAttack("二段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.411, 0.444, 0.478, 0.525, 0.559, 0.597, 0.65, 0.702, 0.755, 0.812, 0.859],
      }),
      createAttack("二段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.431, 0.466, 0.501, 0.552, 0.587, 0.627, 0.682, 0.737, 0.792, 0.852, 0.913],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.284, 1.388, 1.493, 1.642, 1.747, 1.866, 2.03, 2.195, 2.359, 2.538, 2.717],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.336],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.42],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("断除烦恼炮伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.473, 1.583, 1.694, 1.841, 1.951, 2.062, 2.209, 2.356, 2.504, 2.651, 2.798, 2.946, 3.13],
      }),
      createAttack("售后服务弹伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.316, 0.339, 0.363, 0.395, 0.418, 0.442, 0.473, 0.505, 0.537, 0.568, 0.6, 0.631, 0.671],
      }),
    ],
    burstSkill: [
      createAttack("连接伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.29, 0.3, 0.32, 0.34],
      }),
    ],
    otherSkill: [
      createAttack("2命·特许经营", AttackType.Skill, ElementType.Electro, {
        atk: [0.5],
      }),
    ],
    buffs: [
      A_80_HP_24P,
      Constellation_Q_3,
      {
        label: "4命·酌盈剂虚",
        describe: "与灯中幽精相连的角色元素能量低于50%时，提升30%元素充能效率",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 }],
        enable: false,
        shareable: true,
        condition: ({ constellation }) => constellation >= 4,
        target: BuffTarget.All,
      },
      Constellation_E_5,
      {
        label: "6命·漫掷万镒",
        describe: "多莉施放镇灵之灯·烦恼解决炮后获得雷元素附魔",
        effect: [{ type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Electro] }],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000067, "柯莱", ElementType.Dendro, WeaponType.Bow)(Rarity.Four, 13568, 335, 730, 60)(
      "UI_AvatarIcon_Collei",
      [
        "UI_Talent_S_Collei_01",
        "UI_Talent_S_Collei_02",
        "UI_Talent_U_Collei_02",
        "UI_Talent_S_Collei_03",
        "UI_Talent_U_Collei_01",
        "UI_Talent_S_Collei_04",
      ],
      ["普通攻击·祈颂射艺", "拂花偈叶", "猫猫秘宝"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.436, 0.472, 0.507, 0.558, 0.593, 0.634, 0.69, 0.745, 0.801, 0.862, 0.923],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.427, 0.461, 0.496, 0.546, 0.58, 0.62, 0.675, 0.729, 0.784, 0.843, 0.903],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.541, 0.585, 0.629, 0.692, 0.736, 0.786, 0.855, 0.925, 0.994, 1.069, 1.145],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.68, 0.736, 0.791, 0.87, 0.926, 0.989, 1.076, 1.163, 1.25, 1.345, 1.44],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Dendro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [1.512, 1.625, 1.739, 1.89, 2.003, 2.117, 2.268, 2.419, 2.57, 2.722, 2.873, 3.024, 3.213],
      }),
    ],
    burstSkill: [
      createAttack("爆发伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [2.018, 2.17, 2.321, 2.523, 2.674, 2.826, 3.027, 3.229, 3.431, 3.633, 3.835, 4.047, 4.289],
      }),
      createAttack("跃动伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [0.433, 0.465, 0.497, 0.541, 0.573, 0.606, 0.649, 0.692, 0.735, 0.779, 0.822, 0.865, 0.919],
      }),
    ],
    otherSkill: [
      createAttack("飞叶迴斜", AttackType.Skill, ElementType.Dendro, {
        atk: [0.4],
      }),
      createAttack("6命·坠镞为林", AttackType.Other, ElementType.Dendro, {
        atk: [2],
      }),
    ],
    buffs: [
      A_80_ATK_24P,
      {
        label: "1命·巡护深林",
        describe: "柯莱处于队伍后台时，元素充能效率提升20%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 1,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000059, "鹿野院平藏", ElementType.Anemo, WeaponType.Magic)(Rarity.Four, 10657, 225, 684, 40)(
      "UI_AvatarIcon_Heizo",
      [
        "UI_Talent_S_Heizo_01",
        "UI_Talent_S_Heizo_02",
        "UI_Talent_U_Heizo_01",
        "UI_Talent_S_Heizo_03",
        "UI_Talent_U_Heizo_02",
        "UI_Talent_S_Heizo_04",
      ],
      ["普通攻击·不动流格斗术", "勠心拳", "聚风蹴"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.375, 0.403, 0.431, 0.468, 0.497, 0.525, 0.562, 0.6, 0.637, 0.675, 0.712],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.369, 0.396, 0.424, 0.461, 0.488, 0.516, 0.553, 0.59, 0.627, 0.663, 0.7],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.511, 0.549, 0.587, 0.638, 0.677, 0.715, 0.766, 0.817, 0.868, 0.919, 0.97],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Anemo, {
        atk: [0.148, 0.159, 0.17, 0.185, 0.196, 0.207, 0.222, 0.237, 0.251, 0.266, 0.281],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Anemo, {
        atk: [0.16, 0.175, 0.187, 0.203, 0.216, 0.228, 0.244, 0.26, 0.276, 0.293, 0.309],
      }),
      createAttack("四段伤害·3", AttackType.Normal, ElementType.Anemo, {
        atk: [0.192, 0.207, 0.221, 0.24, 0.255, 0.269, 0.288, 0.308, 0.327, 0.346, 0.365],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.615, 0.661, 0.707, 0.768, 0.814, 0.86, 0.922, 0.983, 1.045, 1.106, 1.168],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Anemo, {
        atk: [0.73, 0.78, 0.84, 0.91, 0.96, 1.02, 1.1, 1.17, 1.24, 1.31, 1.39],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.42, 1.53, 1.62, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.275, 2.446, 2.617, 2.844, 3.015, 3.185, 3.413, 3.64, 3.868, 4.095, 4.323, 4.55, 4.835],
      }),
      createAttack("1层变格伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [
          2.275 + 0.569,
          2.446 + 0.611,
          2.617 + 0.654,
          2.844 + 0.711,
          3.015 + 0.754,
          3.185 + 0.796,
          3.413 + 0.853,
          3.64 + 0.91,
          3.868 + 0.967,
          4.095 + 1.024,
          4.323 + 1.081,
          4.55 + 1.138,
          4.835 + 1.209,
        ],
      }),
      createAttack("2层变格伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [
          2.275 + 0.569 * 2,
          2.446 + 0.611 * 2,
          2.617 + 0.654 * 2,
          2.844 + 0.711 * 2,
          3.015 + 0.754 * 2,
          3.185 + 0.796 * 2,
          3.413 + 0.853 * 2,
          3.64 + 0.91 * 2,
          3.868 + 0.967 * 2,
          4.095 + 1.024 * 2,
          4.323 + 1.081 * 2,
          4.55 + 1.138 * 2,
          4.835 + 1.209 * 2,
        ],
      }),
      createAttack("3层变格伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [
          2.275 + 0.569 * 3,
          2.446 + 0.611 * 3,
          2.617 + 0.654 * 3,
          2.844 + 0.711 * 3,
          3.015 + 0.754 * 3,
          3.185 + 0.796 * 3,
          3.413 + 0.853 * 3,
          3.64 + 0.91 * 3,
          3.868 + 0.967 * 3,
          4.095 + 1.024 * 3,
          4.323 + 1.081 * 3,
          4.55 + 1.138 * 3,
          4.835 + 1.209 * 3,
        ],
      }),
      createAttack("满蓄力伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [
          2.275 + 0.569 * 4 + 1.138,
          2.446 + 0.611 * 4 + 1.223,
          2.617 + 0.654 * 4 + 1.308,
          2.844 + 0.711 * 4 + 1.422,
          3.015 + 0.754 * 4 + 1.507,
          3.185 + 0.796 * 4 + 1.593,
          3.413 + 0.853 * 4 + 1.706,
          3.64 + 0.91 * 4 + 1.82,
          3.868 + 0.967 * 4 + 1.934,
          4.095 + 1.024 * 4 + 2.048,
          4.323 + 1.081 * 4 + 2.161,
          4.55 + 1.138 * 4 + 2.275,
          4.835 + 1.209 * 4 + 2.417,
        ],
      }),
    ],
    burstSkill: [
      createAttack("不动流·真空弹伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [3.147, 3.383, 3.619, 3.934, 4.17, 4.406, 4.72, 5.035, 5.35, 5.664, 5.979, 6.294, 6.687],
      }),
      createAttack("聚风真眼伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
      createAttack("聚风真眼伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
      createAttack("聚风真眼伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
      createAttack("聚风真眼伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ANEMO_24P,
      {
        label: "因由勘破",
        describe: "勠心拳命中敌人后，队伍中所有角色（不包括鹿野院平藏自己）的元素精通提升80点",
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Other,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·奇想天开捕物帐",
        describe:
          "施放勠心拳时，每层「变格」都将为本次勠心拳提升4%暴击率。拥有「正论」时，本次勠心拳的暴击伤害将提升32%",
        effect: [
          { type: BuffType.SkillCritcal, getValue: (_, s) => 4 * s },
          { type: BuffType.SkillCritcalHurt, getValue: (_, s) => (s === 4 ? 32 : 0) },
        ],
        enable: false,
        stackable: true,
        stack: 0,
        limit: 4,
        stackText: "变格",
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000065, "久岐忍", ElementType.Electro, WeaponType.Sword)(Rarity.Four, 12289, 212, 751, 60)(
      "UI_AvatarIcon_Shinobu",
      [
        "UI_Talent_S_Shinobu_01",
        "UI_Talent_S_Shinobu_02",
        "UI_Talent_U_Shinobu_01",
        "UI_Talent_S_Shinobu_03",
        "UI_Talent_U_Shinobu_02",
        "UI_Talent_S_Shinobu_04",
      ],
      ["普通攻击·忍流飞刃斩", "越祓雷草之轮", "御咏鸣神刈山祭"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.488, 0.527, 0.567, 0.624, 0.663, 0.709, 0.771, 0.834, 0.896, 0.964, 1.032],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.446, 0.482, 0.518, 0.57, 0.606, 0.648, 0.705, 0.762, 0.818, 0.881, 0.943],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.593, 0.642, 0.69, 0.759, 0.807, 0.863, 0.938, 1.014, 1.09, 1.173, 1.256],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.761, 0.823, 0.885, 0.974, 1.036, 1.106, 1.204, 1.301, 1.398, 1.505, 1.611],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.556, 0.602, 0.647, 0.717, 0.757, 0.809, 0.88, 0.951, 1.022, 1.1, 1.177],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.668, 0.722, 0.776, 0.854, 0.908, 0.97, 1.056, 1.141, 1.227, 1.32, 1.413],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.757, 0.814, 0.871, 0.946, 1.003, 1.06, 1.136, 1.211, 1.287, 1.363, 1.439, 1.514, 1.609],
      }),
      createAttack("越祓草轮伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.252, 0.271, 0.29, 0.316, 0.334, 0.353, 0.379, 0.404, 0.429, 0.454, 0.48, 0.505, 0.536],
      }),
    ],
    burstSkill: [
      createAttack("单次伤害", AttackType.Burst, ElementType.Electro, {
        hp: [0.036, 0.039, 0.041, 0.045, 0.048, 0.05, 0.054, 0.058, 0.061, 0.065, 0.068, 0.072, 0.077],
      }),
    ],
    otherSkill: [
      createAttack("4命·割舍封闭之心", AttackType.Other, ElementType.Electro, {
        hp: [0.097],
      }),
    ],
    buffs: [
      A_80_HP_24P,
      {
        label: "安心之所",
        describe: "基于久岐忍的元素精通，越祓雷草之轮伤害提升，值为元素精通的25%",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.25,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000064, "云堇", ElementType.Geo, WeaponType.Polearms)(Rarity.Four, 10657, 191, 734, 60)(
      "UI_AvatarIcon_Yunjin",
      [
        "UI_Talent_S_Yunjin_01",
        "UI_Talent_S_Yunjin_02",
        "UI_Talent_U_Yunjin_01",
        "UI_Talent_S_Yunjin_03",
        "UI_Talent_U_Yunjin_02",
        "UI_Talent_S_Yunjin_04",
      ],
      ["普通攻击·拂云出手", "旋云开相", "破嶂见旌仪"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.405, 0.438, 0.471, 0.518, 0.551, 0.589, 0.641, 0.692, 0.744, 0.801, 0.857],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.403, 0.435, 0.468, 0.515, 0.548, 0.585, 0.637, 0.688, 0.739, 0.796, 0.852],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.23, 0.248, 0.267, 0.294, 0.312, 0.334, 0.363, 0.393, 0.422, 0.454, 0.486],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.275, 0.298, 0.32, 0.352, 0.374, 0.4, 0.435, 0.47, 0.506, 0.544, 0.582],
      }),
      createAttack("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.24, 0.26, 0.279, 0.307, 0.326, 0.349, 0.379, 0.41, 0.441, 0.474, 0.508],
      }),
      createAttack("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.288, 0.312, 0.335, 0.369, 0.392, 0.419, 0.456, 0.493, 0.529, 0.57, 0.61],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.673, 0.728, 0.783, 0.861, 0.916, 0.979, 1.065, 1.151, 1.237, 1.331, 1.425],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.217, 1.316, 1.415, 1.557, 1.656, 1.769, 1.924, 2.08, 2.236, 2.406, 2.6],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("点按伤害", AttackType.Skill, ElementType.Geo, {
        def: [1.491, 1.603, 1.715, 1.864, 1.976, 2.087, 2.237, 2.386, 2.535, 2.684, 2.833, 2.982, 3.169],
      }),
      createAttack("一段蓄力伤害", AttackType.Skill, ElementType.Geo, {
        def: [2.61, 2.805, 3.001, 3.262, 3.468, 3.653, 3.914, 4.175, 4.436, 4.697, 4.958, 5.219, 5.545],
      }),
      createAttack("二段蓄力伤害", AttackType.Skill, ElementType.Geo, {
        def: [3.728, 4.008, 4.287, 4.66, 4.94, 5.219, 5.592, 5.965, 6.338, 6.71, 7.083, 7.456, 7.922],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Geo, {
        atk: [2.44, 2.62, 2.81, 3.05, 3.23, 3.42, 3.66, 3.9, 4.15, 4.39, 4.64, 4.88, 5.19],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_CHARGE_26P,
      {
        label: "破嶂见旌仪·飞云旗阵",
        describe:
          "对敌人造成普通攻击伤害时，基于云堇自己当前的防御力，提高造成的伤害。当队伍中存在1/2/3/4种元素类型的角色时，数值上进一步追加云堇防御力的2.5%/5.0%/7.5%/11.5%。2命还将提高普攻伤害15%",
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data, s) => {
              let a = [0.025, 0.05, 0.075, 0.115][s - 1] || 0;
              let b = [0.32, 0.35, 0.37, 0.4, 0.43, 0.45, 0.48, 0.51, 0.55, 0.58, 0.61, 0.64, 0.68][
                data.burstLevel + data.burstLevelAdd - 1
              ];
              return (a + b) * (data.baseDEF + data.extraDEF + data.extraDEF_NT);
            },
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.NormalPrcent,
            getValue: (data) => {
              return data.constellation >= 2 ? 15 : 0;
            },
          },
        ],
        enable: false,
        stack: 1,
        limit: 4,
        stackable: true,
        stackText: "元素种类数量",
        shareable: true,
        target: BuffTarget.All,
      },
      Constellation_Q_3,
      {
        label: "4命·昇堂吊云",
        describe: "云堇触发结晶反应后，防御力提升20%",
        effect: [{ type: BuffType.DEFPrcent, getValue: () => 20 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000055, "五郎", ElementType.Geo, WeaponType.Bow)(Rarity.Four, 9570, 183, 648, 80)(
      "UI_AvatarIcon_Gorou",
      [
        "UI_Talent_S_Gorou_01",
        "UI_Talent_S_Gorou_02",
        "UI_Talent_U_Gorou_01",
        "UI_Talent_S_Gorou_03",
        "UI_Talent_U_Gorou_02",
        "UI_Talent_S_Gorou_04",
      ],
      ["普通攻击·呲牙裂扇箭", "犬坂吠吠方圆阵", "兽牙逐突形胜战法"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.378, 0.408, 0.439, 0.483, 0.514, 0.549, 0.597, 0.645, 0.694, 0.746, 0.799],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.372, 0.402, 0.432, 0.475, 0.505, 0.54, 0.588, 0.635, 0.683, 0.734, 0.786],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.495, 0.535, 0.575, 0.633, 0.673, 0.719, 0.782, 0.845, 0.909, 0.978, 1.047],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.59, 0.638, 0.686, 0.755, 8.03, 0.858, 0.933, 1.008, 1.084, 1.166, 1.249],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Geo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack(
        "技能伤害",
        AttackType.Skill,
        ElementType.Geo,
        {
          atk: [1.072, 1.152, 1.233, 1.34, 1.42, 1.501, 1.608, 1.715, 1.822, 1.93, 2.037, 2.144, 2.278],
        },
        "Gorou"
      ),
    ],
    burstSkill: [
      createAttack(
        "技能伤害",
        AttackType.Burst,
        ElementType.Geo,
        {
          def: [0.98, 1.06, 1.13, 1.23, 1.3, 1.38, 1.47, 1.57, 1.67, 1.77, 1.87, 1.96, 2.09],
        },
        "Gorou"
      ),
      createAttack(
        "岩晶崩破伤害",
        AttackType.Burst,
        ElementType.Geo,
        {
          def: [0.62, 0.66, 0.7, 0.77, 0.81, 0.86, 0.92, 0.98, 1.04, 1.1, 1.16, 1.23, 1.3],
        },
        "Gorou"
      ),
    ],
    otherSkill: [],
    buffs: [
      A_80_GEO_24P,
      {
        label: "大将旗指物",
        describe: "领域内的当前场上角色防御力提升，队伍中存在3名及以上岩元素角色时，岩元素伤害增加15%",
        effect: [
          {
            type: BuffType.DEFFixed,
            getValue: (data) => {
              return [206, 222, 237, 258, 273, 289, 309, 330, 350, 371, 392, 412, 438][
                data.skillLevel + data.skillLevelAdd - 1
              ];
            },
            actionOn: ActionOn.Indirect,
          },
          { type: BuffType.GeoPrcent, getValue: (_, s) => (s >= 3 ? 15 : 0) },
        ],
        enable: false,
        stackable: true,
        stackText: "岩元素角色数量",
        stack: 0,
        limit: 3,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "不畏风雨",
        describe: "施放兽牙逐突形胜战法后的12秒内，附近的队伍中所有角色的防御力提升25%",
        effect: [{ type: BuffType.DEFPrcent, getValue: () => 25 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "报恩之守",
        describe:
          "基于防御力，五郎的以下攻击造成的伤害提高，犬坂吠吠方圆阵的技能伤害提高值：防御力的156%；兽牙逐突形胜战法的技能伤害与岩晶崩破伤害提高值：防御力的15.6%",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 1.56,
            actionOn: ActionOn.Indirect,
            special: "Gorou",
          },
          {
            type: BuffType.BurstFixed,
            getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.156,
            actionOn: ActionOn.Indirect,
            special: "Gorou",
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·犬勇•忠如山",
        describe:
          "施放犬坂吠吠方圆阵或兽牙逐突形胜战法后的12秒内，依据施放时的领域等级，提高附近的队伍中所有角色岩元素伤害的暴击伤害【10，20，40】",
        effect: [{ type: BuffType.GeoPrcent, getValue: (_, s) => [10, 20, 40][s - 1] || 0 }],
        enable: false,
        stackable: true,
        stackText: "岩元素角色数量",
        stack: 0,
        limit: 3,
        shareable: true,
        target: BuffTarget.All,
      },
    ],
  },
  {
    ...cha(10000050, "托马", ElementType.Pyro, WeaponType.Polearms)(Rarity.Four, 10331, 202, 751, 80)(
      "UI_AvatarIcon_Tohma",
      [
        "UI_Talent_S_Tohma_01",
        "UI_Talent_S_Tohma_02",
        "UI_Talent_U_Tohma_01",
        "UI_Talent_S_Tohma_03",
        "UI_Talent_U_Tohma_02",
        "UI_Talent_S_Tohma_04",
      ],
      ["普通攻击·迅破枪势", "烈烧佑命之侍护", "真红炽火之大铠"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.444, 0.48, 0.516, 0.568, 0.604, 0.645, 0.702, 0.759, 0.816, 0.878, 0.94],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.436, 0.472, 0.507, 0.558, 0.594, 0.634, 0.69, 0.746, 0.802, 0.862, 0.923],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.268, 0.29, 0.312, 0.343, 0.365, 0.389, 0.424, 0.458, 0.492, 0.53, 0.567],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.268, 0.29, 0.312, 0.343, 0.365, 0.389, 0.424, 0.458, 0.492, 0.53, 0.567],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.674, 0.728, 0.783, 0.862, 0.916, 0.979, 1.065, 1.151, 1.238, 1.331, 1.425],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.31, 1.44, 1.53, 1.64, 1.78, 1.93, 2.07, 2.23, 2.39],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.46, 1.57, 1.68, 1.83, 1.94, 2.05, 2.2, 2.34, 2.49, 2.64, 2.78, 2.93, 3.11],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.88, 0.95, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
      }),
      createAttack(
        "炽火崩破伤害",
        AttackType.Burst,
        ElementType.Pyro,
        {
          atk: [0.58, 0.62, 0.67, 0.73, 0.77, 0.81, 0.87, 0.93, 0.99, 1.04, 1.1, 1.16, 1.23, 1.31],
        },
        "Tohma"
      ),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "甲衣交叠",
        describe: "当前场上自己的角色获取或刷新烈烧佑命护盾时，护盾强效提升5%，至多叠加5次",
        effect: [{ type: BuffType.ShieldStrong, getValue: (_, s) => 5 * s }],
        enable: true,
        stack: 0,
        limit: 5,
        stackable: true,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "烈火攻燔",
        describe: "真红炽火之大铠的炽火崩破造成的伤害提高，提高值相当于托马生命值上限的2.2%",
        effect: [
          {
            type: BuffType.BurstFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.022,
            special: "Tohma",
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·炽烧的至心",
        describe: "获取或刷新烈烧佑命护盾时，队伍中所有角色的普通攻击，重击与下落攻击造成的伤害提升15%",
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => 0.15 },
          { type: BuffType.StrongPrcent, getValue: () => 0.15 },
          { type: BuffType.FallingPrcent, getValue: () => 0.15 },
        ],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
      },
    ],
  },
  {
    ...cha(10000056, "九条裟罗", ElementType.Electro, WeaponType.Bow)(Rarity.Four, 9570, 195, 628, 80)(
      "UI_AvatarIcon_Sara",
      [
        "UI_Talent_S_Sara_05",
        "UI_Talent_S_Sara_02",
        "UI_Talent_U_Sara_02",
        "UI_Talent_S_Sara_03",
        "UI_Talent_U_Sara_01",
        "UI_Talent_S_Sara_04",
      ],
      ["普通攻击·天狗传弓术", "鸦羽天狗霆雷召咒", "煌煌千道镇式"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.369, 0.399, 0.429, 0.472, 0.502, 0.536, 0.583, 0.631, 0.678, 0.729, 0.781],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.387, 0.416, 0.45, 0.495, 0.527, 0.563, 0.612, 0.662, 0.711, 0.765, 0.819],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.485, 0.5245, 0.564, 0.62, 0.66, 0.705, 0.767, 0.829, 0.891, 0.959, 1.027],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.504, 0.545, 0.586, 0.645, 0.686, 0.733, 0.797, 0.861, 0.926, 0.996, 1.067],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.581, 0.628, 0.675, 0.743, 0.79, 0.844, 0.918, 0.992, 1.067, 1.148, 1.229],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("天狗咒雷•伏伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.258, 1.352, 1.446, 1.572, 1.666, 1.761, 1.886, 2.012, 2.138, 2.264, 2.389, 2.515, 2.672],
      }),
      createAttack("2命·鸦羽", AttackType.Skill, ElementType.Electro, {
        atk: [1.258, 1.352, 1.446, 1.572, 1.666, 1.761, 1.886, 2.012, 2.138, 2.264, 2.389, 2.515, 2.672].map(
          (i) => i * 0.3
        ),
      }),
    ],
    burstSkill: [
      createAttack("天狗咒雷•金刚坏伤害", AttackType.Burst, ElementType.Electro, {
        atk: [4.096, 4.403, 4.71, 5.12, 5.427, 5.734, 6.144, 6.554, 6.963, 7.373, 7.782, 8.192, 8.704, 9.216],
      }),
      createAttack("天狗咒雷•雷砾伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.341, 0.367, 0.392, 0.427, 0.452, 0.478, 0.512, 0.546, 0.58, 0.614, 0.648, 0.682, 0.725, 0.768],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "天狗咒雷•伏",
        describe: "对范围内当前场上当前角色基于九条裟罗的基础攻击力，以一定比例获得攻击力加成",
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => {
              let a = [0.43, 0.46, 0.49, 0.54, 0.57, 0.6, 0.64, 0.69, 0.73, 0.77, 0.82, 0.86, 0.91][
                data.skillLevel + data.skillLevelAdd - 1
              ];
              return data.baseATK * a;
            },
            actionOn: ActionOn.Indirect,
            transform: true,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·我界",
        describe: "处于天狗咒雷带来的攻击力提升效果状态下的角色，其雷元素伤害的暴击伤害提高60%",
        effect: [
          {
            type: BuffType.ElectroCritcalHurt,
            getValue: () => 60,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ],
  },
  {
    ...cha(10000053, "早柚", ElementType.Anemo, WeaponType.GreatSword)(Rarity.Four, 11854, 244, 745, 80)(
      "UI_AvatarIcon_Sayu",
      [
        "UI_Talent_S_Sayu_01",
        "UI_Talent_S_Sayu_02",
        "UI_Talent_U_Sayu_02",
        "UI_Talent_S_Sayu_03",
        "UI_Talent_U_Sayu_01",
        "UI_Talent_S_Sayu_04",
      ],
      ["普通攻击·忍刀·终末番", "呜呼流·风隐急进", "呜呼流·影貉缭乱"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.724, 0.782, 0.84, 0.924, 0.983, 1.05, 1.142, 1.235, 1.327, 1.428, 1.544],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.714, 0.772, 0.83, 0.913, 0.971, 1.038, 1.129, 1.22, 1.311, 1.411, 1.525],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.689, 0.742, 0.798, 0.859, 0.928],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.689, 0.742, 0.798, 0.859, 0.928],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.983, 1.061, 1.141, 1.255, 1.335, 1.426, 1.552, 1.677, 1.803, 1.94, 2.097],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.626, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.239, 1.324],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("风风轮伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
      }),
      createAttack(
        "点按伤害",
        AttackType.Skill,
        ElementType.Anemo,
        {
          atk: [1.584, 1.703, 1.822, 1.98, 2.099, 2.218, 2.376, 2.534, 2.693, 2.851, 3.01, 3.168, 3.366],
        },
        "sayo"
      ),
      createAttack(
        "长按伤害",
        AttackType.Skill,
        ElementType.Anemo,
        {
          atk: [2.176, 2.339, 2.502, 2.72, 2.883, 3.046, 3.264, 3.482, 3.699, 3.917, 4.134, 4.352, 4.624],
        },
        "sayo"
      ),
      createAttack("附带元素伤害·火", AttackType.Skill, ElementType.Pyro, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      createAttack(
        "长按附带元素伤害·火",
        AttackType.Skill,
        ElementType.Pyro,
        {
          atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
        },
        "sayo"
      ),
      createAttack("附带元素伤害·水", AttackType.Skill, ElementType.Hydro, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      createAttack(
        "长按附带元素伤害·水",
        AttackType.Skill,
        ElementType.Hydro,
        {
          atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
        },
        "sayo"
      ),
      createAttack("附带元素伤害·冰", AttackType.Skill, ElementType.Cryo, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      createAttack(
        "长按附带元素伤害·冰",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
        },
        "sayo"
      ),
      createAttack("附带元素伤害·雷", AttackType.Skill, ElementType.Electro, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      createAttack(
        "长按附带元素伤害·雷",
        AttackType.Skill,
        ElementType.Electro,
        {
          atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
        },
        "sayo"
      ),
    ],
    burstSkill: [
      createAttack("技能发动伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [1.17, 1.26, 1.34, 1.46, 1.55, 1.64, 1.75, 1.87, 1.99, 2.1, 2.22, 2.34, 2.48, 2.63],
      }),
      createAttack("不倒貉貉伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.52, 0.56, 0.6, 0.65, 0.69, 0.73, 0.78, 0.83, 0.88, 0.94, 0.99, 1.04, 1.11, 1.17],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_MYSTERY_96,
      {
        label: "2命·理清逃跑路线",
        describe: `点按施放时，风风轮舞踢造成的伤害提高3.3%。处于长按施放后的风风轮状态下时，每0.5秒，就会使这次施展的风风轮舞造成的伤害提高3.3%。通过这种方式，风风轮舞踢造成的伤害至多可以提高66%。`,
        effect: [{ type: BuffType.SkillPrcent, getValue: (_, s) => 3.3 * s, special: "sayo" }],
        condition: ({ constellation }) => constellation >= 2,
        enable: true,
        stack: 0,
        stackable: true,
        limit: 20,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·呼呼大睡时间",
        describe:
          "早柚每点元素精通能使不倒貉貉的攻击额外造成0.2%攻击力的伤害。通过这种方式至多额外造成400%攻击力的伤害",
        condition: ({ constellation }) => constellation >= 6,
        enable: true,
        effect: [
          {
            type: BuffType.BurstFixed,
            getValue: (data) => {
              return (
                ((data.baseATK + data.extraATK + data.extraATK_NT) *
                  Math.min(400, data.elementalMystery + data.elementalMystery_NT * 0.2)) /
                100
              );
            },
          },
        ],
      },
    ],
  },
  {
    ...cha(10000048, "烟绯", ElementType.Pyro, WeaponType.Magic)(Rarity.Four, 9352, 240, 587, 80)(
      "UI_AvatarIcon_Feiyan",
      [
        "UI_Talent_S_Feiyan_01",
        "UI_Talent_S_Feiyan_02",
        "UI_Talent_U_Feiyan_01",
        "UI_Talent_S_Feiyan_03",
        "UI_Talent_U_Feiyan_02",
        "UI_Talent_S_Feiyan_04",
      ],
      ["普通攻击·火漆制印", "丹书立约", "凭此结契"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.5834, 0.6272, 0.6709, 0.7293, 0.773, 0.8168, 0.8751, 0.9335, 0.9918, 1.0501, 1.1085],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.5213, 0.5604, 0.5994, 0.6516, 0.6907, 0.7298, 0.7819, 0.834, 0.8861, 0.9383, 0.9904],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.7601, 0.8171, 0.8741, 0.9502, 1.0072, 1.0642, 1.1402, 1.2162, 1.2922, 1.3682, 1.4442],
      }),
      createAttack("重击·0层", AttackType.Strong, ElementType.Pyro, {
        atk: [0.9823, 1.0411, 1.0999, 1.1764, 1.2352, 1.294, 1.3705, 1.447, 1.5234, 1.5999, 1.6764],
      }),
      createAttack("重击·1层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.1556, 1.2248, 1.294, 1.384, 1.4532, 1.5224, 1.6124, 1.7023, 1.7923, 1.8822, 1.9722],
      }),
      createAttack("重击·2层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.329, 1.4086, 1.4881, 1.5916, 1.6712, 1.7508, 1.8542, 1.9577, 2.0611, 2.1646, 2.268],
      }),
      createAttack("重击·3层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.5023, 1.5923, 1.6823, 1.7992, 1.8892, 1.9791, 2.0961, 2.213, 2.33, 2.4469, 2.5639],
      }),
      createAttack("重击·4层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.6757, 1.776, 1.8764, 2.0068, 2.1071, 2.2075, 2.3379, 2.4684, 2.5988, 2.7292, 2.8597],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Pyro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.696, 1.8232, 1.9504, 2.12, 2.2472, 2.3744, 2.544, 2.7136, 2.8832, 3.0528, 3.2224, 3.392, 3.604],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.824, 1.9608, 2.0976, 2.28, 2.4168, 2.5536, 2.736, 2.9184, 3.1008, 3.2832, 3.4656, 3.648, 3.876, 4.104],
      }),
    ],
    otherSkill: [
      createAttack("法兽灼眼", AttackType.Strong, ElementType.Pyro, {
        atk: [0.8],
      }),
    ],
    buffs: [
      A_80_PYRO_24P,
      {
        label: "关联条款",
        describe: "烟绯通过重击消耗丹火印时，每枚丹火印会提升烟绯5%的火元素伤害加成",
        effect: [{ type: BuffType.PyroPrcent, getValue: (_, s) => s * 5 }],
        stackable: true,
        stack: 3,
        stackText: "丹火印",
        enable: true,
        limit: 4,
      },
      {
        label: "2命·最终解释权",
        describe: "烟绯的重击对于生命值低于50%的敌人，暴击率提高20%",
        effect: [{ type: BuffType.StrongCritcal, getValue: () => 20 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000045, "罗莎莉亚", ElementType.Cryo, WeaponType.Polearms)(Rarity.Four, 12289, 240, 710, 60)(
      "UI_AvatarIcon_Rosaria",
      [
        "UI_Talent_S_Rosaria_01",
        "UI_Talent_S_Rosaria_02",
        "UI_Talent_U_Rosaria_01",
        "UI_Talent_S_Rosaria_03",
        "UI_Talent_U_Rosaria_02",
        "UI_Talent_S_Rosaria_04",
      ],
      ["普通攻击·教会枪术", "噬罪的告解", "终命的圣礼"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.525, 0.567, 0.61, 0.671, 0.714, 0.763, 0.83, 0.897, 0.964, 1.037, 1.11],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.516, 0.558, 0.6, 0.66, 0.702, 0.75, 0.816, 0.882, 0.948, 1.02, 1.092],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.318, 0.344, 0.37, 0.407, 0.433, 0.463, 0.503, 0.544, 0.585, 0.629, 0.673],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.318, 0.344, 0.37, 0.407, 0.433, 0.463, 0.503, 0.544, 0.585, 0.629, 0.673],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.697, 0.753, 0.81, 0.891, 0.948, 1.013, 1.102, 1.191, 1.28, 1.377, 1.474],
      }),
      createAttack("五段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.416, 0.45, 0.484, 0.532, 0.566, 0.605, 0.658, 0.711, 0.765, 0.823, 0.881],
      }),
      createAttack("五段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.37, 1.48, 1.59, 1.75, 1.86, 1.99, 2.16, 2.34, 2.51, 2.7, 2.89],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害·1", AttackType.Skill, ElementType.Cryo, {
        atk: [0.58, 0.63, 0.67, 0.73, 0.77, 0.82, 0.88, 0.93, 0.99, 1.05, 1.11, 1.17, 1.24],
      }),
      createAttack("技能伤害·2", AttackType.Skill, ElementType.Cryo, {
        atk: [1.36, 1.46, 1.56, 1.7, 1.8, 1.9, 2.04, 2.18, 2.31, 2.45, 2.58, 2.72, 2.89],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害·1", AttackType.Burst, ElementType.Cryo, {
        atk: [1.04, 1.18, 1.2, 1.3, 1.38, 1.46, 1.56, 1.66, 1.77, 1.87, 1.98, 2.08, 2.21, 2.34],
      }),
      createAttack("技能伤害·2", AttackType.Burst, ElementType.Cryo, {
        atk: [1.52, 1.634, 1.75, 1.9, 2.01, 2.13, 2.28, 2.43, 2.58, 2.74, 2.89, 3.04, 3.23, 3.42],
      }),
      createAttack("冰枪持续伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81, 2.97],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "聆听忏悔的幽影",
        describe: "噬罪的告解从技能目标的背后攻击时，罗莎莉亚的暴击率提升12%",
        effect: [{ type: BuffType.Critcal, getValue: () => 12 }],
        enable: true,
      },
      {
        label: "暗中支援的黯色",
        describe:
          "施放终命的圣礼时，基于自身暴击率的15%，提高附近的队伍中所有角色（不包括罗莎莉亚自己）的暴击率，持续10秒。通过这种方式获得的暴击率提升，无法超过15%",
        effect: [
          {
            type: BuffType.Critcal,
            getValue: (data) => Math.min(15, data.critcal * 0.15),
            actionOn: ActionOn.Indirect,
          },
        ],
        target: BuffTarget.Other,
        enable: false,
        shareable: true,
      },
      {
        label: "1命·罪之导引",
        describe: "罗莎莉亚的攻击造成暴击后，普通攻击造成的伤害提升10%",
        effect: [{ type: BuffType.NormalPrcent, getValue: () => 10 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 1,
      },
      Constellation_E_3,
      Constellation_Q_5,

      {
        label: "6命·代行裁判",
        describe: "终命的圣礼的攻击会使敌人的物理抗性降低20%",
        effect: [{ type: BuffType.EnemyPhysicalResistance, getValue: () => -20 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
        shareable: true,
        target: BuffTarget.Enemy,
      },
    ],
  },
  {
    ...cha(10000044, "辛焱", ElementType.Pyro, WeaponType.GreatSword)(Rarity.Four, 11201, 249, 799, 60)(
      "UI_AvatarIcon_Xinyan",
      [
        "UI_Talent_S_Xinyan_01",
        "UI_Talent_S_Xinyan_02",
        "UI_Talent_U_Xinyan_01",
        "UI_Talent_S_Xinyan_03",
        "UI_Talent_U_Xinyan_02",
        "UI_Talent_S_Xinyan_04",
      ],
      ["普通攻击·炎舞", "热情拂扫", "叛逆刮弦"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.765, 0.828, 0.89, 0.979, 1.041, 1.113, 1.21, 1.308, 1.406, 1.513, 1.62],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.74, 0.8, 0.86, 0.946, 1.006, 1.075, 1.17, 1.264, 1.359, 1.462, 1.565],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.955, 1.032, 1.11, 1.211, 1.3, 1.388, 1.51, 1.632, 1.754, 1.887, 2.02],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.158, 1.253, 1.347, 1.482, 1.576, 1.684, 1.832, 1.98, 2.128, 2.29, 2.452],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.626, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.239, 1.324],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("挥舞伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.7, 1.82, 1.95, 2.12, 2.25, 2.37, 2.54, 2.71, 2.88, 3.05, 3.22, 3.39, 3.6],
      }),
      createAttack("持续伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.336, 0.361, 0.386, 0.42, 0.445, 0.474, 0.504, 0.538, 0.571, 0.605, 0.638, 0.672, 0.714],
      }),
    ],
    burstSkill: [
      createAttack(
        "技能伤害",
        AttackType.Burst,
        ElementType.Physical,
        {
          atk: [3.4, 3.66, 3.92, 4.26, 4.52, 4.77, 5.11, 5.45, 5.79, 6.13, 6.48, 6.82, 7.24, 7.67],
        },
        "Xinyan"
      ),
      createAttack("火元素持续伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "「这才是摇滚！」",
        describe: "处于热情拂扫的护盾保护下的角色造成的物理伤害提高15%",
        effect: [{ type: BuffType.PhysicalPrcent, getValue: () => 15 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·开场即兴段",
        describe: "叛逆刮弦造成的物理伤害暴击率提升100%",
        effect: [{ type: BuffType.BurstCritcal, getValue: () => 100, special: "Xinyan" }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      {
        label: "4命·节奏的传染",
        describe: "热情拂扫的伤害，会使敌人的物理抗性降低15%",
        effect: [{ type: BuffType.EnemyPhysicalResistance, getValue: () => -15 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 4,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_Q_5,
      {
        label: "6命·地狱里摇摆",
        describe: "重击时，将基于防御力的50%加成获得攻击力加成",
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => {
              return (data.baseDEF + data.extraDEF) * 0.5;
            },
          },
        ],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000039, "迪奥娜", ElementType.Cryo, WeaponType.Bow)(Rarity.Four, 9570, 212, 601, 80)(
      "UI_AvatarIcon_Diona",
      [
        "UI_Talent_S_Diona_01",
        "UI_Talent_S_Diona_02",
        "UI_Talent_U_Diona_01",
        "UI_Talent_S_Diona_03",
        "UI_Talent_U_Diona_02",
        "UI_Talent_S_Diona_04",
      ],
      ["普通攻击·猎人射术", "猫爪冻冻", "最烈特调"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.772],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.335, 0.363, 0.39, 0.429, 0.456, 0.488, 0.53, 0.573, 0.616, 0.663, 0.717],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.456, 0.493, 0.53, 0.583, 0.62, 0.663, 0.721, 0.779, 0.837, 0.901, 0.974],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.919],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.538, 0.581, 0.625, 0.688, 0.731, 0.781, 0.85, 0.919, 0.988, 1.063, 1.148],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.69, 0.75, 0.806, 0.867, 0.937],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("猫爪伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.419, 0.451, 0.482, 0.524, 0.555, 0.587, 0.629, 0.671, 0.713, 0.755, 0.796, 0.838, 0.891],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8],
      }),
      createAttack("领域持续伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [0.526, 0.566, 0.605, 0.658, 0.697, 0.737, 0.79, 0.842, 0.895, 0.948, 1, 1.053, 1.119, 1.184],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_CRYO_24P,
      {
        label: "2命·猫爪冰摇",
        describe: "猫爪冻冻造成的伤害提高15%",
        effect: [{ type: BuffType.SkillPrcent, getValue: () => 15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·猫尾打烊之时",
        describe: "最烈特调领域内的角色生命值高于50%时，元素精通提升200",
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 200 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
        shareable: true,
        target: BuffTarget.All,
      },
    ],
  },
  {
    ...cha(10000043, "砂糖", ElementType.Anemo, WeaponType.Magic)(Rarity.Four, 9244, 170, 703, 80)(
      "UI_AvatarIcon_Sucrose",
      [
        "UI_Talent_S_Sucrose_01",
        "UI_Talent_S_Sucrose_02",
        "UI_Talent_U_Sucrose_01",
        "UI_Talent_S_Sucrose_03",
        "UI_Talent_U_Sucrose_02",
        "UI_Talent_S_Sucrose_04",
      ],
      ["普通攻击·简式风灵作成", "风灵作成·陆叁零捌", "禁·风灵作成·柒伍同构贰型"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.335, 0.36, 0.385, 0.418, 0.443, 0.468, 0.502, 0.535, 0.569, 0.602, 0.636],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.306, 0.329, 0.352, 0.383, 0.406, 0.429, 0.459, 0.49, 0.521, 0.551, 0.582],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.384, 0.413, 0.442, 0.481, 0.509, 0.538, 0.577, 0.615, 0.654, 0.692, 0.731],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.479, 0.515, 0.551, 0.599, 0.635, 0.671, 0.719, 0.767, 0.815, 0.863, 0.91],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Anemo, {
        atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.11, 2.27, 2.43, 2.64, 2.8, 2.96, 3.17, 3.38, 3.59, 3.8, 4.01, 4.22, 4.49],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [1.48, 1.59, 1.7, 1.85, 1.96, 2.07, 2.22, 2.37, 2.52, 2.66, 2.81, 2.96, 3.15, 3.33],
      }),
      createAttack("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
      createAttack("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
      createAttack("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
      createAttack("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ANEMO_24P,
      {
        label: "触媒置换术",
        describe: "砂糖触发扩散反应时，使队伍中所有对应元素类型的角色（不包括砂糖自己）基础元素精通提升50点",
        effect: [{ type: BuffType.MysteryFixed, getValue: () => 50 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Other,
      },
      {
        label: "小小的慧风",
        describe:
          "风灵作成·陆叁零捌或禁·风灵作成·染伍同构贰型命中敌人时，基于砂糖基础元素精通的20%，为队伍中所有角色（不包括砂糖自己）提供非基础元素精通加成",
        effect: [{ type: BuffType.MysteryFixed, getValue: (data) => data.elementalMystery * 0.2, transform: true }],
        enable: false,
        shareable: true,
        target: BuffTarget.Other,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·混元熵增论·火增伤",
        describe:
          "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
        effect: [{ type: BuffType.PyroPrcent, getValue: () => 20 }],
        condition: ({ constellation }) => constellation >= 6,
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "6命·混元熵增论·冰增伤",
        describe:
          "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
        effect: [{ type: BuffType.CryoPrcent, getValue: () => 20 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "6命·混元熵增论·水增伤",
        describe:
          "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
        effect: [{ type: BuffType.HydroPrcent, getValue: () => 20 }],
        condition: ({ constellation }) => constellation >= 6,
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "6命·混元熵增论·雷增伤",
        describe:
          "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
        effect: [{ type: BuffType.ElectroPrcent, getValue: () => 20 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
        shareable: true,
        target: BuffTarget.All,
      },
    ],
  },
  {
    ...cha(10000031, "菲谢尔", ElementType.Electro, WeaponType.Bow)(Rarity.Four, 9189, 244, 594, 60)(
      "UI_AvatarIcon_Fischl",
      [
        "UI_Talent_S_Fischl_01",
        "UI_Talent_S_Fischl_02",
        "UI_Talent_U_Fischl_01",
        "UI_Talent_S_Fischl_03",
        "UI_Talent_U_Fischl_02",
        "UI_Talent_S_Fischl_04",
      ],
      ["普通攻击·罪灭之矢", "夜巡影翼", "至夜幻现"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.441, 0.477, 0.513, 0.564, 0.6, 0.641, 0.698, 0.754, 0.811, 0.872, 0.934],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.468, 0.506, 0.544, 0.598, 0.636, 0.68, 0.74, 0.8, 0.86, 0.925, 0.99],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.581, 0.629, 0.676, 0.744, 0.791, 0.845, 0.919, 0.994, 1.07, 1.15, 1.23],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.577, 0.624, 0.671, 0.738, 0.785, 0.839, 0.913, 0.986, 1.06, 1.14, 1.22],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.721, 0.779, 0.838, 0.922, 0.98, 1.05, 1.14, 1.23, 1.32, 1.42, 1.53],
      }),
      createAttack("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("噬星魔鸦", AttackType.Strong, ElementType.Electro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36].map((i) => i * 1.527),
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("奥兹攻击伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.888, 0.955, 1.02, 1.11, 1.18, 1.24, 1.33, 1.42, 1.51, 1.6, 1.69, 1.78, 1.89],
      }),
      createAttack("召唤伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.15, 1.24, 1.33, 1.44, 1.53, 1.62, 1.73, 1.85, 1.96, 2.08, 2.19, 2.31, 2.45],
      }),
    ],
    burstSkill: [
      createAttack("落雷伤害", AttackType.Burst, ElementType.Electro, {
        atk: [2.08, 2.24, 2.39, 2.6, 2.76, 2.91, 3.12, 3.33, 3.54, 3.74, 3.95, 4.16, 4.42, 4.68],
      }),
    ],
    otherSkill: [
      createAttack("断罪雷影", AttackType.Skill, ElementType.Electro, {
        atk: [0.8],
      }),
      createAttack("1命·幽邃鸦眼", AttackType.Normal, ElementType.Physical, {
        atk: [0.22],
      }),
      createAttack("4命·皇女幻绮谭", AttackType.Burst, ElementType.Electro, {
        atk: [2.22],
      }),
      createAttack("6命·永夜之禽", AttackType.Skill, ElementType.Electro, {
        atk: [0.3],
      }),
    ],
    buffs: [
      A_80_ATK_24P,
      {
        label: "2命·圣裁影羽",
        describe: "施放夜巡影翼时，能额外造成200%攻击力的伤害",
        effect: [
          { type: BuffType.SkillFixed, getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 2 },
        ],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000006, "丽莎", ElementType.Electro, WeaponType.Magic)(Rarity.Four, 9570, 232, 573, 80)(
      "UI_AvatarIcon_Lisa",
      [
        "UI_Talent_S_Lisa_01",
        "UI_Talent_S_Lisa_02",
        "UI_Talent_U_Lisa_02",
        "UI_Talent_S_Lisa_03",
        "UI_Talent_U_Lisa_01",
        "UI_Talent_S_Lisa_04",
      ],
      ["普通攻击·指尖雷暴", "苍雷", "蔷薇的雷光"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.396, 0.426, 0.455, 0.495, 0.525, 0.554, 0.594, 0.634, 0.673, 0.713, 0.754],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.359, 0.386, 0.413, 0.449, 0.476, 0.503, 0.539, 0.575, 0.611, 0.647, 0.684],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.428, 0.46, 0.492, 0.535, 0.567, 0.599, 0.642, 0.685, 0.728, 0.77, 0.815],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.55, 0.591, 0.632, 0.687, 0.728, 0.769, 0.824, 0.879, 0.934, 0.989, 1.046],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Electro, {
        atk: [1.77, 1.9, 2.04, 2.21, 2.35, 2.48, 2.66, 2.83, 3.01, 3.19, 3.37],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("点按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7],
      }),
      createAttack("无引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [3.2, 3.44, 3.68, 4, 4.24, 4.48, 4.8, 5.12, 5.44, 5.76, 6.08, 6.4, 6.8],
      }),
      createAttack("一层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [3.68, 3.96, 4.23, 4.6, 4.88, 5.15, 5.52, 5.89, 6.26, 6.62, 6.99, 7.36, 7.82],
      }),
      createAttack("二层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [4.24, 4.56, 4.88, 5.3, 5.62, 5.94, 6.36, 6.78, 7.21, 7.63, 8.06, 8.48, 9.01],
      }),
      createAttack("三层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [4.87, 5.24, 5.6, 6.09, 6.46, 6.82, 7.31, 7.8, 8.28, 8.77, 9.26, 9.74, 10.35],
      }),
    ],
    burstSkill: [
      createAttack("雷光放电伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.366, 0.393, 0.42, 0.457, 0.484, 0.512, 0.548, 0.585, 0.622, 0.658, 0.695, 0.731, 0.777, 0.823],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_MYSTERY_96,
      {
        label: "静电立场",
        describe: "敌人受到蔷薇的雷光攻击后，降低15%防御力",
        effect: [{ type: BuffType.ReduceArmour, getValue: () => 15 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000020, "雷泽", ElementType.Electro, WeaponType.GreatSword)(Rarity.Four, 11962, 234, 751, 80)(
      "UI_AvatarIcon_Razor",
      [
        "UI_Talent_S_Razor_01",
        "UI_Talent_S_Razor_02",
        "UI_Talent_U_Razor_02",
        "UI_Talent_S_Razor_03",
        "UI_Talent_U_Razor_01",
        "UI_Talent_S_Razor_04",
      ],
      ["普通攻击·钢脊", "利爪与苍雷", "雷牙"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.959, 1.024, 1.09, 1.177, 1.24, 1.32, 1.42, 1.52, 1.61, 1.71, 1.81],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.826, 0.883, 0.939, 1.01, 1.07, 1.14, 1.22, 1.31, 1.39, 1.47, 1.56],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.033, 1.103, 1.174, 1.27, 1.34, 1.42, 1.53, 1.63, 1.74, 1.84, 1.95],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.36, 1.45, 1.546, 1.67, 1.76, 1.87, 2.01, 2.15, 2.29, 2.43, 2.57],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.99, 1.07, 1.15, 1.24, 1.32],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.82, 0.887, 0.954, 1.05, 1.12, 1.19, 1.3, 1.4, 1.51, 1.62, 1.74],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.64, 1.77, 1.91, 2.1, 2.23, 2.38, 2.59, 2.8, 3.01, 3.24, 3.47],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [2.05, 2.22, 2.38, 2.62, 2.79, 2.98, 3.24, 3.5, 3.76, 4.05, 4.34],
      }),
    ],
    elementSkill: [
      createAttack("点按技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.99, 2.14, 2.29, 2.49, 2.64, 2.79, 2.99, 3.19, 3.39, 3.586, 3.785, 3.984, 4.233],
      }),
      createAttack("长按技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [2.95, 3.17, 3.39, 3.69, 3.91, 4.13, 4.43, 4.72, 5.02, 5.31, 5.61, 5.9, 6.27],
      }),
    ],
    burstSkill: [
      createAttack("爆发伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6],
      }),
      createAttack("狼魂·1伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.959, 1.024, 1.09, 1.177, 1.24, 1.32, 1.42, 1.52, 1.61, 1.71, 1.81].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
      createAttack("狼魂·2伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.826, 0.883, 0.939, 1.01, 1.07, 1.14, 1.22, 1.31, 1.39, 1.47, 1.56].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
      createAttack("狼魂·三段伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.033, 1.103, 1.174, 1.27, 1.34, 1.42, 1.53, 1.63, 1.74, 1.84, 1.95].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
      createAttack("狼魂·四段伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.36, 1.45, 1.546, 1.67, 1.76, 1.87, 2.01, 2.15, 2.29, 2.43, 2.57].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
    ],
    otherSkill: [
      createAttack("6命·天狼落雷", AttackType.Other, ElementType.Electro, {
        atk: [1],
      }),
    ],
    buffs: [
      A_80_PHYSICAL_30P,
      {
        label: "饥饿",
        describe: "雷泽的元素能量在50%以下时，元素充能效率提高30%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 }],
        enable: true,
      },
      {
        label: "雷之印充能",
        describe: "每有一个雷之印，元素充能效率提高20%",
        effect: [{ type: BuffType.ChargeFixed, getValue: (_, s) => 20 * s }],
        enable: true,
        stackable: true,
        limit: 3,
        stack: 0,
        stackText: "雷之印",
      },
      {
        label: "1命·狼性",
        describe: "雷泽获取元素晶球或元素微粒后的8秒内，造成的伤害提高10%",
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => 10 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 1,
      },
      {
        label: "2命·压制",
        describe: "雷泽攻击生命值低于30％的敌人时，暴击率提高10%",
        effect: [{ type: BuffType.Critcal, getValue: () => 10 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      {
        label: "4命·撕咬",
        describe: "利爪与苍雷点按时，会使命中的敌人防御力降低15%，持续7秒",
        effect: [{ type: BuffType.ReduceArmour, getValue: () => 15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 4,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000024, "北斗", ElementType.Electro, WeaponType.GreatSword)(Rarity.Four, 13050, 225, 648, 80)(
      "UI_AvatarIcon_Beidou",
      [
        "UI_Talent_S_Beidou_02",
        "UI_Talent_S_Beidou_01",
        "UI_Talent_U_Beidou_01",
        "UI_Talent_S_Beidou_03",
        "UI_Talent_U_Beidou_02",
        "UI_Talent_S_Beidou_04",
      ],
      ["普通攻击·征涛", "捉浪", "斫雷"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.711, 0.769, 0.827, 0.91, 0.968, 1.03, 1.12, 1.22, 1.31, 1.41, 1.52],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.709, 0.767, 0.824, 0.906, 0.964, 1.03, 1.12, 1.21, 1.3, 1.4, 1.51],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.883, 0.955, 1.03, 1.13, 1.2, 1.28, 1.4, 1.51, 1.62, 1.75, 1.89],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.865, 0.936, 1.01, 1.11, 1.18, 1.26, 1.37, 1.48, 1.59, 1.71, 1.85],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.12, 1.21, 1.3, 1.43, 1.53, 1.63, 1.77, 1.92, 2.06, 2.22, 2.4],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.562, 0.608, 0.654, 0.719, 0.765, 0.818, 0.889, 0.961, 1.03, 1.11, 1.2],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.02, 1.1, 1.18, 1.3, 1.39, 1.48, 1.61, 1.74, 1.87, 2.01, 2.18],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.01, 1.08, 1.18, 1.27, 1.37, 1.47, 1.58],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("基础伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.22, 1.31, 1.4, 1.52, 1.61, 1.7, 1.82, 1.95, 2.07, 2.19, 2.31, 2.43, 2.58],
      }),
      createAttack("一层伤害", AttackType.Skill, ElementType.Electro, {
        atk: [
          1.22 + 1.6,
          1.31 + 1.72,
          1.4 + 1.84,
          1.52 + 2,
          1.61 + 2.12,
          1.7 + 2.24,
          1.82 + 2.4,
          1.95 + 2.56,
          2.07 + 2.72,
          2.19 + 2.88,
          2.31 + 3.04,
          2.43 + 3.2,
          2.58 + 3.4,
        ],
      }),
      createAttack("两层伤害", AttackType.Skill, ElementType.Electro, {
        atk: [
          1.22 + 1.6 * 2,
          1.31 + 1.72 * 2,
          1.4 + 1.84 * 2,
          1.52 + 2 * 2,
          1.61 + 2.12 * 2,
          1.7 + 2.24 * 2,
          1.82 + 2.4 * 2,
          1.95 + 2.56 * 2,
          2.07 + 2.72 * 2,
          2.19 + 2.88 * 2,
          2.31 + 3.04 * 2,
          2.43 + 3.2 * 2,
          2.58 + 3.4 * 2,
        ],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.22, 1.31, 1.4, 1.52, 1.61, 1.7, 1.82, 1.95, 2.07, 2.19, 2.31, 2.43, 2.58, 2.74],
      }),
      createAttack("闪雷伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04, 2.16],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ELECTRO_24P,
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·北斗祓幽孽",
        describe: "斫雷持续期间，周围敌人的雷元素抗性降低15%",
        effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -15 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
        shareable: true,
        target: BuffTarget.Enemy,
      },
    ],
  },
  {
    ...cha(10000023, "香菱", ElementType.Pyro, WeaponType.Polearms)(Rarity.Four, 10875, 225, 669, 80)(
      "UI_AvatarIcon_Xiangling",
      [
        "UI_Talent_S_Xiangling_01",
        "UI_Talent_S_Xiangling_02",
        "UI_Talent_U_Xiangling_02",
        "UI_Talent_S_Xiangling_03",
        "UI_Talent_U_Xiangling_01",
        "UI_Talent_S_Xiangling_04",
      ],
      ["普通攻击·白案功夫", "锅巴出击", "旋火轮"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.421, 0.455, 0.489, 0.538, 0.572, 0.611, 0.665, 0.719, 0.773, 0.831, 0.899],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.421, 0.456, 0.49, 0.539, 0.573, 0.613, 0.666, 0.72, 0.774, 0.833, 0.9],
      }),
      createAttack("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
      }),
      createAttack("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
      }),
      createAttack("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
        atk: [0.141, 0.153, 0.164, 0.18, 0.192, 0.205, 0.223, 0.241, 0.259, 0.279, 0.301],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.71, 0.768, 0.826, 0.909, 0.966, 1.03, 1.12, 1.21, 1.31, 1.4, 1.52],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.22, 1.32, 1.42, 1.56, 1.66, 1.77, 1.92, 2.08, 2.24, 2.41, 2.6],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("喷火伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.11, 1.2, 1.28, 1.39, 1.47, 1.56, 1.67, 1.78, 1.89, 2, 2.11, 2.23, 2.36],
      }),
    ],
    burstSkill: [
      createAttack("一段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.72, 0.774, 0.828, 0.9, 0.954, 1.01, 1.08, 1.15, 1.22, 1.3, 1.37, 1.44, 1.53, 1.62],
      }),
      createAttack("二段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
      }),
      createAttack("三段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.1, 1.18, 1.26, 1.37, 1.45, 1.53, 1.64, 1.75, 1.86, 1.97, 2.08, 2.19, 2.33, 2.47],
      }),
      createAttack("旋火轮伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.12, 1.2, 1.29, 1.4, 1.48, 1.57, 1.68, 1.79, 1.9, 2.02, 2.13, 2.24, 2.38, 2.52],
      }),
    ],
    otherSkill: [
      createAttack("2命·大火宽油·内爆", AttackType.Other, ElementType.Pyro, {
        atk: [0.75],
      }),
    ],
    buffs: [
      A_80_MYSTERY_96,
      {
        label: "绝云朝天椒",
        describe: "锅巴会在消失的位置留下辣椒。拾取辣椒会提高10%攻击力",
        effect: [{ type: BuffType.ATKPrcent, getValue: () => 10 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "1命·外酥里嫩",
        describe: "受到锅巴攻击的敌人，火元素抗性降低15%",
        effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 1,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·大龙卷旋火轮",
        describe: "旋火轮持续期间，队伍中所有角色获得15%火元素伤害加成",
        effect: [{ type: BuffType.PyroPrcent, getValue: () => 15 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
        shareable: true,
        target: BuffTarget.All,
      },
    ],
  },
  {
    ...cha(10000021, "安柏", ElementType.Pyro, WeaponType.Bow)(Rarity.Four, 9461, 223, 601, 40)(
      "UI_AvatarIcon_Ambor",
      [
        "UI_Talent_S_Ambor_01",
        "UI_Talent_S_Ambor_02",
        "UI_Talent_U_Ambor_02",
        "UI_Talent_S_Ambor_03",
        "UI_Talent_U_Ambor_01",
        "UI_Talent_S_Ambor_04",
      ],
      ["普通攻击·神射手", "爆弹玩偶", "箭雨"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.764],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.764],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.464, 0.502, 0.54, 0.594, 0.632, 0.675, 0.734, 0.794, 0.853, 0.918, 0.983],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.473, 0.512, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.94, 1],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.593, 0.642, 0.69, 0.759, 0.807, 0.863, 0.938, 1.01, 1.09, 1.17, 1.26],
      }),
      createAttack("瞄准射击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      createAttack("满蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.23, 1.32, 1.42, 1.54, 1.63, 1.72, 1.85, 1.97, 2.09, 2.22, 2.34, 2.46, 2.62],
      }),
    ],
    burstSkill: [
      createAttack("箭雨单次伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.281, 0.302, 0.323, 0.351, 0.372, 0.393, 0.421, 0.449, 0.477, 0.505, 0.534, 0.562, 0.597, 0.632],
      }),
      createAttack("箭雨总伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [5.05, 5.43, 5.81, 6.32, 6.7, 7.08, 7.58, 8.09, 8.59, 9.1, 9.6, 10.11, 10.74, 11.37],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "百发百中！",
        describe: "箭雨的暴击率提高10%",
        effect: [
          {
            type: BuffType.BurstCritcal,
            getValue: () => 10,
          },
        ],
        enable: true,
      },
      {
        label: "压制射击",
        describe: "瞄准射击命中弱点时，攻击力提高15%",
        effect: [
          {
            type: BuffType.ATKPrcent,
            getValue: () => 15,
          },
        ],
        enable: false,
      },
      {
        label: "2命·一触即发",
        describe: "主动引爆兔兔伯爵时，会额外造成200%伤害（此增益作用于增伤乘区）",
        effect: [{ type: BuffType.SkillPrcent, getValue: () => 200 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·疾如野火",
        describe: "使用箭雨后的10秒内，队伍中所有角色的移动速度提升15%，攻击力提升15%",
        effect: [{ type: BuffType.ATKPrcent, getValue: () => 15 }],
        enable: false,
        condition: ({ constellation }) => constellation >= 6,
        shareable: true,
        target: BuffTarget.All,
      },
    ],
  },
  {
    ...cha(10000032, "班尼特", ElementType.Pyro, WeaponType.Sword)(Rarity.Four, 12397, 191, 771, 60)(
      "UI_AvatarIcon_Bennett",
      [
        "UI_Talent_S_Bennett_01",
        "UI_Talent_S_Bennett_02",
        "UI_Talent_U_Bennett_01",
        "UI_Talent_S_Bennett_03",
        "UI_Talent_U_Bennett_02",
        "UI_Talent_S_Bennett_04",
      ],
      ["普通攻击·好运剑", "热情过载", "美妙旅程"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.445, 0.482, 0.518, 0.57, 0.606, 0.648, 0.704, 0.762, 0.819, 0.881, 0.943],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.427, 0.462, 0.497, 0.547, 0.581, 0.621, 0.676, 0.731, 0.785, 0.845, 0.905],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.546, 0.591, 0.635, 0.699, 0.743, 0.794, 0.864, 0.934, 1.003, 1.08, 1.156],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.597, 0.645, 0.694, 0.763, 0.812, 0.868, 0.944, 1.02, 1.097, 1.18, 1.263],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.719, 0.777, 0.836, 0.92, 0.978, 1.05, 1.14, 1.23, 1.32, 1.42, 1.52],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.027, 1.105, 1.183],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.285],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("点按伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.38, 1.48, 1.58, 1.72, 1.82, 1.93, 2.06, 2.2, 2.34, 2.48, 2.61, 2.75, 2.92],
      }),
      createAttack("一段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.84, 0.903, 0.966, 1.05, 1.11, 1.18, 1.26, 1.34, 1.43, 1.51, 1.6, 1.68, 1.79],
      }),
      createAttack("一段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.92, 0.989, 1.06, 1.15, 1.22, 1.29, 1.38, 1.47, 1.56, 1.66, 1.75, 1.84, 1.96],
      }),
      createAttack("二段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87],
      }),
      createAttack("二段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04],
      }),
      createAttack("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [2.33, 2.5, 2.68, 2.91, 3.08, 3.26, 3.49, 3.72, 3.96, 4.19, 4.42, 4.66, 4.95, 5.24],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_CHARGE_26P,
      {
        label: "元素爆发·美妙旅程",
        describe: "基于班尼特的基础攻击力，以一定比例获得非基础攻击力加成",
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue(data) {
              let a = [0.56, 0.6, 0.64, 0.7, 0.74, 0.78, 0.84, 0.9, 0.95, 1.01, 1.06, 1.12, 1.19, 1.26][
                data.burstLevel + data.burstLevelAdd - 1
              ];
              if (data.constellation >= 1) {
                a += 0.2;
              }
              return data.baseATK * a;
            },
            transform: true,
          },
          {
            type: BuffType.PyroPrcent,
            getValue: ({ constellation }) => {
              return constellation >= 6 ? 15 : 0;
            },
          },
          {
            type: BuffType.Enchanting,
            getValue: ({ constellation }) => {
              return constellation >= 6 ? EnchantingType[ElementType.Pyro] : EnchantingType[ElementType.Physical];
            },
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·踏破绝境",
        describe: "班尼特的生命值低于70%时，元素充能效率提高30%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 30 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000025, "行秋", ElementType.Hydro, WeaponType.Sword)(Rarity.Four, 10222, 202, 758, 80)(
      "UI_AvatarIcon_Xingqiu",
      [
        "UI_Talent_S_Xingqiu_01",
        "UI_Talent_S_Xingqiu_02",
        "UI_Talent_U_Xingqiu_01",
        "UI_Talent_S_Xingqiu_03",
        "UI_Talent_U_Xingqiu_02",
        "UI_Talent_S_Xingqiu_04",
      ],
      ["普通攻击·古华剑法", "古华剑·画雨笼山", "古华剑·裁雨留虹"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.466, 0.504, 0.542, 0.596, 0.634, 0.678, 0.737, 0.797, 0.856, 0.921, 0.996],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.476, 0.515, 0.554, 0.609, 0.648, 0.693, 0.753, 0.814, 0.875, 0.942, 1.018],
      }),
      createAttack("三段伤害·前段", AttackType.Normal, ElementType.Physical, {
        atk: [0.286, 0.309, 0.332, 0.365, 0.388, 0.415, 0.452, 0.488, 0.525, 0.564, 0.61],
      }),
      createAttack("三段伤害·后段", AttackType.Normal, ElementType.Physical, {
        atk: [0.286, 0.309, 0.332, 0.365, 0.388, 0.415, 0.452, 0.488, 0.525, 0.564, 0.61],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.56, 0.605, 0.651, 0.716, 0.762, 0.814, 0.885, 0.957, 1.029, 1.107, 1.196],
      }),
      createAttack("五段伤害·前段", AttackType.Normal, ElementType.Physical, {
        atk: [0.359, 0.388, 0.417, 0.459, 0.488, 0.521, 0.567, 0.613, 0.659, 0.709, 0.766],
      }),
      createAttack("五段伤害·后段", AttackType.Normal, ElementType.Physical, {
        atk: [0.359, 0.388, 0.417, 0.459, 0.488, 0.521, 0.567, 0.613, 0.659, 0.709, 0.766],
      }),
      createAttack("重击伤害·前段", AttackType.Strong, ElementType.Physical, {
        atk: [0.473, 0.512, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.935, 1.011],
      }),
      createAttack("重击伤害·后段", AttackType.Strong, ElementType.Physical, {
        atk: [0.562, 0.607, 0.653, 0.718, 0.764, 0.816, 0.888, 0.96, 1.032, 1.11, 1.2],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害·前段", AttackType.Skill, ElementType.Hydro, {
        atk: [1.68, 1.81, 1.93, 2.1, 2.23, 2.35, 2.52, 2.69, 2.86, 3.02, 3.19, 3.36, 3.57],
      }),
      createAttack("技能伤害·后段", AttackType.Skill, ElementType.Hydro, {
        atk: [1.91, 2.06, 2.2, 2.39, 2.53, 2.68, 2.87, 3.06, 3.25, 3.44, 3.63, 3.82, 4.06],
      }),
    ],
    burstSkill: [
      createAttack("剑雨伤害", AttackType.Burst, ElementType.Hydro, {
        atk: [0.543, 0.583, 0.624, 0.678, 0.719, 0.76, 0.814, 0.868, 0.923, 0.977, 1.03, 1.09, 1.15, 1.22],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_ATK_24P,
      {
        label: "虚实工笔",
        describe: "行秋获得20%水元素伤害加成",
        effect: [{ type: BuffType.HydroPrcent, getValue: () => 20 }],
        enable: true,
      },
      {
        label: "2命·天青现虹",
        describe: "受到剑雨攻击的敌人，水元素抗性降低15%",
        effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_Q_3,
      {
        label: "4命·孤舟斩蛟",
        describe: "在古华剑·裁雨留虹效果持续期间，古华剑·画雨笼山造成的伤害提升50%",
        effect: [{ type: BuffType.SkillRate, getValue: () => 50 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000014, "芭芭拉", ElementType.Hydro, WeaponType.Magic)(Rarity.Four, 9787, 159, 669, 80)(
      "UI_AvatarIcon_Barbara",
      [
        "UI_Talent_S_Barbara_01",
        "UI_Talent_S_Barbara_02",
        "UI_Talent_U_Barbara_02",
        "UI_Talent_S_Barbara_03",
        "UI_Talent_U_Barbara_01",
        "UI_Talent_S_Barbara_04",
      ],
      ["普通攻击·水之浅唱", "演唱，开始♪", "闪耀奇迹♪"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.378, 0.407, 0.435, 0.473, 0.501, 0.53, 0.568, 0.605, 0.643, 0.681, 0.721],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.355, 0.382, 0.408, 0.444, 0.471, 0.497, 0.533, 0.568, 0.604, 0.639, 0.676],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.41, 0.441, 0.472, 0.513, 0.544, 0.575, 0.616, 0.657, 0.698, 0.739, 0.781],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.552, 0.593, 0.635, 0.69, 0.731, 0.773, 0.828, 0.883, 0.938, 0.994, 1.051],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Hydro, {
        atk: [1.66, 1.79, 1.91, 2.08, 2.2, 2.33, 2.49, 2.66, 2.83, 2.99, 3.17],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.42, 1.53, 1.62, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("水珠伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.584, 0.628, 0.672, 0.73, 0.774, 0.818, 0.876, 0.934, 0.993, 1.05, 1.11, 1.17, 1.24],
      }),
    ],
    burstSkill: [],
    otherSkill: [],
    buffs: [
      A_80_HP_24P,
      {
        label: "2命·元气迸发",
        describe: "演唱，开始♪技能持续期间，当前场上自己的角色获得15%水元素伤害加成",
        effect: [{ type: BuffType.HydroPrcent, getValue: () => 15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000027, "凝光", ElementType.Geo, WeaponType.Magic)(Rarity.Four, 9787, 212, 573, 40)(
      "UI_AvatarIcon_Ningguang",
      [
        "UI_Talent_S_Ningguang_01",
        "UI_Talent_S_Ningguang_05",
        "UI_Talent_U_Ningguang_02",
        "UI_Talent_S_Ningguang_03",
        "UI_Talent_U_Ningguang_01",
        "UI_Talent_S_Ningguang_04",
      ],
      ["普通攻击·千金掷", "璇玑屏", "天权崩玉"]
    ),
    normalAttack: [
      createAttack("普通攻击伤害", AttackType.Normal, ElementType.Geo, {
        atk: [0.28, 0.301, 0.322, 0.35, 0.371, 0.392, 0.42, 0.448, 0.469, 0.504, 0.533],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Geo, {
        atk: [1.74, 1.87, 2, 2.18, 2.31, 2.44, 2.61, 2.79, 2.96, 3.13, 3.31],
      }),
      createAttack("星璇伤害", AttackType.Strong, ElementType.Geo, {
        atk: [0.496, 0.533, 0.57, 0.62, 0.657, 0.694, 0.744, 0.794, 0.843, 0.893, 0.944],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Geo, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Normal, ElementType.Geo, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Geo, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Geo, {
        atk: [2.3, 2.48, 2.65, 2.88, 3.05, 3.23, 3.46, 3.69, 3.92, 4.15, 4.38, 4.61, 4.9],
      }),
    ],
    burstSkill: [
      createAttack("每颗宝石伤害", AttackType.Skill, ElementType.Geo, {
        atk: [0.87, 0.935, 1, 1.09, 1.15, 1.22, 1.3, 1.39, 1.48, 1.57, 1.65, 1.74, 1.85, 1.96],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_GEO_24P,
      {
        label: "储之千日，用之一刻",
        describe: "穿过璇玑屏的角色会获得12%岩元素伤害加成",
        effect: [{ type: BuffType.GeoPrcent, getValue: () => 12 }],
        enable: false,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },
  {
    ...cha(10000034, "诺艾尔", ElementType.Geo, WeaponType.GreatSword)(Rarity.Four, 12071, 191, 799, 60)(
      "UI_AvatarIcon_Noel",
      [
        "UI_Talent_S_Noel_01",
        "UI_Talent_S_Noel_02",
        "UI_Talent_U_Noel_01",
        "UI_Talent_S_Noel_03",
        "UI_Talent_U_Noel_02",
        "UI_Talent_S_Noel_04",
      ],
      ["普通攻击·西风剑术·女仆", "护心铠", "大扫除"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.791, 0.856, 0.92, 1.01, 1.08, 1.15, 1.25, 1.35, 1.45, 1.56, 1.67],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.734, 0.793, 0.853, 0.938, 0.998, 1.07, 1.16, 1.25, 1.35, 1.45, 1.55],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.863, 0.933, 1, 1.1, 1.17, 1.25, 1.36, 1.47, 1.58, 1.71, 1.83],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.13, 1.23, 1.32, 1.45, 1.54, 1.65, 1.79, 1.94, 2.08, 2.24, 2.4],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.507, 0.549, 0.59, 0.649, 0.69, 0.738, 0.802, 0.867, 0.932, 1.003, 1.074],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.905, 0.978, 1.05, 1.16, 1.23, 1.32, 1.43, 1.55, 1.66, 1.79, 1.92],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.01, 1.08, 1.18, 1.27, 1.37, 1.47, 1.58],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Geo, {
        def: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55],
      }),
    ],
    burstSkill: [
      createAttack("爆发伤害", AttackType.Burst, ElementType.Geo, {
        atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.01, 1.08, 1.14, 1.21, 1.28, 1.34, 1.43],
      }),
      createAttack("技能伤害", AttackType.Burst, ElementType.Geo, {
        atk: [0.928, 0.998, 1.07, 1.16, 1.23, 1.3, 1.39, 1.48, 1.58, 1.67, 1.76, 1.86, 1.97],
      }),
    ],
    otherSkill: [
      createAttack("4命·之后会扫干净的", AttackType.Skill, ElementType.Geo, {
        atk: [4],
      }),
    ],
    buffs: [
      A_80_DEF_24P,
      {
        label: "元素爆发·大扫除",
        describe: "基于诺艾尔的防御力，提高攻击力；将攻击伤害转为岩元素伤害",
        effect: [
          {
            type: BuffType.Transform,
            getValue: () => EnchantingType[ElementType.Geo],
          },
          {
            type: BuffType.ATKFixed,
            getValue(data) {
              let rate = [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85][
                data.burstLevel + data.burstLevelAdd - 1
              ];
              if (data.constellation >= 6) rate += 0.5;
              return (data.baseDEF + data.extraDEF) * rate;
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
      },
      {
        label: "2命·旋风女仆",
        describe: "诺艾尔的重击体力消耗降低20%，造成的伤害提升15％",
        effect: [{ type: BuffType.StrongPrcent, getValue: () => 15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000015, "凯亚", ElementType.Cryo, WeaponType.Sword)(Rarity.Four, 11636, 223, 792, 60)(
      "UI_AvatarIcon_Kaeya",
      [
        "UI_Talent_S_Kaeya_01",
        "UI_Talent_S_Kaeya_02",
        "UI_Talent_U_Kaeya_01",
        "UI_Talent_S_Kaeya_03",
        "UI_Talent_U_Kaeya_02",
        "UI_Talent_S_Kaeya_04",
      ],
      ["普通攻击·仪典剑术", "霜袭", "凛冽轮舞"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.538, 0.581, 0.625, 0.688, 0.731, 0.781, 0.85, 0.919, 0.988, 1.062, 1.148],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.517, 0.559, 0.601, 0.661, 0.703, 0.751, 0.817, 0.883, 0.95, 1.022, 1.104],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.653, 0.706, 0.759, 0.835, 0.888, 0.949, 1.032, 1.116, 1.199, 1.29, 1.395],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.709, 0.766, 0.824, 0.906, 0.964, 1.03, 1.121, 1.211, 1.302, 1.401, 1.514],
      }),
      createAttack("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.882, 0.954, 1.025, 1.129, 1.2, 1.283, 1.395, 1.508, 1.621, 1.744, 1.885],
      }),
      createAttack("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.55, 0.595, 0.64, 0.85, 0.704, 0.749, 0.8, 0.87, 0.941, 1.011, 1.088, 1.176],
      }),
      createAttack("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.731, 0.791, 0.85, 0.935, 0.995, 1.063, 1.156, 1.25, 1.343, 1.445, 1.562],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack("霜袭", AttackType.Skill, ElementType.Cryo, {
        atk: [1.91, 2.06, 2.2, 2.39, 2.53, 2.68, 2.87, 3.06, 3.25, 3.44, 3.63, 3.82, 4.06],
      }),
    ],
    burstSkill: [
      createAttack("凛冽轮舞", AttackType.Burst, ElementType.Cryo, {
        atk: [0.776, 0.834, 0.892, 0.97, 1.03, 1.09, 1.16, 1.24, 1.32, 1.4, 1.47, 1.55, 1.65, 1.75],
      }),
    ],
    otherSkill: [],
    buffs: [
      A_80_CHARGE_26P,
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
    ],
  },
  {
    ...cha(10000036, "重云", ElementType.Cryo, WeaponType.GreatSword)(Rarity.Four, 10984, 223, 648, 40)(
      "UI_AvatarIcon_Chongyun",
      [
        "UI_Talent_S_Chongyun_01",
        "UI_Talent_S_Chongyun_02",
        "UI_Talent_U_Chongyun_01",
        "UI_Talent_S_Chongyun_03",
        "UI_Talent_U_Chongyun_02",
        "UI_Talent_S_Chongyun_04",
      ],
      ["普通攻击·灭邪四式", "灵刃·重华叠霜", "灵刃·云开星落"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.7, 0.757, 0.814, 0.895, 0.952, 1.018, 1.107, 1.197, 1.286, 1.384, 1.481],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.631, 0.683, 0.734, 0.807, 0.859, 0.918, 0.998, 1.079, 1.16, 1.248, 1.336],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.803, 0.869, 0.934, 1.028, 1.093, 1.168, 1.27, 1.373, 1.476, 1.588, 1.7],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.012, 1.095, 1.177, 1.295, 1.377, 1.471, 1.601, 1.73, 1.86, 2.001, 2.142],
      }),
      createAttack("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.563, 0.609, 0.654, 0.72, 0.766, 0.818, 0.89, 0.962, 1.034, 1.113, 1.192],
      }),
      createAttack("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.012, 1.095, 1.177, 1.295, 1.377, 1.471, 1.601, 1.73, 1.86, 2.001, 2.142],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [1.02, 1.1, 1.18, 1.3, 1.38, 1.48, 1.61, 1.74, 1.87, 2.01, 2.15],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("技能伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [1.72, 1.85, 1.98, 2.15, 2.28, 2.41, 2.58, 2.75, 2.92, 3.1, 3.27, 3.44, 3.66],
      }),
      createAttack("追冰剑诀", AttackType.Skill, ElementType.Cryo, {
        atk: [1.72, 1.85, 1.98, 2.15, 2.28, 2.41, 2.58, 2.75, 2.92, 3.1, 3.27, 3.44, 3.66],
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [1.42, 1.53, 1.64, 1.78, 1.89, 1.99, 2.14, 2.28, 2.42, 2.56, 2.71, 2.85, 3.03, 3.2],
      }),
    ],
    otherSkill: [
      createAttack("1命·释凌咏冰", AttackType.Other, ElementType.Cryo, {
        atk: [0.5],
      }),
    ],
    buffs: [
      A_80_ATK_24P,
      {
        label: "追冰剑诀·敌人冰元素抗性降低",
        describe: "灵刃·重华叠霜领域消失时，会唤出一柄灵刃自动攻击附近的敌人，被击中的敌人冰元素抗性降低10%",
        effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => 10 }],
        enable: true,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·四灵捧圣",
        describe: "灵刃·云开星落对生命值百分比低于重云的敌人造成伤害时，伤害提升15%",
        effect: [{ type: BuffType.BurstPrcent, getValue: () => 15 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  //==================================
  {
    ...cha(10000101, "基尼奇", ElementType.Dendro, WeaponType.GreatSword)(Rarity.Five, 12858, 332, 802, 70)(
      "UI_AvatarIcon_Kinich",
      [
        "UI_Talent_S_Kinich_01",
        "UI_Talent_S_Kinich_02",
        "UI_Talent_U_Kinich_01",
        "UI_Talent_S_Kinich_03",
        "UI_Talent_U_Kinich_02",
        "UI_Talent_S_Kinich_04",
      ],
      ["普通攻击·夜阳斗技", "悬猎·游骋高狩", "向伟大圣龙致意"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.99, 1.07, 1.151, 1.266, 1.347, 1.439, 1.565, 1.692, 1.819, 1.957, 2.095],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.829, 0.897, 0.964, 1.06, 1.128, 1.205, 1.311, 1.417, 1.523, 1.639, 1.755],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.235, 1.336, 1.436, 1.58, 1.68, 1.795, 1.953, 2.111, 2.269, 2.441, 2.614],
      }),
      createAttack("空中普通攻击伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.677, 1.814, 1.95, 2.145, 2.282, 2.438, 2.652, 2.867, 3.081, 3.315, 3.549],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.484, 0.524, 0.563, 0.619, 0.659, 0.704, 0.766, 0.828, 0.89, 0.957, 1.025].map((i) => i * 3),
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      createAttack("环绕射击伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [0.573, 0.616, 0.659, 0.716, 0.759, 0.802, 0.859, 0.916, 0.974, 1.031, 1.088, 1.146, 1.217],
      }),
      createAttack(
        "迴猎贯鳞炮伤害",
        AttackType.Skill,
        ElementType.Dendro,
        {
          atk: [6.874, 7.39, 7.906, 8.593, 9.109, 9.624, 10.312, 10.999, 11.686, 12.374, 13.061, 13.749, 14.607],
        },
        "Kinich"
      ),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [1.34, 1.441, 1.541, 1.675, 1.776, 1.876, 2.01, 2.144, 2.278, 2.412, 2.546, 2.68, 2.848],
      }),
      createAttack("龙息伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [1.207, 1.298, 1.388, 1.509, 1.6, 1.69, 1.811, 1.932, 2.053, 2.173, 2.294, 2.415, 2.566],
      }),
    ],
    otherSkill: [
      createAttack(
        "基尼奇·6命弹射",
        AttackType.Skill,
        ElementType.Dendro,
        {
          atk: [7],
        },
        "Kinich"
      ),
    ],
    buffs: [
      S_80_CRITALHUNT_38P,
      {
        label: "焰灵的契约",
        describe:
          "队伍中的附近的角色触发「夜魂迸发」后，赋予一层「猎人心得」，至多叠加2层。每层「猎人心得」使迴猎贯鳞炮伤害提高，基于基尼奇攻击力的320%",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue(data, s) {
              return (data.baseATK + data.extraATK + data.extraATK_NT) * 3.2 * s;
            },
            actionOn: ActionOn.Indirect,
            special: "Kinich",
          },
        ],
        enable: false,
        stackText: "猎人心得",
        limit: 2,
        stack: 1,
        stackable: true,
      },
      {
        label: "1命·七鹦之喙",
        describe: "迴猎贯鳞炮的暴击伤害提升100%",
        effect: [{ type: BuffType.SkillCritcalHurt, getValue: () => 100, special: "Kinich" }],
        condition: ({ constellation }) => constellation >= 1,
        enable: true,
      },
      {
        label: "2命·星虎之掌",
        describe: "迴猎贯鳞炮首次造成的伤害提升100%",
        effect: [{ type: BuffType.SkillPrcent, getValue: () => 100, special: "Kinich" }],
        condition: ({ constellation }) => constellation >= 2,
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(10000102, "玛拉妮", ElementType.Hydro, WeaponType.Magic)(Rarity.Five, 15185, 182, 570, 60)(
      "UI_AvatarIcon_Mualani",
      [
        "UI_Talent_S_Mualani_01",
        "UI_Talent_S_Mualani_02",
        "UI_Talent_U_Mualani_01",
        "UI_Talent_S_Mualani_03",
        "UI_Talent_U_Mualani_02",
        "UI_Talent_S_Mualani_04",
      ],
      ["普通攻击·降温处理", "踏鲨破浪", "爆瀑飞弹"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.514, 0.553, 0.591, 0.642, 0.681, 0.72, 0.771, 0.822, 0.874, 0.925, 1.221],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.446, 0.48, 0.513, 0.558, 0.591, 0.625, 0.669, 0.714, 0.759, 0.803, 1.06],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.7, 0.753, 0.805, 0.875, 0.928, 0.98, 1.051, 1.121, 1.191, 1.261, 1.663],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Hydro, {
        atk: [1.43, 1.54, 1.64, 1.79, 1.89, 2, 2.14, 2.29, 2.43, 2.57, 3.39],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      createAttack("鲨鲨撕咬基础伤害", AttackType.Normal, ElementType.Hydro, {
        hp: [0.0868, 0.0933, 0.0998, 0.1085, 0.115, 0.1215, 0.1302, 0.1389, 0.1476, 0.1562, 0.1649, 0.1736, 0.1845],
      }),
      createAttack(
        "巨浪鲨鲨撕咬伤害",
        AttackType.Normal,
        ElementType.Hydro,
        {
          hp: [0.434, 0.4667, 0.4991, 0.5427, 0.575, 0.6077, 0.651, 0.6953, 0.7379, 0.7811, 0.8247, 0.868, 0.9222],
        },
        "Mualani"
      ),
    ],
    burstSkill: [
      createAttack("爆瀑飞弹", AttackType.Burst, ElementType.Hydro, {
        hp: [0.584, 0.628, 0.672, 0.73, 0.774, 0.818, 0.877, 0.935, 0.993, 1.05, 1.11, 1.169, 1.242],
      }),
    ],
    otherSkill: [],
    buffs: [
      S_80_CRITAL_19P,
      {
        label: "1命·悠闲的「梅兹特利」",
        describe:
          "进入夜魂加持状态后的第一次巨浪鲨鲨撕咬及它所触发的鲨鲨飞弹造成的伤害提升，提升值相当于玛拉妮生命值上限的66%",
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data) => {
              return (data.baseHP + data.extraHP + data.extraHP_NT) * 0.66;
            },
            special: "Mualani",
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
        condition: ({ constellation }) => constellation >= 1,
      },
      Constellation_E_3,
      {
        label: "4命·鲨鲨主食是豚豚。",
        describe: "爆瀑飞弹造成的伤害提升75%",
        effect: [{ type: BuffType.BurstPrcent, getValue: () => 75 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 4,
      },
      Constellation_Q_5,
      {
        label: "6命·「流泉之众」的精神",
        describe: "1命效果没有次数限制",
        effect: [],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000099, "艾梅莉埃", ElementType.Dendro, WeaponType.Polearms)(Rarity.Five, 13568, 335, 730, 50)(
      "UI_AvatarIcon_Emilie",
      [
        "UI_Talent_S_Emilie_01",
        "UI_Talent_S_Emilie_02",
        "UI_Talent_U_Emilie_01",
        "UI_Talent_S_Emilie_03",
        "UI_Talent_U_Emilie_02",
        "UI_Talent_S_Emilie_04",
      ],
      ["普通攻击·逐影枪术·改", "撷萃调香", "香氛演绎"]
    ),
    normalAttack: [
      createAttack("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.486, 0.525, 0.565, 0.621, 0.661, 0.706, 0.768, 0.83, 0.892, 0.96, 1.028],
      }),
      createAttack("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.449, 0.486, 0.522, 0.574, 0.611, 0.653, 0.71, 0.767, 0.825, 0.887, 0.95],
      }),
      createAttack("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.593, 0.641, 0.69, 0.758, 0.807, 0.862, 0.938, 1.014, 1.089, 1.172, 1.255],
      }),
      createAttack("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.751, 0.812, 0.873, 0.961, 1.022, 1.092, 1.188, 1.284, 1.38, 1.485, 1.589],
      }),
      createAttack("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.913, 0.988, 1.062, 1.168, 1.243, 1.328, 1.444, 1.561, 1.678, 1.805, 1.933],
      }),
      createAttack("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      createAttack("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.48, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      createAttack("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      createAttack(
        "技能伤害",
        AttackType.Skill,
        ElementType.Dendro,
        {
          atk: [0.471, 0.506, 0.541, 0.589, 0.624, 0.659, 0.706, 0.753, 0.8, 0.847, 0.895, 0.942, 1],
        },
        "Emilie"
      ),
      createAttack(
        "柔灯之匣·一阶伤害",
        AttackType.Skill,
        ElementType.Dendro,
        {
          atk: [0.396, 0.426, 0.455, 0.495, 0.525, 0.554, 0.594, 0.634, 0.673, 0.713, 0.752, 0.792, 0.842],
        },
        "Emilie"
      ),
      createAttack(
        "柔灯之匣·二阶伤害（单段）",
        AttackType.Skill,
        ElementType.Dendro,
        {
          atk: [0.84, 0.903, 0.966, 1.05, 1.113, 1.176, 1.26, 1.344, 1.428, 1.512, 1.596, 1.68, 1.785],
        },
        "Emilie"
      ),
      createAttack("灵息之刺伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [0.385, 0.414, 0.443, 0.482, 0.51, 0.539, 0.578, 0.616, 0.655, 0.693, 0.732, 0.77, 0.819],
      }),
    ],
    burstSkill: [
      createAttack("柔灯之匣·三阶伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [2.172, 2.335, 2.498, 2.715, 2.878, 3.041, 3.258, 3.475, 3.692, 3.91, 4.127, 4.344, 4.616],
      }),
    ],
    otherSkill: [
      createAttack(
        "固有天赋·余薰",
        AttackType.Other,
        ElementType.Dendro,
        {
          atk: [6],
        },
        "Emilie"
      ),
    ],
    buffs: [
      S_80_CRITALHUNT_38P,
      {
        label: "精馏",
        describe:
          "艾梅莉埃对处于燃烧状态下的敌人造成的伤害：每1000点攻击力都将提升15%伤害，至多通过这种方式提升36%伤害",
        effect: [
          {
            type: BuffType.GlobalPrcent,
            getValue: (data) => {
              return Math.min(36, ((data.baseATK + data.extraATK + data.extraATK_NT) / 1000) * 15);
            },
          },
        ],
        enable: true,
      },
      {
        label: "1命·淡香浸析",
        describe: "撷萃调香与固有天赋「余薰」的清露香氛造成的伤害提升20%",
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => 20, special: "Emilie" }],
        enable: true,
        condition: ({ constellation }) => constellation >= 1,
      },
      {
        label: "2命·湖光顶调",
        describe: "撷萃调香与固有天赋「余薰」的清露香氛命中敌人时，降低敌人草元素抗性30%",
        effect: [{ type: BuffType.EnemyDendroResistance, getValue: () => -30 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
        shareable: true,
        target: BuffTarget.Enemy,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·茉洁香迹",
        describe: "普通攻击与重击转为无法被附魔覆盖的草元素伤害，并提升造成的伤害，提升值相当于艾梅莉埃攻击力的300%",
        effect: [
          { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Dendro] },
          {
            type: BuffType.NormalFixed,
            getValue: (data) => {
              return (data.baseATK + data.extraATK + data.extraATK_NT) * 3;
            },
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.StrongFixed,
            getValue: (data) => {
              return (data.baseATK + data.extraATK + data.extraATK_NT) * 3;
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
];
