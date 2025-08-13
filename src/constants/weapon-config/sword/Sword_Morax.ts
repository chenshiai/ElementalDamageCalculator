import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 磐岩结绿 */
export const Sword_Morax = createWeapon(
  {
    name: "磐岩结绿",
    enkaId: 11505,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Morax_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 44.1,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [1.2, 1.5, 1.8, 2.1, 2.4][affix - 1] + "%";
    return {
      title: "护国的无垢之心",
      text: highlight`生命值提升${a}。此外，基于装备该武器的角色生命值上限的${b}，获得攻击力加成。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [1.2, 1.5, 1.8, 2.1, 2.4][affix - 1];
    return [
      {
        label: "生命值提升",
        describe: `生命值提升${a}%`,
        effect: [{ type: BuffType.HPPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "攻击力提升",
        describe: `基于装备该武器的角色生命值上限的${b}%，获得攻击力加成`,
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => {
              return ((data.baseHP + data.extraHP) * b) / 100;
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
    ];
  }
);
