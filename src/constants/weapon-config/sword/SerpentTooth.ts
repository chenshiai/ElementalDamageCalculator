import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 熔猎异端之刃 */
export const SerpentTooth = createWeapon(
  {
    name: "熔猎异端之刃",
    enkaId: 11435,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_SerpentTooth_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [18, 22.5, 27, 31.5, 36][affix - 1] + "%";
    let b = [36, 45, 54, 63, 72][affix - 1] + "%";
    return {
      title: "独光的赐坠",
      text: highlight`装备者施放元素战技后，获得「映落瞳中的初光」：持续期间，将记录装备者的移动距离，每秒都将基于上一秒记录的移动距离，使装备者获得最低${a}、最高${b}的攻击力加成。该效果持续14秒，每14秒至多触发一次，并会在装备者退场时移除。`,
    };
  },
  (affix = 1) => {
    let b = [36, 45, 54, 63, 72][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${b}%，以最大值计算`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: () => b },
        ],
        enable: true,
      },
    ];
  }
);
