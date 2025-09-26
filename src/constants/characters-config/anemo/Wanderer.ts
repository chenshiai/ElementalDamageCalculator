import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000075, "流浪者")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, [10164, 328, 607], 60, [10887, 402, 650])
@Icons("UI_AvatarIcon_Wanderer")
export class WandererData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["行幡鸣弦", "羽画·风姿华歌", "狂言·式乐五番"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.68714, 0.74307, 0.799, 0.8789, 0.93483, 0.99875, 1.08664, 1.17453, 1.26242, 1.3583, 1.45418, 1.55006, 1.64594,
        1.74182, 1.8377,
      ],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.65016, 0.70308, 0.756, 0.8316, 0.88452, 0.945, 1.02816, 1.11132, 1.19448, 1.2852, 1.37592, 1.46664, 1.55736,
        1.64808, 1.7388,
      ],
    }),
    action("三段伤害·单次", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.47644, 0.51522, 0.554, 0.6094, 0.64818, 0.6925, 0.75344, 0.81438, 0.87532, 0.9418, 1.00828, 1.07476, 1.14124,
        1.20772, 1.2742,
      ],
    }),
    action("重击", AttackType.Strong, ElementType.Anemo, {
      atk: [
        1.3208, 1.41986, 1.51892, 1.651, 1.75006, 1.84912, 1.9812, 2.11328, 2.24536, 2.37744, 2.50952, 2.6416, 2.8067,
        2.9718, 3.1369,
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
    null,
    action("6命·一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.68714, 0.74307, 0.799, 0.8789, 0.93483, 0.99875, 1.08664, 1.17453, 1.26242, 1.3583, 1.45418, 1.55006, 1.64594,
        1.74182, 1.8377,
      ].map((i) => i * 0.4),
    }),
    action("6命·二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.65016, 0.70308, 0.756, 0.8316, 0.88452, 0.945, 1.02816, 1.11132, 1.19448, 1.2852, 1.37592, 1.46664, 1.55736,
        1.64808, 1.7388,
      ].map((i) => i * 0.4),
    }),
    action("6命·三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [
        0.47644, 0.51522, 0.554, 0.6094, 0.64818, 0.6925, 0.75344, 0.81438, 0.87532, 0.9418, 1.00828, 1.07476, 1.14124,
        1.20772, 1.2742,
      ].map((i) => i * 0.4),
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [
        0.952, 1.0234, 1.0948, 1.19, 1.2614, 1.3328, 1.428, 1.5232, 1.6184, 1.7136, 1.8088, 1.904, 2.023, 2.142, 2.261,
      ],
    }),
  ];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Anemo, {
      atk: [
        1.472, 1.5824, 1.6928, 1.84, 1.9504, 2.0608, 2.208, 2.3552, 2.5024, 2.6496, 2.7968, 2.944, 3.128, 3.312, 3.496,
      ],
    }),
  ];
  otherSkill = [
    action("梦迹一风·风矢", AttackType.Other, ElementType.Anemo, {
      atk: [0.35],
    }),
    action("1命·梦迹一风·风矢", AttackType.Other, ElementType.Anemo, {
      atk: [0.6],
    }),
  ];
  buffs: IBuffBase[] = [
    ...S_80_CRITAL_19P,
    {
      label: "拾玉得花·火",
      describe: "施放羽画·风姿华歌时，若接触了火元素，攻击力提升30%",
      effect: [{ type: BuffType.ATKPrcent, getValue: () => 30 }],
      enable: false,
    },
    {
      label: "拾玉得花·冰",
      describe: "施放羽画·风姿华歌时，若接触了冰元素，暴击率提升20%",
      effect: [{ type: BuffType.Critcal, getValue: () => 20 }],
      enable: false,
    },
    {
      label: "元素战技·优风倾姿",
      describe: "普通攻击与重击时，将转为进行空居·不生断与空居·刀风界，造成的伤害与影响范围提高",
      effect: [
        {
          type: BuffType.NormalRate,
          getValue: (data) =>
            [
              32.9825, 34.9575, 36.9325, 39.5, 41.475, 43.45, 46.0175, 48.585, 51.1525, 53.72, 56.2875, 58.855, 61.4225,
              63.99, 66.5575,
            ][data.skillLevel + data.skillLevelAdd - 1],
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.StrongRate,
          getValue: (data) =>
            [
              26.386, 27.966, 29.546, 31.6, 33.18, 34.76, 36.814, 38.868, 40.922, 42.976, 45.03, 47.084, 49.138, 51.192,
              53.246,
            ][data.skillLevel + data.skillLevelAdd - 1],
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
    },
    {
      label: "2命·二番·箙岛廓白浪",
      describe:
        "在优风倾姿状态下，狂言·式乐五番将依据空居力上限与当前的空居力的差值，每1点使此次狂言·式乐五番造成的伤害提升4%。通过这种方式，至多使狂言·式乐五番造成的伤害提升200%",
      effect: [
        {
          type: BuffType.BurstPrcent,
          getValue: (_, s) => 4 * s,
        },
      ],
      enable: false,
      stack: 50,
      limit: 50,
      stackable: true,
      stackText: "空居力差值",
      condition: ({ constellation }) => constellation >= 2,
    },
    Constellation_Q_3,
    Constellation_E_5,
  ];
}

/** ![流浪者](https://enka.network/ui/UI_AvatarIcon_Wanderer.png) */
export const Wanderer = new WandererData();
