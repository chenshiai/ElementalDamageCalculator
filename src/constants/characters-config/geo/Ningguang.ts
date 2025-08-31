import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_GEO_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000027, "凝光")
@Weapon(WeaponType.Magic)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, [9787, 212, 573], 40, [10464, 266, 613])
@Icons("UI_AvatarIcon_Ningguang")
export class NingguangData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["千金掷", "璇玑屏", "天权崩玉"];
  normalAttack = [
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
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      atk: [2.3, 2.48, 2.65, 2.88, 3.05, 3.23, 3.46, 3.69, 3.92, 4.15, 4.38, 4.61, 4.9],
    }),
  ];
  burstSkill = [
    action("每颗宝石伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.87, 0.935, 1, 1.09, 1.15, 1.22, 1.3, 1.39, 1.48, 1.57, 1.65, 1.74, 1.85, 1.96],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_GEO_24P,
    {
      label: "储之千日，用之一刻",
      describe: "穿过璇玑屏的角色会获得12%岩元素伤害加成",
      effect: [{ type: BuffType.GeoPrcent, getValue: () => 12 }],
      enable: false,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![凝光](https://enka.network/ui/UI_AvatarIcon_Ningguang.png) */
export const Ningguang = new NingguangData();
