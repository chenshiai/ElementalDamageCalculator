import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_MYSTERY_96, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000006, "丽莎")
@Weapon(WeaponType.Magic)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, 9570, 232, 573, 80)
@Icons("UI_AvatarIcon_Lisa")
export class LisaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["指尖雷暴", "苍雷", "蔷薇的雷光"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.396, 0.426, 0.455, 0.495, 0.525, 0.554, 0.594, 0.634, 0.673, 0.713, 0.754],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.359, 0.386, 0.413, 0.449, 0.476, 0.503, 0.539, 0.575, 0.611, 0.647, 0.684],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.428, 0.46, 0.492, 0.535, 0.567, 0.599, 0.642, 0.685, 0.728, 0.77, 0.815],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.55, 0.591, 0.632, 0.687, 0.728, 0.769, 0.824, 0.879, 0.934, 0.989, 1.046],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Electro, {
      atk: [1.77, 1.9, 2.04, 2.21, 2.35, 2.48, 2.66, 2.83, 3.01, 3.19, 3.37],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Electro, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Electro, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [0.8, 0.86, 0.92, 1, 1.06, 1.12, 1.2, 1.28, 1.36, 1.44, 1.52, 1.6, 1.7],
    }),
    action("无引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [3.2, 3.44, 3.68, 4, 4.24, 4.48, 4.8, 5.12, 5.44, 5.76, 6.08, 6.4, 6.8],
    }),
    action("一层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [3.68, 3.96, 4.23, 4.6, 4.88, 5.15, 5.52, 5.89, 6.26, 6.62, 6.99, 7.36, 7.82],
    }),
    action("二层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [4.24, 4.56, 4.88, 5.3, 5.62, 5.94, 6.36, 6.78, 7.21, 7.63, 8.06, 8.48, 9.01],
    }),
    action("三层引雷长按伤害", AttackType.Skill, ElementType.Electro, {
      atk: [4.87, 5.24, 5.6, 6.09, 6.46, 6.82, 7.31, 7.8, 8.28, 8.77, 9.26, 9.74, 10.35],
    }),
  ];
  burstSkill = [
    action("雷光放电伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.366, 0.393, 0.42, 0.457, 0.484, 0.512, 0.548, 0.585, 0.622, 0.658, 0.695, 0.731, 0.777, 0.823],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_MYSTERY_96,
    {
      label: "静电立场",
      describe: "敌人受到蔷薇的雷光攻击后，降低15%防御力",
      effect: [{ type: BuffType.ReduceArmour, getValue: () => 15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![丽莎](https://enka.network/ui/UI_AvatarIcon_Lisa.png) */
export const Lisa = new LisaData();
