/* 将input.txt压缩成zip文件：
    1.通过可读流将文件读取
    2.通过可读流的pipe管道方法将文件写到压缩流中
    3.再通过pipe管道方法将压缩流写入到可写流链接的文件中 */
var fs = require('fs');
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
/*  可以这么写
 var zip = fs.createReadStream('input.txt').pipe(zlib.createGzip());
zip.pipe(fs.createWriteStream('input.txt.gz')); */
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');
