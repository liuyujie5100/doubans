<template>
    <div>
      <div class="xixi">
        <div v-for="(v,i) in arr" :key="i">
          <div class="slide">
            <img :src="v.images.small">
          <span>{{v.title}}</span>
          </div>
   </div>
  </div>      


    </div>
</template>
<script>
export default {
    data(){
    return{
      arr:[],
      obj:[]

    }
  },
  
  
   created (){
     this.axios({
        url:"/movies",
        method:"get"   
     }).then((data)=>{
       console.log(data.data.movie);
       this.arr=data.data.movie
       this.obj=this.arr.filter((v,i)=>{
         if(i<=10){
           return i;
         }
       })
       return this.arr;
     })
    }
}
</script>
<style>
.xixi{
    display: flex;
    font-size:0px;
    width: 100%;
    height: 100%;
}
.slide{
  padding-right: .05rem;
}
span{
    font-size:0.15rem;
}
img{
    width:1rem;
    height:1.15rem;
}
</style>
