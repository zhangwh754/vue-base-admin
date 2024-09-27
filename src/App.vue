<script setup>
import { dateZhCN, zhCN } from 'naive-ui'

const locale = ref(zhCN)
const dateLocale = ref(dateZhCN)
</script>

<template>
  <n-config-provider :locale="locale" :date-locale="dateLocale">
    <RouterView />
  </n-config-provider>
</template>
