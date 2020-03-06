<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgs" :key="item.id">
        <img :src = 'item.path' alt="" >
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格-->
    <div>
        <my-ul>
             <my-li v-for="item in modules" :key="item.id">
                <router-link :to = "item.route">
                  <!-- <span class="item.className"></span> -->
                  <img :src = "item.path" alt="" /> 
                  <div>{{item.content}}</div>
                </router-link >
            </my-li>
        </my-ul>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs : [
        {id:1,path:'../../static/img/mygirl1.jpg'},
        {id:2,path:'../../static/img/mygirl2.jpg'},
        {id:3,path:'../../static/img/mygirl3.jpg'}
      ],
      modules: [
        {id : 1,path:'../../static/img/news.png',content:'新闻资讯',route:{name:'newsList'}}, 
        {id : 2,path:'../static/img/picShare.png',content:'图文分享',route:{name:'photoList',query:{categoryId:0}}}, 
        {id : 3,path:'../static/img/goodsShow.png',content:'商品展示',route:{name:'Home'}},
        {id : 4,path:'../static/img/feedback.png',content:'留言反馈',route:{name:'Home'}},
        {id : 5,path:'../static/img/search.png',content:'搜索资讯',route:{name:'Home'}},
        {id : 6,path:'../static/img/callme.png',content:'联系我们',route:{name:'Home'}}
      ]
    }
  },
  // created(){
  //   this.$axios.get('getlunbo')
  //   .then(res=>{
  //     console.log(res)
  //   })
  //   .catch(err=>console.log(err))
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    width: 100%;
    height: 300px;
  }
  .mint-swipe img{
    width: 100%;
    height:300px;
  }

    ul img{
    width: 40px;
    height: 40px;
    }
</style>
