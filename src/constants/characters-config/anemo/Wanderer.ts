import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "@/utils/decorator";
import { Constellation_E_5, Constellation_Q_3, S_80_CRITAL_19P } from "../buffs";

@EnKaId(10000075, "流浪者")
@Weapon(WeaponType.Magic)
@Element(ElementType.Anemo)
@BaseData(Rarity.Five, 10164, 328, 607, 60)
@Icons("UI_AvatarIcon_Wanderer")
export class WandererData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["行幡鸣弦", "羽画·风姿华歌", "狂言·式乐五番"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.687, 0.743, 0.799, 0.879, 0.935, 0.999, 1.087, 1.175, 1.262, 1.358, 1.454],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.65, 0.703, 0.756, 0.832, 0.885, 0.945, 1.028, 1.111, 1.195, 1.285, 1.376],
    }),
    action("三段伤害·1", AttackType.Normal, ElementType.Anemo, {
      atk: [0.476, 0.515, 0.554, 0.609, 0.648, 0.693, 0.753, 0.814, 0.875, 0.942, 1.008],
    }),
    action("三段伤害·2", AttackType.Normal, ElementType.Anemo, {
      atk: [0.476, 0.515, 0.554, 0.609, 0.648, 0.693, 0.753, 0.814, 0.875, 0.942, 1.008],
    }),
    action("重击", AttackType.Strong, ElementType.Anemo, {
      atk: [1.321, 1.42, 1.519, 1.651, 1.75, 1.849, 1.981, 2.113, 2.245, 2.377, 2.51],
    }),
    action("下坠期间伤害", AttackType.FallPeriod, ElementType.Anemo, {
      atk: [0.568, 0.615, 0.661, 0.727, 0.773, 0.826, 0.899, 0.971, 1.04, 1.12, 1.2],
    }),
    action("低空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.14, 1.23, 1.32, 1.45, 1.55, 1.65, 1.8, 1.94, 2.09, 2.25, 2.4],
    }),
    action("高空坠地冲击伤害", AttackType.Falling, ElementType.Anemo, {
      atk: [1.42, 1.53, 1.65, 1.82, 1.93, 2.06, 2.24, 2.43, 2.61, 2.81, 3],
    }),
    null,
    action("6命·一段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.687, 0.743, 0.799, 0.879, 0.935, 0.999, 1.087, 1.175, 1.262, 1.358, 1.454].map((i) => i * 0.4),
    }),
    action("6命·二段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.65, 0.703, 0.756, 0.832, 0.885, 0.945, 1.028, 1.111, 1.195, 1.285, 1.376].map((i) => i * 0.4),
    }),
    action("6命·三段伤害", AttackType.Normal, ElementType.Anemo, {
      atk: [0.476, 0.515, 0.554, 0.609, 0.648, 0.693, 0.753, 0.814, 0.875, 0.942, 1.008].map((i) => i * 0.4),
    }),
  ];
  elementSkill = [
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [0.952, 1.023, 1.095, 1.19, 1.261, 1.333, 1.428, 1.523, 1.618, 1.714, 1.809, 1.904, 2.023],
    }),
  ];
  burstSkill = [
    action("技能伤害·单次", AttackType.Burst, ElementType.Anemo, {
      atk: [1.472, 1.582, 1.693, 1.84, 1.95, 2.061, 2.208, 2.355, 2.502, 2.65, 2.797, 2.944, 3.128],
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
            [33, 35, 37, 39.5, 41.5, 43.5, 46, 48.6, 51.2, 53.7, 56.3, 58.9, 61.4][
              data.skillLevel + data.skillLevelAdd - 1
            ],
          actionOn: ActionOn.Indirect,
        },
        {
          type: BuffType.StrongRate,
          getValue: (data) =>
            [26.4, 28, 29.6, 31.6, 33.2, 34.8, 36.8, 38.9, 40.9, 43, 45, 47.1, 49.1][
              data.skillLevel + data.skillLevelAdd - 1
            ],
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
