<template>
  <div class="concent">
    <div class="sign_in">
      <span>01</span>
      <div>十月   星期四</div>
      <div>泉州 晴</div>
      <div>宜追光</div>
      <button>立即签到</button>
    </div>
    <div class="the_rules">活动规则</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.concent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .sign_in {
    display: flex;
    width: 90%;
    height: 400px;
    border: 2px solid rgb(11, 131, 243);
    border-radius: 15px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    
  }
  .the_rules {
    display: flex;
    width: 90%;
    height: 250px;
    border: 2px solid rgb(11, 131, 243);
    border-radius: 15px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    // margin-bottom: 100px;
  }
}
</style>