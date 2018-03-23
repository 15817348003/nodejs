/*
继承 EventEmitter
大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
为什么要这样做呢？原因有两点：
首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。 
 */

var events = require('events').EventEmitter;
var eventEmitter = new events();

var listener1 = function listener1(arg) {
    console.log('监听器listener1执行' + arg);
}

var listener2 = function listener2(a, b) {
    console.log('监听器listener2执行' + a + b);
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventNum = events.listenerCount(eventEmitter, 'connection');
console.log(eventNum + '个监听器监听连接事件');

eventEmitter.emit('connection', 'y', 'x');

eventEmitter.removeListener('connection', listener1);
console.log('listener1不再受监听');

eventEmitter.emit('connection');

eventNum = events.listenerCount(eventEmitter, 'connection');
console.log(eventNum + "个监听器监听连接事件");

console.log('程序执行完毕');
eventEmitter.on('error', function (err) {
    console.log(err)
});
eventEmitter.emit('error');
console.log('真的结束了');