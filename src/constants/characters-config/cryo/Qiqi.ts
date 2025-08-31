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
      atk: [0.378, 0.408, 0.439, 0.483, 0.514, 0.549, 0.597, 0.645, 0.694, 0.746, 0.799],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.389, 0.42, 0.452, 0.497, 0.529, 0.565, 0.615, 0.664, 0.714, 0.768, 0.823],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.242, 0.261, 0.281, 0.309, 0.329, 0.351, 0.382, 0.413, 0.444, 0.478, 0.511],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.242, 0.261, 0.281, 0.309, 0.329, 0.351, 0.382, 0.413, 0.444, 0.478, 0.511],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.247, 0.267, 0.287, 0.316, 0.336, 0.359, 0.39, 0.422, 0.453, 0.488, 0.522],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.247, 0.267, 0.287, 0.316, 0.336, 0.359, 0.39, 0.422, 0.453, 0.488, 0.522],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.63, 0.682, 0.733, 0.806, 0.858, 0.916, 0.997, 1.08, 1.16, 1.25, 1.33],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.643, 0.696, 0.748, 0.823, 0.875, 0.935, 1.02, 1.1, 1.18, 1.27, 1.36],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.643, 0.696, 0.748, 0.823, 0.875, 0.935, 1.02, 1.1, 1.18, 1.27, 1.36],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.96, 1.03, 1.1, 1.2, 1.27, 1.34, 1.44, 1.54, 1.63, 1.73, 1.82, 1.92, 2.04],
    }),
    action("寒病鬼差伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.68, 0.72, 0.765],
    }),
    action("命中治疗量", AttackType.Heal, ElementType.None, {
      atk: [
        0.1056, 0.1135, 0.1214, 0.132, 0.1399, 0.1478, 0.1584, 0.169, 0.1795, 0.1901, 0.2006, 0.2112, 0.2244, 0.2376,
      ],
      fixed: [67, 74, 81, 89, 98, 107, 116, 126, 137, 148, 160, 172, 185, 198],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.696, 0.7482, 0.8004, 0.87, 0.9222, 0.9744, 1.044, 1.1136, 1.1832, 1.2528, 1.3224, 1.392, 1.479, 1.566],
      fixed: [451, 496, 544, 597, 653, 713, 777, 845, 916, 991, 1070, 1153, 1239, 1329],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [2.85, 3.06, 3.28, 3.56, 3.77, 3.99, 4.27, 4.56, 4.84, 5.13, 5.41, 5.7, 6.05, 6.41],
    }),
    action("治疗量", AttackType.Heal, ElementType.None, {
      atk: [0.9, 0.968, 1.04, 1.13, 1.19, 1.26, 1.35, 1.44, 1.53, 1.62, 1.71, 1.8, 1.91, 2.03],
      fixed: [557, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703],
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
