import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 星鹫赤羽 */
export const Bow_Qoyllorsnova = createWeapon(
  {
    name: "星鹫赤羽",
    enkaId: 15514,
    weaponType: WeaponType.Bow,
    icon: getEnkaUI("UI_EquipIcon_Bow_Qoyllorsnova_Awaken"),
    baseAtk: 608,
    rarity: Rarity.Five,
    appendPropId: AppendProp.CRITICAL_HURT,
    statValue: 66.2,
  },
  (affix = 1) => {
    const a = [24, 30, 36, 42, 48][affix - 1] + "%";
    const b = [20, 25, 30, 35, 40][affix - 1] + "%";
    const c = [48, 60, 72, 84, 96][affix - 1] + "%";
    const d = [10, 12.5, 15, 17.5, 20][affix - 1] + "%";
    const e = [24, 30, 36, 42, 48][affix - 1] + "%";
    return {
      title: "眸中的月珥",
      text: highlight`触发扩散反应后的12秒内，攻击力提高${a}。此外，队伍中存在至少1/2名与装备者元素类型不同的角色时，装备者重击造成的伤害提高(${b}/${c})，元素爆发造成的伤害提高(${d}/${e})。`,
    };
  },
  (affix = 1) => {
    const a = [24, 30, 36, 42, 48][affix - 1];
    const b = [20, 25, 30, 35, 40][affix - 1];
    const c = [48, 60, 72, 84, 96][affix - 1];
    const d = [10, 12.5, 15, 17.5, 20][affix - 1];
    const e = [24, 30, 36, 42, 48][affix - 1];
    return [
      {
        label: `攻击力提升${a}%`,
        describe: `触发扩散反应后的12秒内，攻击力提高${a}%`,
        effect: [{ type: BuffType.ATKPrcent, getValue: () => a }],
        enable: false,
      },
      {
        label: "重击伤害&元素爆发伤害提升",
        describe: `队伍中存在至少1/2名与装备者元素类型不同的角色时，装备者重击造成的伤害提高(${b}%/${c}%)，元素爆发造成的伤害提高(${d}%/${e}%)`,
        effect: [
          { type: BuffType.StrongPrcent, getValue: (_, s) => (s === 2 ? c : s === 1 ? b : 0) },
          { type: BuffType.BurstPrcent, getValue: (_, s) => (s === 2 ? e : s === 1 ? d : 0) },
        ],
        enable: true,
        stackable: true,
        stack: 2,
        limit: 2,
        stackText: "不同元素的角色数量",
      },
    ];
  }
);
