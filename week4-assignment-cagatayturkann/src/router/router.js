import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/views/HomeComponent.vue')
  },
   {
    path: '/users',
    name: 'Users',
    component: () => import('../components/views/UsersComponent.vue')
  },
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router