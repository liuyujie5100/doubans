<template>
    <div>
        <h1>原始数据</h1>
        <p>{{obj}}</p>
        <h1>修改数据</h1>
        <button @click="fun()">点我修改数据</button>
    </div>
</template>
<script>
export default {
    computed:{
        obj(){
            return this.$store.state.obj;
        },
        methods:{
            fun(){
                this.$store.commit("")
            }
        }
    }
    
}
</script>