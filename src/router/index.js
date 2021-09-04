import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'

import Echarts from '../components/echarts'
import Ebuild from '../components/ebuild'
import Parent from '../components/vuex/Parent'
import Axios from '../components/axios'
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/echarts',
    component: Echarts
  },
  {
    path: '/ebuild',
    component: Ebuild
  },
  {
    path: '/vuex',
    component: Parent
  },
  {
    path:'/axios',
    component:Axios
  }
]

const router = new VueRouter({
  routes
})


export default router;