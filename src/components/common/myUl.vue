<template>
    <ul>
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name:'my-ul'
}
</script>
<style scoped>
    ul {
    margin:0px;
    padding:10px;
    overflow: visible;
    }

</style>