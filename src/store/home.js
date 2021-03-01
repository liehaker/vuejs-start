import * as homeApi from "@/api/home/";

export default {
  namespaced: true,
  state: {
    homeContent: []
  },
  mutations: {
    updateValue(state, payload) {
      state.homeContent = payload;
    }
  },
  actions: {
    getHomeContent({ commit }) {
      homeApi.home().then(res => {
        if (res.status === 200) {
          console.log(res.data);
          commit("updateValue", res.data);
        }
      });
    }
  }
};
