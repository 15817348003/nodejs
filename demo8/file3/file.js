var fs = require('fs');
var buf = new Buffer(1024);

console.log('准备打开已经存在的文件!');
fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }

    console.log('文件打开成功！');
    console.log('准备读取文件！');
    //buf.length的长度是1024，而不是实际读取的字节数
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead, buffer){
        if(err){
            return console.error(err);
        }
        console.log(bytesRead + " 字节被读取");
        if(bytesRead > 0){
            console.log(buf.slice(0, bytesRead).toString());
        }
        console.log(buf.length);
        //关闭文件
        fs.close(fd, function(err){
            if(err){
                console.error(err);
            }
            console.log('文件关闭成功');
        });
    });
});