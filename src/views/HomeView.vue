<script setup>
import axios from 'axios'

let userInfo = reactive({})

onMounted(() => {
  axios.get('/api/user').then(({ data: res }) => {
    userInfo = Object.assign(userInfo, res.data)
  })
})
</script>

<template>
  <main>
    <p class="title">userInfo: {{ userInfo }}</p>
  </main>
</template>

<style lang="scss" scoped>
.title {
  color: $primaryColor;
}
</style>
