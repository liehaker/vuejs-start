import axios from "axios";
import store from "@/store";

const instance = axios.create({
  baseURL: "https://8972faf1-a241-4eb8-9665-1c14952b6f55.mock.pstmn.io"
});

instance.interceptors.request.use(function(config) {
  if (store.state.auth.token !== null) {
    config["headers"] = {
      Authorization: `Bearer ${store.state.auth.token}`
    };
  }

  return config;
});

export default instance;
