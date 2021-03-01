import http from "../http";
export function home() {
  return http.post("/home");
}
