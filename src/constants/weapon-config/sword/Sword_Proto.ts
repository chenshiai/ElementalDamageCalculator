import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 试作斩岩 */
export const Sword_Proto = createWeapon(
  {
    name: "试作斩岩",
    enkaId: 11406,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Proto_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 34.5,
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1] + "%";
    return {
      title: "碎石",
      text: highlight`普通攻击或重击命中时，攻击力和防御力提高${a}，持续6秒，最多叠加4层。该效果每0.3秒只能触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1];
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
