import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_Q_5, Constellation_E_3, S_80_HYDRO_28P } from "../buffs";

@EnKaId(10000140, "沃雅妮莎")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro, SecondElementType.Start)
@BaseData(Rarity.Five, [14818, 108, 484], 60, [15871, 132, 519])
@Icons("UI_AvatarIcon_Vodyanitsa")
export class VodyanitsaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["水色咏叹", "宣叙·晨声纷流", "终奏·伴尔沉沦"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.4338, 0.4664, 0.4989, 0.5423, 0.5748, 0.6074, 0.6508, 0.6942, 0.7375, 0.7809, 0.8243, 0.8677, 0.9219, 0.9762,
        1.0304,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.4023, 0.4325, 0.4627, 0.5029, 0.5331, 0.5632, 0.6035, 0.6437, 0.6839, 0.7242, 0.7644, 0.8046, 0.8549, 0.9052,
        0.9555,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.493, 0.53, 0.567, 0.6163, 0.6532, 0.6902, 0.7395, 0.7888, 0.8381, 0.8874, 0.9367, 0.986, 1.0477, 1.1093,
        1.1709,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.6556, 0.7048, 0.754, 0.8195, 0.8687, 0.9179, 0.9834, 1.049, 1.1146, 1.1801, 1.2457, 1.3113, 1.3932, 1.4752,
        1.5571,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.2376, 1.3304, 1.4232, 1.547, 1.6398, 1.7326, 1.8564, 1.9802, 2.1039, 2.2277, 2.3514, 2.4752, 2.6299, 2.7846,
        2.9393,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.0327, 0.0352, 0.0376, 0.0409, 0.0434, 0.0458, 0.0491, 0.0524, 0.0556, 0.0589, 0.0622, 0.0654, 0.0695, 0.0736,
        0.0777,
      ],
    }),
    action("唤春角笛伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.0327, 0.0352, 0.0376, 0.0409, 0.0434, 0.0458, 0.0491, 0.0524, 0.0556, 0.0589, 0.0622, 0.0654, 0.0695, 0.0736,
        0.0777,
      ],
    }),
    action("遥久之歌治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.028, 0.0301, 0.0322, 0.035, 0.0371, 0.0392, 0.042, 0.0448, 0.0476, 0.0504, 0.0532, 0.056, 0.0595, 0.063,
        0.0665,
      ],
      fixed: [270, 297, 326, 357, 391, 427, 465, 506, 548, 593, 640, 690, 742, 795, 852],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.4568, 0.491, 0.5253, 0.571, 0.6052, 0.6395, 0.6852, 0.7308, 0.7765, 0.8222, 0.8679, 0.9135, 0.9706, 1.0277,
        1.0848,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_HYDRO_28P,
    {
      label: "遥久之歌",
      describe: "创造或引爆流荡风旋时，还会使附近敌人的风元素抗性降低35%",
      effect: [
        {
          type: BuffType.EnemyHydroResistance,
          getValue: (data) => {
            let a = [-16.5, -18, -19.5, -21, -22.5, -24, -25.5, -27, -28.5, -30, -31.8, -33.6, -35.4, -37.2, -39];
            return a[data.skillLevel + data.skillLevelAdd - 1];
          },
        },
        {
          type: BuffType.EnemyCryoResistance,
          getValue: (data) => {
            let a = [-16.5, -18, -19.5, -21, -22.5, -24, -25.5, -27, -28.5, -30, -31.8, -33.6, -35.4, -37.2, -39];
            return a[data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "元素爆发伤害提升",
      describe: "处于遥久之歌状态下时，造成的伤害还会进一步提升",
      effect: [
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => {
            let a = [48, 51.6, 55.2, 60, 63.6, 67.2, 72, 76.8, 81.6, 86.4, 91.2, 96, 102, 108, 114];
            return a[data.burstLevel + data.burstLevelAdd - 1];
          },
        },
      ],
      enable: true,
    },
    {
      label: "最后的塑诗者",
      describe: "创造或引爆流荡风旋时，还会使附近敌人的风元素抗性降低35%",
      effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -35 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "十二弦的泪歌",
      describe: `施放元素战技宣叙·晨声纷流时，沃雅妮莎还会获得25层「领唱」与10层「重唱」</br>
      基于沃雅妮莎生命值上限超过40000的部分，每1000点生命值上限都会使上述效果中的星扩散反应伤害提升260点，水元素伤害与冰元素伤害提升140点；通过这种方式，至多使星扩散反应伤害提升6500点，水元素伤害与冰元素伤害提升3500点`,
      effect: [
        {
          type: BuffType.HydroFixed,
          getValue: (data) => {
            return Math.min(3500, (Math.max(0, data.baseHP + data.extraHP + data.extraHP_NT - 40000) / 1000) * 140);
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.CryoFixed,
          getValue: (data) => {
            return Math.min(3500, (Math.max(0, data.baseHP + data.extraHP + data.extraHP_NT - 40000) / 1000) * 140);
          },
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StellarSwirlFixed,
          getValue: (data) => {
            return Math.min(6500, (Math.max(0, data.baseHP + data.extraHP + data.extraHP_NT - 40000) / 1000) * 260);
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·聚光灯下的水华",
      describe:
        "沃雅妮莎触发遥久之歌的治疗效果时，还会使队伍中附近的所有角色攻击力提升，提升值相当于沃雅妮莎生命值上限的0.8%",
      effect: [{ type: BuffType.ATKFixed, getValue: (data) => (data.baseHP + data.extraHP) * 0.008 }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·穿彻风雪的余响",
      describe:
        "使队伍中自己的当前场上角色造成的水元素伤害与冰元素伤害的暴击伤害提升50%；星扩散反应伤害的暴击伤害提升60%",
      effect: [
        { type: BuffType.HydroCritcalHurt, getValue: () => 50 },
        { type: BuffType.CryoCritcalHurt, getValue: () => 50 },
        { type: BuffType.StellarSwirlCritcalHurt, getValue: () => 60 },
      ],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·柔波摇漾的低诉",
      describe: "沃雅妮莎的生命值上限提升20%，持续6秒，该效果至多叠加3层",
      effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => 20 * s }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·永不落幕的盛歌",
      describe:
        "遥久之歌效果持续期间，队伍中附近的角色造成的星扩散反应伤害擢升25%，造成的水元素伤害与冰元素伤害提升60%",
      effect: [
        { type: BuffType.HydroPrcent, getValue: () => 60 },
        { type: BuffType.CryoPrcent, getValue: () => 60 },
        { type: BuffType.StellarSwirlPromote, getValue: () => 25 },
      ],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![沃雅妮莎](https://enka.network/ui/UI_AvatarIcon_Vodyanitsa.png) */
export const Vodyanitsa = new VodyanitsaData();
