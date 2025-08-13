import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 西福斯的月光 */
export const Sword_Pleroma = createWeapon(
  {
    name: "西福斯的月光",
    enkaId: 11418,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Pleroma_Awaken"),
    baseAtk: 510,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ELEMENT_MASTERY,
    statValue: 165,
  },
  (affix = 1) => {
    let a = 0.036 + (affix - 1) * 0.009 + "%";
    return {
      title: "镇灵的低语",
      text: highlight`每10秒，产生如下效果：装备者的每点元素精通，都会为该角色提升${a}元素充能效率，并基于该提升的30%为队伍中附近的其他角色提升元素充能效率，持续12秒，多件同名武器产生的此效果可以叠加。角色处于队伍后台时也能触发效果。`,
    };
  },
  (affix = 1) => {
    let a = 0.036 + (affix - 1) * 0.009;
    return [
      {
        label: "充能效率提升",
        describe: `每点元素精通，都会为角色提升${a}%元素充能效率`,
        effect: [
          {
            type: BuffType.ChargeFixed,
            getValue: (data) => data.elementalMystery * a,
            actionOn: ActionOn.Indirect,
            transform: true,
          },
        ],
        enable: true,
      },
      {
        label: "全队充能效率提升",
        describe: `装备者的每点元素精通，都会为该角色提升${a}元素充能效率，并基于该提升的30%为队伍中附近的其他角色提升元素充能效率`,
        effect: [
          {
            type: BuffType.ChargeFixed,
            getValue: (data) => data.elementalMystery * a * 0.3,
            actionOn: ActionOn.Indirect,
            transform: true,
          },
        ],
        enable: false,
        shareable: true,
        target: BuffTarget.Other,
      },
    ];
  }
);
