import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { A_80_MYSTERY_96, Constellation_E_3, Constellation_Q_5 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000113, "伊法")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, 10081, 201, 605, 60)
@Icons("UI_AvatarIcon_Ifa")
class IfaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["祛风妙仪", "空天疾护", "复合镇静域"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.536, 0.576, 0.616, 0.67, 0.71, 0.751, 0.804, 0.858, 0.911, 0.965, 1.018],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.475, 0.51, 0.546, 0.593, 0.629, 0.665, 0.712, 0.759, 0.807, 0.854, 0.902],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.748, 0.804, 0.86, 0.934, 0.991, 1.047, 1.121, 1.196, 1.271, 1.346, 1.42],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [1.47, 1.581, 1.691, 1.838, 1.948, 2.059, 2.206, 2.353, 2.5, 2.647, 2.794],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("秘药弹伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [1.334, 1.434, 1.534, 1.667, 1.767, 1.867, 2, 2.134, 2.267, 2.4, 2.534, 2.667, 2.834],
    }),
    action("秘药弹命中治疗量", AttackType.Heal, ElementType.None, {
      em: [0.202, 0.217, 0.232, 0.252, 0.267, 0.282, 0.302, 0.323, 0.343, 0.363, 0.383, 0.403, 0.428],
      fixed: [48.1, 53, 58.2, 63.8, 69.8, 76.2, 83.1, 90.3, 97.9, 105.9, 114.4, 123.2, 132.4],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [5.085, 5.466, 5.848, 6.356, 6.737, 7.119, 7.627, 8.136, 8.644, 9.153, 9.661, 10.17, 10.805],
    }),
    action("镇定标记伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.09, 1.171, 1.253, 1.362, 1.444, 1.525, 1.634, 1.743, 1.852, 1.961, 2.07, 2.179, 2.315],
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
