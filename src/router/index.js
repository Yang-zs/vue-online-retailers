import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import goods from '@/router/modules/goods'
// 共有的路由
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    component: () => import('../layout/index'),
    redirect: '/mainConsole',
    children: [
      {
        path: '/mainConsole',
        name: 'mainConsole',
        component: () => import('../views/mainConsole/index.vue'),
        meta: {
          title: '主控台',
          icon: 'personnel'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401.vue')
      }
    ]
  }
]
export const privateRoutes = [goods]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    store.dispatch('user/getUserInfo').then(() => {})
    if (to.path === '/login') return next('/')
  }
  if (!token && to.path !== '/login') return next('/login')
  next()
})
export default router
