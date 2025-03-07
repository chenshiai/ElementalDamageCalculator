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
  title: string;
  characterEnkaId: number;
  weaponEnkaId: number;
  affix: number;
  weaponLevel: number;
  weaponMainStats: WeaponStats;
  weaponSubStats: WeaponStats;
  relicList: string;
  panel: ICalculatorValue
}
