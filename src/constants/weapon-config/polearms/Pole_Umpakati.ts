import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 镇山之钉 */
export const Pole_Umpakati = createWeapon(
  {
    name: "镇山之钉",
    enkaId: 13430,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Umpakati_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    let c = [0, 12, 15, 18, 21, 24][affix] + "%";
    return {
      title: "越峰之望",
      text: highlight`攀爬消耗的体力降低15%，元素战技造成的伤害提升${c}；此外，队伍中附件的其他角色施放元素战技后，装备者的元素战技造成的伤害还会提升${c}，持续8秒。`,
    };
  },
  (affix = 1) => {
    let c = [0, 12, 15, 18, 21, 24][affix];
    return [
      {
        label: "元素战技造成的伤害提升",
        describe: `元素战技造成的伤害提升${c}%`,
        effect: [{ type: BuffType.SkillPrcent, getValue: () => c }],
        enable: true,
      },
      {
        label: "元素战技造成的伤害进一步提升",
        describe: `队伍中附件的其他角色施放元素战技后，装备者的元素战技造成的伤害还会提升${c}%`,
        effect: [{ type: BuffType.SkillPrcent, getValue: () => c }],
        enable: true,
      },
    ];
  }
);
