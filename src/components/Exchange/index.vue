<template>
  <div class="content">
    <nav-bar
      title="兑换"
      left-text="返回"
      right-text="兑换记录"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="exchange_content">
      <div class="exchange_qibi">
        <div class="duihuan">兑换七币</div>
        <div class="exchange_symbol">$</div>
        <div class="exchange_money"><input type="text"></div>
      </div>
      <div class="exchange_usable_qibi">可用七币: {{user.userQiBi}}</div>
      <div class="exchange_poundage">
        <div class="exchange_rate">$100 = ￥{{100-user.signInVip.vipExchangeRate}}</div>
        <div class="exchange_rate_vip">{{user.signInVip.vipName}}兑换手续费%{{user.signInVip.vipExchangeRate}}</div>
      </div>
    </div>
    <div class="exchange_btn">
      <input class="btn" type="button" value="提现" />
    </div>
    <div class="exchange_notice_top"></div>
    <div class="exchange_notice">
      <br />
      <span>兑换须知</span><br /><br />
      1.
      由于微信支付需实名认证，非实名月户账号将无法提现，请确保觉信号已实名认证:<br />
      <br />
      2. 一旦提现之后，微信绑定账号将不可进行更改。<br /><br />
      3. 18: 00前提现当天到账，18: 00后次日到账，节假日顺延到工作日<br /><br />
      4. 常规提现没有次数限制。每天均可多次提现。 <br />
      (备注:如果系统检测到用户有作弊行为,则该用户会被封号处理,不正常手段获取的积分收益概不兑换，并保留追究其法律责任的权利)
    </div>
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      user:'',
      qibi:''
    };
  },
  mounted() {
    this.user = this.$store.state.user.user;
    console.log(this.user);
    this.$mui.back = () => {
      // console.log("!111");
      this.$router.go(-1);
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  .exchange_content {
    margin-top: 20px;
    width: 85%;
    border: 1px solid rgb(236, 228, 228);
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .exchange_qibi {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      //   border: 1px solid red;
      border-bottom: 1px solid rgb(236, 228, 228);
      height: 35%;
      .duihuan {
        // margin: 10px;
        padding-top: 5px;
        display: flex;
        flex-wrap: wrap;
        font-weight: 900;
        font-size: 1.3rem;
        padding-left: 14px;
        height: 20%;
        width: 100%;
        // border: 1px solid #6d6d72;
      }
      .exchange_symbol {
        // width: 5%;
        justify-content: center;
        font-weight: 700;
        align-items: center;
        padding-left: 10px;
        display: flex;
        // border: 1px solid red;
        font-size: 3rem;
        position: relative;
        // left: -5px;
      }
      .exchange_money {
        width: 80%;
        align-items: center;
        display: flex;
        font-size: 3rem;
        input{
          border: 0;
          width: 100%;
        }
      }
    }
    .exchange_usable_qibi {
      width: 100%;
      //   margin: 10px;
      //   border: 1px solid green;
      border-bottom: 1px solid rgb(236, 228, 228);
      height: 14%;
      display: flex;
      //   justify-content: center;
      padding-left: 10px;
      align-items: center;
      font-size: 1.2rem;
      font-weight: 800;
    }
    .exchange_poundage {
      width: 100%;
      //   margin: 10px;
      height: 45%;
      //   border: 1px solid gold;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .exchange_rate {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        font-size: 2.5rem;
        border-bottom: 1px solid rgb(236, 228, 228);
      }
      .exchange_rate_vip {
        font-size: 1.2rem;
        font-weight: 900;
      }
    }
  }
  .exchange_btn {
    width: 85%;
    .btn {
      width: 100%;
      margin-top: 15px;
      height: 50px;
      // background-color: rgba($color: #ffffff, $alpha: 0.8);
      border-radius: 10px;
    }
  }
  .exchange_notice_top {
    width: 100%;
    height: 15px;
    background-color: rgb(247, 247, 247);
  }
  .exchange_notice {
    span {
      font-size: 16px;
      width: 40px;
      height: 20px;
      // padding-top: 10px;
    }
    line-height: 1rem;
    width: 80%;
    font-size: 12px;
    color: rgb(186, 186, 186);
  }
}
</style>