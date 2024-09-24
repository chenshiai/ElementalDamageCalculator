import { ICalculatorValue } from "@/types/interface";

class BaseValue {
  level: number;
  baseHP: number;
  baseATK: number;
  baseDEF: number;
  elementalMystery: number;
  critcal: number;
  critcalHurt: number;
  chargeEfficiency: number;

  normalAttackAddHunt: number;
  strongAttackAddHunt: number;
  fallingAttackAddHunt: number;
  elementalSkillAddHunt: number;
  elementalBurstAddHunt: number;

  normalIncreaseHurt: number;
  strongIncreaseHurt: number;
  fallingIncreaseHurt: number;
  elementalSkillIncreaseHurt: number;
  elementalBurstIncreaseHurt: number;

  physicalAddHunt: number;
  pyroAddHunt: number;
  electroAddHunt: number;
  hydroAddHunt: number;
  anemoAddHunt: number;
  cryoAddHunt: number;
  geoAddHunt: number;
  dendroAddHunt: number;
  globalAddHunt: number;

  constructor(character: ICalculatorValue) {
    this.level = character.level;
    this.baseHP = character.baseHP;
    this.baseATK = character.baseATK;
    this.baseDEF = character.baseDEF;
    this.elementalMystery = character.elementalMystery;
    this.critcal = character.critcal;
    this.critcalHurt = character.critcalHurt;
    this.chargeEfficiency = character.chargeEfficiency;

    this.normalAttackAddHunt = character.normalAttackAddHunt;
    this.strongAttackAddHunt = character.strongAttackAddHunt;
    this.fallingAttackAddHunt = character.fallingAttackAddHunt;
    this.elementalSkillAddHunt = character.elementalSkillAddHunt;
    this.elementalBurstAddHunt = character.elementalBurstAddHunt;

    this.physicalAddHunt = character.physicalAddHunt;
    this.pyroAddHunt = character.pyroAddHunt;
    this.electroAddHunt = character.electroAddHunt;
    this.hydroAddHunt = character.hydroAddHunt;
    this.anemoAddHunt = character.anemoAddHunt;
    this.cryoAddHunt = character.cryoAddHunt;
    this.geoAddHunt = character.geoAddHunt;
    this.dendroAddHunt = character.dendroAddHunt;
    this.globalAddHunt = character.globalAddHunt;
  }
}

class AdvanceValue {

}