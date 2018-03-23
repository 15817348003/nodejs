/* 解压文件：
    1.创建可读流链接到压缩包
    2.通过可读流的pipe管道方法链接到解压流
    3.将解压流通过管道方法写入到可写流中 */

var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为：output.txt
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('output.txt'));

console.log('文件解压完成');