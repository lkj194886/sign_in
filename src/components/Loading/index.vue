<template>
    <div class="loding">
      <loading size="100" color="#1989fa" ></loading>
    </div>
</template>
<script>
import { Loading } from "vant";
export default {
    components:{
        Loading,
    }
}
</script>
<style lang="scss" scoped>
 .loding {
    // position: absolute;
    // width: 100%;
    position: absolute;
    left: 50%;
    top: 40%;
    border-radius: 50%;
    // top: 40%;
    // width: 100%;
    // height: 100vh;
    // background: rgba(0, 0, 0, 0.3);
    // transform: translate(-50%); /* 平移50%为自身尺寸的一半，实现水平居中 */
    transform: translateX(-50%);
  }
</style>