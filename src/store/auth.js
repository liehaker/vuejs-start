import * as authApi from "@/api/auth";
import * as startApi from "@/api/start";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    async login(context, { id, passwd }) {
      try {
        const response = await authApi.login(id, passwd);
        if (response.status === 200) {
          context.commit("setToken", response.data.token);

          //TODO: 여기서 라우터 할래?
          // return await startApi.start(id);
          const res = await startApi.start(id);
          if (res.status === 200) {
            //FIXME:루트 페이지 이동할떄는 로그인페이지 안나오게하기위해 replace
            router.replace({ name: `${res.data.start}` });
          }
        } else {
          alert("로그인실패");
        }
      } catch (e) {
        alert(e);
      }
    },
    loginWithoutAsync(context, { userId, passwd }) {
      const response = authApi.login(userId, passwd);
      if (response.status === 200) {
        context.commit("setToken", response.data.token);
      }
      return response;
    },
    startWithoutAsync(context, userId) {
      const response = startApi.start(userId);
      return response;
    }
  }
};
