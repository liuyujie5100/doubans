<template>
  <div>
     <router-link-nav></router-link-nav>
     <div class="more"><span>影院热映</span><p>更多</p></div><sfu></sfu>
     <div class="more"><span>免费在线观影</span><p>更多</p></div><sfu></sfu>
     <div class="more"><span>新片速递</span><p>更多</p></div><sfu></sfu>
    <div>
    
    </div>
          分类浏览<bottom></bottom>
          <logo></logo>
  </div>
  
  
</template>

<script>
import bottom from"./bottom"
import medium from"../components/silder/medium"
import routerLinkNav from "../components/routerLinkNav";
import sfu from'../components/silder/sfu'
import logo from'./logo'
export default {
  components: {
    routerLinkNav,
    sfu,
    medium,
    bottom,
    logo
  },
    data(){
    return{
      arr:[]
    }
  },
   created(){
     this.axios({
        url:"/goodbook",
        method:"get"   
     }).then((data)=>{
       console.log(data.data);
      //  this.arr =  data.data;
     })
    }
}
</script>

<style>
.more{
  margin-right: 0.1rem;
  margin-left: 0.1rem;
  display: flex;
  justify-content:space-between;

}
.more>p{
  color:rgb(57, 224, 57);
}
</style>