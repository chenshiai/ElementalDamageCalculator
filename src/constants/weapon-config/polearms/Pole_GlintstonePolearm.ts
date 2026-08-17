import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 戍望谣歌 */
export const GlintstonePolearm = createWeapon(
  {
    name: "戍望谣歌",
    enkaId: 13436,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Pole_GlintstonePolearm_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 110,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [4, 5, 6, 7, 8][affix - 1];
    return {
      title: "旧日和弦",
      text: highlight`触发元素反应后，为装备者恢复${b}点元素能量，该效果每9秒至多触发一次；触发星烁反应的12秒内，装备者的攻击力提升${a}。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
