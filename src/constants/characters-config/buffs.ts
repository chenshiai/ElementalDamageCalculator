import { BuffType } from "@/types/enum";
import { IBuffBase } from "@/types/interface";

function createBuff(type: BuffType, value: number, star: 'A' | 'S', descSuffix: string): IBuffBase {
  return {
    label: `80级突破，${descSuffix}+${value}%`,
    describe: `${star === 'A' ? '4星角色' : '5星角色'}80级突破后+${value}%${descSuffix}`,
    effect: [{ type, getValue: () => value }],
    enable: true,
  };
}

export const A_80_ATK_24P = createBuff(BuffType.ATKPrcent, 24, 'A', '攻击力');
export const A_80_HP_24P = createBuff(BuffType.HPPrcent, 24, 'A', '生命值上限');
export const A_80_DEF_24P = createBuff(BuffType.DEFPrcent, 24, 'A', '防御力');
export const A_80_MYSTERY_96 = createBuff(BuffType.MysteryFixed, 96, 'A', '元素精通');
export const A_80_CHARGE_26P = createBuff(BuffType.ChargeFixed, 26.7, 'A', '元素充能效率');

export const A_80_GEO_24P = createBuff(BuffType.GeoPrcent, 24, 'A', '岩元素伤害加成');
export const A_80_CRYO_24P = createBuff(BuffType.CryoPrcent, 24, 'A', '冰元素伤害加成');
export const A_80_PYRO_24P = createBuff(BuffType.PyroPrcent, 24, 'A', '火元素伤害加成');
export const A_80_HYDRO_24P = createBuff(BuffType.HydroPrcent, 24, 'A', '水元素伤害加成');
export const A_80_ELECTRO_24P = createBuff(BuffType.ElectroPrcent, 24, 'A', '雷元素伤害加成');
export const A_80_ANEMO_24P = createBuff(BuffType.AnemoPrcent, 24, 'A', '风元素伤害加成');
export const A_80_DENDRO_24P = createBuff(BuffType.DendroPrcent, 24, 'A', '草元素伤害加成');
export const A_80_PHYSICAL_30P = createBuff(BuffType.PhysicalPrcent, 30, 'A', '物理伤害加成');

// 五星角色的buff
export const S_80_HP_28P = createBuff(BuffType.HPPrcent, 28.8, 'S', '生命值上限');
export const S_80_ATK_28P = createBuff(BuffType.ATKPrcent, 28.8, 'S', '攻击力');
export const S_80_DEF_28P = createBuff(BuffType.DEFPrcent, 28.8, 'S', '防御力');
export const S_80_CHARGE_32P = createBuff(BuffType.ChargeFixed, 32, 'S', '元素充能效率');
export const S_80_MYSTERY_115 = createBuff(BuffType.MysteryFixed, 115, 'S', '元素精通');
export const S_80_CRITAL_38P = createBuff(BuffType.Critcal, 19.2, 'S', '暴击率');
export const S_80_CRITALHUNT_38P = createBuff(BuffType.CritcalHurt, 38.4, 'S', '暴击伤害');

export const S_80_GEO_28P = createBuff(BuffType.GeoPrcent, 28.8, 'S', '岩元素伤害加成');
export const S_80_CRYO_28P = createBuff(BuffType.CryoPrcent, 28.8, 'S', '冰元素伤害加成');
export const S_80_PYRO_28P = createBuff(BuffType.PyroPrcent, 28.8, 'S', '火元素伤害加成');
export const S_80_HYDRO_28P = createBuff(BuffType.HydroPrcent, 28.8, 'S', '水元素伤害加成');
export const S_80_ELECTRO_28P = createBuff(BuffType.ElectroPrcent, 28.8, 'S', '雷元素伤害加成');
export const S_80_ANEMO_28P = createBuff(BuffType.AnemoPrcent, 28.8, 'S', '风元素伤害加成');
export const S_80_DENDRO_28P = createBuff(BuffType.DendroPrcent, 28.8, 'S', '草元素伤害加成');
export const S_80_PHYSICAL_36P = createBuff(BuffType.PhysicalPrcent, 36, 'S', '物理伤害加成');

const skillTypeLabel = {
  [BuffType.NormalLevel]: '普通攻击',
  [BuffType.SkillLevel]: '元素战技',
  [BuffType.BurstLevel]: '元素爆发',
};
// 创建 Constellation 对象的函数
function createConstellationBuff(
  constellation: number,
  skillType: BuffType,
): IBuffBase {

  return {
    label: `${constellation}命·${skillTypeLabel[skillType]}天赋等级提高3级`,
    describe: `${skillTypeLabel[skillType]}天赋等级提高3级`,
    condition({ constellation: currentConstellation }) {
      return currentConstellation >= constellation;
    },
    effect: [{ type: skillType, getValue: () => 3 }],
    enable: true,
  };
}

// 使用函数创建不同的 Constellation 对象
export const Constellation_A_3 = createConstellationBuff(3, BuffType.NormalLevel);
export const Constellation_E_3 = createConstellationBuff(3, BuffType.SkillLevel);
export const Constellation_Q_3 = createConstellationBuff(3, BuffType.BurstLevel);

export const Constellation_A_5 = createConstellationBuff(5, BuffType.NormalLevel);
export const Constellation_E_5 = createConstellationBuff(5, BuffType.SkillLevel);
export const Constellation_Q_5 = createConstellationBuff(5, BuffType.BurstLevel);