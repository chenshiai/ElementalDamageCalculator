import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import { ITeamItem } from "@/types/interface";

export interface ITeamData {
  enemyLevel: number;
  baseResistance: number;
  teamList: ITeamItem[] | null[];
  currentEdit: string;
  currentActiveBuffs: Record<string, Record<string, { enable: boolean; stack?: number }>>;
}

interface State {
  teamData: ITeamData;
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

// 团队增益
const teamData = {
  state: (): ITeamData => {
    return {
      enemyLevel: 95,
      baseResistance: 10,
      // 当前团队列表
      teamList: [null],
      // 当前正在编辑的数据名称
      currentEdit: "",
      currentActiveBuffs: {},
    };
  },
  getters: {
    allTeamList: (state) => {
      return state.teamList;
    },
  },
  mutations: {
    setTeamList(state, value) {
      state.teamList = value || [];
      sessionStorage.setItem("teamList", JSON.stringify(value));
    },
    joinTeam(state, payload) {
      state.teamList[payload.index] = payload.data;
      if (state.teamList[state.teamList.length - 1] !== null) {
        state.teamList.push(null);
      }
      sessionStorage.setItem("teamList", JSON.stringify(state.teamList));
    },
    leaveTeam(state, index) {
      state.teamList.splice(index, 1);
      sessionStorage.setItem("teamList", JSON.stringify(state.teamList));
    },
    setCurrentEdit(state, value) {
      state.currentEdit = value;
    },
    setCurrentActiveBuffs(state, payload) {
      if (!state.currentActiveBuffs[payload.name]) {
        state.currentActiveBuffs[payload.name] = {};
      }
      state.currentActiveBuffs[payload.name][payload.label] = {
        enable: payload.enable,
        stack: payload.stack,
      };
    },
  },
};

const store = createStore<State>({
  modules: {
    teamData,
  },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
