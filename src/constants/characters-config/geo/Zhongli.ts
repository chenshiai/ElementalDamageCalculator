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
      atk: [0.308, 0.333, 0.358, 0.394, 0.419, 0.448, 0.487, 0.526, 0.565, 0.608, 0.657],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.314, 0.337, 0.362, 0.399, 0.424, 0.453, 0.493, 0.533, 0.572, 0.616, 0.666],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.386, 0.417, 0.449, 0.493, 0.525, 0.561, 0.61, 0.659, 0.709, 0.763, 0.824],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.429, 0.464, 0.499, 0.549, 0.584, 0.624, 0.679, 0.734, 0.789, 0.849, 0.917],
    }),
    action("五段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.108, 0.116, 0.125, 0.138, 0.146, 0.156, 0.17, 0.184, 0.198, 0.213, 0.23],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.545, 0.589, 0.634, 0.697, 0.741, 0.792, 0.862, 0.932, 1.001, 1.077, 1.164],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.11, 1.2, 1.29, 1.42, 1.51, 1.61, 1.76, 1.9, 2.04, 2.2, 2.37],
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
  ];
  elementSkill = [
    action("岩脊伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.16, 0.172, 0.184, 0.2, 0.212, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32, 0.34],
    }),
    action("共鸣伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.32, 0.344, 0.368, 0.4, 0.424, 0.448, 0.48, 0.512, 0.544, 0.576, 0.608, 0.64, 0.68],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.128, 0.138, 0.147, 0.16, 0.17, 0.179, 0.192, 0.205, 0.218, 0.23, 0.243, 0.256, 0.272, 0.288],
      fixed: [1232, 1356, 1489, 1633, 1787, 1951, 2126, 2311, 2506, 2712, 2927, 3153, 3389, 3636],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [4.01, 4.44, 4.88, 5.42, 5.91, 6.4, 7.05, 7.7, 8.35, 9, 9.65, 10.3, 10.84, 11.38],
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
