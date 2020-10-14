<template>
  <div class="notice">
    <div class="bulletin_board">
      <span class="notice_title">公告栏</span>
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
    width: 80%;
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