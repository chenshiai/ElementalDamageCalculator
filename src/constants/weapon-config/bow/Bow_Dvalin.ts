import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 天空之翼 */
export const Bow_Dvalin = createWeapon(
  {
    name: "天空之翼",
    enkaId: 15501,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Dvalin_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [60, 70, 80, 90, 100][affix - 1] + "%";
    let c = [4, 3.5, 3, 2.5, 2][affix - 1];
    return {
      title: "回响长天的诗歌",
      text: highlight`暴击伤害提高${a}；攻击命中时有${b}概率造成125%攻击力的小范围物理伤害，该效果每${c}秒只能触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "暴击伤害提高",
        describe: `暴击伤害提高${a}%`,
        effect: [{ type: BuffType.CritcalHurt, getValue: () => a }],
        enable: true,
      },
    ];
  },
  (affix = 1) => {
    return [
      {
        label: "天空之翼",
        rate: {
          atk: [1.25],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
