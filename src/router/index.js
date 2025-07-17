import { createRouter, createWebHistory } from 'vue-router'
import CompaniesView from '../views/CompaniesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CompaniesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
