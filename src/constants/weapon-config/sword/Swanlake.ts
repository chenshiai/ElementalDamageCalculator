import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, AttackType, BuffTarget, BuffType, ElementType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 白湖冬羽 */
export const Sword_Swanlake = createWeapon(
  {
    name: "白湖冬羽",
    enkaId: 11520,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Swanlake_Awaken"),
    baseAtk: 674,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL,
    statValue: 22.1,
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1] + "%";
    let b = [50, 65, 80, 95, 110][affix - 1] + "%";
    let c = [4, 4.5, 5, 5.5, 6][affix - 1];
    return {
      title: "雪鹄的终幕舞",
      text: highlight`装备者的元素战技命中敌人时，获得「湖色的哀告」：攻击力提升${a}，持续8秒，至多叠加3层，每0.1秒至多触发一次，每层持续时间独立计算；持有3层时，装备者造成的星烁反应伤害的暴击伤害提升${b}，且触发星烁反应或造成星烁反应伤害时，还会使装备者恢复${c}点元素能量。上述恢复元素能量的效果每3.5秒至多触发一次。装备者处于队伍后台时，依然能触发上述效果。`,
    };
  },
  (affix = 1) => {
    let a = [8, 10, 12, 14, 16][affix - 1];
    let b = [50, 65, 80, 95, 110][affix - 1];
    return [
      {
        label: "攻击力提升，星烁反应伤害的暴击伤害提升",
        describe: `装备者的元素战技命中敌人时，获得「湖色的哀告」：攻击力提升${a}%，至多叠加3层;持有3层时，装备者造成的星烁反应伤害的暴击伤害提升${b}%`,
        effect: [
          { type: BuffType.ATKPrcent, getValue: (_, s) => s * a },
          { type: BuffType.StellarConductCritcalHurt, getValue: (_, s) => (s === 3 ? b : 0) },
          { type: BuffType.StellarSwirlCritcalHurt, getValue: (_, s) => (s === 3 ? b : 0) },
        ],
        enable: true,
        stack: 3,
        limit: 3,
        stackable: true,
      },
    ];
  },
);
