import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, SecondElementType, WeaponType } from "@/types/enum";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000105, "欧洛伦")
@Weapon(WeaponType.Bow)
@Element(ElementType.Electro, SecondElementType.Nightsoul)
@BaseData(Rarity.Four, [9244, 244, 587], 60, [9883, 306, 628])
@Icons("UI_AvatarIcon_Olorun")
export class OlorunData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["宿灵闪箭", "暝色缒索", "黯声回响"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.50642, 0.54764, 0.58886, 0.647746, 0.688966, 0.736075, 0.80085, 0.865624, 0.930399, 1.001062, 1.071725,
        1.142388, 1.213052, 1.283715, 1.354378,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.443734, 0.479852, 0.51597, 0.567567, 0.603685, 0.644963, 0.701719, 0.758476, 0.815233, 0.877149, 0.939065,
        1.000982, 1.062898, 1.124815, 1.186731,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.698208, 0.755039, 0.81187, 0.893057, 0.949888, 1.014838, 1.104143, 1.193449, 1.282755, 1.380179, 1.477603,
        1.575028, 1.672452, 1.769877, 1.867301,
      ],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.4386, 0.4743, 0.51, 0.561, 0.5967, 0.6375, 0.6936, 0.7497, 0.8058, 0.867, 0.9282, 0.9894, 1.0506, 1.1118,
        1.173,
      ],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
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
    action("宿灵球伤害", AttackType.Skill, ElementType.Electro, {
      atk: [
        1.976, 2.1242, 2.2724, 2.47, 2.6182, 2.7664, 2.964, 3.1616, 3.3592, 3.5568, 3.7544, 3.952, 4.199, 4.446, 4.693,
      ],
    }),
  ];
  burstSkill = [
    action("秘仪伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        1.74384, 1.874628, 2.005416, 2.1798, 2.310588, 2.441376, 2.61576, 2.790144, 2.964528, 3.138912, 3.313296,
        3.48768, 3.70566, 3.92364, 4.14162,
      ],
    }),
    action("音波碰撞伤害", AttackType.Burst, ElementType.Electro, {
      atk: [
        0.332, 0.3569, 0.3818, 0.415, 0.4399, 0.4648, 0.498, 0.5312, 0.5644, 0.5976, 0.6308, 0.664, 0.7055, 0.747,
        0.7885,
      ],
    }),
  ];
  otherSkill = [
    action(
      "显像超感",
      AttackType.Other,
      ElementType.Electro,
      {
        atk: [1.6],
      },
      "Olorun"
    ),
    action(
      "6命·显像超感",
      AttackType.Other,
      ElementType.Electro,
      {
        atk: [3.2],
      },
      "Olorun"
    ),
  ];
  buffs = [
    ...A_80_ATK_24P,
    {
      label: "1命·林雾间的行迹",
      describe:
        "宿灵球命中敌人后，将为该敌人施加「夜暝」效果，对处于「夜暝」效果的影响下的敌人，固有天赋「夜翳的通感」触发的「显象超感」造成的伤害提升50%。",
      effect: [{ type: BuffType.GlobalPrcent, getValue: () => 50, special: "Olorun" }],
      condition: ({ constellation }) => constellation >= 1,
      enable: true,
    },
    {
      label: "2命·藏蜜酒的蜂王",
      describe:
        "施放元素爆发黯声回响后，欧洛伦将获得「灵式超感」效果。灵式超感：获得8%雷元素伤害加成；此外，持续期间，元素爆发黯声回响或超音灵眼每额外命中一名敌人，都将进一步使欧洛伦获得8%雷元素伤害加成，至多通过这种方式获得32%雷元素伤害加成。",
      effect: [{ type: BuffType.ElectroPrcent, getValue: (_, s) => 8 + 8 * s }],
      condition: ({ constellation }) => constellation >= 2,
      stackable: true,
      stack: 4,
      limit: 4,
      enable: true,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·致深泉的颂赞",
      describe:
        "触发固有天赋「夜翳的通感」的「显象超感」后，会使队伍中自己的当前场上角色的攻击力提升10%，持续9秒。该效果至多叠加3层，每层独立计算持续时间。此外，施放元素爆发黯声回响时，将触发一次等同于「显象超感」的效果，造成原本200%的伤害。",
      effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => 10 * s }],
      condition: ({ constellation }) => constellation >= 6,
      stackable: true,
      stack: 3,
      limit: 3,
      shareable: true,
      target: BuffTarget.All,
      enable: true,
    },
  ];
}
/** ![欧洛伦](https://enka.network/ui/UI_AvatarIcon_Olorun.png) */
export const Olorun = new OlorunData();
