import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000114, "丝柯克")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [12417, 359, 806], 0, [13300, 440, 864])
@Icons("UI_AvatarIcon_SkirkNew")
export class SkirkData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["极恶技·断", "极恶技·闪", "极恶技·灭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.54524, 0.58962, 0.634, 0.6974, 0.741478, 0.7925, 0.86224, 0.93198, 1.00172, 1.0778, 1.15388, 1.22996, 1.30604,
        1.38212, 1.4582,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.49794, 0.53847, 0.579, 0.6369, 0.67743, 0.72375, 0.78744, 0.85113, 0.91482, 0.9843, 1.05378, 1.12326, 1.19274,
        1.26222, 1.33169,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.32422, 0.35061, 0.377, 0.4147, 0.44109, 0.47125, 0.51272, 0.55419, 0.59566, 0.6409, 0.68614, 0.73138, 0.77662,
        0.82186, 0.8671,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.60802, 0.65751, 0.707, 0.7777, 0.82719, 0.88375, 0.96152, 1.03929, 1.11706, 1.2019, 1.28674, 1.37158, 1.45642,
        1.54126, 1.6261,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.82904, 0.89652, 0.964, 1.0604, 1.12788, 1.205, 1.31104, 1.41708, 1.52312, 1.6388, 1.75448, 1.87016, 1.98584,
        2.10152, 2.2172,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.66822, 0.72261, 0.777, 0.8547, 0.90909, 0.97125, 1.05672, 1.14219, 1.22766, 1.3209, 1.41414, 1.50738, 1.60062,
        1.69386, 1.7871,
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
    action(
      "一段伤害",
      AttackType.Normal,
      ElementType.Cryo,
      {
        atk: [
          1.328244, 1.436357, 1.54447, 1.698917, 1.80703, 1.930588, 2.100479, 2.270371, 2.440263, 2.625599, 2.810935,
          2.996272, 3.181608, 3.366945, 3.552281,
        ],
      },
      "skk"
    ),
    action(
      "二段伤害",
      AttackType.Normal,
      ElementType.Cryo,
      {
        atk: [
          1.197997, 1.295509, 1.39302, 1.532322, 1.629833, 1.741275, 1.894507, 2.047739, 2.200972, 2.368134, 2.535296,
          2.702459, 2.869621, 3.036784, 3.203946,
        ],
      },
      "skk"
    ),
    action(
      "三段伤害·单次",
      AttackType.Normal,
      ElementType.Cryo,
      {
        atk: [
          0.75723, 0.818865, 0.8805, 0.96855, 1.030185, 1.100625, 1.19748, 1.294335, 1.39119, 1.49685, 1.60251, 1.70817,
          1.81383, 1.91949, 2.02515,
        ],
      },
      "skk"
    ),
    action(
      "四段伤害·单次",
      AttackType.Normal,
      ElementType.Cryo,
      {
        atk: [
          0.80539, 0.870945, 0.9365, 1.03015, 1.095705, 1.170625, 1.27364, 1.376655, 1.47967, 1.59205, 1.70443, 1.81681,
          1.92919, 2.04157, 2.15395,
        ],
      },
      "skk"
    ),
    action(
      "五段伤害",
      AttackType.Normal,
      ElementType.Cryo,
      {
        atk: [
          1.966244, 2.126287, 2.28633, 2.514963, 2.675006, 2.857912, 3.109409, 3.360905, 3.612401, 3.886761, 4.161121,
          4.43548, 4.70984, 4.984199, 5.258559,
        ],
      },
      "skk"
    ),
    action("重击伤害·单次", AttackType.Strong, ElementType.Cryo, {
      atk: [
        0.44548, 0.48174, 0.518, 0.5698, 0.60606, 0.6475, 0.70448, 0.76146, 0.81844, 0.8806, 0.94276, 1.00492, 1.06708,
        1.12924, 1.1914,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
  ];
  burstSkill = [
    action(
      "斩击伤害·单次",
      AttackType.Burst,
      ElementType.Cryo,
      {
        atk: [
          1.2276, 1.31967, 1.41174, 1.5345, 1.62657, 1.71864, 1.8414, 1.96416, 2.08692, 2.20968, 2.33244, 2.4552,
          2.60865, 2.7621, 2.91555,
        ],
      },
      "skk"
    ),
    action(
      "斩击最终段伤害",
      AttackType.Burst,
      ElementType.Cryo,
      {
        atk: [
          2.046, 2.19945, 2.3529, 2.5575, 2.71095, 2.8644, 3.069, 3.2736, 3.4782, 3.6828, 3.8874, 4.092, 4.34775,
          4.6035, 4.85925,
        ],
      },
      "skk"
    ),
  ];
  otherSkill = [
    action("1命·湮远·晶刃伤害", AttackType.Strong, ElementType.Cryo, {
      atk: [5],
    }),
    action("6命·极恶技·斩 爆发伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [7.5],
    }),
    action("6命·极恶技·斩 协同伤害·单次", AttackType.Normal, ElementType.Cryo, {
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
            return (
              [0.1932, 0.2077, 0.2222, 0.2415, 0.256, 0.2705, 0.2899, 0.3092, 0.3285, 0.3478, 0.3671, 0.3865, 0.4106][
                d.burstLevel + d.burstLevelAdd - 1
              ] * s
            );
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
