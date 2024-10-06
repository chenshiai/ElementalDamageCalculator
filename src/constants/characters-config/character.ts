import { AttackType, ElementType, BuffType, WeaponType, Rarity, EnchantingType, ActionOn } from "@/types/enum";
import { IBuffBase, ICharacterInfo, IRate, ISkillRate } from "@/types/interface";
import { getEnkaUI } from "./append-prop";
import {
  A_80_ATK_24P,
  Constellation_E_3,
  Constellation_Q_3,
  Constellation_A_3,
  Constellation_Q_5,
  S_80_CRITALHUNT_38P,
  S_80_CRITAL_38P,
} from "./buffs";

function getEnkaUIs(name: string[]): string[] {
  return name.map(getEnkaUI);
}

function createCharacter(enkaId: number, name: string, element: ElementType, weapon: WeaponType) {
  return (rarity: Rarity, baseHP: number, baseATK: number, baseDEF: number) => {
    return (avatarIcon: string, constsIcon: string[], talentNames: string[]) => {
      return {
        name,
        enkaId,
        weapon,
        element,
        rarity,
        level: 90,
        baseATK,
        baseDEF,
        baseHP,
        icons: {
          avatarIcon: getEnkaUI(avatarIcon),
          constsIcon: getEnkaUIs(constsIcon),
        },
        talentNames,
        normalLevel: 1,
        skillLevel: 1,
        burstLevel: 1,
      };
    };
  };
}

function createAttack(
  label: string,
  attackType: AttackType,
  elementType: ElementType,
  rate: IRate,
  special?: string
): ISkillRate {
  return {
    label,
    attackType,
    elementType,
    rate,
    special,
  };
}

/// 用来复制粘贴的模板
const a = {
  ...createCharacter(1000000, "", ElementType.Dendro, WeaponType.Polearms)(Rarity.Five, 13568, 335, 730)("", [], []),
  normalAttack: [],
  elementSkill: [],
  burstSkill: [],
  otherSkill: [],
  buffs: [],
};

// replaceAll("%", '').replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)
export const Character: (ICharacterInfo & Record<any, any>)[] = [
  {
    ...createCharacter(10000101, "基尼奇", ElementType.Dendro, WeaponType.GreatSword)(Rarity.Five, 12858, 332, 802)(
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
      createAttack("下坠期间伤害", AttackType.Other, ElementType.Physical, {
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
    ...createCharacter(10000102, "玛拉妮", ElementType.Hydro, WeaponType.Magic)(Rarity.Five, 15185, 182, 570)(
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
      createAttack("下坠期间伤害", AttackType.Other, ElementType.Hydro, {
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
      S_80_CRITAL_38P,
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
    ...createCharacter(10000099, "艾梅莉埃", ElementType.Dendro, WeaponType.Polearms)(Rarity.Five, 13568, 335, 730)(
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
      createAttack("下坠期间伤害", AttackType.Other, ElementType.Physical, {
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
  {
    ...createCharacter(10000092, "嘉明", ElementType.Pyro, WeaponType.GreatSword)(Rarity.Four, 11419, 302, 703)(
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
      createAttack("下落期间伤害", AttackType.Other, ElementType.Physical, {
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
];
