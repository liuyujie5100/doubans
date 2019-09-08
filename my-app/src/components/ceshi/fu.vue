<template>
    <div class="bbox">
        <div v-for="(v,i) in obj" :key="i" class="sbox">
            <zi :neirong="v.title" :aa="v.color"></zi>
        </div>
    </div>
</template>
<script>
import zi from './zi'

export default {
   components: {
       zi
       },
       data(){
           return{
               obj:[]
           }
       },
       created(){
            this.axios({
            url:"/goodbook",
            method:"get"
            }).then((data)=>{
                console.log(data.data)
                this.obj = data.data
            })
       }
       
   }
</script>
<style scoped>
.sbox{
    border: 1px solid rgb(192, 30, 30);
    display: inline-block;
   
}
.bbox{
    
    background-color: blueviolet;
    width: 100%;
    height: 2rem;
    overflow: auto;
    white-space: nowrap;
}
</style>