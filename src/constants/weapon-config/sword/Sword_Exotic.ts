import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 铁蜂刺 */
export const Sword_Exotic = createWeapon(
  {
    name: "铁蜂刺",
    enkaId: 11407,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Exotic_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    return {
      title: "注能之刺",
      text: highlight`造成元素伤害后的6秒内，角色造成的伤害提高${a}，该效果最多叠加2层。该效果每1秒可以触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "伤害提升",
        describe: `造成元素伤害后，角色造成的伤害提高${a}%，该效果最多叠加2层`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => s * a }],
        enable: false,
        stackable: true,
        stack: 2,
        limit: 2,
      },
    ];
  }
);
