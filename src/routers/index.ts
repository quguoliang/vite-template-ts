import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/home/HomePage'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [
      { path: '/active', name: 'active', component: () => import('../views/active/ActivePage') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

