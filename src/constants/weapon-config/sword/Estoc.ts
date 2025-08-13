import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 赦罪 */
export const Estoc = createWeapon(
  {
    name: "赦罪",
    enkaId: 11515,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Estoc_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 44.1,
  },
  (affix = 1) => {
    const crt = [20, 25, 30, 35, 40][affix - 1] + "%";
    const add = [16, 20, 24, 28, 32][affix - 1] + "%";
    return {
      title: "死之契",
      text: highlight`暴击伤害提升${crt}；生命之契的数值增加时，装备者造成的伤害提升${add}。该效果持续6秒，至多叠加3次。`,
    };
  },
  (affix = 1) => {
    const crt = [20, 25, 30, 35, 40][affix - 1];
    const add = [16, 20, 24, 28, 32][affix - 1];
    return [
      {
        label: "暴击伤害提升",
        describe: `暴击伤害提升${crt}%`,
        effect: [{ type: BuffType.CritcalHurt, getValue: () => crt }],
        enable: true,
      },
      {
        label: "伤害提高",
        describe: `生命之契的数值增加时，装备者造成的伤害提升${add}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => add * s }],
        enable: false,
        stackable: true,
        stack: 3,
        limit: 3,
      },
    ];
  }
);
