import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 天目影打刀 */
export const Sword_Bakufu = createWeapon(
  {
    name: "天目影打刀",
    enkaId: 11414,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Bakufu_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 55.1,
  },
  (affix = 1) => {
    let b = [6, 7.5, 9, 10.5, 12][affix - 1];
    return {
      title: "岩藏之胤",
      text: highlight` 施放元素战技后，获得1个胤种，该效果每5秒至多触发一次。胤种持续30秒，至多同时存在3个。施放元素爆发后，会清除持有的所有胤种，并在2秒之后，基于消耗的胤种数量，每个为该角色恢复${b}点元素能量。`,
    };
  }
);
