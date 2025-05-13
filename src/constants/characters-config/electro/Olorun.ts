import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";
import { EnKaId, Weapon, Element, BaseData, Icons, action } from "../decorator";

@EnKaId(10000105, "欧洛伦")
@Weapon(WeaponType.Bow)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, 9244, 244, 587, 60)
@Icons("UI_AvatarIcon_Olorun")
class OlorunData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·宿灵闪箭", "暝色缒索", "黯声回响"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.506, 0.548, 0.589, 0.648, 0.689, 0.736, 0.801, 0.866, 0.93, 1.001, 1.072],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.444, 0.48, 0.516, 0.568, 0.604, 0.645, 0.702, 0.758, 0.815, 0.877, 0.939],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.698, 0.755, 0.812, 0.893, 0.95, 1.015, 1.104, 1.193, 1.283, 1.38, 1.478],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Electro, {
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
    action("宿灵球伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.976, 2.124, 2.272, 2.47, 2.618, 2.766, 2.964, 3.162, 3.359, 3.557, 3.754, 3.952, 4.199],
    }),
  ];
  burstSkill = [
    action("秘仪伤害", AttackType.Burst, ElementType.Electro, {
      atk: [1.744, 1.875, 2.005, 2.18, 2.311, 2.441, 2.616, 2.79, 2.965, 3.139, 3.313, 3.488, 3.706],
    }),
    action("音波碰撞伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.332, 0.357, 0.382, 0.415, 0.44, 0.465, 0.498, 0.531, 0.564, 0.598, 0.631, 0.664, 0.706],
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
