import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 匣里龙吟 */
export const Sword_Rockkiller = createWeapon(
    {
      name: "匣里龙吟",
      enkaId: 11405,
      weaponType: WeaponType.Sword,
      icon: getEnkaUI("UI_EquipIcon_Sword_Rockkiller_Awaken"),
      baseAtk: 510,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 41.3,
    },
    (affix = 1) => {
      const add = [20, 24, 28, 32, 36][affix - 1] + "%";
      return {
        title: "踏火息雷",
        text: highlight`对处于火元素或雷元素影响下的敌人，造成的伤害提高${add}。`,
      };
    },
    (affix = 1) => {
      const add = [20, 24, 28, 32, 36][affix - 1];
      return [
        {
          label: "踏火息雷",
          describe: `对处于火元素或雷元素影响下的敌人，造成的伤害提高${add}`,
          effect: [{ type: BuffType.GlobalPrcent, getValue: () => add }],
          enable: false,
        },
      ];
    }
  )