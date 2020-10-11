<template>
  <div id="app">
    <!-- <transition name="slide-fade"  mode="out-in" :duration="{ enter: 500, leave: 0 }"> -->
    <router-view style="padding-bottom: 60px"></router-view>
    
    <!-- </transition> -->
    <tabbar v-model="active" route class="a" v-show="$route.meta.footShow">
      <tabbar-item replace icon="home-o" to="/">首页</tabbar-item>
      <tabbar-item replace icon="coupon-o" badge="5" to="/notice"
        >公告</tabbar-item
      >
      <tabbar-item replace icon="share-o" to="/invitation">邀请</tabbar-item>
      <tabbar-item replace icon="manager-o" to="/my">我的</tabbar-item>
    </tabbar>
   
  </div>
  
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
  data() {
    return {
      active: 0,
      navShow: true,
      show: true,
    };
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
@import "./static/css/iconfont.css";
.slide-fade {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  top: 0;
  right: 0;
  position: absolute;
  transform: translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
  opacity: 1;
}
.slide-fade-enter-active {
  background-color: white;
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s ease;
  background-color: white;
  transform: translateX(500px) translateY(500px) rotate(150deg) scale(1);
  z-index: 100;
}
* {
  margin: 0 auto;
  height: 0 auto;
}
#app {
  overflow-x: hidden;
  /* display: flex; */
}
.van-steps {
  overflow: hidden;
  /* // background-color: #fff */
}
</style>
