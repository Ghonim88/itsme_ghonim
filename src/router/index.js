import { createRouter, createWebHistory } from 'vue-router'

// Since we're using a single-page layout, we can simplify the router
// The main content is now handled in App.vue
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // No component needed since App.vue handles the layout
    },
  ],
})

export default router
