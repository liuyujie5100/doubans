<template>
  <div>
    <p @click="into()">关闭</p>
  </div>
</template>

<script>
  export default{
    methods:{
      into(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  div{
    font-size: 0.1rem;
    width: 0.3rem;
    color: #42B983;
  }
  p{
    font-size:0.15rem;
    width: 0.3rem;
    margin:0;
    color:lawngreen;
    line-height: 0.5rem;
    margin-left: 0.05rem;
      }
</style>
