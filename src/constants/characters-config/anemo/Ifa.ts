import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import {
  A_80_MYSTERY_96,
  Constellation_E_3,
  Constellation_Q_5,
} from "../buffs";

class IfaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  enkaId = 10000113;
  name = "伊法";
  element = ElementType.Anemo;
  weapon = WeaponType.Magic;
  rarity = Rarity.Four;
  baseHP = 10081;
  baseATK = 201;
  baseDEF = 605;
  burstCharge = 60;

  icons = {
    avatarIcon: this.getEnkaUI("UI_AvatarIcon_Ifa"),
    constsIcon: this.getEnkaUIs([
      "UI_Talent_S_Ifa_01",
      "UI_Talent_S_Ifa_02",
      "UI_Talent_U_Ifa_01",
      "UI_Talent_S_Ifa_03",
      "UI_Talent_U_Ifa_02",
      "UI_Talent_S_Ifa_04",
    ]),
    gachaImage: this.getEnkaImg("UI_AvatarIcon_Ifa"),
  };
  talentNames = ["普通攻击·祛风妙仪", "空天疾护", "复合镇静域"];

  normalAttack = [
    this.action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.536, 0.576, 0.616, 0.67, 0.71, 0.751, 0.804, 0.858, 0.911, 0.965, 1.018],
    }),
    this.action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.475, 0.51, 0.546, 0.593, 0.629, 0.665, 0.712, 0.759, 0.807, 0.854, 0.902],
    }),
    this.action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.748, 0.804, 0.86, 0.934, 0.991, 1.047, 1.121, 1.196, 1.271, 1.346, 1.42],
    }),
    this.action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [1.47, 1.581, 1.691, 1.838, 1.948, 2.059, 2.206, 2.353, 2.5, 2.647, 2.794],
    }),
    this.action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203],
    }),
    this.action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    this.action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    this.action("秘药弹伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [1.334, 1.434, 1.534, 1.667, 1.767, 1.867, 2, 2.134, 2.267, 2.4, 2.534, 2.667, 2.834],
    }),
    this.action("秘药弹命中治疗量", AttackType.Heal, ElementType.None, {
      em: [0.202, 0.217, 0.232, 0.252, 0.267, 0.282, 0.302, 0.323, 0.343, 0.363, 0.383, 0.403, 0.428],
      fixed: [48.1, 53, 58.2, 63.8, 69.8, 76.2, 83.1, 90.3, 97.9, 105.9, 114.4, 123.2, 132.4],
    }),
  ];
  burstSkill = [
    this.action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [5.085, 5.466, 5.848, 6.356, 6.737, 7.119, 7.627, 8.136, 8.644, 9.153, 9.661, 10.17, 10.805],
    }),
    this.action("镇定标记伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.09, 1.171, 1.253, 1.362, 1.444, 1.525, 1.634, 1.743, 1.852, 1.961, 2.07, 2.179, 2.315],
    }),
  ];
  otherSkill = [
    this.action("6命·秘药弹伤害", AttackType.Normal, ElementType.Anemo, {
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
    Constellation_E_3,
    {
      label: "6命·糜烂应体的置换",
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
