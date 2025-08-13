import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 暗巷闪光 */
export const Sword_Outlaw = createWeapon(
  {
    name: "暗巷闪光",
    enkaId: 11410,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Outlaw_Awaken"),
    baseAtk: 620,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 55,
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "街巷游侠",
      text: highlight`角色造成的伤害提升${a}。受到伤害后，该伤害提升效果会失效5秒。`,
    };
  },
  (affix = 1) => {
    let a = [12, 15, 18, 21, 24][affix - 1];

    return [
      {
        label: "伤害提升",
        describe: `角色造成的伤害提升${a}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => a }],
        enable: true,
      },
    ];
  }
);
