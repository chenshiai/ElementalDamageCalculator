import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 狼的末路 */
export const Wolfmound = createWeapon(
  {
    name: "狼的末路",
    enkaId: 12502,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_Wolfmound_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 49.6,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    let b = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "如狼般狩猎者",
      text: highlight`攻击力提高${a}；攻击命中生命值低于30%的敌人时队伍中所有成员的攻击力提高${b}，持续12秒。该效果30秒只能触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    let b = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "攻击力提高",
        describe: `攻击力提高${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "全队攻击力提高",
        describe: `攻击命中生命值低于30%的敌人时队伍中所有成员的攻击力提高${b}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => b }],
        enable: false,
        shareable: true,
        target: BuffTarget.All,
      },
    ];
  }
);
