import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CHARGE_32P } from "../buffs";

@EnKaId(10000022, "温迪")
@Weapon(WeaponType.Bow)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 10531, 263, 669, 60)
@Icons("UI_AvatarIcon_Venti")
class VentiData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["神代射术", "高天之歌", "风神之诗"];
  normalAttack = [
    action("一段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.204, 0.22, 0.237, 0.261, 0.277, 0.296, 0.322, 0.348, 0.375, 0.403, 0.435],
    }),
    action("一段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.204, 0.22, 0.237, 0.261, 0.277, 0.296, 0.322, 0.348, 0.375, 0.403, 0.435],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.444, 0.48, 0.516, 0.568, 0.604, 0.645, 0.702, 0.759, 0.815, 0.877, 0.948],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.524, 0.566, 0.609, 0.67, 0.713, 0.761, 0.828, 0.895, 0.962, 1.035, 1.12],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.261, 0.282, 0.303, 0.333, 0.355, 0.379, 0.412, 0.445, 0.479, 0.515, 0.557],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.507, 0.548, 0.589, 0.648, 0.689, 0.736, 0.801, 0.866, 0.931, 1.001, 1.082],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.71, 0.767, 0.825, 0.908, 0.965, 1.031, 1.122, 1.213, 1.304, 1.403, 1.516],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.937],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("点按伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.76, 2.97, 3.17, 3.45, 3.66, 3.86, 4.14, 4.42, 4.69, 4.97, 5.24, 5.52, 5.87],
    }),
    action("长按伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [3.8, 4.09, 4.37, 4.75, 5.04, 5.32, 5.7, 6.08, 6.46, 6.84, 7.22, 7.6, 8.08],
    }),
  ];
  burstSkill = [
    action("持续伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [0.376, 0.404, 0.432, 0.47, 0.498, 0.526, 0.564, 0.602, 0.639, 0.677, 0.714, 0.752, 0.799, 0.846],
    }),
    action("附加元素伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
    }),
    action("附加元素伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
    }),
    action("附加元素伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
    }),
    action("附加元素伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.188, 0.202, 0.216, 0.235, 0.249, 0.263, 0.282, 0.301, 0.32, 0.338, 0.357, 0.376, 0.4, 0.423],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CHARGE_32P,
    {
      label: "2命·眷恋的泠风",
      describe: `高天之歌会使敌人的风元素抗性与物理抗性降低12%。 被高天之歌击飞的敌人在落地前，风元素抗性与物理抗性额外降低12%`,
      effect: [
        { type: BuffType.EnemyAnemoResistance, getValue: (_, s) => -12 - 12 * s },
        { type: BuffType.EnemyPhysicalResistance, getValue: (_, s) => -12 - 12 * s },
      ],
      enable: false,
      stackable: true,
      stack: 0,
      limit: 1,
      stackText: "敌人被击飞",
      shareable: true,
      stackType: "switch",
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    {
      label: "4命·自由的凛风",
      describe: `温迪获取元素晶球或元素微粒后，获得25%的风元素伤害加成`,
      effect: [{ type: BuffType.AnemoPrcent, getValue: () => 25 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
    {
      label: "6命·抗争的暴风",
      describe: `受风神之诗伤害的敌人，风元素抗性降低20%； 若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyAnemoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·水",
      describe: `受风神之诗伤害的敌人，风元素抗性降低20%； 若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyHydroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·火",
      describe: `受风神之诗伤害的敌人，风元素抗性降低20%； 若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyPyroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·冰",
      describe: `受风神之诗伤害的敌人，风元素抗性降低20%； 若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
    {
      label: "6命·抗争的暴风·雷",
      describe: `受风神之诗伤害的敌人，风元素抗性降低20%； 若产生了元素转化，则使转换的元素抗性也降低20%`,
      effect: [{ type: BuffType.EnemyElectroResistance, getValue: () => -20 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![温迪](https://enka.network/ui/UI_AvatarIcon_Venti.png) */
export const Venti = new VentiData();
