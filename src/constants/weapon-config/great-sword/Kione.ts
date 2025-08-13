import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 螭骨剑 */
export const Kione = createWeapon(
  {
    name: "螭骨剑",
    enkaId: 12409,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Kione_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [6, 7, 8, 9, 10][affix - 1] + "%";
    let b = [3, 2.7, 2.4, 2.2, 2][affix - 1] + "%";
    return {
      title: "破浪",
      text: highlight`角色在场上时，每4秒提升${a}造成的伤害，${b}受到的伤害。该效果最多叠加5层，不随角色退场重置，受到伤害后会减少1层效果。`,
    };
  },
  (affix = 1) => {
    let a = [6, 7, 8, 9, 10][affix - 1];
    return [
      {
        label: "伤害提高",
        describe: `每4秒提升${a}%造成的伤害，最多可以叠加5层`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => s * a }],
        enable: false,
        stackable: true,
        stack: 5,
        limit: 5,
      },
    ];
  }
);
