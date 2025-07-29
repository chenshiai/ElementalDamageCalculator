import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_HP_28P } from "../buffs";

@EnKaId(10000079, "迪希雅")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, 15678, 266, 628, 70)
@Icons("UI_AvatarIcon_Dehya")
export class DehyaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["拂金剑斗术", "熔铁流狱", "炎啸狮子咬"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.621, 0.672, 0.722, 0.795, 0.845, 0.903, 0.982, 1.062, 1.141, 1.228, 1.315],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.617, 0.667, 0.718, 0.789, 0.84, 0.897, 0.976, 1.055, 1.134, 1.22, 1.306],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.766, 0.829, 0.891, 0.981, 1.043, 1.114, 1.212, 1.31, 1.408, 1.515, 1.622],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.953, 1.031, 1.108, 1.219, 1.296, 1.385, 1.507, 1.629, 1.751, 1.884, 2.017],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.563, 0.609, 0.655, 0.721, 0.766, 0.819, 0.901, 0.963, 1.035, 1.114, 1.192],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.02, 1.1, 1.18, 1.3, 1.39, 1.48, 1.61, 1.74, 1.87, 2.01, 2.16],
    }),
    action("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.7459, 0.8066, 0.8673, 0.954, 1.0147, 1.0841, 1.1795, 1.2749, 1.3703, 1.4744, 1.5937],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.491, 1.613, 1.734, 1.908, 2.029, 2.168, 2.359, 2.549, 2.74, 2.948, 3.187],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.863, 2.014, 2.166, 2.383, 2.534, 2.708, 2.946, 3.184, 3.422, 3.683, 3.97],
    }),
  ];
  elementSkill = [
    action("净焰昂藏伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.129, 1.214, 1.298, 1.411, 1.496, 1.58, 1.693, 1.806, 1.919, 2.032, 2.145, 2.258, 2.399],
    }),
    action("剑域炽焰伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.328, 1.428, 1.527, 1.66, 1.76, 1.859, 1.992, 2.125, 2.258, 2.39, 2.523, 2.656, 2.822],
    }),
    action(
      "领域伤害",
      AttackType.Skill,
      ElementType.Pyro,
      {
        atk: [0.602, 0.647, 0.692, 0.753, 0.798, 0.843, 0.903, 0.963, 1.024, 1.084, 1.148, 1.204, 1.279],
        hp: [0.0103, 0.0111, 0.0119, 0.0129, 0.0137, 0.0144, 0.0155, 0.0165, 0.0175, 0.0186, 0.0196, 0.0206, 0.0219],
      },
      "Dehya"
    ),
  ];
  burstSkill = [
    action("炽鬃拳伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.987, 1.061, 1.135, 1.234, 1.308, 1.382, 1.481, 1.579, 1.678, 1.777, 1.875, 1.974, 2.097],
      hp: [0.0169, 0.0182, 0.0195, 0.0212, 0.0224, 0.0237, 0.0254, 0.0271, 0.0288, 0.0305, 0.0321, 0.0338, 0.036],
    }),
    action("焚落踢伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [1.393, 1.498, 1.602, 1.741, 1.846, 1.95, 2.09, 2.229, 2.368, 2.507, 2.647, 2.786, 2.96],
      hp: [0.0239, 0.0257, 0.0275, 0.0299, 0.0316, 0.0334, 0.0358, 0.0382, 0.0406, 0.043, 0.0454, 0.0478, 0.0507],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_HP_28P,
    {
      label: "1命·皎洁之火铓辉灿漫",
      describe: "迪希雅的生命值上限提升20%；熔铁流狱伤害提高值：生命值上限的3.6%；炎啸狮子咬伤害提高值：生命值上限的6%",
      effect: [
        { type: BuffType.HPPrcent, getValue: () => 20 },
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.036,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.06,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    {
      label: "2命·净沙利刃明映万乘",
      describe: "场上存在净焰剑狱领域时，领域内的当前场上角色受到攻击时，将使净焰剑狱下次协同攻击造成的伤害提升50%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 50, special: "Dehya" }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·燎燃利爪裂帛斫金",
      describe:
        "炎啸狮子咬的暴击率提升10%；炽鬃拳命中敌人并造成暴击后，将使持续期间内炎啸狮子咬的暴击伤害提升15%，至多60%",
      effect: [
        { type: BuffType.BurstCritcal, getValue: () => 10 },
        { type: BuffType.BurstCritcalHurt, getValue: (_, s) => 15 * s },
      ],
      enable: true,
      stack: 4,
      limit: 4,
      stackable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![迪希雅](https://enka.network/ui/UI_AvatarIcon_Dehya.png) */
export const Dehya = new DehyaData();
