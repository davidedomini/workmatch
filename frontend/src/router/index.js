import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import CompanyHomeView from '../views/CompanyHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      //component: SigninView
      component: CompanyHomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
