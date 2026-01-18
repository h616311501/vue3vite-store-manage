import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/pages/index.vue";
import about from "~/pages/about.vue";
import notfound from "~/pages/notfound.vue";
import login from "~/pages/login.vue";
import admin from "../layouts/admin.vue";
const routes: any = [
  {
    path: "/",
    component:admin,
    //和布局相关的页面都需要放在子路由下
    children:[
      {
        path:'/',
        component:Index,
        meta:{
          title:"后台首页"
        }
      }
    ],
    redirect: "/", 
  },
  {
    path: "/login",
    component: login,
    meta: {
      title: '登录页'
    }
  },
  {
    path: "/index",
    component: Index,
    meta: {
      title: '首页'
    }
  },

  {
    path: "/about",
    component: about,
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: notfound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
