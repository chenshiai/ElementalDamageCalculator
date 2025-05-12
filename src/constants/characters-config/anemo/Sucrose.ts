import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ANEMO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000043, "砂糖")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, 9244, 170, 703, 80)
@Icons("UI_AvatarIcon_Sucrose")
class SucroseData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·简式风灵作成", "风灵作成·陆叁零捌", "禁·风灵作成·柒伍同构贰型"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.335, 0.36, 0.385, 0.418, 0.443, 0.468, 0.502, 0.535, 0.569, 0.602, 0.636],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.306, 0.329, 0.352, 0.383, 0.406, 0.429, 0.459, 0.49, 0.521, 0.551, 0.582],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.384, 0.413, 0.442, 0.481, 0.509, 0.538, 0.577, 0.615, 0.654, 0.692, 0.731],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.479, 0.515, 0.551, 0.599, 0.635, 0.671, 0.719, 0.767, 0.815, 0.863, 0.91],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [1.2, 1.29, 1.38, 1.5, 1.59, 1.68, 1.8, 1.92, 2.04, 2.16, 2.28],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.123, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.11, 2.27, 2.43, 2.64, 2.8, 2.96, 3.17, 3.38, 3.59, 3.8, 4.01, 4.22, 4.49],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [1.48, 1.59, 1.7, 1.85, 1.96, 2.07, 2.22, 2.37, 2.52, 2.66, 2.81, 2.96, 3.15, 3.33],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.44, 0.473, 0.506, 0.55, 0.583, 0.616, 0.66, 0.7, 0.748, 0.792, 0.836, 0.88, 0.935, 0.99],
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
