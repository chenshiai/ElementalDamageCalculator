export const calDB = {
  storeName: "uesrSavedCalculations",
  keyPath: "title"
};

export interface IUesrSavedCalculations {
  title: string;
  characterEnkaId: number;
  constellation: number;
  weaponEnkaId: number;
  affix: number;
  relicList: string;
  normalLevel: number;
  skillLevel: number;
  burstLevel: number;
}