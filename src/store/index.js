import { createStore } from "vuex";

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
    teamBuffs,
  },
});

export default store;
