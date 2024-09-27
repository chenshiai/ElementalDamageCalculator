import { AttackType, ElementType } from "@/types/enum";
import { ICalculatorValue, IRate } from "@/types/interface";

/**
 * ## 获取对应的伤害提高数值
 * 根据攻击类型`attackType`和元素类型`elementType`，从`calculatorValue`中获取
 * @param calculatorValue 
 * @param attackType 
 * @param elementType 
 * @returns 
 */
export function getIncreaseHunt(calculatorValue: ICalculatorValue, attackType: AttackType, elementType: ElementType) {
  let baseDamage = calculatorValue.globalIncreaseHunt;

  switch (attackType) {
    case AttackType.Normal: {
      baseDamage += calculatorValue.normalIncreaseHurt;
      break;
    }
    case AttackType.Strong: {
      baseDamage += calculatorValue.strongIncreaseHurt;
      break;
    }
    case AttackType.Falling: {
      baseDamage += calculatorValue.fallingIncreaseHurt;
      break;
    }
    case AttackType.Skill: {
      baseDamage += calculatorValue.elementalSkillIncreaseHurt;
      break;
    }
    case AttackType.Burst: {
      baseDamage += calculatorValue.elementalBurstIncreaseHurt;
      break;
    }
  }
  switch (elementType) {
    case ElementType.Physical: {
      baseDamage += calculatorValue.phycalIncreaseHunt;
      break;
    }
    case ElementType.Pyro: {
      baseDamage += calculatorValue.pyroIncreaseHunt;
      break;
    }
    case ElementType.Hydro: {
      baseDamage += calculatorValue.hydroIncreaseHunt;
      break;
    }
    case ElementType.Anemo: {
      baseDamage += calculatorValue.anemoIncreaseHunt;
      break;
    }
    case ElementType.Electro: {
      baseDamage += calculatorValue.electroIncreaseHunt;
      break;
    }
    case ElementType.Geo: {
      baseDamage += calculatorValue.geoIncreaseHunt;
      break;
    }
    case ElementType.Dendro: {
      baseDamage += calculatorValue.dendroIncreaseHunt;
      break;
    }
    case ElementType.Cryo: {
      baseDamage += calculatorValue.cryoIncreaseHunt;
      break;
    }
  }
  return baseDamage;
}

export function getBaseDamage(calculatorValue: ICalculatorValue, rate: IRate, level: number) {
  let result = 0;

  if (rate.atk) {
    const atk = calculatorValue.baseATK + calculatorValue.extraATK + calculatorValue.extraATK_NT;
    result += atk * rate.atk[level - 1];
  }
  if (rate.def) {
    const def = calculatorValue.baseDEF + calculatorValue.extraDEF + calculatorValue.extraDEF_NT;
    result += def * rate.def[level - 1];
  }
  if (rate.hp) {
    const hp = calculatorValue.baseHP + calculatorValue.extraHP + calculatorValue.extraHP_NT;
    result += hp * rate.hp[level - 1];
  }
  if (rate.em) {
    const em = calculatorValue.elementalMystery + calculatorValue.elementalMystery_NT;
    result += em * rate.em[level - 1];
  }

  return result;
}