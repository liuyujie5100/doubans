<template>
  <div class="box">
    <router-link-nav></router-link-nav>
    <div class="con-tent">
      <ul class="heihei">
        <li>
          <router-link to="/oumei">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link to="/movie">影院热搜</router-link>
        </li>
        <li>
          <router-link to="/denglu">登录豆瓣</router-link>
        </li>
        <li>
          <router-link to="/register">注册账号</router-link>
        </li>
      </ul>
      <!-- <img  class="picture" src="../../static/img/logal.gif"/> -->
    </div>
    <div class="cyclic">
        <div v-for="(v,i) in arr" :key="i">
          <div>
              <span>{{v.title}}</span>
              <p class="mohuan">{{v.title}}</p>
          </div>
          <div class="phototy">
            <img :src="v.image">
          </div>
        </div>
      </div>
     
    
  </div>
</template>


<script>
import routerLinkNav from "../components/routerLinkNav";
export default {
  data(){
    return{
      arr:[]
    }
  },
  components: {
    routerLinkNav
  },
  
   created (){
     this.axios({
        url:"/douban",
        method:"get"   
     }).then((data)=>{
       console.log(data.data.shouye);
       this.arr =  data.data.shouye
     })
    }
};
</script>

<style scoped>
.box{
  width:100%;
}
.con-tent{
    width: 100%;
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
    color: #494949;
     font-size:0.15rem;
}
.cyclic{
  width:100%;
  height:2rem;
  margin-left:0.05rem;
  
}
.cyclic>span{
  width:80%;
  height: 1rem;
  margin-right: 0.86rem;

}
.mohuan{
  width:80%;
  height: 1rem;
  float: left;
  margin-right: 0.86rem;
}

.phototy{
  width:0.86rem;
  height:0.86rem;
  float:right;
  
}
.phototy>img{
  width:100%;
  height: 100%;
}

</style>