import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 苍纹角杯 */
export const ConchSprayer = createWeapon(
  {
    name: "苍纹角杯",
    enkaId: 14427,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_ConchSprayer_Awaken"),
    rarity: Rarity.Four,
    baseAtk: 510,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 41.3,
    weaponType: WeaponType.Magic,
  },
  (affix = 1) => {
    const hp = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "图帕克之握",
      text: highlight`攻击命中敌人时，在目标位置基于生命值上限的${hp}，造成范围伤害。该效果每15秒至多触发一次。`,
    };
  },
  () => [],
  (affix = 1) => {
    const hp = [40, 50, 60, 70, 80][affix - 1] / 100;
    return [
      {
        label: "图帕克之握",
        rate: {
          hp: [hp],
        },
        attackType: AttackType.Other,
        elementType: ElementType.Physical,
      },
    ];
  }
);
