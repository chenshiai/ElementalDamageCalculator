import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 撼地者 */
export const Claymore_Isikhulu = createWeapon(
    {
      name: "撼地者",
      enkaId: 12431,
      weaponType: WeaponType.GreatSword,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Isikhulu_Awaken"),
      baseAtk: 565,
      rarity: Rarity.Four,
      appendPropId: AppendProp.ATTACK_PERCENT,
      statValue: 27.6,
    },
    (affix = 1) => {
      const add = [16, 20, 24, 28, 32][affix - 1] + "%";
      return {
        title: "苍翠之路的誓言",
        text: highlight`队伍中的角色触发火元素相关反应后，装备者元素战技造成的伤害提升${add}，持续8秒。该效果队伍中的角色处于队伍后台时也能触发。`,
      };
    },
    (affix = 1) => {
      const add = [16, 20, 24, 28, 32][affix - 1];
      return [
        {
          label: "苍翠之路的誓言",
          describe: `队伍中的角色触发火元素相关反应后，装备者元素战技伤害提升${add}%`,
          effect: [{ type: BuffType.SkillPrcent, getValue: () => add }],
          enable: true,
        },
      ];
    }
  )