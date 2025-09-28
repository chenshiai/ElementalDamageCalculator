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
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000002, "神里绫华")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, [12858, 342, 784], 80, [13772, 419, 840])
@Icons("UI_AvatarIcon_Ayaka")
export class AyakaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["神里流·倾", "神里流·冰华", "神里流·霜灭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.457253, 0.494472, 0.53169, 0.584859, 0.622077, 0.664613, 0.723098, 0.781584, 0.84007, 0.903873, 0.967676,
        1.031479, 1.095281, 1.159084, 1.222887,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.486846, 0.526473, 0.5661, 0.62271, 0.662337, 0.707625, 0.769896, 0.832167, 0.894438, 0.96237, 1.030302,
        1.098234, 1.166166, 1.234098, 1.30203,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.626218, 0.677189, 0.72816, 0.800976, 0.851947, 0.9102, 0.990298, 1.070395, 1.150493, 1.237872, 1.325251,
        1.41263, 1.50001, 1.587389, 1.674768,
      ],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.226464, 0.244897, 0.26333, 0.289663, 0.308096, 0.329163, 0.358129, 0.387095, 0.416061, 0.447661, 0.479261,
        0.51086, 0.54246, 0.574059, 0.605659,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.781817, 0.845454, 0.90909, 1, 1.063635, 1.136363, 1.236362, 1.336362, 1.436362, 1.545453, 1.654544, 1.763635,
        1.872725, 1.981816, 2.090907,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.55126, 0.59613, 0.641, 0.7051, 0.74997, 0.80125, 0.87176, 0.94227, 1.01278, 1.0897, 1.16662, 1.24354, 1.32046,
        1.39738, 1.4743,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.639324, 0.691362, 0.7434, 0.81774, 0.869778, 0.92925, 1.011024, 1.092798, 1.174572, 1.26378, 1.352988,
        1.442196, 1.531404, 1.620612, 1.70982,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.278377, 1.382431, 1.486485, 1.635134, 1.739187, 1.858106, 2.02162, 2.185133, 2.348646, 2.527025, 2.705403,
        2.883781, 3.062159, 3.240537, 3.418915,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.596762, 1.726731, 1.8567, 2.04237, 2.172339, 2.320875, 2.525112, 2.729349, 2.933586, 3.15639, 3.379194,
        3.601998, 3.824802, 4.047606, 4.27041,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        2.392, 2.5714, 2.7508, 2.99, 3.1694, 3.3488, 3.588, 3.8272, 4.0664, 4.3056, 4.5448, 4.784, 5.083, 5.382, 5.681,
      ],
    }),
  ];
  burstSkill = [
    action("切割伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.123, 1.207225, 1.29145, 1.40375, 1.487975, 1.5722, 1.6845, 1.7968, 1.9091, 2.0214, 2.1337, 2.246, 2.386375,
        2.52675, 2.667125,
      ],
    }),
    action("绽放伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.6845, 1.810837, 1.937175, 2.105625, 2.231962, 2.3583, 2.52675, 2.6952, 2.86365, 3.0321, 3.20055, 3.369,
        3.579562, 3.790125, 4.000687,
      ],
    }),
    action("2命·霜见雪关扉", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.123, 1.207225, 1.29145, 1.40375, 1.487975, 1.5722, 1.6845, 1.7968, 1.9091, 2.0214, 2.1337, 2.246, 2.386375,
        2.52675, 2.667125,
      ].map((i) => i * 0.2),
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "神里流·霰步",
      describe: "结束霰步现身时，使神里绫华在短时间内获得冰元素附魔；获得18%冰元素伤害加成",
      effect: [
        { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Cryo], actionOn: ActionOn.Front },
        { type: BuffType.CryoPrcent, getValue: () => 18 },
      ],
      enable: true,
    },
    {
      label: "天罪国罪镇词",
      describe: "施放神里流·冰华后，神里绫华的普通攻击与重击造成的伤害提升30%",
      effect: [
        { type: BuffType.NormalPrcent, getValue: () => 30 },
        { type: BuffType.StrongPrcent, getValue: () => 30 },
      ],
      enable: false,
    },
    Constellation_Q_3,
    {
      label: "4命·盈缺流返",
      describe: "敌人受到神里流·霜灭的霜见雪关扉造成的伤害后，防御力降低30%",
      effect: [{ type: BuffType.ReduceArmour, getValue: () => 30 }],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·间水月",
      describe: "每过10秒，神里绫华会获得「薄冰舞踏」，使重击造成的伤害提高298%",
      effect: [{ type: BuffType.StrongPrcent, getValue: () => 298 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![神里绫华](https://enka.network/ui/UI_AvatarIcon_Ayaka.png) */
export const Ayaka = new AyakaData();
