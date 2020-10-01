<template>
  <div id="app">
    <transition >
      <router-view style="padding-bottom: 60px"></router-view>
    </transition>
    <tabbar v-model="active" route class="a">
      <tabbar-item replace icon="home-o" to="/">首页</tabbar-item>
      <tabbar-item replace icon="coupon-o" badge="5" to="/notice"
        >公告栏</tabbar-item
      >
      <tabbar-item replace icon="share-o" to="/invitation">邀请赚</tabbar-item>
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
    };
  },
  watch: {},
  mounted() {},
  methods: {
    onChange(index) {
      console.log(index);
    },
  },
};
</script>

<style>
@import "./static/css/iconfont.css";
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
* {
  margin: 0 auto;
  height: 0 auto;
}
#app{
  overflow-x: hidden
}
</style>
