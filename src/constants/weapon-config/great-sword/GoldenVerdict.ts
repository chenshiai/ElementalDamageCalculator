import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 裁断 */
export const GoldenVerdict = createWeapon(
  {
    name: "裁断",
    enkaId: 12512,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_GoldenVerdict_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    const atk = [20, 25, 30, 35, 40][affix - 1] + "%";
    const add = [18, 22.5, 27, 31.5, 36][affix - 1] + "%";
    return {
      title: "诸多朝与暮的誓约",
      text: highlight`攻击力提升${atk}；队伍中的角色获取结晶反应产生的晶片时，会为装备者赋予1枚「约印」，使元素战技造成的伤害提升${add}，约印持续15秒，至多同时持有2枚。所有约印将在装备者的元素战技造成伤害后的0.2秒后移除。`,
    };
  },
  (affix = 1) => {
    const atk = [20, 25, 30, 35, 40][affix - 1];
    const add = [18, 22.5, 27, 31.5, 36][affix - 1];
    return [
      {
        label: "攻击力提升",
        describe: `攻击力提升${atk}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
        enable: true,
      },
      {
        label: "元素战技伤害提升",
        describe: `元素战技造成的伤害提升${add}%，约印持续15秒，至多同时持有2枚`,
        effect: [{ type: BuffType.SkillPrcent, getValue: (_, stack) => add * stack }],
        stackable: true,
        stackText: "约印",
        limit: 2,
        enable: false,
        stack: 2,
      },
    ];
  }
);
