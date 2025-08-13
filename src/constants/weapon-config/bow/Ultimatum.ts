import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 筑云 */
export const Ultimatum = createWeapon(
    {
      name: "筑云",
      enkaId: 15426,
      weaponType: WeaponType.Bow,
      icon: getEnkaUI("UI_EquipIcon_Bow_Ultimatum_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ELEMENT_MASTERY,
      statValue: 165,
    },
    (affix = 1) => {
      const em = [40, 50, 60, 70, 80][affix - 1];
      return {
        title: "镌岩为坊",
        text: highlight`元素能量减少后，装备者的元素精通提升${em}点。该效果持续18秒，至多叠加2层。`,
      };
    },
    (affix = 1) => {
      const em = [40, 50, 60, 70, 80][affix - 1];
      return [
        {
          label: "镌岩为坊",
          describe: `元素能量减少后，装备者的元素精通提升${em}点，至多叠加2层`,
          effect: [{ type: BuffType.MysteryFixed, getValue: (_, stack) => em * stack }],
          stackable: true,
          limit: 2,
          stack: 2,
          enable: false,
        },
      ];
    }
  )