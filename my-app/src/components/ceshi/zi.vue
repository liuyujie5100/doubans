<template>
    <div :class="lines?'xx':''">
        <div :style="{color:aa}">{{neirong}}</div>
    </div>
</template>
<script>
export default {
 
       props:["neirong","aa","lines"]
}
</script>
<style scoped>
.xx{
    display: block;
    padding: 0;
    width: 100%;
    height: 1rem;
    border: 0;
}
</style>