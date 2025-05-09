import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, EnchantingType, Rarity, WeaponType } from "@/types/enum";
import {
  Constellation_A_3,
  Constellation_E_3,
  Constellation_Q_5,
  S_80_CRITAL_19P,
  S_80_CRITALHUNT_38P,
} from "../buffs";

class ChioriData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  enkaId = 10000094;
  name = "千织";
  element = ElementType.Geo;
  weapon = WeaponType.Sword;
  rarity = Rarity.Five;
  baseHP = 11439;
  baseATK = 323;
  baseDEF = 953;
  burstCharge = 50;

  icons = {
    avatarIcon: this.getEnkaUI("UI_AvatarIcon_Chiori"),
    constsIcon: this.getEnkaUIs([
      "UI_Talent_S_Chiori_01",
      "UI_Talent_S_Chiori_02",
      "UI_Talent_U_Chiori_01",
      "UI_Talent_S_Chiori_03",
      "UI_Talent_U_Chiori_02",
      "UI_Talent_S_Chiori_04",
    ]),
    gachaImage: this.getEnkaImg("UI_AvatarIcon_Chiori"),
  };
  talentNames = ["普通攻击·心织刀流", "羽袖一触", "二刀之形·比翼"];

  normalAttack = [
    this.action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.494, 0.534, 0.575, 0.632, 0.672, 0.718, 0.781, 0.845, 0.908, 0.977, 1.046],
    }),
    this.action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.468, 0.506, 0.545, 0.599, 0.637, 0.681, 0.741, 0.801, 0.86, 0.926, 0.991],
    }),
    this.action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.304, 0.329, 0.354, 0.389, 0.414, 0.442, 0.481, 0.52, 0.559, 0.601, 0.644],
    }),
    this.action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.304, 0.329, 0.354, 0.389, 0.414, 0.442, 0.481, 0.52, 0.559, 0.601, 0.644],
    }),
    this.action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.751, 0.812, 0.874, 0.961, 1.022, 1.092, 1.188, 1.284, 1.38, 1.485, 1.59],
    }),
    this.action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.543, 0.587, 0.631, 0.695, 0.739, 0.789, 0.859, 0.928, 0.998, 1.074, 1.149],
    }),
    this.action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.543, 0.587, 0.631, 0.695, 0.739, 0.789, 0.859, 0.928, 0.998, 1.074, 1.149],
    }),
    this.action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    this.action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    this.action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    this.action("袖伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.82, 0.88, 0.94, 1.03, 1.09, 1.15, 1.23, 1.31, 1.4, 1.48, 1.56, 1.64, 1.74],
      def: [1.03, 1.1, 1.18, 1.28, 1.36, 1.44, 1.54, 1.64, 1.74, 1.85, 1.95, 2.05, 2.18],
    }),
    this.action("2命·绢伤害", AttackType.Skill, ElementType.Geo, {
      atk: [0.82, 0.88, 0.94, 1.03, 1.09, 1.15, 1.23, 1.31, 1.4, 1.48, 1.56, 1.64, 1.74].map((i) => i * 1.7),
      def: [1.03, 1.1, 1.18, 1.28, 1.36, 1.44, 1.54, 1.64, 1.74, 1.85, 1.95, 2.05, 2.18].map((i) => i * 1.7),
    }),
    this.action("上挑攻击伤害", AttackType.Skill, ElementType.Geo, {
      atk: [1.49, 1.6, 1.72, 1.87, 1.98, 2.09, 2.24, 2.39, 2.54, 2.69, 2.84, 2.99, 3.17],
      def: [1.87, 2.01, 2.15, 2.33, 2.47, 2.61, 2.8, 2.99, 3.17, 3.36, 3.55, 3.73, 3.97],
    }),
  ];
  burstSkill = [
    this.action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [2.56, 2.76, 2.95, 3.2, 3.4, 3.59, 3.84, 4.1, 4.36, 4.61, 4.87, 5.13, 5.45],
      def: [3.2, 3.44, 3.68, 4.01, 4.25, 4.49, 4.81, 5.13, 5.45, 5.77, 6.09, 6.41, 6.81],
    }),
  ];
  otherSkill = [];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "量体裁衣",
      describe: "施放羽袖一触的上挑攻击后点按普通攻击则触发「裁锦」，千织获得岩元素附魔",
      effect: [{ type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Geo] }],
      enable: false,
    },
    {
      label: "锦上添花",
      describe: "队伍中附近的角色创造岩元素创造物时，千织获得20%岩元素伤害加成",
      effect: [{ type: BuffType.GeoPrcent, getValue: () => 20 }],
      enable: false,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·万理一空",
      describe: "千织自己的普通攻击造成的伤害提升，提升值相当于千织自己的防御力的235%",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 2.35,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![千织](https://enka.network/ui/UI_AvatarIcon_Chiori.png) */
export const Chiori = new ChioriData();
