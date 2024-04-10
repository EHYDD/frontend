import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/LogIn.vue'
import GradesView from '../views/GradesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login', 
      name: 'login',
      component: LogIn
    },
    {
      path: '/chat',
      name: 'chat',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChatView.vue')
    },
    {
      path: '/grades',
      name: 'grades',
      component: GradesView
    }
  ]
})

export default router
