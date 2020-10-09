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
        <div class="CodePhoneTest">验证码已发送到{{Phone}}</div>
        <div class="CodeValue"><vue-vercode ref="vercode" /></div>
        <div class="LoginButton">
            <button @click="getAgainCode" class="loginButton" v-show="show">重新获取验证码</button>
            <button class="loginButtonAgain" v-show="!show" disabled="disabled">{{count}}秒后重新发送</button>
        </div> 
    </div>
</template>


<script>
import VueVercode from "@auspicious/vue-vercode";
import { NavBar } from "vant";
export default {
    mounted:function(){
      this.getAgainCode();//需要触发的函数
    },
    data() {
        return {
            Phone:this.$route.query.phone,
            count: '',
            timer: null,
            show: true,
        }
    },
    components: {
      "vue-vercode": VueVercode,
      NavBar,
    },
    methods: {
        getCode() {
            const code = this.$refs.vercode.getCode();
            console.log(code);
        },
        getAgainCode(){
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
    }
}
</script>

<style lang="scss" scoped>
    .CodeTest{
        font-size: 1.5rem;
    }
    .CodePhoneTest{
        font-size: 0.9rem;

    }
    .LoginButton{
        .loginButton{
            width: 90%;
            margin-top: 0.5rem;
            height: 2.7rem;
            background-color: rgb(138, 133, 133);
            border-radius: 2rem;
            border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
            font-size: 1.1rem;
            color: white;
            letter-spacing: 0.1rem;
        }
    }
    .loginButtonAgain{
        width: 90%;
        margin-top: 0.5rem;
        height: 2.7rem;
        background-color: rgb(199, 190, 190);
        border-radius: 2rem;
        border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
    }
    .CodeFlex{
        .CodeTest{
            width: 100rem;
            height: 3rem;
            padding: 1rem 0 0 2rem;
            margin-top: 2rem;
        }
        .CodePhoneTest{
            width: 100rem;
            height: 2rem;
            margin-left: 2rem;
        }
        .CodeValue{
            width: 20rem;
            height: 5rem;
            margin-left: 2rem;
            margin-top: 4rem;
        }
        .LoginButton{
            width: 20rem;
            height: 5rem;
            margin-left: 3rem;
        }
    }
    
    
</style>
