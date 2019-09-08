<template>
    <div>
        <div v-for="(v,i) in arr" :key="i">
             <h1>{{v.title}}</h1>
            <p>{{v.con}}</p>
        </div>
       
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    created(){
        this.axios({
            url:"/ceshi",
            method:"get"
        }).then((aa)=>{
            console.log(aa.data)
            this.arr=aa.data
        })
    }
}
</script>