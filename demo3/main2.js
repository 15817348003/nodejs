/**
 * 非阻塞型文件读取
 * 使用回调的形式实现流的异步
 */
//引入文件相关的模块
var fs = require('fs');

//读取文件，使用回调函数输出读取成功后的字符
fs.readFile('input.txt', function (err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log('程序执行结束');