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
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_DENDRO_28P } from "../buffs";

@EnKaId(10000078, "艾尔海森")
@Weapon(WeaponType.Sword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, 13348, 313, 782, 70)
@Icons("UI_AvatarIcon_Alhatham")
class AlhathamData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·溯因反绎法", "共相·理式摹写", "殊境·显象缚结"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.495, 0.536, 0.576, 0.634, 0.674, 0.72, 0.783, 0.847, 0.91, 0.979, 1.048],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.508, 0.549, 0.59, 0.649, 0.69, 0.738, 0.803, 0.868, 0.932, 1.003, 1.074],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.342, 0.37, 0.397, 0.437, 0.465, 0.497, 0.541, 0.584, 0.628, 0.676, 0.723],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.342, 0.37, 0.397, 0.437, 0.465, 0.497, 0.541, 0.584, 0.628, 0.676, 0.723],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.668, 0.722, 0.776, 0.854, 0.908, 0.971, 1.056, 1.141, 1.227, 1.32, 1.413],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.839, 0.907, 0.975, 1.073, 1.141, 1.219, 1.326, 1.433, 1.541, 1.658, 1.775],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.553, 0.598, 0.643, 0.707, 0.752, 0.803, 0.874, 0.945, 1.015, 1.092, 1.17],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.553, 0.598, 0.643, 0.707, 0.752, 0.803, 0.874, 0.945, 1.015, 1.092, 1.17],
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
    action("突进攻击伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [1.936, 2.081, 2.226, 2.42, 2.565, 2.71, 2.904, 3.1, 3.291, 3.485, 3.678, 3.872, 4.114],
      em: [1.549, 1.665, 1.781, 1.936, 2.052, 2.168, 2.323, 2.478, 2.633, 2.788, 2.943, 3.098, 3.291],
    }),
    action(
      "光幕攻击伤害",
      AttackType.Skill,
      ElementType.Dendro,
      {
        atk: [0.672, 0.722, 0.773, 0.84, 0.89, 0.941, 1.008, 1.075, 1.142, 1.21, 1.277, 1.344, 1.428],
        em: [1.344, 1.445, 1.546, 1.68, 1.781, 1.882, 2.016, 2.15, 2.285, 2.419, 2.554, 2.688, 2.856],
      },
      "Alhatham"
    ),
  ];
  burstSkill = [
    action(
      "单次伤害",
      AttackType.Burst,
      ElementType.Dendro,
      {
        atk: [1.216, 1.307, 1.398, 1.52, 1.611, 1.702, 1.824, 1.946, 2.067, 2.189, 2.31, 2.432, 2.584],
        em: [0.973, 1.046, 1.119, 1.216, 1.289, 1.362, 1.459, 1.557, 1.654, 1.751, 1.848, 1.946, 2.067],
      },
      "Alhatham"
    ),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_DENDRO_28P,
    {
      label: "元素战技·琢光镜",
      describe: "持有琢光镜时，艾尔海森的普通攻击、重击与下落攻击将转为无法被附魔覆盖的草元素伤害",
      effect: [{ type: BuffType.Transform, getValue: () => EnchantingType[ElementType.Dendro] }],
      enable: false,
    },
    {
      label: "谜林道破",
      describe:
        "艾尔海森的每点元素精通，都会使光幕伤害与殊境·显象缚结造成的伤害提升0.1%。通过这种方式，至多使光幕伤害与殊境·显象缚结造成的伤害提升100%",
      effect: [
        {
          type: BuffType.GlobalPrcent,
          getValue: (data) => Math.min((data.elementalMystery + data.elementalMystery_NT) * 0.1, 100),
          special: "Alhatham",
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    {
      label: "2命·辩章",
      describe: "艾尔海森产生琢光镜时，每1枚产生的琢光镜将使元素精通提升50点，该效果最多叠加4层",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 50 * s }],
      enable: false,
      stack: 0,
      stackable: true,
      limit: 4,
      stackText: "琢光镜",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·义贯",
      describe:
        "施放殊境·显象缚结时，每消耗1枚琢光镜，使队伍中附近的其他角色元素精通提升30点；每产生1枚琢光镜，使艾尔海森获得10%草元素伤害加成",
      effect: [
        { type: BuffType.MysteryFixed, getValue: (_, s) => 30 * s },
        {
          type: BuffType.DendroPrcent,
          getValue: (data, s) => {
            return data.constellation >= 6 ? 30 : 10 * (3 - s);
          },
        },
      ],
      enable: false,
      stack: 0,
      stackable: true,
      limit: 3,
      stackText: "消耗琢光镜数量",
      condition: ({ constellation }) => constellation >= 4,
    },
    {
      label: "4命·义贯",
      describe: "施放殊境·显象缚结时，每消耗1枚琢光镜，使队伍中附近的其他角色元素精通提升30点",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 30 * s }],
      enable: false,
      stack: 0,
      stackable: true,
      shareable: true,
      target: BuffTarget.Other,
      limit: 3,
      stackText: "消耗琢光镜数量",
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·正理",
      describe:
        "殊境·显象缚结施放完成2秒后，将无视消耗琢光镜的个数，固定产生3枚琢光镜；艾尔海森产生琢光镜时，若琢光镜数量已达到上限，艾尔海森的暴击率提升10%，暴击伤害提升70%",
      effect: [
        { type: BuffType.Critcal, getValue: () => 10 },
        { type: BuffType.CritcalHurt, getValue: () => 70 },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![艾尔海森](https://enka.network/ui/UI_AvatarIcon_Alhatham.png) */
export const Alhatham = new AlhathamData();
