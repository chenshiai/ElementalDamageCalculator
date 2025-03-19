import { ICalculatorValue } from "@/types/interface";
import { WeaponStats } from '@/types'

export const calDB = {
  storeName: "uesrSavedCalculations",
  keyPath: "title"
};

export const relicDB = {
  storeName: "userSavedRelicsList",
  keyPath: "timetemp",
}

export const playerInfoDB = {
  storeName: "playerInfo",
  keyPath: "uid",
}

/** 保存角色数据 */
export interface IUserSavedCalculationData {
  /** 所有者 */
  owner?: string;
  /** 数据标题 */
  title: string;
  /** 角色ID */
  characterEnkaId: number;
  /** 武器ID */
  weaponEnkaId: number;
  /** 武器精炼 */
  affix: number;
  /** 武器等级 */
  weaponLevel: number;
  /** 武器主属性 */
  weaponMainStats: WeaponStats;
  /** 武器副属性 */
  weaponSubStats: WeaponStats;
  /** 圣遗物列表JSON字符串 */
  relicList: string;
  /** 角色面板数据 */
  panel: ICalculatorValue
}

export interface IPlayerInfoData {
  uid: string;
  nickname: string;
  level: number;
  signature: string;
  worldLevel: number;
  nameCardId: number;
  finishAchievementNum: number;
  towerFloorIndex: number;
  towerLevelIndex: number;
  showAvatarInfoList: {
    avatarId: number;
    level: number;
    energyType: number;
  }[];
  showNameCardIdList: number[];
  profilePicture: {
    id: number;
  };
  theaterActIndex: number;
  theaterModeIndex: number;
  theaterStarIndex: number;
  fetterCount: number;
  towerStarIndex: number;
}