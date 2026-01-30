import axios from "~/axios.ts";

export function login(username: any, password: any) {
  return axios.post("/admin/login", {
    username,
    password
  });
}
export function logout() {
  return axios.post("/admin/logout");
}
export function getinfo() {
  return axios.post("/admin/getinfo");
}
export function updatepassword(data: any) {
  return axios.post("/admin/updatepassword", data);
}
