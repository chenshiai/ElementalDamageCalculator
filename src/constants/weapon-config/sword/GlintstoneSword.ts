import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 引火之源 */
export const GlintstoneSword = createWeapon(
  {
    name: "引火之源",
    enkaId: 11436,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_GlintstoneSword_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1] + "%";
    return {
      title: "燃于雪原的星火",
      text: highlight`触发元素反应的12秒内，装备者的攻击力提升${a}；触发星烁反应的12秒内，装备者造成的星烁反应伤害提升${a}。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [16, 20, 24, 28, 32][affix - 1];
    return [
      {
        label: "攻击力提升，星烁反应伤害提升",
        describe: `触发元素反应的12秒内，装备者的攻击力提升${a}%；触发星烁反应的12秒内，装备者造成的星烁反应伤害提升${a}%`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: () => a },
          { type: BuffType.GlobalStartPrcent, getValue: () => a },
        ],
        enable: true,
      },
    ];
  }
);
