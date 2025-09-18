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
import { S_80_MYSTERY_115, Constellation_Q_3, Constellation_E_5 } from "../buffs";

@EnKaId(10000119, "菈乌玛")
@Weapon(WeaponType.Magic)
@Element(ElementType.Dendro, SecondElementType.Moon)
@BaseData(Rarity.Five, [10654, 255, 669], 60, [11411, 312, 716])
@Icons("UI_AvatarIcon_Lauma")
class LawumaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["林麓旅踏", "圣言述咏·终宵永眠", "圣言述咏·众心为月"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.337024, 0.362301, 0.387578, 0.42128, 0.446557, 0.471834, 0.505536, 0.539238, 0.572941, 0.606643, 0.640346,
        0.674048, 0.716176, 0.758304, 0.80432,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.318048, 0.341902, 0.365755, 0.39756, 0.421414, 0.445267, 0.477072, 0.508877, 0.540682, 0.572486, 0.604291,
        0.636096, 0.675852, 0.715608, 0.755364,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Dendro, {
      atk: [
        0.444968, 0.478341, 0.511713, 0.55621, 0.589583, 0.622955, 0.667452, 0.711949, 0.756446, 0.800942, 0.845439,
        0.889936, 0.945557, 1.001178, 1.056799,
      ],
    }),
    action("唤灵之祷伤害", AttackType.Strong, ElementType.Dendro, {
      atk: [
        1.2904, 1.38718, 1.48396, 1.613, 1.70978, 1.80656, 1.9356, 2.06464, 2.19368, 2.32272, 2.45176, 2.5808, 2.7421,
        2.9034, 3.0647,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Dendro, {
      atk: [
        0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2, 1.281952, 1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4, 2.563361, 2.721919, 2.880478, 3.39036],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Dendro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3, 3.201776, 3.399824, 3.597872, 3.79592],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        1.216, 1.3072, 1.3984, 1.52, 1.6112, 1.7024, 1.824, 1.9456, 2.0672, 2.1888, 2.3104, 2.432, 2.584, 2.736, 2.888,
      ],
    }),
    action("长按一段伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        1.5808, 1.69936, 1.81792, 1.976, 2.09456, 2.21312, 2.3712, 2.52928, 2.68736, 2.84544, 3.00352, 3.1616, 3.3592,
        3.5568, 3.7544,
      ],
    }),
    action("长按二段伤害(1草露)", AttackType.Moon, ElementType.MoonSwirl, {
      em: [1.52, 1.634, 1.748, 1.9, 2.014, 2.128, 2.28, 2.432, 2.584, 2.736, 2.888, 3.04, 3.23, 3.42, 3.61],
    }),
    action("长按二段伤害(2草露)", AttackType.Moon, ElementType.MoonSwirl, {
      em: [1.52, 1.634, 1.748, 1.9, 2.014, 2.128, 2.28, 2.432, 2.584, 2.736, 2.888, 3.04, 3.23, 3.42, 3.61].map(
        (item) => item * 2
      ),
    }),
    action("长按二段伤害(3草露)", AttackType.Moon, ElementType.MoonSwirl, {
      em: [1.52, 1.634, 1.748, 1.9, 2.014, 2.128, 2.28, 2.432, 2.584, 2.736, 2.888, 3.04, 3.23, 3.42, 3.61].map(
        (item) => item * 3
      ),
    }),
    action("霜林圣域攻击伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04, 2.16, 2.28],
      em: [1.92, 2.064, 2.208, 2.4, 2.544, 2.688, 2.88, 3.072, 3.264, 3.456, 3.648, 3.84, 4.08, 4.32, 4.56],
    }),
  ];
  burstSkill = [
    action("绽放/超/烈绽放反应伤害提升", AttackType.Added, ElementType.None, {
      em: [
        2.7776, 2.98592, 3.19424, 3.472, 3.68032, 3.88864, 4.1664, 4.44416, 4.72192, 4.99968, 5.27744, 5.5552, 5.9024,
        6.2496, 6.5968,
      ],
    }),
    action("月绽放反应伤害提升", AttackType.Added, ElementType.None, {
      em: [
        2.2224, 2.38908, 2.55576, 2.778, 2.94468, 3.11136, 3.3336, 3.55584, 3.77808, 4.00032, 4.22256, 4.4448, 4.7226,
        5.0004, 5.2782,
      ],
    }),
  ];
  otherSkill = [
    action("1命·「生之纺线」治疗量", AttackType.Heal, ElementType.None, {
      em: [5],
    }),
    action("2命·绽放/超/烈绽放反应伤害提升", AttackType.Added, ElementType.None, {
      em: [5],
    }),
    action("2命·月绽放反应伤害提升", AttackType.Added, ElementType.None, {
      em: [4],
    }),
    action("6命·霜林圣域额外伤害", AttackType.Moon, ElementType.MoonSwirl, {
      em: [1.85],
    }),
    action("6命·普通攻击转化伤害", AttackType.Moon, ElementType.MoonSwirl, {
      em: [1.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_MYSTERY_115,
    {
      label: "初始元素精通+200",
      describe: "菈乌玛自带200点元素精通。",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: () => 200,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
    },
    {
      label: "奉向霜夜的明光",
      describe: `月兆·满辉：施放元素战技后，队伍中附近的所有角色造成的月绽放反应伤害，暴击率提升10%，暴击伤害提升20%`,
      effect: [
        {
          type: BuffType.MoonSwirlCritcal,
          getValue: () => 10,
        },
        {
          type: BuffType.MoonSwirlCritcalHurt,
          getValue: () => 20,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "奉向甘泉的沐濯",
      describe: `菈乌玛的每点元素精通，元素战技造成的伤害提升0.04%，通过这种方式至多提升32%。`,
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => {
            return Math.min(32, (data.elementalMystery + data.elementalMystery_NT) * 0.04);
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      target: BuffTarget.Self,
    },
    {
      label: "月兆祝赐·千籁恩宠",
      describe:
        "队伍中的角色触发绽放反应时，将转为触发月绽放反应，且基于菈乌玛的元素精通，提升队伍中角色造成的月绽放反应的基础伤害：每点元素精通都将提升0.0175%月绽放反应的基础伤害，至多通过这种方式提升14%伤害。",
      effect: [
        {
          type: BuffType.MoonSwirlRate,
          getValue: (data) => Math.min(14, (data.elementalMystery + data.elementalMystery_NT) * 0.0175),
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      target: BuffTarget.All,
      shareable: true,
    },
    {
      label: "霜林圣域",
      describe: "菈乌玛的元素战技或霜林圣域的攻击命中敌人时，将使该敌人的草元素抗性与水元素抗性降低",
      effect: [
        {
          type: BuffType.EnemyDendroResistance,
          getValue(data) {
            let a = [2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 28, 31, 34, 37, 40][
              data.skillLevel + data.skillLevelAdd - 1
            ];
            return -a;
          },
        },
        {
          type: BuffType.EnemyHydroResistance,
          getValue(data) {
            let a = [2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 28, 31, 34, 37, 40][
              data.skillLevel + data.skillLevelAdd - 1
            ];
            return -a;
          },
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "「苍色祷歌」",
      describe:
        "队伍中附近的角色造成绽放、超绽放、烈绽放、月绽放反应伤害时，将消耗一层「苍色祷歌」，提升造成的伤害，提升值基于菈乌玛的元素精通。上述伤害同时命中多名敌人时，会依据命中敌人的数量消耗「苍色祷歌」层数。",
      effect: [
        {
          type: BuffType.MoonSwirlFixed,
          getValue(data) {
            let a = [
              2.2224, 2.38908, 2.55576, 2.778, 2.94468, 3.11136, 3.3336, 3.55584, 3.77808, 4.00032, 4.22256, 4.4448,
              4.7226, 5.0004, 5.2782,
            ][data.burstLevel + data.burstLevelAdd - 1];
            return (data.elementalMystery + data.elementalMystery_NT) * a;
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·「纺出那终北的告诫与述说」",
      describe:
        "「苍色祷歌」的效果提升：队伍中附近的所有角色造成的月绽放反应伤害额外提升，提升值相当于菈乌玛元素精通的400%。",
      effect: [
        {
          type: BuffType.MoonSwirlFixed,
          getValue(data) {
            return (data.elementalMystery + data.elementalMystery_NT) * 4;
          },
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 2,
      target: BuffTarget.All,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·「我愿将这血与泪奉予月明」",
      describe: "月兆·满辉：队伍中附近的所有角色造成的月绽放反应伤害擢升25%。",
      effect: [
        {
          type: BuffType.MoonSwirlPromote,
          getValue: () => 25,
        },
      ],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
      target: BuffTarget.All,
    },
  ];
}

/** ![菈乌玛](https://enka.network/ui/UI_AvatarIcon_Lawuma.png) */
export const Lawuma = new LawumaData();
