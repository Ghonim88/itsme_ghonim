import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../components/intro.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Intro,
    },
   
  ],
})

export default router
