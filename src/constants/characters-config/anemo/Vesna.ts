import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000143, "薇斯纳")
@Weapon(WeaponType.Sword)
@Element(ElementType.Anemo, SecondElementType.Start)
@BaseData(Rarity.Five, [13262, 354, 730], 60, [14205, 434, 782])
@Icons("UI_AvatarIcon_Vesna")
export class VesnaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["巡风剑舞", "操典·制胜有道", "致礼·献予女皇陛下"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4042, 0.4371, 0.47, 0.517, 0.5499, 0.5875, 0.6392, 0.6909, 0.7426, 0.799, 0.8554, 0.9118, 0.9682, 1.0246,
        1.081,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4868, 0.5264, 0.566, 0.6226, 0.6622, 0.7075, 0.7698, 0.832, 0.8943, 0.9622, 1.0301, 1.098, 1.166, 1.2339,
        1.3018,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.2808, 0.3036, 0.3265, 0.3591, 0.382, 0.4081, 0.444, 0.48, 0.5159, 0.5551, 0.5942, 0.6334, 0.6726, 0.7118,
        0.7509,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5917, 0.6398, 0.688, 0.7568, 0.805, 0.86, 0.9357, 1.0114, 1.087, 1.1696, 1.2522, 1.3347, 1.4173, 1.4998,
        1.5824,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.6244, 0.6752, 0.726, 0.7986, 0.8494, 0.9075, 0.9874, 1.0672, 1.1471, 1.2342, 1.3213, 1.4084, 1.4956, 1.5827,
        1.6698,
      ],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.7224, 0.7812, 0.84, 0.924, 0.9828, 1.05, 1.1424, 1.2348, 1.3272, 1.428, 1.5288, 1.6296, 1.7304, 1.8312, 1.932,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.3304, 1.4387, 1.547, 1.7017, 1.81, 1.9338, 2.1039, 2.2741, 2.4443, 2.6299, 2.8155, 3.0012, 3.1868, 3.3725,
        3.5581,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.6393, 0.6914, 0.7434, 0.8177, 0.8698, 0.9293, 1.011, 1.0928, 1.1746, 1.2638, 1.353, 1.4422, 1.5314, 1.6206,
        1.7098,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.5968, 1.7267, 1.8567, 2.0424, 2.1723, 2.3209, 2.5251, 2.7293, 2.9336, 3.1564, 3.3792, 3.602, 3.8248, 4.0476,
        4.2704,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9, 0.95],
    }),
    action("翔风剑一阶伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.4, 0.43, 0.46, 0.5, 0.53, 0.56, 0.6, 0.64, 0.68, 0.72, 0.76, 0.8, 0.85, 0.9, 0.95],
    }),
    action("翔风剑二阶伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.6, 0.645, 0.69, 0.75, 0.795, 0.84, 0.9, 0.96, 1.02, 1.08, 1.14, 1.2, 1.275, 1.35, 1.425],
    }),
    action(
      "翔风剑二阶灵剑伤害",
      AttackType.Skill,
      ElementType.Anemo,
      {
        atk: [1.12, 1.204, 1.288, 1.4, 1.484, 1.568, 1.68, 1.792, 1.904, 2.016, 2.128, 2.24, 2.38, 2.52, 2.66],
      },
      "lingjian"
    ),
    action(
      "翔风剑三阶灵剑伤害·单次",
      AttackType.Skill,
      ElementType.Anemo,
      {
        atk: [
          0.448, 0.4816, 0.5152, 0.56, 0.5936, 0.6272, 0.672, 0.7168, 0.7616, 0.8064, 0.8512, 0.896, 0.952, 1.008,
          1.064,
        ],
      },
      "lingjian"
    ),
    action(
      "翔风剑三阶灵剑最终段伤害",
      AttackType.Skill,
      ElementType.Anemo,
      {
        atk: [
          1.568, 1.6856, 1.8032, 1.96, 2.0776, 2.1952, 2.352, 2.5088, 2.6656, 2.8224, 2.9792, 3.136, 3.332, 3.528,
          3.724,
        ],
      },
      "lingjian"
    ),
    action(
      "翔风剑二阶灵剑星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlAnemo,
      {
        atk: [1.12, 1.204, 1.288, 1.4, 1.484, 1.568, 1.68, 1.792, 1.904, 2.016, 2.128, 2.24, 2.38, 2.52, 2.66],
      },
      "lingjian"
    ),
    action(
      "翔风剑三阶灵剑星扩散伤害·单次",
      AttackType.Start,
      ElementType.StellarSwirlAnemo,
      {
        atk: [
          0.448, 0.4816, 0.5152, 0.56, 0.5936, 0.6272, 0.672, 0.7168, 0.7616, 0.8064, 0.8512, 0.896, 0.952, 1.008,
          1.064,
        ],
      },
      "lingjian"
    ),
    action(
      "翔风剑三阶灵剑最终段星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlAnemo,
      {
        atk: [
          1.568, 1.6856, 1.8032, 1.96, 2.0776, 2.1952, 2.352, 2.5088, 2.6656, 2.8224, 2.9792, 3.136, 3.332, 3.528,
          3.724,
        ],
      },
      "lingjian"
    ),
    action("风翎伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        0.104, 0.1118, 0.1196, 0.13, 0.1378, 0.1456, 0.156, 0.1664, 0.1768, 0.1872, 0.1976, 0.208, 0.221, 0.234, 0.247,
      ],
    }),
  ];
  burstSkill = [
    action(
      "灵剑伤害",
      AttackType.Burst,
      ElementType.Anemo,
      {
        atk: [
          2.632, 2.8294, 3.0268, 3.29, 3.4874, 3.6848, 3.948, 4.2112, 4.4744, 4.7376, 5.0008, 5.264, 5.593, 5.922,
          6.251,
        ],
      },
      "lingjian"
    ),
    action(
      "灵剑星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlAnemo,
      {
        atk: [
          2.632, 2.8294, 3.0268, 3.29, 3.4874, 3.6848, 3.948, 4.2112, 4.4744, 4.7376, 5.0008, 5.264, 5.593, 5.922,
          6.251,
        ],
      },
      "lingjian"
    ),
  ];
  otherSkill = [
    action("6命·翔风剑·变移", AttackType.Other, ElementType.Anemo, {
      atk: [1.5],
    }),

    action(
      "6命·灵剑伤害",
      AttackType.Skill,
      ElementType.Anemo,
      {
        atk: [2],
      },
      "lingjian"
    ),
    action(
      "6命·灵剑星扩散伤害",
      AttackType.Start,
      ElementType.StellarSwirlAnemo,
      {
        atk: [2],
      },
      "lingjian"
    ),
  ];
  buffs = [
    ...S_80_CRITAL_19P,

    {
      label: "元素战技·巡风列装",
      describe: "薇斯纳进行普通攻击、重击与下落攻击时，将转为造成无法被附魔覆盖的风元素伤害",
      effect: [
        {
          type: BuffType.Transform,
          getValue: () => EnchantingType.Anemo,
        },
      ],
      enable: true,
    },
    {
      label: "仪典·春之行列",
      describe:
        "薇斯纳施放特殊元素战技翔风剑或元素爆发致礼·献予女皇陛下后，还会获得一层「整肃」，持续20秒，至多叠加6层，每层独立计算持续时间。拥有整肃时，薇斯纳召唤的灵剑将会造成原本100%+整肃层数*10%的伤害",
      effect: [
        {
          type: BuffType.SkillRate,
          getValue: (_, s) => {
            return 10 * s;
          },
          special: "lingjian",
        },
        {
          type: BuffType.BurstRate,
          getValue: (_, s) => {
            return 10 * s;
          },
          special: "lingjian",
        },
        {
          type: BuffType.StellarSwirlRate,
          getValue: (_, s) => {
            return 10 * s;
          },
          special: "lingjian",
        },
      ],
      enable: true,
      stack: 6,
      limit: 6,
      stackable: true,
      stackText: "整肃",
    },
    {
      label: "理典·冬之凯风",
      describe: `辉映·星扩散：依据队伍中角色的元素类型，薇斯纳将获得对应效果。当前队伍中：</br>
·每有一位元素类型为冰元素或风元素的角色：薇斯纳的攻击力提升6%；</br>
·每有一位不为上述元素类型的角色：薇斯纳的元素精通提升25点。</br>
4命后数值提升为三倍`,
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: (data, s) => {
            if (data.constellation >= 4) return 18 * s;
            return 6 * s;
          },
        },
        {
          type: BuffType.MysteryFixed,
          getValue: (data, s) => {
            if (data.constellation >= 4) return 75 * (3 - s);
            return 25 * (3 - s);
          },
        },
      ],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "冰风角色数量",
    },
    {
      label: "星耀祝礼·散华序饰",
      describe: `队伍中的角色触发冰元素扩散反应时，将转为触发星扩散反应，且基于薇斯纳的攻击力，提升队伍中角色造成的星扩散反应的基础伤害：每100点攻击力都将提升0.7%星扩散反应的基础伤害，至多通过这种方式提升14%伤害`,
      effect: [
        {
          type: BuffType.StellarConductBasePercent,
          getValue: (data) => Math.min(14, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.007),
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StellarSwirlBasePercent,
          getValue: (data) => Math.min(14, (data.baseATK + data.extraATK + data.extraATK_NT) * 0.007),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "1命·送冬的华宴",
      describe: `薇斯纳在巡风列装模式下造成的星扩散反应伤害提升20%。`,
      effect: [
        {
          type: BuffType.StellarSwirlPrcent,
          getValue: () => 20,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·迎春的轮舞",
      describe: `拥有最大层数的整肃时，薇斯纳的攻击力提升40%`,
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: () => 40,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·不移的赤忱",
      describe: "薇斯纳造成的星扩散反应伤害擢升20%",
      effect: [{ type: BuffType.StellarSwirlPromote, getValue: () => 20 }],
      condition: ({ constellation }) => constellation >= 6,
      enable: true,
    },
  ];
}

/**
 * ![薇斯纳](https://enka.network/ui/UI_AvatarIcon_Vesna.png)
 */
export const Vesna = new VesnaData();
