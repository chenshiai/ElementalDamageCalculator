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
  S_80_CRYO_28P,
  S_80_ATK_28P,
  S_80_DENDRO_28P,
  S_80_HP_28P,
  S_80_DEF_28P,
  Constellation_A_5,
} from "./buffs";

import { cha, action } from "@/utils/calculate/create-data-methods";
import * as cryo from "./cryo/0";
import * as pyro from "./pyro/0";
import * as anemo from "./anemo/0";
import * as electro from "./electro/0";
import * as geo from "./geo/0";
import * as dendro from "./dendro/0";
import * as hydro from "./hydro/0";

/// 用来复制粘贴的模板
const a = {
  ...cha(1000000, "", ElementType.Dendro, WeaponType.Polearms)(Rarity.Five, 12491, 318, 859, 80)("", [], []),
  normalAttack: [],
  elementSkill: [],
  burstSkill: [],
  otherSkill: [],
  buffs: [...S_80_CRITALHUNT_38P],
};
// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)
export const Character: ICharacterInfo[] = [
  cryo.Escoffier,
  anemo.Ifa,
  electro.Varesa,
  electro.Iansan,
  anemo.Mizuki,
  anemo.LanYan,
  cryo.Citlali,
  pyro.Mavuika,
  electro.Olorun,
  anemo.Chasca,
  geo.Xilonen,
  dendro.Kinich,
  hydro.Mualani,
  dendro.Emilie,
  hydro.Sigewinne,
  electro.Clorinde,
  pyro.Arlecchino,
  geo.Chiori,
  anemo.Liuyun,
  geo.Navia,
  hydro.Furina,
  cryo.Wriothesley,
  hydro.Neuvillette,
  pyro.Liney,
  dendro.Baizhuer,
  pyro.Dehya,
  dendro.Alhatham,
  anemo.Wanderer,
  dendro.Nahida,
  hydro.Nilou,
  electro.Cyno,
  dendro.Tighnari,
  hydro.Yelan,
  hydro.Ayato,
  electro.Yae,
  cryo.Shenhe,
  geo.Itto,
  hydro.Kokomi,
  cryo.Aloy,
  electro.Shougun,
  pyro.Yoimiya,
  cryo.Ayaka,
  anemo.Kazuha,
  cryo.Eula,
  pyro.Hutao,
  anemo.Xiao,
  cryo.Ganyu,
  geo.Albedo,
  geo.Zhongli,
  hydro.Tartaglia,
  pyro.Klee,
  anemo.Venti,
  anemo.Qin,
  electro.Keqing,
  pyro.Diluc,
  hydro.Mona,
  cryo.Qiqi,
  geo.Kachina,
  electro.Sethos,
  pyro.Gaming,
  pyro.Chevreuse,
  cryo.Charlotte,
  cryo.Freminet,
  anemo.Linette,
  dendro.Momoka,
  dendro.Kaveh,
  cryo.Mika,
  dendro.Yaoyao,
  anemo.Faruzan,
  cryo.Layla,
  hydro.Candace,
  electro.Dori,
  dendro.Collei,
  anemo.Heizo,
  electro.Shinobu,
  geo.Yunjin,
  geo.Gorou,
  pyro.Tohma,
  electro.Sara,
  pyro.Yanfei,
  cryo.Rosaria,
  pyro.Xinyan,
  cryo.Diona,
  anemo.Sucrose,
  electro.Fischl,
  electro.Lisa,
  electro.Razor,
  electro.Beidou,
  pyro.Xiangling,
  pyro.Ambor,
  pyro.Bennett,
  hydro.Xingqiu,
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
      action("一段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.378, 0.407, 0.435, 0.473, 0.501, 0.53, 0.568, 0.605, 0.643, 0.681, 0.721],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.355, 0.382, 0.408, 0.444, 0.471, 0.497, 0.533, 0.568, 0.604, 0.639, 0.676],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.41, 0.441, 0.472, 0.513, 0.544, 0.575, 0.616, 0.657, 0.698, 0.739, 0.781],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Hydro, {
        atk: [0.552, 0.593, 0.635, 0.69, 0.731, 0.773, 0.828, 0.883, 0.938, 0.994, 1.051],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Hydro, {
        atk: [1.66, 1.79, 1.91, 2.08, 2.2, 2.33, 2.49, 2.66, 2.83, 2.99, 3.17],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
        atk: [1.42, 1.53, 1.62, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("水珠伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.584, 0.628, 0.672, 0.73, 0.774, 0.818, 0.876, 0.934, 0.993, 1.05, 1.11, 1.17, 1.24],
      }),
      action("命中治疗量", AttackType.Heal, ElementType.None, {
        hp: [
          0.0075, 0.0081, 0.0086, 0.0094, 0.0099, 0.0105, 0.0113, 0.012, 0.0128, 0.0135, 0.0143, 0.015, 0.0159, 0.0169,
        ],
        fixed: [72, 79, 87, 96, 105, 114, 125, 135, 147, 159, 172, 185, 199, 213],
      }),
      action("持续治疗量", AttackType.Heal, ElementType.None, {
        hp: [0.04, 0.043, 0.046, 0.05, 0.053, 0.056, 0.06, 0.064, 0.068, 0.072, 0.076, 0.08, 0.085, 0.09],
        fixed: [385, 424, 465, 510, 559, 610, 664, 722, 783, 847, 915, 986, 1059, 1136],
      }),
    ],
    burstSkill: [
      action("治疗量", AttackType.Heal, ElementType.None, {
        hp: [0.176, 0.189, 0.202, 0.22, 0.233, 0.246, 0.264, 0.282, 0.299, 0.317, 0.334, 0.352, 0.374, 0.396],
        fixed: [1694, 1864, 2047, 2245, 2457, 2683, 2923, 3177, 3445, 3728, 4024, 4335, 4660, 4999],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_HP_24P,
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
      action("普通攻击伤害", AttackType.Normal, ElementType.Geo, {
        atk: [0.28, 0.301, 0.322, 0.35, 0.371, 0.392, 0.42, 0.448, 0.469, 0.504, 0.533],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Geo, {
        atk: [1.74, 1.87, 2, 2.18, 2.31, 2.44, 2.61, 2.79, 2.96, 3.13, 3.31],
      }),
      action("星璇伤害", AttackType.Strong, ElementType.Geo, {
        atk: [0.496, 0.533, 0.57, 0.62, 0.657, 0.694, 0.744, 0.794, 0.843, 0.893, 0.944],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Geo, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Normal, ElementType.Geo, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Geo, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Geo, {
        atk: [2.3, 2.48, 2.65, 2.88, 3.05, 3.23, 3.46, 3.69, 3.92, 4.15, 4.38, 4.61, 4.9],
      }),
    ],
    burstSkill: [
      action("每颗宝石伤害", AttackType.Skill, ElementType.Geo, {
        atk: [0.87, 0.935, 1, 1.09, 1.15, 1.22, 1.3, 1.39, 1.48, 1.57, 1.65, 1.74, 1.85, 1.96],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_GEO_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.791, 0.856, 0.92, 1.01, 1.08, 1.15, 1.25, 1.35, 1.45, 1.56, 1.67],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.734, 0.793, 0.853, 0.938, 0.998, 1.07, 1.16, 1.25, 1.35, 1.45, 1.55],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.863, 0.933, 1, 1.1, 1.17, 1.25, 1.36, 1.47, 1.58, 1.71, 1.83],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.13, 1.23, 1.32, 1.45, 1.54, 1.65, 1.79, 1.94, 2.08, 2.24, 2.4],
      }),
      action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.507, 0.549, 0.59, 0.649, 0.69, 0.738, 0.802, 0.867, 0.932, 1.003, 1.074],
      }),
      action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.905, 0.978, 1.05, 1.16, 1.23, 1.32, 1.43, 1.55, 1.66, 1.79, 1.92],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.01, 1.08, 1.18, 1.27, 1.37, 1.47, 1.58],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      action("高空坠地冲击伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Geo, {
        def: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28, 2.4, 2.55],
      }),
      action("吸收量", AttackType.Shield, ElementType.None, {
        def: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6],
        fixed: [770, 847, 930, 1020, 1116, 1219, 1328, 1443, 1565, 1694, 1828, 1970, 2117, 2271],
      }),
      action("治疗量", AttackType.Heal, ElementType.None, {
        def: [0.213, 0.229, 0.245, 0.266, 0.282, 0.298, 0.319, 0.34, 0.362, 0.383, 0.404, 0.426, 0.452, 0.479],
        fixed: [103, 113, 124, 136, 149, 163, 177, 193, 209, 226, 244, 263, 282, 303],
      }),
    ],
    burstSkill: [
      action("爆发伤害", AttackType.Burst, ElementType.Geo, {
        atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.01, 1.08, 1.14, 1.21, 1.28, 1.34, 1.43],
      }),
      action("技能伤害", AttackType.Burst, ElementType.Geo, {
        atk: [0.928, 0.998, 1.07, 1.16, 1.23, 1.3, 1.39, 1.48, 1.58, 1.67, 1.76, 1.86, 1.97],
      }),
    ],
    otherSkill: [
      action("4命·之后会扫干净的", AttackType.Skill, ElementType.Geo, {
        atk: [4],
      }),
    ],
    buffs: [
      ...A_80_DEF_24P,
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
        describe: "诺艾尔的重击体力消耗降低20%，造成的伤害提升15%",
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.538, 0.581, 0.625, 0.688, 0.731, 0.781, 0.85, 0.919, 0.988, 1.062, 1.148],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.517, 0.559, 0.601, 0.661, 0.703, 0.751, 0.817, 0.883, 0.95, 1.022, 1.104],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.653, 0.706, 0.759, 0.835, 0.888, 0.949, 1.032, 1.116, 1.199, 1.29, 1.395],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.709, 0.766, 0.824, 0.906, 0.964, 1.03, 1.121, 1.211, 1.302, 1.401, 1.514],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.882, 0.954, 1.025, 1.129, 1.2, 1.283, 1.395, 1.508, 1.621, 1.744, 1.885],
      }),
      action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.55, 0.595, 0.64, 0.85, 0.704, 0.749, 0.8, 0.87, 0.941, 1.011, 1.088, 1.176],
      }),
      action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.731, 0.791, 0.85, 0.935, 0.995, 1.063, 1.156, 1.25, 1.343, 1.445, 1.562],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
      }),
    ],
    elementSkill: [
      action("霜袭", AttackType.Skill, ElementType.Cryo, {
        atk: [1.91, 2.06, 2.2, 2.39, 2.53, 2.68, 2.87, 3.06, 3.25, 3.44, 3.63, 3.82, 4.06],
      }),
    ],
    burstSkill: [
      action("凛冽轮舞", AttackType.Burst, ElementType.Cryo, {
        atk: [0.776, 0.834, 0.892, 0.97, 1.03, 1.09, 1.16, 1.24, 1.32, 1.4, 1.47, 1.55, 1.65, 1.75],
      }),
    ],
    otherSkill: [
      action("4命·极寒的轻吻护盾", AttackType.Shield, ElementType.None, {
        hp: [0.3],
      }),
    ],
    buffs: [
      ...A_80_CHARGE_26P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.7, 0.757, 0.814, 0.895, 0.952, 1.018, 1.107, 1.197, 1.286, 1.384, 1.481],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.631, 0.683, 0.734, 0.807, 0.859, 0.918, 0.998, 1.079, 1.16, 1.248, 1.336],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.803, 0.869, 0.934, 1.028, 1.093, 1.168, 1.27, 1.373, 1.476, 1.588, 1.7],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.012, 1.095, 1.177, 1.295, 1.377, 1.471, 1.601, 1.73, 1.86, 2.001, 2.142],
      }),
      action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.563, 0.609, 0.654, 0.72, 0.766, 0.818, 0.89, 0.962, 1.034, 1.113, 1.192],
      }),
      action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.012, 1.095, 1.177, 1.295, 1.377, 1.471, 1.601, 1.73, 1.86, 2.001, 2.142],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [1.02, 1.1, 1.18, 1.3, 1.38, 1.48, 1.61, 1.74, 1.87, 2.01, 2.15],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [1.72, 1.85, 1.98, 2.15, 2.28, 2.41, 2.58, 2.75, 2.92, 3.1, 3.27, 3.44, 3.66],
      }),
      action("追冰剑诀", AttackType.Skill, ElementType.Cryo, {
        atk: [1.72, 1.85, 1.98, 2.15, 2.28, 2.41, 2.58, 2.75, 2.92, 3.1, 3.27, 3.44, 3.66],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [1.42, 1.53, 1.64, 1.78, 1.89, 1.99, 2.14, 2.28, 2.42, 2.56, 2.71, 2.85, 3.03, 3.2],
      }),
    ],
    otherSkill: [
      action("1命·释凌咏冰", AttackType.Other, ElementType.Cryo, {
        atk: [0.5],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
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

  {
    ...cha(10000005, "空·风", ElementType.Anemo, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 60)(
      "UI_AvatarIcon_PlayerBoy",
      [
        "UI_Talent_S_PlayerWind_01",
        "UI_Talent_S_PlayerWind_02",
        "UI_Talent_U_PlayerWind_02",
        "UI_Talent_S_PlayerWind_03",
        "UI_Talent_U_PlayerWind_01",
        "UI_Talent_S_PlayerWind_04",
      ],
      ["普通攻击·异邦铁风", "风涡剑", "风息激荡"]
    ),
    normalAttack: [
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
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
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
    ],
    elementSkill: [
      action("初始切割伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255, 0.27],
      }),
      action("最大切割伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357, 0.378],
      }),
      action("初始爆风伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.76, 1.89, 2.02, 2.2, 2.33, 2.46, 2.64, 2.82, 2.99, 3.17, 3.34, 3.52, 3.74, 3.96],
      }),
      action("最大爆风伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.92, 2.06, 2.21, 2.4, 2.54, 2.69, 2.88, 3.07, 3.26, 3.46, 3.65, 3.84, 4.08, 4.32],
      }),
    ],
    burstSkill: [
      action("龙卷风伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.808, 0.869, 0.929, 1.01, 1.07, 1.13, 1.21, 1.29, 1.37, 1.45, 1.54, 1.62, 1.72, 1.82],
      }),
      action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
      action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
      action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
      action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
    ],
    otherSkill: [
      action("裂空之风", AttackType.Normal, ElementType.Anemo, {
        atk: [0.6],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "2命·革新的旋风",
        describe: "元素充能效率提升16%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 16 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·纠缠的信风",
        describe: "受到风息激荡伤害的目标，风元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·火",
        describe: "受到风息激荡伤害的目标，火元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·水",
        describe: "受到风息激荡伤害的目标，水元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·冰",
        describe: "受到风息激荡伤害的目标，冰元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·雷",
        describe: "受到风息激荡伤害的目标，雷元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(10000007, "荧·风", ElementType.Anemo, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 60)(
      "UI_AvatarIcon_PlayerGirl",
      [
        "UI_Talent_S_PlayerWind_01",
        "UI_Talent_S_PlayerWind_02",
        "UI_Talent_U_PlayerWind_02",
        "UI_Talent_S_PlayerWind_03",
        "UI_Talent_U_PlayerWind_01",
        "UI_Talent_S_PlayerWind_04",
      ],
      ["普通攻击·异邦铁风", "风涡剑", "风息激荡"]
    ),
    normalAttack: [
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
    ],
    elementSkill: [
      action("初始切割伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255, 0.27],
      }),
      action("最大切割伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357, 0.378],
      }),
      action("初始爆风伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.76, 1.89, 2.02, 2.2, 2.33, 2.46, 2.64, 2.82, 2.99, 3.17, 3.34, 3.52, 3.74, 3.96],
      }),
      action("最大爆风伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.92, 2.06, 2.21, 2.4, 2.54, 2.69, 2.88, 3.07, 3.26, 3.46, 3.65, 3.84, 4.08, 4.32],
      }),
    ],
    burstSkill: [
      action("龙卷风伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.808, 0.869, 0.929, 1.01, 1.07, 1.13, 1.21, 1.29, 1.37, 1.45, 1.54, 1.62, 1.72, 1.82],
      }),
      action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
      action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
      action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
      action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.394, 0.422, 0.446, 0.471, 0.496, 0.527, 0.558],
      }),
    ],
    otherSkill: [
      action("裂空之风", AttackType.Normal, ElementType.Anemo, {
        atk: [0.6],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "2命·革新的旋风",
        describe: "元素充能效率提升16%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 16 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
      {
        label: "6命·纠缠的信风",
        describe: "受到风息激荡伤害的目标，风元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·火",
        describe: "受到风息激荡伤害的目标，火元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·水",
        describe: "受到风息激荡伤害的目标，水元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·冰",
        describe: "受到风息激荡伤害的目标，冰元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·纠缠的信风·雷",
        describe: "受到风息激荡伤害的目标，雷元素抗性下降20%。",
        effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },

  {
    ...cha(1000000506, "空·岩", ElementType.Geo, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 60)(
      "UI_AvatarIcon_PlayerBoy",
      [
        "UI_Talent_S_PlayerRock_01",
        "UI_Talent_S_PlayerRock_02",
        "UI_Talent_U_PlayerRock_02",
        "UI_Talent_S_PlayerRock_03",
        "UI_Talent_U_PlayerRock_01",
        "UI_Talent_S_PlayerRock_04",
      ],
      ["普通攻击·异邦岩峰", "星陨剑", "岩潮叠嶂"]
    ),
    normalAttack: [
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
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
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
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Geo, {
        atk: [2.48, 2.67, 2.85, 3.1, 3.29, 3.47, 3.72, 3.97, 4.22, 4.46, 4.71, 4.96, 5.27, 5.58],
      }),
    ],
    burstSkill: [
      action("地震波单次伤害", AttackType.Burst, ElementType.Geo, {
        atk: [1.48, 1.59, 1.7, 1.85, 1.96, 2.07, 2.22, 2.37, 2.52, 2.66, 2.81, 2.96, 3.15, 3.33],
      }),
    ],
    otherSkill: [
      action("狂乱的崩岩", AttackType.Normal, ElementType.Geo, {
        atk: [0.6],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "1命·巍然的青岩",
        describe: "队伍中角色处于岩潮叠嶂的岩嶂包围中时，暴击率提升10%",
        effect: [{ type: BuffType.Critcal, getValue: () => 10 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
        condition: ({ constellation }) => constellation >= 1,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },
  {
    ...cha(1000000706, "荧·岩", ElementType.Geo, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 60)(
      "UI_AvatarIcon_PlayerGirl",
      [
        "UI_Talent_S_PlayerRock_01",
        "UI_Talent_S_PlayerRock_02",
        "UI_Talent_U_PlayerRock_02",
        "UI_Talent_S_PlayerRock_03",
        "UI_Talent_U_PlayerRock_01",
        "UI_Talent_S_PlayerRock_04",
      ],
      ["普通攻击·异邦岩峰", "星陨剑", "岩潮叠嶂"]
    ),
    normalAttack: [
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
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Geo, {
        atk: [2.48, 2.67, 2.85, 3.1, 3.29, 3.47, 3.72, 3.97, 4.22, 4.46, 4.71, 4.96, 5.27, 5.58],
      }),
    ],
    burstSkill: [
      action("地震波单次伤害", AttackType.Burst, ElementType.Geo, {
        atk: [1.48, 1.59, 1.7, 1.85, 1.96, 2.07, 2.22, 2.37, 2.52, 2.66, 2.81, 2.96, 3.15, 3.33],
      }),
    ],
    otherSkill: [
      action("狂乱的崩岩", AttackType.Normal, ElementType.Geo, {
        atk: [0.6],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "1命·巍然的青岩",
        describe: "队伍中角色处于岩潮叠嶂的岩嶂包围中时，暴击率提升10%",
        effect: [{ type: BuffType.Critcal, getValue: () => 10 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
        condition: ({ constellation }) => constellation >= 1,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },

  {
    ...cha(1000000507, "空·雷", ElementType.Electro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 80)(
      "UI_AvatarIcon_PlayerBoy",
      [
        "UI_Talent_S_PlayerElectric_01",
        "UI_Talent_S_PlayerElectric_02",
        "UI_Talent_U_PlayerElectric_01",
        "UI_Talent_S_PlayerElectric_03",
        "UI_Talent_U_PlayerElectric_02",
        "UI_Talent_S_PlayerElectric_04",
      ],
      ["普通攻击·异邦惊雷", "雷影剑", "雷轰电转"]
    ),
    normalAttack: [
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
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
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
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.79, 0.85, 0.9, 0.98, 1.04, 1.1, 1.18, 1.26, 1.34, 1.42, 1.49, 1.57, 1.67, 1.77],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.144, 1.23, 1.316, 1.43, 1.516, 1.602, 1.716, 1.83, 1.945, 2.059, 2.174, 2.288, 2.431, 2.574],
      }),
      action("威光落雷伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697, 0.738],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "雷影剑·丰穰勾玉",
        describe: "元素充能效率提升20%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "回响的轰雷",
        describe: "基于旅行者自己元素充能效率的10%，提升雷影剑的丰穰勾玉提供的元素充能效率",
        effect: [
          {
            type: BuffType.ChargeFixed,
            getValue: (data) => data.chargeEfficiency * 0.1,
            transform: true,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·震怒的苍雷",
        describe: "雷轰电转的威光落雷命中敌人后，会使敌人的雷元素抗性降低15%",
        effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -15 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },
  {
    ...cha(1000000707, "荧·雷", ElementType.Electro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 60)(
      "UI_AvatarIcon_PlayerGirl",
      [
        "UI_Talent_S_PlayerElectric_01",
        "UI_Talent_S_PlayerElectric_02",
        "UI_Talent_U_PlayerElectric_01",
        "UI_Talent_S_PlayerElectric_03",
        "UI_Talent_U_PlayerElectric_02",
        "UI_Talent_S_PlayerElectric_04",
      ],
      ["普通攻击·异邦惊雷", "雷影剑", "雷轰电转"]
    ),
    normalAttack: [
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
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.79, 0.85, 0.9, 0.98, 1.04, 1.1, 1.18, 1.26, 1.34, 1.42, 1.49, 1.57, 1.67, 1.77],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.144, 1.23, 1.316, 1.43, 1.516, 1.602, 1.716, 1.83, 1.945, 2.059, 2.174, 2.288, 2.431, 2.574],
      }),
      action("威光落雷伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697, 0.738],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "雷影剑·丰穰勾玉",
        describe: "元素充能效率提升20%",
        effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "回响的轰雷",
        describe: "基于旅行者自己元素充能效率的10%，提升雷影剑的丰穰勾玉提供的元素充能效率",
        effect: [
          {
            type: BuffType.ChargeFixed,
            getValue: (data) => data.chargeEfficiency * 0.1,
            transform: true,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
      {
        label: "2命·震怒的苍雷",
        describe: "雷轰电转的威光落雷命中敌人后，会使敌人的雷元素抗性降低15%",
        effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -15 }],
        enable: false,
        shareable: true,
        target: BuffTarget.Enemy,
        condition: ({ constellation }) => constellation >= 2,
      },
      Constellation_Q_3,
      Constellation_E_5,
    ],
  },

  {
    ...cha(1000000508, "空·草", ElementType.Dendro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 80)(
      "UI_AvatarIcon_PlayerBoy",
      [
        "UI_Talent_S_PlayerGrass_01",
        "UI_Talent_S_PlayerGrass_02",
        "UI_Talent_S_PlayerGrass_03",
        "UI_Talent_S_PlayerGrass_04",
        "UI_Talent_S_PlayerGrass_05",
        "UI_Talent_S_PlayerGrass_06",
      ],
      ["普通攻击·异邦草翦", "草缘剑", "偃草若化"]
    ),
    normalAttack: [
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
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
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
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [2.3, 2.48, 2.65, 2.88, 3.05, 3.23, 3.46, 3.69, 3.92, 4.15, 4.38, 4.61, 4.9],
      }),
    ],
    burstSkill: [
      action("草灯莲攻击伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [0.802, 0.862, 0.922, 1.002, 1.062, 1.122, 1.202, 1.283, 1.363, 1.443, 1.523, 1.603, 1.703],
      }),
      action("激烈爆发伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [4.008, 4.309, 4.609, 5.01, 5.311, 5.611, 6.012, 6.413, 6.814, 7.214, 7.615, 8.016, 8.517],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "蔓生的埜草",
        describe:
          "草灯莲将在其存在期间每秒获得一层莲光遍照效果，使其领域内的当前场上角色的元素精通提升6点。草灯莲的莲光遍照效果至多叠加10层。",
        effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 6 * s }],
        enable: false,
        shareable: true,
        stackable: true,
        stack: 10,
        limit: 10,
        stackText: "莲光遍照",
        target: BuffTarget.All,
      },
      {
        label: "繁庑的丛草",
        describe: "旅行者自己的每点元素精通，能使草缘剑造成的伤害提升0.15%，偃草若化造成的伤害提升0.1%。",
        effect: [
          {
            type: BuffType.SkillPrcent,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.15,
          },
          {
            type: BuffType.BurstPrcent,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.1,
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·蕴思的霜草",
        describe:
          "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
        effect: [{ type: BuffType.DendroPrcent, getValue: () => 12 }],
        enable: false,
        target: BuffTarget.All,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·蕴思的霜草·雷",
        describe:
          "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
        effect: [{ type: BuffType.ElectroPrcent, getValue: () => 12 }],
        enable: false,
        target: BuffTarget.All,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·蕴思的霜草·水",
        describe:
          "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
        effect: [{ type: BuffType.HydroPrcent, getValue: () => 12 }],
        enable: false,
        target: BuffTarget.All,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
      {
        label: "6命·蕴思的霜草·火",
        describe:
          "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
        effect: [{ type: BuffType.PyroPrcent, getValue: () => 12 }],
        enable: false,
        target: BuffTarget.All,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },
  {
    ...cha(1000000708, "荧·草", ElementType.Dendro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 80)(
      "UI_AvatarIcon_PlayerGirl",
      [
        "UI_Talent_S_PlayerGrass_01",
        "UI_Talent_S_PlayerGrass_02",
        "UI_Talent_S_PlayerGrass_03",
        "UI_Talent_S_PlayerGrass_04",
        "UI_Talent_S_PlayerGrass_05",
        "UI_Talent_S_PlayerGrass_06",
      ],
      ["普通攻击·异邦草翦", "草缘剑", "偃草若化"]
    ),
    normalAttack: [
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
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [2.3, 2.48, 2.65, 2.88, 3.05, 3.23, 3.46, 3.69, 3.92, 4.15, 4.38, 4.61, 4.9],
      }),
    ],
    burstSkill: [
      action("草灯莲攻击伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [0.802, 0.862, 0.922, 1.002, 1.062, 1.122, 1.202, 1.283, 1.363, 1.443, 1.523, 1.603, 1.703],
      }),
      action("激烈爆发伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [4.008, 4.309, 4.609, 5.01, 5.311, 5.611, 6.012, 6.413, 6.814, 7.214, 7.615, 8.016, 8.517],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "蔓生的埜草",
        describe:
          "草灯莲将在其存在期间每秒获得一层莲光遍照效果，使其领域内的当前场上角色的元素精通提升6点。草灯莲的莲光遍照效果至多叠加10层。",
        effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 6 * s }],
        enable: false,
        shareable: true,
        stackable: true,
        stack: 10,
        limit: 10,
        stackText: "莲光遍照",
        target: BuffTarget.All,
      },
      {
        label: "繁庑的丛草",
        describe: "旅行者自己的每点元素精通，能使草缘剑造成的伤害提升0.15%，偃草若化造成的伤害提升0.1%。",
        effect: [
          {
            type: BuffType.SkillPrcent,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.15,
          },
          {
            type: BuffType.BurstPrcent,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.1,
          },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
      {
        label: "6命·蕴思的霜草",
        describe:
          "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
        effect: [{ type: BuffType.DendroPrcent, getValue: () => 12 }],
        enable: false,
        target: BuffTarget.All,
        shareable: true,
        condition: ({ constellation }) => constellation >= 6,
      },
    ],
  },

  {
    ...cha(1000000503, "空·水", ElementType.Hydro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 80)(
      "UI_AvatarIcon_PlayerBoy",
      [
        "UI_Talent_S_PlayerWater_01",
        "UI_Talent_S_PlayerWater_02",
        "UI_Talent_U_PlayerWater_01",
        "UI_Talent_S_PlayerWater_03",
        "UI_Talent_U_PlayerWater_02",
        "UI_Talent_S_PlayerWater_04",
      ],
      ["普通攻击·异邦激流", "水纹剑", "扬水制流"]
    ),
    normalAttack: [
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
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
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
    ],
    elementSkill: [
      action(
        "喷发激流伤害",
        AttackType.Skill,
        ElementType.Hydro,
        {
          atk: [1.893, 2.035, 2.177, 2.366, 2.508, 2.65, 2.839, 3.028, 3.218, 3.407, 3.596, 3.786, 4.022],
        },
        "water"
      ),
      action("露滴伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
      }),
      action("50%生命以上·露滴伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
        hp: [0.0064, 0.0069, 0.0074, 0.008, 0.0085, 0.009, 0.0096, 0.0102, 0.0109, 0.0115, 0.0122, 0.0128, 0.0136],
      }),
      action("灵息之刺伤害", AttackType.Other, ElementType.Hydro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Hydro, {
        atk: [1.019, 1.095, 1.171, 1.273, 1.35, 1.426, 1.528, 1.63, 1.732, 1.834, 1.935, 2.037, 2.165],
      }),
    ],
    otherSkill: [
      action("4命·倾落的迸水护盾", AttackType.Shield, ElementType.None, {
        hp: [0.1],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "澄明的净水",
        describe:
          "长按施放水纹剑时如果通过充盈消耗了生命值，则在施放结束时的喷发激流造成的伤害提高，提高值为旅行者在此次施放期间通过充盈消耗的生命值总和的45%。通过这种方式，至多使伤害提高5000点。",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => Math.min(5000, (data.baseHP + data.extraHP + data.extraHP_NT) * 0.225),
            special: "water",
            actionOn: ActionOn.External,
          },
        ],
        enable: false,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...cha(1000000703, "荧·水", ElementType.Hydro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 80)(
      "UI_AvatarIcon_PlayerGirl",
      [
        "UI_Talent_S_PlayerWater_01",
        "UI_Talent_S_PlayerWater_02",
        "UI_Talent_U_PlayerWater_01",
        "UI_Talent_S_PlayerWater_03",
        "UI_Talent_U_PlayerWater_02",
        "UI_Talent_S_PlayerWater_04",
      ],
      ["普通攻击·异邦激流", "水纹剑", "扬水制流"]
    ),
    normalAttack: [
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
    ],
    elementSkill: [
      action(
        "喷发激流伤害",
        AttackType.Skill,
        ElementType.Hydro,
        {
          atk: [1.893, 2.035, 2.177, 2.366, 2.508, 2.65, 2.839, 3.028, 3.218, 3.407, 3.596, 3.786, 4.022],
        },
        "water"
      ),
      action("露滴伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
      }),
      action("50%生命以上·露滴伤害", AttackType.Skill, ElementType.Hydro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
        hp: [0.0064, 0.0069, 0.0074, 0.008, 0.0085, 0.009, 0.0096, 0.0102, 0.0109, 0.0115, 0.0122, 0.0128, 0.0136],
      }),
      action("灵息之刺伤害", AttackType.Other, ElementType.Hydro, {
        atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Hydro, {
        atk: [1.019, 1.095, 1.171, 1.273, 1.35, 1.426, 1.528, 1.63, 1.732, 1.834, 1.935, 2.037, 2.165],
      }),
    ],
    otherSkill: [
      action("4命·倾落的迸水护盾", AttackType.Shield, ElementType.None, {
        hp: [0.1],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "澄明的净水",
        describe:
          "长按施放水纹剑时如果通过充盈消耗了生命值，则在施放结束时的喷发激流造成的伤害提高，提高值为旅行者在此次施放期间通过充盈消耗的生命值总和的45%。通过这种方式，至多使伤害提高5000点。",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => Math.min(5000, (data.baseHP + data.extraHP + data.extraHP_NT) * 0.225),
            special: "water",
            actionOn: ActionOn.External,
          },
        ],
        enable: false,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },

  {
    ...cha(1000000502, "空·火", ElementType.Pyro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 70)(
      "UI_AvatarIcon_PlayerBoy",
      [
        "UI_Talent_S_PlayerFire_01",
        "UI_Talent_S_PlayerFire_02",
        "UI_Talent_U_PlayerFire_01",
        "UI_Talent_S_PlayerFire_03",
        "UI_Talent_U_PlayerFire_02",
        "UI_Talent_S_PlayerFire_04",
      ],
      ["普通攻击·异邦烈焰", "流火剑", "灼火燎原"]
    ),
    normalAttack: [
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
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
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
    ],
    elementSkill: [
      action("焰烈之槛伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.281, 0.302, 0.323, 0.351, 0.372, 0.393, 0.421, 0.449, 0.477, 0.505, 0.534, 0.562, 0.597],
      }),
      action("长按伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.988, 1.062, 1.136, 1.235, 1.309, 1.383, 1.482, 1.581, 1.68, 1.778, 1.877, 1.976, 2.1],
      }),
      action("灼火之槛伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.814, 0.875, 0.937, 1.018, 1.079, 1.14, 1.222, 1.303, 1.384, 1.468, 1.547, 1.629, 1.731],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [4.272, 4.592, 4.913, 5.34, 5.66, 5.981, 6.408, 6.835, 7.262, 7.69, 8.117, 8.544, 9.078],
      }),
    ],
    otherSkill: [
      action("永燃的圣火·流火伤害", AttackType.Other, ElementType.Pyro, {
        atk: [0.96],
      }),
    ],
    buffs: [
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
    ],
  },
  {
    ...cha(1000000702, "荧·火", ElementType.Pyro, WeaponType.Sword)(Rarity.Five, 10875, 213, 683, 80)(
      "UI_AvatarIcon_PlayerGirl",
      [
        "UI_Talent_S_PlayerFire_01",
        "UI_Talent_S_PlayerFire_02",
        "UI_Talent_U_PlayerFire_01",
        "UI_Talent_S_PlayerFire_03",
        "UI_Talent_U_PlayerFire_02",
        "UI_Talent_S_PlayerFire_04",
      ],
      ["普通攻击·异邦烈焰", "流火剑", "灼火燎原"]
    ),
    normalAttack: [
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
    ],
    elementSkill: [
      action("焰烈之槛伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.281, 0.302, 0.323, 0.351, 0.372, 0.393, 0.421, 0.449, 0.477, 0.505, 0.534, 0.562, 0.597],
      }),
      action("长按伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.988, 1.062, 1.136, 1.235, 1.309, 1.383, 1.482, 1.581, 1.68, 1.778, 1.877, 1.976, 2.1],
      }),
      action("灼火之槛伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.814, 0.875, 0.937, 1.018, 1.079, 1.14, 1.222, 1.303, 1.384, 1.468, 1.547, 1.629, 1.731],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [4.272, 4.592, 4.913, 5.34, 5.66, 5.981, 6.408, 6.835, 7.262, 7.69, 8.117, 8.544, 9.078],
      }),
    ],
    otherSkill: [
      action("永燃的圣火·流火伤害", AttackType.Other, ElementType.Pyro, {
        atk: [0.96],
      }),
    ],
    buffs: [
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
    ],
  },
];
