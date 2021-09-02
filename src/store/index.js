import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '1000'
  },
  mutations: {
    changeName(state) {
      state.name = '2000';
    }
  }
})

export default store;