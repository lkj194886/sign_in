<template>
  <div class="my">
    <div class="my_header">
      <div class="my_head_portrait">
        <img :src="imgsrc" />
      </div>
      <div class="my_name_id">
        <p>15695958932</p>
        <p>ID: 123456</p>
      </div>
      <div class="my_vip_up">
        <p class="vip">会员权益</p>
        <p class="up">普通会员</p>
      </div>
    </div>
    <div class="my_header_line"></div>
    <div class="my_balance_withdraw">
      <div>
        <p>￥&nbsp;&nbsp;&nbsp;&nbsp;700<br />余额</p>
      </div>
      <div>
        <p>$&nbsp;&nbsp;&nbsp;&nbsp;200<br />七币</p>
      </div>
      <div @click="withdrawal" class="tixian"><p>提现</p></div>
      <div class="duihuan"><p>兑换</p></div>
    </div>
    <divider />
    <div class="my_function">
      <div  @click="DialogCopy">
        <span class="iconfont icon-lianxikefu"></span>
        <span class="left_title">联系客服<span class="iconfontAgain">微信:18359300426</span></span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div  @click="GoMemberCenter">
        <span class="iconfont icon-huiyuanzhongxin"></span>
        <span class="left_title">会员中心</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div @click="GoAccountdetails">
        <span class="iconfont icon-mingxi1"></span>
        <span class="left_title">账户明细</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div @click="GoAdvertising">
        <span class="iconfont icon-guanggao"></span>
        <span class="left_title">广告投放</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div @click="GoMyInvitation">
        <span class="iconfont icon-yaoqing"></span>
        <span class="left_title">我的邀请</span
        ><span class="iconfont icon-jiantou"></span>
      </div>
      <div>
        <span class="iconfont icon-fenxiang"></span>
        <span class="left_title">邀请人ID: LJWZUISHUAI</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Divider } from "vant";
import { Dialog } from 'vant';
export default {
  components: {
    Divider,
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      imgsrc: require("@/static/img/imgg.jpg"),
    };
  },
  mounted() {},
  methods: {
    withdrawal() {
      this.$router.push({
        path: "/withdrawal",
      });
    },
    GoMemberCenter() {
      this.$router.push({
        path: "/MemberCenter",
      });
    },
    GoAccountdetails(){
      this.$router.push({
        path: "/Accountdetails",
      });
    },
    GoAdvertising(){
      this.$router.push({
        path: "/Advertising",
      });
    },
    GoMyInvitation(){
      this.$router.push({
        path: "/MyInvitation",
      });
    },

    DialogCopy(){
          let url = "18359300426";
          let oInput = document.createElement('input');
          oInput.value = url;
          document.body.appendChild(oInput);
          oInput.select(); // 选择对象;
          console.log(oInput.value)
          document.execCommand("Copy"); // 执行浏览器复制命令
          oInput.remove()
      Dialog.alert({
        title: '微信号已复制成功',
        width:"75%",
        message: '已成功复制客服微信\n'+
                 '可以去微信里添加好友了',
        confirmButtonText:'知道了',
        beforeClose,
      });
      function beforeClose(action, done) {
        if (action === 'confirm') {
          done();
        } else {
          done();
        }
      }
    },


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
    // border-bottom: 2px solid rgb(184, 184, 184);
    justify-content: center;
    align-items: center;
    .my_head_portrait {
      flex: 20%;
      // padding: 3%;
      padding-top: 4%;
      padding-left: 3%;
      padding-bottom: 3%;
      img {
        border: 1px solid rgb(184, 184, 184);
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
      }
    }
    .my_name_id {
      flex: 55%;
      padding-left: 20px;
      p {
        padding-top: 5%;
      }
    }
    .my_vip_up {
      // border: 1px solid red;
      flex: 30%;
      p {
        padding-top: 5%;
      }
      .up {
        color: red;
        font-weight: 900;
      }
    }
  }
  .my_header_line {
    width: 100%;
    height: 13px;
    background-color: rgb(235, 235, 235);
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
      // border: 1px solid rgb(184, 184, 184);
      border-radius: 15px;
      background-color: rgba(40, 141, 253, 0.7);
      p {
        color: #ffffff;
        text-align: center;
      }
    }
    .tixian {
     background-image: linear-gradient(rgb(238,123,116), rgb(238,160,109));
    }
    .duihuan {
     background-image: linear-gradient(rgb(124,134,245), rgb(111,155,228));
    }
    border-bottom: 1px solid rgb(184, 184, 184);
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
      border-bottom: 1px solid rgb(184, 184, 184);
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
        color: rgb(184, 184, 184);
      }
      .icon-lianxikefu {
        font-size: 25px;
        padding-left: 10px;
        color: rgb(163, 149, 234);
        font-weight: 900;
      }
      .icon-huiyuanzhongxin {
        font-size: 25px;
        padding-left: 10px;
        font-weight: 900;
        color: rgb(242, 106, 110);
      }
      .icon-mingxi1 {
        font-size: 25px;
        padding-left: 10px;
        font-weight: 900;
        color: rgb(218, 167, 101);
      }
      .icon-guanggao {
        font-size: 25px;
        padding-left: 10px;
        font-weight: 900;
        color: rgb(175, 200, 96);
      }
      .icon-yaoqing {
        font-size: 25px;
        padding-left: 10px;
        color: rgb(245, 169, 23);
        font-weight: 900;
      }
      .icon-fenxiang {
        font-size: 25px;
        padding-left: 10px;
        font-weight: 900;
        color: rgb(89, 169, 234);
      }
    }
  }
}
.iconfontAgain{
  padding-left: 23%;
  color: rgb(100, 104, 100);
}
</style>