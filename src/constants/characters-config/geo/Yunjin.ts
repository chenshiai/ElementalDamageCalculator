import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_CHARGE_26P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000064, "云堇")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Geo)
@BaseData(Rarity.Four, [10657, 191, 734], 60, [11395, 239, 785])
@Icons("UI_AvatarIcon_Yunjin")
export class YunjinData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["拂云出手", "旋云开相", "破嶂见旌仪"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.40506, 0.43803, 0.471, 0.5181, 0.55107, 0.58875, 0.64056, 0.69237, 0.74418, 0.8007, 0.85722, 0.91374, 0.97026,
        1.02678, 1.0833,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.40248, 0.43524, 0.468, 0.5148, 0.54756, 0.585, 0.63648, 0.68796, 0.73944, 0.7956, 0.85176, 0.90792, 0.96408,
        1.02024, 1.0764,
      ],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.22962, 0.24831, 0.267, 0.2937, 0.31239, 0.33375, 0.36312, 0.39249, 0.42186, 0.4539, 0.48594, 0.51798, 0.55002,
        0.58206, 0.6141,
      ],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.2752, 0.2976, 0.32, 0.352, 0.3744, 0.4, 0.4352, 0.4704, 0.5056, 0.544, 0.5824, 0.6208, 0.6592, 0.6976, 0.736,
      ],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.23994, 0.25947, 0.279, 0.3069, 0.32643, 0.34875, 0.37944, 0.41013, 0.44082, 0.4743, 0.50778, 0.54126, 0.57474,
        0.60822, 0.6417,
      ],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.2881, 0.31155, 0.335, 0.3685, 0.39195, 0.41875, 0.4556, 0.49245, 0.5293, 0.5695, 0.6097, 0.6499, 0.6901,
        0.7303, 0.7705,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.67338, 0.72819, 0.783, 0.8613, 0.91611, 0.97875, 1.06488, 1.15101, 1.23714, 1.3311, 1.42506, 1.51902, 1.61298,
        1.70694, 1.8009,
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
    action("点按伤害", AttackType.Skill, ElementType.Geo, {
      def: [
        1.4912, 1.60304, 1.71488, 1.864, 1.97584, 2.08768, 2.2368, 2.38592, 2.53504, 2.68416, 2.83328, 2.9824, 3.1688,
        3.3552, 3.5416,
      ],
    }),
    action("一段蓄力伤害", AttackType.Skill, ElementType.Geo, {
      def: [
        2.6096, 2.80532, 3.00104, 3.262, 3.45772, 3.65344, 3.9144, 4.17536, 4.43632, 4.69728, 4.95824, 5.2192, 5.5454,
        5.8716, 6.1978,
      ],
    }),
    action("二段蓄力伤害", AttackType.Skill, ElementType.Geo, {
      def: [
        3.728, 4.0076, 4.2872, 4.66, 4.9396, 5.2192, 5.592, 5.9648, 6.3376, 6.7104, 7.0832, 7.456, 7.922, 8.388, 8.854,
      ],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255, 0.27, 0.285],
      fixed: [
        1155.4323, 1270.9916, 1396.1808, 1531, 1675.4491, 1829.5282, 1993.2372, 2166.5762, 2349.545, 2542.1438,
        2744.3726, 2956.2312, 3177.72, 3408.8384, 3649.587,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [2.44, 2.623, 2.806, 3.05, 3.233, 3.416, 3.66, 3.904, 4.148, 4.392, 4.636, 4.88, 5.185, 5.49, 5.795],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_CHARGE_26P,
    {
      label: "元素爆发·破嶂见旌仪",
      describe:
        "为附近的队伍中所有角色赋予飞云旗阵。对敌人造成普通攻击伤害时，基于云堇自己当前的防御力，提高造成的伤害。",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => {
            let b = [
              0.3216, 0.34572, 0.36984, 0.402, 0.42612, 0.45024, 0.4824, 0.51456, 0.54672, 0.57888, 0.61104, 0.6432,
              0.6834, 0.7236, 0.7638,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return b * (data.baseDEF + data.extraDEF + data.extraDEF_NT);
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "莫从恒蹊",
      describe:
        "飞云旗阵提供的普通攻击伤害提高，当队伍中存在1/2/3/4种元素类型的角色时，数值上进一步追加云堇防御力的2.5%/5.0%/7.5%/11.5%。",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data, s) => {
            let a = [0.025, 0.05, 0.075, 0.115][s - 1] || 0;
            return a * (data.baseDEF + data.extraDEF + data.extraDEF_NT);
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      stack: 4,
      limit: 4,
      stackable: true,
      stackText: "元素种类数量",
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·诸般切末",
      describe: "施放破嶂见旌仪后，附近队伍中的所有角色普通攻击造成的伤害提升15%",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: () => 15,
        },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·昇堂吊云",
      describe: "云堇触发结晶反应后，防御力提升20%",
      effect: [{ type: BuffType.DEFPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![云堇](https://enka.network/ui/UI_AvatarIcon_Yunjin.png) */
export const Yunjin = new YunjinData();
