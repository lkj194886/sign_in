<template>
  <div class="notice">
    <div class="bulletin_board">
      <span class="notice_title">邀请好友</span>
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
      <div class="invitationButton" @click="photoShow"><span>立即邀请赢取福利</span></div>
    </div>
    <div v-show="show" class='popContainer'>
      <img  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" >
      <button class="buttonShowPhoto"  @click="EndphotoShow"><span>点击保存</span></button>
    </div>
  </div>
</template>


<script>


  export default {
    data() {
      return {
        show :false,
      }
    },
    components:{
     
    },
    methods:{
      photoShow(){
        this.show=true
      },
      EndphotoShow(){
        this.toSave("https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg","xiaolin")
        this.show=false
      },
    //   downCom() {
    //     let that = this;
    //     that.$http.files().then(res => {
    //     let hreLocal="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
    //     hreLocal = res.data.data.url;
    //     this.toSave(hreLocal,"xiaolin")
    //   });
    // },
      toSave(url,name) {
        let image = new Image()
        image.setAttribute('crossOrigin', 'anonymous')
        image.src = url
        image.onload = () => {
          let canvas = document.createElement('canvas')
          canvas.width = image.width
          canvas.height = image.height
          let ctx = canvas.getContext('2d')
          ctx.drawImage(image, 0, 0, image.width, image.height)
          canvas.toBlob((blob) => {
            let url = URL.createObjectURL(blob)
            this.download(url,name)
            // 用完释放URL对象
            URL.revokeObjectURL(url)
          })
        }
      },
      download(href, name) {
       let eleLink = document.createElement('a')
       eleLink.download = name
       eleLink.href = href
       eleLink.click()
       eleLink.remove()
     }
      
    }
  };
</script>




<style lang="scss" scoped>
.notice {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: blanchedalmond;
  align-items: center;
  .bulletin_board {
    width: 80%;
    border: 2px solid white;
    background-color: white;
    // border-radius: 15px;
    margin-top: 4rem;
    .notice_title {
      display: flex;
      font-size: 1.13rem;
      // border-radius: 15px;
      width: 40%;
      padding: 5px 20px 5px 20px;
      background-color: #ffffff;
      position: relative;
      top: -00px;
      align-items: center;
      
      font-weight: 550;
      justify-content: center;
    }
    .notice_concent {
      font-size: 14px;
      color: rgb(99, 96, 96);
      padding: 20px 10px 5px 10px;
      background-color: #ffffff;
    }
    .invitationButton{
      width: 75%;
      height: 30%;
      line-height: 2.7rem;
      border-radius: 35px;
      display: flex;
      align-items: center;
      background-color:#CD853F;
      position: relative;
      top: 15px;
      span{
        color: white;
        font-size: 19px;
      }
    }
  }
}
.popContainer{
      position: fixed;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.8);
      img{
        display: flex;
        align-items: center;
        width: 80%;
        height: 90%;
        object-fit: contain
      }
}
.buttonShowPhoto{
      // border: 1px solid black;
      background: rgba(0,0,0,0.8);
      width: 40%;
      height: 6%;
      line-height: 2.2rem;
      // border-radius: 35px;
      display: flex;
      align-items: center;
      background-color:#CD853F;
      position: relative;
      top: -190px;
      span{
        color: white;
        font-size: 19px;
      }
}
</style>