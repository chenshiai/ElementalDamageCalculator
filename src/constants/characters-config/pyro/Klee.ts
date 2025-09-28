import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_PYRO_28P } from "../buffs";

@EnKaId(10000029, "可莉")
@Weapon(WeaponType.Magic)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [10287, 311, 615], 60, [11018, 381, 659])
@Icons("UI_AvatarIcon_Klee")
export class KleeData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["砰砰", "蹦蹦炸弹", "轰轰火花"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.7216, 0.77572, 0.82984, 0.902, 0.95612, 1.01024, 1.0824, 1.15456, 1.22672, 1.29888, 1.373926, 1.472064,
        1.570202, 1.668339, 1.766477,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.624, 0.6708, 0.7176, 0.78, 0.8268, 0.8736, 0.936, 0.9984, 1.0608, 1.1232, 1.188096, 1.27296, 1.357824,
        1.442688, 1.527552,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.8992, 0.96664, 1.03408, 1.124, 1.19144, 1.25888, 1.3488, 1.43872, 1.52864, 1.61856, 1.712077, 1.834368,
        1.956659, 2.07895, 2.201242,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.5736, 1.69162, 1.80964, 1.967, 2.08502, 2.20304, 2.3604, 2.51776, 2.67512, 2.83248, 2.996134, 3.210144,
        3.424154, 3.638163, 3.852173,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Pyro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Pyro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("蹦蹦炸弹伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.952, 1.0234, 1.0948, 1.19, 1.2614, 1.3328, 1.428, 1.5232, 1.6184, 1.7136, 1.8088, 1.904, 2.023, 2.142, 2.261,
      ],
    }),
    action("诡雷伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.328, 0.3526, 0.3772, 0.41, 0.4346, 0.4592, 0.492, 0.5248, 0.5576, 0.5904, 0.6232, 0.656, 0.697, 0.738, 0.779,
      ],
    }),
  ];
  burstSkill = [
    action("轰轰火花伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        0.4264, 0.45838, 0.49036, 0.533, 0.56498, 0.59696, 0.6396, 0.68224, 0.72488, 0.76752, 0.81016, 0.8528, 0.9061,
        0.9594, 1.0127,
      ],
    }),
  ];
  otherSkill = [
    action("4命·一触即发伤害", AttackType.Other, ElementType.Pyro, {
      atk: [5.55],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_PYRO_28P,
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
      effect: [{ type: BuffType.ReduceArmour, getValue: () => 23 }],
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
  ];
}

/** ![可莉](https://enka.network/ui/UI_AvatarIcon_Klee.png) */
export const Klee = new KleeData();
