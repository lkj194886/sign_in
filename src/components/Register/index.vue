<template>
    <div class="RegisterFlex">
        <div class="TestRegister"><span>{{testRegister}}</span></div>
        <div class="PhoneRegister"><input class="PhoneStyle" placeholder="输入手机号"/></div>
        <div class="CodeRegister">
            <input class="CodeStyle" placeholder="输入验证码"/>
            <button @click="getAgainCode" class="GetCodeRegister" v-show="show">获取验证码</button>
            <button class="GetCodeRegisterAgain" v-show="!show" disabled="disabled">{{count}}秒后重新发送</button>
        </div>
        <div class="ButtonRegister"><button class="ButtonStyle" @click="GoLogin"><span>立即注册</span></button></div>
        <div class="HrefLogin" @click="GoLogin"><span>{{hrefLogin}}</span></div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            testRegister:"欢迎注册UM账号",
            count: '',
            timer: null,
            show: true,
            hrefLogin:"已有账号？立即登录",
        }
    },
    methods:{
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
        GoLogin(){
            this.$router.push({
                path:'/Login',
            })
        }
    },
}
</script>


<style lang="scss" scoped>
    .TestRegister span{
        color: rgb(0, 0, 0);
        font-size: 1.5rem;
    }
    .PhoneStyle{
        border-color:#555353; 
        border-style:solid; 
        border-top-width:0px; 
        border-right-width:0px; 
        border-bottom-width:0.2rem; 
        border-left-width:0px;
        width: 80%;
    }
    .CodeStyle{
        border-color:#555353; 
        border-style:solid; 
        border-top-width:0px; 
        border-right-width:0px; 
        border-bottom-width:0.2rem; 
        border-left-width:0px;
        width: 50%;
    }
    .GetCodeRegister{
        width: 31%;
        margin-top: 1rem;
        height: 2.5rem;
        background-color: rgb(138, 133, 133);
        border-radius: 2rem;
        border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        font-size: 0.9rem;
        color: white;
        font-weight: 500;
        letter-spacing: 0.1rem;
    }
    .GetCodeRegisterAgain{
        width: 31%;;
        margin-top: 1rem;
        height: 2.5rem;
        background-color: rgb(199, 190, 190);
        border-radius: 2rem;
        border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        font-size: 0.8rem;
    }
    .ButtonRegister button{
        width: 80%;
        margin-top: 0.5rem;
        height: 2.5rem;
        background-color: rgb(199, 190, 190);
        border-radius: 2rem;
        border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
    }
    .HrefLogin{
        font-size: 0.95rem;
        text-decoration:underline;
    }
    .RegisterFlex{
        display: flex;
        flex-direction:column;
        align-items:center;
        .TestRegister{
            width: 100%;
            margin-left: 2rem;
            margin-top: 2rem;
        }
        .PhoneRegister{
            width: 100%;
            margin-left: 2rem;
            margin-top: 8rem;
        }
        .CodeRegister{
            width: 100%;
            margin-left: 2rem;
            margin-top: 1.5rem;
        }
        .ButtonRegister{
            width: 100%;
            margin-left: 2rem;
            margin-top: 1.5rem;
        }
        .HrefLogin{
            width: 100%;
            margin-top: 12rem;
            margin-left: 7.5rem;
        }
    }  
</style>