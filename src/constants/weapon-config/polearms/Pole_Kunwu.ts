import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 贯虹之槊 */
export const Pole_Kunwu = createWeapon(
  {
    name: "贯虹之槊",
    enkaId: 13504,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Kunwu_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 49.6,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [4, 5, 6, 7, 8][affix - 1] + "%";
    return {
      title: "金璋皇极",
      text: highlight`护盾强效提升${a}。攻击命中后的8秒内，攻击力提升${b}。该效果至多可叠加5层，每0.3秒只能触发一次。此外，处于护盾庇护下时，该效果的攻击力提升效果提高100%。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [4, 5, 6, 7, 8][affix - 1];
    return [
      {
        label: "护盾强效提升",
        describe: `护盾强效提升${a}%`,
        effect: [{ type: BuffType.ShieldStrong, getValue: () => a }],
        enable: true,
      },
      {
        label: "攻击力提升",
        describe: `攻击命中后的8秒内，攻击力提升${b}%。该效果至多可叠加5层`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
        enable: false,
        stackable: true,
        stack: 5,
        limit: 5,
      },
      {
        label: "攻击力提升效果提升100%",
        describe: `处于护盾庇护下时，上述效果的攻击力提升效果提高100%（注意层数保持一致）`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => stack * b }],
        enable: false,
        stackable: true,
        stack: 5,
        limit: 5,
      },
    ];
  }
);
