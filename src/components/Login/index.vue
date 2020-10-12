<template>
  <div class="LoginFlex">
    <div class="LoginColor" v-text="Login"></div>
    <div class="TestPhoneColor">
      <input class="PhoneColor" placeholder="输入手机号" v-model="GetPone" />
    </div>
    <div class="LoginButton">
      <button class="loginButton" @click="GoCode">
        <span>获取验证码</span>
      </button>
    </div>
    <div class="ClauseColor">
      {{ clauseColor }}<span v-html="clasuse"></span
      ><span v-html="privacy"></span>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      Login: "登录",
      testPhone: "输入手机号",
      clauseColor: "登录则代表你同意",
      clasuse: "《<a href='#'>用户协议</a>》和",
      privacy: "《<a href='#'>隐私政策</a>》",
      GetPone: "",
    };
  },
  methods: {
    GoCode() {
      this.$router.push({
        name: "VerificationCode",
        params: { phone: this.GetPone },
      });
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
.LoginColor {
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
}
.TestPhoneColor {
  color: rgb(110, 110, 105);
  font-size: 1.2rem;
  .PhoneColor {
    // background-color: #efefef;
    border-color: #555353;
    border-style: solid;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0.2rem;
    border-left-width: 0px;
    width: 95%;
  }
}
.ClauseColor {
  color: rgb(110, 110, 105);
  font-size: 0.7%;
  .ClauseColor span {
    text-align: center;
  }
}
.LoginButton {
  .loginButton {
    width: 90%;
    margin-top: 6%;
    height: 2.7rem;
    background-color: rgb(110, 108, 108);
    border-radius: 2rem;
    border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
  }
  .loginButton span {
    color: white;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
  }
}
.LoginFlex {
  display: flex;
  flex-direction: column;
  align-items: center;
  .LoginColor {
    width: 100%;
    height: 10rem;
    padding: 1rem 0 0 2rem;
  }
  .TestPhoneColor {
    width: 90%;
    margin-left: 8%;
    margin-bottom: 12%;
  }
  .ClauseColor {
    width: 90%;
    margin-top: 7%;
    text-align: center;
  }
  .LoginButton {
    width: 95%;
    margin-left: 8%;
    margin-top: -10%;
  }
}
</style>