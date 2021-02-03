import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import MyPageView from '../views/MyPageView.vue'
import RecipeView from '../views/RecipeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      { path: "recipe", component: RecipeView },
      { path: "mypage", component: MyPageView },
      { path: "login", component: LoginView },
      { path: "signup", component: SignUpView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
