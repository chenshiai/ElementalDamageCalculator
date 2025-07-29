import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_3, Constellation_Q_5, S_80_GEO_28P } from "../buffs";

@EnKaId(10000038, "阿贝多")
@Weapon(WeaponType.Sword)
@Element(ElementType.Geo)
@BaseData(Rarity.Five, 13226, 251, 876, 40)
@Icons("UI_AvatarIcon_Albedo")
export class AlbedoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·白", "创生法·拟造阳华", "诞生式·大地之潮"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.367, 0.3973, 0.4272, 0.4699, 0.4998, 0.534, 0.581, 0.628, 0.675, 0.7262, 0.785],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.367, 0.3973, 0.4272, 0.4699, 0.4998, 0.534, 0.581, 0.628, 0.675, 0.7262, 0.785],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.475, 0.513, 0.551, 0.607, 0.645, 0.689, 0.75, 0.811, 0.872, 0.938, 1.014],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.498, 0.538, 0.579, 0.636, 0.677, 0.723, 0.787, 0.85, 0.914, 0.984, 1.063],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.621, 0.671, 0.722, 0.794, 0.845, 0.902, 0.981, 1.061, 1.14, 1.227, 1.326],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.473, 0.511, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.935, 1.011],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.602, 0.651, 0.7, 0.77, 0.819, 0.875, 0.952, 1.029, 1.106, 1.19, 1.286],
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
    action("技能伤害", AttackType.Skill, ElementType.Geo, {
      atk: [1.304, 1.4018, 1.4996, 1.63, 1.7278, 1.8256, 1.956, 2.0864, 2.2168, 2.3472, 2.4776, 2.608, 2.771],
    }),
    action(
      "刹那之花伤害",
      AttackType.Skill,
      ElementType.Geo,
      {
        def: [1.34, 1.4362, 1.5364, 1.67, 1.7702, 1.8704, 2.004, 2.1376, 2.2712, 2.4048, 2.5384, 2.672, 2.839],
      },
      "Albedo"
    ),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Geo, {
      atk: [3.672, 3.9474, 4.2228, 4.59, 4.8654, 5.1408, 5.508, 5.8752, 6.2424, 6.6096, 6.9768, 7.344, 7.803, 8.262],
    }),
    action("生灭之花", AttackType.Burst, ElementType.Geo, {
      atk: [0.72, 0.774, 0.828, 0.9, 0.954, 1.008, 1.08, 1.152, 1.224, 1.296, 1.368, 1.44, 1.53, 1.62],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_GEO_28P,
    {
      label: "白垩色的威压",
      describe: "创生法·拟造阳华的刹那之花对生命值低于50%的敌人造成的伤害提高25%",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 25, special: "Albedo" }],
      enable: false,
    },
    {
      label: "瓶中人的天慧",
      describe: "施放诞生式·大地之潮时，使附近的队伍中角色的元素精通提高125点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 125 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·显生之宙",
      describe:
        "创生法·拟造阳华的刹那之花绽放时，会为阿贝多赋予生灭计数效果，每消耗一层生灭计数，诞生式·大地之潮会提高等同于阿贝多防御力的30%的伤害",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data, s) => (data.baseDEF + data.extraDEF + data.extraDEF_NT) * 0.3 * s,
          actionOn: ActionOn.External,
        },
      ],
      enable: false,
      stackable: true,
      stack: 0,
      limit: 4,
      condition: ({ constellation }) => constellation >= 2,
      stackText: "生灭计数",
    },
    Constellation_E_3,
    {
      label: "4命·神性之陨",
      describe: "处于阳华的领域中的队伍中当前场上角色，造成的下落攻击伤害提高30%",
      effect: [{ type: BuffType.FallingPrcent, getValue: () => 30 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·无垢之土",
      describe: "处在阳华的领域中的队伍中当前场上角色，若处于结晶反应产生的护盾庇护下，造成的伤害提高17%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 17 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![阿贝多](https://enka.network/ui/UI_AvatarIcon_Albedo.png) */
export const Albedo = new AlbedoData();
