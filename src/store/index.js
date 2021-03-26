import { createStore } from "vuex";

const state = () => {
  return {
    baseATK: 550,
    extraATK: 660,
    extraPercentATK: 0,
    critDemage: 50.0,
    elementDemage: 0,
    evaporationDemage: 0.0,
    atkRate: 100,
    atkType: "none",
    characterLevel: 80,
    enemyLevel: 80,
    enemyResistance: 10,
    weaken: 0,
    armour: 0,
    characterSelect: [{}, {}, {}, {}],
  };
};

const mutations = {
  setBaseATK(state, value) {
    state.baseATK = value;
  },

  setExtraATK(state, value) {
    state.extraATK = value;
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
  setCharacterSelect(state, value) {
    state.characterSelect = new Array(4).fill({}).map((_item, index) => {
      return value[index] || {};
    });
  },
};

const store = createStore({
  state,
  mutations,
});

export default store;
