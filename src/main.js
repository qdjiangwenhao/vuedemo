import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store';

//引入echarts 
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  echarts
}).$mount('#app')