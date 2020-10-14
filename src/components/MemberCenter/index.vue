<template>
    <div class="MenberFlex">
        <nav-bar
            title="会员中心"
            left-text="返回"
            right-text="会员说明"
            left-arrow
            @click-left="onClickLeft"
            @click-right="showDialog"
        />
        <div class="MemberName"><img :src="MemberName"/><span>用户</span><span>{{MemberCenterPhone}}</span></div>
        <br/>
        <div class="MemberList">
            <div class="Memberlistson"><img :src="MemberListImg[0].invitation" class="firstImg"/><span>{{MemberListName[0].invitation}}</span><span class="numberSpan">{{MemberInvitation}}</span></div>
            <div class="Memberlistson"><img :src="MemberListImg[1].phone"  class="firstImg"/><span>{{MemberListName[1].phone}}</span><span class="numberSpan">{{MemberCenterPhone}}</span></div>
            <div class="Memberlistson"><img :src="MemberListImg[2].member"  class="firstImg"/><span>{{MemberListName[2].member}}</span><span><img :src="MemberListImg[5].right" class="lastImg"/></span></div>
            <div class="Memberlistson"><img :src="MemberListImg[3].memberend"  class="firstImg"/><span>{{MemberListName[3].memberend}}</span><span><img :src="MemberListImg[5].right" class="lastImg"/></span></div>
            <div class="Memberlistson"><img :src="MemberListImg[4].partner"  class="firstImg"/><span>{{MemberListName[4].partner}}</span><span><img :src="MemberListImg[5].right" class="lastImg lastImgAgain"/></span></div>
            <div class="Memberlistson"><img :src="MemberListImg[6].weixinWithdrawal"  class="firstImg"/><span>{{MemberListName[5].weixinWithdrawal}}</span><span><img :src="MemberListImg[5].right" class="lastImg"/></span></div>
            <div class="Memberlistson"><img :src="MemberListImg[7].zhifubaoWithdrawal"  class="firstImg"/><span>{{MemberListName[6].zhifubaoWithdrawal}}</span><span><img :src="MemberListImg[5].right" class="lastImg lastImgAgain"/></span></div>
        </div>
    </div>
</template>



<script>
import { NavBar } from "vant";
import { Dialog } from 'vant';
export default {
    data() {
        return {
            MemberName:require("../../static/img/MemberName.png"),
            MemberCenterPhone:this.$store.state.sumphone,
            MemberListName:[
                {invitation:"邀请码",id:1},
                {phone:"手机号",id:2},
                {member:"升级会员",id:3},
                {memberend:"关闭会员",id:4},
                {partner:"加入合伙人",id:5},
                {weixinWithdrawal:"微信提现",id:6},
                {zhifubaoWithdrawal:"支付宝提现",id:7}
            ],
            MemberListImg:[
                {invitation:require("../../static/img/MemberYaoQing.png"),id:1},
                {phone:require("../../static/img/MemberPhone.png"),id:2},
                {member:require("../../static/img/MenberCenter.png"),id:3},
                {memberend:require("../../static/img/MemberEnd.png"),id:4},
                {partner:require("../../static/img/MenberHeHuo.png"),id:5},
                {right:require("../../static/img/right.png"),id:6},
                {weixinWithdrawal:require("../../static/img/weixinWithdrawal.png"),id:7},
                {zhifubaoWithdrawal:require("../../static/img/zhifubaoWithdrawal.png"),id:8},
            ],
            MemberInvitation:"123456"
        }
    },
    components: {
        NavBar,
        [Dialog.Component.name]: Dialog.Component,
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        showDialog(){
            Dialog.alert({
                title: '-- 会员说明 --',
                messageAlign:'left',
                theme:'round-button',
                width:'80%',
                confirmButtonText:'知道了',
                message: '\n111111111111111111111111'+
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111'
                +'11111111111111111111111111111111\n',
                }).then(() => {
                
            });
        }
    }
}
</script>



<style lang="scss" scoped>
    .MenberFlex{
        background-color: rgba(255, 246, 246, 0.986);
        margin: 0px;
        padding: 0px;
    }
    .MemberName{
        width: 100%;
        height: 25%;
        background-color: white;
        div{
            height: 9rem;
        }
        img{
            width: 6.5%;
            height: 1.4rem;
            padding-left: 9%;
            display: inline-block; 
            vertical-align: middle;
        }
        span:first-of-type{
            color:  rgb(46, 44, 45);
            letter-spacing: 0.2rem;
            padding-left: 4%;
            line-height: 2.5rem;
        }
        span:last-of-type{
            padding-left: 40%;
            line-height: 3rem;
        }
    }

    .MemberList{
        width: 100%;
        height: 100rem;
        background-color: white;
        div{
            border-bottom: 1px solid rgb(218, 214, 214);
            height: 3rem;
        }
        .firstImg{
            width: 7%;
            height: 1.6rem;
            padding-left: 9%;
            display: inline-block; 
            vertical-align: middle;
        }
        .lastImg{
            display: inline-block; 
            vertical-align: middle;
            width: 6%;
            height: 1.4rem;
            padding-left: 40%;
        }
        .lastImgAgain{
            padding-left: 35%;
        }
        span:first-of-type{
            color:  rgb(46, 44, 45);
            letter-spacing: 0.2rem;
            padding-left: 4%;
            line-height: 3rem;
        }
        .numberSpan{
            padding-left: 35%;
        }
    }


    
</style>