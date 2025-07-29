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
@BaseData(Rarity.Five, 12858, 342, 784, 80)
@Icons("UI_AvatarIcon_Ayaka")
export class AyakaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["神里流·倾", "神里流·冰华", "神里流·霜灭"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.457, 0.494, 0.532, 0.585, 0.622, 0.665, 0.723, 0.781, 0.84, 0.904, 0.968],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.487, 0.526, 0.566, 0.623, 0.662, 0.708, 0.77, 0.832, 0.894, 0.962, 1.03],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.626, 0.677, 0.728, 0.801, 0.852, 0.91, 0.99, 1.07, 1.15, 1.238, 1.325],
    }),
    action("四段伤害·单次", AttackType.Normal, ElementType.Physical, {
      atk: [0.226, 0.245, 0.263, 0.29, 0.308, 0.329, 0.358, 0.387, 0.416, 0.448, 0.479],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.782, 0.845, 0.909, 1, 1.064, 1.136, 1.236, 1.336, 1.436, 1.545, 1.655],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Physical, {
      atk: [0.551, 0.596, 0.641, 0.705, 0.75, 0.801, 0.872, 0.942, 1.013, 1.09, 1.167],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.011, 1.093, 1.175, 1.264, 1.353],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [2.392, 2.571, 2.751, 2.99, 3.169, 3.349, 3.588, 3.827, 4.066, 4.305, 4.545, 4.784, 5.083],
    }),
  ];
  burstSkill = [
    action("切割伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.123, 1.207, 1.291, 1.404, 1.488, 1.572, 1.684, 1.797, 1.909, 2.021, 2.134, 2.246, 2.386],
    }),
    action("绽放伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [1.684, 1.81, 1.937, 2.106, 2.232, 2.358, 2.527, 2.695, 2.864, 3.032, 3.2, 3.369, 3.58],
    }),
    action("2命·霜见雪关扉", AttackType.Burst, ElementType.Cryo, {
      atk: [1.123, 1.207, 1.291, 1.404, 1.488, 1.572, 1.684, 1.797, 1.909, 2.021, 2.134, 2.246, 2.386].map(
        (i) => i * 0.2
      ),
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
