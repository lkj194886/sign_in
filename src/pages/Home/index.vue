<template>
  <div class="concent">
    <div class="sign_in">
      <div class="region">
        <span class="region_day">{{ date }}</span>
        <span class="region_month">{{ month }}&#12288;{{ day }}</span>
        <span class="region_weather">{{ LocationCity }} 晴</span>
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
import BMap from "BMap";
// import AMap from 'vue-amap'
export default {
  components: {
    Step,
    Steps,
  },
  data() {
    return {
      active: 1,
      date: "", //当前几号
      day: "", //今天星期几
      month: "", //当前月份
      LocationCity: "正在定位",
    };
  },
  mounted() {
    if (this.$store.state.LocationCity === null) {
      this.city();
    } else {
      this.LocationCity = this.$store.state.LocationCity.LocationCity.LocationCity;
    }
    let date = new Date();
    if (date.getDate() < 10) {
      this.date = "0" + date.getDate();
    } else {
      this.date = date.getDate();
    }
    // this.date="01"
    if (date.getDay() === 1) {
      this.day = "星期一";
    }
    if (date.getDay() === 2) {
      this.day = "星期二";
    }
    if (date.getDay() === 3) {
      this.day = "星期三";
    }
    if (date.getDay() === 4) {
      this.day = "星期四";
    }
    if (date.getDay() === 5) {
      this.day = "星期五";
    }
    if (date.getDay() === 6) {
      this.day = "星期六";
    }
    if (date.getDay() === 0) {
      this.day = "星期日";
    }
    if (date.getMonth() === 0) {
      this.month = "一月";
    }
    if (date.getMonth() === 1) {
      this.month = "二月";
    }
    if (date.getMonth() === 2) {
      this.month = "三月";
    }
    if (date.getMonth() === 3) {
      this.month = "四月";
    }
    if (date.getMonth() === 4) {
      this.month = "五月";
    }
    if (date.getMonth() === 5) {
      this.month = "六月";
    }
    if (date.getMonth() === 6) {
      this.month = "七月";
    }
    if (date.getMonth() === 7) {
      this.month = "八月";
    }
    if (date.getMonth() === 8) {
      this.month = "九月";
    }
    if (date.getMonth() === 9) {
      this.month = "十月";
    }
    if (date.getMonth() === 10) {
      this.month = "十一月";
    }
    if (date.getMonth() === 11) {
      this.month = "十二月";
    }
  },
  methods: {
    city() {
      //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          let city = position.address.city; //获取城市信息
          let province = position.address.province; //获取省份信息
          _this.LocationProvince = province;
          _this.LocationCity = city;
          _this.$store.commit("$_setLocationCity", {
            LocationCity: { LocationCity: _this.LocationCity },
          });
        },
        function (e) {
          console.log(e);
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
    },
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
        left: 10px;
      }
      .region_weather {
        display: flex;
        position: relative;
        left: 10px;
      }
      .region_fitting {
        display: flex;
        position: relative;
        left: 10px;
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
        text-align: center;
        width: 100%;
        .btn {
          width: 95%;
          margin-top: 10px;
          height: 50px;
          background-color: rgba($color: #ffffff, $alpha: 0.8);
          border-radius: 10px;
          border: 0.5px solid rgba($color: #ffffff, $alpha: 0.4);
        }
        .btn:hover {
          background-color: rgba($color: #504949, $alpha: 0.8);
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