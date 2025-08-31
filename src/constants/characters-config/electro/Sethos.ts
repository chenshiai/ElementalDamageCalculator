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
      atk: [0.526, 0.569, 0.612, 0.673, 0.716, 0.765, 0.832, 0.899, 0.967, 1.04, 1.113, 1.187, 1.26, 1.334],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.238, 0.257, 0.277, 0.304, 0.324, 0.346, 0.376, 0.407, 0.437, 0.47, 0.504, 0.537, 0.57, 0.603],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.266, 0.288, 0.309, 0.34, 0.362, 0.387, 0.421, 0.455, 0.489, 0.526, 0.563, 0.6, 0.637, 0.674],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.74, 0.8, 0.86, 0.946, 1.007, 1.075, 1.17, 1.265, 1.359, 1.463, 1.566, 1.669, 1.772, 1.875],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.637, 0.694, 0.75, 0.806, 0.867, 0.928, 0.989, 1.051, 1.112],
    }),
    action("一段蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79],
    }),
    action(
      "贯影箭伤害",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [1.4, 1.505, 1.61, 1.75, 1.855, 1.96, 2.1, 2.24, 2.38, 2.52, 2.66, 2.8, 2.975, 3.15],
        em: [1.346, 1.447, 1.547, 1.682, 1.783, 1.884, 2.018, 2.153, 2.288, 2.422, 2.557, 2.691, 2.859, 3.028],
      },
      "Sethos"
    ),
    action("瞑弦矢一段伤害", AttackType.Strong, ElementType.Electro, {
      atk: [0.526, 0.569, 0.612, 0.673, 0.716, 0.765, 0.832, 0.899, 0.967, 1.04, 1.113, 1.187, 1.26, 1.334],
    }, "Sethos2"),
    action("瞑弦矢二段伤害·1", AttackType.Strong, ElementType.Electro, {
      atk: [0.238, 0.257, 0.277, 0.304, 0.324, 0.346, 0.376, 0.407, 0.437, 0.47, 0.504, 0.537, 0.57, 0.603],
    }, "Sethos2"),
    action("瞑弦矢二段伤害·2", AttackType.Strong, ElementType.Electro, {
      atk: [0.266, 0.288, 0.309, 0.34, 0.362, 0.387, 0.421, 0.455, 0.489, 0.526, 0.563, 0.6, 0.637, 0.674],
    }, "Sethos2"),
    action("瞑弦矢三段伤害", AttackType.Strong, ElementType.Electro, {
      atk: [0.74, 0.8, 0.86, 0.946, 1.007, 1.075, 1.17, 1.265, 1.359, 1.463, 1.566, 1.669, 1.772, 1.875],
    }, "Sethos2"),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203, 1.282, 1.361, 1.441],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.136, 1.229, 1.321, 1.453, 1.546, 1.652, 1.797, 1.942, 2.088, 2.246, 2.405, 2.563, 2.722, 2.88],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.419, 1.535, 1.65, 1.815, 1.931, 2.063, 2.245, 2.426, 2.608, 2.806, 3.004, 3.202, 3.4, 3.598],
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
            const a = [1.962, 2.109, 2.256, 2.452, 2.599, 2.746, 2.942, 3.139, 3.335, 3.531, 3.727, 3.923, 4.168][data.burstLevel+data.burstLevelAdd-1]
            return (data.elementalMystery + data.elementalMystery_NT) * a
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
