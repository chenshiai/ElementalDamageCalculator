import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { A_80_MYSTERY_96, Constellation_E_3, Constellation_Q_5 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000113, "伊法")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo, SecondElementType.Nightsoul)
@BaseData(Rarity.Four, [10081, 201, 605], 60, [10778, 223, 647])
@Icons("UI_AvatarIcon_Ifa")
export class IfaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["祛风妙仪", "空天疾护", "复合镇静域"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.536072, 0.576277, 0.616483, 0.67009, 0.710295, 0.750501, 0.804108, 0.857715, 0.911322, 0.96493, 1.018537,
        1.072144, 1.139153, 1.206162, 1.273171,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.474672, 0.510272, 0.545873, 0.59334, 0.62894, 0.664541, 0.712008, 0.759475, 0.806942, 0.85441, 0.901877,
        0.949344, 1.008678, 1.068012, 1.127346,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.747584, 0.803653, 0.859722, 0.93448, 0.990549, 1.046618, 1.121376, 1.196134, 1.270893, 1.345651, 1.42041,
        1.495168, 1.588616, 1.682064, 1.775512,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [
        1.4704, 1.58068, 1.69096, 1.838, 1.94828, 2.05856, 2.2056, 2.35264, 2.49968, 2.64672, 2.79376, 2.9408, 3.1246,
        3.3084, 3.4922,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("秘药弹伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        1.3336, 1.43362, 1.53364, 1.667, 1.76702, 1.86704, 2.0004, 2.13376, 2.26712, 2.40048, 2.53384, 2.6672, 2.8339,
        3.0006, 3.1673,
      ],
    }),
    action("秘药弹命中治疗量", AttackType.Heal, ElementType.None, {
      em: [
        0.2016, 0.21672, 0.23184, 0.252, 0.26712, 0.28224, 0.3024, 0.32256, 0.34272, 0.36288, 0.38304, 0.4032, 0.4284,
        0.4536, 0.4788,
      ],
      fixed: [
        48.14847, 52.96399, 58.1808, 63.7989, 69.8183, 76.23898, 83.06097, 90.28424, 97.90881, 105.93467, 114.36182,
        123.19027, 132.42001, 142.05104, 152.08337,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        5.0848, 5.46616, 5.84752, 6.356, 6.73736, 7.11872, 7.6272, 8.13568, 8.64416, 9.15264, 9.66112, 10.1696, 10.8052,
        11.4408, 12.0764,
      ],
    }),
    action("镇定标记伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        1.0896, 1.17132, 1.25304, 1.362, 1.44372, 1.52544, 1.6344, 1.74336, 1.85232, 1.96128, 2.07024, 2.1792, 2.3154,
        2.4516, 2.5878,
      ],
    }),
  ];
  otherSkill = [
    action("6命·秘药弹伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [1.2],
    }),
  ];
  buffs = [
    ...A_80_MYSTERY_96,
    {
      label: "互助救援协议",
      describe: "队伍中的附近的角色触发「夜魂迸发」时，伊法的元素精通提升80点。",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
      enable: true,
      target: BuffTarget.Self,
    },
    {
      label: "场中医者视野",
      describe:
        "伊法出于夜魂加持状态下时，将基于队伍中所有角色当前夜魂值的总和，每1点夜魂值都将使伊法获得1点「救援要义」。救援要义可以提升队伍中附近的角色触发的月感电反应造成的伤害。每点救援要义提升0.2%。",
      effect: [{ type: BuffType.MoonElectroPrcent, getValue: (_, s) => 0.2 * s }],
      enable: true,
      target: BuffTarget.All,
      stackable: true,
      stackText: "救援要义",
      limit: 200,
      stack: 80,
      shareable: true,
    },
    Constellation_E_3,
    {
      label: "4命·糜烂应体的置换",
      describe: "施放元素爆发复合镇静域后，伊法的元素精通提升100点。",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 100 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
      target: BuffTarget.Self,
    },
    Constellation_Q_5,
  ];
}
/**
 * ![伊法](https://enka.network/ui/UI_AvatarIcon_Ifa.png)
 */
export const Ifa = new IfaData();
