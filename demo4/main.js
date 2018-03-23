//引入events模块
var events = require("events");
var fs = require("fs");

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建时间处理程序
var connectHandler = function connected(){
    console.log('连接成功');

    //触发data_received事件
    eventEmitter.emit('data_received');
}

//绑定connection事件处理程序
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function(){
    fs.readFile('../demo3/input.txt', function(err, data){
        console.log(data.toString());
    });
    console.log('数据接收成功');
})

//触发connection事件
eventEmitter.emit('connection');


console.log('程序执行完毕');
