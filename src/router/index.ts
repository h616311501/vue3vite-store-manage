import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/pages/index.vue";
import notfound from "~/pages/notfound.vue";
import login from "~/pages/login.vue";
import admin from "~/layouts/admin.vue";
import goodslist from "~/pages/goods/list.vue";
import CategoryList from "~/pages/category/list.vue";

//默认路由
const routes: any = [
  {
    path: "/",
    name: "admin",
    component: admin
    //和布局相关的页面都需要放在子路由下
  },
  {
    path: "/login",
    component: login,
    meta: {
      title: "登录页"
    }
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: notfound
  }
];
//动态路由
const asyncRoutes: any = [
  {
    path: "/",
    name: "/",
    component: Index,
    meta: {
      title: "后台首页"
    }
  },
  {
    path: "/goods/list",
    name: "/goods/list",
    component: goodslist,
    meta: {
      title: "商品管理"
    }
  },
  {
    path: "/category/list",
    name: "/category/list",
    component: CategoryList,
    meta: {
      title: "分类列表"
    }
  }
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

//动态添加路由

export function addRoutes(menus) {
  //是否有新路由
  let hasNewRoutes = false;
  const findAndAddRouteByMenus = (arr) => {
    arr.forEach((e) => {
      e.frontpath;
      let item = asyncRoutes.find((o) => o.path == e.frontpath);
      if (item && !router.hasRoute(item.path)) {
        router.addRoute("admin", item);
        hasNewRoutes = true;
      }
      if (e.child && e.child.length > 0) {
        findAndAddRouteByMenus(e.child);
      }
    });
  };
  findAndAddRouteByMenus(menus);
  return hasNewRoutes;
}
