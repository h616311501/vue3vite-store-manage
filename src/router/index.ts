import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/pages/index.vue";
import notfound from "~/pages/notfound.vue";
import login from "~/pages/login.vue";
import admin from "~/layouts/admin.vue";
import goodslist from "~/pages/goods/list.vue";
import CategoryList from "~/pages/category/list.vue";

import UserList from "~/pages/user/list.vue";
import GoodsList from "~/pages/goods/list.vue";
import ImageList from "~/pages/image/list.vue";
import NoticeList from "~/pages/notice/list.vue";
import CouponList from "~/pages/coupon/list.vue";
import OrderList from "~/pages/order/list.vue";
import CommentList from "~/pages/comment/list.vue";
import SettingList from "~/pages/setting/base.vue";

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
  },
  {
    path: "/user/list",
    name: "/user/list",
    component: UserList,
    meta: {
      title: "用户列表"
    }
  },
  {
    path: "/goods/list",
    name: "/goods/list",
    component: GoodsList,
    meta: {
      title: "商品列表"
    }
  },
  {
    path: "/image/list",
    name: "/image/list",
    component: ImageList,
    meta: {
      title: "图库列表"
    }
  },
  {
    path: "/notice/list",
    name: "/notice/list",
    component: NoticeList,
    meta: {
      title: "公告列表"
    }
  },
  {
    path: "/coupon/list",
    name: "/coupon/list",
    component: CouponList,
    meta: {
      title: "优惠券列表"
    }
  },
  {
    path: "/order/list",
    name: "/user/list",
    component: OrderList,
    meta: {
      title: "订单列表"
    }
  },
  {
    path: "/comment/list",
    name: "/user/list",
    component: CommentList,
    meta: {
      title: "评价列表"
    }
  },
  {
    path: "/setting/base",
    name: "/user/list",
    component: SettingList,
    meta: {
      title: "设置列表"
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
