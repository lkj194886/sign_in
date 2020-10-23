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
        <div class="MemberName">
            <span class="iconfont1 icon-yonghu1"></span>
            <span class="left_user">用户</span>
            <span class="numberSpan">{{MemberCenterPhone}}</span>
        </div>
        <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color=#f7f7f7 SIZE=19>
        <div class="MemberList">
            <div class="Memberlistson">
                <span class="iconfont1 icon-yaoqing1"></span>
                <span class="left_title1">{{MemberListName[0].invitation}}</span>
                <span class="numberSpan">{{MemberInvitation}}</span>
            </div>
            <div class="Memberlistson">
                <span class="iconfont1 icon-shoujihao1"></span>
                <span class="left_title1">{{MemberListName[1].phone}}</span>
                <span class="numberSpan1">{{MemberCenterPhone}}</span>
            </div>
            <div class="Memberlistson">
                <span class="iconfont1 icon-shengjihuiyuan1"></span>
                <span class="left_title1">{{MemberListName[2].member}}</span>
                <span class="iconfont1 icon-dayu1"></span>
            </div>
            <div class="Memberlistson">
                <span class="iconfont1 icon-guanbi1"></span>
                <span class="left_title1">{{MemberListName[3].memberend}}</span>
                <span class="iconfont1 icon-dayu1"></span>
            </div>
            <div class="Memberlistson">
                <span class="iconfont1 icon-jiaru1"></span>
                <span class="left_title1">{{MemberListName[4].partner}}</span>
                <span class="iconfont1 icon-dayu1"></span>
            </div>
            <div class="Memberlistson" @click="GoWeixin">
                <span class="iconfont1 icon-weixin1"></span>
                <span class="left_title1">{{MemberListName[5].weixinWithdrawal}}</span>
                <span class="iconfont1 icon-dayu1"></span>
            </div>
            <div class="Memberlistson" @click="GoZhifubao">
                <span class="iconfont1 icon-zhifubao1"></span>
                <span class="left_title1">{{MemberListName[6].zhifubaoWithdrawal}}</span>
                <span class="iconfont1 icon-dayu1"></span>
            </div>
        </div>
        <hr style="FILTER: alpha(opacity=100,finishopacity=0,style=3)" width="100%" color=#f7f7f7 SIZE=6>
        <div class="explainText">
            会员升级方法：<br/><br/>
            1.账户有足够的七币可以直接升级会员<br/>
            2.联系客服进行充值七币后升级会员(充值1元=2七币)<br/>
            3.邀请人达到120人有机会免费升级中级会员<br/>
            4.邀请人达到280人有机会免费升级高级会员<br/>
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
                {weixinWithdrawal:"微信绑定",id:6},
                {zhifubaoWithdrawal:"支付宝绑定",id:7}
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
                message: '●普通会员每日可以领3次福利，提现手续费95%，投放广告计价每小时低至24七币\n'+
                +'●初级会员每日可以领5次福利，提现手续费90%，投放广告计价每小时低至20七币\n'
                +'●中级会员每日可以领10次福利，提现手续费75%，投放广告计价每小时低至16七币\n'
                +'●高级会员每日可以领15次福利，提现手续费65%，投放广告计价每小时低至12七币\n'
                +'●成为合伙人可获得被邀请人提现的活跃奖励100%七币，合伙人提现手续费70%，投放广告计价每小时低至8七币。\n'
                +'●0元投资，在家创业。奖励终身有效，不设上限，邀请的人多了，你以后躺着就有收入。\n'
                +'●关闭会员需系统审核(审核周期为15-30天)系统通过会后扣除30%手续费其余的将在15个工作日内退回账户(历史会员不计在内)\n'
                +'●一旦关闭将无法自行撤回，如需撤回请联系客服。关闭期间会员权益变为普通会员。\n'
                +'●备注：1-2个月未投放广告，只提现的，视为恶意套现，系统将进行处罚！\n'
                +'●平台会根据活动运营能力设置不同档位提现/兑换额度；以及推广的策略、运营收益影响等对会员权益依法进行调整；具体以平台页面展示为准。\n'
                }).then(() => {
                
            });
        },
        GoWeixin(){
            this.$router.push({
                path: "/weixin",
            });
        },
        GoZhifubao(){
            this.$router.push({
                path: "/zhifubao",
            });
        },
    }
}
</script>



<style lang="scss" scoped>
    .MenberFlex{
        background-color: white;
        margin: 0px;
        padding: 0px;
    }
    .MemberName{
        width: 100%;
        height: 27%;
        background-color: white;
        div{
            height: 9rem;
        }
        span:last-of-type{
            padding-left: 45%;
            line-height: 3rem;
        }
        .left_user{
            position: relative;
            top: 20%;
            left: 5%;
        }
    }

    .MemberList{
            width: 97%;
            height: 22rem;
            background-color: white;
        div{
            border-bottom: 1px solid rgb(218, 214, 214);
            height: 3rem;
        }
        .numberSpan{
            padding-left: 80%;
            position: relative;
            top: -30%;
        }
        .numberSpan1{
            padding-left: 68%;
            position: relative;
            top: -30%;
        }
    }

    .Memberlistson{
        .left_title1 {
            position: relative;
            top: 15%;
            left: 5%;
        }
    }


    .icon-yonghu1{
        font-size: 27px;
        padding-left: 25px;
        padding-top: 10px;
        position: relative;
        top: 20%;
        color: rgb(163, 149, 234);
        font-weight: 900;
    }
    .icon-yaoqing1{
        font-size: 27px;
        padding-left: 20px;
        position: relative;
        top: 20%;
        color: rgb(245, 169, 23);
        font-weight: 900;
    }
    .icon-shoujihao1{
        font-size: 27px;
        padding-left: 20px;
        position: relative;
        top: 20%;
        color: rgb(163, 149, 234);
        font-weight: 900;
    }
    .icon-shengjihuiyuan1{
        font-size: 27px;
        padding-left: 20px;
        position: relative;
        top: 20%;
        font-weight: 900;
        color: rgb(148, 99, 100);
    }
    .icon-guanbi1{
        font-size: 27px;
        padding-left: 20px;
        position: relative;
        top: 20%;
        font-weight: 900;
        color: rgb(242, 106, 110);
    }
    .icon-jiaru1{
        font-size: 27px;
        padding-left: 20px;
        position: relative;
        top: 20%;
        font-weight: 900;
        color: rgb(131, 30, 33);
    }
    .icon-weixin1{
        font-size: 27px;
        padding-left: 20px;
        position: relative;
        top: 20%;
        font-weight: 900;
        color: green;
    }
    .icon-zhifubao1{
        font-size: 27px;
        padding-left: 20px;
        position: relative;
        top: 20%;
        font-weight: 900;
        color: rgb(72, 132, 189);
    }
    .icon-dayu1{
        position: absolute;
        font-weight: 900;
        right: 15px;
        font-size: 1.5rem;
        padding-top: 11px;
        color: rgb(182, 172, 172);
    }
    .explainText{
        color: rgb(161, 159, 159);
        font-size: 14px;
        padding-left: 27px;
        padding-top: 20px;
    }
</style>