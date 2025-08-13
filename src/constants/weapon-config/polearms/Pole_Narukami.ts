import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 薙草之稻光 */
export const Pole_Narukami = createWeapon(
  {
    name: "薙草之稻光",
    weaponType: WeaponType.Polearms,
    rarity: Rarity.Five,
    enkaId: 13509,
    icon: getEnkaUI("UI_EquipIcon_Pole_Narukami_Awaken"),
    baseAtk: 608,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 55.1,
  },
  (affix = 1) => {
    const limit = [80, 90, 100, 110, 120][affix - 1] + "%";
    const atk = [28, 35, 42, 49, 56][affix - 1] + "%";
    const car = [30, 35, 40, 45, 50][affix - 1] + "%";
    return {
      title: "非时之梦·常世灶食",
      text: highlight`攻击力获得提升，提升程度相当于元素充能效率超出100%部分的${atk}，至多通过这种方式提升${limit}。施放元素爆发后的12秒内，元素充能效率提升${car}。`,
    };
  },
  (affix = 1) => {
    const limit = [80, 90, 100, 110, 120][affix - 1];
    const atk = [28, 35, 42, 49, 56][affix - 1];
    const car = [30, 35, 40, 45, 50][affix - 1];
    return [
      {
        label: "攻击力提升",
        effect: [
          {
            type: BuffType.ATKPrcent,
            getValue: ({ chargeEfficiency }) => {
              const ec = (Math.max(0, chargeEfficiency - 100) * atk) / 100;
              const res = Math.min(limit, ec);
              return res;
            },
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        describe: `攻击力获得提升，提升程度相当于元素充能效率超出100%部分的${atk}%，至多通过这种方式提升${limit}%。`,
        enable: true,
      },
      {
        label: "元素充能效率提升",
        describe: `施放元素爆发后，元素充能效率提升${car}%`,
        effect: [{ type: BuffType.ChargeFixed, getValue: () => car }],
        enable: true,
      },
    ];
  }
);
