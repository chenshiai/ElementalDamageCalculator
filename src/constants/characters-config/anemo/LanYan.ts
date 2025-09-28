import Character from "../character-class";
import { ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

import { EnKaId, Weapon, Element, BaseData, Icons, action } from "@/utils/decorator";

@EnKaId(10000108, "蓝砚")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, [9244, 251, 580], 60, [9883, 314, 620])
@Icons("UI_AvatarIcon_Lanyan")
export class LanYanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["玄鸾画水", "凤缕随翦舞", "鹍弦踏月出"];

  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.4144, 0.44548, 0.47656, 0.518, 0.54908, 0.58016, 0.6216, 0.66304, 0.70448, 0.74592, 0.78736, 0.8288, 0.8806,
        0.9324, 0.9842,
      ],
    }),
    action("二段伤害·1", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.20412, 0.219429, 0.234738, 0.25515, 0.270459, 0.285768, 0.30618, 0.326592, 0.347004, 0.367416, 0.387828,
        0.40824, 0.433755, 0.45927, 0.484785,
      ],
    }),
    action("二段伤害·2", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.24948, 0.268191, 0.286902, 0.31185, 0.330561, 0.349272, 0.37422, 0.399168, 0.424116, 0.449064, 0.474012,
        0.49896, 0.530145, 0.56133, 0.592515,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.2692, 0.28939, 0.30958, 0.3365, 0.35669, 0.37688, 0.4038, 0.43072, 0.45764, 0.48456, 0.51148, 0.5384, 0.57205,
        0.6057, 0.63935,
      ],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.6456, 0.69402, 0.74244, 0.807, 0.85542, 0.90384, 0.9684, 1.03296, 1.09752, 1.16208, 1.22664, 1.2912, 1.3719,
        1.4526, 1.5333,
      ],
    }),
    action("重击伤害·单次", AttackType.Strong, ElementType.Anemo, {
      atk: [
        0.3784, 0.40678, 0.43516, 0.473, 0.50138, 0.52976, 0.5676, 0.60544, 0.64328, 0.68112, 0.71896, 0.7568, 0.8041,
        0.8514, 0.8987,
      ],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [
        0.568288, 0.614544, 0.6608, 0.72688, 0.773136, 0.826, 0.898688, 0.971376, 1.044064, 1.12336, 1.202656, 1.281952,
        1.361248, 1.440544, 1.51984,
      ],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.136335, 1.228828, 1.32132, 1.453452, 1.545944, 1.65165, 1.796995, 1.94234, 2.087686, 2.246244, 2.404802,
        2.563361, 2.721919, 2.880478, 3.039036,
      ],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [
        1.419344, 1.534872, 1.6504, 1.81544, 1.930968, 2.063, 2.244544, 2.426088, 2.607632, 2.80568, 3.003728, 3.201776,
        3.399824, 3.597872, 3.79592,
      ],
    }),
  ];
  elementSkill = [
    action("翦月环伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        0.96256, 1.034752, 1.106944, 1.2032, 1.275392, 1.347584, 1.44384, 1.540096, 1.636352, 1.732608, 1.828864,
        1.92512, 2.04544, 2.16576, 2.28608,
      ],
    }),
    action("护盾吸收量", AttackType.Shield, ElementType.None, {
      atk: [
        2.7648, 2.97216, 3.17952, 3.456, 3.66336, 3.87072, 4.1472, 4.42368, 4.70016, 4.97664, 5.25312, 5.5296, 5.8752,
        6.2208, 6.5664,
      ],
      fixed: [
        1155.5629, 1271.1353, 1396.3386, 1531.173, 1675.6384, 1829.7349, 1993.4624, 2166.8208, 2349.8105, 2542.4312,
        2744.6826, 2956.5652, 3178.0789, 3409.2236, 3650,
      ],
    }),
    action("附加伤害·火", AttackType.Skill, ElementType.Pyro, {
      atk: [
        0.96256, 1.034752, 1.106944, 1.2032, 1.275392, 1.347584, 1.44384, 1.540096, 1.636352, 1.732608, 1.828864,
        1.92512, 2.04544, 2.16576, 2.28608,
      ].map((i) => i * 0.5),
    }),
    action("附加伤害·水", AttackType.Skill, ElementType.Hydro, {
      atk: [
        0.96256, 1.034752, 1.106944, 1.2032, 1.275392, 1.347584, 1.44384, 1.540096, 1.636352, 1.732608, 1.828864,
        1.92512, 2.04544, 2.16576, 2.28608,
      ].map((i) => i * 0.5),
    }),
    action("附加伤害·雷", AttackType.Skill, ElementType.Electro, {
      atk: [
        0.96256, 1.034752, 1.106944, 1.2032, 1.275392, 1.347584, 1.44384, 1.540096, 1.636352, 1.732608, 1.828864,
        1.92512, 2.04544, 2.16576, 2.28608,
      ].map((i) => i * 0.5),
    }),
    action("附加伤害·冰", AttackType.Skill, ElementType.Cryo, {
      atk: [
        0.96256, 1.034752, 1.106944, 1.2032, 1.275392, 1.347584, 1.44384, 1.540096, 1.636352, 1.732608, 1.828864,
        1.92512, 2.04544, 2.16576, 2.28608,
      ].map((i) => i * 0.5),
    }),
  ];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Anemo, {
      atk: [
        2.41064, 2.591438, 2.772236, 3.0133, 3.194098, 3.374896, 3.61596, 3.857024, 4.098088, 4.339152, 4.580216,
        4.82128, 5.12261, 5.42394, 5.72527,
      ],
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
