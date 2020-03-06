<template>
    <div class="tmpl" >
        <!-- 引入返回导航 -->
        <nav-bar title = '图文分享' />
        <div class="photo-header">
            <ul>
                <li v-for='(item,index) in photoList' :key='index'>
                    <a href="javascript:;" @click='loadImagesById(index)'>{{item.source}}</a>
                </li>

            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for='(item,index) in select' :key='index'>
                    {{item.url}}
                    <a href="item.url">
                        <img v-lazy="item.imgsrc">
                        <p>
                            <span>{{item.title}}</span>
                            <br>
                            <span>{{item.digest}}</span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            photoList:[],
            select:[]
        }
    },
    created(){
        console.log(this.$route.query.categoryId)
        this.$axios.get('http://api.tianapi.com/bulletin/index?key=ca7310e73a17ed56b9cb3631916b9d6d')
        .then(res=>{
            this.photoList=res.data.newslist
            this.select=this.photoList
        })
    },
    methods:{
        loadImagesById(id){   
            this.select=[this.photoList[id]];
            console.log(this.select);
        }
    }
}
</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}



</style>
