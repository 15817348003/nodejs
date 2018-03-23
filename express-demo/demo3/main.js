/* 静态文件
Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
你可以使用 express.static 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
app.use(express.static('public'));
我们可以到 public/images 目录下放些图片,如下所示：
node_modules
server.js
public/
public/images
public/images/logo.png */
var express = require('express');
var app = express();

//添加处理静态文件的目录   
//通过  http://127.0.0.1:8081/images/logo.png    访问目录，public目录下的文件自动映射到url
app.use(express.static('public'));

app.get('/',function(req, res){
    res.send('Hello World');
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('应用实例， 访问地址为：http://%s:%s', host, port);
});
