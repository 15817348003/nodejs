var server = require('./server');
var router = require('./router');

server.starts(router.route);