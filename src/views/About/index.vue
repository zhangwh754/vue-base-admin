<script setup>
import { getUser, toRegister } from '@/api'

const userId = ref('')

const {
  loading: registerLoading,
  error: registerError,
  run: onRegister,
} = useRequest(toRegister, { manual: true })

const { data: userInfo, loading: getUserInfoLoading } = useRequest(getUser)
</script>

<template>
  <main>
    <input v-model="userId" type="text" />

    <button :disabled="registerLoading" @click="onRegister(userId)">onRegister</button>

    <div v-if="registerError">{{ registerError.message }}</div>

    <div class="info">
      <div v-if="getUserInfoLoading">用户信息加载中...</div>
      <div v-else>userInfo: {{ userInfo }}</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.info {
  color: $primaryColor;
}
</style>
