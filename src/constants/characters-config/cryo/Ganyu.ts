import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITALHUNT_38P } from "../buffs";

@EnKaId(10000037, "甘雨")
@Weapon(WeaponType.Bow)
@Element(ElementType.Cryo)
@BaseData(Rarity.Five, 9797, 335, 630, 60)
@Icons("UI_AvatarIcon_Ganyu")
class GanyuData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·流天射术", "山泽麟迹", "降众天华"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.317, 0.343, 0.369, 0.406, 0.432, 0.461, 0.502, 0.542, 0.583, 0.627, 0.678],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.356, 0.385, 0.414, 0.455, 0.484, 0.518, 0.563, 0.609, 0.654, 0.704, 0.761],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.455, 0.492, 0.529, 0.582, 0.619, 0.661, 0.719, 0.778, 0.836, 0.899, 0.972],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.455, 0.492, 0.529, 0.582, 0.619, 0.661, 0.719, 0.778, 0.836, 0.899, 0.972],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.483, 0.522, 0.561, 0.617, 0.656, 0.701, 0.763, 0.825, 0.886, 0.954, 1.031],
    }),
    action("六段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.576, 0.623, 0.67, 0.737, 0.784, 0.838, 0.911, 0.985, 1.059, 1.139, 1.231],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Cryo, {
      atk: [1.24, 1.33, 1.43, 1.55, 1.64, 1.74, 1.86, 1.98, 2.11, 2.23, 2.36],
    }),
    action(
      "霜华矢命中伤害",
      AttackType.Strong,
      ElementType.Cryo,
      {
        atk: [1.28, 1.38, 1.47, 1.6, 1.7, 1.79, 1.92, 2.05, 2.18, 2.3, 2.43],
      },
      "Ganyu"
    ),
    action(
      "霜华矢·霜华绽发伤害",
      AttackType.Strong,
      ElementType.Cryo,
      {
        atk: [2.18, 2.34, 2.5, 2.72, 2.88, 3.05, 3.26, 3.48, 3.7, 3.92, 4.13],
      },
      "Ganyu"
    ),
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
    action("技能伤害", AttackType.Skill, ElementType.Cryo, {
      atk: [1.32, 1.42, 1.52, 1.65, 1.75, 1.85, 1.98, 2.11, 2.24, 2.38, 2.51, 2.64, 2.81],
    }),
  ];
  burstSkill = [
    action("冰棱伤害", AttackType.Burst, ElementType.Cryo, {
      atk: [0.7, 0.76, 0.81, 0.88, 0.93, 0.98, 1.05, 1.12, 1.19, 1.26, 1.34, 1.41, 1.49, 1.58],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...S_80_CRITALHUNT_38P,
    {
      label: "唯此一心",
      describe: "霜华矢发射后的5秒内，会使接下来的发射的霜华矢与这些霜华矢引发的霜华绽发的暴击率提高20%",
      effect: [{ type: BuffType.StrongCritcal, getValue: () => 20, special: "Ganyu" }],
      enable: false,
    },
    {
      label: "天地交泰",
      describe: "降众天华领域内的队伍中当前场上角色获得20%冰元素伤害加成",
      effect: [{ type: BuffType.CryoPrcent, getValue: () => 20 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    {
      label: "1命·饮露",
      describe: "二段蓄力重击的霜华矢或霜华绽发命中敌人时，会使敌人的冰元素抗性降低15%",
      effect: [{ type: BuffType.EnemyCryoResistance, getValue: () => -15 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 1,
    },
    Constellation_Q_3,
    {
      label: "4命·西狩",
      describe: "在降众天华的领域内，敌人受到的伤害会增加，这个效果会随时间逐步加强，至多提升至25%",
      effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => 5 + 5 * s }],
      enable: false,
      shareable: true,
      stack: 4,
      limit: 4,
      stackable: true,
      target: BuffTarget.Enemy,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_E_5,
  ];
}

/** ![甘雨](https://enka.network/ui/UI_AvatarIcon_Ganyu.png) */
export const Ganyu = new GanyuData();
