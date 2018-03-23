/* 给予管道将一个文件的内容写到另一个文件中:
    1.用一个可读流获取文件内容
    2.创建一个可写流链接到要写入的文件中
    3.通过stream的pipe方法，将可读流写入可写流中 */

var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');
//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

//管道读写操作
//读取input.txt文件内容，并将内容写入到output.txt文件中
readerStream.pipe(writerStream);

console.log('程序执行完毕');
