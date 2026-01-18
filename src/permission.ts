import { getToken } from "./composables/auth";
import { hideFullLoading, showFullLoading, toast } from "./composables/util";
import router from "./router";
import store from "./store";


//全局前置守卫

router.beforeEach(async (to, from, next) => {
    showFullLoading()
    const token = getToken()
    //判断当前token是否登录
    if(!token  && to.path != '/login')
    {
        toast("当前未登录","error")
        return next({path:'/login'})
    }
    //防止重复登录
    if(token && to.path =='/login')
    {
        toast("请不要重复登录")
        return next({path:from.path ? from.path : '/index'})
    }

    if(token){
       await store.dispatch("getinfo")
    }
    //设置页面首页
    const title = (to.meta.title ? to.meta.title : '') + "logo后台"
    document.title = title
    next()
});


//全局后置守卫
router.afterEach((to,from)=>hideFullLoading())