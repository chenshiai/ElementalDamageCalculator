import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000077, "瑶瑶")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, 12289, 212, 751, 80)
@Icons("UI_AvatarIcon_Yaoyao")
export class YaoyaoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["颠扑连环枪", "云台团团降芦菔", "玉颗珊珊月中落"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.51, 0.552, 0.593, 0.652, 0.694, 0.741, 0.807, 0.872, 0.937, 1.008, 1.079],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.474, 0.513, 0.552, 0.607, 0.645, 0.69, 0.75, 0.811, 0.872, 0.938, 1.004],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.314, 0.339, 0.365, 0.401, 0.427, 0.456, 0.496, 0.536, 0.577, 0.62, 0.664],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.33, 0.356, 0.383, 0.421, 0.448, 0.479, 0.521, 0.563, 0.605, 0.651, 0.697],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.779, 0.843, 0.906, 0.997, 1.06, 1.133, 1.232, 1.332, 1.432, 1.541, 1.649],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.128, 1.219, 1.311, 1.442, 1.534, 1.639, 1.783, 1.927, 2.071, 2.229, 2.386],
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
    action("白玉萝卜伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [0.299, 0.322, 0.344, 0.374, 0.396, 0.419, 0.449, 0.479, 0.509, 0.539, 0.569, 0.598, 0.636],
    }),
    action("白玉萝卜治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.017, 0.018, 0.02, 0.021, 0.023, 0.024, 0.026, 0.027, 0.029, 0.031, 0.033, 0.034, 0.036],
      fixed: [165, 182, 199, 219, 239, 261, 285, 310, 336, 363, 392, 422, 454],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [1.146, 1.232, 1.317, 1.432, 1.518, 1.604, 1.718, 1.833, 1.948, 2.062, 2.177, 2.291, 2.434],
    }),
    action("桂子仙机白玉萝卜伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [0.722, 0.776, 0.83, 0.902, 0.956, 1.01, 1.082, 1.155, 1.227, 1.3, 1.371, 1.443, 1.533],
    }),
    action("桂子仙机白玉萝卜治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.02, 0.022, 0.023, 0.025, 0.027, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04, 0.043],
      fixed: [194, 214, 235, 257, 281, 307, 335, 364, 394, 427, 461, 496, 534],
    }),
  ];
  otherSkill = [
    action("6命·超厉害·大萝卜", AttackType.Skill, ElementType.Dendro, {
      atk: [0.75],
    }),
    action("6命·超厉害·大萝卜治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.075],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "1命·妙受琼阁",
      describe: "白玉萝卜炸裂时，处在其影响范围内的当前场上角色获得15%草元素伤害加成",
      effect: [{ type: BuffType.DendroPrcent, getValue: () => 15 }],
      enable: true,
      shareable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    {
      label: "4命·爰爰可亲",
      describe:
        "施放云台团团降芦菔或玉颗珊珊月中落后，基于瑶瑶生命值上限的0.3%，提升瑶瑶的元素精通，至多提升120点元素精通",
      effect: [
        {
          type: BuffType.MysteryFixed,
          getValue: (data) => Math.min(120, (data.baseHP + data.extraHP) * 0.003),
          transform: true,
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/** ![nnn](https://enka.network/ui/UI_AvatarIcon_Yaoyao.png) */
export const Yaoyao = new YaoyaoData();
