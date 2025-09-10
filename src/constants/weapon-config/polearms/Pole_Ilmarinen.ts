import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 掘金之锹 */
export const Pole_Ilmarinen = createWeapon(
  {
    name: "掘金之锹",
    enkaId: 13433,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Ilmarinen_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 41.3,
  },
  (affix = 1) => {
    let a = [48, 60, 72, 84, 96][affix - 1] + "%";
    let b = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "当机立断",
      text: highlight`感电反应造成的伤害提升${a}，月感电反应造成的伤害提升${b}。月兆·满辉：月感电反应造成的伤害额外提升${b}。`,
    };
  },
  (affix = 1) => {
    let b = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "当机立断",
        describe: `月感电反应造成的伤害提升${b}%。月兆·满辉：月感电反应造成的伤害额外提升${b}%。`,
        effect: [{ type: BuffType.MoonElectroPrcent, getValue: (_, s) => (s > 0 ? b * 2 : b) }],
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
