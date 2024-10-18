import { ElementType } from "@/types/enum";
import { IBuffBase, ICalculatorValue } from "@/types/interface";

export const calDB = {
  storeName: "uesrSavedCalculations",
  keyPath: "title"
};

export interface IUesrSavedCalculations {
  title: string;
  characterEnkaId: number;
  characterElement: ElementType;
  weaponEnkaId: number;
  affix: number;
  relicList: string;
  panel: ICalculatorValue
}