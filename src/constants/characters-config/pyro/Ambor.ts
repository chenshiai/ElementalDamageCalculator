import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { A_80_ATK_24P, Constellation_E_5, Constellation_Q_3 } from "../buffs";

@EnKaId(10000021, "安柏")
@Weapon(WeaponType.Bow)
@Element(ElementType.Pyro)
@BaseData(Rarity.Four, [9461, 223, 601], 40, [10116, 279, 642])
@Icons("UI_AvatarIcon_Ambor")
export class AmborData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["神射手", "爆弹玩偶", "箭雨"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.764],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.361, 0.391, 0.42, 0.462, 0.491, 0.525, 0.571, 0.617, 0.664, 0.714, 0.764],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.464, 0.502, 0.54, 0.594, 0.632, 0.675, 0.734, 0.794, 0.853, 0.918, 0.983],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.473, 0.512, 0.55, 0.605, 0.644, 0.688, 0.748, 0.809, 0.869, 0.94, 1],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.593, 0.642, 0.69, 0.759, 0.807, 0.863, 0.938, 1.01, 1.09, 1.17, 1.26],
    }),
    action("瞄准射击伤害", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Pyro, {
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
    action("爆炸伤害", AttackType.Skill, ElementType.Pyro, {
      atk: [1.23, 1.32, 1.42, 1.54, 1.63, 1.72, 1.85, 1.97, 2.09, 2.22, 2.34, 2.46, 2.62],
    }),
  ];
  burstSkill = [
    action("箭雨单次伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [0.281, 0.302, 0.323, 0.351, 0.372, 0.393, 0.421, 0.449, 0.477, 0.505, 0.534, 0.562, 0.597, 0.632],
    }),
    action("箭雨总伤害", AttackType.Burst, ElementType.Pyro, {
      atk: [5.05, 5.43, 5.81, 6.32, 6.7, 7.08, 7.58, 8.09, 8.59, 9.1, 9.6, 10.11, 10.74, 11.37],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "百发百中！",
      describe: "箭雨的暴击率提高10%",
      effect: [
        {
          type: BuffType.BurstCritcal,
          getValue: () => 10,
        },
      ],
      enable: true,
    },
    {
      label: "压制射击",
      describe: "瞄准射击命中弱点时，攻击力提高15%",
      effect: [
        {
          type: BuffType.ATKPrcent,
          getValue: () => 15,
        },
      ],
      enable: false,
    },
    {
      label: "2命·一触即发",
      describe: "主动引爆兔兔伯爵时，会额外造成200%伤害（此增益作用于增伤乘区）",
      effect: [{ type: BuffType.SkillPrcent, getValue: () => 200 }],
      enable: true,
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
    {
      label: "6命·疾如野火",
      describe: "使用箭雨后的10秒内，队伍中所有角色的移动速度提升15%，攻击力提升15%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 15 }],
      enable: false,
      condition: ({ constellation }) => constellation >= 6,
      shareable: true,
      target: BuffTarget.All,
    },
  ];
}

/** ![安柏](https://enka.network/ui/UI_AvatarIcon_Ambor.png) */
export const Ambor = new AmborData();
