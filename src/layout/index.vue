<script setup>
import { darkTheme } from 'naive-ui'
import IconCommunity from '@/components/icons/IconCommunity.vue'
import IconSupport from '@/components/icons/IconSupport.vue'

const isCollapsed = ref(false)

const menuOptions = ref([
  {
    type: 'group',
    label: '主导航',
    key: 'main',
    children: [
      {
        label: '首页',
        key: 'home',
        icon: () => h(IconCommunity, { style: { width: '24px', height: '24px' } }),
      },
      {
        label: '信息',
        key: 'about',
        icon: () => h(IconSupport, { style: { width: '24px', height: '24px' } }),
      },
    ],
  },
])

const activeMenu = ref('menu')
</script>

<template>
  <div class="layout">
    <n-layout position="absolute" has-sider>
      <n-layout-sider
        bordered
        v-model:collapsed="isCollapsed"
        :native-scrollbar="false"
        collapse-mode="width"
        :collapsed-width="120"
        show-trigger="arrow-circle"
      >
        <div class="header">
          <IconManage class="icon" />
          <div v-show="!isCollapsed">naive后台模板</div>
        </div>

        <n-config-provider :theme="darkTheme">
          <n-menu v-model:value="activeMenu" :options="menuOptions" />
        </n-config-provider>
      </n-layout-sider>
      <n-layout>
        <n-layout-header position="absolute" bordered> </n-layout-header>
        <n-layout
          :native-scrollbar="false"
          style="top: 64px"
          position="absolute"
          content-style="padding: 24px;paddingTop: 0;background: #f1f3f4;"
        >
          <RouterView />
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  height: 100vh;
}

.n-layout-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 56px;
}

.n-layout-sider {
  width: 278px;
  background-color: #242424;
  transition-duration: 0.4s;

  .header {
    padding-left: 32px;
    height: 56px;
    display: flex;
    align-items: center;
    column-gap: 8px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

.n-layout-content {
  top: 56px;
}
</style>
