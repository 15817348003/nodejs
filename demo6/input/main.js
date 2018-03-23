/* 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。
 */
var fs = require('fs');

var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为utf-8
readerStream.setEncoding('utf-8');

//处理流对象  -->data, end, error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', function (e) {
    console.log(e.stack);
});

console.log("程序执行完毕");