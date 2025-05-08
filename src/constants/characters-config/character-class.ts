import { ElementType, Rarity, WeaponType } from "@/types/enum";
import { IBuffBase, ICharacterInfo, ISkillRate } from "@/types/interface";

class Character {
  readonly enkaId: number;
  readonly name: string;
  readonly rarity: Rarity;
  readonly element: ElementType;
  readonly weapon: WeaponType;
  readonly burstCharge: number;
  readonly icons: {
    avatarIcon: string;
    constsIcon: string[];
    gachaImage: string;
  };
  readonly buffs?: IBuffBase[];
  readonly talentNames: string[];
  readonly normalAttack: ISkillRate[];
  readonly elementSkill: ISkillRate[];
  readonly burstSkill: ISkillRate[];
  readonly otherSkill: ISkillRate[];
  baseATK: number;
  baseHP: number;
  baseDEF: number;
  level: number;
  overshoot: number;

  constructor(info: ICharacterInfo) {
    this.enkaId = info.enkaId;
    this.name = info.name;
    this.rarity = info.rarity;
    this.element = info.element;
    this.weapon = info.weapon;
    this.burstCharge = info.burstCharge;
    this.icons = info.icons;
    this.buffs = info.buffs;
    this.talentNames = info.talentNames;
    this.normalAttack = info.normalAttack;
    this.elementSkill = info.elementSkill;
    this.burstSkill = info.burstSkill;
    this.otherSkill = info.otherSkill;
    this.baseATK = info.baseATK;
    this.baseHP = info.baseHP;
    this.baseDEF = info.baseDEF;
    this.level = info.level;
    this.overshoot = info.overshoot;
  }
}

export default Character;
