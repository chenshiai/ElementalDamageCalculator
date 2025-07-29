import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_PYRO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000048, "烟绯")
@Weapon(WeaponType.Magic)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, 9352, 240, 587, 80)
@Icons("UI_AvatarIcon_Feiyan")
export class FeiyanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["火漆制印", "丹书立约", "凭此结契"];
  normalAttack = [
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
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.696, 1.8232, 1.9504, 2.12, 2.2472, 2.3744, 2.544, 2.7136, 2.8832, 3.0528, 3.2224, 3.392, 3.604],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.824, 1.9608, 2.0976, 2.28, 2.4168, 2.5536, 2.736, 2.9184, 3.1008, 3.2832, 3.4656, 3.648, 3.876, 4.104],
    }),
  ];
  otherSkill = [
    action("法兽灼眼", AttackType.Strong, ElementType.Pyro, {
      atk: [0.8],
    }),
    action("4命·丹书金铁券护盾", AttackType.Shield, ElementType.None, {
      hp: [0.45],
    }),
  ];
  buffs: IBuffBase[] = [
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
  ];
}

/** ![烟绯](https://enka.network/ui/UI_AvatarIcon_Feiyan.png) */
export const Yanfei = new FeiyanData();
