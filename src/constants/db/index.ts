import { ICalculatorValue } from "@/types/interface";

export const calDB = {
  storeName: "uesrSavedCalculations",
  keyPath: "title"
};

export const relicDB = {
  storeName: "userSavedRelics",
  keyPath: null,
  autoIncrement: true
}

export interface IUserSavedCalculationData {
  title: string;
  characterEnkaId: number;
  weaponEnkaId: number;
  affix: number;
  relicList: string;
  panel: ICalculatorValue
}
