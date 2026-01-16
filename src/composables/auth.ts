import { useCookies } from "@vueuse/integrations";

const TokenKey = "token";
const cookie = useCookies();

//获得tooken
export function getToken(){
  return cookie.get(TokenKey)
}
//设置token
export function setToken(token:string){
  return cookie.set(TokenKey , token)
}
//清除token
export function removeToken(){
  return cookie.remove(TokenKey)
}