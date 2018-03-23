var http = require('http');

var options = {
    host : 'localhost',
    port : '8081',
    path : '/index.html'
};

//处理响应的回调函数
var callback = function(response){
    //不断更新shuju
    var body = '';
    response.on('data', function(data){
        console.log(data.toString());
        console.log("------");
        body += data;
    });

    response.on('end', function(){
        //数据接收成功
        console.log(body);
    });
}

//向服务器端发送请求
var req = http.request(options, callback);
req.end();