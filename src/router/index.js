import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import aboutRoute from './aboutRoute.js'

Vue.use(VueRouter)

const routes = [
  ...aboutRoute,
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
