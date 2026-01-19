<template>
    <el-container>
        <el-header>
            <FHeader />
        </el-header>
        <el-container>
            <el-aside :width="$store.state.asideWidth">
                <FMenu />
            </el-aside>
            <el-main>
                <FTagList />
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
</script>

<style lang="scss" scoped>
.el-aside {
    transition: all 0.2s;
}
</style>