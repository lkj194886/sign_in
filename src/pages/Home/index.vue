<template>
  <div class="concent">
    <div class="loadings" v-show="show">
      <loading size="100" vertical>加载中</loading>
    </div>
    <div class="concent_sign" v-if="divShow">
      <div class="sign_in">
        <div class="region">
          <span class="region_day">{{ date }}</span>
          <span class="region_month">{{ month }}&#12288;{{ day }}</span>
          <span class="region_weather">{{ LocationCity }} {{ weather }}</span>
          <span class="region_fitting">{{ remind }}</span>
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

      <div class="bulletin_board">
          <span class="notice_title">活动规则</span>
          <div class="notice_concent">
            第一天签到可获得奖励0.8七币、第二天签到可获得奖励1.6七币，第三天签<br />
            到可获得奖励2.4七币。连续签到天数=奖励七币数量，最高可连续签到30天。<br />
            每日领取福利一次奖励1个七币，根据会员等级权益区分每日领取福利的次数。<br />
            普通3次、初级6次、中级10次、高级15次。<br />
            <br />
            其它说明
            <br />
            <br />
            如果中间有一天间断未签到的，重先开始计算连续签到时间。
            未领取完的福利将在次日清空，不可累积，每日重新计算福利次数。
            活动奖励的七币不能直接提现，只能投放广告或则兑换后提现。
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Step, Steps } from "vant";
import BMap from "BMap";
// import AMap from 'vue-amap'
import { Loading } from "vant";
export default {
  components: {
    Step,
    Steps,
    Loading,
  },
  data() {
    return {
      active: 1,
      weather: "",
      remind: "",
      date: "", //当前几号
      day: "", //今天星期几
      month: "", //当前月份
      LocationCity: "正在定位",
      // cityy: "",
      cityParams: {
        city: "",
      },
      divShow: false,
      timer: "",
      show: true,
    };
  },
  mounted() {
    //页面加载时查询全局变量是否已经存在数据,没有则重新获取
    if (this.$store.state.LocationCity === null) {
      this.city();
    } else {
      this.divShow = true;
      this.show = false;
      this.LocationCity = this.$store.state.LocationCity.LocationCity.LocationCity;
      this.weather = this.$store.state.weather.weather;
      this.remind = this.$store.state.weather.remind;
    }
    // this.cityParams.city=this.$store.state.LocationCity.LocationCity.LocationCity.replace("市","")
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

    // this.getCity();
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
          _this.timer = setInterval(_this.setCity, 1500);
        },
        function (e) {
          console.log(e);
          _this.LocationCity = "定位失败";
        },
        { provider: "baidu" }
      );
    },

    //获取天气及每日提醒
    getCity() {
      this.cityParams.city = this.LocationCity.replace("市", "");
      this.$axios
        .get("city/getCity", { params: this.cityParams })
        .then((res) => {
          this.weather = res.data.data.forecast[0].type;
          this.remind = res.data.data.forecast[0].notice;
          //将数据存入全局变量
          this.$store.commit("$_setweather", {
            weather: (this.weather = res.data.data.forecast[0].type),
            remind: (this.remind = res.data.data.forecast[0].notice),
          });
        });
    },

    //对请求数据进行处理
    setCity() {
      this.show = false;
      this.divShow = true;
      clearInterval(this.timer);

      this.getCity();
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
  .loadings {
    // position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concent_sign {
    width: 100%;
    .sign_in {
      display: flex;
      width: 90%;
      height: 400px;
      // border: 2px solid rgb(11, 131, 243);
      background: url("../../static/img/sign_Start.png") no-repeat;
      background-size: 100%;
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
          left: 9px;
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
          .van-step__title {
            color: #ffffff;
          }
          .van-step__circle-container {
            .van-step__circle {
              background-color: rgba(255, 255, 255, 1);
            }
          }
          .van-step__line {
            background-color: rgba(242, 243, 245, 0.7);
          }
          .van-step--finish .van-step__line {
            background-color: rgba(255, 255, 255, 1);
          }
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
      height: 500px;
      border: 2px solid rgb(11, 131, 243);
      border-radius: 15px;
      margin-top: 60px;
      justify-content: center;
      align-items: center;
      // margin-bottom: 100px;
    }
  }
}

.bulletin_board {
    width: 90%;
    border: 2px solid white;
    background-color: white;
    margin-top: 5rem;
    border: 2px solid rgb(11, 131, 243);
    border-radius: 15px;
    .notice_title {
      display: flex;
      font-size: 1.12rem;
      border-radius: 45px;
      width: 40%;
      padding: 5px 20px 5px 20px;
      position: relative;
      top: 1px;
      align-items: center;
      font-weight: 900;
      justify-content: center;
    }
    .notice_concent {
      font-size: 14px;
      color: rgb(99, 96, 96);
      // padding-bottom: 25px;
      padding: 0 10px 55px 10px;
    }
  }
</style>