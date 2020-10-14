
<template>
    <div>
        <div>
            <nav-bar
                title="广告投放"
                left-text="返回"
                right-text="规则"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
        </div>
        <div class="AdversingFlex">
            <div class="AdvertsingTest">广告视频<span>0/5</span></div>
            <div class="AdvertsingTestTow">
                <p>
                      *111111111111111111111111111111111111111111111111111<br/>
                    1111111111111111111111111111111111111111111111111111<br/>
                    1111111111111111111111111111111111111111111111111111<br/>
                </p>
            </div>
            <div class="AdvertsingButtonSum">
                <button class="AdvertsingButtonOne" @click="onClickRight">上传视频</button>
                <button class="AdvertsingButtonTow">申请投放</button>
            </div>
        </div>
        
    </div>
</template>




<script>
import { NavBar } from "vant";
import { Dialog } from 'vant';
export default {

    components:{
        NavBar,
        [Dialog.Component.name]: Dialog.Component,
    },

    data() {
        return {
            
        }
    },


    computed:{  
        
    },


    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight(){
            Dialog.alert({
            title: '注意',
            message: '广告投放已经关闭请联系客服',
            beforeClose,
            confirmButtonText:'知道了',
            });
            function beforeClose(action, done) {
                if (action === 'confirm') {
                    setTimeout(done, 1000);
                } else {
                    done();
                }
            }
        }
    }
}
</script>




<style lang="scss" scoped>
    .AdversingFlex{
        width: 100%;
        height: 82vh;
    }
    .AdvertsingTest{
        width: 100%;
        height: 40px;
        background-color: #f9f9f9;
        border-left: 22px solid rgb(170, 164, 164);
        font-size: 20px;
        padding-top: 10px;
        padding-left: 20px;
        span{
            padding-left: 180px;
        }
    }

    .AdvertsingTestTow{
        width: 100%;
        height: 55px;
         background-color: #f9f9f9;
        p{
            font-size: 13px;
            color: rgb(179, 170, 170);
            text-align: center;
            padding-top: 5px;
        }
    }

    .AdvertsingButtonSum{
        button{
            width: 170px;
            height: 40px;
            border: 0px;
            border-radius: 5px;
            background-color: rgb(131, 208, 211);
        }
    }

    .AdversingFlex{
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items:center;
        flex-direction:row;
        margin: 0px;
        padding: 0px;
        .AdvertsingTest{
            align-self:flex-start;    
        }
        .AdvertsingTestTow{
            margin-top: 400px;
            align-self:flex-end;
        }
        .AdvertsingButtonSum{
            color: white;
            margin-top: 20px;
            align-self:flex-end;
        }
        .AdvertsingButtonTow{
            cursor:not-allowed;
            opacity: 0.6;
            margin-left: 10px;
        }
    }
</style>