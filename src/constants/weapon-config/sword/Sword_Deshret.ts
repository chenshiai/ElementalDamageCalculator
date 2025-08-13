import { highlight, createWeapon } from "@/utils/calculate/create-data-methods";
import { ActionOn, AppendProp, BuffTarget, BuffType, Rarity, WeaponType } from "@/types/enum";
import { getEnkaUI } from "@/utils/decorator";

/** 圣显之钥 */
export const Sword_Deshret = createWeapon(
  {
    name: "圣显之钥",
    enkaId: 11511,
    weaponType: WeaponType.Sword,
    icon: getEnkaUI("UI_EquipIcon_Sword_Deshret_Awaken"),
    baseAtk: 542,
    rarity: Rarity.Five,
    appendPropId: AppendProp.HP_PERCENT,
    statValue: 66.2,
  },
  (affix = 1) => {
    const hp = [20, 25, 30, 35, 40][affix - 1] + "%";
    const rate = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1] + "%";
    const rate2 = [0.2, 0.25, 0.3, 0.35, 0.4][affix - 1] + "%";
    return {
      title: "沉入沙海的史诗",
      text: highlight`生命值提升${hp}。元素战技命中敌人时将产生持续20秒的「宏大诗篇」效果：基于装备者生命值上限的${rate}，获得元素精通提升，该效果每0.3秒至多触发一次，至多叠加3层。该效果叠加至3层或3层的持续时间刷新时，将基于装备者生命值上限的${rate2}，为队伍中附近所有角色提供元素精通提升，持续20秒。`,
    };
  },
  (affix = 1) => {
    const hp = [20, 25, 30, 35, 40][affix - 1];
    const rate = [0.12, 0.15, 0.18, 0.21, 0.24][affix - 1];
    const rate2 = [0.2, 0.25, 0.3, 0.35, 0.4][affix - 1];
    return [
      {
        label: "生命值上限提升",
        describe: `生命值上限提升${hp}`,
        effect: [{ type: BuffType.HPPrcent, getValue: () => hp }],
        enable: true,
      },
      {
        label: "自身元素精通提升",
        describe: `基于装备者生命值上限的${rate}%，获得元素精通提升，至多叠加3层`,
        effect: [
          {
            type: BuffType.MysteryFixed,
            getValue: (data, stack) => {
              return (((data.baseHP + data.extraHP) * rate) / 100) * stack;
            },
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        stackable: true,
        stackText: "宏大诗篇",
        stack: 3,
        limit: 3,
      },
      {
        label: "全队元素精通提升",
        describe: `基于装备者生命值上限的${rate2}%，为队伍中附近所有角色提供元素精通提升`,
        effect: [
          {
            type: BuffType.MysteryFixed,
            getValue: (data) => {
              return ((data.baseHP + data.extraHP) * rate2) / 100;
            },
            transform: true,
            actionOn: ActionOn.Indirect,
          },
        ],
        enable: false,
        shareable: true,
      },
    ];
  }
);
