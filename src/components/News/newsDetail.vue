<template>
    <div class="tmpl">
        <nav-bar title = '新闻详情'/>
        <div class="news-title">
            <p>新闻标题</p>
            <div>
                <span>0次点击</span>
                <span>分类:电影新闻</span>
                <span>{{this.new.ctime}}</span>
            </div>
        </div>
        <div class="news-content"  v-html='info' >新闻明细</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:'',
            newURL:'',
            new:{}
        }
    },
    methods:{
        extract(url){
            var site = url.lastIndexOf("\/");
            return url.substring(site + 1, url.length);
        },

    },
    created(){
        // console.log(this.$route.params)
        this.$axios.get('http://api.tianapi.com/film/index?key=ca7310e73a17ed56b9cb3631916b9d6d&num=7')
        .then(res=>{
            
            var index = this.$route.params
            this.new = res.data.newslist[index.id]
            this.newURL= this.extract(res.data.newslist[index.id].url)
            // console.log(this.newURL)
        })
    },
    updated(){
        this.$axios.get('/api/'+this.newURL)
        .then(res=>{
            this.info=res.data
            var reg=/<body[^>]*>([\s\S]*)<\/body>/;
            this.info = this.info.match(reg)[1];
            // console.log('提取')
        })
    }
}
</script>
<style >
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}
.news-content img{
    width:100%
}
</style>