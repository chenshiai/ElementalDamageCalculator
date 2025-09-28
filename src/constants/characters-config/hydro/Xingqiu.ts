import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000025, "行秋")
@Weapon(WeaponType.Sword)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, [10222, 202, 758], 80, [10930, 253, 810])
@Icons("UI_AvatarIcon_Xingqiu")
export class XingqiuData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["古华剑法", "古华剑·画雨笼山", "古华剑·裁雨留虹"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.46612, 0.50406, 0.542, 0.5962, 0.63414, 0.6775, 0.73712, 0.79674, 0.85636, 0.9214, 0.995925, 1.083566,
        1.171208, 1.258849, 1.354458,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.47644, 0.51522, 0.554, 0.6094, 0.64818, 0.6925, 0.75344, 0.81438, 0.87532, 0.9418, 1.017975, 1.107557,
        1.197139, 1.28672, 1.384446,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.28552, 0.30876, 0.332, 0.3652, 0.38844, 0.415, 0.45152, 0.48804, 0.52456, 0.5644, 0.61005, 0.663734, 0.717419,
        0.771103, 0.829668,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.55986, 0.60543, 0.651, 0.7161, 0.76167, 0.81375, 0.88536, 0.95697, 1.02858, 1.1067, 1.196212, 1.301479,
        1.406746, 1.512013, 1.626849,
      ],
    }),
    action("五段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.35862, 0.38781, 0.417, 0.4587, 0.48789, 0.52125, 0.56712, 0.61299, 0.65886, 0.7089, 0.766237, 0.833666,
        0.901095, 0.968524, 1.042083,
      ],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.473, 0.5115, 0.55, 0.605, 0.6435, 0.6875, 0.748, 0.8085, 0.869, 0.935, 1.010625, 1.09956, 1.188495, 1.27743,
        1.37445,
      ],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.56158, 0.60729, 0.653, 0.7183, 0.76401, 0.81625, 0.88808, 0.95991, 1.03174, 1.1101, 1.199887, 1.305478,
        1.411068, 1.516658, 1.631847,
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
    action("技能伤害·1", AttackType.Skill, ElementType.Hydro, {
      atk: [1.68, 1.806, 1.932, 2.1, 2.226, 2.352, 2.52, 2.688, 2.856, 3.024, 3.192, 3.36, 3.57, 3.78, 3.99],
    }),
    action("技能伤害·2", AttackType.Skill, ElementType.Hydro, {
      atk: [
        1.912, 2.0554, 2.1988, 2.39, 2.5334, 2.6768, 2.868, 3.0592, 3.2504, 3.4416, 3.6328, 3.824, 4.063, 4.302, 4.541,
      ],
    }),
  ];
  burstSkill = [
    action("剑雨伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [
        0.54272, 0.583424, 0.624128, 0.6784, 0.719104, 0.759808, 0.81408, 0.868352, 0.922624, 0.976896, 1.031168,
        1.08544, 1.15328, 1.22112, 1.28896,
      ],
    }),
  ];
  otherSkill = [
    action("生水要诀", AttackType.Heal, ElementType.None, {
      hp: [0.06],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "虚实工笔",
      describe: "行秋获得20%水元素伤害加成",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 20 }],
      enable: true,
    },
    {
      label: "2命·天青现虹",
      describe: "受到剑雨攻击的敌人，水元素抗性降低15%",
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    {
      label: "4命·孤舟斩蛟",
      describe: "在古华剑·裁雨留虹效果持续期间，古华剑·画雨笼山造成的伤害提升50%",
      effect: [{ type: BuffType.SkillRate, getValue: () => 50 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![行秋](https://enka.network/ui/UI_AvatarIcon_Xingqiu.png) */
export const Xingqiu = new XingqiuData();
