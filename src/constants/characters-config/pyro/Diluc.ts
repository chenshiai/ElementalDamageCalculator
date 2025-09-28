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

@EnKaId(10000016, "迪卢克")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, [12981, 335, 784], 40, [13903, 410, 840])
@Icons("UI_AvatarIcon_Diluc")
export class DilucData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["淬炼之剑", "逆焰之刃", "黎明"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.89698, 0.97, 1.043, 1.1473, 1.22031, 1.30375, 1.41848, 1.53321, 1.64794, 1.7731, 1.916513, 2.085166, 2.253819,
        2.422472, 2.606457,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.87634, 0.94767, 1.019, 1.1209, 1.19223, 1.27375, 1.38584, 1.49793, 1.61002, 1.7323, 1.872412, 2.037185,
        2.201957, 2.366729, 2.546481,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.98814, 1.06857, 1.149, 1.2639, 1.34433, 1.43625, 1.56264, 1.68903, 1.81542, 1.9533, 2.111287, 2.297081,
        2.482874, 2.668667, 2.871351,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.33988, 1.44894, 1.558, 1.7138, 1.82286, 1.9475, 2.11888, 2.29026, 2.46164, 2.6486, 2.862825, 3.114754,
        3.366682, 3.618611, 3.893442,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.688, 0.744, 0.8, 0.88, 0.936, 1, 1.088, 1.176, 1.264, 1.36, 1.47, 1.59936, 1.72872, 1.85808, 1.9992],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.247, 1.3485, 1.45, 1.595, 1.6965, 1.8125, 1.972, 2.1315, 2.291, 2.465, 2.664375, 2.89884, 3.133305, 3.36777,
        3.62355,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.895054, 0.967907, 1.04076, 1.144836, 1.217689, 1.30095, 1.415434, 1.529917, 1.644401, 1.769292, 1.894183,
        2.019074, 2.143966, 2.268857, 2.393748,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.789728, 1.935403, 2.081079, 2.289187, 2.434862, 2.601349, 2.830267, 3.059186, 3.288105, 3.537834, 3.787564,
        4.037293, 4.287023, 4.536752, 4.786482,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        2.235467, 2.417423, 2.59938, 2.859318, 3.041275, 3.249225, 3.535157, 3.821089, 4.10702, 4.418946, 4.730872,
        5.042797, 5.354723, 5.666648, 5.978574,
      ],
    }),
  ];
  elementSkill = [
    action("一段伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.944, 1.0148, 1.0856, 1.18, 1.2508, 1.3216, 1.416, 1.5104, 1.6048, 1.6992, 1.7936, 1.888, 2.006, 2.124, 2.242,
      ],
    }),
    action(
      "二段伤害",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [
          0.976, 1.0492, 1.1224, 1.22, 1.2932, 1.3664, 1.464, 1.5616, 1.6592, 1.7568, 1.8544, 1.952, 2.074, 2.196,
          2.318,
        ],
      },
      "Diluc"
    ),
    action(
      "三段伤害",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [
          1.288, 1.3846, 1.4812, 1.61, 1.7066, 1.8032, 1.932, 2.0608, 2.1896, 2.3184, 2.4472, 2.576, 2.737, 2.898,
          3.059,
        ],
      },
      "Diluc"
    ),
  ];
  burstSkill = [
    action("斩击伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [2.04, 2.193, 2.346, 2.55, 2.703, 2.856, 3.06, 3.264, 3.468, 3.672, 3.876, 4.08, 4.335, 4.59, 4.845],
    }),
    action("持续伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.6, 0.645, 0.69, 0.75, 0.795, 0.84, 0.9, 0.96, 1.02, 1.08, 1.14, 1.2, 1.275, 1.35, 1.425],
    }),
    action("爆裂伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [2.04, 2.193, 2.346, 2.55, 2.703, 2.856, 3.06, 3.264, 3.468, 3.672, 3.876, 4.08, 4.335, 4.59, 4.845],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "元素爆发·熔毁之翼",
      describe: "黎明提供的火元素附魔持续时间延长4秒；此外，在效果持续期间，迪卢克获得20%火元素伤害加成",
      effect: [
        { type: BuffType.PyroPrcent, getValue: () => 20 },
        { type: BuffType.Enchanting, getValue: () => EnchantingType[ElementType.Pyro], actionOn: ActionOn.Front },
      ],
      enable: false,
    },
    {
      label: "1命·罪罚裁断",
      describe: "对生命值高于50%的敌人，迪卢克造成的伤害提高15%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·炙热余烬",
      describe: "迪卢克受到伤害时，攻击力提高10%，攻击速度提高5%， 该效果至多叠加3层",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 * s }],
      enable: false,
      stackable: true,
      stack: 3,
      limit: 3,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·流火焦灼",
      describe: "施放逆焰之刃的2秒后，下一段逆焰之刃的伤害提高40%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 40, special: "Diluc" }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·清算黑暗的炎之剑",
      describe: "施放逆焰之刃后，接下来6秒内的2次普通攻击的攻击速度提升30%，造成伤害提高30%",
      effect: [{ type: BuffType.NormalPrcent, getValue: () => 30 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![迪卢克](https://enka.network/ui/UI_AvatarIcon_Diluc.png) */
export const Diluc = new DilucData();
