<template>
  <div class="concent">
    <div class="sign_in">签到</div>
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