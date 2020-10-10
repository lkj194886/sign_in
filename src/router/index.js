import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index'
import Invitation from'@/pages/Invitation/index'
import Notice from'@/pages/Notice/index'
import My from '@/pages/My/index'
import Withdrawal from '@/components/withdrawal/index'
import Login from '@/components/Login/index'
import VerificationCode from '@/components/VerificationCode/index'
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
  },
  {
    path:"/withdrawal",
    name:"Withdrawal",
    component:Withdrawal
  },
  {
    path:"/login",
    name:"Login",
    component:Login
  },
  {
    path:"/verificationCode",
    name:"VerificationCode",
    component:VerificationCode
  }
]

const router = new VueRouter({
  routes
})

export default router
