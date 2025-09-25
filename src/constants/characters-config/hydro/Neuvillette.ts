import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Constellation_A_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000087, "那维莱特")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro)
@BaseData(Rarity.Five, [14695, 208, 576], 70, [15740, 255, 617])
@Icons("UI_AvatarIcon_Neuvillette")
export class NeuvilletteData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["如水从平", "泪水啊，我必偿还", "潮水啊，我已归来"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.545768, 0.586701, 0.627633, 0.68221, 0.723143, 0.764075, 0.818652, 0.873229, 0.927806, 0.982382, 1.036959,
        1.091536, 1.159757, 1.227978, 1.296199,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.462456, 0.49714, 0.531824, 0.57807, 0.612754, 0.647438, 0.693684, 0.73993, 0.786175, 0.832421, 0.878666,
        0.924912, 0.982719, 1.040526, 1.098333,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.723376, 0.777629, 0.831882, 0.90422, 0.958473, 1.012726, 1.085064, 1.157402, 1.229739, 1.302077, 1.374414,
        1.446752, 1.537174, 1.627596, 1.718018,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.368, 1.4706, 1.5732, 1.71, 1.8126, 1.9152, 2.052, 2.1888, 2.3256, 2.4624, 2.5992, 2.736, 2.907, 3.078, 3.249,
      ],
    }),
    action(
      "重击·衡平推裁伤害",
      AttackType.Strong,
      ElementType.Hydro,
      {
        hp: [
          0.073186, 0.079143, 0.0851, 0.09361, 0.099567, 0.106375, 0.115736, 0.125097, 0.134458, 0.14467, 0.154882,
          0.165094, 0.175306, 0.185518, 0.19573,
        ],
      },
      "Neuvillette"
    ),
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
    action("技能伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [
        0.12864, 0.138288, 0.147936, 0.1608, 0.170448, 0.180096, 0.19296, 0.205824, 0.218688, 0.231552, 0.244416,
        0.25728, 0.27336, 0.28944, 0.30552,
      ],
    }),
    action("灵息之刺伤害", AttackType.Other, ElementType.Hydro, {
      atk: [
        0.208, 0.2236, 0.2392, 0.26, 0.2756, 0.2912, 0.312, 0.3328, 0.3536, 0.3744, 0.3952, 0.416, 0.442, 0.468, 0.494,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.222578, 0.239272, 0.255965, 0.278223, 0.294916, 0.31161, 0.333868, 0.356125, 0.378383, 0.400641, 0.422899,
        0.445157, 0.472979, 0.500801, 0.528624,
      ],
    }),
    action("水瀑伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [
        0.091055, 0.097884, 0.104713, 0.113818, 0.120647, 0.127477, 0.136582, 0.145688, 0.154793, 0.163898, 0.173004,
        0.182109, 0.193491, 0.204873, 0.216255,
      ],
    }),
  ];
  otherSkill = [
    action(
      "6命·洪流伤害",
      AttackType.Strong,
      ElementType.Hydro,
      {
        hp: [0.1],
      },
      "Neuvillette"
    ),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "古海孑遗的权柄",
      describe:
        "队伍中的角色对敌人触发蒸发、冻结、感电、绽放、水元素扩散或水元素结晶反应时，将为那维莱特产生持续30秒，至多叠加3层的「遗龙之荣」效果，使重击·衡平推裁造成原本110%/125%/160%的伤害",
      effect: [{ type: BuffType.StrongRate, getValue: (_, s) => [0, 10, 25, 60][s], special: "Neuvillette" }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "「遗龙之荣」",
    },
    {
      label: "至高仲裁的纪律",
      describe:
        "基于当前生命值超出生命值上限30%的部分，每1%使那维莱特获得0.6%水元素伤害加成，通过这种方式，至多提升30%",
      effect: [{ type: BuffType.HydroPrcent, getValue: (_, s) => Math.min(30, Math.max(s - 30, 0) * 0.6) }],
      enable: true,
      stack: 80,
      limit: 100,
      shareable: true,
      stackText: "当前生命值百分比",
    },
    {
      label: "2命·律法的命诫",
      describe: "每存在一层「遗龙之荣」，就使重击·衡平推裁的暴击伤害提升14%，至多通过这种方式提升42%",
      effect: [{ type: BuffType.StrongCritcalHurt, getValue: (_, s) => s * 14, special: "Neuvillette" }],
      enable: true,
      stack: 3,
      limit: 3,
      stackable: true,
      stackText: "「遗龙之荣」",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_A_3,
    Constellation_Q_5,
  ];
}

/** ![那维莱特](https://enka.network/ui/UI_AvatarIcon_Neuvillette.png) */
export const Neuvillette = new NeuvilletteData();
