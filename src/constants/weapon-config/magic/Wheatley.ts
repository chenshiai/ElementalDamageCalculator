import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 金流监督 */
export const Wheatley = createWeapon(
  {
    name: "金流监督",
    enkaId: 14513,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Wheatley_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    let atk = [16, 20, 24, 28, 32][affix - 1] + "%";
    let add = [16, 20, 24, 28, 32][affix - 1] + "%";
    let add2 = [14, 17.5, 21, 24.5, 28][affix - 1] + "%";
    let sp = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "黄金的血潮",
      text: highlight`攻击力提升${atk}。当前生命值提升或降低时，普通攻击造成的伤害提升${add}，重击造成的伤害提升${add2}。该效果持续4秒，至多叠加3层，每0.3秒至多触发一次；处于叠加3层的状态下时，攻击速度提升${sp}。`,
    };
  },
  (affix = 1) => {
    let atk = [16, 20, 24, 28, 32][affix - 1];
    let add = [16, 20, 24, 28, 32][affix - 1];
    let add2 = [14, 17.5, 21, 24.5, 28][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${atk}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
        enable: true,
      },
      {
        label: "普通攻击伤害，重击伤害提升",
        describe: `普通攻击造成的伤害提升${add}%，重击造成的伤害提升${add2}%。至多叠加3层`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: (_, stack) => add * stack },
          { type: BuffType.StrongPrcent, getValue: (_, stack) => add2 * stack },
        ],
        enable: true,
        stackable: true,
        stack: 3,
        limit: 3,
      },
    ];
  }
);
