/**
 * 观察者模式【发布-订阅】
 */

Events = function () {
    var listen, log, obj, one, remove, trigger, __this;
    obj = {};
    __this = this;

    /**
     * 添加监听操作
     * ```js
     * obj.listen('xx',function(data){
     *      //data
     * });
     * ```
     * @param key 监听事件名称
     * @param eventfn  回调函数
     * @returns {Number} 回调函数
     */
    listen = function (key, eventfn) {
        var stack, _ref;
        //obj保存key,stack
        //如果obj[key]无内容，则执行 stack = obj[key] = []; obj.key指向了stack
        stack = ( _ref = obj[key] ) != null ? _ref : obj[key] = [];
        //stack为回调数组
        return stack.push(eventfn);
    };
    /**
     * 对于监听多个事件，只执行最后一次监听的回调
     * @param key
     * @param eventfn
     * @returns {Number}
     */
    one = function (key, eventfn) {
        remove(key);
        return listen(key, eventfn);
    };
    remove = function (key) {
        var _ref;
        return ( _ref = obj[key] ) != null ? _ref.length = 0 : void 0;
    };
    /**
     * 发布执行绑定事件的回调
     * ```js
     * obj.trigger('xx',{});
     * ```
     * @returns {boolean}
     */
    trigger = function () {
        var fn, stack, _i, _len, _ref, key;
        //取出事件名称
        key = Array.prototype.shift.call(arguments);
        //取出事件回调
        stack = ( _ref = obj[key] ) != null ? _ref : obj[key] = [];
        for (_i = 0, _len = stack.length; _i < _len; _i++) {
            fn = stack[_i];
            //执行回调
            if (fn.apply(__this, arguments) === false) {
                return false;
            }
        }
    };
    return {
        listen: listen,
        one: one,
        remove: remove,
        trigger: trigger
    }
};
var adultTv = Events();
adultTv.listen('play', function (data) {
    console.log('今天电影主演名字：' + data.name);
});
adultTv.listen('play', function (data) {
    console.log('今天电影主演名字：' + data.name);
});
adultTv.remove('play');
adultTv.one('go', function (data) {
    console.log(data);
});

adultTv.trigger('go',12345);

adultTv.trigger('play', {name: 'xiaoxiao'});

