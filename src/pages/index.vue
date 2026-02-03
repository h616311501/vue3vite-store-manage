<template>
  <div>
    <el-row :gutter="20" class="mt-5">
      <template v-if="panels.length == 0">
        <el-col :span="6" v-for="i in 4" :key="i">
          <el-skeleton style="width: 100%" animated loading>
            <template #template>
              <el-card shadow="hover" class="border-0">
                <template #header>
                  <div class="flex justify-between">
                    <el-skeleton-item variant="text" style="width: 50%" />
                    <el-skeleton-item variant="text" style="width: 10%" />
                  </div>
                </template>
                <!-- card body -->
                <el-skeleton-item variant="h3" style="width: 80%" />
                <el-divider></el-divider>
                <div class="flex justify-between text-sm text-gray-500">
                  <el-skeleton-item variant="text" style="width: 50%" />
                  <el-skeleton-item variant="text" style="width: 10%" />
                </div>
              </el-card>
            </template>
          </el-skeleton>
        </el-col>
      </template>

      <el-col
        :span="6"
        :offset="0"
        v-for="(item, index) in panels"
        :key="index"
      >
        <el-card shadow="hover" class="border-0">
          <template #header>
            <div class="flex justify-between">
              <span class="text-sm">{{ item.title }}</span>
              <el-tag :key="item.unitColor" :type="item.type" effect="plain">
                {{ item.unit }}
              </el-tag>
            </div>
          </template>
          <!-- card body -->
          <span class="text-3xl font-bold text-gray-500">
            <CountTo :value="item.value"></CountTo>
          </span>
          <el-divider></el-divider>
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <IndexNavs></IndexNavs>

    <el-row :gutter="20" class="mt-5">
      <el-col :span="12" :offset="0">
        <IndexChart></IndexChart>
      </el-col>
      <el-col :span="12" :offset="0">
        <IndexCard
          title="店铺"
          tip="店铺与提示"
          :btns="goods"
          class="mb-3"
        ></IndexCard>
        <IndexCard title="交易" tip="需要立即处理" :btns="order"></IndexCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
  import { getStatistics1, getStatistics2 } from "~/api/index.ts";
  import CountTo from "~/components/CountTo.vue";
  import IndexNavs from "../components/IndexNavs.vue";
  import IndexChart from "../components/IndexChart.vue";
  import IndexCard from "../components/IndexCard.vue";
  import { ref } from "vue";
  const panels = ref([]);

  getStatistics1().then((res) => {
    console.log(res);
    panels.value = res.panels;
  });

  const goods = ref([]);
  const order = ref([]);
  getStatistics2().then((res) => {
    console.log(res);
    goods.value = res.goods;
    order.value = res.order;
  });
</script>

<style lang="scss" scoped></style>
