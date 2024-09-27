<script setup>
const isCollapsed = ref(false)
</script>

<template>
  <div class="wrapper">
    <div class="layout">
      <n-layout position="absolute">
        <n-layout-header bordered> 颐和园路 </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 40px">
          <n-layout-sider
            bordered
            v-model:collapsed="isCollapsed"
            :native-scrollbar="false"
            collapse-mode="width"
            :collapsed-width="120"
            show-trigger="arrow-circle"
          >
            海淀桥
          </n-layout-sider>
          <n-layout :native-scrollbar="false">
            <n-h2 v-for="item in 30" :key="item">平山道 {{ item }}</n-h2>
          </n-layout>
        </n-layout>
      </n-layout>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  height: 100vh;
}

.n-layout-header {
  display: flex;
  align-items: center;
  height: 40px;
  background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  width: 240px !important;
  background: rgba(128, 128, 128, 0.3);
  transition-duration: 0.4s;
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
