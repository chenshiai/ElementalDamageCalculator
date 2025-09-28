import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000023, "香菱")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [10875, 225, 669], 80, [11627, 282, 715])
@Icons("UI_AvatarIcon_Xiangling")
export class XianglingData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["白案功夫", "锅巴出击", "旋火轮"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.42054, 0.45477, 0.489, 0.5379, 0.57213, 0.61125, 0.66504, 0.71883, 0.77262, 0.8313, 0.898537, 0.977609,
        1.05668, 1.135751, 1.222011,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4214, 0.4557, 0.49, 0.539, 0.5733, 0.6125, 0.6664, 0.7203, 0.7742, 0.833, 0.900375, 0.979608, 1.058841,
        1.138074, 1.22451,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.26058, 0.28179, 0.303, 0.3333, 0.35451, 0.37875, 0.41208, 0.44541, 0.47874, 0.5151, 0.556762, 0.605758,
        0.654753, 0.703748, 0.757197,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.14104, 0.15252, 0.164, 0.1804, 0.19188, 0.205, 0.22304, 0.24108, 0.25912, 0.2788, 0.30135, 0.327869, 0.354388,
        0.380906, 0.409836,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.71036, 0.76818, 0.826, 0.9086, 0.96642, 1.0325, 1.12336, 1.21422, 1.30508, 1.4042, 1.517775, 1.651339,
        1.784903, 1.918468, 2.064174,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.2169, 1.31595, 1.415, 1.5565, 1.65555, 1.76875, 1.9244, 2.08005, 2.2357, 2.4055, 2.600062, 2.828868, 3.057673,
        3.286479, 3.536085,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
  ];
  elementSkill = [
    action("喷火伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        1.1128, 1.19626, 1.27972, 1.391, 1.47446, 1.55792, 1.6692, 1.78048, 1.89176, 2.00304, 2.11432, 2.2256, 2.3647,
        2.5038, 2.6429,
      ],
    }),
  ];
  burstSkill = [
    action("一段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.72, 0.774, 0.828, 0.9, 0.954, 1.008, 1.08, 1.152, 1.224, 1.296, 1.368, 1.44, 1.53, 1.62, 1.71],
    }),
    action("二段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.88, 0.946, 1.012, 1.1, 1.166, 1.232, 1.32, 1.408, 1.496, 1.584, 1.672, 1.76, 1.87, 1.98, 2.09],
    }),
    action("三段挥舞伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        1.096, 1.1782, 1.2604, 1.37, 1.4522, 1.5344, 1.644, 1.7536, 1.8632, 1.9728, 2.0824, 2.192, 2.329, 2.466, 2.603,
      ],
    }),
    action("旋火轮伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.12, 1.204, 1.288, 1.4, 1.484, 1.568, 1.68, 1.792, 1.904, 2.016, 2.128, 2.24, 2.38, 2.52, 2.66],
    }),
  ];
  otherSkill = [
    action("2命·大火宽油·内爆", AttackType.Other, ElementType.Pyro, {
      atk: [0.75],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "绝云朝天椒",
      describe: "锅巴会在消失的位置留下辣椒。拾取辣椒会提高10%攻击力",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 10 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·外酥里嫩",
      describe: "受到锅巴攻击的敌人，火元素抗性降低15%",
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·大龙卷旋火轮",
      describe: "旋火轮持续期间，队伍中所有角色获得15%火元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 15 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.All,
    },
  ];
}

/** ![香菱](https://enka.network/ui/UI_AvatarIcon_Xiangling.png) */
export const Xiangling = new XianglingData();
