import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home1',
    component: Home
  },
  {
    path: '/robots',
    name: 'Robots',
    component: () => import('../views/Robots.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/robots/:robotid',
    name: 'Robot',
    component: () => import('../views/Robot.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
