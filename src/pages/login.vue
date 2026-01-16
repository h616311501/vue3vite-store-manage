<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <view>
        <view class="">欢迎光临</view>
        <view class="">此站点是《vue3后台》</view>
      </view>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <view class="title">欢迎回来</view>
      <view>
        <view class="h-[1px] w-16 bg-gray-200"></view>
        <view>账号密码登录</view>
        <view class="h-[1px] w-16 bg-gray-200"></view>
      </view>

      <el-form :rules="rules" :model="form" class="w-[250px]" ref="formRef">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username">
            <template #prefix>
              <el-icon><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password">
            <template #prefix>
              <el-icon><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            round
            color="#626aef"
            class="w-[500rpx]"
            type="primary"
            @click="onsubmit"
            :loading="loading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { toast } from "../composables/util";
import { ref, reactive } from "vue";
import { login, getinfo } from "../api/manager";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { setToken } from "../composables/auth";
const router = useRouter();
const store = useStore();
const form = reactive({
  username: "",
  password: "",
});

const loading = ref(false);
// required : 表示该字段是否为必填项。
// message : 校验失败时显示的错误提示信息。
// trigger : 触发校验的时机，常见的值有 'blur' 和 'change' 。
// type : 指定校验的数据类型，如 'string' 、 'number' 、 'email' 、 'url' 等。
// min 和 max : 指定字符串长度或数值的范围，只在 type 为 'string' 或 'number' 时有效。
// 自定义校验函数 : 可以通过 validator 属性定义一个自定义的校验函数。
const formRef = ref();
const rules = reactive({
  username: [
    {
      required: true, //是否必填
      message: "用户名不为空", //错误提示信息
      trigger: "blur", //触发时机 : 失去焦点
    },
  ],
  password: [
    {
      required: true, //是否必填
      message: "用户名不为空", //错误提示信息
      trigger: "blur", //触发时机 : 失去焦点
    },
  ],
});

const onsubmit = () => {
  loading.value = true;
  formRef.value.validate((valid: any) => {
    if (!valid) {
      return false;
    }
    console.log("通过");
    login(form.username, form.password)
      .then((res: any) => {
        console.log(res);
        toast("成功");

        //跳转到首页
        router.push("/index");

        //存入token
        setToken(res.token);

        //获取用户信息
        getinfo().then((res2: any) => {
          store.commit("SET_USERINFO", res2);
          console.log(res2);
        });
        loading.value = false;
      })
      .finally(() => {
        loading.value = false;
      });
  });
  console.log(form.username, form.password);
};
</script>

<style scoped>
.login-container {
  @apply min-h-screen bg-indigo-500;
}
.login-container .left,
.login-container .right {
  @apply flex items-center justify-center;
}
.login-container .right {
  @apply bg-light-50 flex-col;
}
.left > view > view:first-child {
  @apply font-bold text-5xl text-ligt-50 mb-4;
}
.left > view > view:last-child {
  @apply text-gray-200 text-sm;
}
.right .title {
  @apply font-bold text-3xl text-gray-800;
}
.right > view {
  @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
</style>
