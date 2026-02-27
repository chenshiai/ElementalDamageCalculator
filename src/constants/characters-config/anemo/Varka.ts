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
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";

// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)

@EnKaId(10000128, "法尔伽")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Anemo, SecondElementType.Magus)
@BaseData(Rarity.Five, [12613, 353, 795], 60, [13510, 432, 852])
@Icons("UI_AvatarIcon_Varka")
class VarkaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·流光之舞", "烈风终坠", "我即朔风"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.654598, 0.707879, 0.76116, 0.837276, 0.890557, 0.95145, 1.035178, 1.118905, 1.202633, 1.293972, 1.385311,
        1.47665, 1.56799, 1.659329, 1.750668,
      ],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.239885, 0.25941, 0.278936, 0.30683, 0.326355, 0.34867, 0.379353, 0.410036, 0.440719, 0.474191, 0.507664,
        0.541136, 0.574608, 0.60808, 0.641553,
      ],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.445501, 0.481762, 0.518024, 0.569826, 0.606088, 0.64753, 0.704513, 0.761495, 0.818478, 0.880641, 0.942804,
        1.004967, 1.067129, 1.129292, 1.191455,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.324364, 0.350765, 0.377167, 0.414884, 0.441285, 0.471459, 0.512947, 0.554435, 0.595924, 0.641184, 0.686444,
        0.731704, 0.776964, 0.822224, 0.867484,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.60239, 0.651421, 0.700453, 0.770498, 0.81953, 0.875566, 0.952616, 1.029666, 1.106716, 1.19077, 1.274824,
        1.358879, 1.442933, 1.526988, 1.611042,
      ],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.554316, 0.599434, 0.644553, 0.709008, 0.754127, 0.805691, 0.876592, 0.947493, 1.018394, 1.09574, 1.173086,
        1.250433, 1.327779, 1.405126, 1.482472,
      ],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.298478, 0.322772, 0.347067, 0.381774, 0.406068, 0.433834, 0.472011, 0.510188, 0.548366, 0.590014, 0.631662,
        0.67331, 0.714958, 0.756606, 0.798254,
      ],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.697498, 0.754271, 0.811044, 0.892148, 0.948921, 1.013805, 1.10302, 1.192235, 1.28145, 1.378775, 1.4761,
        1.573425, 1.670751, 1.768076, 1.865401,
      ],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.375576, 0.406146, 0.436716, 0.480388, 0.510958, 0.545895, 0.593934, 0.641973, 0.690011, 0.742417, 0.794823,
        0.847229, 0.899635, 0.952041, 1.004447,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.856388, 0.926094, 0.9958, 1.09538, 1.165086, 1.24475, 1.354288, 1.463826, 1.573364, 1.69286, 1.812356,
        1.931852, 2.051348, 2.170844, 2.29034,
      ],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.461132, 0.498666, 0.5362, 0.58982, 0.627354, 0.67025, 0.729232, 0.788214, 0.847196, 0.91154, 0.975884,
        1.040228, 1.104572, 1.168916, 1.23326,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.784, 2.9928, 3.2016, 3.48, 3.6888, 3.8976, 4.176, 4.4544, 4.7328, 5.0112, 5.2896, 5.568, 5.916, 6.264, 6.612,
      ],
    }),
    action(
      "狂飙突进·一段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.818247, 0.884848, 0.95145, 1.046595, 1.113196, 1.189312, 1.293972, 1.398631, 1.503291, 1.617465, 1.731639,
          1.845813, 1.959987, 2.074161, 2.188335,
        ],
      },
      "Varka2"
    ),
    action(
      "狂飙突进·二段伤害",
      AttackType.Normal,
      ElementType.Anemo,
      {
        atk: [
          0.299856, 0.324263, 0.34867, 0.383537, 0.407944, 0.435837, 0.474191, 0.512545, 0.550899, 0.592739, 0.634579,
          0.67642, 0.71826, 0.760101, 0.801941,
        ],
      },
      "Varka"
    ),
    action(
      "狂飙突进·二段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.556876, 0.602203, 0.64753, 0.712283, 0.75761, 0.809413, 0.880641, 0.951869, 1.023097, 1.100801, 1.178505,
          1.256208, 1.333912, 1.411615, 1.489319,
        ],
      },
      "Varka2"
    ),
    action(
      "狂飙突进·三段伤害",
      AttackType.Normal,
      ElementType.Anemo,
      {
        atk: [
          0.405455, 0.438457, 0.471459, 0.518605, 0.551607, 0.589323, 0.641184, 0.693044, 0.744905, 0.80148, 0.858055,
          0.91463, 0.971205, 1.02778, 1.084355,
        ],
      },
      "Varka"
    ),
    action(
      "狂飙突进·三段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.752987, 0.814277, 0.875566, 0.963123, 1.024413, 1.094458, 1.19077, 1.287082, 1.383395, 1.488463, 1.593531,
          1.698599, 1.803666, 1.908734, 2.013802,
        ],
      },
      "Varka2"
    ),
    action(
      "狂飙突进·四段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.692894, 0.749293, 0.805691, 0.88626, 0.942659, 1.007114, 1.09574, 1.184366, 1.272992, 1.369675, 1.466358,
          1.563041, 1.659724, 1.756407, 1.85309,
        ],
      },
      "Varka2"
    ),
    action(
      "狂飙突进·四段伤害",
      AttackType.Normal,
      ElementType.Anemo,
      {
        atk: [
          0.373097, 0.403465, 0.433834, 0.477217, 0.507585, 0.542292, 0.590014, 0.637736, 0.685457, 0.737517, 0.789577,
          0.841637, 0.893698, 0.945758, 0.997818,
        ],
      },
      "Varka"
    ),
    action(
      "狂飙突进·五段伤害",
      AttackType.Normal,
      ElementType.Physical,
      {
        atk: [
          0.871872, 0.942839, 1.013805, 1.115186, 1.186152, 1.267256, 1.378775, 1.490293, 1.601812, 1.723469, 1.845125,
          1.966782, 2.088438, 2.210095, 2.331751,
        ],
      },
      "Varka2"
    ),
    action(
      "狂飙突进·五段伤害",
      AttackType.Normal,
      ElementType.Anemo,
      {
        atk: [
          0.46947, 0.507682, 0.545895, 0.600485, 0.638697, 0.682369, 0.742417, 0.802466, 0.862514, 0.928022, 0.993529,
          1.059036, 1.124544, 1.190051, 1.255559,
        ],
      },
      "Varka"
    ),
    action(
      "狂飙突进·重击伤害",
      AttackType.Strong,
      ElementType.Physical,
      {
        atk: [
          1.070485, 1.157618, 1.24475, 1.369225, 1.456357, 1.555937, 1.69286, 1.829783, 1.966705, 2.116075, 2.265445,
          2.414815, 2.564185, 2.713555, 2.862925,
        ],
      },
      "Varka2"
    ),
    action(
      "狂飙突进·重击伤害",
      AttackType.Strong,
      ElementType.Anemo,
      {
        atk: [
          0.576415, 0.623333, 0.67025, 0.737275, 0.784192, 0.837813, 0.91154, 0.985267, 1.058995, 1.139425, 1.219855,
          1.300285, 1.380715, 1.461145, 1.541575,
        ],
      },
      "Varka"
    ),
    action(
      "四风将起伤害·火",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [
          1.7576, 1.88942, 2.02124, 2.197, 2.32882, 2.46064, 2.6364, 2.81216, 2.98792, 3.16368, 3.33944, 3.5152, 3.7349,
          3.9546, 4.1743,
        ],
      },
      "VarkaSkillTrans"
    ),
    action(
      "四风将起伤害·水",
      AttackType.Skill,
      ElementType.Hydro,
      {
        atk: [
          1.7576, 1.88942, 2.02124, 2.197, 2.32882, 2.46064, 2.6364, 2.81216, 2.98792, 3.16368, 3.33944, 3.5152, 3.7349,
          3.9546, 4.1743,
        ],
      },
      "VarkaSkillTrans"
    ),
    action(
      "四风将起伤害·雷",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [
          1.7576, 1.88942, 2.02124, 2.197, 2.32882, 2.46064, 2.6364, 2.81216, 2.98792, 3.16368, 3.33944, 3.5152, 3.7349,
          3.9546, 4.1743,
        ],
      },
      "VarkaSkillTrans"
    ),
    action(
      "四风将起伤害·冰",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [
          1.7576, 1.88942, 2.02124, 2.197, 2.32882, 2.46064, 2.6364, 2.81216, 2.98792, 3.16368, 3.33944, 3.5152, 3.7349,
          3.9546, 4.1743,
        ],
      },
      "VarkaSkillTrans"
    ),
    action(
      "四风将起伤害",
      AttackType.Skill,
      ElementType.Anemo,
      {
        atk: [
          0.9464, 1.01738, 1.08836, 1.183, 1.25398, 1.32496, 1.4196, 1.51424, 1.60888, 1.70352, 1.79816, 1.8928, 2.0111,
          2.1294, 2.2477,
        ],
      },
      "Varka"
    ),
    action(
      "苍噬伤害·单次",
      AttackType.Strong,
      ElementType.Physical,
      {
        atk: [
          0.936, 1.0062, 1.0764, 1.17, 1.2402, 1.3104, 1.404, 1.4976, 1.5912, 1.6848, 1.7784, 1.872, 1.989, 2.106,
          2.223,
        ],
      },
      "VarkaCangshi2"
    ),
    action(
      "苍噬伤害·单次",
      AttackType.Strong,
      ElementType.Anemo,
      {
        atk: [
          0.504, 0.5418, 0.5796, 0.63, 0.6678, 0.7056, 0.756, 0.8064, 0.8568, 0.9072, 0.9576, 1.008, 1.071, 1.134,
          1.197,
        ],
      },
      "VarkaCangshi"
    ),
  ];
  burstSkill = [
    action("技能第一段伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        3.3696, 3.62232, 3.87504, 4.212, 4.46472, 4.71744, 5.0544, 5.39136, 5.72832, 6.06528, 6.40224, 6.7392, 7.1604,
        7.5816, 8.0028,
      ],
    }),
    action("技能第一段伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [
        3.3696, 3.62232, 3.87504, 4.212, 4.46472, 4.71744, 5.0544, 5.39136, 5.72832, 6.06528, 6.40224, 6.7392, 7.1604,
        7.5816, 8.0028,
      ],
    }),
    action("技能第一段伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [
        3.3696, 3.62232, 3.87504, 4.212, 4.46472, 4.71744, 5.0544, 5.39136, 5.72832, 6.06528, 6.40224, 6.7392, 7.1604,
        7.5816, 8.0028,
      ],
    }),
    action("技能第一段伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [
        3.3696, 3.62232, 3.87504, 4.212, 4.46472, 4.71744, 5.0544, 5.39136, 5.72832, 6.06528, 6.40224, 6.7392, 7.1604,
        7.5816, 8.0028,
      ],
    }),
    action("技能第一段伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [
        3.3696, 3.62232, 3.87504, 4.212, 4.46472, 4.71744, 5.0544, 5.39136, 5.72832, 6.06528, 6.40224, 6.7392, 7.1604,
        7.5816, 8.0028,
      ],
    }),
    action("技能第二段伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        1.8144, 1.95048, 2.08656, 2.268, 2.40408, 2.54016, 2.7216, 2.90304, 3.08448, 3.26592, 3.44736, 3.6288, 3.8556,
        4.0824, 4.3092,
      ],
    }),
  ];
  otherSkill = [
    action("2命·额外攻击伤害", AttackType.Other, ElementType.Anemo, {
      atk: [8],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "晓风的行军·元素增伤",
      describe: "基于法尔伽的攻击力，每1000点攻击力都将使法尔伽获得10%风元素伤害加成与对应元素伤害加成。至多25%",
      enable: true,
      effect: [
        {
          type: BuffType.AnemoPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
        },
        {
          type: BuffType.PyroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
        },
        {
          type: BuffType.HydroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
        },
        {
          type: BuffType.ElectroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
        },
        {
          type: BuffType.CryoPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
        },
        {
          type: BuffType.PyroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "Varka2",
        },
        {
          type: BuffType.HydroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "Varka2",
        },
        {
          type: BuffType.ElectroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "Varka2",
        },
        {
          type: BuffType.CryoPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "Varka2",
        },
        {
          type: BuffType.PyroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "VarkaCangshi2",
        },
        {
          type: BuffType.HydroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "VarkaCangshi2",
        },
        {
          type: BuffType.ElectroPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "VarkaCangshi2",
        },
        {
          type: BuffType.CryoPrcent,
          getValue: (data) => Math.min((data.baseATK + data.extraATK) / 100, 25),
          actionOn: ActionOn.Indirect,
          transform: true,
          special: "VarkaCangshi2",
        },
      ],
    },
    {
      label: "晓风的行军",
      describe:
        "如果队伍中存在至少2名元素类型相同的风元素、火元素、水元素、雷元素或冰元素角色，狂飙突进模式下进行的普通攻击、重击、特殊重击苍噬与施放的特殊元素战技四风将起将造成原本140%的伤害；若队伍中同时存在至少2名风元素角色与至少2名元素类型相同的火元素、水元素、雷元素或冰元素角色，则会使上述效果提升至220%。",
      enable: true,
      effect: [
        {
          type: BuffType.NormalRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "Varka",
        },
        {
          type: BuffType.NormalRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "Varka2",
        },
        {
          type: BuffType.StrongRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "Varka",
        },
        {
          type: BuffType.StrongRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "Varka2",
        },
        {
          type: BuffType.StrongRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "VarkaCangshi2",
        },
        {
          type: BuffType.StrongRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "VarkaCangshi",
        },
        {
          type: BuffType.SkillRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "Varka",
        },
        {
          type: BuffType.SkillRate,
          getValue: (_, s) => (s > 0 ? 120 : 40),
          special: "VarkaSkillTrans",
        },
      ],
      stackable: true,
      stack: 1,
      limit: 1,
      stackType: "switch",
      stackText: "吃满220%",
    },
    {
      label: "风帜的先引",
      describe:
        "队伍中附近的角色触发扩散反应时，法尔伽将获得一层「苍牙之誓」，使法尔伽的普通攻击、重击、特殊重击苍噬与施放的特殊元素战技四风将起造成的伤害提升7.5%。至多叠加4层。",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (_, s) => s * 7.5,
        },
        {
          type: BuffType.StrongPrcent,
          getValue: (_, s) => s * 7.5,
        },
        {
          type: BuffType.SkillPrcent,
          getValue: (_, s) => s * 7.5,
          special: "Varka",
        },
        {
          type: BuffType.SkillPrcent,
          getValue: (_, s) => s * 7.5,
          special: "VarkaSkillTrans",
        },
      ],
      enable: true,
      stackable: true,
      stack: 4,
      limit: 4,
      stackText: "苍牙之誓",
    },
    {
      label: "狂飙突进·元素转化",
      describe: "0 火 / 1 水 / 2 雷 / 3 冰",
      enable: true,
      stackable: true,
      stack: 0,
      limit: 3,
      stackText: "当前元素序号",
      effect: [
        {
          type: BuffType.Transform,
          getValue: (_, s) => {
            switch (s) {
              case 0:
                return EnchantingType.Pyro;
              case 1:
                return EnchantingType.Hydro;
              case 2:
                return EnchantingType.Electro;
              case 3:
                return EnchantingType.Cryo;
            }
          },
          special: "Varka2",
        },
        {
          type: BuffType.Transform,
          getValue: (_, s) => {
            switch (s) {
              case 0:
                return EnchantingType.Pyro;
              case 1:
                return EnchantingType.Hydro;
              case 2:
                return EnchantingType.Electro;
              case 3:
                return EnchantingType.Cryo;
            }
          },
          special: "VarkaCangshi2",
        },
      ],
    },
    {
      label: "1命·「来吧，朋友，让我们在月下共舞」",
      describe:
        "切换至狂飙突进模式后，法尔伽将获得「歌中的佳酿」效果：施放特殊元素战技四风将起时，或进行特殊重击苍噬时，将消耗该效果，使四风将起或苍噬造成原本200%的伤害。",
      effect: [
        {
          type: BuffType.StrongAdd,
          getValue: (data) =>
            [
              0.936, 1.0062, 1.0764, 1.17, 1.2402, 1.3104, 1.404, 1.4976, 1.5912, 1.6848, 1.7784, 1.872, 1.989, 2.106,
              2.223,
            ][data.skillLevel + data.skillLevelAdd - 1],
          actionOn: ActionOn.Indirect,
          special: "VarkaCangshi2",
        },
        {
          type: BuffType.StrongAdd,
          getValue: (data) =>
            [
              0.504, 0.5418, 0.5796, 0.63, 0.6678, 0.7056, 0.756, 0.8064, 0.8568, 0.9072, 0.9576, 1.008, 1.071, 1.134,
              1.197,
            ][data.skillLevel + data.skillLevelAdd - 1],
          actionOn: ActionOn.Indirect,
          special: "VarkaCangshi",
        },
        {
          type: BuffType.SkillAdd,
          getValue: (data) =>
            [
              1.7576, 1.88942, 2.02124, 2.197, 2.32882, 2.46064, 2.6364, 2.81216, 2.98792, 3.16368, 3.33944, 3.5152,
              3.7349, 3.9546, 4.1743,
            ][data.skillLevel + data.skillLevelAdd - 1],
          actionOn: ActionOn.Indirect,
          special: "VarkaSkillTrans",
        },
        {
          type: BuffType.SkillAdd,
          getValue: (data) =>
            [
              0.9464, 1.01738, 1.08836, 1.183, 1.25398, 1.32496, 1.4196, 1.51424, 1.60888, 1.70352, 1.79816, 1.8928,
              2.0111, 2.1294, 2.2477,
            ][data.skillLevel + data.skillLevelAdd - 1],
          actionOn: ActionOn.Indirect,
          special: "Varka",
        },
      ],
      condition: ({ constellation }) => constellation >= 1,
      enable: true,
    },
    Constellation_E_3,
    {
      label: "4命·「因为无人能夺去我们歌唱的自由」",
      describe:
        "法尔伽触发扩散反应时，依据参与反应的元素类型，使队伍中附近的所有角色分别获得20%风元素伤害加成与对应元素伤害加成。",
      enable: true,
      stackable: true,
      stack: 0,
      limit: 3,
      stackText: "0火/1水/2雷/3冰",
      effect: [
        {
          type: BuffType.AnemoPrcent,
          getValue: () => 20,
        },
        {
          type: BuffType.PyroPrcent,
          getValue: (_, s) => (s === 0 ? 20 : 0),
        },
        {
          type: BuffType.HydroPrcent,
          getValue: (_, s) => (s === 1 ? 20 : 0),
        },
        {
          type: BuffType.ElectroPrcent,
          getValue: (_, s) => (s === 2 ? 20 : 0),
        },
        {
          type: BuffType.CryoPrcent,
          getValue: (_, s) => (s === 3 ? 20 : 0),
        },
      ],
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·「我心爱的蒙德呀，依然屹立如初」",
      describe: "每层「苍牙之誓」还会使法尔伽的暴击伤害提升20%。",
      effect: [
        {
          type: BuffType.CritcalHurt,
          getValue: (_, s) => s * 20,
        },
      ],
      enable: true,
      stackable: true,
      stack: 4,
      limit: 4,
      stackText: "苍牙之誓",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![法尔伽](https://enka.network/ui/UI_AvatarIcon_Varka.png) */
export const Varka = new VarkaData();
