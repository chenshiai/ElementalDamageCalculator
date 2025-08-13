import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 白影剑 */
export const Claymore_Exotic = createWeapon(
  {
    name: "白影剑",
    enkaId: 12407,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Exotic_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 51.7,
  },
  (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    return {
      title: "注能之锋",
      text: highlight`普通攻击或重击命中时，攻击力和防御力提高${a}，持续6秒，最多叠加4层。该效果每0.3秒只能触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "攻击力和防御力提高",
        describe: `普通攻击或重击命中时，攻击力和防御力提高${a}%，最多叠加4层`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, s) => a * s },
          { type: BuffType.DEFPrcent, getValue: (_, s) => a * s },
        ],
        enable: false,
        stackable: true,
        stack: 4,
        limit: 4,
      },
    ];
  }
);
