import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_HP_28P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000099, "希格雯")
@Weapon(WeaponType.Bow)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [13348, 193, 500], 70, [14297, 236, 535])
@Icons("UI_AvatarIcon_Sigewinne")
export class SigewinneData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["靶向治疗", "弹跳水疗法", "过饱和心意注射"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.526139, 0.568965, 0.61179, 0.672969, 0.715794, 0.764737, 0.832034, 0.899331, 0.966628, 1.040043, 1.113458,
        1.186873, 1.260287, 1.333702, 1.407117,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.510711, 0.552281, 0.59385, 0.653235, 0.694804, 0.742312, 0.807636, 0.872959, 0.938283, 1.009545, 1.080807,
        1.152069, 1.223331, 1.294593, 1.365855,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.78291, 0.846635, 0.91036, 1.001396, 1.065121, 1.13795, 1.23809, 1.338229, 1.438369, 1.547612, 1.656855,
        1.766098, 1.875342, 1.984585, 2.093828,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("小小关心气泡伤害", AttackType.Strong, ElementType.Hydro, {
      atk: [
        0.248, 0.2666, 0.2852, 0.31, 0.3286, 0.3472, 0.372, 0.3968, 0.4216, 0.4464, 0.4712, 0.496, 0.527, 0.558, 0.589,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("激愈水球伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.0228, 0.02451, 0.02622, 0.0285, 0.03021, 0.03192, 0.0342, 0.03648, 0.03876, 0.04104, 0.04332, 0.0456, 0.04845,
        0.0513, 0.05415,
      ],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Hydro, {
      hp: [
        0.00684, 0.007353, 0.007866, 0.00855, 0.009063, 0.009576, 0.01026, 0.010944, 0.011628, 0.012312, 0.012996,
        0.01368, 0.014535, 0.01539, 0.016245,
      ],
    }),
    action("激愈水球治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.028, 0.0301, 0.0322, 0.035, 0.0371, 0.0392, 0.042, 0.0448, 0.0476, 0.0504, 0.0532, 0.056, 0.0595, 0.063,
        0.0665,
      ],
      fixed: [
        269.6314, 296.5983, 325.81244, 357.2738, 390.98242, 426.93826, 465.14136, 505.59167, 548.28925, 593.2341,
        640.42615, 689.8654, 741.55194, 795.4857, 851.66675,
      ],
    }),
    action("弹跳结束治疗量", AttackType.Heal, ElementType.None, {
      hp: new Array(13).fill(0.5),
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.117708, 0.126536, 0.135364, 0.147135, 0.155963, 0.164791, 0.176562, 0.188333, 0.200104, 0.211874, 0.223645,
        0.235416, 0.250129, 0.264843, 0.279556,
      ],
    }),
  ];
  otherSkill = [
    action("2命·护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.3],
    }),
  ];
  buffs = [
    ...S_80_HP_28P,
    {
      label: "应有适当的休憩",
      describe:
        "施放弹跳水疗法时，希格雯将为自己施加持续18秒的「半强制静养」效果：持续期间，希格雯获得8%水元素伤害加成",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 8 }],
      enable: true,
    },
    {
      label: "应有适当的休憩",
      describe:
        "除希格雯外附近队伍中处于后台的角色的元素战技造成伤害时，将消耗1层静养计数，提升此次元素战技造成的伤害值：希格雯的生命值上限超过30000的部分，每1000点生命值上限将提升80点伤害，通过这种方式，至多使本次元素战技造成的伤害提升2800点；解锁1命后效果提升25%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) =>
            data.constellation >= 1
              ? Math.min(3500, (Math.max(0, data.baseHP + data.extraHP + data.extraHP_NT - 30000) / 1000) * 100)
              : Math.min(2800, (Math.max(0, data.baseHP + data.extraHP + data.extraHP_NT - 30000) / 1000) * 80),
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "2命·「最仁慈的精灵，可否化解仇敌」",
      describe: "弹跳水疗法抛出的激愈水球或过饱和心意注射命中敌人后，该敌人的水元素抗性降低35%",
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -35 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·「最光辉的精灵，可否为我祷告」",
      describe:
        "希格雯进行治疗时，将基于生命值上限，提升自己的过饱和心意注射的暴击率和暴击伤害：每1000点生命值上限都将提升0.4%暴击率与2.2%暴击伤害。至多通过这种方式提升20%暴击率与110%暴击伤害%",
      effect: [
        {
          type: BuffType.BurstCritcal,
          getValue: (data) => Math.min(20, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 0.4),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstCritcalHurt,
          getValue: (data) => Math.min(110, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 2.2),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![希格雯](https://enka.network/ui/UI_AvatarIcon_Sigewinne.png) */
export const Sigewinne = new SigewinneData();
