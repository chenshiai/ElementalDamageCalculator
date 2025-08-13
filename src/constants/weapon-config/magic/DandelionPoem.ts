import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 无垠蔚蓝之歌 */
export const DandelionPoem = createWeapon(
  {
    name: "无垠蔚蓝之歌",
    enkaId: 14426,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_DandelionPoem_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CHARGE_EFFICIENCY,
    statValue: 30.6,
  },
  (affix = 1) => {
    let atk = [8, 10, 12, 14, 16][affix - 1] + "%";
    let add = [6, 7.5, 9, 10.5, 12][affix - 1] + "%";
    return {
      title: "蔚蓝深空",
      text: highlight`普通攻击或重击命中敌人后的6秒内，普通攻击造成的伤害提升${atk}，重击造成的伤害提升${add}。该效果至多叠加3次，每0.3秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let atk = [8, 10, 12, 14, 16][affix - 1];
    let add = [6, 7.5, 9, 10.5, 12][affix - 1];
    return [
      {
        label: "蔚蓝深空",
        describe: `普通攻击造成的伤害提升${atk}%、重击造成的伤害提升${add}%，至多叠加3层`,
        effect: [
          { type: BuffType.NormalPrcent, getValue: (_, s) => atk * s },
          { type: BuffType.StrongPrcent, getValue: (_, s) => add * s },
        ],
        stackable: true,
        limit: 3,
        stack: 3,
        enable: false,
      },
    ];
  }
);
