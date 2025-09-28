import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000049, "宵宫")
@Weapon(WeaponType.Bow)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [10164, 323, 615], 60, [10887, 396, 659])
@Icons("UI_AvatarIcon_Yoimiya")
export class YoimiyaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["烟火打扬", "焰硝庭火舞", "琉金云间草"];
  normalAttack = [
    action("一段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.3564, 0.3807, 0.405, 0.4374, 0.4617, 0.49005, 0.5265, 0.56295, 0.5994, 0.63585, 0.6723, 0.70875, 0.7452,
        0.78165, 0.8181,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.68376, 0.73038, 0.777, 0.83916, 0.88578, 0.94017, 1.0101, 1.08003, 1.14996, 1.21989, 1.28982, 1.35975,
        1.42968, 1.49961, 1.56954,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.888888, 0.949494, 1.0101, 1.090908, 1.151514, 1.222221, 1.31313, 1.404039, 1.494948, 1.585857, 1.676766,
        1.767675, 1.858584, 1.949493, 2.040402,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.4642, 0.49585, 0.5275, 0.5697, 0.60135, 0.638275, 0.68575, 0.733225, 0.7807, 0.828175, 0.87565, 0.923125,
        0.9706, 1.018075, 1.06555,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.05864, 1.13082, 1.203, 1.29924, 1.37142, 1.45563, 1.5639, 1.67217, 1.78044, 1.88871, 1.99698, 2.10525,
        2.21352, 2.32179, 2.43006,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("焰硝矢伤害", AttackType.Strong, ElementType.Pyro, {
      atk: [
        0.164, 0.1763, 0.1886, 0.205, 0.2173, 0.2296, 0.246, 0.2624, 0.2788, 0.2952, 0.3116, 0.328, 0.3485, 0.369,
        0.3895,
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
  elementSkill = [];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [
        1.272, 1.3674, 1.4628, 1.59, 1.6854, 1.7808, 1.908, 2.0352, 2.1624, 2.2896, 2.4168, 2.544, 2.703, 2.862, 3.021,
      ],
    }),
    action("琉金火光爆炸伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.22, 1.3115, 1.403, 1.525, 1.6165, 1.708, 1.83, 1.952, 2.074, 2.196, 2.318, 2.44, 2.5925, 2.745, 2.8975],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素战技·焰硝庭火舞",
      describe: "将宵宫的普通攻击发射的箭矢转为炽焰箭，造成的伤害转为火元素伤害，并提高普通攻击造成的伤害",
      effect: [
        { type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Pyro] },
        {
          type: BuffType.NormalRate,
          getValue: (data) => {
            return [
              37.9, 40.179, 42.449, 45.4, 47.67, 49.94, 52.891, 55.842, 58.793, 61.744, 64.695, 67.646, 70.597, 73.548,
              76.499,
            ][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: true,
    },
    {
      label: "袖火百景图",
      describe: "在焰硝庭火舞的持续期间内，宵宫的普通攻击命中后，将为宵宫提供2%火元素伤害加成。至多叠加10次",
      effect: [{ type: BuffType.PyroPrcent, getValue: (_, s) => s * 2 }],
      enable: true,
      stackable: true,
      stack: 10,
      limit: 10,
    },
    {
      label: "炎昼风物诗",
      describe:
        "施放琉金云间草后，附近的队伍中所有其它角色（不包括宵宫自己）攻击力提高10%。此外，依据宵宫自己施放琉金云间草时固有天赋「袖火百景图」的叠加层数，将额外提升上述的攻击力效果，每层提升1%攻击力",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 + s }],
      enable: false,
      shareable: true,
      stackable: true,
      stack: 10,
      limit: 10,
      stackText: "「袖火百景图」",
      target: BuffTarget.Other,
    },
    {
      label: "1命·赤玉琉金",
      describe: "琉金火光影响下的敌人在持续期间内被击败时，宵宫的攻击力提高20%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·万灯送火",
      describe: "宵宫的火元素伤害造成暴击后的6秒内，宵宫获得25%火元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 25 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![宵宫](https://enka.network/ui/UI_AvatarIcon_Yoimiya.png) */
export const Yoimiya = new YoimiyaData();
