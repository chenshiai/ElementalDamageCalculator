import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 超越之钥 */
export const CrystallineSword = createWeapon(
  {
    name: "超越之钥",
    enkaId: 12516,
    weaponType: WeaponType.GreatSword,
    icon: getEnkaUI("UI_EquipIcon_Claymore_CrystallineSword_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 44.1,
  },
  (affix = 1) => {
    let a = [28, 35, 42, 49, 56][affix - 1] + "%";
    let d = [16, 20, 24, 28, 32][affix - 1] + "%";
    return {
      title: "白女皇的升变",
      text: highlight`攻击力提高${a}；<br/>此外，装备者的重击每次命中敌人后，都会短暂达成「超越」：使装备者的星烁反应伤害提升${d}，持续5秒。该效果至多叠加3层，每0.2秒至多叠加一层。`,
    };
  },
  (affix = 1) => {
    let a = [28, 35, 42, 49, 56][affix - 1] 
    let d = [16, 20, 24, 28, 32][affix - 1] 
    return [
      {
        label: "攻击力提高",
        describe: `攻击力提高${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: true,
      },
      {
        label: "星烁反应伤害提升",
        describe: `使装备者的星烁反应伤害提升${d}%，该效果至多叠加3层`,
        effect: [
          {
            type: BuffType.StellarConductPrcent,
            getValue: (_,s) => {
              return d * s;
            },
          },
          {
            type: BuffType.StellarSwirlPrcent,
            getValue: (_,s) => {
              return d * s;
            },
          },
        ],
        enable: true,
        stack: 3,
        limit: 3,
        stackable: true,
      },
    ];
  }
);
