import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000014, "芭芭拉")
@Weapon(WeaponType.Magic)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, [9787, 159, 669], 80, [10464, 199, 715])
@Icons("UI_AvatarIcon_Barbara")
export class BarbaraData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["水之浅唱", "演唱，开始♪", "闪耀奇迹♪"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.378, 0.407, 0.435, 0.473, 0.501, 0.53, 0.568, 0.605, 0.643, 0.681, 0.721],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.355, 0.382, 0.408, 0.444, 0.471, 0.497, 0.533, 0.568, 0.604, 0.639, 0.676],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.41, 0.441, 0.472, 0.513, 0.544, 0.575, 0.616, 0.657, 0.698, 0.739, 0.781],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [0.552, 0.593, 0.635, 0.69, 0.731, 0.773, 0.828, 0.883, 0.938, 0.994, 1.051],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Hydro, {
      atk: [1.66, 1.79, 1.91, 2.08, 2.2, 2.33, 2.49, 2.66, 2.83, 2.99, 3.17],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Hydro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Hydro, {
      atk: [1.42, 1.53, 1.62, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("水珠伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [0.584, 0.628, 0.672, 0.73, 0.774, 0.818, 0.876, 0.934, 0.993, 1.05, 1.11, 1.17, 1.24],
    }),
    action("命中治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.0075, 0.0081, 0.0086, 0.0094, 0.0099, 0.0105, 0.0113, 0.012, 0.0128, 0.0135, 0.0143, 0.015, 0.0159, 0.0169,
      ],
      fixed: [72, 79, 87, 96, 105, 114, 125, 135, 147, 159, 172, 185, 199, 213],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.04, 0.043, 0.046, 0.05, 0.053, 0.056, 0.06, 0.064, 0.068, 0.072, 0.076, 0.08, 0.085, 0.09],
      fixed: [385, 424, 465, 510, 559, 610, 664, 722, 783, 847, 915, 986, 1059, 1136],
    }),
  ];
  burstSkill = [
    action("治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.176, 0.189, 0.202, 0.22, 0.233, 0.246, 0.264, 0.282, 0.299, 0.317, 0.334, 0.352, 0.374, 0.396],
      fixed: [1694, 1864, 2047, 2245, 2457, 2683, 2923, 3177, 3445, 3728, 4024, 4335, 4660, 4999],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "2命·元气迸发",
      describe: "演唱，开始♪技能持续期间，当前场上自己的角色获得15%水元素伤害加成",
      effect: [{ type: BuffType.HydroPrcent, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![芭芭拉](https://enka.network/ui/UI_AvatarIcon_Barbara.png) */
export const Barbara = new BarbaraData();
