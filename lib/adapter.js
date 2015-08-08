/**
 *  适配器模式：就得代码不需要重构，以一个中间适配器函数，转化后应用于目前的项目
 */


/**
 *  适配的简单demo
 */


var $ = function (id) {
    //内部自定义获取的方式，此处简单起见
    return document.getElementById(id);
};

var $id = function (id) {
    return jQuery('#'+id);
};