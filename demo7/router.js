//路由，这里不做url判断和定位，只是显示url 的值
function route(pathname){
    console.log('About to route a request for ' + pathname);
}

exports.route = route;