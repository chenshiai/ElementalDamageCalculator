import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 谧音吹哨 */
export const Sword_Ilmarinen = createWeapon(
  {
    name: "谧音吹哨",
    enkaId: 11433,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Ilmarinen_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 61.3,
  },
  (affix = 1) => {
    const a = [16, 20, 24, 28, 32][affix - 1] + "%";
    return {
      title: "沉声止语",
      text: highlight`触发元素反应后的12秒内，生命值上限提高${a}。月兆·满辉：该效果中的生命值上限额外提高${a}。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    const a = [16, 20, 24, 28, 32][affix - 1];
    return [
      {
        label: "沉声止语",
        describe: `触发元素反应后的12秒内，生命值上限提高${a}%。月兆·满辉：该效果中的生命值上限额外提高${a}%。`,
        effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => (s > 0 ? a * 2 : a) }],
        enable: true,
        stack: 0,
        limit: 1,
        stackText: "月兆·满辉",
        target: BuffTarget.Self,
        stackType: "switch",
        stackable: true,
      },
    ];
  }
);
