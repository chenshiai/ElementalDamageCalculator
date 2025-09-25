import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000086, "莱欧斯利")
@Weapon(WeaponType.Magic)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [13593, 311, 763], 60, [14559, 381, 817])
@Icons("UI_AvatarIcon_Wriothesley")
export class WriothesleyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迅烈倾霜拳", "冰牙突驰", "黑金狼噬"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.533596, 0.577028, 0.62046, 0.682506, 0.725938, 0.775575, 0.843826, 0.912076, 0.980327, 1.054782, 1.129237,
        1.203692, 1.278148, 1.352603, 1.427058,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.517987, 0.560148, 0.60231, 0.662541, 0.704703, 0.752888, 0.819142, 0.885396, 0.95165, 1.023927, 1.096204,
        1.168481, 1.240759, 1.313036, 1.385313,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.672228, 0.726944, 0.78166, 0.859826, 0.914542, 0.977075, 1.063058, 1.14904, 1.235023, 1.328822, 1.422621,
        1.51642, 1.61022, 1.704019, 1.797818,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.379041, 0.409893, 0.440745, 0.48482, 0.515672, 0.550931, 0.599413, 0.647895, 0.696377, 0.749266, 0.802156,
        0.855045, 0.907935, 0.960824, 1.013713,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Cryo, {
      atk: [
        0.90742, 0.98128, 1.05514, 1.160654, 1.234514, 1.318925, 1.43499, 1.551056, 1.667121, 1.793738, 1.920355,
        2.046972, 2.173588, 2.300205, 2.426822,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Cryo, {
      atk: [
        1.5296, 1.64432, 1.75904, 1.912, 2.02672, 2.14144, 2.2944, 2.44736, 2.60032, 2.75328, 2.90624, 3.0592, 3.2504,
        3.4416, 3.6328,
      ],
    }),
    action("6命·冰锥", AttackType.Strong, ElementType.Cryo, {
      atk: [
        1.5296, 1.64432, 1.75904, 1.912, 2.02672, 2.14144, 2.2944, 2.44736, 2.60032, 2.75328, 2.90624, 3.0592, 3.2504,
        3.4416, 3.6328,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Cryo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Cryo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.272, 1.3674, 1.4628, 1.59, 1.6854, 1.7808, 1.908, 2.0352, 2.1624, 2.2896, 2.4168, 2.544, 2.703, 2.862, 3.021,
      ],
    }),
    action("流涌之刃伤害", AttackType.Other, ElementType.Cryo, {
      atk: [
        0.424, 0.4558, 0.4876, 0.53, 0.5618, 0.5936, 0.636, 0.6784, 0.7208, 0.7632, 0.8056, 0.848, 0.901, 0.954, 1.007,
      ],
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
            return [
              43.1695, 45.7545, 48.3395, 51.7, 54.285, 56.87, 60.2305, 63.591, 66.9515, 70.312, 80.3935, 83.754,
              87.1145,
            ][data.skillLevel + data.skillLevelAdd - 1];
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
