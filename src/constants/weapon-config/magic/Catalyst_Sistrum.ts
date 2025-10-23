import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 真语秘匣 */
export const Catalyst_Sistrum = createWeapon(
  {
    name: "真语秘匣",
    enkaId: 14521,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Sistrum_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1] + "%";
    let b = [80, 100, 120, 140, 160][affix - 1];
    let c = [24, 30, 36, 42, 48][affix - 1] + "%";
    return {
      title: "伪言的真意",
      text: highlight`暴击率提升${a}。施放元素战技时，装备者获得「伪言之秘」效果：元素精通提升${b}点，持续12秒。装备者对敌人造成月绽放反应伤害时，装备者获得「真识之月」效果：暴击伤害提升${c}，持续4秒。「伪言之秘」效果与「真识之月」效果同时存在时，这些效果分别提升50%。`,
    };
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1];
    let b = [80, 100, 120, 140, 160][affix - 1];
    let c = [24, 30, 36, 42, 48][affix - 1];
    return [
      {
        label: "暴击率提升",
        describe: `装备者暴击率提升${a}%。`,
        effect: [{ type: BuffType.Critcal, getValue: () => a }],
        enable: true,
      },
      {
        label: "「伪言之秘」提升元素精通",
        describe: `施放元素战技时，装备者获得「伪言之秘」效果：元素精通提升${b}点。`,
        effect: [{ type: BuffType.MysteryFixed, getValue: () => b }],
        enable: true,
      },
      {
        label: "「真识之月」提升暴击伤害",
        describe: `装备者对敌人造成月绽放反应伤害时，装备者获得「真识之月」效果：暴击伤害提升${c}%。`,
        effect: [{ type: BuffType.CritcalHurt, getValue: () => c }],
        enable: true,
      },
      {
        label: "「伪言之秘」「真识之月」的效果提升50%",
        describe: `「伪言之秘」效果与「真识之月」效果同时存在时，这些效果分别提升50%。`,
        effect: [
          { type: BuffType.MysteryFixed, getValue: () => b * 0.5 },
          { type: BuffType.CritcalHurt, getValue: () => c * 0.5 },
        ],
        enable: true,
      },
    ];
  }
);
