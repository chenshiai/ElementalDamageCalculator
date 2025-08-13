import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 赤月之形 */
export const BloodMoon = createWeapon(
  {
    name: "赤月之形",
    enkaId: 13512,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_BloodMoon_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    const add = [12, 16, 20, 24, 28][affix - 1] + "%";
    const add2 = [24, 32, 40, 48, 56][affix - 1] + "%";

    return {
      title: "烬日之影",
      text: highlight`重击命中敌人时，赋予生命值上限25%的生命之契，该效果每14秒至多触发一次。此外，装备者具有生命之契时，造成的伤害提升${add}；若生命之契的数值大于等于生命值上限的30%，造成的伤害将进一步提升${add2}。`,
    };
  },
  (affix = 1) => {
    const add = [12, 16, 20, 24, 28][affix - 1];
    const add2 = [24, 32, 40, 48, 56][affix - 1];
    return [
      {
        label: "伤害提升",
        describe: `装备者具有生命之契时，造成的伤害提升${add}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
        enable: true,
      },
      {
        label: "伤害进一步提升",
        describe: `若生命之契的数值大于等于生命值上限的30%，造成的伤害将进一步提升${add2}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => add2 }],
        enable: true,
      },
    ];
  }
);
