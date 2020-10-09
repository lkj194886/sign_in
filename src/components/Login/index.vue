<template>

    <div class="LoginFlex">
      <div class="LoginColor" v-text="Login"></div>
      <div class="TestPhoneColor"><input class="PhoneColor" placeholder="输入手机号" v-model="GetPone"/></div> 
      <div class="LoginButton"><button class="loginButton" @click="GoCode"><span>获取验证码</span></button></div> 
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
            privacy:"《<a href='#'>隐私政策</a>》",
            GetPone:''
        }
    },
    methods: {
        GoCode(){
            this.$router.push({
                path:'/VerificationCode',
                query:{phone:this.GetPone},
            })
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
            width: 95%;
        }
    }
    .ClauseColor{
        color: rgb(110, 110, 105);
        font-size: 0.7rem;
    }
    .LoginButton{
        .loginButton{
            width: 90%;
            margin-top: 10px;
            height: 40px;
            background-color: rgb(110, 108, 108);
            border-radius: 20px;
            border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        }
        .loginButton span{
            color: white;
            font-size: 1.1rem;
            letter-spacing: 0.2rem;
        }
    }
    .LoginFlex{
        display: flex;
        flex-direction:column;
        align-items:center;
        .LoginColor{
            width: 100rem;
            height: 10rem;
            padding: 1rem 0 0 2rem;
        }
        .TestPhoneColor{
            width: 90%;
            padding: 1rem 2rem 3rem 3rem;
            margin-left: -1rem;
        }
        .ClauseColor{
            width: 90%;
            margin-top: 1rem;
            margin-left:6rem;
        }
        .LoginButton{
            width: 95%;  
            padding: 1rem 0.5rem 0rem 3rem;
            margin-left: -1.3rem;
            margin-top: -3rem;
        }
    }

</style>