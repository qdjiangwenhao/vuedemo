import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'

import Router1 from '../components/router1'
import Router2 from '../components/router2'
import Parent from '../components/vuex/Parent'
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/router1',
    component: Router1
  },
  {
    path: '/router2',
    component: Router2
  },
  {
    path: '/vuex',
    component: Parent
  }
]

const router = new VueRouter({
  routes
})


export default router;