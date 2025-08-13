import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 浪影阔剑 */
export const Claymore_Vorpal = createWeapon(
  {
    name: "浪影阔剑",
    enkaId: 12425,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Vorpal_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = 24 + (affix - 1) * 6 + "%";
    return {
      title: "巡航的白浪",
      text: highlight`受到治疗后，攻击力提升${a}，持续8秒。角色处于队伍后台也能触发。`,
    };
  },
  (affix = 1) => {
    let a = 24 + (affix - 1) * 6;
    return [
      {
        label: "巡航的白浪",
        describe: `受到治疗后，攻击力提升${a}%，持续8秒`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: false,
      },
    ];
  }
);
