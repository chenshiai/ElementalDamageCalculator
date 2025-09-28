import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000067, "柯莱")
@Weapon(WeaponType.Bow)
@Element(ElementType.Dendro)
@BaseData(Rarity.Four, [9787, 223, 601], 60, [10464, 250, 642])
@Icons("UI_AvatarIcon_Collei")
export class ColleiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["祈颂射艺", "拂花偈叶", "猫猫秘宝"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.43602, 0.47151, 0.507, 0.5577, 0.59319, 0.63375, 0.68952, 0.74529, 0.80106, 0.8619, 0.92274, 0.98358, 1.04442,
        1.10526, 1.1661,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.42656, 0.46128, 0.496, 0.5456, 0.58032, 0.62, 0.67456, 0.72912, 0.78368, 0.8432, 0.90272, 0.96224, 1.02176,
        1.08128, 1.1408,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.54094, 0.58497, 0.629, 0.6919, 0.73593, 0.78625, 0.85544, 0.92463, 0.99382, 1.0693, 1.14478, 1.22026, 1.29574,
        1.37122, 1.4467,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.68026, 0.73563, 0.791, 0.8701, 0.92547, 0.98875, 1.07576, 1.16277, 1.24978, 1.3447, 1.43962, 1.53454, 1.62946,
        1.72438, 1.8193,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Dendro, {
      atk: [1.24, 1.333, 1.426, 1.55, 1.643, 1.736, 1.86, 1.984, 2.108, 2.232, 2.356, 2.48, 2.635, 2.79, 2.945],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Dendro, {
      atk: [
        1.512, 1.6254, 1.7388, 1.89, 2.0034, 2.1168, 2.268, 2.4192, 2.5704, 2.7216, 2.8728, 3.024, 3.213, 3.402, 3.591,
      ],
    }),
  ];
  burstSkill = [
    action("爆发伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        2.01824, 2.169608, 2.320976, 2.5228, 2.674168, 2.825536, 3.02736, 3.229184, 3.431008, 3.632832, 3.834656,
        4.03648, 4.28876, 4.54104, 4.79332,
      ],
    }),
    action("跃动伤害", AttackType.Burst, ElementType.Dendro, {
      atk: [
        0.43248, 0.464916, 0.497352, 0.5406, 0.573036, 0.605472, 0.64872, 0.691968, 0.735216, 0.778464, 0.821712,
        0.86496, 0.91902, 0.97308, 1.02714,
      ],
    }),
  ];
  otherSkill = [
    action("飞叶迴斜", AttackType.Skill, ElementType.Dendro, {
      atk: [0.4],
    }),
    action("6命·坠镞为林", AttackType.Other, ElementType.Dendro, {
      atk: [2],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "1命·巡护深林",
      describe: "柯莱处于队伍后台时，元素充能效率提升20%",
      effect: [{ type: BuffType.ChargeFixed, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    Constellation_Q_5,
  ];
}

/** ![柯莱](https://enka.network/ui/UI_AvatarIcon_Collei.png) */
export const Collei = new ColleiData();
