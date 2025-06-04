import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ANEMO_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000059, "鹿野院平藏")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, 10657, 225, 684, 40)
@Icons("UI_AvatarIcon_Heizo")
class HeizoData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["不动流格斗术", "勠心拳", "聚风蹴"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.375, 0.403, 0.431, 0.468, 0.497, 0.525, 0.562, 0.6, 0.637, 0.675, 0.712],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.369, 0.396, 0.424, 0.461, 0.488, 0.516, 0.553, 0.59, 0.627, 0.663, 0.7],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.511, 0.549, 0.587, 0.638, 0.677, 0.715, 0.766, 0.817, 0.868, 0.919, 0.97],
    }),
    action("四段伤害·1", AttackType.Normal, ElementType.Anemo, {
      atk: [0.148, 0.159, 0.17, 0.185, 0.196, 0.207, 0.222, 0.237, 0.251, 0.266, 0.281],
    }),
    action("四段伤害·2", AttackType.Normal, ElementType.Anemo, {
      atk: [0.16, 0.175, 0.187, 0.203, 0.216, 0.228, 0.244, 0.26, 0.276, 0.293, 0.309],
    }),
    action("四段伤害·3", AttackType.Normal, ElementType.Anemo, {
      atk: [0.192, 0.207, 0.221, 0.24, 0.255, 0.269, 0.288, 0.308, 0.327, 0.346, 0.365],
    }),
    action("五段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.615, 0.661, 0.707, 0.768, 0.814, 0.86, 0.922, 0.983, 1.045, 1.106, 1.168],
    }),
    action("重击伤害", AttackType.Strong, ElementType.Anemo, {
      atk: [0.73, 0.78, 0.84, 0.91, 0.96, 1.02, 1.1, 1.17, 1.24, 1.31, 1.39],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.42, 1.53, 1.62, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [2.275, 2.446, 2.617, 2.844, 3.015, 3.185, 3.413, 3.64, 3.868, 4.095, 4.323, 4.55, 4.835],
    }),
    action("1层变格伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.275 + 0.569,
        2.446 + 0.611,
        2.617 + 0.654,
        2.844 + 0.711,
        3.015 + 0.754,
        3.185 + 0.796,
        3.413 + 0.853,
        3.64 + 0.91,
        3.868 + 0.967,
        4.095 + 1.024,
        4.323 + 1.081,
        4.55 + 1.138,
        4.835 + 1.209,
      ],
    }),
    action("2层变格伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.275 + 0.569 * 2,
        2.446 + 0.611 * 2,
        2.617 + 0.654 * 2,
        2.844 + 0.711 * 2,
        3.015 + 0.754 * 2,
        3.185 + 0.796 * 2,
        3.413 + 0.853 * 2,
        3.64 + 0.91 * 2,
        3.868 + 0.967 * 2,
        4.095 + 1.024 * 2,
        4.323 + 1.081 * 2,
        4.55 + 1.138 * 2,
        4.835 + 1.209 * 2,
      ],
    }),
    action("3层变格伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.275 + 0.569 * 3,
        2.446 + 0.611 * 3,
        2.617 + 0.654 * 3,
        2.844 + 0.711 * 3,
        3.015 + 0.754 * 3,
        3.185 + 0.796 * 3,
        3.413 + 0.853 * 3,
        3.64 + 0.91 * 3,
        3.868 + 0.967 * 3,
        4.095 + 1.024 * 3,
        4.323 + 1.081 * 3,
        4.55 + 1.138 * 3,
        4.835 + 1.209 * 3,
      ],
    }),
    action("满蓄力伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        2.275 + 0.569 * 4 + 1.138,
        2.446 + 0.611 * 4 + 1.223,
        2.617 + 0.654 * 4 + 1.308,
        2.844 + 0.711 * 4 + 1.422,
        3.015 + 0.754 * 4 + 1.507,
        3.185 + 0.796 * 4 + 1.593,
        3.413 + 0.853 * 4 + 1.706,
        3.64 + 0.91 * 4 + 1.82,
        3.868 + 0.967 * 4 + 1.934,
        4.095 + 1.024 * 4 + 2.048,
        4.323 + 1.081 * 4 + 2.161,
        4.55 + 1.138 * 4 + 2.275,
        4.835 + 1.209 * 4 + 2.417,
      ],
    }),
  ];
  burstSkill = [
    action("不动流·真空弹伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [3.147, 3.383, 3.619, 3.934, 4.17, 4.406, 4.72, 5.035, 5.35, 5.664, 5.979, 6.294, 6.687],
    }),
    action("聚风真眼伤害·火", AttackType.Burst, ElementType.Pyro, {
      atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
    }),
    action("聚风真眼伤害·水", AttackType.Burst, ElementType.Hydro, {
      atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
    }),
    action("聚风真眼伤害·冰", AttackType.Burst, ElementType.Cryo, {
      atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
    }),
    action("聚风真眼伤害·雷", AttackType.Burst, ElementType.Electro, {
      atk: [0.215, 0.231, 0.247, 0.268, 0.284, 0.3, 0.322, 0.343, 0.365, 0.386, 0.408, 0.429, 0.456],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ANEMO_24P,
    {
      label: "因由勘破",
      describe: "勠心拳命中敌人后，队伍中所有角色（不包括鹿野院平藏自己）的元素精通提升80点",
      effect: [{ type: BuffType.MysteryFixed, getValue: () => 80 }],
      enable: false,
      shareable: true,
      target: BuffTarget.Other,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·奇想天开捕物帐",
      describe: "施放勠心拳时，每层「变格」都将为本次勠心拳提升4%暴击率。拥有「正论」时，本次勠心拳的暴击伤害将提升32%",
      effect: [
        { type: BuffType.SkillCritcal, getValue: (_, s) => 4 * s },
        { type: BuffType.SkillCritcalHurt, getValue: (_, s) => (s === 4 ? 32 : 0) },
      ],
      enable: false,
      stackable: true,
      stack: 0,
      limit: 4,
      stackText: "变格",
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![鹿野院平藏](https://enka.network/ui/UI_AvatarIcon_Heizo.png) */
export const Heizo = new HeizoData();
