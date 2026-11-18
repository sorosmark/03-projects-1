import { createRouter, createWebHistory } from 'vue-router'
import GuitarListView from '../views/GuitarListView.vue'
import cartView from '../views/CartVue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guitarsList',
      component: GuitarListView
    },
    {
      path: '/cart',
      name: 'cart',
      component: cartView
    }
  ],
})

export default router
