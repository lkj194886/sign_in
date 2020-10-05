<template>
  <div class="concent">
    <div class="sign_in">
      <div class="region">
        <span class="region_day">04</span>
        <span class="region_month">十月&#12288;星期四</span>
        <span class="region_weather">泉州 晴</span>
        <span class="region_fitting">宜追光</span>
      </div>

      <div class="sign_in_detailed">
        <div class="sign_in_schedule">
          <steps :active="active">
            <step>开始</step>
            <step>01天</step>
            <step>02天</step>
            <step>03天</step>
          </steps>
        </div>

        <div class="sign_in_btn">
          <input class="btn" type="button" value="立即签到" />
        </div>
      </div>
    </div>

    <div class="the_rules">活动规则</div>
  </div>
</template>
<script>
import { Step, Steps } from "vant";
export default {
  components: {
    Step,
    Steps,
  },
  data() {
    return {
      active: 1,
    };
  },
};
</script>
<style lang="scss" >

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
    background-color: rgb(11, 131, 243);
    border-radius: 15px;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    .region {
      position: absolute;
      top: 4%;
      left: 10%;
      align-items: center;
      .region_day {
        font-size: 6rem;
      }
      .region_month {
        display: flex;
        position: relative;
        left: 5px;
      }
      .region_weather {
        display: flex;
        position: relative;
        left: 5px;
      }
      .region_fitting {
        display: flex;
        position: relative;
        left: 4px;
        top: 10px;
        font-size: 18px;
      }
    }
    .sign_in_detailed {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      position: relative;
      top: 100px;
      // color: #ffffff;
      .sign_in_schedule {
        
        width: 95%;
        
      }
      .sign_in_btn {
        // display: flex;
        text-align:center;
        width: 100%;
        .btn {
          width: 95%;
          margin-top: 10px;
          height: 50px;
          background-color: rgba($color: #ffffff, $alpha: 0.8);
          border-radius: 10px;
          border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        }
      }
    }
  }
  .the_rules {
    display: flex;
    width: 90%;
    height: 250px;
    border: 2px solid rgb(11, 131, 243);
    border-radius: 15px;
    margin-top: 60px;
    justify-content: center;
    align-items: center;
    // margin-bottom: 100px;
  }
}
</style>