import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_HEALADD_22P } from "../buffs";

@EnKaId(10000035, "七七")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [12368, 287, 922], 80, [13247, 352, 988])
@Icons("UI_AvatarIcon_Qiqi")
export class QiqiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["云来古剑法", "仙法·寒病鬼差", "仙法·救苦度厄"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.37754, 0.40827, 0.439, 0.4829, 0.51363, 0.54875, 0.59704, 0.64533, 0.69362, 0.7463, 0.79898, 0.85166, 0.90434,
        0.95702, 1.0097,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.38872, 0.42036, 0.452, 0.4972, 0.52884, 0.565, 0.61472, 0.66444, 0.71416, 0.7684, 0.82264, 0.87688, 0.93112,
        0.98536, 1.0396,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.24166, 0.26133, 0.281, 0.3091, 0.32877, 0.35125, 0.38216, 0.41307, 0.44398, 0.4777, 0.51142, 0.54514, 0.57886,
        0.61258, 0.6463,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.24682, 0.26691, 0.287, 0.3157, 0.33579, 0.35875, 0.39032, 0.42189, 0.45346, 0.4879, 0.52234, 0.55678, 0.59122,
        0.62566, 0.6601,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.63038, 0.68169, 0.733, 0.8063, 0.85761, 0.91625, 0.99688, 1.07751, 1.15814, 1.2461, 1.33406, 1.42202, 1.50998,
        1.59794, 1.6859,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.64328, 0.69564, 0.748, 0.8228, 0.87516, 0.935, 1.01728, 1.09956, 1.18184, 1.2716, 1.36136, 1.45112, 1.54088,
        1.63064, 1.7204,
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
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
    }),
    action("寒病鬼差伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765, 0.81, 0.855],
    }),
    action("命中治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        0.1056, 0.11352, 0.12144, 0.132, 0.13992, 0.14784, 0.1584, 0.16896, 0.17952, 0.19008, 0.20064, 0.2112, 0.2244,
        0.2376, 0.2508,
      ],
      fixed: [
        67.40786, 74.14957, 81.45311, 89.31845, 97.7456, 106.73457, 116.28535, 126.39793, 137.07233, 148.30853,
        160.10654, 172.46637, 185.388, 198.87144, 212.9167,
      ],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        0.696, 0.7482, 0.8004, 0.87, 0.9222, 0.9744, 1.044, 1.1136, 1.1832, 1.2528, 1.3224, 1.392, 1.479, 1.566, 1.653,
      ],
      fixed: [
        450.5507, 495.612, 544.42847, 597, 653.32666, 713.40845, 777.2453, 844.83734, 916.18445, 991.2866, 1070.1439,
        1152.7563, 1239.1239, 1329.2466, 1423.1244,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        2.848, 3.0616, 3.2752, 3.56, 3.7736, 3.9872, 4.272, 4.5568, 4.8416, 5.1264, 5.4112, 5.696, 6.052, 6.408, 6.764,
      ],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.9, 0.9675, 1.035, 1.125, 1.1925, 1.26, 1.35, 1.44, 1.53, 1.62, 1.71, 1.8, 1.9125, 2.025, 2.1375],
      fixed: [
        577.3388, 635.0807, 697.63446, 765, 837.17737, 914.16656, 995.96765, 1082.5804, 1174.0051, 1270.2417, 1371.29,
        1477.1501, 1587.8221, 1703.3059, 1823.6016,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_HEALADD_22P,
    {
      label: "延命妙法",
      describe: "处于仙法·寒病鬼差状态下的角色触发元素反应时，受治疗加成提升20%",
      effect: [{ type: BuffType.BeHealAdd, getValue: () => 20 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·冰寒蚀骨",
      describe: "对受到冰元素影响的敌人，七七的普通攻击与重击造成的伤害提升15%",
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 15 },
        { type: BuffType.StrongPrcent, getValue: () => 15 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![七七](https://enka.network/ui/UI_AvatarIcon_Qiqi.png) */
export const Qiqi = new QiqiData();
