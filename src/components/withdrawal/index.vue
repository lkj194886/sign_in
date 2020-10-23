<template>
  <div class="withdrawal">
    <nav-bar
      title="提现"
      left-text="返回"
      right-text="提现记录"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="withdrawal_nav_bottom"></div>
    <div class="withdrawal_way">
      <div
        :class="active == index ? 'active' : ''"
        v-for="(item, index) in list"
        :key="item.index"
        @click="getItem(index)"
      >
        <div :class="item.divclass">
          <p>
            <span :class="item.spanclass"></span>
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
    <div class="bound_content">
      <div class="not_bound" v-if="show">
        <span class="tishi_bound">您还未绑定{{ notBound }}账号</span
        ><span class="gobound" @click="bound"
          >去绑定<span class="iconfont icon-jiantou"></span
        ></span>
      </div>
    </div>
    <div class="withdrawal_information">
      <div class="withdrawal_money">
        <span class="money">提现金额</span>
        <div>
          <span class="money_icon">￥</span>
          <span class="tixian_money">100</span>
        </div>
      </div>
      <div class="withdrawal_balance">
        <span class="balance">可用余额:125元</span>
      </div>
      <div class="withdrawal_btn">
        <input class="btn" type="button" value="提现" />
      </div>
    </div>
    <div class="withdrawal_notice_top"></div>
    <div class="withdrawal_notice">
      <br />
      <span>提现须知</span><br /><br />
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
      show: false,
      active: -1,
      notBound: "",
      list: [
        {
          divclass: "zhifubao",
          spanclass: "iconfont icon-zhifubao",
          content: "支付宝",
        },
        {
          divclass: "weixin",
          spanclass: "iconfont icon-weixin",
          content: "微信",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    bound() {
      if (this.notBound === "微信") {
        this.$router.push({
          path: "/weixin",
        });
      }
      if (this.notBound === "支付宝") {
        this.$router.push({
          path: "/zhifubao",
        });
      }
    },
    getItem(index) {
      this.show = true;
      this.active = index;
      if (index === 0) {
        this.notBound = "支付宝";
      }
      if (index === 1) {
        this.notBound = "微信";
      }
    },
  },
  mounted() {
    this.$mui.back = () => {
      this.$router.go(-1);
    };
  },
};
</script>
<style lang="scss" scoped>
.withdrawal {
  .withdrawal_nav_bottom {
    width: 90%;
    padding-top: 20px;
  }
  .withdrawal_way {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 10px;
    // border: 1px solid red;
    .active {
      background-color: rgba(157, 168, 179, 0.5);
      height: 102px;
      width: 42%;
      color: #ffffff;
      // font-weight: 900;
      // border: 1px solid red;
    }
    div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 10px;
      width: 42%;
      height: 100px;
      // border: 1px solid red;
      border-radius: 15px;
      .zhifubao {
        border: 2px solid rgb(11, 131, 243);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        // margin-bottom: 10px;
        width: 100%;
        span {
          font-size: 2rem;
          display: flex;
          // flex-wrap: wrap;
          padding-bottom: 3px;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .icon-zhifubao {
          color: rgb(11, 131, 243);
        }
        .icon-weixin {
          color: rgb(7, 193, 96);
        }
      }
      .weixin {
        border: 2px solid rgb(11, 131, 243);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        // margin-bottom: 10px;
        width: 100%;
        span {
          font-size: 2rem;
          display: flex;
          // flex-wrap: wrap;
          padding-bottom: 3px;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .icon-zhifubao {
          color: rgb(11, 131, 243);
        }
        .icon-weixin {
          color: rgb(7, 193, 96);
        }
      }
    }
  }
  .bound_content {
    width: 90%;
    // border: 1px solid red;
    display: flex;

    .not_bound {
      width: 100%;
      display: flex;
      // flex-wrap: wrap;
      .tishi_bound {
        flex: 70%;
        margin-left: 10px;
        color: red;
      }
      .gobound {
        flex: 25%;
        margin-right: 10px;
      }
    }
  }
  .withdrawal_information {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    padding-bottom: 15px;
    .withdrawal_money {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 150px;
      border-top: 2px solid rgb(11, 131, 243);
      border-right: 2px solid rgb(11, 131, 243);
      border-left: 2px solid rgb(11, 131, 243);
      .money {
        font-size: 2rem;
        width: 95%;
        display: flex;
      }
      div {
        display: flex;
        width: 95%;
        justify-content: center;
        align-items: center;
        .money_icon {
          font-size: 3rem;
        }
        .tixian_money {
          flex: 90%;
          font-size: 3rem;
        }
      }
    }
    .withdrawal_balance {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 45px;
      border: 2px solid rgb(11, 131, 243);
      span {
        margin-left: 10px;
        flex: 19%;
      }
    }
    .withdrawal_btn {
      text-align: center;
      width: 100%;
      .btn {
        width: 100%;
        margin-top: 10px;
        height: 50px;
        // background-color: rgba($color: #ffffff, $alpha: 0.8);
        border-radius: 10px;
        // border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
      }
    }
  }
  .withdrawal_notice_top {
    width: 100%;
    height: 15px;
    background-color: rgb(247, 247, 247);
  }
  .withdrawal_notice {
    span {
      font-size: 16px;
      width: 40px;
      height: 20px;
      // padding-top: 10px;
    }
    line-height: 1rem;
    width: 90%;
    font-size: 12px;
    color: rgb(186, 186, 186);
  }
}
</style>