import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 赤沙之杖 */
export const Pole_Deshret = createWeapon(
  {
    name: "赤沙之杖",
    enkaId: 13511,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Deshret_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 44.1,
  },
  (affix = 1) => {
    let a = 28 + (affix - 1) * 7 + "%";
    let e = 52 + (affix - 1) * 13 + "%";
    return {
      title: "蜃气尽头的热梦",
      text: highlight`基于装备者元素精通的${e}，获得攻击力加成。元素战技命中敌人时，将产生持续10秒的「赤沙之梦」效果：基于装备者元素精通的${a}，获得攻击力加成，该效果至多叠加3层。`,
    };
  },
  (affix = 1) => {
    let a = 28 + (affix - 1) * 7;
    let e = 52 + (affix - 1) * 13;
    return [
      {
        label: "攻击力加成",
        describe: `基于装备者元素精通的${e}%，获得攻击力加成`,
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data) => (data.elementalMystery * e) / 100,
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
      {
        label: "攻击力进一步加成",
        describe: `元素战技命中敌人时，基于装备者元素精通的${a}%，获得攻击力加成，该效果至多叠加3层`,
        effect: [
          {
            type: BuffType.ATKFixed,
            getValue: (data, stack) => (data.elementalMystery * a * stack) / 100,
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        stack: 3,
        stackable: true,
        stackText: "赤沙之梦",
        limit: 3,
      },
    ];
  }
);
