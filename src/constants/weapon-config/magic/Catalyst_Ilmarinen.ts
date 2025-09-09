import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 乌髓孑灯 */
export const Catalyst_Ilmarinen = createWeapon(
  {
    name: "乌髓孑灯",
    enkaId: 123123123,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Ilmarinen_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 221,
  },
  (affix = 1) => {
    let a = [48, 60, 72, 84, 96][affix - 1] + "%";
    let b = [12, 15, 18, 21, 24][affix - 1] + "%";
    return {
      title: "结契的凭证",
      text: highlight`绽放反应造成的伤害提升${a}，月绽放反应伤害提升${b}。月兆·满辉：月绽放反应伤害额外提升${b}。`,
    };
  },
  (affix = 1) => {
    let b = [12, 15, 18, 21, 24][affix - 1];
    return [
      {
        label: "结契的凭证",
        describe: `月绽放反应伤害提升${b}%。月兆·满辉：月绽放反应伤害额外提升${b}%。`,
        effect: [{ type: BuffType.MoonSwirlPrcent, getValue: (_, s) => (s > 0 ? b * 2 : b) }],
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
