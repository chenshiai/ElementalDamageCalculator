import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 赤角石溃杵 */
export const Itadorimaru = createWeapon(
  {
    name: "赤角石溃杵",
    enkaId: 12510,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Itadorimaru_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
  },
  (affix = 1) => {
    let a = [28, 35, 42, 49, 56][affix - 1] + "%";
    let d = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "御伽大王御伽话",
      text: highlight`防御力提高${a}；普通攻击与重击造成的伤害值提高，提高数值相当于防御力的${d}。`,
    };
  },
  (affix = 1) => {
    let a = [28, 35, 42, 49, 56][affix - 1];
    let d = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "防御力提高",
        describe: `防御力提高${a}%`,
        effect: [{ type: BuffType.DEFPrcent, getValue: () => d }],
        enable: true,
      },
      {
        label: "普通攻击与重击造成的伤害值提高",
        describe: `普通攻击与重击造成的伤害值提高，提高数值相当于防御力的${d}%`,
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data) => {
              return ((data.baseDEF + data.extraDEF + data.extraDEF_NT) * d) / 100;
            },
            actionOn: ActionOn.Indirect,
          },
          {
            type: BuffType.StrongFixed,
            getValue: (data) => {
              return ((data.baseDEF + data.extraDEF + data.extraDEF_NT) * d) / 100;
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
    ];
  }
);
