<template>
    <div>
        <div class="hehe">
            <div class="picture"><img src="../../static/img/logo.png">
            </div>
            <div class="word"><p>豆瓣</p><span>我们是精神角落</span></div>

        </div>    
        
        <div class="nono">去AppStore下载ios客户端</div>

        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.hehe{
    display: flex;
    margin-left: 1rem;
   text-align: center;
}
img{
    width:0.5rem;
    height: 0.5rem;
    }
    p{
        font-size: 0.28rem;
        color:black;
        line-height: 0.28rem;


    }
    span{
        font-size:0.14rem;
         line-height: 0.14rem;

    }
   
    .nono{
        line-height: 1rem;
        color:green;
        font-size: 0.14rem;
        text-align: center;
    }
</style>