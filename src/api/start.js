import http from "./http";

export function start(id) {
  return http.post("/start", {
    id
  });
}
