<template>
        <div class='typ'>
        <mt-header :title="title" :style="{width : this.screenWidth}">
            <div slot="left">
                <mt-button icon="back" @click="goBack">返回</mt-button>
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    data(){
        return {
            screenWidth:document.body.clientWidth,
        }
    },
    name:'nav-bar',
    props:['title'],
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.typ .mint-header{
    background-color:dimgray
}

</style>