<template>
  <div class="notice">
    <div class="invitationButtonFlex"  @click="photoShow">
        <img :src="Share_Button" width="260px" height="65px"  class="invitationButton"/>
    </div>
    <div class="invitationButtonFlexTow"  @click="onClickRight">
        <img :src="Share_huodong" width="55px" height="15px"  class="invitationButtonTow"/>
    </div>

    <van-popup v-model="show" position="bottom" class="popupShow">
      <div class="ShareFlex">
        <div class="backRe"><span @click="falseShow">×</span></div>
        <div class="SharePhoto">
          <img :src="Share_yaoqing" width="89%" height="380px"  class="newShow1"/>
        </div>
        <ul>
            <a download="newShow2.png" :href="Share_Copy">
              <li><img :src="Share_wx" width="42px" height="41px"/><span>微信好友</span></li>
            </a>
            <a download="newShow2.png" :href="Share_Copy">
            <li><img :src="Share_qq" width="42px" height="41px"/><span>QQ好友</span></li>
            </a>
            <a download="newShow2.png" :href="Share_Copy">
            <li><img :src="Share_wb" width="42px" height="41px"/><span>新浪微博</span></li>
            </a>
        </ul>
      </div>
    </van-popup>
  </div>
</template>


<script>
import { Popup } from 'vant';
import { Dialog } from 'vant';
export default {
  data() {
    return {
      show: false,
      imgsrc: "http://192.168.0.102:8081/file/abhlz.jpg",
      Share_wx:require("../../static/img/Share_wx.png"),
      Share_qq:require("../../static/img/Share-qq.png"),
      Share_wb:require("../../static/img/Share-wb.png"),
      Share_Button:require("../../static/img/lijiyaoqing.png"),
      Share_huodong:require("../../static/img/huodongshuoming.png"),
      Share_yaoqing:require("../../static/img/newShow1.png"),
      Share_Copy:require("../../static/img/newShow2.png"),
      city: "",
    };
  },
  components: {
    'VanPopup':Popup,
    [Dialog.Component.name]: Dialog.Component,
  },

  methods: {
    photoShow() {
      this.show = true;
    },
    EndphotoShow() {
      this.show = false;
    },
    falseShow(){
      this.show = false;    
    },
    onClickRight(){
            Dialog.alert({
            title: '- - 活动说明 - -',
            theme:'round-button',
            message: ' 1.  在注册页面输入邀请人邀请码的，注册人有机会免费升级初级会员权益，邀请人可获得会员等级权益相应福利次数。\n'+

                      '2.  好友注册登入后未填写邀请码的，在【我的】-【邀请人ID】填写邀请码，邀请人可获得会员等级权益相应福利次数。\n'+

                      '3.  被邀请的好友，使用的设备及手机号必须是从未下载过且从未登入过趣味极速版APP的才记为有效,手机号需为中国大陆地区归属。\n'+

                      '4.  如果您或则您邀请的好友非正常邀请或恶意注册、提供虚假信息、以任何第三方软件参与本活动，我们有权扣除您和'+

                      '您的好友奖励相应奖励，情节严重者，平台将取消其参加活动的资格。\n'+

                      '●  活动最终解释权归趣味极速版平台所有',
            beforeClose,
            confirmButtonText:'知道了',
            messageAlign:'left',
            });
            function beforeClose(action, done) {
                if (action === 'confirm') {
                    setTimeout(done, 1000);
                } else {
                    done();
                }
          }
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
  background: url("../../static/img/invitation.png");
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
                transform: scale(1.07); /*放大1.1倍*/
            }
            50%{
                transform: scale(1);
            }
            75%{
                transform: scale(1.07);
            }
        }


  .invitationButton {
      z-index: 11;
      display: flex;
      align-items: center;
      position: relative;
      top: -7rem;
      left: 16%;
      background-size: 150px 200px;
      animation-name: scaleDraw; /*关键帧名称*/
      animation-timing-function: ease-in-out; /*动画的速度曲线*/
      animation-iteration-count: infinite;  /*动画播放的次数*/
      animation-duration: 4s; /*动画所花费的时间*/

      
    }
    .invitationButtonTow{
      z-index: 11;
      display: flex;
      align-items: center;
      position: relative;
      top: -17rem;
      left: 16%;
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
  height: 72.5%;
  background: linear-gradient(to top,white, transparent);
}


.ShareFlex{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  flex-direction:row;
  ul{
    margin-top: -2.7rem;
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
    font-size: 10px;
    padding-top: 125%;
    margin-left: -2.5rem;
  }
  a{
    color: black;
  }
  
  .SharePhoto{
    z-index: 0;
    margin-left: 11%;
  }
  .backRe{
    z-index: 100;
    position: relative;
    top: 1.2rem;
    left: 11.3rem;
    span{
      color: white;
      font-size: 32px;
    }
  }
}

</style>