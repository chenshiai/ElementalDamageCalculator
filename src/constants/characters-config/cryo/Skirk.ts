import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000114, "丝柯克")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, 12417, 359, 806, 0)
@Icons("UI_AvatarIcon_SkirkNew")
export class SkirkData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["极恶技·断", "极恶技·闪", "极恶技·灭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.545, 0.59, 0.634, 0.697, 0.742, 0.793, 0.862, 0.932, 1.002, 1.078, 1.154],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.498, 0.538, 0.579, 0.637, 0.677, 0.724, 0.787, 0.851, 0.915, 0.984, 1.054],
    }),
    action("三段伤害·单段", AttackType.Normal, ElementType.Physical, {
      atk: [0.324, 0.351, 0.377, 0.415, 0.441, 0.471, 0.513, 0.554, 0.596, 0.641, 0.686],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.608, 0.658, 0.707, 0.778, 0.827, 0.884, 0.962, 1.039, 1.117, 1.202, 1.287],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.829, 0.897, 0.964, 1.06, 1.128, 1.205, 1.311, 1.417, 1.523, 1.639, 1.754],
    }),
    action("重击伤害·单段", AttackType.Strong, ElementType.Physical, {
      atk: [0.668, 0.723, 0.777, 0.855, 0.909, 0.971, 1.057, 1.142, 1.228, 1.321, 1.414],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.7],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [1.328, 1.436, 1.544, 1.699, 1.807, 1.931, 2.1, 2.27, 2.44, 2.626, 2.811, 2.996, 3.182, 3.367],
    }, "skk"),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [1.198, 1.296, 1.393, 1.532, 1.63, 1.741, 1.895, 2.048, 2.201, 2.368, 2.535, 2.702, 2.87, 3.037],
    }, "skk"),
    action("三段伤害·单段", AttackType.Normal, ElementType.Cryo, {
      atk: [0.757, 0.819, 0.881, 0.969, 1.03, 1.101, 1.197, 1.294, 1.391, 1.497, 1.602, 1.708, 1.814, 1.919],
    }, "skk"),
    action("四段伤害·单段", AttackType.Normal, ElementType.Cryo, {
      atk: [0.805, 0.871, 0.937, 1.03, 1.096, 1.171, 1.274, 1.377, 1.48, 1.592, 1.704, 1.817, 1.929, 2.042],
    }, "skk"),
    action("五段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [1.966, 2.126, 2.286, 2.515, 2.675, 2.858, 3.109, 3.361, 3.612, 3.887, 4.161, 4.435, 4.71, 4.984],
    }, "skk"),
    action("重击伤害·单段", AttackType.Strong, ElementType.Cryo, {
      atk: [0.445, 0.482, 0.518, 0.57, 0.606, 0.648, 0.704, 0.761, 0.818, 0.881, 0.943, 1.005, 1.067, 1.129],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353, 1.442, 1.531, 1.621],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.7, 2.88, 3.06, 3.24],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38, 3.6, 3.82, 4.05],
    }),
  ];
  burstSkill = [
    action("斩击伤害·单段", AttackType.Burst, ElementType.Cryo, {
      atk: [1.228, 1.32, 1.412, 1.535, 1.627, 1.719, 1.841, 1.964, 2.087, 2.21, 2.332, 2.455, 2.609],
    }, "skk"),
    action("斩击最终段伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [2.046, 2.199, 2.353, 2.558, 2.711, 2.864, 3.069, 3.274, 3.478, 3.683, 3.887, 4.092, 4.348],
    }, "skk"),
  ];
  otherSkill = [
    action("1命·湮远·晶刃伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [5],
    }),
    action("6命·极恶技·斩 爆发伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [7.5],
    }),
    action("6命·极恶技·斩 协同伤害·单段", AttackType.Normal, ElementType.Cryo, {
      atk: [1.8],
    }),
    action("6命·极恶技·斩 反击伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [1.8],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "万流归寂",
      describe: `队伍中附近的元素类型为水元素的角色的水元素攻击命中敌人时，或是队伍中附近的元素类型为冰元素的其他角色的冰元素攻击命中敌人时，丝柯克将获得一层持续20秒的死河渡断效果，至多叠加3层，每层独立计算持续时间。</br>每名角色至多通过这种方式使丝柯克获得1层死河渡断效果。</br>每层死河渡断效果会使丝柯克在七相一闪模式下时进行的普通攻击造成原本110%/120%/170%的伤害，且施放的元素爆发极恶技·灭造成原本105%/115%/160%的伤害。`,
      effect: [
        {
          type: BuffType.NormalRate,
          getValue: (_, s) => {
            return [0, 10, 20, 70][s];
          },
          actionOn: ActionOn.Direct,
          special: "skk",
        },
        {
          type: BuffType.BurstRate,
          getValue: (_, s) => {
            return [0, 5, 15, 60][s];
          },
          actionOn: ActionOn.Direct,
          special: "skk",
        },
      ],
      stackable: true,
      stack: 3,
      limit: 3,
      stackText: "死河断渡",
      enable: true,
    },
    {
      label: "诸武相授",
      describe: `队伍中所有角色的元素类型均为水元素或冰元素，并且至少有一名水元素角色、一名冰元素角色时，队伍中自己的角色的元素战技等级提高1级。`,
      effect: [
        {
          type: BuffType.SkillLevel,
          getValue: () => 1,
          actionOn: ActionOn.Front,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
      shareCondition: ({ element }) => element === ElementType.Cryo || element === ElementType.Hydro,
    },
    {
      label: "凋尽",
      describe: `凋尽效果持续期间，每0.1秒，丝柯克的普通攻击命中敌人后，将使本次普通攻击造成的伤害提高；若施放极恶技·尽时，汲取了虚境裂隙，则会依据汲取的虚境裂隙枚数，使本次普通攻击造成的伤害进一步提高。`,
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (d, s) => {
            let a = [
              [3.5, 6.6, 8.8, 11.0],
              [4.0, 7.2, 9.6, 12.0],
              [4.5, 7.8, 10.4, 13.0],
              [5.0, 8.4, 11.2, 14.0],
              [5.5, 9.0, 12.0, 15.0],
              [6.0, 9.6, 12.8, 16.0],
              [6.5, 10.2, 13.6, 17.0],
              [7.0, 10.8, 14.4, 18.0],
              [7.5, 11.4, 15.2, 19.0],
              [8.0, 12.0, 16.0, 20.0],
              [8.5, 12.6, 16.8, 21.0],
              [9.0, 13.2, 17.6, 22.0],
              [9.5, 13.8, 18.4, 23.0],
            ][d.burstLevel + d.burstLevelAdd - 1][s];
            return a;
          },
          actionOn: ActionOn.Direct,
        },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 3,
      stackText: "虚境裂隙",
    },
    {
      label: "极恶技·灭",
      describe: `依据施放时丝柯克拥有的蛇之狡谋超过50点的部分，每1点蛇之狡谋都将提升本次元素爆发造成的伤害，至多通过这种方式计入12点蛇之狡谋。解锁2命后上限提升至22点。`,
      effect: [
        {
          type: BuffType.BurstAdd,
          getValue: (d, s) => {
            return [
              0.1932, 0.2077, 0.2222, 0.2415, 0.256, 0.2705, 0.2899, 0.3092, 0.3285, 0.3478, 0.3671, 0.3865, 0.4106,
            ][d.burstLevel + d.burstLevelAdd - 1] * s;
          },
          actionOn: ActionOn.Indirect,
          special: "skk",
        },
      ],
      enable: true,
      stackable: true,
      stack: 12,
      limit: 22,
      stackText: "额外蛇之狡谋",
    },
    {
      label: "2命·坠渊",
      describe: `丝柯克施放七相一闪模式下的特殊元素爆发极恶技·尽后的12.5秒内，攻击力提升70%。`,
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: () => 70,
          actionOn: ActionOn.Direct,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·流断",
      describe: `每层死河渡断效果还会使丝柯克的攻击力提升10%/20%/40%。`,
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: (_, s) => [0, 10, 20, 40][s],
          actionOn: ActionOn.Direct,
        },
      ],
      enable: true,
      stackable: true,
      stack: 3,
      limit: 3,
      stackText: "死河断渡",
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![丝柯克](https://enka.network/ui/UI_AvatarIcon_SkirkNew.png) */
export const Skirk = new SkirkData();
