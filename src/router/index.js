import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue'
import ReputationView from '../views/ReputationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'noAuthCard',
      component: CardView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: CardView
    },
    {
      path: '/meets',
      name: 'meets',
      component: CardView
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: CardView
    },
    {
      path: '/reputation',
      name: 'noAuthReputation',
      component: ReputationView,
    },
    {
      path: '/card/:id',
      name: 'card',
      component: CardView,
    },
    {
      path: '/reputation/:id',
      name: 'reputation',
      component: ReputationView,
    }
  ]
})

export default router
