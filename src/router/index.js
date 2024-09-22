import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/index.vue'),
    },
  ],
})

export default router
