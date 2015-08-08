/**
 * 简单工厂
 */

function A(name) {
    this.name = name;
}
function B(age){
    this.age = age;
}
/**
 * 工厂函数
 * @returns {{}} 返回传入类的实例对象
 * @constructor
 */
function ObjectFactory() {
    var obj = {},
        Constructor = Array.prototype.shift.call(arguments);
        obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);
    return obj;
}

var a = ObjectFactory(A, 'noodles');
console.log(a.name);
var b = ObjectFactory(B,11);
console.log(b.age);

