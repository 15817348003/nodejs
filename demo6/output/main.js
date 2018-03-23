/* 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。
 */

 var fs = require("fs");
 var data = "菜鸟教程官方网站";

 //创建一个可以写入的流，写入到文件output.txt中
 var writerStream = fs.createWriteStream('output.txt');

 //使用utf-8编码写入数据
 writerStream.write(data, 'utf-8');

 //标记文件末尾
 writerStream.end();

 //处理流事件 -->finish error
 writerStream.on('finish', function(){
     console.log('写入成功');
 });

 writerStream.on('error', function(e){
     console.log(e.stack);
 });

 console.log('程序执行完毕');