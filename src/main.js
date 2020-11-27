import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import router from './router'
import store from "./store/index"
import "./static/css/iconfont.css"
import Mui from 'vue-awesome-mui';
import url from "./util/Globa.vue"
Vue.prototype.GLOBAL=url;
Vue.use(Mui)
Vue.prototype.$mui = Mui;
Vue.config.productionTip = false
import axios from "axios";
axios.defaults.headers.post["Content-type"] = "application/json";
axios.defaults.baseURL = "http://192.168.101.9:8090";
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')