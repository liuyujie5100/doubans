var Mock=require("mockjs");
Mock.mock("/douban","get",require("./json/shouye.json"))
Mock.mock("/movies","get",require("./json/movies.json"))
Mock.mock("/ceshi","get",require("./json/ceshi.json"))
Mock.mock("/search","get",require("./json/search.json"))
Mock.mock("/goodbook","get",require("./json/goodbook.json"))
Mock.mock("/goodmovie","get",require("./json/goodmovie.json"))

