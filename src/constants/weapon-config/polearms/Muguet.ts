import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 柔灯挽歌 */
export const Muguet = createWeapon(
    {
      name: "柔灯挽歌",
      enkaId: 13513,
      weaponType: WeaponType.Polearms,
      icon: getEnkaUI("UI_EquipIcon_Pole_Muguet_Awaken"),
      baseAtk: 608,
      rarity: Rarity.Five,
      appendPropId: AppendProp.CRITICAL,
      statValue: 33.1,
    },
    (affix = 1) => {
      const atk = [15, 19, 23, 27, 31][affix - 1] + "%";
      const add = [18, 23, 28, 33, 38][affix - 1] + "%";
      const ch = [12, 13, 14, 15, 16];
      return {
        title: "白晓的序曲",
        text: highlight`攻击力提升${atk}；装备者对敌人触发燃烧反应或对处于燃烧状态下的敌人造成草元素伤害后，造成的伤害提高${add}。该效果持续8秒，至多叠加2层；叠加至2层或2层的持续时间刷新时，恢复${ch}点元素能量，每12秒至多通过这种方式恢复一次元素能量。上述2种效果角色处于队伍后台时也能触发。`,
      };
    },
    (affix = 1) => {
      const atk = [15, 19, 23, 27, 31][affix - 1];
      const add = [18, 23, 28, 33, 38][affix - 1];
      return [
        {
          label: "攻击力提升",
          describe: `攻击力提升`,
          effect: [{ type: BuffType.ATKPrcent, getValue: () => atk }],
          enable: true,
        },
        {
          label: "燃烧后，伤害提升",
          describe: `对敌人触发燃烧反应或对处于燃烧状态下的敌人造成草元素伤害后，造成的伤害提高${add}%，至多叠加2层`,
          stackable: true,
          limit: 2,
          stack: 2,
          enable: true,
          effect: [{ type: BuffType.GlobalPrcent, getValue: (_, s) => add * s }],
        },
      ];
    }
  )