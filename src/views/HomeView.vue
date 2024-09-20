<script setup>
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(() => {
  axios.get('/api/user').then((res) => {
    debugger
  })
})
</script>

<template>
  <main>
    <h2 class="title">Home Title</h2>
  </main>
</template>

<style lang="scss" scoped>
.title {
  color: $primaryColor;
}
</style>
