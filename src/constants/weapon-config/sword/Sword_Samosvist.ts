import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 蝶变 */
export const Samosvist = createWeapon(
  {
    name: "蝶变",
    enkaId: 11522,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Samosvist_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 44.1,
  },
  (affix = 1) => {
    let a = [56, 72, 88, 104, 120][affix - 1] + "%";
    let v = [36, 45, 54, 63, 72][affix - 1] + "%";
    let n = [5, 5.5, 6, 6.5, 7][affix - 1];
    return {
      title: "破茧的自由舞",
      text: highlight`装备者每次施放元素战技或元素爆发时，将按照以下顺序，依次获得以下三种效果中的一种：\n
忠忱之风：装备者的暴击伤害提升${a}%，持续10秒；\n
叛弃之风：装备者造成的星扩散反应伤害提升${v}%，持续10秒；\n
丰获之风：为装备者恢复${n}点元素能量，每4秒至多通过这种方式恢复${n}点元素能量。\n
装备者退场时，将移除上述效果，并重置其顺序。`,
    };
  },
  (affix = 1) => {
    let a = [56, 72, 88, 104, 120][affix - 1];
    let v = [36, 45, 54, 63, 72][affix - 1];
    return [
      {
        label: "暴击伤害提升",
        describe: `忠忱之风：获得${a}%暴击伤害提升`,
        effect: [{ type: BuffType.CritcalHurt, getValue: () => a }],
        enable: true,
      },
      {
        label: "星扩散反应伤害提升",
        describe: `叛弃之风：获得${v}%星扩散反应伤害提升`,
        effect: [{ type: BuffType.StellarSwirlPrcent, getValue: () => v }],
        enable: true,
      },
    ];
  }
);
