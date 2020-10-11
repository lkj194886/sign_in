<template>
  <div class="my">
    <div class="my_header">
      <div class="my_head_portrait">
        <img src="../../static/img/imgg.jpg"/>
      </div>
      <div class="my_name_id">
        <p>15695958932</p>
        <p>ID: 123456</p>
      </div>
      <div class="my_vip_up">
        <p class="vip">会员权益</p>
        <p class="up">普通会员</p>
      </div>
      <div class="my_zhongxin"><span class="iconfont icon-jiantou"></span></div>
    </div>
    <div class="my_balance_withdraw">
      <div>
        <p>￥&nbsp;&nbsp;&nbsp;&nbsp;700<br />余额</p>
      </div>
      <div>
        <p>$&nbsp;&nbsp;&nbsp;&nbsp;200<br />七币</p>
      </div>
      <div @click="withdrawal"><p>提现</p></div>
      <div><p>兑换</p></div>
    </div>
    <divider />
    <div class="my_function">
      <div>
        <span class="left_title">联系客服</span
        ><span class="iconfont icon-jiantou"></span>``
      </div>
      <div>
        <span class="left_title" @click="GoMemberCenter">会员中心</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div>
        <span class="left_title">账户明细</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div>
        <span class="left_title">广告投放</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div>
        <span class="left_title">我的邀请</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div><span class="left_title">邀请人ID: LJWZUISHUAI</span></div>
    </div>
  </div>
</template>
<script>
import { Divider } from "vant";
export default {
  components: {
    Divider,
  },
  data() {
    return {
      imgsrc: require("@/static/img/imgg.jpg"),
    };
  },
  mounted() {
    
  },
  methods: {
    withdrawal() {
      this.$router.push({
        path: "/withdrawal",
      });
    },
    GoMemberCenter(){
      this.$router.push({
        path: "/MemberCenter",
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.my {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .my_header {
    display: flex;
    width: 95%;
    border-bottom: 2px solid rgb(11, 131, 243);
    justify-content: center;
    align-items: center;
    .my_head_portrait {
      flex: 30%;
      padding: 3%;
      img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
      }
    }
    .my_name_id {
      flex: 55%;
      p {
        padding-top: 5%;
      }
    }
    .my_vip_up {
      flex: 35%;
      p {
        padding-top: 5%;
      }
      .up {
        color: red;
        font-weight: 900;
      }
    }
    .my_zhongxin {
      flex: 15%;
      span {
        font-size: 2rem;
        color: #686161;
      }
    }
  }
  .my_balance_withdraw {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    padding-top: 20px;
    padding-bottom: 20px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      width: 44%;
      height: 70px;
      border: 2px solid rgb(11, 131, 243);
      border-radius: 15px;
      p {
        text-align: center;
      }
    }

    border-bottom: 2px solid rgb(11, 131, 243);
  }
  .my_function {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      border-bottom: 2px solid rgb(11, 131, 243);
      .left_title {
        flex: 12%;
        padding-left: 5%;
        float: left;
      }
      .icon-jiantou {
        position: absolute;
        font-weight: 900;
        right: 10px;
        font-size: 1.5rem;
        color: rgb(11, 131, 243);
      }
    }
  }
}
</style>