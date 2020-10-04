<template>
  <div class="my">
    <div class="my_header">
      <div class="my_head_portrait">
        <img :src="imgsrc" />
      </div>
      <div class="my_name_id">
        <p>昵称: 云深</p>
        <p>ID: 123456</p>
      </div>
      <div class="my_vip_up">
        <p class="vip">会员权益</p>
        <p class="up">普通会员</p>
      </div>
      <div class="my_zhongxin"><span class="iconfont icon-jiantou"></span></div>
    </div>

    <div class="my_balance_withdraw">余额及提现</div>

    <div class="my_function">功能</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgsrc: require("../../static/img/imgg.jpg"),
    };
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
    width: 100%;
    display: flex;
    border-bottom: 3px solid #000000;
    // border: 1px solid red;
    .my_head_portrait {
      flex: 30%;
      padding: 2%;
      //   border: 1px solid red;
      img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
      }
    }
    .my_name_id {
      flex: 45%;
      padding-top: 6%;
      padding-left: 2%;
      p {
        padding-top: 5%;
      }
    }
    .my_vip_up {
      flex: 35%;
       padding-top: 6%;
      padding-left: 2%;
      p {
        padding-top: 5%;
      }
      .up {
        color: red;
        font-weight: 900;
      }
    }
    .my_zhongxin {
      flex: 16%;
      span {
        font-size: 4rem;
        position: absolute;
        right: -2%;
        top: 3%;
      }
    }
  }
  .my_balance_withdraw {
    width: 100%;
  }
  .my_function {
    width: 100%;
  }
}
</style>