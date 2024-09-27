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

  normalLevel: number;
  normalAttack: ISkillRate[];

  skillLevel: number;
  elementSkill?: ISkillRate[];

  burstLevel: number;
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
  getSkill?: (affix: number) => ISkillRate[];
}

export interface IRelicBase {
  setNameTextMapHash: number;
  equipType: EquipType;
  name: string;
  icon: string;
}

export interface ICalculatorValue {
  /** 角色等级 */
  level: number;
  /** 命之座 */
  constellation: number;
  /** 基础生命值 */
  baseHP: number;
  /** 基础攻击力 */
  baseATK: number;
  /** 基础防御力 */
  baseDEF: number;

  // 额外面板属性
  /** 额外生命值 */
  extraHP: number;
  /** 额外攻击力 */
  extraATK: number;
  /** 额外防御力 */
  extraDEF: number;
  /** 元素精通 */
  elementalMystery: number;
  /** 元素充能效率 */
  chargeEfficiency: number;
  
  // 由面板属性转化而来的属性，不可用于二次面板转化。统一用 _NT 结尾
  /** 额外生命值，不可二次转化 */
  extraHP_NT: number;
  /** 额外攻击力。不可二次转化 */
  extraATK_NT: number;
  /** 额外防御力，不可二次转化 */
  extraDEF_NT: number;
  /** 额外元素精通，不可二次转化 */
  elementalMystery_NT: number;
  /** 额外充能效率，不可二次转化 */
  chargeEfficiency_NT: number;
  // 进阶属性
  /** 暴击率 */
  [BuffType.Critcal]: number;
  /** 暴击伤害 */
  [BuffType.CritcalHurt]: number;
  /** 治疗加成 */
  [BuffType.HealAdd]: number;
  /** 受治疗加成 */
  [BuffType.BeHealAdd]: number;
  /** 护盾强效 */
  [BuffType.ShieldStrong]: number;
  /** 冷却缩减 */
  [BuffType.CoolDown]: number;
  // 元素增伤
  /** 物理伤害加成 */
  [BuffType.PhysicalPrcent]: number;
  /** 火元素伤害加成 */
  [BuffType.PyroPrcent]: number;
  /** 雷元素伤害加成 */
  [BuffType.ElectroPrcent]: number;
  /** 水元素伤害加成 */
  [BuffType.HydroPrcent]: number;
  /** 风元素伤害加成 */
  [BuffType.AnemoPrcent]: number;
  /** 冰元素伤害加成 */
  [BuffType.CryoPrcent]: number;
  /** 岩元素伤害加成 */
  [BuffType.GeoPrcent]: number;
  /** 草元素伤害加成 */
  [BuffType.DendroPrcent]: number;
  
  // 各种隐式暴击率
  /** 普通攻击暴击率加成 */
  [BuffType.NormalCritcal]: number;
  /** 重击暴击率加成 */
  [BuffType.StrongCritcal]: number;
  /** 下落攻击暴击率加成 */
  [BuffType.FallingCritcal]: number;
  /** 元素战技暴击率加成 */
  [BuffType.SkillCritcal]: number;
  /** 元素爆发暴击率加成 */
  [BuffType.BurstCritcal]: number;
  /** 物理伤害暴击率加成 */
  [BuffType.PhysicalCritcal]: number;
  /** 火元素伤害暴击率加成 */
  [BuffType.PyroCritcal]: number;
  /** 雷元素伤害暴击率加成 */
  [BuffType.ElectroCritcal]: number;
  /** 水元素伤害暴击率加成 */
  [BuffType.HydroCritcal]: number;
  /** 风元素伤害暴击率加成 */
  [BuffType.AnemoCritcal]: number;
  /** 冰元素伤害暴击率加成 */
  [BuffType.CryoCritcal]: number;
  /** 岩元素伤害暴击率加成 */
  [BuffType.GeoCritcal]: number;
  /** 草元素伤害暴击率加成 */
  [BuffType.DendroCritcal]: number;

  // 各种隐式爆伤
  /** 普攻暴击伤害加成 */
  [BuffType.NormalCritcalHurt]: number;
  /** 重击暴击伤害加成 */
  [BuffType.StrongCritcalHurt]: number;
  /** 下落攻击暴击伤害加成 */
  [BuffType.FallingCritcalHurt]: number;
  /** 元素战技暴击伤害加成 */
  [BuffType.SkillCritcalHurt]: number;
  /** 元素爆发暴击伤害加成 */
  [BuffType.BurstCritcalHurt]: number;
  /** 物理伤害暴击伤害加成 */
  [BuffType.PhysicalCritcalHurt]: number;
  /** 火元素伤害暴击伤害加成 */
  [BuffType.PyroCritcalHurt]: number;
  /** 雷元素伤害暴击伤害加成 */
  [BuffType.ElectroCritcalHurt]: number;
  /** 水元素伤害暴击伤害加成 */
  [BuffType.HydroCritcalHurt]: number;
  /** 风元素伤害暴击伤害加成 */
  [BuffType.AnemoCritcalHurt]: number;
  /** 冰元素伤害暴击伤害加成 */
  [BuffType.CryoCritcalHurt]: number;
  /** 岩元素伤害暴击伤害加成 */
  [BuffType.GeoCritcalHurt]: number;
  /** 草元素伤害暴击伤害加成 */
  [BuffType.DendroCritcalHurt]: number;

  // 攻击增伤
  /** 普通攻击伤害加成 */
  [BuffType.NormalPrcent]: number;
  /** 重击伤害加成 */
  [BuffType.StrongPrcent]: number;
  /** 下落攻击伤害加成 */
  [BuffType.FallingPrcent]: number;
  /** 元素战技伤害加成 */
  [BuffType.SkillPrcent]: number;
  /** 元素爆发伤害加成 */
  [BuffType.BurstPrcent]: number;
  /** 全局伤害加成 */
  [BuffType.GlobalPrcent]: number;

  // 攻击伤害提高
  /** 普攻伤害提高 */
  [BuffType.NormalFixed]: number;
  /** 重击伤害提高 */
  [BuffType.StrongFixed]: number;
  /** 下落攻击伤害提高 */
  [BuffType.FallingFixed]: number;
  /** 元素战技伤害提高 */
  [BuffType.SkillFixed]: number;
  /** 元素爆发伤害提高 */
  [BuffType.BurstFixed]: number;
  /** 全局伤害提高 */
  [BuffType.GlobalFixed]: number;

  // 元素伤害提高
  /** 物理伤害提高 */
  [BuffType.PhysicalFixed]: number;
  /** 火元素伤害提高 */
  [BuffType.PyroFixed]: number;
  /** 雷元素伤害提高 */
  [BuffType.ElectroFixed]: number;
  /** 水元素伤害提高 */
  [BuffType.HydroFixed]: number;
  /** 风元素伤害提高 */
  [BuffType.AnemoFixed]: number;
  /** 冰元素伤害提高 */
  [BuffType.CryoFixed]: number;
  /** 岩元素伤害提高 */
  [BuffType.GeoFixed]: number;
  /** 草元素伤害提高 */
  [BuffType.DendroFixed]: number;

  /** 生命之契 */
  [BuffType.LifeContract]: number;
  /** 普攻倍率提升 */
  [BuffType.NormalRate]: number;
  /** 重击倍率提升 */
  [BuffType.StrongRate]: number;
  /** 下落攻击倍率提升 */
  [BuffType.FallingRateAdd]: number;
  /** 元素战技倍率提升 */
  [BuffType.SkillRate]: number;
  /** 元素爆发倍率提升 */
  [BuffType.BurstRate]: number;
  /** 普攻天赋等级加成 */
  [BuffType.NormalLevel]: number;
  /** 元素战技天赋等级加成 */
  [BuffType.SkillLevel]: number;
  /** 元素爆发天赋等级加成 */
  [BuffType.BurstLevel]: number;
  /** 增幅反应系数提升 */
  [BuffType.AmplifiedRate]: number;
}
