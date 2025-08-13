import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 静水流涌之辉 */
export const Regalis = createWeapon(
  {
    name: "静水流涌之辉",
    enkaId: 11513,
    icon: getEnkaUI("UI_EquipIcon_Sword_Regalis_Awaken"),
    baseAtk: 542,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 88.2,
    weaponType: WeaponType.Sword,
    rarity: Rarity.Five,
  },
  (affix = 1) => {
    const hp = [14, 17.5, 21, 24.5, 28][affix - 1] + "%";
    const skill = [8, 10, 12, 14, 16][affix - 1] + "%";
    return {
      title: "湖光的朝与暮",
      text: highlight`装备者的当前生命值提升或降低时，元素战技造成的伤害提升${skill}，该效果持续6秒，至多叠加3次，每0.2秒至多触发一次；队伍中其他角色的当前生命值提升或降低时，装备者的生命值上限提升${hp}，该效果持续6秒，至多叠加2次，每0.2秒至多触发一次。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    const hp = [14, 17.5, 21, 24.5, 28][affix - 1];
    const skill = [8, 10, 12, 14, 16][affix - 1];
    return [
      {
        label: "生命值提升或降低时，生命值提升",
        describe: `生命值提升${hp}%，至多叠加2次`,
        effect: [{ type: BuffType.HPPrcent, getValue: (_, s) => hp * s }],
        stackable: true,
        stack: 2,
        limit: 2,
        enable: true,
      },
      {
        label: "元素战技伤害提升",
        describe: `元素战技造成的伤害提升${skill}%，至多叠加3次`,
        effect: [{ type: BuffType.SkillPrcent, getValue: (_, s) => skill * s }],
        enable: true,
        stackable: true,
        stack: 3,
        limit: 3,
      },
    ];
  }
);
