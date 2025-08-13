import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 鹮穿之喙 */
export const Ibis = createWeapon(
  {
    name: "鹮穿之喙",
    enkaId: 15419,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Ibis_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let em = 40 + (affix - 1) * 10;
    return {
      title: "秘智之眸的青睐",
      text: highlight`重击命中敌人后的6秒内，角色元素精通提升${em}点。该效果至多叠加2层，每0.5秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let em = 40 + (affix - 1) * 10;
    return [
      {
        label: "秘智之眸的青睐",
        describe: `重击命中敌人后，角色元素精通提升${em}点。该效果至多叠加2层`,
        effect: [{ type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack }],
        stackable: true,
        limit: 2,
        stack: 2,
        enable: false,
      },
    ];
  }
);
