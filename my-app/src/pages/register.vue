<template>
  <div>
    <div class="login">
      <h1>欢迎加入豆瓣</h1>
    </div>
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label>邮箱</label>
        <input type="text" class="mui-input-clear" v-model="email" placeholder />
      </div>
      <div class="mui-input-row">
        <label>用户名</label>
        <input type="text" class="mui-input-clear" v-model="name" placeholder />
      </div>
      <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" v-model="pass" placeholder />
      </div>
      <div class="zhuce">
        <button id="rightaway" type="button" class="zhuce" @click="aa()">立刻注册</button>
        <p>点击[注册]代表你已阅读并同意注册协议</p>
      </div>
      <a>下载豆瓣APP</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      pass: ""
    };
  },
  methods: {
    aa() {
      console.log(this.email);
      console.log(this.name);
      console.log(this.pass);
      let params = new URLSearchParams();
      params.append("email", this.email);
      params.append("name", this.name);
      params.append("pass", this.pass);
      this.axios({
        url: "http://localhost:3000/register",
        method: "post",
        data: params
      }).then((ok)=>{
        console.log(ok);
        if(ok.data.linkid==1){
          alert("注册成功");
          this.$router.push("/denglu")
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  height: 0.8rem;
  color: rgb(21, 151, 21);
}
h1 {
  text-align: center;
  font-weight: 100;
  border-radius: 20px;
}

#rightaway {

  width: 95%;
  height: 0.44rem;
  font-size: 0.17rem;
  background-color: rgb(21, 151, 21);
  font-size: 17px;
  color: linen;
  margin-left:0.1rem
}
p {
  text-align: center;
}
a {
  display: block;
  color: rgb(20, 119, 20);
  text-align: center;
}
</style>