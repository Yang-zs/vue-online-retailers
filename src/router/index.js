import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'

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
// 路由守卫
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (to.path === '/login') return next()
  if (!token) return next('/login')
  next()
})
export default router
