<template>
  <div class="notice">
    <div class="bulletin_board">
      <span class="notice_title">公告</span>
      <div class="notice_concent">
        <!-- 投放系统升级中，期间用户无法自行投放，如需投放请联系客服。结束时间另行通知。 <br />
        普通会员每日可以领3次福利，提现手续费95%，投放广告计价每小时低至24七币<br />
        初级会员每日可以领6次福利，提现手续费90%，投放广告计价每小时低至20七币<br />
        中级会员每日可以领10次福利，提现手续费75%，投放广告计价每小时低至16七币<br />
        高级会员每日可以领15次福利，提现手续费65%，投放广告计价每小时低至12七币<br />
        成为合伙人可获得被邀请人提现的活跃奖励100%七币，合伙人提现手续费70%，投放广告计价每小时低至8七币。<br /> -->
        0元投资，在家创业。奖励终身有效，不设上限，邀请的人多了，你以后躺着就有收入。<br />
        此次活动所有普通会员符合要求的可免费升级初级会员，邀请人达到50人奖励300七币，广告时长由原来的半小时升级一小时，广告时长翻倍，七币用不完可以兑换后提现啦，余额可以兑换影视会员、礼品券、实物等一系列产品，加入合伙人还可以赚取更多七币，快来参与吧。
        <br />
        <br />
        详情请咨询客服！
        <br />
        <br />
       本次活动时间为2020年10月16日<br />
       最终解释权归趣味极速版平台所有
      </div>
    </div>
  </div>
</template>




<script>
  export default {
    data() {
      return {
        
      }
    },
  };
</script>





<style lang="scss" scoped>
.notice {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  background: blanchedalmond;
  // align-items: center;
  .bulletin_board {
    width: 90%;
    border: 2px solid white;
    background-color: white;
    margin-top: 8rem;
    // border-radius: 50px;
    .notice_title {
      display: flex;
      border: 1px solid rgb(171, 233, 15);
      font-size: 1.12rem;
      border-radius: 45px;
      width: 40%;
      padding: 5px 20px 5px 20px;
      background-color:  #CD853F;
      position: relative;
      top: -20px;
      align-items: center;
      font-weight: 900;
      justify-content: center;
    }
    .notice_concent {
      font-size: 14px;
      color: rgb(99, 96, 96);
      // padding-bottom: 25px;
      padding: 0 10px 35px 10px;
    }
  }
}
</style>