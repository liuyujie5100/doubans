<template>
<div>
    
    <div class="hunt"><huitui></huitui><input  class="grabble" type="text" value="搜索">
    </div>
    <div class="box">
      <div class="first" v-for="(v,i) in arr" :key="i" :style="{color:v.color}">
        <h1>{{v.title}}</h1>
        <span>{{v.concont}}</span>
      </div>
    </div>
    
  <div class="bootom">
      <ul class="heihei">
        <li>
          <router-link to="/register">注册账号</router-link>
        </li>
        <li>
          <router-link to="/denglu">登录豆瓣</router-link>
        </li>
        <li>
          <router-link to="/home">使用桌面版</router-link>
        </li>
        <li>
          <router-link to="/home">使用豆瓣APP</router-link>
        </li>
      </ul>
  </div>
</div>
</template>
<script>
import huitui from './huitui'
export default {
     components:{
   huitui
 },
 data(){
    return{
      arr:[]
    }
 },
 created() {
   this.axios({
     url:"/search",
     method:"get"
   }).then((xu)=>{
     console.log(xu.data)
     this.arr=xu.data
   })
 },
}
</script>
<style>
.hunt{
    display:flex;
}

.dianyin{
    flex:1;
    margin-left: 0.3rem;
    padding-top:0.3rem;
}


.grabble{
   
    line-height: 0.5rem;
    margin-left: 0.1rem;
}
.heihei{
    width: 100%;
    height: 1.4rem;
   
}
.heihei>li{
    float: left;
    width: 50%;
    text-align: center;
    padding: 0.05rem;
    box-sizing: border-box;
    line-height: 0.54rem;
    list-style: none;
}
.heihei>li>a{
   width: 100%;
    background-color: #f6f6f6;
    color:green;
     font-size:0.15rem;
}
.first{
  width: 1rem;
  height: 1rem;
  float: left;
  margin-top: .1rem;
  margin-left: .18rem;
}
.first>h1{
  text-align: center;
  font-weight: 100;
}
.first>span{
  display: block;
  text-align: center;
  color:gainsboro;
}
.box{
  background-color: aquamarine;
  width: 100%;
  height:100%;
}
</style>