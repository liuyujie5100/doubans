import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export let store =new Vuex.Store({
    state:{
        obj:[
            {
                "title": "成都租房",
                "subtype":" group",
                "id": 1234,
                "images": {
                  "small": "https://img3.doubanio.com/icon/g117205-2.jpg"
                },
                "group_member": 43736,
                "group_topic": {
                  "title": "天府四街临江苑套一出租个人 无中介费噢",
                  "time": "3分钟前更新："
                }
              },
              {
                "title": "北京租房（非中介）",
                "subtype": "group",
                "id": 1234,
                "images": {
                  "small": "https://img3.doubanio.com/icon/g279962-3.jpg"
                },
                "group_member": 53736,
                "group_topic": {
                  "title": "9号线丰台南路站看丹桥新华街四里，次卧出租，押一付一",
                  "time": "刚刚更新："
                }
              },
              {
                "title": "深圳福田租房（个人房源免费推广）",
                "subtype": "group",
                "id": 1234,
                "images": {
                  "small": "https://img3.doubanio.com/icon/g117205-2.jpg"
                },
                "group_member": 4373,
                "group_topic": {
                  "title": "福田福民岗厦复式单间整租，2800，可短租",
                  "time": "刚刚更新："
                }
              }
            ]
    },
    getters:{
    obja(state){
        var newobja=state.obj.filter((v,i)=>{
            if(v.id=1234){
                return v;
            }
        })
        return newobja;
        
    }

},
mutations:{
   add(state){
       state.obj[i].name="haha"
   }
}
})
