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
import { A_80_ANEMO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000043, "砂糖")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo, SecondElementType.Magus)
@BaseData(Rarity.Four, [9244, 170, 703], 80, [9883, 213, 752])
@Icons("UI_AvatarIcon_Sucrose")
export class SucroseData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["简式风灵作成", "风灵作成·陆叁零捌", "禁·风灵作成·柒伍同构贰型"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.33464, 0.359738, 0.384836, 0.4183, 0.443398, 0.468496, 0.50196, 0.535424, 0.568888, 0.602352, 0.635816,
        0.66928, 0.71111, 0.75294, 0.79477,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.30616, 0.329122, 0.352084, 0.3827, 0.405662, 0.428624, 0.45924, 0.489856, 0.520472, 0.551088, 0.581704,
        0.61232, 0.65059, 0.68886, 0.72713,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.38448, 0.413316, 0.442152, 0.4806, 0.509436, 0.538272, 0.57672, 0.615168, 0.653616, 0.692064, 0.730512,
        0.76896, 0.81702, 0.86508, 0.91314,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.479176, 0.515114, 0.551052, 0.59897, 0.634908, 0.670846, 0.718764, 0.766682, 0.814599, 0.862517, 0.910434,
        0.958352, 1.018249, 1.078146, 1.138043,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [
        1.2016, 1.29172, 1.38184, 1.502, 1.59212, 1.68224, 1.8024, 1.92256, 2.04272, 2.16288, 2.28304, 2.4032, 2.5534,
        2.7036, 2.8538,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.112, 2.2704, 2.4288, 2.64, 2.7984, 2.9568, 3.168, 3.3792, 3.5904, 3.8016, 4.0128, 4.224, 4.488, 4.752, 5.016,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.48, 1.591, 1.702, 1.85, 1.961, 2.072, 2.22, 2.368, 2.516, 2.664, 2.812, 2.96, 3.145, 3.33, 3.515],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.704, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99, 1.045],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.704, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99, 1.045],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.704, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99, 1.045],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.704, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99, 1.045],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ANEMO_24P,
    {
      label: "触媒置换术",
      describe: "砂糖触发扩散反应时，使队伍中所有对应元素类型的角色（不包括砂糖自己）基础元素精通提升50点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 50 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "小小的慧风",
      describe:
        "风灵作成·陆叁零捌或禁·风灵作成·染伍同构贰型命中敌人时，基于砂糖基础元素精通的20%，为队伍中所有角色（不包括砂糖自己）提供非基础元素精通加成",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => data.elementalMystery * 0.2,
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "魔女的前夜礼·七循之理",
      describe: `召唤小型风灵后的15秒内，队伍中附近的角色的普通攻击、重击、下落攻击、元素战技和元素爆发造成的伤害提升5.71428%。`,
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 5.71428 },
        { type: BuffType.StrongPrcent, getValue: () => 5.71428 },
        { type: BuffType.FallingPrcent, getValue: () => 5.71428 },
        { type: BuffType.SkillPrcent, getValue: () => 5.71428 },
        { type: BuffType.BurstPrcent, getValue: () => 5.71428 }
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "魔女的前夜礼·七循之理·魔导",
      describe: `召唤大型风灵后的20秒内，队伍中附近的魔导角色的普通攻击、重击、下落攻击、元素战技和元素爆发造成的伤害提升7.14285%`,
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 7.14285 },
        { type: BuffType.StrongPrcent, getValue: () => 7.14285 },
        { type: BuffType.FallingPrcent, getValue: () => 7.14285 },
        { type: BuffType.SkillPrcent, getValue: () => 7.14285 },
        { type: BuffType.BurstPrcent, getValue: () => 7.14285 }
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      shareCondition: ({ secondElement }) => secondElement === SecondElementType.Magus 
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·混元熵增论·火增伤",
      describe:
        "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 20 }],
      condition: ({ constellation }) => constellation >= 6,
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "6命·混元熵增论·冰增伤",
      describe:
        "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
      effect: [{ type: BuffType.CryoPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "6命·混元熵增论·水增伤",
      describe:
        "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 20 }],
      condition: ({ constellation }) => constellation >= 6,
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "6命·混元熵增论·雷增伤",
      describe:
        "禁·风灵作成·柒伍同构贰型如果发生了元素转化，则使队伍中所有角色在技能持续时间内获得20%的对应元素伤害加成",
      effect: [{ type: BuffType.ElectroPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.All,
    },
  ];
}

/** ![砂糖](https://enka.network/ui/UI_AvatarIcon_Sucrose.png) */
export const Sucrose = new SucroseData();
