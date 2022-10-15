import { RouteRecordRaw } from 'vue-router'
const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/loginByPhone',
    name: 'LoginByPhone',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/LoginByPhone.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/index',
  },
]

export default baseRoutes
