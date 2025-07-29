import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_HP_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000074, "莱依拉")
@Weapon(WeaponType.Sword)
@Element(ElementType.Cryo)
@BaseData(Rarity.Four, 11092, 217, 655, 40)
@Icons("UI_AvatarIcon_Layla")
export class LaylaData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["熠辉轨度剑", "垂裳端凝之夜", "星流摇床之梦"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.512, 0.554, 0.596, 0.655, 0.697, 0.744, 0.81, 0.876, 0.941, 1.012, 1.084],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.485, 0.524, 0.564, 0.62, 0.66, 0.705, 0.767, 0.829, 0.891, 0.958, 1.026],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.73, 0.789, 0.849, 0.933, 0.993, 1.061, 1.154, 1.247, 1.341, 1.443, 1.544],
    }),
    action("重击伤害·1", AttackType.Strong, ElementType.Physical, {
      atk: [0.477, 0.516, 0.555, 0.611, 0.649, 0.694, 0.755, 0.816, 0.877, 0.944, 1.01],
    }),
    action("重击伤害·2", AttackType.Strong, ElementType.Physical, {
      atk: [0.526, 0.568, 0.611, 0.672, 0.715, 0.764, 0.831, 0.898, 0.965, 1.039, 1.112],
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
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [0.128, 0.138, 0.147, 0.16, 0.17, 0.179, 0.192, 0.205, 0.218, 0.23, 0.243, 0.256, 0.272],
    }),
    action(
      "飞星伤害",
      AttackType.Skill,
      ElementType.Cryo,
      {
        atk: [0.147, 0.158, 0.169, 0.184, 0.195, 0.206, 0.221, 0.236, 0.25, 0.265, 0.28, 0.294, 0.313],
      },
      "Layla"
    ),
    action("护盾基础吸收量", AttackType.Shield, ElementType.None, {
      hp: [0.108, 0.116, 0.124, 0.135, 0.143, 0.151, 0.162, 0.173, 0.184, 0.195, 0.205, 0.216, 0.23],
      fixed: [1040, 1144, 1257, 1378, 1508, 1647, 1794, 1950, 2115, 2288, 2470, 2661, 2860],
    }),
  ];
  burstSkill = [
    action(
      "星光弹伤害",
      AttackType.Burst,
      ElementType.Cryo,
      {
        hp: [0.047, 0.05, 0.054, 0.058, 0.062, 0.065, 0.07, 0.074, 0.079, 0.084, 0.088, 0.093, 0.099],
      },
      "Layla"
    ),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_HP_24P,
    {
      label: "如光骤现角色",
      describe: "安眠帷幕护盾在存在期间，每获得一枚晚星时，处于安眠帷幕护盾庇护下的角色，护盾强效提升6%，至多叠加4次",
      effect: [{ type: BuffType.ShieldStrong, getValue: (_, s) => s * 6 }],
      enable: true,
      stack: 4,
      stackText: "晚星",
      limit: 4,
      stackable: true,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "勿扰沉眠",
      describe: "垂裳端凝之夜发射的飞星造成的伤害提高，提高值相当于莱依拉生命值上限的1.5%",
      effect: [
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.015,
          actionOn: ActionOn.External,
          special: "Layla",
        },
      ],
      enable: true,
    },
    {
      label: "1命·寐领围垣",
      describe: "垂裳端凝之夜的安眠帷幕护盾的伤害吸收量提高20%",
      effect: [{ type: BuffType.ShieldAdd, getValue: () => 20 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_E_3,
    {
      label: "4命·星示昭明",
      describe:
        "垂裳端凝之夜开始发射一轮飞星时，将为附近的队伍中所有角色赋予「启明」效果，使普通攻击与重击造成的伤害提升，提升值相当于莱依拉生命值上限的5%",
      effect: [
        {
          type: BuffType.NormalFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.05,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.StrongFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.05,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 4,
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_Q_5,
    {
      label: "6命·曜光灵炬",
      describe: "垂裳端凝之夜的飞星造成的伤害提升40%，星流摇床之梦的星光弹造成的伤害提升40%",
      effect: [
        { type: BuffType.SkillPrcent, getValue: () => 40, special: "Layla" },
        { type: BuffType.BurstPrcent, getValue: () => 40, special: "Layla" },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![莱依拉](https://enka.network/ui/UI_AvatarIcon_Layla.png) */
export const Layla = new LaylaData();
