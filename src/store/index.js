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
      baseATK: 550,
      extraATK: 660,
      extraFixedAtk: 0,
      extraPercentATK: 0,
      additionalDemageList: [],
      critDemage: 50.0,
      elementDemage: 0,
      evaporationDemage: 0.0,
      atkRate: 100,
      extraRate: 0,
      atkType: "none",
      characterLevel: 80,
      enemyLevel: 80,
      enemyResistance: 10,
      weaken: 0,
      armour: 0,
      armourList: [],
    };
  },
  mutations: {
    setBaseATK(state, value) {
      state.baseATK = value;
    },
    setExtraATK(state, value) {
      state.extraATK = value;
    },
    setExtraFixedAtk(state, value) {
      state.extraFixedAtk = value;
    },
    setExtraPercentATK(state, value) {
      state.extraPercentATK = value;
    },
    setAdditionalDemageList(state, value) {
      state.additionalDemageList = value;
    },
    setCritDemage(state, value) {
      state.critDemage = value;
    },
    setElementDemage(state, value) {
      state.elementDemage = value;
    },
    setEvaporationDemage(state, value) {
      state.evaporationDemage = value;
    },
    setAtkRate(state, value) {
      state.atkRate = value;
    },
    setAtkType(state, value) {
      state.atkType = value;
    },
    setCharacterLevel(state, value) {
      state.characterLevel = value;
    },
    setEnemyLevel(state, value) {
      state.enemyLevel = value;
    },
    setEnemyResistance(state, value) {
      state.enemyResistance = value;
    },
    setWeaken(state, value) {
      state.weaken = value;
    },
    setArmour(state, value) {
      state.armour = value;
    },
    setArmourList(state, value) {
      state.armourList = value;
    },
    setUnifiedState(state, value) {
      const {
        baseATK,
        extraATK,
        extraFixedAtk = 0,
        extraPercentATK,
        additionalDemageList = [],
        critDemage,
        elementDemage,
        evaporationDemage,
        atkRate,
        extraRate = 0,
        atkType,
        characterLevel,
        enemyLevel,
        enemyResistance,
        weaken,
        armour,
        armourList = [],
      } = value;
      state.baseATK = baseATK;
      state.extraATK = extraATK;
      state.extraFixedAtk = extraFixedAtk;
      state.extraPercentATK = extraPercentATK;
      state.additionalDemageList = additionalDemageList;
      state.critDemage = critDemage;
      state.elementDemage = elementDemage;
      state.evaporationDemage = evaporationDemage;
      state.atkRate = atkRate;
      state.extraRate = extraRate;
      state.atkType = atkType;
      state.characterLevel = characterLevel;
      state.enemyLevel = enemyLevel;
      state.enemyResistance = enemyResistance;
      state.weaken = weaken;
      state.armour = armour;
      state.armourList = armourList;
    }
  },
};

// 记录当前所选择Note
const saveDataModule = {
  state: () => {
    return {
      selectedFixedATKNotes: {},
      selectedExtraATKNotes: {},
      selectedElementDemageNotes: {},
    }
  },
  mutations: {
    setSelectedFixedATKNotes(state, value) {
      state.selectedFixedATKNotes = value || {};
    },
    setSelectedExtraATKNotes(state, value) {
      state.selectedExtraATKNotes = value || {};
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
