var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//创建 application/x-wwwform-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'));
app.use(urlencodedParser);

app.get('/index.html', function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.post('/process_post', /* urlencodedParser,  */function(req, res){
    var response = {
        'first name' : req.body.first_name,
        'last name' : req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function(){
    var post = server.address().address;
    var port = server.address().port;
    console.log(post + ":" + port);
});