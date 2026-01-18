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
              <el-icon>
                <user />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password">
            <template #prefix>
              <el-icon>
                <lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round color="#626aef" class="w-[500rpx]" type="primary" @click="onsubmit"
            :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { toast } from "../composables/util";
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const form = reactive({
  username: "",
  password: "",
});

const loading = ref(false);
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
  formRef.value.validate((valid: any) => {
    if (!valid) {
      return false;
    }
    loading.value = true;

    store.dispatch("login", form).then((res: any) => {
      toast(res)
      router.push("/")
    }).finally(() => {
      loading.value = false;
    })
  })
};

//监听回车方法
function onKeyup(e) {
  if (e == 'Enter') {
    onsubmit()
  }
}
//监听键盘事件


onMounted(() => {
  document.addEventListener("keyup", onKeyup)
})

onBeforeMount(() => {
  document.removeEventListener("keyup", onKeyup)
})
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

.left>view>view:first-child {
  @apply font-bold text-5xl text-ligt-50 mb-4;
}

.left>view>view:last-child {
  @apply text-gray-200 text-sm;
}

.right .title {
  @apply font-bold text-3xl text-gray-800;
}

.right>view {
  @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}
</style>
