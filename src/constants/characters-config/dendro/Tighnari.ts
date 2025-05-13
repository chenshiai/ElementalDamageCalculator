import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_E_5, Constellation_Q_3, S_80_DENDRO_28P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000069, "提纳里")
@Weapon(WeaponType.Bow)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, 10850, 268, 630, 40)
@Icons("UI_AvatarIcon_Tighnari")
class TighnariData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·藏蕴破障", "识果种雷", "造生缠藤箭"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.446, 0.483, 0.519, 0.571, 0.607, 0.649, 0.706, 0.763, 0.82, 0.882, 0.945],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.42, 0.454, 0.488, 0.537, 0.571, 0.61, 0.664, 0.717, 0.771, 0.83, 0.888],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.265, 0.286, 0.308, 0.338, 0.36, 0.384, 0.418, 0.452, 0.486, 0.523, 0.56],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.265, 0.286, 0.308, 0.338, 0.36, 0.384, 0.418, 0.452, 0.486, 0.523, 0.56],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.686, 0.742, 0.798, 0.878, 0.934, 0.998, 1.085, 1.173, 1.261, 1.357, 1.452],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("一段蓄力瞄准射击", AttackType.Strong, ElementType.Dendro, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("花筥箭伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [0.872, 0.937, 1.003, 1.09, 1.155, 1.221, 1.308, 1.395, 1.482, 1.57, 1.657],
    }),
    action("藏蕴花矢伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [0.386, 0.415, 0.444, 0.483, 0.511, 0.54, 0.579, 0.618, 0.656, 0.695, 0.733],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [1.496, 1.608, 1.72, 1.87, 1.982, 2.094, 2.244, 2.394, 2.543, 2.693, 2.842, 2.992, 3.179],
    }),
  ];
  burstSkill = [
    action("缠藤箭伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [0.556, 0.598, 0.64, 0.695, 0.737, 0.779, 0.834, 0.89, 0.946, 1.001, 1.057, 1.112, 1.182],
    }),
    action("次级缠藤箭伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [0.68, 0.731, 0.782, 0.85, 0.901, 0.952, 1.02, 1.088, 1.156, 1.224, 1.292, 1.36, 1.445],
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
