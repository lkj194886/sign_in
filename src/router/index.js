import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/index'
import Invitation from'@/pages/Invitation/index'
import Notice from'@/pages/Notice/index'
import My from '@/pages/My/index'
import Withdrawal from '@/components/withdrawal/index'
import Login from '@/components/Login/index'
import Register from '@/components/Register/index'
import VerificationCode from '@/components/VerificationCode/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path:'/invitation',
    name:"Invitation",
    component:Invitation,
    meta:{
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path:"/notice",
    name:"Notice",
    component:Notice,
    meta:{
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path:"/my",
    name:"My",
    component:My,
    meta:{
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path:"/withdrawal",
    name:"Withdrawal",
    component:Withdrawal,
    meta:{
      footShow: false, // true显示，false隐藏
    }
  },
  {
    path:"/login",
    name:"Login",
    component:Login,
    meta:{
      footShow: false, // true显示，false隐藏
    }
  },
  {
    path:"/register",
    name:"Register",
    component:Register
  },
  {
    path:"/verificationCode",
    name:"VerificationCode",
    component:VerificationCode,
    meta:{
      footShow: false, // true显示，false隐藏
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
