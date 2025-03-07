import mockData from '../../../public/enkaData/ex.js'

import { IUserSavedCalculationData, calDB } from "@/constants/db";
import { EquipType } from '@/types/enum'
import { MainstatType, SubstatType } from '@/constants/characters-config/relic-class'
import { Character } from '@/constants/characters-config/character'

interface Equip {
  itemId: number;
  weapon?: {
    level: number;
    affixMap: Record<number, number>
  };
  reliquary?: {
    level: number;
  },
  flat: {
    equipType?: EquipType;
    itemType?: 'ITEM_WEAPON';
    setNameTextMapHash?: string;
    reliquaryMainstat?: MainstatType;
    reliquarySubstats?: SubstatType[];
  }
}

interface EnkaAvatarInfo {
  // 角色ID
  avatarId: number;
  propMap: {
    // 突破情况
    1002: { type: number; val: string },
    // 等级
    4001: { type: number; val: string },
  },
  fightPropMap: {
    // 基础生命值
    1: number;
    // 基础攻击力
    4: number;
    // 基础防御力
    7: number;
  },
  // 天赋等级
  skillLevelMap: Record<number, number>;
  equipList: Equip[]
}

function createAvatar(enkaData: EnkaAvatarInfo) {
  console.log(Character.find((item) => {
    return item.enkaId === enkaData.avatarId
  }))
}

function importData() {
  mockData.avatarInfoList.forEach(element => {
    createAvatar(element)
  });
}

export default importData