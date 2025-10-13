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
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000122, "奈芙尔")
@Weapon(WeaponType.Bow)
@Element(ElementType.Hydro, SecondElementType.Moon)
@BaseData(Rarity.Five, [12704, 344, 799], 60, [13607, 422, 856])
@Icons("UI_AvatarIcon_Nefer")
class NeferData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["游虵吐信", "弈术·千夜一舞", "圣约·真眸幻戏"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.380712, 0.409265, 0.437819, 0.47589, 0.504443, 0.532997, 0.571068, 0.609139, 0.64721, 0.685282, 0.723353,
        0.761424, 0.809013, 0.856602, 0.904191,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.37564, 0.403813, 0.431986, 0.46955, 0.497723, 0.525896, 0.56346, 0.601024, 0.638588, 0.676152, 0.713716,
        0.75128, 0.798235, 0.84519, 0.892145,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.2524, 0.27133, 0.29026, 0.3155, 0.33443, 0.35336, 0.3786, 0.40384, 0.42908, 0.45432, 0.47956, 0.5048, 0.53635,
        0.5679, 0.59945,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.609944, 0.65569, 0.701436, 0.76243, 0.808176, 0.853922, 0.914916, 0.97591, 1.036905, 1.097899, 1.158894,
        1.219888, 1.296131, 1.372374, 1.448617,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Dendro, {
      atk: [
        1.3088, 1.40696, 1.50512, 1.636, 1.73416, 1.83232, 1.9632, 2.09408, 2.22496, 2.35584, 2.48672, 2.6176, 2.7812,
        2.9448, 3.1084,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Dendro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        0.76384, 0.821128, 0.878416, 0.9548, 1.012088, 1.069376, 1.14576, 1.222144, 1.298528, 1.374912, 1.451296,
        1.52768, 1.62316, 1.71864, 1.81412,
      ],
      em: [
        1.52768, 1.642256, 1.756832, 1.9096, 2.024176, 2.138752, 2.29152, 2.444288, 2.597056, 2.749824, 2.902592,
        3.05536, 3.24632, 3.43728, 3.62824,
      ],
    }),
    action("幻戏自身一段伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [
        0.2464, 0.26488, 0.28336, 0.308, 0.32648, 0.34496, 0.3696, 0.39424, 0.41888, 0.44352, 0.46816, 0.4928, 0.5236,
        0.5544, 0.5852,
      ],
      em: [
        0.4928, 0.52976, 0.56672, 0.616, 0.65296, 0.68992, 0.7392, 0.78848, 0.83776, 0.88704, 0.93632, 0.9856, 1.0472,
        1.1088, 1.1704,
      ],
    }),
    action("幻戏自身二段伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [
        0.32032, 0.344344, 0.368368, 0.4004, 0.424424, 0.448448, 0.48048, 0.512512, 0.544544, 0.576576, 0.608608,
        0.64064, 0.68068, 0.72072, 0.76076,
      ],
      em: [
        0.64064, 0.688688, 0.736736, 0.8008, 0.848848, 0.896896, 0.96096, 1.025024, 1.089088, 1.153152, 1.217216,
        1.28128, 1.36136, 1.44144, 1.52152,
      ],
    }),
    action(
      "幻戏虚影一段伤害",
      AttackType.Moon,
      ElementType.MoonSwirl,
      {
        em: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
      },
      "Nefer"
    ),
    action(
      "幻戏虚影二段伤害",
      AttackType.Moon,
      ElementType.MoonSwirl,
      {
        em: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
      },
      "Nefer"
    ),
    action(
      "幻戏虚影三段伤害",
      AttackType.Moon,
      ElementType.MoonSwirl,
      {
        em: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72, 2.88, 3.04],
      },
      "Nefer"
    ),
  ];
  burstSkill = [
    action("一段伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        2.2464, 2.41488, 2.58336, 2.808, 2.97648, 3.14496, 3.3696, 3.59424, 3.81888, 4.04352, 4.26816, 4.4928, 4.7736,
        5.0544, 5.3352,
      ],
      em: [
        4.4928, 4.82976, 5.16672, 5.616, 5.95296, 6.28992, 6.7392, 7.18848, 7.63776, 8.08704, 8.53632, 8.9856, 9.5472,
        10.1088, 10.6704,
      ],
    }),
    action("二段伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        3.3696, 3.62232, 3.87504, 4.212, 4.46472, 4.71744, 5.0544, 5.39136, 5.72832, 6.06528, 6.40224, 6.7392, 7.1604,
        7.5816, 8.0028,
      ],
      em: [
        6.7392, 7.24464, 7.75008, 8.424, 8.92944, 9.43488, 10.1088, 10.78272, 11.45664, 12.13056, 12.80448, 13.4784,
        14.3208, 15.1632, 16.0056,
      ],
    }),
  ];
  otherSkill = [
    action(
      "6命·幻戏自身二段伤害",
      AttackType.Moon,
      ElementType.MoonSwirl,
      {
        em: [0.85],
      },
      "Nefer"
    ),
    action(
      "6命·幻戏的攻击结束伤害",
      AttackType.Moon,
      ElementType.MoonSwirl,
      {
        em: [1.2],
      },
      "Nefer"
    ),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "初始元素精通+200",
      describe: "奈芙尔自带200点元素精通。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 200,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
    },
    {
      label: "月下的豪赌",
      describe:
        "奈芙尔的「伪秘之帷」效果叠加至3层或3层的持续时间刷新时，奈芙尔的元素精通提升100点。每层「伪秘之帷」提升8%幻戏的伤害。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (_, s) => (s === 3 ? 100 : 0),
        },
        {
          type: BuffType.MoonSwirlRate,
          getValue: (_, s) => s * 8,
        },
      ],
      stackable: true,
      stack: 3,
      limit: 3,
      stackText: "「伪秘之帷」",
      enable: true,
      condition: (data) => data.constellation < 2,
    },
    {
      label: "月下的豪赌",
      describe:
        "奈芙尔的「伪秘之帷」效果叠加至5层或5层的持续时间刷新时，奈芙尔的元素精通提升200点。每层「伪秘之帷」提升8%幻戏的伤害。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (_, s) => (s === 5 ? 200 : 0),
        },
        {
          type: BuffType.MoonSwirlRate,
          getValue: (_, s) => s * 8,
        },
      ],
      stackable: true,
      stack: 5,
      limit: 5,
      stackText: "「伪秘之帷」",
      enable: true,
      condition: (data) => data.constellation >= 2,
    },
    {
      label: "月兆祝赐·廊下暮影",
      describe:
        "队伍中的角色触发绽放反应时，将转为触发月绽放反应，且基于奈芙尔的元素精通，提升队伍中角色造成的月绽放反应的基础伤害：每点元素精通都将提升0.0175%月绽放反应的基础伤害，至多通过这种方式提升14%伤害。",
      effect: [
        {
          type: BuffType.MoonSwirlBasePercent,
          getValue: (data) => Math.min(14, (data.elementalMystery + data.elementalMystery_NT) * 0.0175),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "1命·谋篇乃成败之始",
      describe:
        "奈芙尔的幻戏造成的月绽放反应伤害的基础伤害提升，提升值相当于奈芙尔的元素精通的60%。该效果同样会受到「伪秘之帷」的加成。",
      effect: [
        {
          type: BuffType.EmAdd,
          getValue: () => 0.6,
          actionOn: ActionOn.External,
          special: "Nefer",
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    {
      label: "4命·眩惑入谜局之网",
      describe:
        "奈芙尔处于「影舞」状态下时，还会使附近敌人的草元素抗性降低20%，该效果会在奈芙尔不处于「影舞」状态或离开敌人一定距离4.5秒后移除。",
      effect: [
        {
          type: BuffType.EnemyDendroResistance,
          getValue: () => -20,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·决胜于逆转之时",
      describe: "月兆·满辉：奈芙尔造成的月绽放反应伤害擢升15%。",
      effect: [
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 15,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![奈芙尔](https://enka.network/ui/UI_AvatarIcon_Nefer.png) */
export const Nefer = new NeferData();
