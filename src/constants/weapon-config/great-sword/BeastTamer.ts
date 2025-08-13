import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 聊聊棒 */
export const BeastTamer = createWeapon(
  {
    name: "聊聊棒",
    enkaId: 12424,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_BeastTamer_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.CRITICAL,
    statValue: 18.4,
  },
  (affix = 1) => {
    let atk = 16 + (affix - 1) * 4 + "%";
    let add = 12 + (affix - 1) * 3 + "%";
    return {
      title: "「伶牙俐齿」",
      text: highlight`承受火元素附着后的15秒内，攻击力提升${atk}，每12秒至多触发一次；承受水元素、冰元素、雷元素或草元素附着后的15秒内，所有元素伤害加成提升${add}，每12秒至多触发一次。`,
    };
  },
  (affix = 1) => {
    let atk = 16 + (affix - 1) * 4;
    let add = 12 + (affix - 1) * 3;
    return [
      {
        label: "攻击力提升",
        describe: `承受火元素附着后的15秒内，攻击力提升${atk}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
        enable: false,
      },
      {
        label: "元素伤害提升",
        describe: `承受水元素、冰元素、雷元素或草元素附着后，所有元素伤害加成提升${add}%`,
        effect: [
          { type: BuffType.PyroPrcent, getValue: () => add },
          { type: BuffType.HydroPrcent, getValue: () => add },
          { type: BuffType.AnemoPrcent, getValue: () => add },
          { type: BuffType.ElectroPrcent, getValue: () => add },
          { type: BuffType.CryoPrcent, getValue: () => add },
          { type: BuffType.GeoPrcent, getValue: () => add },
          { type: BuffType.DendroPrcent, getValue: () => add },
        ],
        enable: false,
      },
    ];
  }
);
