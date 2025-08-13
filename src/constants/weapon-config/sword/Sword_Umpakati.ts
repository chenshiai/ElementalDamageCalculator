import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 弥坚骨 */
export const Sword_Umpakati = createWeapon(
  {
    name: "弥坚骨",
    enkaId: 11430,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Umpakati_Awaken"),
    baseAtk: 565,
    rarity: Rarity.Four,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 27.6,
  },
  (affix = 1) => {
    let c = [0, 16, 20, 24, 28, 32][affix] + "%";
    return {
      title: "陷阵者的自矜",
      text: highlight`冲刺或代替冲刺的能力消耗的体力降低15%；此外，使用冲刺或代替冲刺的能力后，普通攻击造成的伤害提高，提高值数值相当于攻击力的${c}，该效果在生效18次或7s后消失。`,
    };
  },
  (affix = 1) => {
    let c = [0, 16, 20, 24, 28, 32][affix];
    return [
      {
        label: "普通攻击造成的伤害提高",
        describe: `普通攻击造成的伤害提高，提高值数值相当于攻击力的${c}%`,
        effect: [
          {
            type: BuffType.NormalFixed,
            getValue: (data) => (data.baseATK + data.extraATK + data.extraATK_NT) * c,
            actionOn: ActionOn.External,
          },
        ],
        enable: true,
      },
    ];
  }
);
