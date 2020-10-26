

<template>
    <div class="MyInvitationFlex">
        <div>
            <nav-bar
                title="邀请进度"
                left-text="返回"
                right-text="说明"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
        </div>
        <!-- <div class="MyInvitationTest">邀请进度<span>{{InvitationNumber}}人</span></div> -->
        <div class="MyInvitationList">
            <ul>
                <li v-for="(item,index) in coverInvitation" :key="index">
                    <div class="InvitationPFlex">
                        <span class="iconfont1 icon-yaoqing11"></span>
                        <span class="ListT">邀请人id:{{item.InvitationProgressId}}</span>
                        <span class="ListS">累计活跃奖励</span>
                        <span class="ListF">{{item.InvitationProgressGrade}}</span>
                        <span class="ListV">{{item.InvitationProgressReward}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
import { NavBar } from "vant";
import { Dialog } from 'vant';
export default {

    components:{
        NavBar,
    },


    data() {
        return {
            coverInvitation:[
                {
                    InvitationProgressReward:"+123",//邀请人获得的奖励
                    InvitationProgressGrade:"普通会员", //被邀请人会员等级
                    InvitationProgressId:"123456",    //被邀请人邀请码id
                },
                {
                    InvitationProgressReward:"+123",//邀请人获得的奖励
                    InvitationProgressGrade:"初级会员", //被邀请人会员等级
                    InvitationProgressId:"651515",    //被邀请人邀请码id
                },
                {
                    InvitationProgressReward:"+123",//邀请人获得的奖励
                    InvitationProgressGrade:"中级会员", //被邀请人会员等级
                    InvitationProgressId:"151231",    //被邀请人邀请码id
                },
                {
                    InvitationProgressReward:"+123",//邀请人获得的奖励
                    InvitationProgressGrade:"普通会员", //被邀请人会员等级
                    InvitationProgressId:"123456",    //被邀请人邀请码id
                },
                {
                    InvitationProgressReward:"+123",//邀请人获得的奖励
                    InvitationProgressGrade:"普通会员", //被邀请人会员等级
                    InvitationProgressId:"123456",    //被邀请人邀请码id
                },
            ],
            InvitationNumber:'',
        }
    },

    mounted(){  
        this.GetNumberList()
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        GetNumberList(){
            this.InvitationNumber=this.coverInvitation.length;
        },
        onClickRight(){
            Dialog.alert({
                title: '-- 邀请说明 --',
                messageAlign:'left',
                theme:'round-button',
                width:'80%',
                confirmButtonText:'知道了',
                message: '\n1.邀请您的朋友、同学、同事成功率最高'+
                +'2.分享到3个以上的微信群/QQ群，邀请成功率提升200%\n'
                +'3.通过您邀请注册的用户，您最高可获得七次福利奖励\n'
                +'4.分享海报到微信/QQ，让好友通过你分享的图片识别二维码注册\n'
                +'5.也可让好友使用淘宝、抖音、微博、支付宝进行扫一扫注册\n'
                +'6.更多邀请攻略请看活动说明。'
                }).then(() => {
                
            });
        }
    },

}
</script>



<style lang="scss" scoped>
    .MyInvitationTest{
        width: 100%;
        height: 40px;
        background-color: #9bf1f1;
        font-size: 20px;
        padding-top: 10px;
        padding-left: 40px;
        span{
            color:white;
            padding-left: 180px;
        }
    }
    .MyInvitationList{
        margin-top: 10px;
        width: 93%;
        height: 70vh;
    }
    .icon-yaoqing11{
        font-size: 42px;
        color: rgb(126, 126, 241);
        font-weight: 500;
    }
    .InvitationPFlex{
        border-bottom:1px solid #e2e1e1;
        width: 100%;
        height: 3.5rem;
        font-size: 15px;
        color: rgb(85, 83, 83);
        font-weight: 600;
    }
    .InvitationPFlex{
        display: inline-flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        .icon-yaoqing11{
            padding-top: 0.3rem;
        }
        .ListT{
            padding-top: 0.3rem;
            margin-left: -0.5rem;
        }
        .ListS{
            padding-top: 0.3rem;
            padding-left: 2rem;
        }
        .ListF{
            margin-top: -1.5rem;
            margin-left: 4.1rem;
        }
        .ListV{
            margin-top: -1.4rem;
            margin-left: 6rem;
            color: rgb(182, 6, 6);
        }
        
    }

</style>