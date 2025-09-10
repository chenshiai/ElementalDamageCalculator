import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 血染荒城 */
export const Pole_TummaLyhty = createWeapon(
  {
    name: "血染荒城",
    enkaId: 13516,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_TummaLyhty_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    let a = [36, 48, 60, 72, 84][affix - 1] + "%";
    let b = [28, 35, 42, 49, 56][affix - 1] + "%";
    let c = [12, 13, 14, 15, 16][affix - 1];
    return {
      title: "哀恸的赞礼",
      text: highlight`施放元素爆发后的3.5秒内，装备者对敌人造成的月感电反应伤害提高${a}。此外，装备者触发月感电反应后，将获得「荒落的挽歌」：暴击伤害提高${b}，持续6秒；并为装备者恢复${c}点元素能量，每14秒至多通过这种方式恢复一次元素能量。`,
    };
  },
  (affix = 1) => {
    let a = [36, 48, 60, 72, 84][affix - 1];
    let b = [28, 35, 42, 49, 56][affix - 1];
    return [ 
      {
        label: "月感电反应伤害提高",
        describe: `施放元素爆发后的3.5秒内，装备者对敌人造成的月感电反应伤害提高${a}%。`,
        effect: [{ type: BuffType.MoonElectroPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "「荒落的挽歌」",
        describe: `装备者触发月感电反应后，将获得「荒落的挽歌」：暴击伤害提高${b}%。`,
        effect: [{ type: BuffType.CritcalHurt, getValue: () => b }],
        enable: true,
      },
    ];
  }
);
