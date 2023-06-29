import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue'
import ReputationView from '../views/ReputationView.vue'

import { useUserStore } from '@/stores/user'
import { computed } from 'vue'
const isAuth = computed(() => {
  return useUserStore().isAuth
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CardView,
      redirect: () => {
        if(isAuth.value) {
          return '/cutaway'
        } else {
          window.location.replace('https://kontxt.me/')
        }
      }
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
      name: 'reputation',
      component: ReputationView,
    },
    {
      path: '/cutaway',
      name: 'cutaway',
      component: CardView,
    },
    {
      path: '/user/:id',
      name: 'userCutawayRedirect',
      component: CardView,
      redirect: (to) => `/user/${to.params.id}/cutaway`,
    },
    {
      path: '/:id',
      name: 'userCutawayRedirectId',
      component: CardView,
      redirect: (to) => `/user/${to.params.id}/cutaway`,
    },
    {
      path: '/user/:id/cutaway',
      name: 'userCutaway',
      component: CardView,
    },
    {
      path: '/user/:id/reputation',
      name: 'userReputation',
      component: ReputationView,
    }
  ]
})

export default router
