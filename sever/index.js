var express = require("express");
var app = express();
var mongoose = require("mongoose");
var crypto = require("crypto");
var bodyParser = require('body-parser');
var doubanbs = mongoose.model("doubans", {
    email: String,
    name: String,
    pass: String
})
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');


    next()
})

var ue=bodyParser.urlencoded({ extended: false });

app.post("/register",ue,function (req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var pass = req.body.pass;
    var md5Pwd = crypto.createHash('md5').update(pass).digest('hex');
    console.log(md5Pwd);
    console.log(email + "-----" + pass + "----" + name)
    mongoose.connect("mongodb://localhost:27017/douban", { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log("数据库连接失败")
        } else {
            console.log("ok")

            var userdemo = new doubanbs({
                name,
                email,
                pass: md5Pwd
            })
            console.log(userdemo);
            userdemo.save().then((ok) => {
                console.log("aa");
                res.send({ mes: "注册成功", status: 200, linkid: 1 })
                
            }, (err) => {
                console.log("bb");
                res.send({ mes: "注册失败", status: 500, linkid: 0 })
            })
        }
    })
})
app.listen(3000, () => console.log('server is running ...'));


app.get("/denglu",function(req,res){
    var email = req.query.mail;
    var token = req.query.token;
    var md5Pwd = crypto.createHash('md5').update(token).digest('hex');
    console.log(email,md5Pwd);

    mongoose.connect("mongodb://localhost:27017/douban", { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log("err")
        } else {
            console.log("ok")
            doubanbs.find({email:email,pass:md5Pwd}).then((ok)=>{
                console.log(ok);
                if(ok.length>0){
                      res.send({mes:"登录成功",status:200,linkid:1})
                } else if(ok.length==0){
                      res.send({mes:"登录失败",status:500,linkid:0})
                }
              
            },(err)=>{
                res.send({mes:"登录失败",status:500,linkid:0})
            })
           
         
        }
    })
})
