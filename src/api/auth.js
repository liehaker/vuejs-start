import http from "./http";

export function login(userid, passwd) {
  return http.post("/login", {
    userid,
    passwd
  });
}
