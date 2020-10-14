<template>
  <div class="notice">
    <div class="bulletin_board">
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
    </div>
    <div v-show="show" class='popContainer'  @click="EndphotoShow">
      <img  src="../../static/img/ceshi111.jpeg">
      <a href="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"   download="img">
        <button class="buttonShowPhoto">
            <span>点击保存</span>
        </button>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      show: false,
      imgsrc: "http://192.168.0.102:8081/file/abhlz.jpg",
      city: "",
    };
  },
  components: {},

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
  height: 90vh;
  background-color: blanchedalmond;
  // align-items: center;
  .bulletin_board {
    width: 80%;
    border: 2px solid white;
    background-color: white;
    // border-radius: 15px;
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
    .invitationButton {
      width: 75%;
      height: 30%;
      line-height: 2.7rem;
      border-radius: 35px;
      display: flex;
      align-items: center;
      background-color: #cd853f;
      position: relative;
      top: 15px;
      span {
        color: white;
        font-size: 19px;
      }
    }
  }
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
  // border: 1px solid black;
  background: rgba(0, 0, 0, 0.8);
  width: 40%;
  height: 6%;
  line-height: 2.2rem;
  // border-radius: 35px;
  display: flex;
  align-items: center;
  background-color: #cd853f;
  position: relative;
  top: -190px;
  span {
    color: white;
    font-size: 19px;
  }
}
</style>