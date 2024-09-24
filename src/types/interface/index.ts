import { BuffEffect, BuffCondition, WeaponStats } from "../index";
import { ElementType, AttackType, Rarity, WeaponType, EquipType } from "../enum";

/** 最终计算用的数据 */
export interface CalculatorData {
  constellation: number;
}

export interface IBuffBase {
  /** Buff展示名称 */
  label: string;
  /** Buff细节描述 */
  describe?: string;
  /** Buff的具体效果 */
  effect: BuffEffect[];
  /** Buff是否启用 */
  enable: boolean;
  /** Buff显示条件 */
  condition?: BuffCondition;
  /** Buff数值是否可叠加 */
  stackable?: boolean;
  /** 最大叠加层数 */
  limit?: number;
  /** 当前层数 */
  stack?: number;
}
export interface ISkillRate {
  label: string;
  rate: IRate;
  attackType: AttackType;
  elementType: ElementType;
}
export interface IRate {
  atk?: number[];
  hp?: number[];
  def?: number[];
  em?: number[];
}
export interface ICharacterInfo {
  name: string;
  rarity: Rarity;
  element: ElementType;
  weapon: WeaponType;
  level: number;
  icons: {
    avatarIcon: string;
    constsIcon: string[];
    skillsIcon: string[];
  };
  buffs?: IBuffBase[];
  talentNames: string[];
  normalAttack: ISkillRate[];
  strongAttack?: ISkillRate[];
  fallingAttack?: ISkillRate[];
  elementSkill?: ISkillRate[];
  burstSkill?: ISkillRate[];
  otherSkill?: ISkillRate[];
}

export interface IWeaponInfo {
  level: number;
  name: string;
  enkaId: number;
  weaponType: WeaponType;
  rarity: Rarity;
  affix: number;
  weaponStats: WeaponStats[];
  icon: string;
  getSkillDescribe: (affix: number) => {
    title: string;
    text: string;
  };
  getBuffs: (affix: number) => IBuffBase[];
}

export interface IRelicBase {
  setNameTextMapHash: number;
  equipType: EquipType;
  name: string;
  icon: string;
}

export interface ICalculatorValue {
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