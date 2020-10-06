<template>

    <div>
      <div class="LoginColor" v-text="Login"></div>
      <div class="TestPhoneColor"><input class="PhoneColor" placeholder="输入手机号"/></div> 
      <div class="LoginButton"><button class="loginButton"><span>获取验证码</span></button></div> 
      <div class="ClauseColor">{{clauseColor}}<span v-html="clasuse"></span><span v-html="privacy"></span></div>
    </div>
    
</template>



<script>
export default {
    data() {
        return {
            Login:'登录',
            testPhone:'输入手机号',
            clauseColor:'登录则代表你同意',
            clasuse:"《<a href='#'>用户协议</a>》和",
            privacy:"《<a href='#'>隐私政策</a>》"
        }
    },
}
</script>


<style lang="scss" scoped>
    .LoginColor{
        color: rgb(0, 0, 0);
        font-size: 1.5rem;

    }
    .TestPhoneColor{
        color: rgb(110, 110, 105);
        font-size: 1.2rem;
        .PhoneColor{
            // background-color: #efefef;
            border-color:#555353; 
            border-style:solid; 
            border-top-width:0px; 
            border-right-width:0px; 
            border-bottom-width:2px; 
            border-left-width:0px;
            width: 85%;
        }
    }
    .ClauseColor{
        color: rgb(110, 110, 105);
        font-size: 0.7rem;
    }
    .LoginButton{
        .loginButton{
            width: 70%;
            margin-top: 10px;
            height: 40px;
            background-color: rgb(97, 95, 95);
            border-radius: 10px;
            border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        }
        .loginButton span{
            color: white;
            font-size: 1.1rem;
            letter-spacing: 0.2rem;
        }
    }
</style>