import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 寸心余响 */
export const GlintstoneCatalyst = createWeapon(
  {
    name: "寸心余响",
    enkaId: 14436,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_GlintstoneCatalyst_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    let b = [60, 75, 90, 105, 120][affix - 1];
    return {
      title: "誓言的回音",
      text: highlight`触发元素反应的12秒内，装备者的元素精通提升${b}点；触发星烁反应的12秒内，装备者造成的星烁反应伤害提升${a}。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    let b = [60, 75, 90, 105, 120][affix - 1];
    return [
      {
        label: "元素精通、星烁反应伤害提升",
        describe: `触发元素反应的12秒内，装备者的元素精通提升${b}点；触发星烁反应的12秒内，装备者造成的星烁反应伤害提升${a}%`,
        effect: [
          { type: BuffType.GlobalStartPrcent, getValue: () => a },
          { type: BuffType.MysteryFixed, getValue: () => b },
        ],
        enable: true,
      },
    ];
  }
);
