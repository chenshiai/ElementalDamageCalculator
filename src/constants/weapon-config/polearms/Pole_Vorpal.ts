import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 公义的酬报 */
export const Pole_Vorpal = createWeapon(
  {
    name: "公义的酬报",
    enkaId: 13425,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Vorpal_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    return {
      title: "枪尖一点",
      text: highlight`受到治疗时，恢复${
        8 + (affix - 1) * 2
      }点能量，该效果每10秒至多触发一次，角色处于队伍后台时也能触发。`,
    };
  }
);
