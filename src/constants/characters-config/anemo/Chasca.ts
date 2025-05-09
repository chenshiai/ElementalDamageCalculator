import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P, S_80_MYSTERY_115 } from "../buffs";

class ChascaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }

  enkaId = 10000104;
  name = "恰斯卡";
  element = ElementType.Anemo;
  weapon = WeaponType.Bow;
  rarity = Rarity.Five;

  baseHP = 9797;
  baseATK = 347;
  baseDEF = 615;
  burstCharge = 60;

  icons = {
    avatarIcon: this.getEnkaUI("UI_AvatarIcon_Chasca"),
    constsIcon: this.getEnkaUIs([
      "UI_Talent_S_Chasca_01",
      "UI_Talent_S_Chasca_02",
      "UI_Talent_U_Chasca_01",
      "UI_Talent_S_Chasca_03",
      "UI_Talent_U_Chasca_02",
      "UI_Talent_S_Chasca_04",
    ]),
    gachaImage: this.getEnkaImg("UI_AvatarIcon_Chasca"),
  };
  talentNames = ["普通攻击·迷羽流击", "灵缰追影", "索魂命袭"];

  normalAttack = [
    this.action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.48, 0.519, 0.558, 0.614, 0.653, 0.698, 0.759, 0.821, 0.882, 0.949, 1.016],
    }),
    this.action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.446, 0.482, 0.518, 0.57, 0.607, 0.648, 0.705, 0.762, 0.819, 0.881, 0.944],
    }),
    this.action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.297, 0.321, 0.345, 0.38, 0.404, 0.432, 0.47, 0.508, 0.546, 0.587, 0.628],
    }),
    this.action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.255, 0.275, 0.296, 0.326, 0.346, 0.37, 0.403, 0.435, 0.468, 0.503, 0.539],
    }),
    this.action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    this.action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    this.action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    this.action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    this.action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ]
  elementSkill = [
    this.action("共鸣伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.6, 0.645, 0.69, 0.75, 0.795, 0.84, 0.9, 0.96, 1.02, 1.08, 1.114, 1.2, 1.275],
    }),
    this.action("多重瞄准点按伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765],
    }),
    this.action(
      "追影弹伤害",
      AttackType.Strong,
      ElementType.Anemo,
      {
        atk: [0.488, 0.525, 0.561, 0.61, 0.647, 0.683, 0.54, 0.781, 0.83, 0.878, 0.927, 0.976, 1.037],
      },
      "Chasca1"
    ),
    this.action(
      "焕光追影弹伤害·火",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54],
      },
      "Chasca"
    ),
    this.action(
      "焕光追影弹伤害·水",
      AttackType.Strong,
      ElementType.Hydro,
      {
        atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54],
      },
      "Chasca"
    ),
    this.action(
      "焕光追影弹伤害·冰",
      AttackType.Strong,
      ElementType.Cryo,
      {
        atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54],
      },
      "Chasca"
    ),
    this.action(
      "焕光追影弹伤害·雷",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54],
      },
      "Chasca"
    ),
    null,
    this.action("流焰追影弹伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [0.488, 0.525, 0.561, 0.61, 0.647, 0.683, 0.54, 0.781, 0.83, 0.878, 0.927, 0.976, 1.037].map(
        (i) => i * 1.5
      ),
    }),
    this.action("流焰追影弹伤害·火", AttackType.Strong, ElementType.Pyro, {
      atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54].map(
        (i) => i * 1.5
      ),
    }),
    this.action("流焰追影弹伤害·水", AttackType.Strong, ElementType.Hydro, {
      atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54].map(
        (i) => i * 1.5
      ),
    }),
    this.action("流焰追影弹伤害·冰", AttackType.Strong, ElementType.Cryo, {
      atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54].map(
        (i) => i * 1.5
      ),
    }),
    this.action("流焰追影弹伤害·雷", AttackType.Strong, ElementType.Electro, {
      atk: [1.666, 1.791, 1.916, 2.082, 2.207, 2.332, 2.499, 2.665, 2.832, 2.998, 3.165, 3.331, 3.54].map(
        (i) => i * 1.5
      ),
    }),
  ]
  burstSkill = [
    this.action("裂风索魂弹伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.88, 0.946, 1.012, 1.1, 1.166, 1.232, 1.32, 1.408, 1.496, 1.584, 1.672, 1.76, 1.87],
    }),
    this.action("索魂弹伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.034, 1.112, 1.189, 1.293, 1.37, 1.448, 1.551, 1.654, 1.758, 1.861, 1.965, 2.068, 2.197],
    }),
    this.action("溢光索魂弹伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [2.068, 2.223, 2.378, 2.585, 2.74, 2.895, 3.102, 3.309, 3.516, 3.722, 3.929, 4.136, 4.395],
    }),
    this.action("溢光索魂弹伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [2.068, 2.223, 2.378, 2.585, 2.74, 2.895, 3.102, 3.309, 3.516, 3.722, 3.929, 4.136, 4.395],
    }),
    this.action("溢光索魂弹伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [2.068, 2.223, 2.378, 2.585, 2.74, 2.895, 3.102, 3.309, 3.516, 3.722, 3.929, 4.136, 4.395],
    }),
    this.action("溢光索魂弹伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [2.068, 2.223, 2.378, 2.585, 2.74, 2.895, 3.102, 3.309, 3.516, 3.722, 3.929, 4.136, 4.395],
    }),
  ]
  otherSkill = [
    this.action("2/4命·范围伤害·火", AttackType.Strong, ElementType.Pyro, {
      atk: [4],
    }),
    this.action("2/4命·范围伤害·水", AttackType.Strong, ElementType.Hydro, {
      atk: [4],
    }),
    this.action("2/4命·范围伤害·冰", AttackType.Strong, ElementType.Cryo, {
      atk: [4],
    }),
    this.action("2/4命·范围伤害·雷", AttackType.Strong, ElementType.Electro, {
      atk: [4],
    }),
  ];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "子弹的戏法",
      describe:
        "若队伍中存在符合元素转化条件的元素类型的角色，则每种元素将为恰斯卡产生一层「焕影之灵」效果，使焕光追影弹造成的伤害提升15%/35%/65%，该效果持续至本次多重瞄准结束，至多叠加3层。",
      effect: [
        {
          type: BuffType.StrongPrcent,
          getValue: (_, s) => {
            return [0, 15, 35, 65][s];
          },
          special: "Chasca",
        },
      ],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "焕影之灵",
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·相决，斗争的荣光",
      describe:
        "恰斯卡进行多重瞄准所需的蓄力时间减少，且触发固有天赋「子弹的戏法」中的「附灵转化」后，恰斯卡将获得「命袭」状态，在接下来的3秒内，恰斯卡下一次施放元素战技灵缰追影中的多重瞄准时，会立即完成蓄力，并且本次多重瞄准中的追影弹和焕光追影弹的暴击伤害提升120%。每3秒至多获得一次「命袭」效果。",
      effect: [
        { type: BuffType.StrongCritcalHurt, getValue: () => 120, special: "Chasca" },
        { type: BuffType.StrongCritcalHurt, getValue: () => 120, special: "Chasca1" },
      ],
      condition: ({ constellation }) => constellation >= 6,
      enable: true,
    },
  ]
}

/**
 * ![恰斯卡](https://enka.network/ui/UI_AvatarIcon_Chasca.png)
 */
export const Chasca = new ChascaData();
