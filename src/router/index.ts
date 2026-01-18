import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/pages/index.vue";
import about from "~/pages/about.vue";
import notfound from "~/pages/notfound.vue";
import login from "~/pages/login.vue";
const routes: any = [
  {
    path: "/",
    redirect: "/index", // 这里可以改为 '/home' 或任何其他路径来设置默认路由
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
