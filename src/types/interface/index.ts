import { BuffEffect, BuffCondition, WeaponStats } from "../index";
import { ElementType, AttackType, Rarity, WeaponType, EquipType, BuffType } from "../enum";

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
  baseATK: number;
  baseHP: number;
  baseDEF: number;
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

  // 额外面板属性
  extraHP: number;
  extraATK: number;
  extraDEF: number;
  elementalMystery: number;
  chargeEfficiency: number;
  
  // 由面板属性转化而来的属性，不可用于二次面板转化。统一用 _NT 结尾
  extraHP_NT: number;
  extraATK_NT: number;
  extraDEF_NT: number;
  elementalMystery_NT: number;
  chargeEfficiency_NT: number;
  
  // 进阶属性
  [BuffType.Critcal]: number;
  [BuffType.CritcalHurt]: number;
  [BuffType.HealAdd]: number;
  [BuffType.BeHealAdd]: number;
  [BuffType.ShieldStrong]: number;
  [BuffType.CoolDown]: number;
  // 元素增伤
  [BuffType.PhysicalPrcent]: number;
  [BuffType.PyroPrcent]: number;
  [BuffType.ElectroPrcent]: number;
  [BuffType.HydroPrcent]: number;
  [BuffType.AnemoPrcent]: number;
  [BuffType.CryoPrcent]: number;
  [BuffType.GeoPrcent]: number;
  [BuffType.DendroPrcent]: number;
  
  // 各种隐式暴击率
  [BuffType.NormalCritcal]: number;
  [BuffType.StrongCritcal]: number;
  [BuffType.FallingCritcal]: number;
  [BuffType.SkillCritcal]: number;
  [BuffType.BurstCritcal]: number;
  [BuffType.PhysicalCritcal]: number;
  [BuffType.PyroCritcal]: number;
  [BuffType.ElectroCritcal]: number;
  [BuffType.HydroCritcal]: number;
  [BuffType.AnemoCritcal]: number;
  [BuffType.CryoCritcal]: number;
  [BuffType.GeoCritcal]: number;
  [BuffType.DendroCritcal]: number;

  // 各种隐式爆伤
  [BuffType.NormalCritcalHurt]: number;
  [BuffType.StrongCritcalHurt]: number;
  [BuffType.FallingCritcalHurt]: number;
  [BuffType.SkillCritcalHurt]: number;
  [BuffType.BurstCritcalHurt]: number;
  [BuffType.PhysicalCritcalHurt]: number;
  [BuffType.PyroCritcalHurt]: number;
  [BuffType.ElectroCritcalHurt]: number;
  [BuffType.HydroCritcalHurt]: number;
  [BuffType.AnemoCritcalHurt]: number;
  [BuffType.CryoCritcalHurt]: number;
  [BuffType.GeoCritcalHurt]: number;
  [BuffType.DendroCritcalHurt]: number;

  // 攻击增伤
  [BuffType.NormalPrcent]: number;
  [BuffType.StrongPrcent]: number;
  [BuffType.FallingPrcent]: number;
  [BuffType.SkillPrcent]: number;
  [BuffType.BurstPrcent]: number;
  [BuffType.GlobalPrcent]: number;

  // 攻击伤害提高
  [BuffType.NormalFixed]: number;
  [BuffType.StrongFixed]: number;
  [BuffType.FallingFixed]: number;
  [BuffType.SkillFixed]: number;
  [BuffType.BurstFixed]: number;
  [BuffType.GlobalFixed]: number;

  // 元素伤害提高
  [BuffType.PhysicalFixed]: number;
  [BuffType.PyroFixed]: number;
  [BuffType.ElectroFixed]: number;
  [BuffType.HydroFixed]: number;
  [BuffType.AnemoFixed]: number;
  [BuffType.CryoFixed]: number;
  [BuffType.GeoFixed]: number;
  [BuffType.DendroFixed]: number;

  // 生命之契
  [BuffType.LifeContract]: number;
  // 倍率提升
  [BuffType.NormalRate]: number;
  [BuffType.StrongRate]: number;
  [BuffType.FallingRateAdd]: number;
  [BuffType.SkillRate]: number;
  [BuffType.BurstRate]: number;
}
