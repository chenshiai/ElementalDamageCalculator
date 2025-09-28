import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_A_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000097, "赛索斯")
@Weapon(WeaponType.Bow)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, [9787, 227, 560], 60, [10464, 285, 598])
@Icons("UI_AvatarIcon_Sethos")
export class SethosData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["王家苇箭术", "古仪·鸣砂掣雷", "秘仪·瞑光贯影"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.526139, 0.568965, 0.61179, 0.672969, 0.715794, 0.764737, 0.832034, 0.899331, 0.966628, 1.040043, 1.113458,
        1.186873, 1.260287, 1.333702, 1.407117,
      ],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.237962, 0.257331, 0.2767, 0.30437, 0.323739, 0.345875, 0.376312, 0.406749, 0.437186, 0.47039, 0.503594,
        0.536798, 0.57, 0.603206, 0.63641,
      ],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.266084, 0.287742, 0.3094, 0.34034, 0.361998, 0.38675, 0.420784, 0.454818, 0.488852, 0.52598, 0.563108,
        0.600236, 0.637364, 0.674492, 0.71162,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.739867, 0.800088, 0.86031, 0.946341, 1.006563, 1.075387, 1.170022, 1.264656, 1.35929, 1.462527, 1.565764,
        1.669001, 1.772239, 1.875476, 1.978713,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("一段蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action(
      "贯影箭伤害",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [1.4, 1.505, 1.61, 1.75, 1.855, 1.96, 2.1, 2.24, 2.38, 2.52, 2.66, 2.8, 2.975, 3.15, 3.325],
        em: [
          1.3456, 1.44652, 1.54744, 1.682, 1.78292, 1.88384, 2.0184, 2.15296, 2.28752, 2.42208, 2.55664, 2.6912, 2.8594,
          3.0276, 3.1958,
        ],
      },
      "Sethos"
    ),
    action(
      "瞑弦矢一段伤害",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [
          0.526139, 0.568965, 0.61179, 0.672969, 0.715794, 0.764737, 0.832034, 0.899331, 0.966628, 1.040043, 1.113458,
          1.186873, 1.260287, 1.333702, 1.407117,
        ],
      },
      "Sethos2"
    ),
    action(
      "瞑弦矢二段伤害·1",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [
          0.237962, 0.257331, 0.2767, 0.30437, 0.323739, 0.345875, 0.376312, 0.406749, 0.437186, 0.47039, 0.503594,
          0.536798, 0.57, 0.603206, 0.63641,
        ],
      },
      "Sethos2"
    ),
    action(
      "瞑弦矢二段伤害·2",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [
          0.266084, 0.287742, 0.3094, 0.34034, 0.361998, 0.38675, 0.420784, 0.454818, 0.488852, 0.52598, 0.563108,
          0.600236, 0.637364, 0.674492, 0.71162,
        ],
      },
      "Sethos2"
    ),
    action(
      "瞑弦矢三段伤害",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [
          0.739867, 0.800088, 0.86031, 0.946341, 1.006563, 1.075387, 1.170022, 1.264656, 1.35929, 1.462527, 1.565764,
          1.669001, 1.772239, 1.875476, 1.978713,
        ],
      },
      "Sethos2"
    ),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
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
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.156, 1.243, 1.329, 1.445, 1.532, 1.618, 1.734, 1.85, 1.965, 2.081],
    }),
  ];
  burstSkill = [
    action("瞑弦矢伤害提升", AttackType.Shield, ElementType.None, {
      em: [1.962, 2.109, 2.256, 2.452, 2.599, 2.746, 2.942, 3.139, 3.335, 3.531, 3.727, 3.923, 4.168],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "砂王的赐礼",
      describe: "使贯影箭造成的伤害值提升，提升值相当于赛索斯的元素精通的700%",
      effect: [
        {
          type: BuffType.StrongFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 7,
          actionOn: ActionOn.External,
          special: "Sethos",
        },
      ],
      enable: true,
    },
    {
      label: "元素爆发·寂想瞑影",
      describe: "塞索斯的普通攻击转化为发射能穿透敌人的瞑弦矢，对敌人造成雷元素伤害，基于元素精通提升其造成的伤害。",
      effect: [
        {
          type: BuffType.StrongFixed,
          getValue: (data) => {
            const a = [
              1.9616, 2.10872, 2.25584, 2.452, 2.59912, 2.74624, 2.9424, 3.13856, 3.33472, 3.53088, 3.72704, 3.9232,
              4.1684, 4.4136, 4.6588,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return (data.elementalMystery + data.elementalMystery_NT) * a;
          },
          actionOn: ActionOn.External,
          special: "Sethos2",
        },
      ],
      enable: true,
    },
    {
      label: "1命·封龛谒灵歌",
      describe: "贯影箭的暴击率提升15%",
      effect: [{ type: BuffType.StrongCritcal, getValue: () => 15, special: "Sethos" }],
      condition: (data) => data.constellation >= 1,
      enable: true,
    },
    {
      label: "2命·寂秘纸草经",
      describe: "满足条件时，赛索斯的雷元素伤害加成提升15%，至多叠加2层",
      effect: [{ type: BuffType.ElectroPrcent, getValue: (_, s) => 15 * s }],
      condition: (data) => data.constellation >= 2,
      enable: true,
      stack: 0,
      limit: 2,
      stackable: true,
    },
    Constellation_A_3,
    {
      label: "4命·真念鸵羽集",
      describe: "贯影箭或瞑弦矢命中2名及以上的敌人时，队伍中附近的所有角色的元素精通提升80点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
      condition: (data) => data.constellation >= 4,
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_Q_5,
  ];
}

/** ![赛索斯](https://enka.network/ui/UI_AvatarIcon_Sethos.png) */
export const Sethos = new SethosData();
