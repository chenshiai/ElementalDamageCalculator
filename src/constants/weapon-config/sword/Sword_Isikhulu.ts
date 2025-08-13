import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 息燧之笛 */
export const Sword_Isikhulu = createWeapon(
  {
    name: "息燧之笛",
    enkaId: 11431,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Isikhulu_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 69,
  },
  (affix = 1) => {
    const def = [16, 20, 24, 28, 32][affix - 1] + "%";
    return {
      title: "镜与烟色的隐谜",
      text: highlight`施放元素战技时，防御力提升${def}，持续15秒。`,
    };
  },
  (affix = 1) => {
    const def = [16, 20, 24, 28, 32][affix - 1];
    return [
      {
        label: "镜与烟色的隐谜",
        describe: `施放元素战技时，防御力提升${def}%`,
        effect: [{ type: BuffType.DEFPrcent, getValue: () => def }],
        enable: false,
      },
    ];
  }
);
