<template>
<div class="allmenu">
    <div class="classic" v-for="(v,i) in obj" :key="i">
        <span>{{v.title}}</span><span>&gt;</span>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
            obj:[]
        }
    },
    created() {
        this.axios({
            url:"/goodmovie",
            method:"get"
        }).then(
            data=>{
                this.obj=data.data;
                console.log(this.obj);
            }
        )
    },
}
</script>
<style>
.allmenu{
    width: 100%;
    height:100%;
    display: inline-block;
}
.classic{
    width:50%;
    height: 0.45rem;
    float: left;
    border:.01rem solid gray;
    display: flex;
    justify-content:space-between;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    border-left: none; 
    border-bottom: none;
 
}
.classic>span{
    text-align: center;
    font-weight: 100;
    font-size:0.17rem;
    line-height:0.45rem;
    text-align: bottom;
    color:green
}



</style>