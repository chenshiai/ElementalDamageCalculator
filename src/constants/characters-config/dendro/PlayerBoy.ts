import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action, getEnkaUI } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5, ExtraBuff } from "../buffs";

@EnKaId(1000000508, "空·草")
@Weapon(WeaponType.Sword)
@Element(ElementType.Dendro)
@BaseData(Rarity.Five, [10875, 213, 683], 60, [11627, 266, 730])
@Icons("UI_AvatarIcon_PlayerBoy", "PlayerGrass")
export class PlayerBoyData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["异邦草翦", "草缘剑", "偃草若化"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.445, 0.481, 0.517, 0.569, 0.605, 0.646, 0.704, 0.76, 0.817, 0.879, 0.941],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.47, 0.505, 0.556, 0.591, 0.631, 0.687, 0.742, 0.798, 0.859, 0.919],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.53, 0.573, 0.616, 0.678, 0.721, 0.77, 0.838, 0.906, 0.973, 1.05, 1.12],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.583, 0.631, 0.678, 0.746, 0.793, 0.848, 0.922, 0.997, 1.07, 1.15, 1.23],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.708, 0.765, 0.823, 0.905, 0.963, 1.03, 1.12, 1.21, 1.3, 1.4, 1.5],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.559, 0.605, 0.65, 0.715, 0.76, 0.813, 0.884, 0.956, 1.03, 1.1, 1.18],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.607, 0.657, 0.706, 0.777, 0.826, 0.883, 0.96, 1.038, 1.116, 1.2, 1.29],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.639, 0.691, 0.743, 0.818, 0.87, 0.929, 1.01, 1.09, 1.17, 1.26, 1.35],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.28, 1.38, 1.49, 1.64, 1.74, 1.86, 2.02, 2.19, 2.35, 2.53, 2.71],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.6, 1.73, 1.86, 2.04, 2.17, 2.32, 2.53, 2.73, 2.93, 3.16, 3.38],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [2.3, 2.48, 2.65, 2.88, 3.05, 3.23, 3.46, 3.69, 3.92, 4.15, 4.38, 4.61, 4.9],
    }),
  ];
  burstSkill = [
    action("草灯莲攻击伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [0.802, 0.862, 0.922, 1.002, 1.062, 1.122, 1.202, 1.283, 1.363, 1.443, 1.523, 1.603, 1.703],
    }),
    action("激烈爆发伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [4.008, 4.309, 4.609, 5.01, 5.311, 5.611, 6.012, 6.413, 6.814, 7.214, 7.615, 8.016, 8.517],
    }),
  ];
  otherSkill = [];
  buffs = [
    ...A_80_ATK_24P,
    ...ExtraBuff,
    {
      label: "蔓生的埜草",
      describe:
        "草灯莲将在其存在期间每秒获得一层莲光遍照效果，使其领域内的当前场上角色的元素精通提升6点。草灯莲的莲光遍照效果至多叠加10层。",
      effect: [{ type: BuffType.MysteryFixed, getValue: (_, s) => 6 * s }],
      enable: false,
      shareable: true,
      stackable: true,
      stack: 10,
      limit: 10,
      stackText: "莲光遍照",
      target: BuffTarget.All,
    },
    {
      label: "繁庑的丛草",
      describe: "旅行者自己的每点元素精通，能使草缘剑造成的伤害提升0.15%，偃草若化造成的伤害提升0.1%。",
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.15,
        },
        {
          type: BuffType.BurstPrcent,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 0.1,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·蕴思的霜草",
      describe:
        "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
      effect: [{ type: BuffType.DendroPrcent, getValue: () => 12 }],
      enable: false,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·蕴思的霜草·雷",
      describe:
        "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
      effect: [{ type: BuffType.ElectroPrcent, getValue: () => 12 }],
      enable: false,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·蕴思的霜草·水",
      describe:
        "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 12 }],
      enable: false,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·蕴思的霜草·火",
      describe:
        "处于草灯莲的莲光遍照效果影响下的角色获得12%草元素伤害加成；若草灯莲发生过莲光幻变转化，还将获得12%对应元素伤害加成。",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 12 }],
      enable: false,
      target: BuffTarget.All,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![空·草](https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png) */
export const PlayerBoy = new PlayerBoyData();
