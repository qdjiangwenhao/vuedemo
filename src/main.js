import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store';

//引入echarts 
import echarts from 'echarts'
//引入element ui  样式文件需要单独引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import { Button, Row} from "element-ui";

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);


Vue.use(Button);
Vue.use(Row);
new Vue({
  render: h => h(App),
  router,
  store,
  echarts
}).$mount('#app')