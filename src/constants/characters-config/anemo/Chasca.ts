import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P, S_80_MYSTERY_115 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000104, "恰斯卡")
@Weapon(WeaponType.Bow)
@Element(ElementType.Anemo, SecondElementType.Nightsoul)
@BaseData(Rarity.Five, [9797, 347, 615], 60, [10493, 425, 659])
@Icons("UI_AvatarIcon_Chasca")
export class ChascaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迷羽流击", "灵缰追影", "索魂命袭"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.480078, 0.519154, 0.55823, 0.614053, 0.653129, 0.697788, 0.759193, 0.820598, 0.882003, 0.948991, 1.015979,
        1.082966, 1.149954, 1.216941, 1.283929,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.445884, 0.482177, 0.51847, 0.570317, 0.60661, 0.648087, 0.705119, 0.762151, 0.819183, 0.881399, 0.943615,
        1.005832, 1.068048, 1.130265, 1.192481,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.296975, 0.321148, 0.34532, 0.379852, 0.404024, 0.43165, 0.469635, 0.50762, 0.545606, 0.587044, 0.628482,
        0.669921, 0.711359, 0.752798, 0.794236,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.254672, 0.275401, 0.29613, 0.325743, 0.346472, 0.370163, 0.402737, 0.435311, 0.467885, 0.503421, 0.538957,
        0.574492, 0.610028, 0.645563, 0.681099,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
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
    action("共鸣伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.6, 0.645, 0.69, 0.75, 0.795, 0.84, 0.9, 0.96, 1.02, 1.08, 1.14, 1.2, 1.275, 1.35, 1.425],
    }),
    action("多重瞄准点按伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765, 0.81, 0.855],
    }),
    action(
      "追影弹伤害",
      AttackType.Strong,
      ElementType.Anemo,
      {
        atk: [
          0.488, 0.5246, 0.5612, 0.61, 0.6466, 0.6832, 0.732, 0.7808, 0.8296, 0.8784, 0.9272, 0.976, 1.037, 1.098,
          1.159,
        ],
      },
      "Chasca1"
    ),
    action(
      "焕光追影弹伤害·火",
      AttackType.Strong,
      ElementType.Pyro,
      {
        atk: [
          1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
          3.33144, 3.539655, 3.74787, 3.956085,
        ],
      },
      "Chasca"
    ),
    action(
      "焕光追影弹伤害·水",
      AttackType.Strong,
      ElementType.Hydro,
      {
        atk: [
          1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
          3.33144, 3.539655, 3.74787, 3.956085,
        ],
      },
      "Chasca"
    ),
    action(
      "焕光追影弹伤害·冰",
      AttackType.Strong,
      ElementType.Cryo,
      {
        atk: [
          1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
          3.33144, 3.539655, 3.74787, 3.956085,
        ],
      },
      "Chasca"
    ),
    action(
      "焕光追影弹伤害·雷",
      AttackType.Strong,
      ElementType.Electro,
      {
        atk: [
          1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
          3.33144, 3.539655, 3.74787, 3.956085,
        ],
      },
      "Chasca"
    ),
    null,
    action("流焰追影弹伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [0.488, 0.525, 0.561, 0.61, 0.647, 0.683, 0.54, 0.781, 0.83, 0.878, 0.927, 0.976, 1.037].map((i) => i * 1.5),
    }),
    action("流焰追影弹伤害·火", AttackType.Strong, ElementType.Pyro, {
      atk: [
        1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
        3.33144, 3.539655, 3.74787, 3.956085,
      ].map((i) => i * 1.5),
    }),
    action("流焰追影弹伤害·水", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
        3.33144, 3.539655, 3.74787, 3.956085,
      ].map((i) => i * 1.5),
    }),
    action("流焰追影弹伤害·冰", AttackType.Strong, ElementType.Cryo, {
      atk: [
        1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
        3.33144, 3.539655, 3.74787, 3.956085,
      ].map((i) => i * 1.5),
    }),
    action("流焰追影弹伤害·雷", AttackType.Strong, ElementType.Electro, {
      atk: [
        1.66572, 1.790649, 1.915578, 2.08215, 2.207079, 2.332008, 2.49858, 2.665152, 2.831724, 2.998296, 3.164868,
        3.33144, 3.539655, 3.74787, 3.956085,
      ].map((i) => i * 1.5),
    }),
  ];
  burstSkill = [
    action("裂风索魂弹伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.88, 0.946, 1.012, 1.1, 1.166, 1.232, 1.32, 1.408, 1.496, 1.584, 1.672, 1.76, 1.87, 1.98, 2.09],
    }),
    action("索魂弹伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [
        1.034, 1.11155, 1.1891, 1.2925, 1.37005, 1.4476, 1.551, 1.6544, 1.7578, 1.8612, 1.9646, 2.068, 2.19725, 2.3265,
        2.45575,
      ],
    }),
    action("溢光索魂弹伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [
        2.068, 2.2231, 2.3782, 2.585, 2.7401, 2.8952, 3.102, 3.3088, 3.5156, 3.7224, 3.9292, 4.136, 4.3945, 4.653,
        4.9115,
      ],
    }),
    action("溢光索魂弹伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [
        2.068, 2.2231, 2.3782, 2.585, 2.7401, 2.8952, 3.102, 3.3088, 3.5156, 3.7224, 3.9292, 4.136, 4.3945, 4.653,
        4.9115,
      ],
    }),
    action("溢光索魂弹伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [
        2.068, 2.2231, 2.3782, 2.585, 2.7401, 2.8952, 3.102, 3.3088, 3.5156, 3.7224, 3.9292, 4.136, 4.3945, 4.653,
        4.9115,
      ],
    }),
    action("溢光索魂弹伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [
        2.068, 2.2231, 2.3782, 2.585, 2.7401, 2.8952, 3.102, 3.3088, 3.5156, 3.7224, 3.9292, 4.136, 4.3945, 4.653,
        4.9115,
      ],
    }),
  ];
  otherSkill = [
    action("2/4命·范围伤害·火", AttackType.Strong, ElementType.Pyro, {
      atk: [4],
    }),
    action("2/4命·范围伤害·水", AttackType.Strong, ElementType.Hydro, {
      atk: [4],
    }),
    action("2/4命·范围伤害·冰", AttackType.Strong, ElementType.Cryo, {
      atk: [4],
    }),
    action("2/4命·范围伤害·雷", AttackType.Strong, ElementType.Electro, {
      atk: [4],
    }),
  ];
  buffs = [
    ...S_80_CRITAL_19P,
    {
      label: "子弹的戏法",
      describe:
        "若队伍中存在符合元素转化条件的元素类型的角色，则每种元素将为恰斯卡产生一层「焕影之灵」效果，使焕光追影弹造成的伤害提升15%/35%/65%，该效果持续至本次多重瞄准结束，至多叠加3层。",
      effect: [
        {
          type: BuffType.StrongPrcent,
          getValue: (_, s) => {
            return [0, 15, 35, 65][s];
          },
          special: "Chasca",
        },
      ],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "焕影之灵",
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·相决，斗争的荣光",
      describe:
        "恰斯卡进行多重瞄准所需的蓄力时间减少，且触发固有天赋「子弹的戏法」中的「附灵转化」后，恰斯卡将获得「命袭」状态，在接下来的3秒内，恰斯卡下一次施放元素战技灵缰追影中的多重瞄准时，会立即完成蓄力，并且本次多重瞄准中的追影弹和焕光追影弹的暴击伤害提升120%。每3秒至多获得一次「命袭」效果。",
      effect: [
        { type: BuffType.StrongCritcalHurt, getValue: () => 120, special: "Chasca" },
        { type: BuffType.StrongCritcalHurt, getValue: () => 120, special: "Chasca1" },
      ],
      condition: ({ constellation }) => constellation >= 6,
      enable: true,
    },
  ];
}

/**
 * ![恰斯卡](https://enka.network/ui/UI_AvatarIcon_Chasca.png)
 */
export const Chasca = new ChascaData();
