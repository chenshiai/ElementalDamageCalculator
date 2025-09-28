import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_GEO_28P } from "../buffs";

@EnKaId(10000030, "钟离")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, [14695, 251, 738], 40, [15740, 308, 790])
@Icons("UI_AvatarIcon_Zhongli")
export class ZhongliData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["岩雨", "元素战技·地心", "元素爆发·天星"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.307691, 0.332735, 0.35778, 0.393558, 0.418603, 0.447225, 0.486581, 0.525937, 0.565292, 0.608226, 0.657421,
        0.715274, 0.773127, 0.83098, 0.894092,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.311518, 0.336874, 0.36223, 0.398453, 0.423809, 0.452788, 0.492633, 0.532478, 0.572323, 0.615791, 0.665598,
        0.72417, 0.782743, 0.841315, 0.905213,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.385762, 0.417161, 0.44856, 0.493416, 0.524815, 0.5607, 0.610042, 0.659383, 0.708725, 0.762552, 0.824229,
        0.896761, 0.969293, 1.041825, 1.120951,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.429389, 0.46434, 0.49929, 0.549219, 0.584169, 0.624113, 0.679034, 0.733956, 0.788878, 0.848793, 0.917445,
        0.998181, 1.078916, 1.159651, 1.247726,
      ],
    }),
    action("五段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.1075, 0.11625, 0.125, 0.1375, 0.14625, 0.15625, 0.17, 0.18375, 0.1975, 0.2125, 0.229687, 0.2499, 0.270112,
        0.290325, 0.312375,
      ],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.544965, 0.589322, 0.63368, 0.697048, 0.741406, 0.7921, 0.861805, 0.93151, 1.001214, 1.077256, 1.164387,
        1.266853, 1.369319, 1.471785, 1.583566,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.11026, 1.20063, 1.291, 1.4201, 1.51047, 1.61375, 1.75576, 1.89777, 2.03978, 2.1947, 2.372212, 2.580967,
        2.789722, 2.998477, 3.226209,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
  ];
  elementSkill = [
    action("岩脊伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.16, 0.172, 0.184, 0.2, 0.212, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32, 0.34, 0.36, 0.38],
    }),
    action("共鸣伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.32, 0.344, 0.368, 0.4, 0.424, 0.448, 0.48, 0.512, 0.544, 0.576, 0.608, 0.64, 0.68, 0.72, 0.76],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7, 1.8, 1.9],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [
        0.128, 0.1376, 0.1472, 0.16, 0.1696, 0.1792, 0.192, 0.2048, 0.2176, 0.2304, 0.2432, 0.256, 0.272, 0.288, 0.304,
      ],
      fixed: [1232, 1356, 1489, 1633, 1787, 1951, 2126, 2311, 2506, 2712, 2927, 3153, 3389, 3636, 3892],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [
        4.0108, 4.4444, 4.878, 5.42, 5.9078, 6.3956, 7.046, 7.6964, 8.3468, 8.9972, 9.6476, 10.298, 10.84, 11.382,
        11.924,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_GEO_28P,
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
      enable: true,
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
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.FallingFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.0139,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.0139,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.019,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.33,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![钟离](https://enka.network/ui/UI_AvatarIcon_Zhongli.png) */
export const Zhongli = new ZhongliData();
