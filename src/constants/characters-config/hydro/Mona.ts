import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  Rarity,
  SecondElementType,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CHARGE_32P } from "../buffs";

@EnKaId(10000041, "莫娜")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro, SecondElementType.Magus)
@BaseData(Rarity.Five, [10409, 287, 653], 60, [11149, 352, 700])
@Icons("UI_AvatarIcon_Mona")
export class MonaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["因果点破", "水中幻愿", "星命定轨"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.376, 0.4042, 0.4324, 0.47, 0.4982, 0.5264, 0.564, 0.6016, 0.6392, 0.6768, 0.7144, 0.752, 0.799, 0.846, 0.893,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.36, 0.387, 0.414, 0.45, 0.477, 0.504, 0.54, 0.576, 0.612, 0.648, 0.684, 0.72, 0.765, 0.81, 0.855],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.448, 0.4816, 0.5152, 0.56, 0.5936, 0.6272, 0.672, 0.7168, 0.7616, 0.8064, 0.8512, 0.896, 0.952, 1.008, 1.064,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.5616, 0.60372, 0.64584, 0.702, 0.74412, 0.78624, 0.8424, 0.89856, 0.95472, 1.01088, 1.06704, 1.1232, 1.1934,
        1.2636, 1.3338,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.4972, 1.60949, 1.72178, 1.8715, 1.98379, 2.09608, 2.2458, 2.39552, 2.54524, 2.69496, 2.850669, 3.054288,
        3.257907, 3.461526, 3.665146,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("持续伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.32, 0.344, 0.368, 0.4, 0.424, 0.448, 0.48, 0.512, 0.544, 0.576, 0.608, 0.64, 0.68, 0.72, 0.76],
    }),
    action("爆裂伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        1.328, 1.4276, 1.5272, 1.66, 1.7596, 1.8592, 1.992, 2.1248, 2.2576, 2.3904, 2.5232, 2.656, 2.822, 2.988, 3.154,
      ],
    }),
  ];
  burstSkill = [
    action("泡影破裂伤害", AttackType.Burst, ElementType.Hydro, {
      atk: [
        4.424, 4.7558, 5.0876, 5.53, 5.8618, 6.1936, 6.636, 7.0784, 7.5208, 7.9632, 8.4056, 8.848, 9.401, 9.954, 10.507,
      ],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CHARGE_32P,
    {
      label: "「托付于命运吧!」",
      describe: "莫娜的水元素伤害加成获得额外提升，提升程度相当于她的元素充能效率的20%",
      effect: [
        { type: BuffType.HydroPrcent, getValue: (data) => data.chargeEfficiency * 0.2, actionOn: ActionOn.Indirect },
      ],
      enable: true,
    },
    {
      label: "元素爆发·星命定轨",
      describe: "星异持续时间内，提高目标对象受到的伤害。",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (data) => {
            return [42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 60, 60, 60, 60, 60][
              data.burstLevel + data.burstLevelAdd - 1
            ];
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "魔女的前夜礼·天步真原",
      describe:
        "队伍中自己的其他角色对敌人触发蒸发反应时，将消耗所有的「水星天的辉光」，每消耗一层都会使本次蒸发反应造成的伤害提升5%。",
      effect: [{ type: BuffType.AmplifiedRate, getValue: (_, s) => 5 * s }],
      enable: true,
      shareable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "「水星天的辉光」",
      target: BuffTarget.All,
    },
    {
      label: "1命·沉没的预言",
      describe:
        "队伍中自己的角色攻击命中处于星异状态下的敌人后，蒸发反应造成的伤害提升15%，月感电反应造成的伤害提升15%。此外，队伍中处于后台的角色触发上述效果时，伤害提升效果还会提升至原本的160%。",
      effect: [
        { type: BuffType.AmplifiedRate, getValue: (_, s) => 15 + s * 15 * 0.6 },
        { type: BuffType.MoonElectroPrcent, getValue: (_, s) => 15 + s * 15 * 0.6 },
      ],
      enable: true,
      shareable: true,
      stackable: true,
      stack: 1,
      limit: 1,
      stackType: "switch",
      stackText: "处于后台",
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·星月的连珠",
      describe: "莫娜的重击命中敌人时，还会使队伍中附近的所有角色的元素精通提升80点，持续12秒。",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·沉没的预言",
      describe: "队伍中所有角色攻击处于星异状态下的敌人时，暴击率提升15%",
      effect: [{ type: BuffType.GlobalCritcal, getValue: () => 15 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    {
      label: "4命·沉没的预言·魔导",
      describe: "队伍中所有魔导角色攻击处于星异状态下的敌人时，暴击伤害提升15%。",
      effect: [{ type: BuffType.GlobalCritcalHunt, getValue: () => 15 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
      shareCondition: ({ secondElement }) => secondElement === SecondElementType.Magus,
    },
    Constellation_E_5,
    {
      label: "6命·厄运的修辞",
      describe: "至多可以获得180%重击伤害加成。此外，对处于星异状态下的敌人，莫娜的重击将会造成原本200%的伤害。",
      effect: [
        { type: BuffType.StrongPrcent, getValue: () => 180 },
        { type: BuffType.StrongRate, getValue: (_, s) => 100 * s },
      ],
      enable: true,
      stack: 1,
      limit: 1,
      stackable: true,
      stackType: "switch",
      stackText: "星异状态",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![莫娜](https://enka.network/ui/UI_AvatarIcon_Mona.png) */
export const Mona = new MonaData();
