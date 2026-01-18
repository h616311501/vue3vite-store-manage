import axios from "../axios.ts";

export function login(username: any, password: any) {
  return axios.post("/admin/login", {
    username,
    password,
  });
}

export function getinfo() {
  return axios.post("/admin/getinfo");
}

export function loginout() {
  return axios.post("/admin/logout");
}