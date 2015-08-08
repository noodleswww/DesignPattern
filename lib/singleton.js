/**
 * 单例模式【桥接模式】
 */

/**
 * 桥接函数
 * @param func 创建对象函数
 * @returns {Function} 对象引用或执行构造对象
 */
var singleton = function (func) {
    var obj;
    return function () {
        return obj || (obj = func.apply(this, arguments));
    }
};

/**
 *
 * @type {Function} 真正的对象创建在此回调函数内部实现
 */
var createObj = singleton(function () {
    //返回一个简单的测试对象
    return {name: '123', rand: Math.random()};
});

var obj1 = createObj();
var obj2 = createObj();
obj1===obj2;//--->true