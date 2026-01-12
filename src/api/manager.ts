import axios from "~/axios.ts";

export function login(username, password) {
  axios.post("/admin/login", {
    username,
    password,
  });
}

export function getinfo() {
  return axios.post("/admin/getinfo");
}
