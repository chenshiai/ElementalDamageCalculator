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
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000031, "菲谢尔")
@Weapon(WeaponType.Bow)
@Element(ElementType.Electro, SecondElementType.Magus)
@BaseData(Rarity.Four, [9189, 244, 594], 60, [9825, 306, 635])
@Icons("UI_AvatarIcon_Fischl")
export class FischlData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["罪灭之矢", "夜巡影翼", "至夜幻现"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.44118, 0.47709, 0.513, 0.5643, 0.60021, 0.64125, 0.69768, 0.75411, 0.81054, 0.8721, 0.93366, 0.99522, 1.05678,
        1.11834, 1.1799,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.46784, 0.50592, 0.544, 0.5984, 0.63648, 0.68, 0.73984, 0.79968, 0.85952, 0.9248, 0.99008, 1.05536, 1.12064,
        1.18592, 1.2512,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.58136, 0.62868, 0.676, 0.7436, 0.79092, 0.845, 0.91936, 0.99372, 1.06808, 1.1492, 1.23032, 1.31144, 1.39256,
        1.47368, 1.5548,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.57706, 0.62403, 0.671, 0.7381, 0.78507, 0.83875, 0.91256, 0.98637, 1.06018, 1.1407, 1.22122, 1.30174, 1.38226,
        1.46278, 1.5433,
      ],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.72068, 0.77934, 0.838, 0.9218, 0.98046, 1.0475, 1.13968, 1.23186, 1.32404, 1.4246, 1.52516, 1.62572, 1.72628,
        1.82684, 1.9274,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("噬星魔鸦", AttackType.Strong, ElementType.Electro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945].map(
        (i) => i * 1.527
      ),
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
  elementSkill = [
    action("奥兹攻击伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        0.888, 0.9546, 1.0212, 1.11, 1.1766, 1.2432, 1.332, 1.4208, 1.5096, 1.5984, 1.6872, 1.776, 1.887, 1.998, 2.109,
      ],
    }),
    action("召唤伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.1544, 1.24098, 1.32756, 1.443, 1.52958, 1.61616, 1.7316, 1.84704, 1.96248, 2.07792, 2.19336, 2.3088, 2.4531,
        2.5974, 2.7417,
      ],
    }),
  ];
  burstSkill = [
    action("落雷伤害", AttackType.Burst, ElementType.Electro, {
      atk: [2.08, 2.236, 2.392, 2.6, 2.756, 2.912, 3.12, 3.328, 3.536, 3.744, 3.952, 4.16, 4.42, 4.68, 4.94],
    }),
  ];
  otherSkill = [
    action("断罪雷影", AttackType.Skill, ElementType.Electro, {
      atk: [0.8],
    }),
    action("1命·幽邃鸦眼", AttackType.Normal, ElementType.Physical, {
      atk: [0.22],
    }),
    action("4命·皇女幻绮谭", AttackType.Burst, ElementType.Electro, {
      atk: [2.22],
    }),
    action("6命·永夜之禽", AttackType.Skill, ElementType.Electro, {
      atk: [0.3],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "魔女的前夜礼·宵世幻奏·超载",
      describe:
        "奥兹在场上时，队伍中附近的角色触发超载反应后的10秒内，菲谢尔与队伍中附近的当前场上其他角色的攻击力提升22.5%。",
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: () => 22.5,
        },
      ],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation < 6,
    },
    {
      label: "魔女的前夜礼·宵世幻奏·感电",
      describe:
        "奥兹在场上时，队伍中附近的角色触发感电或月感电反应后的10秒内，菲谢尔与队伍中附近的当前场上其他角色元素精通提升90点。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 90,
        },
      ],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation < 6,
    },
    {
      label: "2命·圣裁影羽",
      describe: "施放夜巡影翼时，能额外造成200%攻击力的伤害",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * 2,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·魔女的前夜礼·宵世幻奏·超载",
      describe:
        "奥兹在场上时，队伍中附近的角色触发超载反应后的10秒内，菲谢尔与队伍中附近的当前场上其他角色的攻击力提升45%。",
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: () => 45,
        },
      ],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·魔女的前夜礼·宵世幻奏·感电",
      describe:
        "奥兹在场上时，队伍中附近的角色触发感电或月感电反应后的10秒内，菲谢尔与队伍中附近的当前场上其他角色元素精通提升180点。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 180,
        },
      ],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![菲谢尔](https://enka.network/ui/UI_AvatarIcon_Fischl.png) */
export const Fischl = new FischlData();
