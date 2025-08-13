import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 护摩之杖 */
export const Homa = createWeapon(
  {
    name: "护摩之杖",
    enkaId: 13501,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Homa_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 66.2,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [0.8, 1, 1.2, 1.4, 1.6][affix - 1] + "%";
    let c = [1, 1.2, 1.4, 1.6, 1.8][affix - 1] + "%";
    return {
      title: "无羁的朱赤之蝶",
      text: highlight`生命值提升${a}。此外，基于装备该武器的角色生命值上限的${b}，获得攻击力加成。当装备该武器的角色生命值低于50%时，进一步获得${c}基于生命值上限的攻击力提升。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [0.8, 1, 1.2, 1.4, 1.6][affix - 1];
    let c = [1, 1.2, 1.4, 1.6, 1.8][affix - 1];
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
            transform: true,
          },
        ],
        enable: true,
      },
      {
        label: "攻击力进一步提升",
        describe: `装备该武器的角色生命值低于50%时，进一步获得${c}%基于生命值上限的攻击力提升`,
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => {
              return ((data.baseHP + data.extraHP) * c) / 100;
            },
            actionOn: ActionOn.Indirect,
            transform: true,
          },
        ],
        enable: false,
      },
    ];
  }
);
