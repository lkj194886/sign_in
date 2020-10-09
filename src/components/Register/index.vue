
<template>
    <div class="DivBackgourd">
        <button @click="getCode" id="d" class="getphone" v-show="show">获取验证码</button>
        <button class="blue" v-show="!show" disabled="disabled">{{count}}秒后重新发送</button>
        <div>1111111111111111111111111</div>
    </div>
</template>

<script>
export default {
    data(){
    return {
        count: '',
        timer: null,
        show: true,
    }
    },
    methods:{
        getCode() {
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
        }
    }

}
</script>


<style lang="scss" scoped>
    
    .getphone {
        display: block;
        height: 46px;
        font-size: 22px;
        color: #1f1b1b;
        border: 1px solid #272525;
        text-align: center;
        border-radius: 23px;
        background: green;
        box-sizing: border-box;
        //padding:0 20px;
        line-height: 46px;
    }
    
    
    .blue {
        color: #508bef;
        display: block;
        height: 46px;
        line-height: 46px;
        font-size: 22px;
        text-align: center;
        border: 1px solid #353232;
        border-radius: 23px;
        box-sizing: border-box;
        //padding:0 20px;
    }

    .DivBackgourd{
        background-color: green;
    }
</style>