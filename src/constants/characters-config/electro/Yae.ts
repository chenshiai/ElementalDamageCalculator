import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import {
  Constellation_E_3,
  Constellation_Q_5,
  S_80_CRITAL_19P,
} from "../buffs";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";

@EnKaId(10000058, "八重神子")
@Weapon(WeaponType.Magic)
@Element(ElementType.Electro)
@BaseData(Rarity.Five, 10372, 340, 569, 90)
@Icons("UI_AvatarIcon_Yae")
class YaeData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["狐灵食罪式", "野干役咒·杀生樱", "大密法·天狐显真"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.397, 0.426, 0.456, 0.496, 0.526, 0.555, 0.595, 0.635, 0.674, 0.714, 0.754],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.385, 0.414, 0.443, 0.482, 0.51, 0.539, 0.578, 0.616, 0.655, 0.693, 0.732],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Electro, {
      atk: [0.569, 0.612, 0.654, 0.711, 0.754, 0.796, 0.853, 0.91, 0.967, 1.024, 1.081],
    }),
    action("重击", AttackType.Strong, ElementType.Electro, {
      atk: [1.429, 1.536, 1.643, 1.786, 1.893, 2.001, 2.143, 2.286, 2.429, 2.572, 2.715],
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
    action(
      "杀生樱伤害·壹阶",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [0.607, 0.652, 0.698, 0.758, 0.804, 0.849, 0.91, 0.971, 1.031, 1.092, 1.153, 1.213, 1.289],
      },
      "Yae"
    ),
    action(
      "杀生樱伤害·贰阶",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [0.758, 0.815, 0.872, 0.948, 1.005, 1.062, 1.138, 1.213, 1.289, 1.365, 1.441, 1.517, 1.612],
      },
      "Yae"
    ),
    action(
      "杀生樱伤害·叁阶",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [0.948, 1.019, 1.09, 1.185, 1.256, 1.327, 1.422, 1.517, 1.612, 1.706, 1.801, 1.896, 2.015],
      },
      "Yae"
    ),
    action(
      "杀生樱伤害·肆阶",
      AttackType.Skill,
      ElementType.Electro,
      {
        atk: [1.185, 1.274, 1.363, 1.481, 1.57, 1.659, 1.778, 1.896, 2.015, 2.133, 2.252, 2.37, 2.518],
      },
      "Yae"
    ),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Electro, {
      atk: [2.6, 2.8, 2.99, 3.25, 3.45, 3.64, 3.9, 4.16, 4.42, 4.68, 4.94, 5.2, 5.53],
    }),
    action("天狐霆雷伤害", AttackType.Burst, ElementType.Electro, {
      atk: [3.34, 3.59, 3.84, 4.17, 4.42, 4.67, 5.01, 5.34, 5.68, 6.01, 6.34, 6.68, 7.09],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "启蜇之祝词",
      describe: `八重神子的每点元素精通，能使杀生樱造成的伤害提升0.15%`,
      effect: [
        {
          type: BuffType.SkillPrcent,
          getValue: (data) => {
            return (data.elementalMystery + data.elementalMystery_NT) * 0.15;
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    {
      label: "4命·绯樱引雷章",
      describe: `杀生樱的落雷命中敌人后，队伍中附近的所有角色获得20%雷元素伤害加成`,
      effect: [{ type: BuffType.ElectroPrcent, getValue: () => 20 }],
      enable: true,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·大杀生咒禁",
      describe: `杀生樱在攻击时无视敌人60%的防御力`,
      effect: [{ type: BuffType.DefensePenetration, getValue: () => 60, special: "Yae" }],
      enable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![八重神子](https://enka.network/ui/UI_AvatarIcon_Yae.png) */
export const Yae = new YaeData();
