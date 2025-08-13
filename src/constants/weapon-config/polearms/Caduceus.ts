import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 沙中伟贤的对答 */
export const Caduceus = createWeapon(
  {
    name: "沙中伟贤的对答",
    enkaId: 13426,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Caduceus_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    const a = [8, 10, 12, 14, 16][affix - 1];
    return {
      title: "均衡的原理",
      text: highlight`进行治疗时，恢复${a}点能量，该效果每10秒至多触发一次，角色处于队伍后台时也能触发。`,
    };
  }
);
