/**
 * 阻塞型文件读取
 */
//引入文件相关的模块
var fs = require('fs');
//读取文件
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");