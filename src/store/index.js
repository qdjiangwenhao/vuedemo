import Vue from 'vue';
import Vuex from 'vuex';

import persistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: '1000',
    status:'待审核'
  },
  mutations: {
    changeName(state) {
      state.count = '2000';
      state.peopleCount = state.peopleCount+1
      //设置localstrong 
      // window.localStorage.count = JSON.stringify('2000')
    },
    checkStatus(state){
      state.status='审核通过'
    }
  },
  plugins: [persistedState()]
})

export default store;