import * as authApi from "@/api/auth";
import * as startApi from "@/api/start";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    token: null,
    id: ""
  },
  mutations: {
    setToken(state, { id, token }) {
      console.log("mutation:", id, token);
      state.id = id;
      state.token = token;
    }
  },
  actions: {
    async login(context, { userId, passwd }) {
      try {
        console.log("login1", userId, passwd);
        const response = await authApi.login(userId, passwd);
        if (response.status === 200) {
          context.commit("setToken", {
            id: userId,
            token: response.data.token
          });
          console.log("login2", userId);
          //TODO: 여기서 라우터 할래?
          // return await startApi.start(id);
          const res = await startApi.start(userId);
          if (res.status === 200) {
            context.commit;
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
