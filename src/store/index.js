import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '中姜'
  },
  mutations: {
    changeName(state) {
      state.name = '小姜';
    }
  }
})

export default store;