import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_PYRO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000048, "烟绯")
@Weapon(WeaponType.Magic)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [9352, 240, 587], 80, [9999, 301, 628])
@Icons("UI_AvatarIcon_Feiyan")
export class FeiyanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["火漆制印", "丹书立约", "凭此结契"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.583416, 0.627172, 0.670928, 0.72927, 0.773026, 0.816782, 0.875124, 0.933466, 0.991807, 1.050149, 1.10849,
        1.166832, 1.239759, 1.312686, 1.385613,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.521256, 0.56035, 0.599444, 0.65157, 0.690664, 0.729758, 0.781884, 0.83401, 0.886135, 0.938261, 0.990386,
        1.042512, 1.107669, 1.172826, 1.237983,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Pyro, {
      atk: [
        0.760128, 0.817138, 0.874147, 0.95016, 1.00717, 1.064179, 1.140192, 1.216205, 1.292218, 1.36823, 1.444243,
        1.520256, 1.615272, 1.710288, 1.805304,
      ],
    }),
    action("重击·0层", AttackType.Strong, ElementType.Pyro, {
      atk: [
        0.9823, 1.0411, 1.0999, 1.1764, 1.2352, 1.294, 1.3705, 1.447, 1.5234, 1.5999, 1.6764, 1.752836, 1.829302,
        1.905768, 1.982234,
      ],
    }),
    action("重击·1层", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.1556, 1.2248, 1.294, 1.384, 1.4532, 1.5224, 1.6124, 1.7023, 1.7923, 1.8822, 1.9722, 2.0621, 2.1521, 2.242,
        2.332,
      ],
    }),
    action("重击·2层", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.329, 1.4086, 1.4881, 1.5916, 1.6712, 1.7508, 1.8542, 1.9577, 2.0611, 2.1646, 2.268, 2.3714, 2.4749, 2.5784,
        2.681846,
      ],
    }),
    action("重击·3层", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.5023, 1.5923, 1.6823, 1.7992, 1.8892, 1.9791, 2.0961, 2.213, 2.33, 2.4469, 2.5639, 2.680808, 2.797756,
        2.914704, 3.031652,
      ],
    }),
    action("重击·4层", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.6757, 1.776, 1.8764, 2.0068, 2.1071, 2.2075, 2.3379, 2.4684, 2.5988, 2.7292, 2.8597, 2.990132, 3.120574,
        3.251016, 3.381458,
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
    action("技能伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.696, 1.8232, 1.9504, 2.12, 2.2472, 2.3744, 2.544, 2.7136, 2.8832, 3.0528, 3.2224, 3.392, 3.604, 3.816, 4.028,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        1.824, 1.9608, 2.0976, 2.28, 2.4168, 2.5536, 2.736, 2.9184, 3.1008, 3.2832, 3.4656, 3.648, 3.876, 4.104, 4.332,
      ],
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
