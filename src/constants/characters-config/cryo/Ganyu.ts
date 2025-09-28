import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000037, "甘雨")
@Weapon(WeaponType.Bow)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [9797, 335, 630], 60, [10493, 410, 675])
@Icons("UI_AvatarIcon_Ganyu")
export class GanyuData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["流天射术", "山泽麟迹", "降众天华"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.31734, 0.34317, 0.369, 0.4059, 0.43173, 0.46125, 0.50184, 0.54243, 0.58302, 0.6273, 0.678037, 0.737705,
        0.797372, 0.857039, 0.922131,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.35604, 0.38502, 0.414, 0.4554, 0.48438, 0.5175, 0.56304, 0.60858, 0.65412, 0.7038, 0.760725, 0.827669,
        0.894613, 0.961556, 1.034586,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.45494, 0.49197, 0.529, 0.5819, 0.61893, 0.66125, 0.71944, 0.77763, 0.83582, 0.8993, 0.972038, 1.057577,
        1.143116, 1.228655, 1.321971,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.45494, 0.49197, 0.529, 0.5819, 0.61893, 0.66125, 0.71944, 0.77763, 0.83582, 0.8993, 0.972038, 1.057577,
        1.143116, 1.228655, 1.321971,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.48246, 0.52173, 0.561, 0.6171, 0.65637, 0.70125, 0.76296, 0.82467, 0.88638, 0.9537, 1.030838, 1.121551,
        1.212265, 1.302979, 1.401939,
      ],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.5762, 0.6231, 0.67, 0.737, 0.7839, 0.8375, 0.9112, 0.9849, 1.0586, 1.139, 1.231125, 1.339464, 1.447803,
        1.556142, 1.67433,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("一段蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action(
      "霜华矢命中伤害",
      AttackType.Strong,
      ElementType.Cryo,
      {
        atk: [1.28, 1.376, 1.472, 1.6, 1.696, 1.792, 1.92, 2.048, 2.176, 2.304, 2.432, 2.56, 2.72, 2.88, 3.04],
      },
      "Ganyu"
    ),
    action(
      "霜华矢·霜华绽发伤害",
      AttackType.Strong,
      ElementType.Cryo,
      {
        atk: [
          2.176, 2.3392, 2.5024, 2.72, 2.8832, 3.0464, 3.264, 3.4816, 3.6992, 3.9168, 4.1344, 4.352, 4.624, 4.896,
          5.168,
        ],
      },
      "Ganyu"
    ),
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
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.32, 1.419, 1.518, 1.65, 1.749, 1.848, 1.98, 2.112, 2.244, 2.376, 2.508, 2.64, 2.805, 2.97, 3.135],
    }),
  ];
  burstSkill = [
    action("冰棱伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        0.70272, 0.755424, 0.808128, 0.8784, 0.931104, 0.983808, 1.05408, 1.124352, 1.194624, 1.264896, 1.335168,
        1.40544, 1.49328, 1.58112, 1.66896,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "唯此一心",
      describe: "霜华矢发射后的5秒内，会使接下来的发射的霜华矢与这些霜华矢引发的霜华绽发的暴击率提高20%",
      effect: [{ type: BuffType.StrongCritcal, getValue: () => 20, special: "Ganyu" }],
      enable: false,
    },
    {
      label: "天地交泰",
      describe: "降众天华领域内的队伍中当前场上角色获得20%冰元素伤害加成",
      effect: [{ type: BuffType.CryoPrcent, getValue: () => 20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·饮露",
      describe: "二段蓄力重击的霜华矢或霜华绽发命中敌人时，会使敌人的冰元素抗性降低15%",
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    {
      label: "4命·西狩",
      describe: "在降众天华的领域内，敌人受到的伤害会增加，这个效果会随时间逐步加强，至多提升至25%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => 5 + 5 * s }],
      enable: false,
      shareable: true,
      stack: 4,
      limit: 4,
      stackable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![甘雨](https://enka.network/ui/UI_AvatarIcon_Ganyu.png) */
export const Ganyu = new GanyuData();
