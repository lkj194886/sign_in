<template>
  <div class="notice">
    <!-- <div class="bulletin_board">
      <span class="notice_title">邀请福利</span>
      <div class="notice_concent">
        1、设置容器为弹性盒子布局 display: flex; <br />
        2、设置弹性盒子中子元素的排列方式flex-direction: row | column;<br />
        3、设置弹性子元素超出父容器时是否换行flex-warp: nowrap | wrap;<br />
        4、flex-direction 和 flex-wrap的简写 flex-flow:flex-direction flex-wrap;
        <br />
        5、设置弹性子元素在主轴（横轴）方向上的对齐方式justify-content:
        flex-start | flex-end | center | space-between |space-around; <br />
        6、设置弹性子元素在侧轴（纵轴）方向上的对齐方式;<br />
      </div>
      <div class="invitationButton" @click="photoShow">
        <span>立即邀请赢取福利</span>
      </div>
    </div>-->
    <!-- <div v-show="show" class='popContainer'  @click="EndphotoShow">
      <img  src="../../static/img/ceshi111.jpeg">
      <a href="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"   download="img">
        <button class="buttonShowPhoto">
            <span>点击保存</span>
        </button>
      </a>
    </div>  -->
    <div class="invitationButtonFlex">
      <div class="invitationButton" @click="photoShow">
        <span>立即邀请赢取福利</span>
      </div>
    </div>
    

    <van-popup v-model="show" position="bottom" class="popupShow">
      
      <div class="ShareFlex">
        <div class="SharePhoto">
          <ul>
            <li><img :src="Share_wx" width="50px" height="48px"/><span>微信好友</span></li>
            <li><img :src="Share_qq" width="50px" height="48px"/><span>QQ好友</span></li>
            <li><img :src="Share_wb" width="50px" height="48px"/><span>新浪微博</span></li>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
</template>


<script>
import { Popup } from 'vant';
export default {
  data() {
    return {
      show: false,
      imgsrc: "http://192.168.0.102:8081/file/abhlz.jpg",
      Share_wx:require("../../static/img/Share_wx.png"),
      Share_qq:require("../../static/img/Share-qq.png"),
      Share_wb:require("../../static/img/Share-wb.png"),
      Share_Button:require("../../static/img/Share_button.png"),
      city: "",
    };
  },
  components: {
    'VanPopup':Popup,
  },

  methods: {
    photoShow() {
      this.show = true;
    },
    EndphotoShow() {
      this.show = false;
    },
  }
}
</script>




<style lang="scss" scoped>
.notice {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  background-color: blanchedalmond;
  background: url("../../static/img/invitationPhoto.jpg") no-repeat;
  background-size: 100%;
  .bulletin_board {
    width: 80%;
    border: 2px solid white;
    background-color: white;
    margin-top: 4rem;
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
      padding: 20px 10px 5px 10px;
      background-color: #ffffff;
    }




    
  }
}

  @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
            0%{
                transform: scale(1);  /*开始为原始大小*/
            }
            25%{
                transform: scale(1.05); /*放大1.1倍*/
            }
            50%{
                transform: scale(1);
            }
            75%{
                transform: scale(1.05);
            }
        }


  .invitationButton {
      z-index: 11;
      width: 150%;
      height: 30%;
      line-height: 2.7rem;
      border-radius: 35px;
      display: flex;
      align-items: center;
      background-color: #fcf049;
      border-bottom:5px solid rgb(99, 168, 82);
      position: relative;
      top: 15px;

      background-size: 150px 200px;
      animation-name: scaleDraw; /*关键帧名称*/
      animation-timing-function: ease-in-out; /*动画的速度曲线*/
      animation-iteration-count: infinite;  /*动画播放的次数*/
      animation-duration: 4s; /*动画所花费的时间*/

      background-image: linear-gradient(rgb(255, 251, 0), #792257);
      span {
        letter-spacing: 1px;
        color: rgb(77, 66, 66);
        font-size: 19px;
      }
    }
    
    .invitationButtonFlex{
      margin-top: -11rem;
      margin-right: 9rem;
    }

    
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  img {
    display: flex;
    align-items: center;
    width: 80%;
    height: 90%;
    object-fit: contain;
  }
}
.buttonShowPhoto {
  background: rgba(0, 0, 0, 0.8);
  width: 40%;
  height: 6%;
  line-height: 2.2rem;
  display: flex;
  align-items: center;
  background-color: #eff5a3;
  position: relative;
  top: -190px;
  span {
    color: black;
    font-size: 19px;
  }
}

.popupShow{
  width: 100%;
  height: 88%;
  background: linear-gradient(to top,white, transparent);
  background-position: center;
  background-blend-mode: normal;
  position: absolute;
}


.ShareFlex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  flex-direction:row;
  ul{
    margin-top: 27rem;
  }
  li{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    flex-direction:row;
    margin: 30px;
    padding: 0px;
  }
  span{
    font-size: 13px;
    padding-top: 70px;
    margin-left: -50px;
  }

  
.SharePhoto{
  z-index: 20;
  width: 90%;
  height: 30rem;
  background: url("../../static/img/Share_SumPhoto.jpg") no-repeat;
  background-size: 88%;
  background-position-x: 1.5rem;
  background-position-y: -3rem;
}
}

</style>