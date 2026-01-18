import { createStore ,  } from "vuex";
import {login, getinfo } from "../api/manager";
import { setToken } from "../composables/auth";
import { removeToken } from "../composables/auth";
const store = createStore({
  state() {
    return {
      //用户信息
      user: {},
    };
  },
  mutations: {
    SET_USERINFO(state: any, user: any) {
      state.user = user;
    },
  },
  actions:{
    login({commit}:any,{username,password}:any){
      return new Promise((resolve,reject) =>{
          login(username,password).then((res)=>{
             //存入token
              setToken(res.token);
              resolve(res)
            }).catch(err=>reject(err))
        })
    },
    getinfo({commit}:any){
      return new Promise((resolve,reject) => {
        getinfo().then( (res:any) => {
          commit("SET_USERINFO",res)
          resolve(res)
        }).catch(err=>reject(err))
      })
    },
    loginout({commit}:any){
      removeToken()
      commit("SET_USERINFO","")
    }
  }
});

export default store;
