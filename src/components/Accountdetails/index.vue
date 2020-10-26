
<template>
    <div class="accountdetailsFlex">
        <div>
            <nav-bar
                title="账单中心"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>
        <br/><br/>
        <div class="accountdetailsList">
            <van-tabs :active="active" animated background="rgba(235, 246, 246, 0.986)">
                <van-tab title="余额提现">
                    <div style="background-color:rgba(245, 246, 246, 0.986)"><br/></div>
                    <ul>
                        <li v-for="(item,index) in WithdrawalList" :key="index">
                            <div class="listTableStyle"><img :src="tixianGo"/><span class="listTest">{{item.withdrawal}}-{{item.payment}}</span><span class="listTime">{{item.time}}</span><span class="listMoney">{{item.Addition}}{{item.money}}</span><span>{{item.state}}</span></div>
                        </li>
                    </ul>
                </van-tab>
                <van-tab title="活跃奖励">
                    <div style="background-color:rgba(245, 246, 246, 0.986)"><br/></div>
                    <ul>
                        <li>1</li>
                    </ul>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>



<script>
import { NavBar } from "vant";
import { Tab, Tabs } from 'vant';

export default {
    components: {
        NavBar,
        'VanTab':Tab, 
        'VanTabs':Tabs,
    },

    data() {
        return {
            active: 2,
            tixianGo:require("../../static/img/tixian.png"),
            weixinPayment:"微信",
            zhifubaoPayment:"支付宝",
            BalanceWithdrawal:"余额提现",
            toExamine:"正在审核",
            toSucces:"提现成功",
            Addition:"+",
            Subtraction:"-",
            IncreaseAmount:"66.01",
            listTime:"2020-1-01",
            UserConsumptionList:[
                {
                    withdrawal:"余额提现",
                    payment:"微信",
                    time:"2020-1-01",
                    and:"+",
                    money:"66.01",
                    state:"正在审核",
                },
                {
                    withdrawal:"余额提现",
                    payment:"微信",
                    time:"2020-1-01",
                    and:"+",
                    money:"66.01",
                    state:"正在审核",
                },
                {
                    withdrawal:"余额提现",
                    payment:"支付宝",
                    time:"2020-1-01",
                    and:"+",
                    money:"66.01",
                    state:"提现成功",
                },
                {
                    withdrawal:"余额提现",
                    payment:"支付宝",
                    time:"2020-1-01",
                    and:"+",
                    money:"66.01",
                    state:"提现成功",
                },
                {
                    withdrawal:"余额提现",
                    payment:"支付宝",
                    time:"2020-1-01",
                    and:"+",
                    money:"66.01",
                    state:"提现成功",
                },
            ]
        }
    },

    computed:{
        WithdrawalList:function(){
            let results = this.UserConsumptionList.filter((item)=>{
                return item.withdrawal == "余额提现"
            })
            return results;
        },
    },

    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        
    },
}
</script>



<style lang="scss" scoped>
    .accountdetailsFlex{
        background-color: rgba(245, 246, 246, 0.986);
        height: 80vh;
        margin: 0px;
        padding: 0px;
    }
    .listTableStyle{
        width: 100%;
        height: 65px;
        background-color: white;
        border-bottom: 1px solid rgb(230, 223, 223);
        img{
            width: 45px;
            height: 45px;
        }
        span:last-of-type{
            color: blue;
        }
        .listTime{
            color: rgb(189, 186, 186);
        }
        .listTest{
            font-size: 18px;
            font-weight: 600;
        }
        .listMoney{
            font-size: 18px;
            font-weight: 600;
            color: orange;
        }
    }
    .listTableStyle{
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items:center;
        flex-direction:row;
        margin: 0px;
        padding: 0px;
        img{
            padding-top: 5px;
            order:0;
            padding-left: 10px;
        }
        .listTest{
            align-self:flex-start;
            flex: 55%;
            order:1;
            padding-top: 7px;
            padding-left: 10px;
        }
        .listTime{
            flex: 40%;
            order:3;
            align-self:flex-start;
            margin-top: -20px;
            padding-left: 65px;
        }
        .listMoney{
            flex: 15%;
            align-self:flex-start;
            order:2;
            padding-top: 5px;
        }
        span:last-of-type{
            flex: 1%;
            order:4;
            align-self:flex-start;
            margin-top: -24px;
        }
    }
</style>