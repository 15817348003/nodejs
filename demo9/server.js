var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
http.createServer(function(request, response){
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.error(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type' : 'text/html'});

            //响应文件内容
            response.write(data.toString());
        }
        //发送响应数据
        response.end();
    });
}).listen(8081);

//控制台会输出以下信息
console.log('Server running at http://localhost:8081/');