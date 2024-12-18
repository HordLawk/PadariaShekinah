import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cardapio',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/produto/:id',
      name: 'produto',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/contato',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/local',
      component: () => import('../views/LocationView.vue'),
    },
    {
      path: '/sobre',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/carrinho',
      component: () => import('../views/CartView.vue'),
    },
  ],
})

export default router
