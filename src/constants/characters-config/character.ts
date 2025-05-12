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
import * as cryo from "./cryo";
import * as pyro from "./pyro";
import * as anemo from "./anemo";
import * as electro from "./electro";
import * as geo from "./geo";
import * as dendro from "./dendro";
import * as hydro from "./hydro";

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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.51, 0.552, 0.593, 0.652, 0.694, 0.741, 0.807, 0.872, 0.937, 1.008, 1.079],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.474, 0.513, 0.552, 0.607, 0.645, 0.69, 0.75, 0.811, 0.872, 0.938, 1.004],
      }),
      action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.314, 0.339, 0.365, 0.401, 0.427, 0.456, 0.496, 0.536, 0.577, 0.62, 0.664],
      }),
      action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.33, 0.356, 0.383, 0.421, 0.448, 0.479, 0.521, 0.563, 0.605, 0.651, 0.697],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.779, 0.843, 0.906, 0.997, 1.06, 1.133, 1.232, 1.332, 1.432, 1.541, 1.649],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.128, 1.219, 1.311, 1.442, 1.534, 1.639, 1.783, 1.927, 2.071, 2.229, 2.386],
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
      action("白玉萝卜伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [0.299, 0.322, 0.344, 0.374, 0.396, 0.419, 0.449, 0.479, 0.509, 0.539, 0.569, 0.598, 0.636],
      }),
      action("白玉萝卜治疗量", AttackType.Heal, ElementType.None, {
        hp: [0.017, 0.018, 0.02, 0.021, 0.023, 0.024, 0.026, 0.027, 0.029, 0.031, 0.033, 0.034, 0.036],
        fixed: [165, 182, 199, 219, 239, 261, 285, 310, 336, 363, 392, 422, 454],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [1.146, 1.232, 1.317, 1.432, 1.518, 1.604, 1.718, 1.833, 1.948, 2.062, 2.177, 2.291, 2.434],
      }),
      action("桂子仙机白玉萝卜伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [0.722, 0.776, 0.83, 0.902, 0.956, 1.01, 1.082, 1.155, 1.227, 1.3, 1.371, 1.443, 1.533],
      }),
      action("桂子仙机白玉萝卜治疗量", AttackType.Heal, ElementType.None, {
        hp: [0.02, 0.022, 0.023, 0.025, 0.027, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04, 0.043],
        fixed: [194, 214, 235, 257, 281, 307, 335, 364, 394, 427, 461, 496, 534],
      }),
    ],
    otherSkill: [
      action("6命·超厉害·大萝卜", AttackType.Skill, ElementType.Dendro, {
        atk: [0.75],
      }),
      action("6命·超厉害·大萝卜治疗量", AttackType.Heal, ElementType.None, {
        hp: [0.075],
      }),
    ],
    buffs: [
      ...A_80_HP_24P,
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
            getValue: (data) => Math.min(120, (data.baseHP + data.extraHP) * 0.003),
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.447, 0.484, 0.52, 0.572, 0.609, 0.651, 0.707, 0.765, 0.822, 0.884, 0.947],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.422, 0.456, 0.491, 0.54, 0.514, 0.613, 0.667, 0.721, 0.775, 0.834, 0.893],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.532, 0.575, 0.618, 0.68, 0.723, 0.773, 0.841, 0.909, 0.977, 1.051, 1.125],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.706, 0.764, 0.821, 0.903, 0.961, 1.027, 1.117, 1.207, 1.297, 1.396, 1.495],
      }),
      action("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.488, 1.6, 1.711, 1.861, 1.972, 2.083, 2.232, 2.381, 2.53, 2.678, 2.827, 2.976, 3.162],
      }),
      action("风压塌陷风涡伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [1.08, 1.161, 1.242, 1.35, 1.431, 1.512, 1.62, 1.728, 1.836, 1.944, 2.052, 2.16, 2.295],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [3.776, 4.059, 4.342, 4.72, 5.003, 5.286, 5.664, 6.042, 6.419, 6.797, 7.174, 7.552, 8.024],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
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
        effect: [{ type: BuffType.AnemoFixed, getValue: (data) => data.baseATK * 0.32, actionOn: ActionOn.External }],
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.512, 0.554, 0.596, 0.655, 0.697, 0.744, 0.81, 0.876, 0.941, 1.012, 1.084],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.485, 0.524, 0.564, 0.62, 0.66, 0.705, 0.767, 0.829, 0.891, 0.958, 1.026],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.73, 0.789, 0.849, 0.933, 0.993, 1.061, 1.154, 1.247, 1.341, 1.443, 1.544],
      }),
      action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.477, 0.516, 0.555, 0.611, 0.649, 0.694, 0.755, 0.816, 0.877, 0.944, 1.01],
      }),
      action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.526, 0.568, 0.611, 0.672, 0.715, 0.764, 0.831, 0.898, 0.965, 1.039, 1.112],
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
      action("技能伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.128, 0.138, 0.147, 0.16, 0.17, 0.179, 0.192, 0.205, 0.218, 0.23, 0.243, 0.256, 0.272],
      }),
      action(
        "飞星伤害",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [0.147, 0.158, 0.169, 0.184, 0.195, 0.206, 0.221, 0.236, 0.25, 0.265, 0.28, 0.294, 0.313],
        },
        "Layla"
      ),
      action("护盾基础吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.108, 0.116, 0.124, 0.135, 0.143, 0.151, 0.162, 0.173, 0.184, 0.195, 0.205, 0.216, 0.23],
        fixed: [1040, 1144, 1257, 1378, 1508, 1647, 1794, 1950, 2115, 2288, 2470, 2661, 2860],
      }),
    ],
    burstSkill: [
      action(
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
      ...A_80_HP_24P,
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
            actionOn: ActionOn.External,
            special: "Layla",
          },
        ],
        enable: true,
      },
      {
        label: "1命·寐领围垣",
        describe: "垂裳端凝之夜的安眠帷幕护盾的伤害吸收量提高20%",
        effect: [{ type: BuffType.ShieldAdd, getValue: () => 20 }],
        enable: true,
        condition: ({ constellation }) => constellation >= 1,
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
            actionOn: ActionOn.External,
          },
          {
            type: BuffType.StrongFixed,
            getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.05,
            actionOn: ActionOn.External,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.608, 0.658, 0.707, 0.778, 0.827, 0.884, 0.962, 1.039, 1.117, 1.202, 1.287],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.611, 0.661, 0.711, 0.782, 0.832, 0.889, 0.967, 1.045, 1.123, 1.209, 1.294],
      }),
      action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.355, 0.384, 0.413, 0.454, 0.483, 0.516, 0.561, 0.607, 0.652, 0.702, 0.751],
      }),
      action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.434, 0.469, 0.504, 0.555, 0.59, 0.63, 0.686, 0.741, 0.797, 0.857, 0.918],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.949, 1.027, 1.104, 1.214, 1.292, 1.38, 1.501, 1.623, 1.744, 1.877, 2.009],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.242, 1.343, 1.444, 1.588, 1.69, 1.905, 1.964, 2.123, 2.282, 2.455, 2.628],
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
      action("护盾吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255],
        fixed: [1156, 1271, 1396, 1531, 1676, 1830, 1993, 2167, 2350, 2542, 2745, 2957, 3178],
      }),
      action("基础伤害", AttackType.Skill, ElementType.Hydro, {
        hp: [0.12, 0.129, 0.138, 0.15, 0.16, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255],
      }),
      action("蓄力完成伤害", AttackType.Skill, ElementType.Hydro, {
        hp: [0.19, 0.205, 0.219, 0.238, 0.252, 0.267, 0.286, 0.305, 0.324, 0.343, 0.362, 0.381, 0.405],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Hydro, {
        hp: [0.066, 0.071, 0.076, 0.083, 0.088, 0.093, 0.099, 0.106, 0.112, 0.119, 0.126, 0.132, 0.141],
      }),
      action("水波冲击伤害", AttackType.Burst, ElementType.Hydro, {
        hp: [0.066, 0.071, 0.076, 0.083, 0.088, 0.093, 0.099, 0.106, 0.112, 0.119, 0.126, 0.132, 0.141],
      }),
    ],
    otherSkill: [
      action("6命·衍溢的汐潮", AttackType.Burst, ElementType.Hydro, {
        hp: [0.15],
      }),
    ],
    buffs: [
      ...A_80_HP_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.902, 0.976, 1.049, 1.154, 1.227, 1.311, 1.427, 1.542, 1.657, 1.783, 1.909],
      }),
      action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.411, 0.444, 0.478, 0.525, 0.559, 0.597, 0.65, 0.702, 0.755, 0.812, 0.859],
      }),
      action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.431, 0.466, 0.501, 0.552, 0.587, 0.627, 0.682, 0.737, 0.792, 0.852, 0.913],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.284, 1.388, 1.493, 1.642, 1.747, 1.866, 2.03, 2.195, 2.359, 2.538, 2.717],
      }),
      action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.236, 1.336],
      }),
      action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.42],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      action("断除烦恼炮伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.473, 1.583, 1.694, 1.841, 1.951, 2.062, 2.209, 2.356, 2.504, 2.651, 2.798, 2.946, 3.13],
      }),
      action("售后服务弹伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.316, 0.339, 0.363, 0.395, 0.418, 0.442, 0.473, 0.505, 0.537, 0.568, 0.6, 0.631, 0.671],
      }),
    ],
    burstSkill: [
      action("连接伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.29, 0.3, 0.32, 0.34],
      }),
      action("持续治疗量", AttackType.Heal, ElementType.None, {
        hp: [0.067, 0.072, 0.077, 0.083, 0.088, 0.093, 0.1, 0.107, 0.113, 0.12, 0.127, 0.133, 0.142],
        fixed: [642, 706, 776, 851, 931, 1017, 1107, 1204, 1305, 1412, 1525, 1643, 1766],
      }),
    ],
    otherSkill: [
      action("2命·特许经营", AttackType.Skill, ElementType.Electro, {
        atk: [0.5],
      }),
    ],
    buffs: [
      ...A_80_HP_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.436, 0.472, 0.507, 0.558, 0.593, 0.634, 0.69, 0.745, 0.801, 0.862, 0.923],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.427, 0.461, 0.496, 0.546, 0.58, 0.62, 0.675, 0.729, 0.784, 0.843, 0.903],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.541, 0.585, 0.629, 0.692, 0.736, 0.786, 0.855, 0.925, 0.994, 1.069, 1.145],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.68, 0.736, 0.791, 0.87, 0.926, 0.989, 1.076, 1.163, 1.25, 1.345, 1.44],
      }),
      action("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      action("满蓄力瞄准射击", AttackType.Strong, ElementType.Dendro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Dendro, {
        atk: [1.512, 1.625, 1.739, 1.89, 2.003, 2.117, 2.268, 2.419, 2.57, 2.722, 2.873, 3.024, 3.213],
      }),
    ],
    burstSkill: [
      action("爆发伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [2.018, 2.17, 2.321, 2.523, 2.674, 2.826, 3.027, 3.229, 3.431, 3.633, 3.835, 4.047, 4.289],
      }),
      action("跃动伤害", AttackType.Burst, ElementType.Dendro, {
        atk: [0.433, 0.465, 0.497, 0.541, 0.573, 0.606, 0.649, 0.692, 0.735, 0.779, 0.822, 0.865, 0.919],
      }),
    ],
    otherSkill: [
      action("飞叶迴斜", AttackType.Skill, ElementType.Dendro, {
        atk: [0.4],
      }),
      action("6命·坠镞为林", AttackType.Other, ElementType.Dendro, {
        atk: [2],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.375, 0.403, 0.431, 0.468, 0.497, 0.525, 0.562, 0.6, 0.637, 0.675, 0.712],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.369, 0.396, 0.424, 0.461, 0.488, 0.516, 0.553, 0.59, 0.627, 0.663, 0.7],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.511, 0.549, 0.587, 0.638, 0.677, 0.715, 0.766, 0.817, 0.868, 0.919, 0.97],
      }),
      action("四段伤害·1", AttackType.Normal, ElementType.Anemo, {
        atk: [0.148, 0.159, 0.17, 0.185, 0.196, 0.207, 0.222, 0.237, 0.251, 0.266, 0.281],
      }),
      action("四段伤害·2", AttackType.Normal, ElementType.Anemo, {
        atk: [0.16, 0.175, 0.187, 0.203, 0.216, 0.228, 0.244, 0.26, 0.276, 0.293, 0.309],
      }),
      action("四段伤害·3", AttackType.Normal, ElementType.Anemo, {
        atk: [0.192, 0.207, 0.221, 0.24, 0.255, 0.269, 0.288, 0.308, 0.327, 0.346, 0.365],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.615, 0.661, 0.707, 0.768, 0.814, 0.86, 0.922, 0.983, 1.045, 1.106, 1.168],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Anemo, {
        atk: [0.73, 0.78, 0.84, 0.91, 0.96, 1.02, 1.1, 1.17, 1.24, 1.31, 1.39],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.42, 1.53, 1.62, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.275, 2.446, 2.617, 2.844, 3.015, 3.185, 3.413, 3.64, 3.868, 4.095, 4.323, 4.55, 4.835],
      }),
      action("1层变格伤害", AttackType.Skill, ElementType.Anemo, {
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
      action("2层变格伤害", AttackType.Skill, ElementType.Anemo, {
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
      action("3层变格伤害", AttackType.Skill, ElementType.Anemo, {
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
      action("满蓄力伤害", AttackType.Skill, ElementType.Anemo, {
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
      action("不动流·真空弹伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [3.147, 3.383, 3.619, 3.934, 4.17, 4.406, 4.72, 5.035, 5.35, 5.664, 5.979, 6.294, 6.687],
      }),
      action("聚风真眼伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
      action("聚风真眼伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
      action("聚风真眼伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
      action("聚风真眼伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ANEMO_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.488, 0.527, 0.567, 0.624, 0.663, 0.709, 0.771, 0.834, 0.896, 0.964, 1.032],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.446, 0.482, 0.518, 0.57, 0.606, 0.648, 0.705, 0.762, 0.818, 0.881, 0.943],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.593, 0.642, 0.69, 0.759, 0.807, 0.863, 0.938, 1.014, 1.09, 1.173, 1.256],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.761, 0.823, 0.885, 0.974, 1.036, 1.106, 1.204, 1.301, 1.398, 1.505, 1.611],
      }),
      action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.556, 0.602, 0.647, 0.717, 0.757, 0.809, 0.88, 0.951, 1.022, 1.1, 1.177],
      }),
      action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.668, 0.722, 0.776, 0.854, 0.908, 0.97, 1.056, 1.141, 1.227, 1.32, 1.413],
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
      action("技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.757, 0.814, 0.871, 0.946, 1.003, 1.06, 1.136, 1.211, 1.287, 1.363, 1.439, 1.514, 1.609],
      }),
      action("越祓草轮伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.252, 0.271, 0.29, 0.316, 0.334, 0.353, 0.379, 0.404, 0.429, 0.454, 0.48, 0.505, 0.536],
      }),
      action("越祓草轮治疗量", AttackType.Heal, ElementType.None, {
        hp: [0.03, 0.032, 0.035, 0.038, 0.04, 0.042, 0.045, 0.048, 0.051, 0.054, 0.057, 0.06, 0.064],
        fixed: [289, 318, 349, 383, 419, 457, 498, 842, 587, 636, 686, 739, 795],
      }),
    ],
    burstSkill: [
      action("单次伤害", AttackType.Burst, ElementType.Electro, {
        hp: [0.036, 0.039, 0.041, 0.045, 0.048, 0.05, 0.054, 0.058, 0.061, 0.065, 0.068, 0.072, 0.077],
      }),
    ],
    otherSkill: [
      action("4命·割舍封闭之心", AttackType.Other, ElementType.Electro, {
        hp: [0.097],
      }),
    ],
    buffs: [
      ...A_80_HP_24P,
      {
        label: "安心之所",
        describe: "基于久岐忍的元素精通，越祓雷草之轮伤害提升，值为元素精通的25%",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.25,
            actionOn: ActionOn.External,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.405, 0.438, 0.471, 0.518, 0.551, 0.589, 0.641, 0.692, 0.744, 0.801, 0.857],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.403, 0.435, 0.468, 0.515, 0.548, 0.585, 0.637, 0.688, 0.739, 0.796, 0.852],
      }),
      action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.23, 0.248, 0.267, 0.294, 0.312, 0.334, 0.363, 0.393, 0.422, 0.454, 0.486],
      }),
      action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.275, 0.298, 0.32, 0.352, 0.374, 0.4, 0.435, 0.47, 0.506, 0.544, 0.582],
      }),
      action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.24, 0.26, 0.279, 0.307, 0.326, 0.349, 0.379, 0.41, 0.441, 0.474, 0.508],
      }),
      action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.288, 0.312, 0.335, 0.369, 0.392, 0.419, 0.456, 0.493, 0.529, 0.57, 0.61],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.673, 0.728, 0.783, 0.861, 0.916, 0.979, 1.065, 1.151, 1.237, 1.331, 1.425],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.217, 1.316, 1.415, 1.557, 1.656, 1.769, 1.924, 2.08, 2.236, 2.406, 2.6],
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
      action("点按伤害", AttackType.Skill, ElementType.Geo, {
        def: [1.491, 1.603, 1.715, 1.864, 1.976, 2.087, 2.237, 2.386, 2.535, 2.684, 2.833, 2.982, 3.169],
      }),
      action("一段蓄力伤害", AttackType.Skill, ElementType.Geo, {
        def: [2.61, 2.805, 3.001, 3.262, 3.468, 3.653, 3.914, 4.175, 4.436, 4.697, 4.958, 5.219, 5.545],
      }),
      action("二段蓄力伤害", AttackType.Skill, ElementType.Geo, {
        def: [3.728, 4.008, 4.287, 4.66, 4.94, 5.219, 5.592, 5.965, 6.338, 6.71, 7.083, 7.456, 7.922],
      }),
      action("护盾吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.22, 0.23, 0.24, 0.26, 0.27],
        fixed: [1155, 1271, 1396, 1531, 1675, 1830, 1993, 2167, 2350, 2542, 2744, 2956, 3178, 3409],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Geo, {
        atk: [2.44, 2.62, 2.81, 3.05, 3.23, 3.42, 3.66, 3.9, 4.15, 4.39, 4.64, 4.88, 5.19],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_CHARGE_26P,
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
            actionOn: ActionOn.External,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.378, 0.408, 0.439, 0.483, 0.514, 0.549, 0.597, 0.645, 0.694, 0.746, 0.799],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.372, 0.402, 0.432, 0.475, 0.505, 0.54, 0.588, 0.635, 0.683, 0.734, 0.786],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.495, 0.535, 0.575, 0.633, 0.673, 0.719, 0.782, 0.845, 0.909, 0.978, 1.047],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.59, 0.638, 0.686, 0.755, 8.03, 0.858, 0.933, 1.008, 1.084, 1.166, 1.249],
      }),
      action("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      action("满蓄力瞄准射击", AttackType.Strong, ElementType.Geo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action(
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
      action(
        "技能伤害",
        AttackType.Burst,
        ElementType.Geo,
        {
          def: [0.98, 1.06, 1.13, 1.23, 1.3, 1.38, 1.47, 1.57, 1.67, 1.77, 1.87, 1.96, 2.09],
        },
        "Gorou"
      ),
      action(
        "岩晶崩破伤害",
        AttackType.Burst,
        ElementType.Geo,
        {
          def: [0.62, 0.66, 0.7, 0.77, 0.81, 0.86, 0.92, 0.98, 1.04, 1.1, 1.16, 1.23, 1.3],
        },
        "Gorou"
      ),
    ],
    otherSkill: [
      action("4命·犬舐·温如水", AttackType.Heal, ElementType.None, {
        def: [0.5],
      }),
    ],
    buffs: [
      ...A_80_GEO_24P,
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
            actionOn: ActionOn.External,
            special: "Gorou",
          },
          {
            type: BuffType.BurstFixed,
            getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.156,
            actionOn: ActionOn.External,
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
        condition: ({ constellation }) => constellation >= 6,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.444, 0.48, 0.516, 0.568, 0.604, 0.645, 0.702, 0.759, 0.816, 0.878, 0.94],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.436, 0.472, 0.507, 0.558, 0.594, 0.634, 0.69, 0.746, 0.802, 0.862, 0.923],
      }),
      action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.268, 0.29, 0.312, 0.343, 0.365, 0.389, 0.424, 0.458, 0.492, 0.53, 0.567],
      }),
      action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.268, 0.29, 0.312, 0.343, 0.365, 0.389, 0.424, 0.458, 0.492, 0.53, 0.567],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.674, 0.728, 0.783, 0.862, 0.916, 0.979, 1.065, 1.151, 1.238, 1.331, 1.425],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.31, 1.44, 1.53, 1.64, 1.78, 1.93, 2.07, 2.23, 2.39],
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
      action("技能伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.46, 1.57, 1.68, 1.83, 1.94, 2.05, 2.2, 2.34, 2.49, 2.64, 2.78, 2.93, 3.11],
      }),
      action("护盾吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.072, 0.077, 0.0828, 0.09, 0.095, 0.101, 0.108, 0.115, 0.122, 0.13, 0.137, 0.144, 0.153, 0.162],
        fixed: [693, 763, 838, 919, 1005, 1098, 1196, 1300, 1410, 1525, 1647, 1774, 1907, 2046],
      }),
      action("护盾吸收量上限", AttackType.Shield, ElementType.None, {
        hp: [0.1969, 0.2107, 0.2254, 0.245, 0.2597, 0.2744, 0.294, 0.3136, 0.3332, 0.3528, 0.3724, 0.392, 0.417, 0.441],
        fixed: [1887, 2076, 2281, 2501, 2737, 3000, 3256, 3539, 3838, 4153, 4483, 4829, 5191, 5568],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.88, 0.95, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
      }),
      action(
        "炽火崩破伤害",
        AttackType.Burst,
        ElementType.Pyro,
        {
          atk: [0.58, 0.62, 0.67, 0.73, 0.77, 0.81, 0.87, 0.93, 0.99, 1.04, 1.1, 1.16, 1.23, 1.31],
        },
        "Tohma"
      ),
      action("护盾吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.011, 0.012, 0.013, 0.014, 0.015, 0.016, 0.017, 0.018, 0.019, 0.021, 0.022, 0.023, 0.024, 0.0257],
        fixed: [110, 121, 133, 146, 160, 174, 190, 206, 224, 242, 261, 282, 303, 325],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
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
            actionOn: ActionOn.External,
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
          { type: BuffType.NormalPrcent, getValue: () => 15 },
          { type: BuffType.StrongPrcent, getValue: () => 15 },
          { type: BuffType.FallingPrcent, getValue: () => 15 },
        ],
        enable: true,
        shareable: true,
        target: BuffTarget.All,
        condition: ({ constellation }) => constellation >= 6,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.369, 0.399, 0.429, 0.472, 0.502, 0.536, 0.583, 0.631, 0.678, 0.729, 0.781],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.387, 0.416, 0.45, 0.495, 0.527, 0.563, 0.612, 0.662, 0.711, 0.765, 0.819],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.485, 0.5245, 0.564, 0.62, 0.66, 0.705, 0.767, 0.829, 0.891, 0.959, 1.027],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.504, 0.545, 0.586, 0.645, 0.686, 0.733, 0.797, 0.861, 0.926, 0.996, 1.067],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.581, 0.628, 0.675, 0.743, 0.79, 0.844, 0.918, 0.992, 1.067, 1.148, 1.229],
      }),
      action("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      action("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("天狗咒雷•伏伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.258, 1.352, 1.446, 1.572, 1.666, 1.761, 1.886, 2.012, 2.138, 2.264, 2.389, 2.515, 2.672],
      }),
      action("2命·鸦羽", AttackType.Skill, ElementType.Electro, {
        atk: [1.258, 1.352, 1.446, 1.572, 1.666, 1.761, 1.886, 2.012, 2.138, 2.264, 2.389, 2.515, 2.672].map(
          (i) => i * 0.3
        ),
      }),
    ],
    burstSkill: [
      action("天狗咒雷•金刚坏伤害", AttackType.Burst, ElementType.Electro, {
        atk: [4.096, 4.403, 4.71, 5.12, 5.427, 5.734, 6.144, 6.554, 6.963, 7.373, 7.782, 8.192, 8.704, 9.216],
      }),
      action("天狗咒雷•雷砾伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.341, 0.367, 0.392, 0.427, 0.452, 0.478, 0.512, 0.546, 0.58, 0.614, 0.648, 0.682, 0.725, 0.768],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
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
        condition: ({ constellation }) => constellation >= 6,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.724, 0.782, 0.84, 0.924, 0.983, 1.05, 1.142, 1.235, 1.327, 1.428, 1.544],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.714, 0.772, 0.83, 0.913, 0.971, 1.038, 1.129, 1.22, 1.311, 1.411, 1.525],
      }),
      action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.689, 0.742, 0.798, 0.859, 0.928],
      }),
      action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.689, 0.742, 0.798, 0.859, 0.928],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.983, 1.061, 1.141, 1.255, 1.335, 1.426, 1.552, 1.677, 1.803, 1.94, 2.097],
      }),
      action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.626, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.239, 1.324],
      }),
      action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      action("风风轮伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
      }),
      action(
        "点按伤害",
        AttackType.Skill,
        ElementType.Anemo,
        {
          atk: [1.584, 1.703, 1.822, 1.98, 2.099, 2.218, 2.376, 2.534, 2.693, 2.851, 3.01, 3.168, 3.366],
        },
        "sayo"
      ),
      action(
        "长按伤害",
        AttackType.Skill,
        ElementType.Anemo,
        {
          atk: [2.176, 2.339, 2.502, 2.72, 2.883, 3.046, 3.264, 3.482, 3.699, 3.917, 4.134, 4.352, 4.624],
        },
        "sayo"
      ),
      action("附带元素伤害·火", AttackType.Skill, ElementType.Pyro, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      action(
        "长按附带元素伤害·火",
        AttackType.Skill,
        ElementType.Pyro,
        {
          atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
        },
        "sayo"
      ),
      action("附带元素伤害·水", AttackType.Skill, ElementType.Hydro, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      action(
        "长按附带元素伤害·水",
        AttackType.Skill,
        ElementType.Hydro,
        {
          atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
        },
        "sayo"
      ),
      action("附带元素伤害·冰", AttackType.Skill, ElementType.Cryo, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      action(
        "长按附带元素伤害·冰",
        AttackType.Skill,
        ElementType.Cryo,
        {
          atk: [0.762, 0.819, 0.876, 0.952, 1.009, 1.066, 1.142, 1.219, 1.295, 1.371, 1.447, 1.523, 1.618],
        },
        "sayo"
      ),
      action("附带元素伤害·雷", AttackType.Skill, ElementType.Electro, {
        atk: [0.168, 0.181, 0.193, 0.21, 0.223, 0.235, 0.252, 0.269, 0.286, 0.302, 0.319, 0.336, 0.357],
      }),
      action(
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
      action("技能发动伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [1.17, 1.26, 1.34, 1.46, 1.55, 1.64, 1.75, 1.87, 1.99, 2.1, 2.22, 2.34, 2.48, 2.63],
      }),
      action("不倒貉貉伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [0.52, 0.56, 0.6, 0.65, 0.69, 0.73, 0.78, 0.83, 0.88, 0.94, 0.99, 1.04, 1.11, 1.17],
      }),
      action("技能发动治疗量", AttackType.Heal, ElementType.None, {
        atk: [0.922, 0.991, 1.06, 1.152, 1.221, 1.29, 1.382, 1.475, 1.567, 1.659, 1.751, 1.843, 1.958, 2.074],
        fixed: [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703],
      }),
      action("不倒貉貉治疗量", AttackType.Heal, ElementType.None, {
        atk: [0.799, 0.859, 0.919, 0.998, 1.058, 1.118, 1.198, 1.278, 1.358, 1.438, 1.518, 1.597, 1.697, 1.797],
        fixed: [500, 550, 605, 663, 726, 792, 863, 938, 1017, 1101, 1188, 1280, 1376, 1476],
      }),
    ],
    otherSkill: [
      action("更加合适的人选", AttackType.Heal, ElementType.None, {
        em: [1.2],
        fixed: [300],
      }),
    ],
    buffs: [
      ...A_80_MYSTERY_96,
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
            actionOn: ActionOn.External,
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
      action("一段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.5834, 0.6272, 0.6709, 0.7293, 0.773, 0.8168, 0.8751, 0.9335, 0.9918, 1.0501, 1.1085],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.5213, 0.5604, 0.5994, 0.6516, 0.6907, 0.7298, 0.7819, 0.834, 0.8861, 0.9383, 0.9904],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Pyro, {
        atk: [0.7601, 0.8171, 0.8741, 0.9502, 1.0072, 1.0642, 1.1402, 1.2162, 1.2922, 1.3682, 1.4442],
      }),
      action("重击·0层", AttackType.Strong, ElementType.Pyro, {
        atk: [0.9823, 1.0411, 1.0999, 1.1764, 1.2352, 1.294, 1.3705, 1.447, 1.5234, 1.5999, 1.6764],
      }),
      action("重击·1层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.1556, 1.2248, 1.294, 1.384, 1.4532, 1.5224, 1.6124, 1.7023, 1.7923, 1.8822, 1.9722],
      }),
      action("重击·2层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.329, 1.4086, 1.4881, 1.5916, 1.6712, 1.7508, 1.8542, 1.9577, 2.0611, 2.1646, 2.268],
      }),
      action("重击·3层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.5023, 1.5923, 1.6823, 1.7992, 1.8892, 1.9791, 2.0961, 2.213, 2.33, 2.4469, 2.5639],
      }),
      action("重击·4层", AttackType.Strong, ElementType.Pyro, {
        atk: [1.6757, 1.776, 1.8764, 2.0068, 2.1071, 2.2075, 2.3379, 2.4684, 2.5988, 2.7292, 2.8597],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Pyro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.696, 1.8232, 1.9504, 2.12, 2.2472, 2.3744, 2.544, 2.7136, 2.8832, 3.0528, 3.2224, 3.392, 3.604],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.824, 1.9608, 2.0976, 2.28, 2.4168, 2.5536, 2.736, 2.9184, 3.1008, 3.2832, 3.4656, 3.648, 3.876, 4.104],
      }),
    ],
    otherSkill: [
      action("法兽灼眼", AttackType.Strong, ElementType.Pyro, {
        atk: [0.8],
      }),
      action("4命·丹书金铁券护盾", AttackType.Shield, ElementType.None, {
        hp: [0.45],
      }),
    ],
    buffs: [
      ...A_80_PYRO_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.525, 0.567, 0.61, 0.671, 0.714, 0.763, 0.83, 0.897, 0.964, 1.037, 1.11],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.516, 0.558, 0.6, 0.66, 0.702, 0.75, 0.816, 0.882, 0.948, 1.02, 1.092],
      }),
      action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.318, 0.344, 0.37, 0.407, 0.433, 0.463, 0.503, 0.544, 0.585, 0.629, 0.673],
      }),
      action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.318, 0.344, 0.37, 0.407, 0.433, 0.463, 0.503, 0.544, 0.585, 0.629, 0.673],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.697, 0.753, 0.81, 0.891, 0.948, 1.013, 1.102, 1.191, 1.28, 1.377, 1.474],
      }),
      action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.416, 0.45, 0.484, 0.532, 0.566, 0.605, 0.658, 0.711, 0.765, 0.823, 0.881],
      }),
      action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.91],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.37, 1.48, 1.59, 1.75, 1.86, 1.99, 2.16, 2.34, 2.51, 2.7, 2.89],
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
      action("技能伤害·1", AttackType.Skill, ElementType.Cryo, {
        atk: [0.58, 0.63, 0.67, 0.73, 0.77, 0.82, 0.88, 0.93, 0.99, 1.05, 1.11, 1.17, 1.24],
      }),
      action("技能伤害·2", AttackType.Skill, ElementType.Cryo, {
        atk: [1.36, 1.46, 1.56, 1.7, 1.8, 1.9, 2.04, 2.18, 2.31, 2.45, 2.58, 2.72, 2.89],
      }),
    ],
    burstSkill: [
      action("技能伤害·1", AttackType.Burst, ElementType.Cryo, {
        atk: [1.04, 1.18, 1.2, 1.3, 1.38, 1.46, 1.56, 1.66, 1.77, 1.87, 1.98, 2.08, 2.21, 2.34],
      }),
      action("技能伤害·2", AttackType.Burst, ElementType.Cryo, {
        atk: [1.52, 1.634, 1.75, 1.9, 2.01, 2.13, 2.28, 2.43, 2.58, 2.74, 2.89, 3.04, 3.23, 3.42],
      }),
      action("冰枪持续伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81, 2.97],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.765, 0.828, 0.89, 0.979, 1.041, 1.113, 1.21, 1.308, 1.406, 1.513, 1.62],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.74, 0.8, 0.86, 0.946, 1.006, 1.075, 1.17, 1.264, 1.359, 1.462, 1.565],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.955, 1.032, 1.11, 1.211, 1.3, 1.388, 1.51, 1.632, 1.754, 1.887, 2.02],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.158, 1.253, 1.347, 1.482, 1.576, 1.684, 1.832, 1.98, 2.128, 2.29, 2.452],
      }),
      action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.626, 0.676, 0.727, 0.8, 0.851, 0.909, 0.989, 1.069, 1.149, 1.239, 1.324],
      }),
      action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.015, 1.084, 1.18, 1.275, 1.37, 1.474, 1.579],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.4, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.02, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      action("挥舞伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.7, 1.82, 1.95, 2.12, 2.25, 2.37, 2.54, 2.71, 2.88, 3.05, 3.22, 3.39, 3.6],
      }),
      action("持续伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [0.336, 0.361, 0.386, 0.42, 0.445, 0.474, 0.504, 0.538, 0.571, 0.605, 0.638, 0.672, 0.714],
      }),
      action("一级护盾吸收量", AttackType.Shield, ElementType.None, {
        def: [1.04, 1.118, 1.196, 1.301, 1.379, 1.457, 1.561, 1.665, 1.769, 1.873, 1.977, 2.081, 2.211, 2.341],
        fixed: [501, 551, 605, 663, 726, 793, 864, 939, 1018, 1101, 1189, 1281, 1377, 1477],
      }),
      action("二级护盾吸收量", AttackType.Shield, ElementType.None, {
        def: [1.224, 1.316, 1.408, 1.53, 1.622, 1.714, 1.836, 1.958, 2.081, 2.203, 2.326, 2.448, 2.601, 2.754],
        fixed: [589, 648, 712, 780, 854, 932, 116, 1104, 1197, 1296, 1399, 1507, 1620, 1737],
      }),
      action("三级护盾吸收量", AttackType.Shield, ElementType.None, {
        def: [1.44, 1.548, 1.656, 1.8, 1.908, 2.016, 2.16, 2.304, 2.448, 2.592, 2.736, 2.88, 3.06, 3.24],
        fixed: [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044],
      }),
    ],
    burstSkill: [
      action(
        "技能伤害",
        AttackType.Burst,
        ElementType.Physical,
        {
          atk: [3.4, 3.66, 3.92, 4.26, 4.52, 4.77, 5.11, 5.45, 5.79, 6.13, 6.48, 6.82, 7.24, 7.67],
        },
        "Xinyan"
      ),
      action("火元素持续伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
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
            actionOn: ActionOn.Indirect,
            transform: true,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.772],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.335, 0.363, 0.39, 0.429, 0.456, 0.488, 0.53, 0.573, 0.616, 0.663, 0.717],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.456, 0.493, 0.53, 0.583, 0.62, 0.663, 0.721, 0.779, 0.837, 0.901, 0.974],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.43, 0.465, 0.5, 0.55, 0.585, 0.625, 0.68, 0.735, 0.79, 0.85, 0.919],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.538, 0.581, 0.625, 0.688, 0.731, 0.781, 0.85, 0.919, 0.988, 1.063, 1.148],
      }),
      action("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.69, 0.75, 0.806, 0.867, 0.937],
      }),
      action("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("猫爪伤害", AttackType.Skill, ElementType.Cryo, {
        atk: [0.419, 0.451, 0.482, 0.524, 0.555, 0.587, 0.629, 0.671, 0.713, 0.755, 0.796, 0.838, 0.891],
      }),
      action("护盾基础吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.072, 0.077, 0.083, 0.09, 0.095, 0.101, 0.108, 0.115, 0.122, 0.13, 0.137, 0.144, 0.153, 0.162],
        fixed: [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044],
      }),
      action("长按护盾吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.072, 0.077, 0.083, 0.09, 0.095, 0.101, 0.108, 0.115, 0.122, 0.13, 0.137, 0.144, 0.153, 0.162].map(
          (i) => i * 1.75
        ),
        fixed: [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044].map((i) => i * 1.75),
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8],
      }),
      action("领域持续伤害", AttackType.Burst, ElementType.Cryo, {
        atk: [0.526, 0.566, 0.605, 0.658, 0.697, 0.737, 0.79, 0.842, 0.895, 0.948, 1, 1.053, 1.119, 1.184],
      }),
      action("持续治疗量", AttackType.Heal, ElementType.None, {
        hp: [
          0.0534, 0.0574, 0.0614, 0.0667, 0.0707, 0.0747, 0.08, 0.0854, 0.0907, 0.096, 0.1014, 0.1067, 0.1134, 0.1201,
        ],
        fixed: [513, 565, 620, 680, 744, 813, 885, 962, 1044, 1129, 1219, 1313, 1411, 1514],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_CRYO_24P,
      {
        label: "2命·猫爪冰摇",
        describe: "猫爪冻冻造成的伤害、护盾吸收量提高15%",
        effect: [
          { type: BuffType.SkillPrcent, getValue: () => 15 },
          { type: BuffType.ShieldAdd, getValue: () => 15 },
        ],
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
      action("一段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.335, 0.36, 0.385, 0.418, 0.443, 0.468, 0.502, 0.535, 0.569, 0.602, 0.636],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.306, 0.329, 0.352, 0.383, 0.406, 0.429, 0.459, 0.49, 0.521, 0.551, 0.582],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.384, 0.413, 0.442, 0.481, 0.509, 0.538, 0.577, 0.615, 0.654, 0.692, 0.731],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Anemo, {
        atk: [0.479, 0.515, 0.551, 0.599, 0.635, 0.671, 0.719, 0.767, 0.815, 0.863, 0.91],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Anemo, {
        atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("技能伤害", AttackType.Skill, ElementType.Anemo, {
        atk: [2.11, 2.27, 2.43, 2.64, 2.8, 2.96, 3.17, 3.38, 3.59, 3.8, 4.01, 4.22, 4.49],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Anemo, {
        atk: [1.48, 1.59, 1.7, 1.85, 1.96, 2.07, 2.22, 2.37, 2.52, 2.66, 2.81, 2.96, 3.15, 3.33],
      }),
      action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
      action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
      action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
      action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
        atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ANEMO_24P,
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
        effect: [
          {
            type: BuffType.MysteryFixed,
            getValue: (data) => data.elementalMystery * 0.2,
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.441, 0.477, 0.513, 0.564, 0.6, 0.641, 0.698, 0.754, 0.811, 0.872, 0.934],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.468, 0.506, 0.544, 0.598, 0.636, 0.68, 0.74, 0.8, 0.86, 0.925, 0.99],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.581, 0.629, 0.676, 0.744, 0.791, 0.845, 0.919, 0.994, 1.07, 1.15, 1.23],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.577, 0.624, 0.671, 0.738, 0.785, 0.839, 0.913, 0.986, 1.06, 1.14, 1.22],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.721, 0.779, 0.838, 0.922, 0.98, 1.05, 1.14, 1.23, 1.32, 1.42, 1.53],
      }),
      action("瞄准射击", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      action("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      action("噬星魔鸦", AttackType.Strong, ElementType.Electro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36].map((i) => i * 1.527),
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("奥兹攻击伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.888, 0.955, 1.02, 1.11, 1.18, 1.24, 1.33, 1.42, 1.51, 1.6, 1.69, 1.78, 1.89],
      }),
      action("召唤伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.15, 1.24, 1.33, 1.44, 1.53, 1.62, 1.73, 1.85, 1.96, 2.08, 2.19, 2.31, 2.45],
      }),
    ],
    burstSkill: [
      action("落雷伤害", AttackType.Burst, ElementType.Electro, {
        atk: [2.08, 2.24, 2.39, 2.6, 2.76, 2.91, 3.12, 3.33, 3.54, 3.74, 3.95, 4.16, 4.42, 4.68],
      }),
    ],
    otherSkill: [
      action("断罪雷影", AttackType.Skill, ElementType.Electro, {
        atk: [0.8],
      }),
      action("1命·幽邃鸦眼", AttackType.Normal, ElementType.Physical, {
        atk: [0.22],
      }),
      action("4命·皇女幻绮谭", AttackType.Burst, ElementType.Electro, {
        atk: [2.22],
      }),
      action("6命·永夜之禽", AttackType.Skill, ElementType.Electro, {
        atk: [0.3],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
      {
        label: "2命·圣裁影羽",
        describe: "施放夜巡影翼时，能额外造成200%攻击力的伤害",
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 2,
            actionOn: ActionOn.External,
          },
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
      action("一段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.396, 0.426, 0.455, 0.495, 0.525, 0.554, 0.594, 0.634, 0.673, 0.713, 0.754],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.359, 0.386, 0.413, 0.449, 0.476, 0.503, 0.539, 0.575, 0.611, 0.647, 0.684],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.428, 0.46, 0.492, 0.535, 0.567, 0.599, 0.642, 0.685, 0.728, 0.77, 0.815],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Electro, {
        atk: [0.55, 0.591, 0.632, 0.687, 0.728, 0.769, 0.824, 0.879, 0.934, 0.989, 1.046],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Electro, {
        atk: [1.77, 1.9, 2.04, 2.21, 2.35, 2.48, 2.66, 2.83, 3.01, 3.19, 3.37],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("点按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7],
      }),
      action("无引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [3.2, 3.44, 3.68, 4, 4.24, 4.48, 4.8, 5.12, 5.44, 5.76, 6.08, 6.4, 6.8],
      }),
      action("一层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [3.68, 3.96, 4.23, 4.6, 4.88, 5.15, 5.52, 5.89, 6.26, 6.62, 6.99, 7.36, 7.82],
      }),
      action("二层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [4.24, 4.56, 4.88, 5.3, 5.62, 5.94, 6.36, 6.78, 7.21, 7.63, 8.06, 8.48, 9.01],
      }),
      action("三层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
        atk: [4.87, 5.24, 5.6, 6.09, 6.46, 6.82, 7.31, 7.8, 8.28, 8.77, 9.26, 9.74, 10.35],
      }),
    ],
    burstSkill: [
      action("雷光放电伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.366, 0.393, 0.42, 0.457, 0.484, 0.512, 0.548, 0.585, 0.622, 0.658, 0.695, 0.731, 0.777, 0.823],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_MYSTERY_96,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.959, 1.024, 1.09, 1.177, 1.24, 1.32, 1.42, 1.52, 1.61, 1.71, 1.81],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.826, 0.883, 0.939, 1.01, 1.07, 1.14, 1.22, 1.31, 1.39, 1.47, 1.56],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.033, 1.103, 1.174, 1.27, 1.34, 1.42, 1.53, 1.63, 1.74, 1.84, 1.95],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.36, 1.45, 1.546, 1.67, 1.76, 1.87, 2.01, 2.15, 2.29, 2.43, 2.57],
      }),
      action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.625, 0.676, 0.727, 0.8, 0.851, 0.909, 0.99, 1.07, 1.15, 1.24, 1.32],
      }),
      action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.13, 1.22, 1.32, 1.45, 1.54, 1.64, 1.79, 1.93, 2.08, 2.24, 2.39],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.82, 0.887, 0.954, 1.05, 1.12, 1.19, 1.3, 1.4, 1.51, 1.62, 1.74],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.64, 1.77, 1.91, 2.1, 2.23, 2.38, 2.59, 2.8, 3.01, 3.24, 3.47],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [2.05, 2.22, 2.38, 2.62, 2.79, 2.98, 3.24, 3.5, 3.76, 4.05, 4.34],
      }),
    ],
    elementSkill: [
      action("点按技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.99, 2.14, 2.29, 2.49, 2.64, 2.79, 2.99, 3.19, 3.39, 3.586, 3.785, 3.984, 4.233],
      }),
      action("长按技能伤害", AttackType.Skill, ElementType.Electro, {
        atk: [2.95, 3.17, 3.39, 3.69, 3.91, 4.13, 4.43, 4.72, 5.02, 5.31, 5.61, 5.9, 6.27],
      }),
    ],
    burstSkill: [
      action("爆发伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6],
      }),
      action("狼魂·1伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.959, 1.024, 1.09, 1.177, 1.24, 1.32, 1.42, 1.52, 1.61, 1.71, 1.81].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
      action("狼魂·2伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.826, 0.883, 0.939, 1.01, 1.07, 1.14, 1.22, 1.31, 1.39, 1.47, 1.56].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
      action("狼魂·三段伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.033, 1.103, 1.174, 1.27, 1.34, 1.42, 1.53, 1.63, 1.74, 1.84, 1.95].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
      action("狼魂·四段伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.36, 1.45, 1.546, 1.67, 1.76, 1.87, 2.01, 2.15, 2.29, 2.43, 2.57].map((item, index) => {
          return (
            item * [0.24, 0.258, 0.276, 0.3, 0.318, 0.336, 0.36, 0.384, 0.408, 0.432, 0.456, 0.48, 0.51, 0.54][index]
          );
        }),
      }),
    ],
    otherSkill: [
      action("6命·天狼落雷", AttackType.Other, ElementType.Electro, {
        atk: [1],
      }),
    ],
    buffs: [
      ...A_80_PHYSICAL_30P,
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
        describe: "雷泽攻击生命值低于30%的敌人时，暴击率提高10%",
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.711, 0.769, 0.827, 0.91, 0.968, 1.03, 1.12, 1.22, 1.31, 1.41, 1.52],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.709, 0.767, 0.824, 0.906, 0.964, 1.03, 1.12, 1.21, 1.3, 1.4, 1.51],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.883, 0.955, 1.03, 1.13, 1.2, 1.28, 1.4, 1.51, 1.62, 1.75, 1.89],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.865, 0.936, 1.01, 1.11, 1.18, 1.26, 1.37, 1.48, 1.59, 1.71, 1.85],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [1.12, 1.21, 1.3, 1.43, 1.53, 1.63, 1.77, 1.92, 2.06, 2.22, 2.4],
      }),
      action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.562, 0.608, 0.654, 0.719, 0.765, 0.818, 0.889, 0.961, 1.03, 1.11, 1.2],
      }),
      action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.02, 1.1, 1.18, 1.3, 1.39, 1.48, 1.61, 1.74, 1.87, 2.01, 2.18],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.746, 0.807, 0.867, 0.954, 1.01, 1.08, 1.18, 1.27, 1.37, 1.47, 1.58],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.49, 1.61, 1.73, 1.91, 2.03, 2.17, 2.36, 2.55, 2.74, 2.95, 3.16],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.86, 2.01, 2.17, 2.38, 2.53, 2.71, 2.95, 3.18, 3.42, 3.68, 3.94],
      }),
    ],
    elementSkill: [
      action("护盾吸收量", AttackType.Shield, ElementType.None, {
        hp: [0.144, 0.155, 0.166, 0.18, 0.191, 0.202, 0.216, 0.23, 0.245, 0.259, 0.274, 0.288, 0.306, 0.324],
        fixed: [1386, 1525, 1675, 1837, 2010, 2195, 2392, 2600, 2819, 3050, 3293, 3547, 3813, 4090],
      }),
      action("基础伤害", AttackType.Skill, ElementType.Electro, {
        atk: [1.22, 1.31, 1.4, 1.52, 1.61, 1.7, 1.82, 1.95, 2.07, 2.19, 2.31, 2.43, 2.58],
      }),
      action("一层伤害", AttackType.Skill, ElementType.Electro, {
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
      action("两层伤害", AttackType.Skill, ElementType.Electro, {
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
      action("技能伤害", AttackType.Burst, ElementType.Electro, {
        atk: [1.22, 1.31, 1.4, 1.52, 1.61, 1.7, 1.82, 1.95, 2.07, 2.19, 2.31, 2.43, 2.58, 2.74],
      }),
      action("闪雷伤害", AttackType.Burst, ElementType.Electro, {
        atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04, 2.16],
      }),
    ],
    otherSkill: [
      action("1命·鱼龙沉八方", AttackType.Shield, ElementType.None, {
        hp: [0.16],
      }),
      action("4命·牵星觅乡岸", AttackType.Other, ElementType.Electro, {
        atk: [0.2],
      }),
    ],
    buffs: [
      ...A_80_ELECTRO_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.421, 0.455, 0.489, 0.538, 0.572, 0.611, 0.665, 0.719, 0.773, 0.831, 0.899],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.421, 0.456, 0.49, 0.539, 0.573, 0.613, 0.666, 0.72, 0.774, 0.833, 0.9],
      }),
      action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
        atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
      }),
      action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
        atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
      }),
      action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
        atk: [0.141, 0.153, 0.164, 0.18, 0.192, 0.205, 0.223, 0.241, 0.259, 0.279, 0.301],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.71, 0.768, 0.826, 0.909, 0.966, 1.03, 1.12, 1.21, 1.31, 1.4, 1.52],
      }),
      action("重击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [1.22, 1.32, 1.42, 1.56, 1.66, 1.77, 1.92, 2.08, 2.24, 2.41, 2.6],
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
      action("喷火伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.11, 1.2, 1.28, 1.39, 1.47, 1.56, 1.67, 1.78, 1.89, 2, 2.11, 2.23, 2.36],
      }),
    ],
    burstSkill: [
      action("一段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.72, 0.774, 0.828, 0.9, 0.954, 1.01, 1.08, 1.15, 1.22, 1.3, 1.37, 1.44, 1.53, 1.62],
      }),
      action("二段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87, 1.98],
      }),
      action("三段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.1, 1.18, 1.26, 1.37, 1.45, 1.53, 1.64, 1.75, 1.86, 1.97, 2.08, 2.19, 2.33, 2.47],
      }),
      action("旋火轮伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [1.12, 1.2, 1.29, 1.4, 1.48, 1.57, 1.68, 1.79, 1.9, 2.02, 2.13, 2.24, 2.38, 2.52],
      }),
    ],
    otherSkill: [
      action("2命·大火宽油·内爆", AttackType.Other, ElementType.Pyro, {
        atk: [0.75],
      }),
    ],
    buffs: [
      ...A_80_MYSTERY_96,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.764],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.764],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.464, 0.502, 0.54, 0.594, 0.632, 0.675, 0.734, 0.794, 0.853, 0.918, 0.983],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.473, 0.512, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.94, 1],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.593, 0.642, 0.69, 0.759, 0.807, 0.863, 0.938, 1.01, 1.09, 1.17, 1.26],
      }),
      action("瞄准射击伤害", AttackType.Strong, ElementType.Physical, {
        atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
      }),
      action("满蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
        atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
      }),
      action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
        atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
      }),
      action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
      }),
      action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
        atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
      }),
    ],
    elementSkill: [
      action("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.23, 1.32, 1.42, 1.54, 1.63, 1.72, 1.85, 1.97, 2.09, 2.22, 2.34, 2.46, 2.62],
      }),
    ],
    burstSkill: [
      action("箭雨单次伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.281, 0.302, 0.323, 0.351, 0.372, 0.393, 0.421, 0.449, 0.477, 0.505, 0.534, 0.562, 0.597, 0.632],
      }),
      action("箭雨总伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [5.05, 5.43, 5.81, 6.32, 6.7, 7.08, 7.58, 8.09, 8.59, 9.1, 9.6, 10.11, 10.74, 11.37],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_ATK_24P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.445, 0.482, 0.518, 0.57, 0.606, 0.648, 0.704, 0.762, 0.819, 0.881, 0.943],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.427, 0.462, 0.497, 0.547, 0.581, 0.621, 0.676, 0.731, 0.785, 0.845, 0.905],
      }),
      action("三段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.546, 0.591, 0.635, 0.699, 0.743, 0.794, 0.864, 0.934, 1.003, 1.08, 1.156],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.597, 0.645, 0.694, 0.763, 0.812, 0.868, 0.944, 1.02, 1.097, 1.18, 1.263],
      }),
      action("五段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.719, 0.777, 0.836, 0.92, 0.978, 1.05, 1.14, 1.23, 1.32, 1.42, 1.52],
      }),
      action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
        atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.027, 1.105, 1.183],
      }),
      action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
        atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.285],
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
      action("点按伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.38, 1.48, 1.58, 1.72, 1.82, 1.93, 2.06, 2.2, 2.34, 2.48, 2.61, 2.75, 2.92],
      }),
      action("一段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.84, 0.903, 0.966, 1.05, 1.11, 1.18, 1.26, 1.34, 1.43, 1.51, 1.6, 1.68, 1.79],
      }),
      action("一段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.92, 0.989, 1.06, 1.15, 1.22, 1.29, 1.38, 1.47, 1.56, 1.66, 1.75, 1.84, 1.96],
      }),
      action("二段蓄力伤害·前段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.88, 0.946, 1.01, 1.1, 1.17, 1.23, 1.32, 1.41, 1.5, 1.58, 1.67, 1.76, 1.87],
      }),
      action("二段蓄力伤害·后段", AttackType.Skill, ElementType.Pyro, {
        atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04],
      }),
      action("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
        atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81],
      }),
    ],
    burstSkill: [
      action("技能伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [2.33, 2.5, 2.68, 2.91, 3.08, 3.26, 3.49, 3.72, 3.96, 4.19, 4.42, 4.66, 4.95, 5.24],
      }),
      action("持续治疗", AttackType.Heal, ElementType.None, {
        hp: [0.06, 0.0645, 0.069, 0.075, 0.0795, 0.084, 0.09, 0.096, 0.102, 0.108, 0.114, 0.12, 0.1275, 0.135],
        fixed: [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703],
      }),
    ],
    otherSkill: [],
    buffs: [
      ...A_80_CHARGE_26P,
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
      action("一段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.466, 0.504, 0.542, 0.596, 0.634, 0.678, 0.737, 0.797, 0.856, 0.921, 0.996],
      }),
      action("二段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.476, 0.515, 0.554, 0.609, 0.648, 0.693, 0.753, 0.814, 0.875, 0.942, 1.018],
      }),
      action("三段伤害·前段", AttackType.Normal, ElementType.Physical, {
        atk: [0.286, 0.309, 0.332, 0.365, 0.388, 0.415, 0.452, 0.488, 0.525, 0.564, 0.61],
      }),
      action("三段伤害·后段", AttackType.Normal, ElementType.Physical, {
        atk: [0.286, 0.309, 0.332, 0.365, 0.388, 0.415, 0.452, 0.488, 0.525, 0.564, 0.61],
      }),
      action("四段伤害", AttackType.Normal, ElementType.Physical, {
        atk: [0.56, 0.605, 0.651, 0.716, 0.762, 0.814, 0.885, 0.957, 1.029, 1.107, 1.196],
      }),
      action("五段伤害·前段", AttackType.Normal, ElementType.Physical, {
        atk: [0.359, 0.388, 0.417, 0.459, 0.488, 0.521, 0.567, 0.613, 0.659, 0.709, 0.766],
      }),
      action("五段伤害·后段", AttackType.Normal, ElementType.Physical, {
        atk: [0.359, 0.388, 0.417, 0.459, 0.488, 0.521, 0.567, 0.613, 0.659, 0.709, 0.766],
      }),
      action("重击伤害·前段", AttackType.Strong, ElementType.Physical, {
        atk: [0.473, 0.512, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.935, 1.011],
      }),
      action("重击伤害·后段", AttackType.Strong, ElementType.Physical, {
        atk: [0.562, 0.607, 0.653, 0.718, 0.764, 0.816, 0.888, 0.96, 1.032, 1.11, 1.2],
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
      action("技能伤害·前段", AttackType.Skill, ElementType.Hydro, {
        atk: [1.68, 1.81, 1.93, 2.1, 2.23, 2.35, 2.52, 2.69, 2.86, 3.02, 3.19, 3.36, 3.57],
      }),
      action("技能伤害·后段", AttackType.Skill, ElementType.Hydro, {
        atk: [1.91, 2.06, 2.2, 2.39, 2.53, 2.68, 2.87, 3.06, 3.25, 3.44, 3.63, 3.82, 4.06],
      }),
    ],
    burstSkill: [
      action("剑雨伤害", AttackType.Burst, ElementType.Hydro, {
        atk: [0.543, 0.583, 0.624, 0.678, 0.719, 0.76, 0.814, 0.868, 0.923, 0.977, 1.03, 1.09, 1.15, 1.22],
      }),
    ],
    otherSkill: [
      action("生水要诀", AttackType.Heal, ElementType.None, {
        hp: [0.06],
      }),
    ],
    buffs: [
      ...A_80_ATK_24P,
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
