import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 钢轮弓 */
export const Bow_Exotic = createWeapon(
  {
    name: "钢轮弓",
    enkaId: 15407,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Exotic_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.PHYSICAL_ADD_HURT,
    statValue: 69,
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1] + "%";
    let b = [1.2, 1.5, 1.8, 2.1, 2.4][affix - 1] + "%";
    return {
      title: "注能之矢",
      text: highlight`普通攻击与重击命中时，提升${a}攻击力与${b}普通攻击速度。该效果持续6秒，最多可以叠加4层，每0.3秒只能触发一次。`,
    };
  },
  (affix = 1) => {
    let a = [4, 5, 6, 7, 8][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `普通攻击与重击命中时，提升${a}%攻击力，最多可以叠加4层`,
        effect: [{ type: BuffType.ATKPrcent, getValue: (_, s) => s * a }],
        enable: false,
        stackable: true,
        stack: 4,
        limit: 4,
      },
    ];
  }
);
