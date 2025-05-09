import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import {
  Constellation_E_5,
  Constellation_Q_3,
  S_80_HP_28P,
} from "../buffs";

class BaizhuerData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  enkaId = 10000082;
  name = "白术";
  element = ElementType.Dendro;
  weapon = WeaponType.Magic;
  rarity = Rarity.Five;
  baseHP = 13348;
  baseATK = 193;
  baseDEF = 500;
  burstCharge = 80;

  icons = {
    avatarIcon: this.getEnkaUI("UI_AvatarIcon_Baizhuer"),
    constsIcon: this.getEnkaUIs([
      "UI_Talent_S_Baizhuer_01",
      "UI_Talent_S_Baizhuer_02",
      "UI_Talent_U_Baizhuer_01",
      "UI_Talent_S_Baizhuer_03",
      "UI_Talent_U_Baizhuer_02",
      "UI_Talent_S_Baizhuer_04",
    ]),
    gachaImage: this.getEnkaImg("UI_AvatarIcon_Baizhuer"),
  };
  talentNames = ["普通攻击·金匮针解", "太素诊要", "愈气全形论"];

  normalAttack = [
    this.action("一段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [0.374, 0.402, 0.43, 0.467, 0.495, 0.523, 0.561, 0.598, 0.635, 0.673, 0.71],
    }),
    this.action("二段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [0.364, 0.392, 0.419, 0.455, 0.483, 0.51, 0.546, 0.583, 0.619, 0.656, 0.692],
    }),
    this.action("三段伤害·1", AttackType.Normal, ElementType.Dendro, {
      atk: [0.225, 0.242, 0.259, 0.282, 0.299, 0.316, 0.338, 0.361, 0.383, 0.406, 0.428],
    }),
    this.action("三段伤害·2", AttackType.Normal, ElementType.Dendro, {
      atk: [0.225, 0.242, 0.259, 0.282, 0.299, 0.316, 0.338, 0.361, 0.383, 0.406, 0.428],
    }),
    this.action("四段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [0.541, 0.582, 0.623, 0.677, 0.717, 0.758, 0.812, 0.866, 0.92, 0.975, 1.029],
    }),
    this.action("重击", AttackType.Strong, ElementType.Dendro, {
      atk: [1.21, 1.301, 1.392, 1.513, 1.604, 1.695, 1.816, 1.937, 2.058, 2.179, 2.3],
    }),
    this.action("下坠期间伤害", AttackType.FallPeriod, ElementType.Dendro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    this.action("低空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    this.action("高空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    this.action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [0.792, 0.851, 0.911, 0.99, 1.049, 1.109, 1.188, 1.267, 1.346, 1.426, 1.505, 1.584, 1.683],
    }),
    this.action("治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.08, 0.086, 0.092, 0.1, 0.106, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16, 0.17],
      fixed: [770, 847, 931, 1021, 1117, 1220, 1329, 1445, 1567, 1695, 1830, 1971, 2119],
    }),
    this.action("2命·游丝徵灵·切治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.08, 0.086, 0.092, 0.1, 0.106, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16, 0.17].map((i) => i * 0.2),
      fixed: [770, 847, 931, 1021, 1117, 1220, 1329, 1445, 1567, 1695, 1830, 1971, 2119].map((i) => i * 0.2),
    }),
  ];
  burstSkill = [
    this.action("灵气脉技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [0.971, 1.043, 1.116, 1.213, 1.286, 1.359, 1.456, 1.553, 1.65, 1.747, 1.844, 1.941, 2.063],
    }),
    this.action("无郤气护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.008, 0.0086, 0.0092, 0.01, 0.0106, 0.0112, 0.012, 0.0128, 0.0136, 0.0144, 0.0152, 0.016, 0.017],
      fixed: [77, 85, 93, 102, 112, 122, 133, 144, 157, 170, 183, 197, 212],
    }),
    this.action("无郤气护盾治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.052, 0.0559, 0.0598, 0.065, 0.0689, 0.0728, 0.078, 0.0832, 0.0884, 0.0936, 0.0988, 0.104, 0.1105],
      fixed: [501, 551, 605, 664, 726, 793, 864, 939, 1018, 1102, 1189, 1281, 1377],
    }),
  ];
  otherSkill = [
    this.action("味草之滋", AttackType.Heal, ElementType.None, {
      hp: [0.025],
    }),
    this.action("2命·游丝徵灵·切伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [2.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_HP_28P,
    {
      label: "五运终天·伤害",
      describe: "当前场上角色的生命值高于或等于50%时，白术获得25%草元素伤害加成",
      effect: [{ type: BuffType.DendroPrcent, getValue: () => 25 }],
      enable: true,
    },
    {
      label: "五运终天·治疗",
      describe: "当前场上角色的生命值低于50%时，白术获得20%治疗量加成",
      effect: [{ type: BuffType.HealAdd, getValue: () => 20 }],
      enable: false,
    },
    {
      label: "在地为化",
      describe:
        "受到无郤气护盾治疗的角色，将获得「木运之岁」效果：基于白术生命值上限不超过50000点的部分，每1000点将使该角色触发的超激化、蔓激化反应带来的伤害提升提高0.8%",
      effect: [
        {
          type: BuffType.CatalyzeRate,
          getValue: (data) => Math.min(40, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 0.8),
          actionOn: ActionOn.Indirect,
        },
      ],
      shareable: true,
      target: BuffTarget.All,
      enable: false,
    },
    Constellation_Q_3,
    {
      label: "4命·法古观冥",
      describe: "施放愈气全形论之后的15秒内，队伍中附近的所有角色元素精通提升80点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·法古观冥",
      describe: "愈气全形论的灵气脉造成的伤害提高，提升值相当于白术生命值上限的8%",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.08,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![白术](https://enka.network/ui/UI_AvatarIcon_Baizhuer.png) */
export const Baizhuer = new BaizhuerData();
