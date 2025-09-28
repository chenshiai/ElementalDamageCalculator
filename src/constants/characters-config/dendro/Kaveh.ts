import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000081, "卡维")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, [11962, 234, 751], 80, [12790, 293, 803])
@Icons("UI_AvatarIcon_Kaveh")
export class KavehData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["旋规设矩", "画则巧施", "繁绘隅穹"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.761857, 0.823868, 0.88588, 0.974468, 1.03648, 1.10735, 1.204797, 1.302244, 1.39969, 1.505996, 1.612302,
        1.718607, 1.824913, 1.931218, 2.037524,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.696385, 0.753068, 0.80975, 0.890725, 0.947407, 1.012188, 1.10126, 1.190333, 1.279405, 1.376575, 1.473745,
        1.570915, 1.668085, 1.765255, 1.862425,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.842611, 0.911195, 0.97978, 1.077758, 1.146343, 1.224725, 1.332501, 1.440277, 1.548052, 1.665626, 1.7832,
        1.900773, 2.018347, 2.13592, 2.253494,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.026883, 1.110467, 1.19405, 1.313455, 1.397039, 1.492563, 1.623908, 1.755254, 1.886599, 2.029885, 2.173171,
        2.316457, 2.459743, 2.603029, 2.746315,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.53148, 0.57474, 0.618, 0.6798, 0.72306, 0.7725, 0.84048, 0.90846, 0.97644, 1.0506, 1.12476, 1.19892, 1.27308,
        1.34724, 1.4214,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.96148, 1.03974, 1.118, 1.2298, 1.30806, 1.3975, 1.52048, 1.64346, 1.76644, 1.9006, 2.03476, 2.16892, 2.30308,
        2.43724, 2.5714,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [2.04, 2.193, 2.346, 2.55, 2.703, 2.856, 3.06, 3.264, 3.468, 3.672, 3.876, 4.08, 4.335, 4.59, 4.845],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [1.6, 1.72, 1.84, 2, 2.12, 2.24, 2.4, 2.56, 2.72, 2.88, 3.04, 3.2, 3.4, 3.6, 3.8],
    }),
  ];
  otherSkill = [
    action("6命·天园之光", AttackType.Other, ElementType.Dendro, {
      atk: [0.618],
    }),
    action("营造者的担当回复量", AttackType.Heal, ElementType.None, {
      em: [3],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "工艺家的奇想",
      describe: "在繁绘隅穹持续期间，卡维在普通攻击、重击或下落攻击命中敌人后，元素精通将提升25点，至多叠加4层",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => s * 25 }],
      stackable: true,
      stack: 4,
      limit: 4,
      enable: true,
    },
    {
      label: "元素爆发·繁绘隅穹",
      describe: "提高卡维的普通攻击、重击与下落攻击的攻击范围，并将攻击伤害转为无法被附魔覆盖的草元素伤害",
      effect: [{ type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Dendro] }],
      enable: false,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![卡维](https://enka.network/ui/UI_AvatarIcon_Kaveh.png) */
export const Kaveh = new KavehData();
