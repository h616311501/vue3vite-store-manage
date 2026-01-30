<template>
  <view class="f-header">
    <span class="logo">
      <el-icon color="mr-1">
        <ElemeFilled />
      </el-icon>
    </span>
    <el-icon class="icon-btn" @click="$store.commit('handleAsideWidth')">
      <Fold v-if="$store.state.asideWidth == '250px'" />
      <Expand v-else />
    </el-icon>
    <el-tooltip effect="dark" placement="bottom" content="刷新">
      <el-icon class="icon-btn" @click="handleRefresh">
        <Refresh />
      </el-icon>
    </el-tooltip>

    <view class="ml-auto flex items-center">
      <el-tooltip effect="dark" placement="bottom" content="全屏">
        <el-icon class="icon-btn" @click="toggle">
          <FullScreen v-if="!isFullscreen" />
          <aim v-else></aim>
        </el-icon>
      </el-tooltip>

      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="flex items-center text-light-50">
          <el-avatar
            class="mr-2"
            :size="25"
            :src="$store.state.user.avatar"
          ></el-avatar>
          {{ $store.state.user.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </view>
  </view>

  <FormDrawer
    ref="formDrawerRef"
    title="修改密码"
    destroyOnClose
    @submit="onSubmit"
  >
    <el-form
      :rules="rules"
      :model="form"
      class="w-[250px]"
      ref="formRef"
      label-width="80px"
      size="small"
    >
      <el-form-item label="旧密码" prop="oldpassword">
        <el-input
          v-model="form.oldpassword"
          placeholder="请输入旧密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input
          v-model="form.repassword"
          type="repassword"
          placeholder="请输入确认密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </FormDrawer>
</template>
<script setup lang="ts">
  import FormDrawer from "@/components/FormDrawer.vue";
  import {
    Refresh,
    Fold,
    ElemeFilled,
    FullScreen
  } from "@element-plus/icons-vue";
  import { removeToken } from "@/composables/auth";
  import { useRouter } from "vue-router";
  import { useFullscreen } from "@vueuse/core";
  import { useRepassword, useLogout } from "@/composables/useManager";
  const { isFullscreen, toggle } = useFullscreen();
  const { formDrawerRef, form, rules, formRef, onSubmit, openRePasswordForm } =
    useRepassword();
  const router = useRouter();
  const { handlelogout } = useLogout();

  const handleCommand = (e: any) => {
    console.log(e);
    switch (e) {
      case "logout":
        removeToken();
        handlelogout();
        break;
      case "rePassword":
        openRePasswordForm();
        console.log("re");
        break;
      default:
        break;
    }
  };

  function handleRefresh() {
    location.reload();
  }
</script>
<style lang="scss" scoped>
  .f-header {
    @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
    z-index: 1000;
  }

  .logo {
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin;
  }

  .icon-btn {
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
  }

  .icon-btn:hover {
    @apply bg-indigo-600;
  }

  .dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center text-light-50 mx-5;
  }
</style>
