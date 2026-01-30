<template>
  <el-row :gutter="20">
    <el-col
      :span="3"
      :offset="0"
      v-for="(item, index) in iconNavs"
      :key="index"
    >
      <el-card shadow="hover" @click="$router.push(item.path)">
        <div class="flex flex-col items-center justify-center cursor-pointer">
          <el-icon :size="16" :class="item.color">
            <component :is="item.icon"></component>
          </el-icon>
          <span class="text-sm mt-2">{{ item.title }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup>
  const iconNavs = [
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/user/list"
    },
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/goods/list"
    },
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/image/list"
    },
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/notice/list"
    },
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/setting/base"
    },
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/coupon/list"
    },
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/order/list"
    },
    {
      icon: "user",
      color: "text-light-blue-500",
      title: "user",
      path: "/comment/list"
    }
  ];
</script>
