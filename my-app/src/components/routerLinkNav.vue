<template>
  <div>
    <div class="biaoti">
      <router-link to="/home"><h3>豆瓣</h3></router-link>
      <div class="tubiao">
        <router-link to="/movie">电影</router-link>
        <router-link to="/book">图书</router-link>
        <router-link to="/oumei">广播</router-link>
        <router-link to="/xiaozu">小组</router-link>
        <router-link to="/search"><img src="static/search.png" class="xiaotup"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.biaoti {
  display: flex;
  justify-content: space-between;
 margin-left: 0.1rem;
  margin-right: 0.1rem; 
}
h3 {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  line-height: 0.3rem;
  color: limegreen;
  text-align: center;
}
.tubiao {
 text-align: center; 
  line-height: 0.3rem;
}
a {
  display: inline-block;
  margin-top: 0.1rem;
  font-size: 0.15rem;
  line-height: 0.3rem;
}
a:nth-child(1) {
  color: blue;
}
a:nth-child(2) {
  color: rgb(114, 84, 8);
}
a:nth-child(3) {
  color: gold;
}
a:nth-child(4) {
  color: limegreen;
}
a:nth-child(5) {
  color: blue;
  
}
.heihei{
    width: 100%;
    padding-left: 0.1rem;
    padding-right: 0.1rem;   
}
.heihei>li{
    float: left;
    width: 50%;
    height:0.64rem;
    text-align: center;
    padding: 0.05rem;
    box-sizing: border-box;
    list-style: none;
}
.heihei>li>a{
   width: 100%;
   height: 0.5rem;
    background-color: #f6f6f6;
    color:green;
    line-height: 0.5rem;
     font-size:0.15rem;
}
.xiaotup{

  width:0.2rem;
  height: 0.2rem;

  }  
  </style>
