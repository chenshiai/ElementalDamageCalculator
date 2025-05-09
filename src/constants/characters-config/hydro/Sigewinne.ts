import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_HP_28P } from "../buffs";

class SigewinneData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  enkaId = 10000099;
  name = "希格雯";
  element = ElementType.Hydro;
  weapon = WeaponType.Bow;
  rarity = Rarity.Five;
  baseHP = 13348;
  baseATK = 193;
  baseDEF = 500;
  burstCharge = 70;

  icons = {
    avatarIcon: this.getEnkaUI("UI_AvatarIcon_Sigewinne"),
    constsIcon: this.getEnkaUIs([
      "UI_Talent_S_Sigewinne_01",
      "UI_Talent_S_Sigewinne_02",
      "UI_Talent_U_Sigewinne_01",
      "UI_Talent_S_Sigewinne_03",
      "UI_Talent_U_Sigewinne_02",
      "UI_Talent_S_Sigewinne_04",
    ]),
    gachaImage: this.getEnkaImg("UI_AvatarIcon_Sigewinne"),
  };
  talentNames = ["普通攻击·靶向治疗", "弹跳水疗法", "过饱和心意注射"];

  normalAttack = [
    this.action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.526, 0.569, 0.612, 0.673, 0.716, 0.765, 0.832, 0.899, 0.967, 1.04, 1.114],
    }),
    this.action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.511, 0.552, 0.594, 0.653, 0.695, 0.742, 0.808, 0.873, 0.938, 1.01, 1.081],
    }),
    this.action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.783, 0.847, 0.91, 1.001, 1.065, 1.138, 1.238, 1.338, 1.438, 1.548, 1.657],
    }),
    this.action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    this.action("满蓄力瞄准射击", AttackType.Strong, ElementType.Hydro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    this.action("小小关心气泡伤害", AttackType.Strong, ElementType.Hydro, {
      atk: [0.248, 0.267, 0.285, 0.31, 0.329, 0.347, 0.372, 0.397, 0.422, 0.446, 0.471],
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
  ];
  elementSkill = [
    this.action("激愈水球伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.0228, 0.0245, 0.0262, 0.0285, 0.0302, 0.0319, 0.0342, 0.0365, 0.0388, 0.041, 0.0433, 0.0456, 0.0485],
    }),
    this.action("流涌之刃伤害", AttackType.Other, ElementType.Hydro, {
      hp: [0.0068, 0.0074, 0.0079, 0.0086, 0.0091, 0.0096, 0.0103, 0.0109, 0.0116, 0.0123, 0.013, 0.0137, 0.0145],
    }),
    this.action("激愈水球治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.028, 0.0301, 0.0322, 0.035, 0.0371, 0.0392, 0.042, 0.0448, 0.0476, 0.0504, 0.0532, 0.056, 0.0595],
      fixed: [270, 297, 326, 357, 391, 427, 465, 506, 548, 593, 640, 690, 742],
    }),
    this.action("弹跳结束治疗量", AttackType.Heal, ElementType.None, {
      hp: new Array(13).fill(0.5),
    }),
  ];
  burstSkill = [
    this.action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.118, 0.127, 0.135, 0.147, 0.156, 0.165, 0.177, 0.188, 0.2, 0.212, 0.224, 0.235, 0.25],
    }),
  ];
  otherSkill = [
    this.action("2命·护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.3],
    }),
  ];
  buffs = [
    ...S_80_HP_28P,
    {
      label: "应有适当的休憩",
      describe:
        "施放弹跳水疗法时，希格雯将为自己施加持续18秒的「半强制静养」效果：持续期间，希格雯获得8%水元素伤害加成",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 8 }],
      enable: true,
    },
    {
      label: "应有适当的休憩",
      describe:
        "除希格雯外附近队伍中处于后台的角色的元素战技造成伤害时，将消耗1层静养计数，提升此次元素战技造成的伤害值：希格雯的生命值上限超过30000的部分，每1000点生命值上限将提升80点伤害，通过这种方式，至多使本次元素战技造成的伤害提升2800点；解锁1命后效果提升25%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) =>
            data.constellation >= 1
              ? Math.min(3500, (Math.max(0, data.baseHP + data.extraHP + data.extraHP_NT - 30000) / 1000) * 100)
              : Math.min(2800, (Math.max(0, data.baseHP + data.extraHP + data.extraHP_NT - 30000) / 1000) * 80),
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "2命·「最仁慈的精灵，可否化解仇敌」",
      describe: "弹跳水疗法抛出的激愈水球或过饱和心意注射命中敌人后，该敌人的水元素抗性降低35%",
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -35 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·「最光辉的精灵，可否为我祷告」",
      describe:
        "希格雯进行治疗时，将基于生命值上限，提升自己的过饱和心意注射的暴击率和暴击伤害：每1000点生命值上限都将提升0.4%暴击率与2.2%暴击伤害。至多通过这种方式提升20%暴击率与110%暴击伤害%",
      effect: [
        {
          type: BuffType.BurstCritcal,
          getValue: (data) => Math.min(20, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 0.4),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstCritcalHurt,
          getValue: (data) => Math.min(110, ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 2.2),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![希格雯](https://enka.network/ui/UI_AvatarIcon_Sigewinne.png) */
export const Sigewinne = new SigewinneData();
