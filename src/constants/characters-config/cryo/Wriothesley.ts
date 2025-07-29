import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  AttackType,
  BuffType,
  ElementType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import {
  Constellation_A_3,
  Constellation_Q_5,
  S_80_CRITALHUNT_38P,
} from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000086, "莱欧斯利")
@Weapon(WeaponType.Magic)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, 13593, 311, 763, 60)
@Icons("UI_AvatarIcon_Wriothesley")
export class WriothesleyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迅烈倾霜拳", "冰牙突驰", "黑金狼噬"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.518, 0.56, 0.602, 0.663, 0.705, 0.753, 0.819, 0.885, 0.952, 1.024, 1.096, 1.168, 1.241, 1.313],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.463, 0.497, 0.532, 0.578, 0.613, 0.647, 0.694, 0.74, 0.786, 0.832, 0.879, 0.925, 0.983, 1.041],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.672, 0.727, 0.782, 0.86, 0.915, 0.977, 1.063, 1.149, 1.235, 1.329, 1.423, 1.516, 1.61, 1.704],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Cryo, {
      atk: [0.379, 0.4099, 0.4407, 0.4848, 0.5157, 0.5509, 0.5994, 0.6479, 0.6964, 0.7493, 0.802, 0.855, 0.908, 0.961],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Cryo, {
      atk: [0.379, 0.4099, 0.4407, 0.4848, 0.5157, 0.5509, 0.5994, 0.6479, 0.6964, 0.7493, 0.802, 0.855, 0.908, 0.961],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [0.907, 0.981, 1.055, 1.161, 1.235, 1.319, 1.435, 1.551, 1.667, 1.794, 1.92, 2.047, 2.174, 2.3],
    }),
    action("重击", AttackType.Strong, ElementType.Cryo, {
      atk: [1.53, 1.644, 1.759, 1.912, 2.027, 2.147, 2.294, 2.447, 2.6, 2.753, 2.906, 3.059, 3.25, 3.442],
    }),
    action("6命·冰锥", AttackType.Strong, ElementType.Cryo, {
      atk: [1.53, 1.644, 1.759, 1.912, 2.027, 2.147, 2.294, 2.447, 2.6, 2.753, 2.906, 3.059, 3.25, 3.442],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2, 1.282, 1.361, 1.441],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4, 2.56, 2.72, 2.88],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3, 3.2, 3.4, 3.6],
    }),
  ];
  elementSkill = [];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Cryo, {
      atk: [1.272, 1.3674, 1.4628, 1.59, 1.6854, 1.7808, 1.908, 2.0352, 2.1624, 2.2896, 2.4168, 2.544, 2.703],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Cryo, {
      atk: [0.424, 0.4558, 0.4876, 0.53, 0.5618, 0.5936, 0.636, 0.6784, 0.7208, 0.7632, 0.8056, 0.848, 0.901],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "元素战技·寒烈的惩裁",
      describe: "生命值高于50%时，强化「迅烈倾霜拳」的斥逐拳，使其造成的伤害提升",
      effect: [
        {
          type: BuffType.NormalRate,
          getValue: (data) => {
            return [43.2, 45.8, 48.3, 51.7, 54.3, 56.9, 60.2, 63.6, 67, 70.3][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: true,
    },
    {
      label: "公理终有辩诉之日",
      describe:
        "莱欧斯利的生命值低于60%时，将获得「恩典之诫」，使下次迅烈倾霜拳的重击强化为惩戒·凌跃拳：不消耗体力，造成的伤害提升50%，解锁1命后提升200%",
      effect: [{ type: BuffType.StrongPrcent, getValue: (data) => (data.constellation >= 1 ? 200 : 50) }],
      enable: true,
    },
    {
      label: "罪业终有报偿之时",
      describe:
        "莱欧斯利的当前生命值提升或降低时，若莱欧斯利处于冰牙突驰的寒烈的惩裁状态下，寒烈的惩裁将获得一层「检偿之敕」效果，该效果至多叠加至5层，每层使莱欧斯利的攻击力提升6%",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 6 * s }],
      enable: true,
      stackable: true,
      stack: 5,
      limit: 5,
      stackText: "「检偿之敕」",
    },
    {
      label: "2命·予骄暴者以镣锁",
      describe: "施放黑金狼噬时，固有天赋「罪业终有报偿之时」的每层「检偿之敕」效果都将使造成的伤害提升40%",
      effect: [{ type: BuffType.BurstPrcent, getValue: (_, s) => 40 * s }],
      enable: true,
      stackable: true,
      stack: 5,
      limit: 5,
      stackText: "「检偿之敕」",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_A_3,
    Constellation_Q_5,
    {
      label: "6命·予无罪者以念抚",
      describe: "惩戒·凌跃拳的暴击率提升10%，暴击伤害提升80%",
      effect: [
        { type: BuffType.StrongCritcal, getValue: () => 10 },
        { type: BuffType.StrongCritcalHurt, getValue: () => 80 },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![莱欧斯利](https://enka.network/ui/UI_AvatarIcon_Wriothesley.png) */
export const Wriothesley = new WriothesleyData();
