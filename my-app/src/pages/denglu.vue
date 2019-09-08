<template>
  <div>
    <div class="login">
      <h3>登录豆瓣</h3>
    </div>
<form class="mui-input-group">
     <div class="mui-input-row">
        <label>邮箱</label>
    <input type="text" class="mui-input-clear" v-model="usermail" placeholder="">
    </div>
    
     <div class="mui-input-row">
        <label>Token</label>
        <input type="password" class="mui-input-password" v-model="usertoken" placeholder="">
    </div>
    <div class="zhuce">
        <button id ="rightaway" type="button" class="zhuce" @click="denglu">登录</button>
        <p >使用其他方式登录&找回密码</p>
    </div>
    <a> 注册豆瓣账号</a>   <a>下载豆瓣APP</a>
</form>
  </div>
</template>

<script>
export default {
  data(){
        return{
          usermail:"",
          usertoken:""
        }
      },

    methods:{
      denglu(){
        console.log(this.usermail),
        console.log(this.usertoken)
        this.axios({
          url:"http://localhost:3000/denglu",
          method:"get",
          params:{
            mail:this.usermail,
            token:this.usertoken
          }
        }).then((data)=>{
          console.log(data)
          if(data.data.linkid==1){
             alert("登录成功");
              this.$router.push({path:'/home'})
              
          }else if(data.data.linkid==0){
               alert("登录失败");
              this.$router.push({path:'/register'})
          }
        })
      }
    }
    }

</script>

<style scoped>
.login{
  height: 0.4rem;
}
h3{
  text-align: center;
  border-radius:20px;

}
#rightaway{
  width:95%;
   margin-left: 0.1rem;
  height: 0.44rem;
  font-size:.17rem;
  background-color:rgb(21, 151, 21);
  font-size: 17px;
  color:linen;
}
p{
  text-align: center;
  line-height: 0.2rem;
}
a{
  display: inline-block;
  color:rgb(20, 119, 20);
  margin-left:0.45rem;
  
} 
</style>