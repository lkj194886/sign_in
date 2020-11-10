<template>
  <div>
    <div class="LoginFlex">
      <div class="LoginColor" v-text="Login"></div>
      <div class="LoginPhotoLogo"><img :src="LoginPhotoLogo" /></div>
      <div class="TestPhoneColor">
        <input class="PhoneColor" placeholder="输入手机号" v-model="GetPone" />
      </div>
      <div class="LoginButton">
        <button :style="isStyle" class="loginButton" @click="GoCodeAgain">
          <span>获取验证码</span>
        </button>
      </div>
      <div class="ClauseColor">
        {{ clauseColor }}<span v-html="clasuse"></span
        ><span v-html="privacy"></span>
      </div>
    </div>
  </div>
</template>



<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      Login: "登录",
      testPhone: "输入手机号",
      clauseColor: "登录则代表你同意",
      clasuse: "《<a href='#'>用户协议</a>》和",
      privacy: "《<a href='#'>隐私政策</a>》",
      GetPone: null,
      LoginPhotoLogo: require("../../static/img/QuWeiLogo.png"),
      buttonStyle: "background-color: rgb(201, 6, 6)",
      isStyle: "background-color: red",
    };
  },
  mounted() {},
  methods: {
    GoCodeAgain() {
      if (this.GetPone === null) {
        Dialog.alert({
          message: "手机号不能为空",
        }).then(() => {
          // on close
        });
        return;
      }
      var mobile_mode = /^1[34578]\d{9}$/;
      if (!mobile_mode.test(this.GetPone)) {
        Dialog.alert({
          message: "手机号不格式不正确",
        }).then(() => {
          // on close
        });
        return;
      }
      this.isStyle = this.buttonStyle;
      setTimeout(this.GoCode, "400");
    },
    GoCode() {
      this.$router.push({
        name: "VerificationCode",
        params: { phone: this.GetPone },
      });
    },
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
  font-size: 0.8rem;
  .ClauseColor span {
    text-align: center;
  }
}
.LoginButton {
  .loginButton {
    width: 90%;
    margin-top: 6%;
    height: 2.7rem;
    background-color: red;
    border-radius: 2rem;
    border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
  }
  .loginButton span {
    color: white;
    font-size: 1.1rem;
    font-weight: 550;
    letter-spacing: 0.2rem;
  }
}
.LoginPhotoLogo {
  img {
    border-radius: 3.5rem;
    width: 7rem;
    height: 7rem;
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
    margin-top: -10%;
  }
  .ClauseColor {
    width: 90%;
    margin-top: 7%;
    text-align: center;
  }
  .LoginButton {
    width: 95%;
    margin-left: 8%;
    margin-top: 1%;
  }
  .LoginPhotoLogo {
    position: relative;
    top: -120px;
  }
}
</style>