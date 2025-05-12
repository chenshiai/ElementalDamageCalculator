import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";


@EnKaId(10000056, "九条裟罗")
@Weapon(WeaponType.Bow)
@Element(ElementType.Electro)
@BaseData(Rarity.Four, 9570, 195, 628, 80)
@Icons("UI_AvatarIcon_Sara")
class SaraData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["普通攻击·天狗传弓术", "鸦羽天狗霆雷召咒", "煌煌千道镇式"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.369, 0.399, 0.429, 0.472, 0.502, 0.536, 0.583, 0.631, 0.678, 0.729, 0.781],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.387, 0.416, 0.45, 0.495, 0.527, 0.563, 0.612, 0.662, 0.711, 0.765, 0.819],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.485, 0.5245, 0.564, 0.62, 0.66, 0.705, 0.767, 0.829, 0.891, 0.959, 1.027],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.504, 0.545, 0.586, 0.645, 0.686, 0.733, 0.797, 0.861, 0.926, 0.996, 1.067],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.581, 0.628, 0.675, 0.743, 0.79, 0.844, 0.918, 0.992, 1.067, 1.148, 1.229],
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
  ]
  elementSkill = [
    action("天狗咒雷•伏伤害", AttackType.Skill, ElementType.Electro, {
      atk: [1.258, 1.352, 1.446, 1.572, 1.666, 1.761, 1.886, 2.012, 2.138, 2.264, 2.389, 2.515, 2.672],
    }),
    action("2命·鸦羽", AttackType.Skill, ElementType.Electro, {
      atk: [1.258, 1.352, 1.446, 1.572, 1.666, 1.761, 1.886, 2.012, 2.138, 2.264, 2.389, 2.515, 2.672].map(
        (i) => i * 0.3
      ),
    }),
  ]
  burstSkill = [
    action("天狗咒雷•金刚坏伤害", AttackType.Burst, ElementType.Electro, {
      atk: [4.096, 4.403, 4.71, 5.12, 5.427, 5.734, 6.144, 6.554, 6.963, 7.373, 7.782, 8.192, 8.704, 9.216],
    }),
    action("天狗咒雷•雷砾伤害", AttackType.Burst, ElementType.Electro, {
      atk: [0.341, 0.367, 0.392, 0.427, 0.452, 0.478, 0.512, 0.546, 0.58, 0.614, 0.648, 0.682, 0.725, 0.768],
    }),
  ]
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "天狗咒雷•伏",
      describe: "对范围内当前场上当前角色基于九条裟罗的基础攻击力，以一定比例获得攻击力加成",
      effect: [
        {
          type: BuffType.ATKFixed,
          getValue: (data) => {
            let a = [0.43, 0.46, 0.49, 0.54, 0.57, 0.6, 0.64, 0.69, 0.73, 0.77, 0.82, 0.86, 0.91][
              data.skillLevel + data.skillLevelAdd - 1
            ];
            return data.baseATK * a;
          },
          actionOn: ActionOn.Indirect,
          transform: true,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·我界",
      describe: "处于天狗咒雷带来的攻击力提升效果状态下的角色，其雷元素伤害的暴击伤害提高60%",
      effect: [
        {
          type: BuffType.ElectroCritcalHurt,
          getValue: () => 60,
        },
      ],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 6,
    },
  ]
}

/** ![九条裟罗](https://enka.network/ui/UI_AvatarIcon_Sara.png) */
export const Sara = new SaraData();
