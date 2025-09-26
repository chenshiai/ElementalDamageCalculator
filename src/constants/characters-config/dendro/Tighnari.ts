import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_DENDRO_28P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000069, "提纳里")
@Weapon(WeaponType.Bow)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, [10850, 268, 630], 40, [11621, 328, 675])
@Icons("UI_AvatarIcon_Tighnari")
export class TighnariData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["藏蕴破障", "识果种雷", "造生缠藤箭"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44634, 0.48267, 0.519, 0.5709, 0.60723, 0.64875, 0.70584, 0.76293, 0.82002, 0.8823, 0.94458, 1.00686, 1.06914,
        1.13142, 1.1937,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.41968, 0.45384, 0.488, 0.5368, 0.57096, 0.61, 0.66368, 0.71736, 0.77104, 0.8296, 0.88816, 0.94672, 1.00528,
        1.06384, 1.1224,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.26445, 0.285975, 0.3075, 0.33825, 0.359775, 0.384375, 0.4182, 0.452025, 0.48585, 0.52275, 0.55965, 0.59655,
        0.63345, 0.67035, 0.70725,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.68628, 0.74214, 0.798, 0.8778, 0.93366, 0.9975, 1.08528, 1.17306, 1.26084, 1.3566, 1.45236, 1.54812, 1.64388,
        1.73964, 1.8354,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("一段蓄力瞄准射击", AttackType.Strong, ElementType.Dendro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("花筥箭伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [
        0.872, 0.9374, 1.0028, 1.09, 1.1554, 1.2208, 1.308, 1.3952, 1.4824, 1.5696, 1.6568, 1.744, 1.853, 1.962, 2.071,
      ],
    }),
    action("藏蕴花矢伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [
        0.386, 0.41495, 0.4439, 0.4825, 0.51145, 0.5404, 0.579, 0.6176, 0.6562, 0.6948, 0.7334, 0.772, 0.82025, 0.8685,
        0.91675,
      ],
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
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        1.496, 1.6082, 1.7204, 1.87, 1.9822, 2.0944, 2.244, 2.3936, 2.5432, 2.6928, 2.8424, 2.992, 3.179, 3.366, 3.553,
      ],
    }),
  ];
  burstSkill = [
    action("缠藤箭伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        0.5562, 0.597915, 0.63963, 0.69525, 0.736965, 0.77868, 0.8343, 0.88992, 0.94554, 1.00116, 1.05678, 1.1124,
        1.181925, 1.25145, 1.320975,
      ],
    }),
    action("次级缠藤箭伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        0.6798, 0.730785, 0.78177, 0.84975, 0.900735, 0.95172, 1.0197, 1.08768, 1.15566, 1.22364, 1.29162, 1.3596,
        1.444575, 1.52955, 1.614525,
      ],
    }),
  ];
  otherSkill = [
    action("6命·藏蕴花矢伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [1.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_DENDRO_28P,
    {
      label: "眼识殊明",
      describe: "提纳里发射花筥箭后，元素精通提升50点",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 50,
        },
      ],
      enable: true,
    },
    {
      label: "诸叶辨通",
      describe:
        "提纳里的每点元素精通，都会使其重击与造生缠藤箭造成的伤害提升0.06%。通过这种方式，至多使上述攻击造成的伤害提升60%",
      effect: [
        {
          type: BuffType.StrongPrcent,
          getValue: (data) => Math.min(60, (data.elementalMystery + data.elementalMystery_NT) * 0.06),
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => Math.min(60, (data.elementalMystery + data.elementalMystery_NT) * 0.06),
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "1命·由根须断定肇始",
      describe: "提纳里重击的暴击率提高15%",
      effect: [
        {
          type: BuffType.StrongCritcal,
          getValue: () => 15,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    {
      label: "4命·由片叶管窥枯荣",
      describe:
        "施放造生缠藤箭时，队伍中附近的所有角色的元素精通提升60点，若造生缠藤箭触发了燃烧、绽放、原激化或蔓激化反应，元素精通将进一步提升60点",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 60 + 60 * s }],
      enable: true,
      stackable: true,
      stack: 0,
      limit: 1,
      stackType: "switch",
      stackText: "触发反应",
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![提纳里](https://enka.network/ui/UI_AvatarIcon_Tighnari.png) */
export const Tighnari = new TighnariData();
