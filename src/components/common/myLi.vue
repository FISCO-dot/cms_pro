<template>
    <li class = 'myli'>
        <slot></slot>
    </li>
</template>
<script>
export default {
    name:'my-li'
}
</script>
<style scoped>
li{
    list-style: none;
    float: left;
    width: 33.333%;
    height: 13%;
    text-align: center;
  } 
/* .myli image{
    height: 40px;
    width: 40px;

} */
</style>