import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  AttackType,
  BuffType,
  ElementType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HEALADD_18P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000124, "雅珂达")
@Weapon(WeaponType.Bow)
@Element(ElementType.Anemo, SecondElementType.Moon)
@BaseData(Rarity.Four, [9646, 223, 580], 70, [10313, 280, 620])
@Icons("UI_AvatarIcon_Jahoda")
export class JahodaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["见机行矢", "奇策·财富分配方案", "秘器·猎人的七道具"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.416739, 0.450659, 0.48458, 0.533038, 0.566959, 0.605725, 0.659029, 0.712333, 0.765636, 0.823786, 0.881936,
        0.940085, 0.998235, 1.056384, 1.114534,
      ],
    }),
    action("二段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.192313, 0.207967, 0.22362, 0.245982, 0.261635, 0.279525, 0.304123, 0.328721, 0.35332, 0.380154, 0.406988,
        0.433823, 0.460657, 0.487492, 0.514326,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.511975, 0.553648, 0.59532, 0.654852, 0.696524, 0.74415, 0.809635, 0.87512, 0.940606, 1.012044, 1.083482,
        1.154921, 1.226359, 1.297798, 1.369236,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
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
    action("烟雾弹伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        1.59, 1.70925, 1.8285, 1.9875, 2.10675, 2.226, 2.385, 2.544, 2.703, 2.862, 3.021, 3.18, 3.37875, 3.5775,
        3.77625,
      ],
    }),
    action("秘藏瓶未装满伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        1.908, 2.0511, 2.1942, 2.385, 2.5281, 2.6712, 2.862, 3.0528, 3.2436, 3.4344, 3.6252, 3.816, 4.0545, 4.293,
        4.5315,
      ],
    }),
    action("秘藏瓶装满伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.12, 2.279, 2.438, 2.65, 2.809, 2.968, 3.18, 3.392, 3.604, 3.816, 4.028, 4.24, 4.505, 4.77, 5.035],
    }),
    action("猫猫球伤害·水", AttackType.Skill, ElementType.Hydro, {
      atk: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72, 2.88, 3.04],
    }),
    action("猫猫球伤害·火", AttackType.Skill, ElementType.Pyro, {
      atk: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72, 2.88, 3.04],
    }),
    action("猫猫球伤害·雷", AttackType.Skill, ElementType.Electro, {
      atk: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72, 2.88, 3.04],
    }),
    action("猫猫球伤害·冰", AttackType.Skill, ElementType.Cryo, {
      atk: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72, 2.88, 3.04],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        2.072, 2.2274, 2.3828, 2.59, 2.7454, 2.9008, 3.108, 3.3152, 3.5224, 3.7296, 3.9368, 4.144, 4.403, 4.662, 4.921,
      ],
    }),
    action("猫型家用互助协调器伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [
        0.172664, 0.185614, 0.198564, 0.21583, 0.22878, 0.24173, 0.258996, 0.276262, 0.293529, 0.310795, 0.328062,
        0.345328, 0.366911, 0.388494, 0.410077,
      ],
    }, 'jahoda'),
    action("猫型家用互助协调器伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.172664, 0.185614, 0.198564, 0.21583, 0.22878, 0.24173, 0.258996, 0.276262, 0.293529, 0.310795, 0.328062,
        0.345328, 0.366911, 0.388494, 0.410077,
      ],
    }, 'jahoda'),
    action("猫型家用互助协调器伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.172664, 0.185614, 0.198564, 0.21583, 0.22878, 0.24173, 0.258996, 0.276262, 0.293529, 0.310795, 0.328062,
        0.345328, 0.366911, 0.388494, 0.410077,
      ],
    }, 'jahoda'),
    action("猫型家用互助协调器伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.172664, 0.185614, 0.198564, 0.21583, 0.22878, 0.24173, 0.258996, 0.276262, 0.293529, 0.310795, 0.328062,
        0.345328, 0.366911, 0.388494, 0.410077,
      ],
    }, 'jahoda'),
    action("猫型家用互助协调器治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        0.79872, 0.858624, 0.918528, 0.9984, 1.058304, 1.118208, 1.19808, 1.277952, 1.357824, 1.437696, 1.517568,
        1.59744, 1.69728, 1.79712, 1.89696,
      ],
      fixed: [
        500.73764, 550.81836, 605.0725, 663.5, 726.1009, 792.8752, 863.8229, 938.944, 1018.23846, 1101.7063, 1189.3477,
        1281.1622, 1377.1503, 1477.3118, 1581.6466,
      ],
    }),
    action("最低生命值角色额外治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        0.3072, 0.33024, 0.35328, 0.384, 0.40704, 0.43008, 0.4608, 0.49152, 0.52224, 0.55296, 0.58368, 0.6144, 0.6528,
        0.6912, 0.7296,
      ],
      fixed: [
        192.59721, 211.8596, 232.7272, 255.2, 279.27798, 304.96118, 332.2496, 361.1432, 391.642, 423.74597, 457.45517,
        492.76956, 529.68915, 568.214, 608.34393,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_HEALADD_18P,
    {
      label: "索酬的巧计·火",
      describe: "若角色数量最多的元素类型为火，则猫型家用互助协调器造成原本130%的伤害。",
      effect: [
        {
          type: BuffType.BurstRate,
          getValue: () => 30,
          special: 'jahoda'
        },
      ],
      enable: false,
    },
    {
      label: "蜜莓的嘉赏",
      describe: "元素爆发秘器 · 猎人的七道具中的猫型家用互助协调器对队伍中自己的当前场上角色触发治疗时，若受到治疗的角色生命值高于70%，则该角色的元素精通提升100点，持续6秒。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 100,
        },
      ],
      enable: true,
      shareable: true,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·最渺小的幸运",
      describe: "月兆·满辉：元素战技奇策·财富分配方案中的呼噜噜秘藏瓶装满后的20秒内，队伍中附近的月兆角色的暴击率提升5%，暴击伤害提升40%。",
      effect: [{ type: BuffType.Critcal, getValue: () => 5 },
        { type: BuffType.CritcalHurt, getValue: () => 40 }
      ],
      enable: true,
      shareable: true,
      shareCondition: ({ secondElement }) => secondElement === SecondElementType.Moon,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![雅珂达](https://enka.network/ui/UI_AvatarIcon_Jahoda.png) */
export const Jahoda = new JahodaData();
