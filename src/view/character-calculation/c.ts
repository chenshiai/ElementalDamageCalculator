interface ICalculatorValue {
  // 角色面板属性
  level: number;
  constellation: number;
  baseHP: number;
  baseATK: number;
  baseDEF: number;
  elementalMystery: number;
  critcal: number;
  critcalHurt: number;
  chargeEfficiency: number;

  // 额外面板属性
  extraHP: number;
  extraATK: number;
  extraDEF: number;

  healAdd: number;
  beHealAdd: number;
  shieldStrong: number;
  coolDown: number;

  // 由面板属性转化而来的属性，不可用于二次面板转化。统一用 _NT 结尾
  extraHP_NT: number;
  extraATK_NT: number;
  extraDEF_NT: number;
  elementalMystery_NT: number;
  chargeEfficiency_NT: number; 
  
  // 各种隐式暴击率
  normalAttackCritcal: number;
  strongAttackCritcal: number;
  fallingAttackCritcal: number;
  elementalSkillCritcal: number;
  elementalBurstCritcal: number;
  physicalCritcal: number;
  pyroCritcal: number;
  electroCritcal: number;
  hydroCritcal: number;
  anemoCritcal: number;
  cryoCritcal: number;
  geoCritcal: number;
  dendroCritcal: number;

  // 各种隐式爆伤
  normalAttackCritcalHurt: number;
  strongAttackCritcalHurt: number;
  fallingAttackCritcalHurt: number;
  elementalSkillCritcalHurt: number;
  elementalBurstCritcalHurt: number;
  physicalCritcalHurt: number;
  pyroCritcalHurt: number;
  electroCritcalHurt: number;
  hydroCritcalHurt: number;
  anemoCritcalHurt: number;
  cryoCritcalHurt: number;
  geoCritcalHurt: number;
  dendroCritcalHurt: number;

  // 攻击增伤
  normalAttackAddHunt: number;
  strongAttackAddHunt: number;
  fallingAttackAddHunt: number;
  elementalSkillAddHunt: number;
  elementalBurstAddHunt: number;
  globalAddHunt: number;

  // 攻击伤害提高
  normalIncreaseHurt: number;
  strongIncreaseHurt: number;
  fallingIncreaseHurt: number;
  elementalSkillIncreaseHurt: number;
  elementalBurstIncreaseHurt: number;
  globalIncreaseHunt: number;

  // 元素增伤
  physicalAddHunt: number;
  pyroAddHunt: number;
  electroAddHunt: number;
  hydroAddHunt: number;
  anemoAddHunt: number;
  cryoAddHunt: number;
  geoAddHunt: number;
  dendroAddHunt: number;

  // 元素伤害提高
  phycalIncreaseHunt: number;
  pyroIncreaseHunt: number;
  electroIncreaseHunt: number;
  hydroIncreaseHunt: number;
  anemoIncreaseHunt: number;
  cryoIncreaseHunt: number;
  geoIncreaseHunt: number;
  dendroIncreaseHunt: number;

  // 生命之契
  lifeContract: number;
  // 倍率提升
  normalRateAdd: number;
  strongRateAdd: number;
  fallingRateAdd: number;
  skillRateAdd: number;
  burstRateAdd: number;
}

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