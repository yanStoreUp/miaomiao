<template>
  <div>
      <mt-header fixed :title="title"></mt-header>

<div class='content'>
<transition name='app-router' mode='out-in'>
   <router-view></router-view>
</transition>


</div>
<mt-tabbar v-model="selected">
  <mt-tab-item id="movie">
    <!-- <img slot="icon" src="../assets/100x100.png"> -->
    <span id='dianying' class="iconfont icon-yingyuanxinxi3dyanjing" slot='icon'></span>
    电影
  </mt-tab-item>
  <mt-tab-item id="cinema">
    <!-- <img slot="icon" src="../assets/100x100.png"> -->
    <span id='yingyuan' class="iconfont icon-changyongtubiao-mianxing-" slot='icon'></span>
    影院
  </mt-tab-item>
</mt-tabbar>

</div>
</template>

// 21 分


<script>


import {isNotblank} from './utils/commen-util.js'


export default {
    data() {
        return {
            selected:'movie',
            title: '喵喵电影'
        };
    },
    created() {
      if (this.$route.path == "/index"){ 
          this.selected = "movie";

      } else if(this.$route.path == "/cinema") {
          this.selected = "cinema";
      }
    },
    watch: {
    selected(newVal, oldVal) {
      if (newVal == "movie" && this.$route.path != "/index") {
        this.$router.push({ path: "/index" });
        this.title = '电影'
      } else if (newVal == "cinema" && this.$route.path != "/cinema") {
        this.$router.push({ path: "/cinema" });
        this.title = '影院'        
      }
    },

    $router(newVal, oldVal) {
      if(isNotblank(newVal.meta.title)){
      this.title = newVal.meta.title
      }
    }
  },
};
</script>


<style lang='less' scoped>

 #yingyuan,#dianying{
  font-size:24px;
}
.content {
  height: calc(100vh - 95px);
  margin-top: 40px;
  width: 100%;
  overflow: hidden;
}

.app-router-enter,
.app-router-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.app-router-leave-to {
  transform: translateX(-100%);
}


.app-router-enter-active,
.app-router-leave-active {
  transition: all 0.3s ease;
}
</style>