import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index'
import Invitation from'@/pages/Invitation/index'
import Notice from'@/pages/Notice/index'
import My from '@/pages/My/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/invitation',
    name:"Invitation",
    component:Invitation
  },
  {
    path:"/notice",
    name:"Notice",
    component:Notice
  },
  {
    path:"/my",
    name:"My",
    component:My
  }
]

const router = new VueRouter({
  routes
})

export default router
