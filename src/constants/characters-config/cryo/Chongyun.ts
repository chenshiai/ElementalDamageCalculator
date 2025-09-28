import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000036, "重云")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, [10984, 223, 648], 40, [11743, 279, 693])
@Icons("UI_AvatarIcon_Chongyun")
export class ChongyunData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["灭邪四式", "灵刃·重华叠霜", "灵刃·云开星落"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.70004, 0.75702, 0.814, 0.8954, 0.95238, 1.0175, 1.10704, 1.19658, 1.28612, 1.3838, 1.48148, 1.57916, 1.67684,
        1.77452, 1.8722,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.63124, 0.68262, 0.734, 0.8074, 0.85878, 0.9175, 0.99824, 1.07898, 1.15972, 1.2478, 1.33588, 1.42396, 1.51204,
        1.60012, 1.6882,
      ],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        0.80324, 0.86862, 0.934, 1.0274, 1.09278, 1.1675, 1.27024, 1.37298, 1.47572, 1.5878, 1.69988, 1.81196, 1.92404,
        2.03612, 2.1482,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [
        1.01222, 1.09461, 1.177, 1.2947, 1.37709, 1.47125, 1.60072, 1.73019, 1.85966, 2.0009, 2.14214, 2.28338, 2.42462,
        2.56586, 2.7071,
      ],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        0.562853, 0.608666, 0.65448, 0.719928, 0.765742, 0.8181, 0.890093, 0.962086, 1.034078, 1.112616, 1.191154,
        1.269691, 1.348229, 1.426766, 1.505304,
      ],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [
        1.01781, 1.100655, 1.1835, 1.30185, 1.384695, 1.479375, 1.60956, 1.739745, 1.86993, 2.01195, 2.15397, 2.29599,
        2.43801, 2.58003, 2.72205,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [
        0.745878, 0.806589, 0.8673, 0.95403, 1.014741, 1.084125, 1.179528, 1.274931, 1.370334, 1.47441, 1.578486,
        1.682562, 1.786638, 1.890714, 1.99479,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.49144, 1.612836, 1.734233, 1.907656, 2.029052, 2.167791, 2.358556, 2.549322, 2.740087, 2.948195, 3.156303,
        3.364411, 3.572519, 3.780627, 3.988735,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [
        1.862889, 2.01452, 2.16615, 2.382765, 2.534396, 2.707688, 2.945964, 3.184241, 3.422517, 3.682455, 3.942393,
        4.202331, 4.462269, 4.722207, 4.982145,
      ],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.7204, 1.84943, 1.97846, 2.1505, 2.27953, 2.40856, 2.5806, 2.75264, 2.92468, 3.09672, 3.26876, 3.4408, 3.65585,
        3.8709, 4.08595,
      ],
    }),
    action("追冰剑诀", AttackType.Skill, ElementType.Cryo, {
      atk: [
        1.7204, 1.84943, 1.97846, 2.1505, 2.27953, 2.40856, 2.5806, 2.75264, 2.92468, 3.09672, 3.26876, 3.4408, 3.65585,
        3.8709, 4.08595,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [
        1.424, 1.5308, 1.6376, 1.78, 1.8868, 1.9936, 2.136, 2.2784, 2.4208, 2.5632, 2.7056, 2.848, 3.026, 3.204, 3.382,
      ],
    }),
  ];
  otherSkill = [
    action("1命·释凌咏冰", AttackType.Other, ElementType.Cryo, {
      atk: [0.5],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "追冰剑诀·敌人冰元素抗性降低",
      describe: "灵刃·重华叠霜领域消失时，会唤出一柄灵刃自动攻击附近的敌人，被击中的敌人冰元素抗性降低10%",
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => 10 }],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·四灵捧圣",
      describe: "灵刃·云开星落对生命值百分比低于重云的敌人造成伤害时，伤害提升15%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 15 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![重云](https://enka.network/ui/UI_AvatarIcon_Chongyun.png) */
export const Chongyun = new ChongyunData();
