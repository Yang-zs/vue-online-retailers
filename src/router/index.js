import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    component: () => import('../layout/index')
    // children: []
    // redirect: '/home',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
