import { createStore } from "vuex";

const characterModule = {
  state: () => {
    return { characterSelect: [{}, {}, {}, {}] };
  },
  mutations: {
    setCharacterSelect(state, value) {
      state.characterSelect = new Array(4).fill({}).map((_item, index) => {
        return value[index] || {};
      });
    },
  },
};

const demageModule = {
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
      extraHP: 8000, // 额外生命
      extraFixedHP: 0, // 固定生命值加成
      extraPercentHP: 0, // 百分比生命加成

      basicPanelSelect: '攻击力', // 所选伤害结算的基础数值，‘攻击力’‘防御力’‘生命值’

      additionalDemageList: [], // 附加伤害列表
      critDemage: 50.0, // 暴击伤害
      elementDemage: 0, // 伤害倍率
      thunder: false, // 如雷套启用状态
      witch: false, // 魔女套启用状态
      elementalMystery: 0, // 元素精通
      atkRate: 100, // 攻击力倍率
      extraRate: 0, // 倍率增幅
      atkType: "none", // 反应类型
      characterLevel: 80, // 人物等级
      enemyLevel: 80, // 敌人等级
      enemyResistance: 10, // 敌人抗性
      weaken: 0, // 敌人减抗
      armourList: [], // 减防穿防列表
      armour: 0, // 敌人减防
      armourPiercing: 0, // 角色穿甲
    };
  },
  mutations: {
    setBasicPanelSelect(state, value) {
      state.basicPanelSelect = value;
    },
    setUnifiedState(state, value) {
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

        basicPanelSelect = '攻击力',

        additionalDemageList = [],
        critDemage,
        elementDemage,
        thunder = false,
        witch = false,
        elementalMystery = 0,
        atkRate,
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

      state.additionalDemageList = additionalDemageList;
      state.critDemage = critDemage;
      state.elementDemage = elementDemage;
      state.elementalMystery = elementalMystery;
      state.witch = witch;
      state.thunder = thunder;
      state.atkRate = atkRate;
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
      selectedFixedATKNotes: {}, // 固定攻击加成便签
      selectedExtraATKNotes: {}, // 百分比攻击加成便签

      selectedFixedDEFNotes: {}, // 固定防御加成便签
      selectedExtraDEFNotes: {}, // 百分比防御加成便签

      selectedFixedHPNotes: {}, // 固定生命加成便签
      selectedExtraHPNotes: {}, // 百分比生命加成便签

      selectedElementDemageNotes: {}, // 伤害倍率加成便签
    }
  },
  mutations: {
    setSelectedFixedATKNotes(state, value) {
      state.selectedFixedATKNotes = value || {};
    },
    setSelectedExtraATKNotes(state, value) {
      state.selectedExtraATKNotes = value || {};
    },

    setSelectedFixedDEFNotes(state, value) {
      state.selectedFixedDEFNotes = value || {};
    },
    setSelectedExtraDEFNotes(state, value) {
      state.selectedExtraDEFNotes = value || {};
    },

    setSelectedFixedHPNotes(state, value) {
      state.selectedFixedHPNotes = value || {};
    },
    setSelectedExtraHPNotes(state, value) {
      state.selectedExtraHPNotes = value || {};
    },

    setSelectedElementDemageNotes(state, value) {
      state.selectedElementDemageNotes = value || {};
    }
  }
}

const store = createStore({
  modules: {
    characterModule,
    demageModule,
    saveDataModule,
  },
});

export default store;
