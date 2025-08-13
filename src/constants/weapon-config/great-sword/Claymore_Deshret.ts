import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 苇海信标 */
export const Claymore_Deshret = createWeapon(
    {
      name: "苇海信标",
      enkaId: 12511,
      weaponType: WeaponType.GreatSword,
      rarity: Rarity.Five,
      icon: getEnkaUI("UI_EquipIcon_Claymore_Deshret_Awaken"),
      baseAtk: 608,
      appendPropId: AppendProp.CRITICAL,
      statValue: 33.1,
    },
    (affix: number) => {
      const atk = [20, 25, 30, 35, 40][affix - 1] + "%";
      const hp = [32, 40, 48, 56, 64][affix - 1] + "%";
      return {
        title: "沙海守望",
        text: highlight`元素战技命中敌人后，攻击力提升${atk}，持续8秒；受到伤害后，攻击力提升${atk}，持续8秒。上述2种效果角色处于后台时也能触发。此外，不处在护盾庇护下时，生命值上限提高${hp}。`,
      };
    },
    (affix = 1) => {
      const atk = [20, 25, 30, 35, 40][affix - 1];
      const hp = [32, 40, 48, 56, 64][affix - 1];
      return [
        {
          label: "元素战技命中敌人，攻击力提升",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          describe: `元素战技命中敌人后，攻击力提升${atk}%`,
          enable: true,
        },
        {
          label: "受到伤害，攻击力提升",
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          describe: `受到伤害后，攻击力提升${atk}%`,
          enable: true,
        },
        {
          label: "不处于护盾庇护下，生命值提升",
          effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
          describe: `不处于护盾庇护下，生命值提升${hp}%`,
          enable: false,
        },
      ];
    }
  )