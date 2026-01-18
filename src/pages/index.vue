<template>
  <view>
    这是后管首页
    {{ $store.state.user.username }}
    <el-button @click="handlelogout">退出登录</el-button>
  </view>
</template>

<script setup>
  import { loginout } from '../api/manager';
import { removeToken } from '../composables/auth';
  import { showModel ,toast} from '../composables/util';
  import { useRouter } from 'vue-router';
import {useStore} from 'vuex'
const store = useStore()

  const router = useRouter()
  function handlelogout(){
    showModel("是否退出登录").then(res=>{
      loginout().finally(()=>{
        //移除token
        removeToken()
        //清除vuex内的状态
        store.dispatch("logout")
        //跳转回登录页
        router.push('/login')
      toast("退出")

      })  
    })
  }
</script>

<style lang="scss" scoped></style>
