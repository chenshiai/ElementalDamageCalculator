import db from "@/utils/db";
import { IUserSavedCalculationData, calDB } from "@/constants/db";
import { EquipType } from "@/types/enum";
import { MainstatType, SubstatType } from "@/constants/characters-config/relic-class";
import { Character } from "@/constants/characters-config/character";
import relicLibrary from "@/constants/characters-config/relic";
import { IRelicItem } from "@/constants/characters-config/relic-class";
import calculationPanel from "@/utils/calculate/calculate-panel";
import { Weapons } from "@/constants/characters-config/weapon";
import useWeanponInfo from "@/view/character-calculation/modules/weapon-info/index.js";
import useCharacterInfo from "@/view/character-calculation/modules/chararcter-info/index.js";
import useRelicInfo from "@/view/character-calculation/modules/relic-info/index.js";

interface Equip {
  itemId: number;
  weapon?: {
    level: number;
    affixMap: Record<number, number>;
  };
  reliquary?: {
    level: number;
  };
  flat: {
    rankLevel?: number;
    equipType?: EquipType;
    itemType?: "ITEM_WEAPON";
    setNameTextMapHash?: string;
    weaponStats?: SubstatType[];
    reliquarySubstats?: SubstatType[];
    reliquaryMainstat?: MainstatType;
  };
}

interface EnkaAvatarInfo {
  // 角色ID
  avatarId: number;
  propMap: {
    // 突破情况
    1002: { type: number; val: string };
    // 等级
    4001: { type: number; val: string };
  };
  talentIdList?: number[];
  fightPropMap: {
    // 基础生命值
    1: number;
    // 基础攻击力
    4: number;
    // 基础防御力
    7: number;
  };
  // 天赋等级
  skillLevelMap: Record<number, number>;
  equipList: Equip[];
}

function importData(avatarInfoList) {
  return avatarInfoList.forEach(async (element) => {
    await saveCalculationResult(element);
  });
}

const saveCalculationResult = async (enkaData: EnkaAvatarInfo) => {
  // 根据avatarId 查找角色信息
  const cha = Character.find((item) => {
    return item.enkaId === enkaData.avatarId;
  });
  // 获取角色增益
  const { characterBuffs } = useCharacterInfo(cha);

  // 从enka数据中筛选出武器信息
  const weaponInfo = enkaData.equipList.find((item) => {
    return item.weapon;
  });
  // 查找武器数据，获取武器增益
  const wea = Weapons.find((w) => w.enkaId === weaponInfo.itemId);
  const { weaponBuffs } = useWeanponInfo(wea);

  // 从enka数据中筛选出圣遗物信息
  const relicList = new Array(5).fill(null);
  enkaData.equipList
    .filter((item) => {
      return item.reliquary;
    })
    .forEach((item) => {
      const targetRelic = relicLibrary
        .find((suit) => {
          return suit.setNameTextMapHash === +item.flat.setNameTextMapHash;
        })
        .equip.find((relic) => {
          return relic.equipType === item.flat.equipType;
        });

      const relic = {
        rankLevel: item.flat.rankLevel,
        level: item.reliquary.level - 1,
        setNameTextMapHash: +item.flat.setNameTextMapHash,
        equipType: item.flat.equipType,
        reliquaryMainstat: item.flat.reliquaryMainstat,
        reliquarySubstats: item.flat.reliquarySubstats,
        timetemp: Date.now().toString(),
        name: targetRelic.name,
        icon: targetRelic.icon,
      };

      switch (targetRelic.equipType) {
        case EquipType.EQUIP_BRACER:
          relicList[0] = relic;
          break;
        case EquipType.EQUIP_NECKLACE:
          relicList[1] = relic;
          break;
        case EquipType.EQUIP_SHOES:
          relicList[2] = relic;
          break;
        case EquipType.EQUIP_RING:
          relicList[3] = relic;
          break;
        case EquipType.EQUIP_DRESS:
          relicList[4] = relic;
          break;
      }
    });

  // 获取圣遗物增益
  const { relicBuffs } = useRelicInfo(relicList);

  // 序列化技能等级
  const skillLevelMap = Object.entries(enkaData.skillLevelMap);

  let affix = 1;
  if (weaponInfo.weapon.affixMap) {
    affix = Object.entries(weaponInfo.weapon.affixMap)[0][1] + 1;
  }

  // 计算角色面板
  const panel = calculationPanel({
    characterInfo: {
      ...cha,
      baseATK: Math.floor(enkaData.fightPropMap[4] - weaponInfo.flat.weaponStats[0].statValue),
      baseDEF: Math.floor(enkaData.fightPropMap[7]),
      baseHP: Math.floor(enkaData.fightPropMap[1]),
      level: +enkaData.propMap[4001].val,
    },
    weapon: {
      ...wea,
      weaponStats: weaponInfo.flat.weaponStats,
      level: weaponInfo.weapon.level,
      affix,
    },
    relicList,
    characterBuffs: characterBuffs.value,
    weaponBuffs: weaponBuffs.value,
    relicBuffs: relicBuffs.value,
    buffs: [],
    constellation: enkaData.talentIdList ? enkaData.talentIdList.length : 0,
    baseResistance: 10,
    enemyLevel: 90,
    normalLevel: skillLevelMap[0][1],
    skillLevel: skillLevelMap[1][1],
    burstLevel: skillLevelMap[2][1],
  });

  // 保存角色数据
  const data: IUserSavedCalculationData = {
    title: `${cha.name}(玩家数据)`,
    characterEnkaId: enkaData.avatarId,
    weaponEnkaId: weaponInfo.itemId,
    affix,
    weaponLevel: weaponInfo.weapon.level,
    weaponMainStats: weaponInfo.flat.weaponStats[0],
    weaponSubStats: weaponInfo.flat.weaponStats[1],
    relicList: JSON.stringify(relicList),
    panel,
  };

  return db
    .add(calDB.storeName, data)
    .then(() => {
      console.log("保存游戏角色成功", cha.name);
    })
    .catch(() => {
      db.put(calDB.storeName, data).then(() => {
        console.log("游戏角色数据更新", cha.name);
      });
    });
};

export default importData;
