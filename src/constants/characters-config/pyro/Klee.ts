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
      atk: [0.722, 0.776, 0.83, 0.902, 0.956, 1.01, 1.08, 1.15, 1.23, 1.3, 1.37],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [0.624, 0.671, 0.718, 0.78, 0.827, 0.874, 0.936, 0.998, 1.06, 1.12, 1.19],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [0.899, 0.967, 1.03, 1.12, 1.19, 1.26, 1.35, 1.44, 1.53, 1.62, 1.71],
    }),
    action("重击", AttackType.Strong, ElementType.Pyro, {
      atk: [1.57, 1.69, 1.81, 1.97, 2.09, 2.2, 2.36, 2.52, 2.68, 2.83, 3],
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
  ];
  elementSkill = [
    action("蹦蹦炸弹伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.952, 1.02, 1.09, 1.19, 1.26, 1.33, 1.43, 1.52, 1.62, 1.71, 1.81, 1.9, 2.02],
    }),
    action("诡雷伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.328, 0.353, 0.377, 0.41, 0.435, 0.459, 0.492, 0.525, 0.558, 0.59, 0.623, 0.656, 0.697],
    }),
  ];
  burstSkill = [
    action("轰轰火花伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.426, 0.458, 0.49, 0.533, 0.565, 0.597, 0.64, 0.682, 0.725, 0.768, 0.81, 0.852, 0.906, 0.959],
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
