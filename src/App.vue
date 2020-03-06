<template>
  <div id="app">
    <mt-header title="信息管理系统" :style="{width : this.screenWidth}"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-show ='isScroll' v-model="selected" :style="{width : this.screenWidth}">
      <mt-tab-item id="Home">
        <img slot="icon" src="../static/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="Member">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="Shopcart">
        <img slot="icon" src="../static/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="Search">
        <img slot="icon" src="../static/img/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:'',
      screenWidth:document.body.clientWidth,
      isScroll:true,
    }
  },
  watch:{
    selected:function(newV,oldV){
        this.$router.push({name:newV})
    }
  },
  created(){
    this.listenerFunction();
  },
  beforeDestroy () {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  methods:{
        listenerFunction(e) {
            document.addEventListener('scroll', this.handleScroll, true);
        },
        handleScroll () {
            // console.log(window.pageYOffset)
            if(window.pageYOffset >100){
                this.$nextTick(()=>{
                    this.isScroll =false;
                })
            }
            else{
                this.$nextTick(()=>{
                    this.isScroll =true;
                })
            }
        }
  },
}

</script>
<style scoped>
.mint-tabbar{
  position:fixed;
  bottom: 0;
}
</style>
