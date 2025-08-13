import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 辰砂之纺锤 */
export const Opus = createWeapon(
  {
    name: "辰砂之纺锤",
    enkaId: 11415,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Opus_Awaken"),
    baseAtk: 454,
    rarity: Rarity.Four,
    appendPropId: AppendProp.DEFENSE_PERCENT,
    statValue: 69,
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1] + "%";
    return {
      title: "无垢之心",
      text: highlight`元素战技造成的伤害值提高，提高数值相当于防御力的${a}。该效果每1.5秒最多触发一次，并将在元素战技造成伤害后的0.1秒后清除效果。`,
    };
  },
  (affix = 1) => {
    let a = [40, 50, 60, 70, 80][affix - 1];
    return [
      {
        label: "元素战技造成的伤害值提高",
        describe: `提高数值相当于防御力的${a}%`,
        effect: [
          {
            type: BuffType.SkillFixed,
            getValue: (data) => {
              return ((data.baseDEF + data.extraDEF + data.extraDEF_NT) * a) / 100;
            },
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: true,
      },
    ];
  }
);
