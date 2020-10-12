import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import Detail from '../views/Detail'
import List from '../views/List'


import res from '../components/res'
import test from '../components/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    component: test
  },
  {
    path: '/res',
    component: res
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (detail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
