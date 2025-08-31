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
      atk: [0.405, 0.438, 0.471, 0.518, 0.551, 0.589, 0.641, 0.692, 0.744, 0.801, 0.857],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.403, 0.435, 0.468, 0.515, 0.548, 0.585, 0.637, 0.688, 0.739, 0.796, 0.852],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.23, 0.248, 0.267, 0.294, 0.312, 0.334, 0.363, 0.393, 0.422, 0.454, 0.486],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.275, 0.298, 0.32, 0.352, 0.374, 0.4, 0.435, 0.47, 0.506, 0.544, 0.582],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.24, 0.26, 0.279, 0.307, 0.326, 0.349, 0.379, 0.41, 0.441, 0.474, 0.508],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.288, 0.312, 0.335, 0.369, 0.392, 0.419, 0.456, 0.493, 0.529, 0.57, 0.61],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.673, 0.728, 0.783, 0.861, 0.916, 0.979, 1.065, 1.151, 1.237, 1.331, 1.425],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.217, 1.316, 1.415, 1.557, 1.656, 1.769, 1.924, 2.08, 2.236, 2.406, 2.6],
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
    action("点按伤害", AttackType.Skill, ElementType.Geo, {
      def: [1.491, 1.603, 1.715, 1.864, 1.976, 2.087, 2.237, 2.386, 2.535, 2.684, 2.833, 2.982, 3.169],
    }),
    action("一段蓄力伤害", AttackType.Skill, ElementType.Geo, {
      def: [2.61, 2.805, 3.001, 3.262, 3.468, 3.653, 3.914, 4.175, 4.436, 4.697, 4.958, 5.219, 5.545],
    }),
    action("二段蓄力伤害", AttackType.Skill, ElementType.Geo, {
      def: [3.728, 4.008, 4.287, 4.66, 4.94, 5.219, 5.592, 5.965, 6.338, 6.71, 7.083, 7.456, 7.922],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.22, 0.23, 0.24, 0.26, 0.27],
      fixed: [1155, 1271, 1396, 1531, 1675, 1830, 1993, 2167, 2350, 2542, 2744, 2956, 3178, 3409],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Geo, {
      atk: [2.44, 2.62, 2.81, 3.05, 3.23, 3.42, 3.66, 3.9, 4.15, 4.39, 4.64, 4.88, 5.19],
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
            let b = [0.32, 0.35, 0.37, 0.4, 0.43, 0.45, 0.48, 0.51, 0.55, 0.58, 0.61, 0.64, 0.68][
              data.burstLevel + data.burstLevelAdd - 1
            ];
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
