import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 宗室猎枪 */
export const Pole_Theocrat = createWeapon(
  {
    name: "宗室猎枪",
    enkaId: 13408,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Theocrat_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "专注",
      text: highlight`攻击造成伤害时，暴击率提升${a}，最多堆叠5次。攻击造成暴击后，移除已有的专注效果。`,
    };
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "暴击率提升",
        describe: `攻击造成伤害时，暴击率提升${a}%，最多堆叠5次。攻击造成暴击后，移除已有的专注效果`,
        effect: [{ type: BuffType.Critcal, getValue: (_, s) => a * s }],
        enable: true,
        stackable: true,
        stack: 0,
        limit: 5,
      },
    ];
  }
);
