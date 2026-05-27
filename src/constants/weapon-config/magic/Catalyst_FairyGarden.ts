import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { AppendProp, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 尘光七谕 */
export const Catalyst_FairyGarden = createWeapon(
  {
    name: "尘光七谕",
    enkaId: 14523,
    weaponType: WeaponType.Magic,
    icon: getEnkaUI("UI_EquipIcon_Catalyst_FairyGarden_Awaken"),
    baseAtk: 741,
    rarity: Rarity.Five,
    appendPropId: AppendProp.ATTACK_PERCENT,
    statValue: 16.5,
  },
  (affix = 1) => {
    let a = [10, 13, 16, 19, 22][affix - 1] + "%";
    let b = [26, 34, 42, 50, 58][affix - 1] + "%";
    let c = [14, 15, 16, 17, 18][affix - 1];
    return {
      title: "末临者的华冠",
      text: highlight`攻击力提升12%。装备者创造护盾后的20秒内，获得「先导之光」效果：依据装备者的攻击力，每1000点攻击力都会使队伍中自己的当前场上角色造成的伤害提升${a}，至多提升${b}。<br />此外，装备者创造护盾时，还会获得「指引者的餍足」效果，使装备者恢复${c}点元素能量，该效果每14秒至多触发一次；在不处于战斗状态下开启各类宝箱时，也会获得该效果。装备者处于队伍后台时，依然能触发上述效果。
魔导·秘仪：队伍中自己的魔导角色位于队伍后台时，也能获得「先导之光」中50%的伤害提升效果。`,
    };
  },
  (affix = 1) => {
    let a = [10, 13, 16, 19, 22][affix - 1];
    let b = [26, 34, 42, 50, 58][affix - 1];
    return [
      {
        label: "伤害提升",
        describe: `装备者每1000点攻击力都会使队伍中自己的当前场上角色造成的伤害提升${a}%，至多提升${b}%，魔导角色位于队伍后台时，获得「先导之光」中50%的伤害提升效果`,
        effect: [
          {
            type: BuffType.GlobalPrcent,
            getValue: (data, s) =>
              Math.min(b, ((data.baseATK + data.extraATK + data.extraATK_NT) / 1000) * a) / (s ? 2 : 1),
          },
        ],
        enable: true,
        shareable: true,
        stack: 0,
        limit: 1,
        stackable: true,
        stackType: "switch",
        stackText: "后台魔导",
      },
    ];
  }
);
