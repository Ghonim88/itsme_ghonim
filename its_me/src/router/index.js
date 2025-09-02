import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../components/intro.vue'
import Timeline from '../components/timeline.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Intro,
    },
    {
      path: '/timeline',
      component: Timeline,
    },
  ],
})

export default router
