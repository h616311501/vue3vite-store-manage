<template>
  <view class="f-tag-list" :style="{ left: $store.state.asideWidth }">
    <el-tabs
      v-model="activeTab"
      type="card"
      @tab-remove="removeTab"
      class="demo-tabs flex-1"
      style="min-width: 100px"
      @tab-change="changeTab"
    >
      <el-tab-pane
        :closable="item.path != '/'"
        v-for="item in tabList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
      ></el-tab-pane>
    </el-tabs>

    <span class="tag-btn">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </view>
  <div style="height: 44px"></div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { useRoute, onBeforeRouteUpdate, useRouter } from "vue-router";
  import { useCookies } from "@vueuse/integrations";
  const route = useRoute();
  const router = useRouter();
  const cookie = useCookies();
  const activeTab = ref(route.path);
  const tabList = ref([
    {
      title: "后台首页",
      path: "/"
    }
  ]);

  function addTab(tab) {
    let noTab = tabList.value.findIndex((t) => t.path == tab.path) == -1;
    if (noTab) {
      tabList.value.push(tab);
    }
    cookie.set("tabList", tabList.value);
  }
  onBeforeRouteUpdate((to, from) => {
    activeTab.value = to.path;
    addTab({
      title: to.meta.title,
      path: to.path
    });
  });
  //初始化标签
  function initTabList() {
    let tbs = cookie.get("tabList");
    if (tbs) {
      tabList.value = tbs;
    }
  }
  initTabList();
  const changeTab = (t) => {
    router.push(t);
  };
  const removeTab = (targetName) => {};
</script>

<style scoped>
  .f-tag-list {
    @apply fixed bg-gray-100 flex items-center px-2;
    top: 64px;
    right: 0;
    height: 44px;
    z-index: 100;
  }
  .tag-btn {
    @apply bg-white flex flex-items-center justify-center px-2;
    height: 32px;
    margin-left: auto;
  }
  :deep(.el-tabs__header) {
    @apply mb-0 border-0;
  }
  :deep(.el-tabs__nav) {
    border: 0 !important;
  }
  :deep(.el-item) {
    @apply bg-white mx-1 rounded;
    height: 32px;
    line-height: 32px;
    border: 0 !important;
  }
  :deep(.el-tabs__nav-next),
  :deep(.el-tabs__nav-prev) {
    @apply bg-white mx-1 rounded;
    height: 32px;
    line-height: 32px;
    border: 0 !important;
  }
  :deep(.is-disabled) {
    cursor: not-allowed;
    @apply text-gray-300;
  }
</style>
