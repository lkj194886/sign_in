<template>
  <div class="withdrawal">
    <nav-bar
      title="提现"
      left-text="返回"
      right-text="提现记录"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="withdrawal_nav_bottom"></div>
    <div class="withdrawal_way">
      <div>
        <p>
          <span class="iconfont icon-zhifubao"></span>
          支付宝
        </p>
      </div>
      <div>
        <p>
          <span class="iconfont icon-weixin"></span>
          微信
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.withdrawal {
  .withdrawal_nav_bottom {
    width: 90%;
    padding-top: 20px;
    // border-bottom: 2px solid rgb(11, 131, 243);
  }
  .withdrawal_way {
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 10px;
      width: 40%;
      height: 100px;
      border: 2px solid rgb(11, 131, 243);
      border-radius: 15px;
      span {
        font-size: 2rem;
        display: flex;
        // flex-wrap: wrap;
        padding-bottom: 3px;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .icon-zhifubao {
        color: rgb(11, 131, 243);
      }
      .icon-weixin {
        color: rgb(7, 193, 96);
      }
    }
  }
}
</style>