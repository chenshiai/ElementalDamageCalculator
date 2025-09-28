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
      atk: [
        0.3784, 0.40678, 0.43516, 0.473, 0.50138, 0.52976, 0.5676, 0.60544, 0.64328, 0.68112, 0.720474, 0.771936,
        0.823398, 0.874861, 0.926323,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.3552, 0.38184, 0.40848, 0.444, 0.47064, 0.49728, 0.5328, 0.56832, 0.60384, 0.63936, 0.676301, 0.724608,
        0.772915, 0.821222, 0.86953,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.4104, 0.44118, 0.47196, 0.513, 0.54378, 0.57456, 0.6156, 0.65664, 0.69768, 0.73872, 0.781402, 0.837216,
        0.89303, 0.948845, 1.004659,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Hydro, {
      atk: [
        0.552, 0.5934, 0.6348, 0.69, 0.7314, 0.7728, 0.828, 0.8832, 0.9384, 0.9936, 1.051008, 1.12608, 1.201152,
        1.276224, 1.351296,
      ],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Hydro, {
      atk: [
        1.6624, 1.78708, 1.91176, 2.078, 2.20268, 2.32736, 2.4936, 2.65984, 2.82608, 2.99232, 3.16521, 3.391296,
        3.617382, 3.843469, 4.069555,
      ],
    }),
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
    action("水珠伤害", AttackType.Skill, ElementType.Hydro, {
      atk: [
        0.584, 0.6278, 0.6716, 0.73, 0.7738, 0.8176, 0.876, 0.9344, 0.9928, 1.0512, 1.1096, 1.168, 1.241, 1.314, 1.387,
      ],
    }),
    action("命中治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.0075, 0.008063, 0.008625, 0.009375, 0.009938, 0.0105, 0.01125, 0.012, 0.01275, 0.0135, 0.01425, 0.015,
        0.015938, 0.016875, 0.017812,
      ],
      fixed: [
        72.2227, 79.44598, 87.27119, 95.69834, 104.72743, 114.35847, 124.59144, 135.42635, 146.8632, 158.902, 171.54272,
        184.78539, 198.63, 213.07655, 228.12503,
      ],
    }),
    action("持续治疗量", AttackType.Heal, ElementType.None, {
      hp: [0.04, 0.043, 0.046, 0.05, 0.053, 0.056, 0.06, 0.064, 0.068, 0.072, 0.076, 0.08, 0.085, 0.09, 0.095],
      fixed: [
        385.18774, 423.71188, 465.44635, 510.39117, 558.5463, 609.9118, 664.4877, 722.27386, 783.2704, 847.4773,
        914.89453, 985.5221, 1059.36, 1136.4082, 1216.6669,
      ],
    }),
  ];
  burstSkill = [
    action("治疗量", AttackType.Heal, ElementType.None, {
      hp: [
        0.176, 0.1892, 0.2024, 0.22, 0.2332, 0.2464, 0.264, 0.2816, 0.2992, 0.3168, 0.3344, 0.352, 0.374, 0.396, 0.418,
      ],
      fixed: [
        1694.2819, 1863.7336, 2047.3063, 2245, 2456.8147, 2682.7502, 2922.807, 3176.9846, 3445.2832, 3727.7026,
        4024.2432, 4334.905, 4659.687, 4998.591, 5351.615,
      ],
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
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![芭芭拉](https://enka.network/ui/UI_AvatarIcon_Barbara.png) */
export const Barbara = new BarbaraData();
