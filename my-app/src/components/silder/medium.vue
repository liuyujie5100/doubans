<template>
    <div class="heihei">
        <div class="xixi">
            <div v-for="(v,i) in arr" :key="i">
            <span>{{v.title}}</span>       
            </div>
        </div>  
        </div>
</template>
<script>
    export default{
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
<style scoped>
.heihei{
    width:100%;
    height:50%;
    overflow: auto;
}
 
.heihei>span{
   width:100%;
    height: 50%;
    border: 1px solid red;
    border-radius: 0.05rem; 

} 

</style>