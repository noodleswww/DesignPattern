/**
 * Created by noodles on 8/8 0008.
 */

var singleton = function (func) {
    var obj = null;
    return function () {
        return obj || (obj = func.apply(this, arguments));
    };
};

var createObj = singleton(function () {
    return new Object();
});


function factory() {
    var obj = {},
        Constructor = Array.prototype.shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
}