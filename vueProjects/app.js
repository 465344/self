//实例化vue对象
new Vue({
    el:"#vue-app",
    data:{
        name:"xiaoming",
        job:"web开发",
        website:"http://www.baidu.com",
        websiteTag:"<a href='http://www.baidu.com'>Thenewstet</a>"
    },
    methods:{
        greet:function (time) {
            console.log("hellow word"+time+""+this.name+ "!")
        }
    }
});
new Vue({
    el:"#vue-app1",
    data:{
        age:30,
        x:0,
        y:0
    },
    methods:{
        add:function (inc) {
            this.age += inc;
        },
        subtract:function (dec) {
            this.age -= dec;
        },
        updateXY:function (event) {
            // console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY
        },
        stopMoving:function (event) {
            // event.stopPropagation();
        },
        alert:function () {
            alert("djklsj")
        }
    }

});
new Vue({
    el:"#vue-app2",
    data:{
        
    },
    methods:{
        logName:function () {
            console.log("你正在输入名字")
        },
        logAge:function () {
            console.log("你正在输入年龄")
        }
    }

});
/*
* el:element 需要获取的元素，一定是html中的根容器元素.
* data:是用于数据的存储
* methods:用于存储各种方法
* data-binding:给属性绑定对应的值
* */