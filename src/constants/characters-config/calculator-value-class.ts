import { ElementType, EnchantingType, WeaponType } from "@/types/enum";
import { ICalculatorValue } from "@/types/interface";

/** 计算用的数据对象 */
class CalculatorValue implements ICalculatorValue {
  // 角色面板属性
  level: number = 90;
  overshoot: number = 6;
  constellation: number = 0;
  baseHP: number = 0;
  baseATK: number = 0;
  baseDEF: number = 0;
  elementalMystery: number = 0;
  critcal: number = 5;
  critcalHurt: number = 50;
  chargeEfficiency: number = 100;
  element: ElementType = ElementType.Physical;
  weapon: WeaponType = WeaponType.Sword;
  burstCharge: number = 0;

  // 额外面板属性
  extraHP: number = 0;
  extraATK: number = 0;
  extraDEF: number = 0;

  healAdd: number = 0;
  beHealAdd: number = 0;
  shieldStrong: number = 0;
  coolDown: number = 0;
  shieldAdd: number = 0;

  // 由面板属性转化而来的属性，不可用于二次面板转化。统一用 _NT 结尾
  extraHP_NT: number = 0;
  extraATK_NT: number = 0;
  extraDEF_NT: number = 0;
  elementalMystery_NT: number = 0;
  chargeEfficiency_NT: number = 0;

  // 各种隐式暴击率
  globalCritcal: number = 0;
  normalAttackCritcal: number = 0;
  strongAttackCritcal: number = 0;
  fallingAttackCritcal: number = 0;
  elementalSkillCritcal: number = 0;
  elementalBurstCritcal: number = 0;
  physicalCritcal: number = 0;
  pyroCritcal: number = 0;
  electroCritcal: number = 0;
  hydroCritcal: number = 0;
  anemoCritcal: number = 0;
  cryoCritcal: number = 0;
  geoCritcal: number = 0;
  dendroCritcal: number = 0;
  moonElectroCritcal: number = 0;
  moonSwirlCritcal: number = 0;

  // 各种隐式爆伤
  globalCritcalHunt: number = 0;
  normalAttackCritcalHurt: number = 0;
  strongAttackCritcalHurt: number = 0;
  fallingAttackCritcalHurt: number = 0;
  elementalSkillCritcalHurt: number = 0;
  elementalBurstCritcalHurt: number = 0;
  physicalCritcalHurt: number = 0;
  pyroCritcalHurt: number = 0;
  electroCritcalHurt: number = 0;
  hydroCritcalHurt: number = 0;
  anemoCritcalHurt: number = 0;
  cryoCritcalHurt: number = 0;
  geoCritcalHurt: number = 0;
  dendroCritcalHurt: number = 0;
  moonElectroCritcalHurt: number = 0;
  moonSwirlCritcalHurt: number = 0;

  // 攻击增伤
  normalAttackAddHunt: number = 0;
  strongAttackAddHunt: number = 0;
  fallingAttackAddHunt: number = 0;
  elementalSkillAddHunt: number = 0;
  elementalBurstAddHunt: number = 0;
  globalAddHunt: number = 0;
  globalMoonAddHunt: number = 0;

  // 攻击伤害提高
  normalIncreaseHurt: number = 0;
  strongIncreaseHurt: number = 0;
  fallingIncreaseHurt: number = 0;
  elementalSkillIncreaseHurt: number = 0;
  elementalBurstIncreaseHurt: number = 0;
  globalIncreaseHunt: number = 0;
  globalMoonIncreaseHunt: number = 0;

  // 元素增伤
  physicalAddHunt: number = 0;
  pyroAddHunt: number = 0;
  electroAddHunt: number = 0;
  hydroAddHunt: number = 0;
  anemoAddHunt: number = 0;
  cryoAddHunt: number = 0;
  geoAddHunt: number = 0;
  dendroAddHunt: number = 0;
  moonElectroAddHunt: number = 0;
  moonSwirlAddHunt: number = 0;

  // 元素伤害提高
  phycalIncreaseHunt: number = 0;
  pyroIncreaseHunt: number = 0;
  electroIncreaseHunt: number = 0;
  hydroIncreaseHunt: number = 0;
  anemoIncreaseHunt: number = 0;
  cryoIncreaseHunt: number = 0;
  geoIncreaseHunt: number = 0;
  dendroIncreaseHunt: number = 0;
  moonElectroIncreaseHunt: number = 0;
  moonSwirlIncreaseHunt: number = 0;

  // 生命之契
  lifeContract: number = 0;

  // 倍率提升
  normalRateAdd: number = 0;
  strongRateAdd: number = 0;
  fallingRateAdd: number = 0;
  skillRateAdd: number = 0;
  burstRateAdd: number = 0;
  moonElectroRateAdd: number = 0;
  moonSwirlRateAdd: number = 0;

  burstAdd: number = 0;
  skillAdd: number = 0;
  normalAdd: number = 0;
  strongAdd: number = 0;
  fallingAdd: number = 0;

  normalLevel: number = 0;
  skillLevel: number = 0;
  burstLevel: number = 0;

  normalLevelAdd: number = 0;
  skillLevelAdd: number = 0;
  burstLevelAdd: number = 0;

  amplifiedRate: number = 0;
  catalyzeRate: number = 0;
  enchanting: number = EnchantingType[ElementType.Physical];
  transform: number = EnchantingType[ElementType.Physical];
  defensePenetration: number = 0;

  enemyLevel = 90;
  enemyPhysicalResistance = 0;
  enemyPyroResistance = 0;
  enemyElectroResistance = 0;
  enemyHydroResistance = 0;
  enemyAnemoResistance = 0;
  enemyCryoResistance = 0;
  enemyGeoResistance = 0;
  enemyDendroResistance = 0;
  reduceArmour = 0;

  constructor(initialValues?: Partial<CalculatorValue>) {
    if (initialValues) {
      Object.assign(this, initialValues);
    }
  }
}

export default CalculatorValue;
