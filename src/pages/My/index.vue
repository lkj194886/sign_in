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
        <p>会员权益</p>
        <p>普通会员</p>
      </div>
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
  .my_header {
    display: flex;
    border-bottom: 1px solid #000000;
    .my_head_portrait {
      flex: 20%;
      padding: 10px;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
    }
    .my_name_id {
      flex: 45%;
      padding-top: 19px;
      padding-left: 10px;
      p {
        padding-top: 10px;
      }
    }
    .my_vip_up {
      flex: 35%;
      padding-top: 14px;
      padding-left: 10px;
       border: 1px solid red;
      p {
        padding-top: 10px;
      }
    }
  }
  .my_balance_withdraw {
  }
  .my_function {
  }
}
</style>