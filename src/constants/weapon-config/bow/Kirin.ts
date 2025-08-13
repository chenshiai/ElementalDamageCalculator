import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 若水 */
export const Kirin = createWeapon(
  {
    name: "若水",
    enkaId: 15508,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Kirin_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    const hp = [16, 20, 24, 28, 32][affix - 1] + "%";
    const add = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "洗濯诸类之形",
      text: highlight`生命值提升${hp}。周围存在敌人时，装备该武器的角色造成的伤害都会提升${add}，不论该角色处于场上或是处于队伍后台。`,
    };
  },
  (affix = 1) => {
    const hp = [16, 20, 24, 28, 32][affix - 1];
    const add = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "生命值提升",
        describe: `生命值提升${hp}%`,
        effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
        enable: true,
      },
      {
        label: "造成的伤害提升",
        describe: `角色造成的伤害提升${add}%`,
        effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
        enable: true,
      },
    ];
  }
);
