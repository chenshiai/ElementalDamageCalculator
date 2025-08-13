import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 盈满之实 */
export const Catalyst_Arakalari = createWeapon(
  {
    name: "盈满之实",
    enkaId: 14417,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_Arakalari_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 45.9,
  },
  (affix = 1) => {
    let e = 24 + (affix - 1) * 3;
    return {
      title: "圆满之相",
      text: highlight`触发元素反应后，获得「盈缺」效果：元素精通提升${e}点，攻击力降低5%。每0.3秒至多获得一层盈缺效果，至多叠加5层。未触发元素反应时将每6秒失去一层。角色处于队伍后台时也能触发效果。`,
    };
  },
  (affix = 1) => {
    let e = 24 + (affix - 1) * 3;
    return [
      {
        label: "元素精通提升、攻击力降低",
        describe: `触发元素反应后角色元素精通提升${e}点，攻击力降低5%，至多叠加5层`,
        effect: [
          { type: BuffType.MysteryFixed, getValue: (_, stack) => e * stack },
          { type: BuffType.ATKPrcent, getValue: (_, stack) => -5 * stack },
        ],
        enable: false,
        stackable: true,
        stackText: "盈缺",
        stack: 5,
        limit: 5,
      },
    ];
  }
);
