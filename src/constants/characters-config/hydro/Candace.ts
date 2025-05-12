import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import {
  ActionOn,
  AttackType,
  BuffTarget,
  BuffType,
  ElementType,
  EnchantingType,
  Rarity,
  WeaponType,
} from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_HP_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000072, "坎蒂丝")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Hydro)
@BaseData(Rarity.Four, 10875, 212, 683, 60)
@Icons("UI_AvatarIcon_Candace")
class CandaceData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·流耀枪术·守势", "圣仪·苍鹭庇卫", "圣仪·灰鸰衒潮"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.608, 0.658, 0.707, 0.778, 0.827, 0.884, 0.962, 1.039, 1.117, 1.202, 1.287],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.611, 0.661, 0.711, 0.782, 0.832, 0.889, 0.967, 1.045, 1.123, 1.209, 1.294],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.355, 0.384, 0.413, 0.454, 0.483, 0.516, 0.561, 0.607, 0.652, 0.702, 0.751],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.434, 0.469, 0.504, 0.555, 0.59, 0.63, 0.686, 0.741, 0.797, 0.857, 0.918],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.949, 1.027, 1.104, 1.214, 1.292, 1.38, 1.501, 1.623, 1.744, 1.877, 2.009],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.242, 1.343, 1.444, 1.588, 1.69, 1.905, 1.964, 2.123, 2.282, 2.455, 2.628],
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
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.12, 0.129, 0.138, 0.15, 0.159, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255],
      fixed: [1156, 1271, 1396, 1531, 1676, 1830, 1993, 2167, 2350, 2542, 2745, 2957, 3178],
    }),
    action("基础伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.12, 0.129, 0.138, 0.15, 0.16, 0.168, 0.18, 0.192, 0.204, 0.216, 0.228, 0.24, 0.255],
    }),
    action("蓄力完成伤害", AttackType.Skill, ElementType.Hydro, {
      hp: [0.19, 0.205, 0.219, 0.238, 0.252, 0.267, 0.286, 0.305, 0.324, 0.343, 0.362, 0.381, 0.405],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.066, 0.071, 0.076, 0.083, 0.088, 0.093, 0.099, 0.106, 0.112, 0.119, 0.126, 0.132, 0.141],
    }),
    action("水波冲击伤害", AttackType.Burst, ElementType.Hydro, {
      hp: [0.066, 0.071, 0.076, 0.083, 0.088, 0.093, 0.099, 0.106, 0.112, 0.119, 0.126, 0.132, 0.141],
    }),
  ];
  otherSkill = [
    action("6命·衍溢的汐潮", AttackType.Burst, ElementType.Hydro, {
      hp: [0.15],
    }),
  ];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "元素爆发·赤冕祝祷",
      describe: "角色的普通攻击对敌人造成元素伤害时，提高造成的伤害；单手剑、双手剑、长柄武器角色会获得水元素附魔",
      effect: [
        {
          type: BuffType.NormalPrcent,
          getValue: (data) => 20 + ((data.baseHP + data.extraHP + data.extraHP_NT) / 1000) * 0.5,
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.Enchanting,
          getValue: () => EnchantingType[ElementType.Hydro],
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "2命·贯月的耀锋",
      describe: "圣仪·苍鹭庇卫命中敌人时，坎蒂丝的生命值上限提升20%",
      effect: [{ type: BuffType.HPPrcent, getValue: () => 20 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![坎蒂丝](https://enka.network/ui/UI_AvatarIcon_Candace.png) */
export const Candace = new CandaceData();
