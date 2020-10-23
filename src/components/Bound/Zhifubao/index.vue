<template>
  <div class="bound">
    <nav-bar left-text="绑定支付宝" left-arrow @click-left="onClickLeft" />
    <div class="from">
      <div class="account">
        <input
          type="text"
          placeholder="  请输入您的支付宝账号"
          v-model="account"
        />
      </div>
      <div class="account_name">
        <input
          type="text"
          placeholder="  请输入您的支付宝姓名"
          v-model="account_name"
        />
      </div>
    </div>

    <div class="bound_notice">
      1.请填写真实姓名(请不要填写昵称)<br />
      2.请确保填写的姓名和到账账户实名认证一致，否则无法到账<br />
    </div>

    <div class="bound_btn">
      <input class="btn" type="button" value="立即绑定" />
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
      account: "",
      account_name: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$mui.back = () => {
      this.$router.go(-1);
    };
  },
};
</script>
<style lang="scss" scoped>
input {
  border: 1px solid #d5cbcb;
  background-color: #eae5e5;
  border-radius: 6px;
  font-size: 0.9rem;
  width: 100%;
  height: 40px;
  caret-color: rgb(255, 76, 89);
}
.bound {
  .from {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    // border: 1px solid red;
    .account {
      padding-bottom: 20px;
      width: 90%;
    }
    .account_name {
      width: 90%;
      padding-bottom: 20px;
    }
  }
  .bound_notice {
    color: black;
    line-height: 27px;
    width: 80%;
    font-size: 14px;
  }
  .bound_btn {
    text-align: center;
    width: 80%;
    .btn {
      width: 100%;
      margin-top: 10px;
      height: 45px;
      border-radius: 25px;
      background-color: rgb(244, 74, 83);
      color: #ffffff;
      font-size: 20px;
      box-shadow:0 2px 0 rgb(228, 226, 226);
    }
  }
}
</style>