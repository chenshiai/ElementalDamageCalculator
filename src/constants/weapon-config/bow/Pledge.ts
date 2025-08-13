import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 最初的大魔术 */
export const Pledge = createWeapon(
  {
    name: "最初的大魔术",
    enkaId: 15512,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Pledge_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 66.2,
  },
  (affix = 1) => {
    let st = 16 + (affix - 1) * 4 + "%";
    let atk1 = 16 + (affix - 1) * 4;
    let atk2 = 32 + (affix - 1) * 8;
    let atk3 = 48 + (affix - 1) * 12;
    let atk = `${atk1}/${atk2}/${atk3}%`;
    let sp1 = 4 + (affix - 1) * 2;
    let sp2 = 7 + (affix - 1) * 2;
    let sp3 = 10 + (affix - 1) * 2;
    let sp = `${sp1}/${sp2}/${sp3}%`;

    return {
      title: "伟大者帕西法尔",
      text: highlight`重击造成的伤害提升${st}；队伍中每存在一位与装备者元素类型相同的角色（包括装备者自身），将获得1层「手法」效果；每存在一位元素类型不同的角色，将获得1层「演技」效果。处于1/2/3层及以上「手法」效果下时，攻击力提升${atk}；处于1/2/3层及以上「演技」效果下时移动速度提升${sp}。 `,
    };
  },
  (affix = 1) => {
    let st = 16 + (affix - 1) * 4;
    let atk1 = 16 + (affix - 1) * 4;
    let atk2 = 32 + (affix - 1) * 8;
    let atk3 = 48 + (affix - 1) * 12;
    let atk = [atk1, atk2, atk3];
    return [
      {
        label: "重击伤害提升",
        describe: `重击造成的伤害提升${st}%`,
        effect: [{ type: BuffType.StrongPrcent, getValue: () => st }],
        enable: true,
      },
      {
        label: "攻击力提升",
        describe: `处于1/2/3层及以上「手法」效果下时，攻击力提升${atk.join("/")}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, stack) => atk[stack - 1] || 0 }],
        enable: false,
        stackText: "手法",
        stackable: true,
        stack: 3,
        limit: 3,
      },
    ];
  }
);
