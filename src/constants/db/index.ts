import { IBuffBase, ICalculatorValue } from "@/types/interface";

export const calDB = {
  storeName: "uesrSavedCalculations",
  keyPath: "title"
};

export interface IUesrSavedCalculations {
  title: string;
  characterEnkaId: number;
  weaponEnkaId: number;
  affix: number;
  relicList: string;
  panel: ICalculatorValue
}