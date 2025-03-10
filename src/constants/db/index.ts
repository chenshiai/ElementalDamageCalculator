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

/** 保存角色数据 */
export interface IUserSavedCalculationData {
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
