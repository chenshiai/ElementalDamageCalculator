import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000108, "蓝砚")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, 9244, 251, 580, 60)
@Icons("UI_AvatarIcon_Lanyan")
export class LanYanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["玄鸾画水", "凤缕随翦舞", "鹍弦踏月出"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.414, 0.445, 0.477, 0.518, 0.549, 0.58, 0.622, 0.663, 0.704, 0.746, 0.787],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Anemo, {
      atk: [0.2, 0.219, 0.235, 0.255, 0.27, 0.286, 0.306, 0.327, 0.347, 0.367, 0.387],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Anemo, {
      atk: [0.249, 0.268, 0.287, 0.312, 0.33, 0.349, 0.374, 0.399, 0.424, 0.449, 0.474],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Anemo, {
      atk: [0.269, 0.289, 0.31, 0.336, 0.357, 0.377, 0.404, 0.431, 0.458, 0.484, 0.511],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.64, 0.694, 0.742, 0.807, 0.855, 0.904, 0.968, 1.033, 1.098, 1.162, 1.227],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Anemo, {
      atk: [0.378, 0.407, 0.435, 0.473, 0.501, 0.53, 0.568, 0.605, 0.643, 0.681, 0.719],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.044, 1.123, 1.203],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("翦月环伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.96, 1.035, 1.107, 1.203, 1.275, 1.348, 1.444, 1.54, 1.636, 1.733, 1.829, 1.925, 2.045],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      atk: [2.765, 2.972, 3.18, 3.456, 3.663, 3.87, 4.147, 4.424, 4.7, 4.977, 5.253, 5.53, 5.875],
      fixed: [1156, 1271, 1396, 1531, 1676, 1830, 1993, 2167, 2350, 2542, 2745, 2957, 3178],
    }),
    action("附加伤害·火", AttackType.Skill, ElementType.Pyro, {
      atk: [0.96, 1.035, 1.107, 1.203, 1.275, 1.348, 1.444, 1.54, 1.636, 1.733, 1.829, 1.925, 2.045].map(
        (i) => i * 0.5
      ),
    }),
    action("附加伤害·水", AttackType.Skill, ElementType.Hydro, {
      atk: [0.96, 1.035, 1.107, 1.203, 1.275, 1.348, 1.444, 1.54, 1.636, 1.733, 1.829, 1.925, 2.045].map(
        (i) => i * 0.5
      ),
    }),
    action("附加伤害·雷", AttackType.Skill, ElementType.Electro, {
      atk: [0.96, 1.035, 1.107, 1.203, 1.275, 1.348, 1.444, 1.54, 1.636, 1.733, 1.829, 1.925, 2.045].map(
        (i) => i * 0.5
      ),
    }),
    action("附加伤害·冰", AttackType.Skill, ElementType.Cryo, {
      atk: [0.96, 1.035, 1.107, 1.203, 1.275, 1.348, 1.444, 1.54, 1.636, 1.733, 1.829, 1.925, 2.045].map(
        (i) => i * 0.5
      ),
    }),
  ];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Anemo, {
      atk: [2.411, 2.591, 2.772, 3.013, 3.194, 3.375, 3.616, 3.857, 4.098, 4.339, 4.58, 4.821, 5.123],
    }),
  ];
  otherSkill = [];
  buffs = [
    ...A_80_ATK_24P,
    {
      label: "苍翎镇邪敕符",
      describe: "元素战技凤缕随翦舞与元素爆发鹍弦踏月出造成的伤害值提升，提升值分别相当于蓝砚元素精通的309%和774%。",
      effect: [
        {
          type: BuffType.SkillFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 3.09,
          actionOn: ActionOn.External,
        },
        {
          type: BuffType.BurstFixed,
          getValue: (data) => (data.elementalMystery + data.elementalMystery_NT) * 7.74,
          actionOn: ActionOn.External,
        },
      ],
      enable: true,
    },
    Constellation_E_3,
    {
      label: "4命·「揽龙鹰兮结血珠」",
      describe: "施放元素爆发鹍弦踏月出之后的12秒内，队伍中附近所有角色的元素精通提升60点。",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 60 }],
      enable: false,
      shareable: true,
      target: BuffTarget.All,
      condition: ({ constellation }) => constellation >= 4,
    },
    Constellation_Q_5,
  ];
}

/**
 * ![蓝砚](https://enka.network/ui/UI_AvatarIcon_Lanyan.png)
 */
export const LanYan = new LanYanData();