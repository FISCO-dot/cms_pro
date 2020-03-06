<template>
    <div>
        <nav-bar :title = 'title' />
        <!--新闻列表-->
        <div class = 'demo' >
        <ul>
            <li v-for = '(item,index) in newsList' :key = 'item.id'>
                <router-link :to="{name:'newsDetail',params:{id:index}}">
                    <img class="" :src="item.picUrl">
                    <div >
                        <span>{{item.title}}</span>
                        <div class="news-desc">
                            <p>描述:{{item.description}}</p><br />
                            <p>发表时间:{{item.ctime}}</p><br/>
                        </div>
                    </div>
                </router-link>
                <!-- <ul><li class="line"></li></ul> -->
            </li>    
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'新闻列表',
            newsList : [],
            box :{},


        }
    },
    created(){
        this.$axios.get('http://api.tianapi.com/film/index?key=ca7310e73a17ed56b9cb3631916b9d6d&num=7')
        .then(res=>{
            console.log(this)
            this.newsList=res.data.newslist
            // console.log(this.newsList)
        })
        .catch(err=>{
            console.log(err)
        })
        
    },


    
}
</script>
<style scoped>
.demo a {
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding: 5px 5px;
}
.demo img {
    float: left;
    width: 60px;
    height: 60px;
    margin-top: 5px;
    margin-right: 10px;
}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    padding: 0;
}
.demo p:nth-child(2) {
    float: right;
}
.demo ul{
    margin: 0;
    padding: 0;
}
.demo li{
    padding: 0px;
    margin: 0px 0px;
    height: 10%;
}
.cms-s-header{
    background-color: #f7f7f7;
}
.tmpl h1{
   display: inline-block;
}
.page-title{
    margin-left: 25%;
}
.line {
    margin-left: 16px;
    line-height: 80px;
    transform: scaleY(.5);
    border-bottom: 1px solid #c8c7cc;
}
</style>
