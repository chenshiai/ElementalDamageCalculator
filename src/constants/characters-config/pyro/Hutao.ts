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
import { Constellation_E_3, Constellation_Q_5, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000046, "胡桃")
@Weapon(WeaponType.Polearms)
@Element(ElementType.Pyro)
@BaseData(Rarity.Five, 15552, 106, 876, 60)
@Icons("UI_AvatarIcon_Hutao")
class HutaoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["往生秘传枪法", "蝶引来生", "安神秘法"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.469, 0.501, 0.533, 0.575, 0.607, 0.645, 0.693, 0.741, 0.789, 0.836, 0.884],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.483, 0.515, 0.548, 0.592, 0.625, 0.663, 0.713, 0.762, 0.812, 0.861, 0.91],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.611, 0.652, 0.694, 0.749, 0.791, 0.839, 0.902, 0.964, 1.027, 1.089, 1.152],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.656, 0.701, 0.746, 0.806, 0.85, 0.903, 0.97, 1.037, 1.104, 1.171, 1.238],
    }),
    action("五段伤害·1", AttackType.Normal, ElementType.Physical, {
      atk: [0.333, 0.355, 0.378, 0.408, 0.431, 0.458, 0.492, 0.526, 0.56, 0.594, 0.628],
    }),
    action("五段伤害·2", AttackType.Normal, ElementType.Physical, {
      atk: [0.352, 0.376, 0.4, 0.432, 0.456, 0.484, 0.52, 0.556, 0.592, 0.628, 0.664],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.86, 0.918, 0.977, 1.055, 1.114, 1.182, 1.27, 1.358, 1.446, 1.534, 1.622],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [1.36, 1.452, 1.545, 1.667, 1.761, 1.869, 2.009, 2.148, 2.287, 2.426, 2.565],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Physical, {
      atk: [0.654, 0.699, 0.743, 0.803, 0.848, 0.9, 0.966, 1.033, 1.1, 1.167, 1.234],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.31, 1.4, 1.49, 1.61, 1.69, 1.8, 1.93, 2.07, 2.2, 2.33, 2.47],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Physical, {
      atk: [1.63, 1.75, 1.86, 2.01, 2.12, 2.25, 2.41, 2.58, 2.75, 2.92, 3.08],
    }),
  ];
  elementSkill = [
    action("血梅香伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [0.64, 0.69, 0.74, 0.8, 0.85, 0.9, 0.96, 1.02, 1.09, 1.15, 1.22, 1.28, 1.36],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [3.03, 3.21, 3.4, 3.63, 3.81, 4, 4.23, 4.47, 4.7, 4.94, 5.18, 5.41, 5.65, 5.88],
    }),
    action("低血量时技能伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [3.79, 4.02, 4.24, 4.54, 4.77, 4.99, 5.29, 5.58, 5.88, 6.17, 6.47, 6.76, 7.06, 7.35],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "元素战技·蝶引来生",
      describe:
        "基于进入该状态时胡桃的生命值上限，提高胡桃的攻击力。通过这种方式获得的攻击力提升，不能超过胡桃基础攻击力的400%；将攻击伤害转为火元素伤害",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data) => {
            let a = [
              0.0384, 0.0407, 0.043, 0.046, 0.0483, 0.0506, 0.0536, 0.0566, 0.0596, 0.0626, 0.0656, 0.0685, 0.0715,
            ][data.skillLevel + data.skillLevelAdd - 1];
            return Math.min(data.baseATK * 4, (data.baseHP + data.extraHP) * a);
          },
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.Transform,
          getValue: () => EnchantingType[ElementType.Pyro],
        },
      ],
      enable: false,
    },
    {
      label: "蝶隐之时",
      describe: "蝶引来生施加的彼岸蝶舞状态结束后，队伍中所有角色（不包括胡桃自己）的暴击率提高12%",
      effect: [{ type: BuffType.Critcal, getValue: () => 12 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    {
      label: "血之灶火",
      describe: "胡桃的生命值低于或等于50%时,获得33%火元素伤害加成",
      effect: [{ type: BuffType.PyroPrcent, getValue: () => 33 }],
      enable: false,
    },
    {
      label: "2命·最不安神晴又复雨",
      describe: "血梅香造成的伤害提高，提高值相当于效果附加时胡桃生命值上限的10%",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.baseHP + data.extraHP + data.extraHP_NT) * 0.1,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_E_3,
    {
      label: "4命·伴君眠花房",
      describe:
        "处于胡桃自己施加的血梅香状态影响下的敌人被击败时，附近的队伍中所有角色（不包括胡桃自己）的暴击率提高12%",
      effect: [{ type: BuffType.Critcal, getValue: () => 12 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
    {
      label: "6命·幽蝶能留一缕芳",
      describe: "胡桃的生命值降至25%以下，暴击率提高100%",
      effect: [{ type: BuffType.Critcal, getValue: () => 100 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![胡桃](https://enka.network/ui/UI_AvatarIcon_Hutao.png) */
export const Hutao = new HutaoData();
