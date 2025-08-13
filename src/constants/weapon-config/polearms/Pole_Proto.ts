import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 试作星镰 */
export const Pole_Proto = createWeapon(
  {
    name: "试作星镰",
    enkaId: 13402,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Proto_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "嗜魔",
      text: highlight`施放元素战技后，普通攻击和重击造成的伤害提高${a}。持续12秒，最多叠加2层。`,
    };
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "普通攻击和重击造成的伤害提高",
        describe: `普通攻击和重击造成的伤害提高${a}%，最多可以叠加2层`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
        enable: false,
        stackable: true,
        stack: 2,
        limit: 2,
      },
    ];
  }
);
