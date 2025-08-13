import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 流月针 */
export const Pole_Exotic = createWeapon(
  {
    name: "流月针",
    enkaId: 13403,
    weaponType: WeaponType.Polearms,
    icon: getEnkaUI("UI_EquipIcon_Pole_Exotic_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 34.5,
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1] + "%";
    return {
      title: "注能之针",
      text: highlight`获得元素微粒或者元素晶球后的5秒内，普通攻击和重击额外造成${a}攻击力伤害 。`,
    };
  },
  (affix = 1) => {
    let a = [20, 25, 30, 35, 40][affix - 1];
    return [
      {
        label: "普通攻击与重击的造成的伤害提升",
        describe: `普通攻击与重击的造成的伤害提升${a}%`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: () => a },
          { type: BuffType.StrongPrcent, getValue: () => a },
        ],
        enable: true,
      },
    ];
  }
);
