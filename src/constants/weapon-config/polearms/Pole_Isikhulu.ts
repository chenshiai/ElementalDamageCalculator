import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 虹的行迹 */
export const Pole_Isikhulu = createWeapon(
    {
      name: "虹的行迹",
      enkaId: 13431,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Isikhulu_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.DEFENSE_PERCENT,
      statValue: 51.7,
    },
    (affix = 1) => {
      const def = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "流水与泉的约定",
        text: highlight`施放元素战技时，防御力提升${def}%，持续15秒。`,
      };
    },
    (affix = 1) => {
      const def = [16, 20, 24, 28, 32][affix - 1];
      return [
        {
          label: "流水与泉的约定",
          describe: `施放元素战技时，防御力提升${def}%`,
          effect: [{ type: BuffType.DEFPrcent, getValue: () => def }],
          enable: true,
        },
      ];
    }
  )