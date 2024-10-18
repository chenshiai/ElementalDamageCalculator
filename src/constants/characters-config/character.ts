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
  ...createCharacter(1000000, "", ElementType.Dendro, WeaponType.Polearms)(Rarity.Five, 9787, 200, 601)("", [], []),
  normalAttack: [],
  elementSkill: [],
  burstSkill: [],
  otherSkill: [],
  buffs: [],
};
// .replaceAll("%", '').replaceAll(/[\u4e00-\u9fff]+/g, "").replaceAll("\t",",").split(",").map(i=>Math.round(i*100)/10000)
export const Character: (ICharacterInfo & Record<any, any>)[] = [
  {
    ...createCharacter(10000068, "多莉", ElementType.Electro, WeaponType.GreatSword)(Rarity.Four, 12397, 223, 723)(
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
    ...createCharacter(10000067, "柯莱", ElementType.Dendro, WeaponType.Bow)(Rarity.Four, 13568, 335, 730)(
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
    ...createCharacter(10000059, "鹿野院平藏", ElementType.Anemo, WeaponType.Magic)(Rarity.Four, 10657, 225, 684)(
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
    ...createCharacter(10000065, "久岐忍", ElementType.Electro, WeaponType.Sword)(Rarity.Four, 12289, 212, 751)(
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
          { type: BuffType.SkillFixed, getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.25 },
        ],
        enable: true,
      },
      Constellation_E_3,
      Constellation_Q_5,
    ],
  },
  {
    ...createCharacter(10000064, "云堇", ElementType.Geo, WeaponType.Polearms)(Rarity.Four, 10657, 191, 734)(
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
    ...createCharacter(10000055, "五郎", ElementType.Geo, WeaponType.Bow)(Rarity.Four, 9570, 183, 648)(
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
      createAttack("技能伤害", AttackType.Skill, ElementType.Geo, {
        atk: [1.072, 1.152, 1.233, 1.34, 1.42, 1.501, 1.608, 1.715, 1.822, 1.93, 2.037, 2.144, 2.278].map(
          (i) => i + 1.56
        ),
      }),
    ],
    burstSkill: [
      createAttack("技能伤害", AttackType.Burst, ElementType.Geo, {
        def: [0.98, 1.06, 1.13, 1.23, 1.3, 1.38, 1.47, 1.57, 1.67, 1.77, 1.87, 1.96, 2.09].map((i) => i + 0.156),
      }),
      createAttack("岩晶崩破伤害", AttackType.Burst, ElementType.Geo, {
        def: [0.62, 0.66, 0.7, 0.77, 0.81, 0.86, 0.92, 0.98, 1.04, 1.1, 1.16, 1.23, 1.3].map((i) => i + 0.156),
      }),
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
    ...createCharacter(10000050, "托马", ElementType.Pyro, WeaponType.Polearms)(Rarity.Four, 10331, 202, 751)(
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
      createAttack("炽火崩破伤害", AttackType.Burst, ElementType.Pyro, {
        atk: [0.58, 0.62, 0.67, 0.73, 0.77, 0.81, 0.87, 0.93, 0.99, 1.04, 1.1, 1.16, 1.23, 1.31],
        hp: new Array(14).fill(0.022),
      }),
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
    ...createCharacter(10000056, "九条裟罗", ElementType.Electro, WeaponType.Bow)(Rarity.Four, 9570, 195, 628)(
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
    ...createCharacter(10000053, "早柚", ElementType.Anemo, WeaponType.GreatSword)(Rarity.Four, 11854, 244, 745)(
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
    ...createCharacter(10000048, "烟绯", ElementType.Pyro, WeaponType.Magic)(Rarity.Four, 9352, 240, 587)(
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
    ...createCharacter(10000045, "罗莎莉亚", ElementType.Cryo, WeaponType.Polearms)(Rarity.Four, 12289, 240, 710)(
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
    ...createCharacter(10000044, "辛焱", ElementType.Pyro, WeaponType.GreatSword)(Rarity.Four, 11201, 249, 799)(
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
    ...createCharacter(10000039, "迪奥娜", ElementType.Cryo, WeaponType.Bow)(Rarity.Four, 9570, 212, 601)(
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
    ...createCharacter(10000043, "砂糖", ElementType.Anemo, WeaponType.Magic)(Rarity.Four, 9244, 170, 703)(
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
    ...createCharacter(10000031, "菲谢尔", ElementType.Electro, WeaponType.Bow)(Rarity.Four, 9189, 244, 594)(
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
    ...createCharacter(10000006, "丽莎", ElementType.Electro, WeaponType.Magic)(Rarity.Four, 9570, 232, 573)(
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
    ...createCharacter(10000020, "雷泽", ElementType.Electro, WeaponType.GreatSword)(Rarity.Four, 11962, 234, 751)(
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
    ...createCharacter(10000024, "北斗", ElementType.Electro, WeaponType.GreatSword)(Rarity.Four, 13050, 225, 648)(
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
    ...createCharacter(10000023, "香菱", ElementType.Pyro, WeaponType.Polearms)(Rarity.Four, 10875, 225, 669)(
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
    ...createCharacter(10000021, "安柏", ElementType.Pyro, WeaponType.Bow)(Rarity.Four, 9461, 223, 601)(
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
    ...createCharacter(10000032, "班尼特", ElementType.Pyro, WeaponType.Sword)(Rarity.Four, 12397, 191, 771)(
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
    ...createCharacter(10000025, "行秋", ElementType.Hydro, WeaponType.Sword)(Rarity.Four, 10222, 202, 758)(
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
    ...createCharacter(10000014, "芭芭拉", ElementType.Hydro, WeaponType.Magic)(Rarity.Four, 9787, 159, 669)(
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
    ...createCharacter(10000027, "凝光", ElementType.Geo, WeaponType.Magic)(Rarity.Four, 9787, 212, 573)(
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
    ...createCharacter(10000034, "诺艾尔", ElementType.Geo, WeaponType.GreatSword)(Rarity.Four, 12071, 191, 799)(
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
    ...createCharacter(10000015, "凯亚", ElementType.Cryo, WeaponType.Sword)(Rarity.Four, 11636, 223, 792)(
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
    ...createCharacter(10000036, "重云", ElementType.Cryo, WeaponType.GreatSword)(Rarity.Four, 10984, 223, 648)(
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
