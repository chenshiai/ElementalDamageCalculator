import { createStore } from "vuex";
import { basicPanelSelectType } from "@/constants";

const damageModule = {
  state: () => {
    return {
      baseATK: 900, // 基础攻击
      extraATK: 1100, // 额外攻击
      extraFixedATK: 0, // 固定攻击加成
      extraPercentATK: 0, // 百分比攻击力加成

      baseDEF: 600, // 基础防御
      extraDEF: 400, // 额外防御
      extraFixedDEF: 0, // 固定防御加成
      extraPercentDEF: 0, // 百分比防御加成

      baseHP: 10000, // 基础生命
      extraHP: 4780, // 额外生命
      extraFixedHP: 0, // 固定生命值加成
      extraPercentHP: 0, // 百分比生命加成

      basicPanelSelect: basicPanelSelectType.ATK, // 所选基础数值细节，‘攻击力’‘防御力’‘生命值’‘元素精通’

      additionalDemage: 0, // 附加伤害
      critDemage: 50.0, // 暴击伤害
      elementDemage: 0, // 伤害倍率
      thunder: false, // 如雷套启用状态
      witch: false, // 魔女套启用状态
      elementalMystery: 0, // 元素精通
      baizhuHP: 0, // 白术生命值

      atkRate: 100, // 攻击力倍率
      armRate: 0, // 防御力倍率
      hpRate: 0, // 生命倍率
      emRate: 0, // 精通倍率

      extraRate: 0, // 倍率增幅
      atkType: "none", // 反应类型
      characterLevel: 90, // 人物等级
      enemyLevel: 90, // 敌人等级
      enemyResistance: 10, // 敌人抗性
      weaken: 0, // 敌人减抗
      armour: 0, // 敌人减防
      armourPiercing: 0, // 角色穿甲
    };
  },
  mutations: {
    setBasicPanelSelect(state, value) {
      state.basicPanelSelect = value;
    },

    setUnifiedState(state, value) { // 回填计算器内容
      const {
        baseATK,
        extraATK,
        extraFixedATK = 0,
        extraPercentATK,

        baseDEF = 0,
        extraDEF = 0,
        extraFixedDEF = 0,
        extraPercentDEF = 0,

        baseHP = 0,
        extraHP = 0,
        extraFixedHP = 0,
        extraPercentHP = 0,

        basicPanelSelect = basicPanelSelectType.ATK,

        additionalDemage = 0,
        critDemage,
        elementDemage,
        thunder = false,
        witch = false,
        elementalMystery = 0,
        baizhuHP = 0,

        atkRate,
        armRate,
        hpRate,
        emRate,

        extraRate = 0,
        atkType,
        characterLevel,
        enemyLevel,
        enemyResistance,
        weaken,
        armour = 0,
        armourPiercing = 0,
      } = value;
      state.baseATK = baseATK;
      state.extraATK = extraATK;
      state.extraFixedATK = extraFixedATK;
      state.extraPercentATK = extraPercentATK;

      state.baseDEF = baseDEF;
      state.extraDEF = extraDEF;
      state.extraFixedDEF = extraFixedDEF;
      state.extraPercentDEF = extraPercentDEF;

      state.baseHP = baseHP;
      state.extraHP = extraHP;
      state.extraFixedHP = extraFixedHP;
      state.extraPercentHP = extraPercentHP;

      state.basicPanelSelect = basicPanelSelect;

      state.additionalDemage = additionalDemage;
      state.critDemage = critDemage;
      state.elementDemage = elementDemage;
      state.elementalMystery = elementalMystery;
      state.witch = witch;
      state.thunder = thunder;
      state.baizhuHP = baizhuHP;

      state.atkRate = atkRate;
      state.armRate = armRate;
      state.hpRate = hpRate;
      state.emRate = emRate;

      state.extraRate = extraRate;
      state.atkType = atkType;
      state.characterLevel = characterLevel;
      state.enemyLevel = enemyLevel;
      state.enemyResistance = enemyResistance;
      state.weaken = weaken;
      state.armour = armour;
      state.armourPiercing = armourPiercing;
    }
  },
  getters: {
    sumExtraATKNumber(state) {
      const { baseATK, extraATK, extraPercentATK, extraFixedATK } = state
      return Math.round(
        extraATK + extraFixedATK + baseATK * (extraPercentATK / 100)
      );
    },
    sumExtraDEFNumber(state) {
      const { baseDEF, extraDEF, extraPercentDEF, extraFixedDEF } = state
      return Math.round(
        extraDEF + extraFixedDEF + baseDEF * (extraPercentDEF / 100)
      );
    },
    sumExtraHPNumber(state) {
      const { baseHP, extraHP, extraPercentHP, extraFixedHP } = state
      return Math.round(
        extraHP + extraFixedHP + baseHP * (extraPercentHP / 100)
      );
    },
  },
};

// 记录当前所选中的便签列表
const saveDataModule = {
  state: () => {
    return {
      selectedFixedATKNotes: [], // 固定攻击加成便签
      selectedExtraATKNotes: [], // 百分比攻击加成便签

      selectedFixedDEFNotes: [], // 固定防御加成便签
      selectedExtraDEFNotes: [], // 百分比防御加成便签

      selectedFixedHPNotes: [], // 固定生命加成便签
      selectedExtraHPNotes: [], // 百分比生命加成便签

      selectedFixedEMNotes: [], // 固定元素精通加成便签

      selectedElementDemageNotes: [], // 伤害倍率加成便签
      selectedAdditionalDemageNotes: [], // 伤害提升值便签
    }
  },
  mutations: {
    setSelectedFixedATKNotes(state, value) {
      state.selectedFixedATKNotes = value || [];
    },
    setSelectedExtraATKNotes(state, value) {
      state.selectedExtraATKNotes = value || [];
    },

    setSelectedFixedDEFNotes(state, value) {
      state.selectedFixedDEFNotes = value || [];
    },
    setSelectedExtraDEFNotes(state, value) {
      state.selectedExtraDEFNotes = value || [];
    },

    setSelectedFixedHPNotes(state, value) {
      state.selectedFixedHPNotes = value || [];
    },
    setSelectedExtraHPNotes(state, value) {
      state.selectedExtraHPNotes = value || [];
    },

    setSelectedFixedEMNotes(state, value) {
      state.selectedFixedEMNotes = value || [];
    },

    setSelectedElementDemageNotes(state, value) {
      state.selectedElementDemageNotes = value || [];
    },
    setSelectedAdditionalDemageNotes(state, value) {
      state.selectedAdditionalDemageNotes = value || [];
    }
  }
}

// 团队增益
const teamBuffs = {
  state: () => {
    return {
      enemyLevel: 90,
      baseResistance: 10,
      // 当前团队列表
      teamList: [],
      // 当前正在编辑的数据名称
      currentEdit: '',
    }
  },
  mutations: {
    setTeamList(state, value) {
      state.teamList = value || [];
      sessionStorage.setItem('teamList', JSON.stringify(value));
    },
    setCurrentEdit(state, value) {
      state.currentEdit = value;
    },
  }
}

const store = createStore({
  modules: {
    damageModule,
    saveDataModule,
    teamBuffs,
  },
});

export default store;
