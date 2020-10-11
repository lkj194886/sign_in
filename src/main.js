import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import router from './router'
import store from "./store/index"

import plus from 'vue-html5plus'
// Vue.use(plus);
Vue.config.productionTip = false
// Vue.prototype.$plus=plus
//引入axios
import axios from "axios";
axios.defaults.headers.post["Content-type"] = "application/json";
axios.defaults.baseURL = "http://192.168.0.102:8090";
Vue.prototype.$axios = axios;
new Vue({
  plus,
  router,
  store,
  render: h => h(App)
}).$mount('#app')