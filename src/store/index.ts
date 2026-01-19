import { createStore, } from "vuex";
import { login, getinfo } from "../api/manager";
import { setToken } from "../composables/auth";
import { removeToken } from "../composables/auth";
const store = createStore({
  state() {
    return {
      //用户信息
      user: {},

      //侧边宽度
      asideWidth: '250px'
    };
  },
  mutations: {
    SET_USERINFO(state: any, user: any) {
      state.user = user;
    },
    // 展开/锁起
    handleAsideWidth(state: any) {
      state.asideWidth = state.asideWidth == "250px" ? "64px" : '250px'
    }
  },
  actions: {
    login({ commit }: any, { username, password }: any) {
      return new Promise((resolve, reject) => {
        login(username, password).then((res) => {
          //存入token
          setToken(res.token);
          resolve(res)
        }).catch(err => reject(err))
      })
    },
    getinfo({ commit }: any) {
      return new Promise((resolve, reject) => {
        getinfo().then((res: any) => {
          commit("SET_USERINFO", res)
          resolve(res)
        }).catch(err => reject(err))
      })
    },
    logout({ commit }: any) {
      removeToken()
      commit("SET_USERINFO", "")
    }
  }
});

export default store;
