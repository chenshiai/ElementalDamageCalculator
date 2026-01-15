import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 朏魄含光 */
export const Sword_SilverwareSaw = createWeapon(
  {
    name: "朏魄含光",
    enkaId: 11519,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_SilverwareSaw_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [64, 80, 96, 112, 128][affix - 1] + "%";
    return {
      title: "琅玕衍义",
      text: highlight`防御力提高${a}。装备者施放元素战技后的5秒内，月结晶反应伤害提升${b}。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [64, 80, 96, 112, 128][affix - 1];
    return [
      {
        label: "防御力提高",
        describe: `防御力提高${a}%`,
        effect: [{ type: BuffType.DEFPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "月结晶反应伤害提升",
        describe: `装备者施放元素战技后的5秒内，月结晶反应伤害提升${b}%`,
        effect: [{ type: BuffType.MoonCrystalPrcent, getValue: () => b }],
        enable: true,
      },
    ];
  }
);
