import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000051, "优菈")
@Weapon(WeaponType.GreatSword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, 13226, 342, 751, 80)
@Icons("UI_AvatarIcon_Eula")
export class EulaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["西风剑术·宗室", "冰潮的涡旋", "凝浪之光剑"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.8973, 0.9704, 1.0434, 1.1477, 1.2208, 1.3043, 1.419, 1.5338, 1.6486, 1.7738, 1.9172],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.9355, 1.0117, 1.0878, 1.1966, 1.2727, 1.3598, 1.4794, 1.5991, 1.7187, 1.8493, 1.9988],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.568, 0.614, 0.66, 0.727, 0.773, 0.826, 0.898, 0.971, 1.044, 1.123, 1.214],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.568, 0.614, 0.66, 0.727, 0.773, 0.826, 0.898, 0.971, 1.044, 1.123, 1.214],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [1.1264, 1.2181, 1.3098, 1.4408, 1.5325, 1.6373, 1.7813, 1.9254, 2.0695, 2.2267, 2.4068],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.718, 0.777, 0.835, 0.919, 0.977, 1.044, 1.136, 1.228, 1.32, 1.42, 1.535],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.718, 0.777, 0.835, 0.919, 0.977, 1.044, 1.136, 1.228, 1.32, 1.42, 1.535],
    }),
    action("重击循环伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.688, 0.744, 0.8, 0.88, 0.936, 1, 1.088, 1.176, 1.264, 1.36, 1.47],
    }),
    action("重击终结伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.25, 1.35, 1.45, 1.6, 1.7, 1.81, 1.97, 2.13, 2.29, 2.47, 2.66],
    }),
    action("下落期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.7459, 0.8066, 0.8673, 0.954, 1.0147, 1.0841, 1.1795, 1.2749, 1.3703, 1.4744, 1.5937],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.491, 1.613, 1.734, 1.908, 2.029, 2.168, 2.359, 2.549, 2.74, 2.948, 3.187],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.863, 2.014, 2.166, 2.383, 2.534, 2.708, 2.946, 3.184, 3.422, 3.683, 3.97],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.464, 1.5738, 1.6836, 1.83, 1.9398, 2.0496, 2.196, 2.3424, 2.4888, 2.6352, 2.7816, 2.928, 3.111],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [2.456, 2.6402, 2.8244, 3.07, 3.2542, 3.4384, 3.684, 3.9296, 4.1752, 4.4208, 4.6664, 4.912, 5.219],
    }),
    action("冰涡之剑伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.96, 1.032, 1.104, 1.2, 1.272, 1.344, 1.44, 1.536, 1.632, 1.728, 1.824, 1.92, 2.04],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [2.456, 2.6402, 2.8244, 3.07, 3.2542, 3.4384, 3.684, 3.9296, 4.1752, 4.4208, 4.6664, 4.912, 5.219],
    }),
    action("光降之剑基础伤害", AttackType.Burst, ElementType.Physical, {
      atk: [3.6705, 3.9692, 4.268, 4.6948, 4.9936, 5.335, 5.8045, 6.274, 6.7434, 7.2556, 7.8425, 8.5326, 9.2227],
    }),
    action(
      "光降之剑总伤害",
      AttackType.Burst,
      ElementType.Physical,
      {
        atk: [3.6705, 3.9692, 4.268, 4.6948, 4.9936, 5.335, 5.8045, 6.274, 6.7434, 7.2556, 7.8425, 8.5326, 9.2227],
      },
      "Eula"
    ),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "点按元素战技·冰潮的涡旋",
      describe: "命中敌人时，优菈自己获得一层冷酷之心效果，提高优菈的防御力，最多叠加2次",
      effect: [{ type: BuffType.DEFPrcent, getValue: (_, s) => s * 30 }],
      enable: false,
      stack: 0,
      stackable: true,
      limit: 2,
      stackText: "冷酷之心",
    },
    {
      label: "长按元素战技·冰潮的涡旋",
      describe: "使身边的敌人的物理抗性与冰元素抗性降低",
      effect: [
        {
          type: BuffType.EnemyPhysicalResistance,
          getValue: (data) => {
            return -[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
        {
          type: BuffType.EnemyCryoResistance,
          getValue: (data) => {
            return -[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25][data.skillLevel + data.skillLevelAdd - 1];
          },
        },
      ],
      enable: true,
      shareable: true,
      target: BuffTarget.Enemy,
    },
    {
      label: "元素爆发·光降之剑",
      describe: "优菈自己的普通攻击、元素战技或元素爆发对敌人造成伤害时，为光降之剑积蓄能量",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data, s) => {
            let atk = data.baseATK + data.extraATK + data.extraATK_NT;
            return (
              [0.7499, 0.811, 0.872, 0.9592, 1.0202, 1.09, 1.1859, 1.2818, 1.3778, 1.4824, 1.6023, 1.7433, 1.8843][
                data.burstLevel + data.burstLevelAdd - 1
              ] *
              s *
              atk
            );
          },
          special: "Eula",
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      stackable: true,
      stack: 13,
      limit: 30,
      stackText: "能量层数",
    },
    {
      label: "1命·光潮的幻象",
      describe: "消耗冰潮的涡旋的冷酷之心效果后，优菈的物理伤害加成提高30%",
      effect: [{ type: BuffType.PhysicalPrcent, getValue: () => 30 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    {
      label: "4命·光潮的幻象",
      describe: "对生命值低于50%的敌人，光降之剑造成的伤害提高25%",
      effect: [{ type: BuffType.BurstPrcent, getValue: () => 25, special: "Eula" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![优菈](https://enka.network/ui/UI_AvatarIcon_Eula.png) */
export const Eula = new EulaData();
