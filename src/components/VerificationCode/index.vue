<template>
  <div class="CodeFlex">
    <nav-bar
      title="验证"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="withdrawal_nav_bottom"></div>
    <div class="CodeTest">输入验证码</div>
    <div class="CodePhoneTest">验证码已发送到{{ Phone }}</div>
    <div class="CodeValue">
      <div class="code-input-main">
        <div
          class="code-input-main-item"
          v-for="(item, index) in codeList"
          :key="index"
        >
          {{ code[index] || "" }}
        </div>
        <input
          class="code-input-input"
          v-model="code"
          maxlength="2"
          type="number"
        />
      </div>
    </div>
    <div class="LoginButton">
      <button @click="getAgainCode" class="loginButton" v-show="show">
        获取验证码
      </button>
      <button class="loginButtonAgain" v-show="!show" disabled="disabled">
        {{ count }}秒后重新发送
      </button>
    </div>
  </div>
</template>


<script>
// import VueVercode from "@auspicious/vue-vercode";
import { NavBar } from "vant";
import { Dialog } from "vant";
export default {
  mounted() {
    this.$mui.back = () => {
      this.$router.go(-1);
    };
    this.getCode();
    this.getAgainCode(); //需要触发的函数
    this.$store.commit("$_setsumphone", this.Phone);
    this.getPhoneCode(this.Phone);
    this.codeList = new Array(this.codeLength).fill("");
  },
  watch: {
    // 截取字符长度
    code() {
      if (this.code.length === this.codeLength) {
        this.newparams.phone = this.Phone;
        this.newparams.phoneCode = this.code;
        this.$axios
          .get("user/login", { params: this.newparams })
          .then((res) => {
            if (res.status === 200) {
              if (res.data.code != 200) {
                Dialog.alert({
                  message: res.data.msg,
                }).then(() => {
                  // on close
                });
                return;
              } else {
                this.$store.commit("$_setUserItem", res.data.data);
                this.$router.push({
                  path: "/",
                });
              }
            }
          });
        this.code = this.code.substring(0, this.codeLength);
      }
    },
  },
  name: "CodeInput",
  props: {
    codeLength: {
      default: 4,
      type: Number,
    },
  },
  data() {
    return {
      Phone: this.$route.params.phone,
      count: "",
      timer: null,
      show: true,
      params: {
        phone: null,
      },
      newparams: {
        phone: null,
        phoneCode: null,
      },
      codeList: [],
      code: "",
    };
  },
  components: {
    // "vue-vercode": VueVercode,
    NavBar,
  },
  methods: {
    getCode() {
      return this.code;
    },
    getAgainCode() {
      const num = 60;
      if (!this.timer) {
        this.count = num;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= num) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    getPhoneCode(phone) {
      this.params.phone = phone;
      // this.$axios.get("user/getPhoneCode", { params: this.params }).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

.code-input-main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
}

.code-input-input {
  height: 44px;
  width: 100%;
  position: absolute;
  border: none;
  outline: none;
  color: transparent;
  background-color: transparent;
  text-shadow: 0 0 0 transparent;
}

.code-input-main-item {
  width: 34px;
  height: 44px;
  margin: 0 5px;
  padding-bottom: 0;
  opacity: 0.8;
  border-bottom: solid #323232 1px;
  text-align: center;
  font-size: 30px;
  color: #323232;
}
.CodeTest {
  font-size: 1.5rem;
}
.CodePhoneTest {
  font-size: 0.9rem;
}

.LoginButton {
  .loginButton {
    width: 95%;
    margin-top: 0.5rem;
    height: 2.7rem;
    background-color: rgb(230, 74, 74);
    border-radius: 2rem;
    border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
    font-size: 1.1rem;
    color: white;
    letter-spacing: 0.1rem;
  }
}
.loginButtonAgain {
  width: 95%;
  margin-top: 0.5rem;
  height: 2.7rem;
  background-color: rgb(255, 109, 109);
  border-radius: 2rem;
  border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  color: white;
}
.CodeFlex {
  .CodeTest {
    width: 80%;
    margin-top: 10%;
    margin-bottom: 5%;
    margin-left: 9%;
  }
  .CodePhoneTest {
    width: 60%;
    margin-left: 9%;
  }
  .CodeValue {
    width: 85%;
    height: 50%;
    margin-top: 20%;
  }
  .LoginButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin-top: 5%;
  }
}
</style>
