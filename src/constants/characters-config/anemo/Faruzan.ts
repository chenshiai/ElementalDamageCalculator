import Character from "../character-class";
import { IBuffBase, ICharacterInfo } from "@/types/interface";
import { ActionOn, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { Weapon, Element, Icons, EnKaId, BaseData, action } from "../decorator";
import { A_80_ATK_24P, Constellation_E_3, Constellation_Q_5 } from "../buffs";

@EnKaId(10000076, "珐露珊")
@Weapon(WeaponType.Bow)
@Element(ElementType.Anemo)
@BaseData(Rarity.Four, 9570, 196, 628, 80)
@Icons("UI_AvatarIcon_Faruzan")
class FaruzanData extends Character implements ICharacterInfo {
  constructor() {
    super();
  }
  talentNames = ["迴身箭术", "非想风天", "抟风秘道"];
  normalAttack = [
    action("一段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.447, 0.484, 0.52, 0.572, 0.609, 0.651, 0.707, 0.765, 0.822, 0.884, 0.947],
    }),
    action("二段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.422, 0.456, 0.491, 0.54, 0.514, 0.613, 0.667, 0.721, 0.775, 0.834, 0.893],
    }),
    action("三段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.532, 0.575, 0.618, 0.68, 0.723, 0.773, 0.841, 0.909, 0.977, 1.051, 1.125],
    }),
    action("四段伤害", AttackType.Normal, ElementType.Physical, {
      atk: [0.706, 0.764, 0.821, 0.903, 0.961, 1.027, 1.117, 1.207, 1.297, 1.396, 1.495],
    }),
    action("瞄准射击", AttackType.Strong, ElementType.Physical, {
      atk: [0.439, 0.474, 0.51, 0.561, 0.597, 0.638, 0.694, 0.75, 0.806, 0.867, 0.928],
    }),
    action("满蓄力瞄准射击", AttackType.Strong, ElementType.Anemo, {
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
    action("技能伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.488, 1.6, 1.711, 1.861, 1.972, 2.083, 2.232, 2.381, 2.53, 2.678, 2.827, 2.976, 3.162],
    }),
    action("风压塌陷风涡伤害", AttackType.Skill, ElementType.Anemo, {
      atk: [1.08, 1.161, 1.242, 1.35, 1.431, 1.512, 1.62, 1.728, 1.836, 1.944, 2.052, 2.16, 2.295],
    }),
  ];
  burstSkill = [
    action("技能伤害", AttackType.Burst, ElementType.Anemo, {
      atk: [3.776, 4.059, 4.342, 4.72, 5.003, 5.286, 5.664, 6.042, 6.419, 6.797, 7.174, 7.552, 8.024],
    }),
  ];
  otherSkill = [];
  buffs: IBuffBase[] = [
    ...A_80_ATK_24P,
    {
      label: "元素爆发·烈风波",
      describe: "降低敌人的风元素抗性30%；所有角色获得风元素伤害加成。",
      effect: [
        {
          type: BuffType.EnemyAnemoResistance,
          getValue: () => -30,
        },
        {
          type: BuffType.AnemoPrcent,
          getValue: (data) => {
            let a = [18, 19.4, 20.7, 22.5, 23.9, 25.2, 27, 28.8, 30.6, 32.4, 34.2, 36, 38.3];
            return a[data.burstLevel + data.burstLevelAdd - 1];
          },
          actionOn: ActionOn.Indirect,
        },
      ],
      enable: false,
      shareable: true,
    },
    {
      label: "七窟遗智",
      describe:
        "处于抟风秘道的「祈风之赐」效果下的角色的普通攻击、重击、下落攻击、元素战技或元素爆发对敌人造成风元素伤害时，会产生烈风护持效果：基于珐露珊基础攻击力的32%，提高造成的伤害",
      effect: [{ type: BuffType.AnemoFixed, getValue: (data) => data.baseATK * 0.32, actionOn: ActionOn.External }],
      enable: false,
      shareable: true,
    },
    Constellation_E_3,
    Constellation_Q_5,
    {
      label: "6命·妙道合真",
      describe: "处于抟风秘道的「祈风之赐」效果影响下的角色，造成风元素伤害时的暴击伤害提升40%",
      effect: [{ type: BuffType.AnemoCritcalHurt, getValue: () => 40 }],
      enable: false,
      shareable: true,
      condition: ({ constellation }) => constellation >= 6,
    },
  ];
}

/** ![珐露珊](https://enka.network/ui/UI_AvatarIcon_Faruzan.png) */
export const Faruzan = new FaruzanData();
