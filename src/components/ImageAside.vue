<template>
  <el-aside width="220px" class="image-aside" v-loading="loading">
    <div class="top">
      <AsideList
        :active="activeId === item.id"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.name }}
      </AsideList>
    </div>
    <div class="bottom">
      <el-pagination background layout="prev, next" :total="total" :current-page="currentPage" :limit="limit" @current-change="getData" />
    </div>
  </el-aside>
</template>

<script setup>
import { getImageClassList } from "@/api/image_class";
import AsideList from "./AsideList.vue";
import { ref } from "vue";
// 加载动画
const loading = ref(false);
const list = ref([]);
const activeId = ref(0);

//分页部分
const currentPage = ref(1) //当前页
const total = ref(0) //总条数
const limit = ref(10) //每页条数

function getData(p =null) {
  if(typeof p === 'number'){
    currentPage.value = p;
  }
  
  loading.value = true;
  getImageClassList(currentPage.value)
    .then((res) => {
      total.value = res.totalCount;
      list.value = res.list;

      let item = list.value[0];
      if (item) {
        console.log("item", item.id);
        activeId.value = item.id;
      }
    })
    .finally(() => {
      loading.value = false;
    });
}

getData();
</script>

<style>
.image-aside {
  border-right: 1px solid #eeeeee;
  position: relative;
}
.image-aside .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}
.image-aside .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  @apply flex items-center justify-center;
}
</style>