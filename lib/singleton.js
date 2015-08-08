/**
 * ����ģʽ���Ž�ģʽ��
 */

/**
 * �ŽӺ���
 * @param func ����������
 * @returns {Function} �������û�ִ�й������
 */
var singleton = function (func) {
    var obj;
    return function () {
        return obj || (obj = func.apply(this, arguments));
    }
};

/**
 *
 * @type {Function} �����Ķ��󴴽��ڴ˻ص������ڲ�ʵ��
 */
var createObj = singleton(function () {
    //����һ���򵥵Ĳ��Զ���
    return {name: '123', rand: Math.random()};
});

var obj1 = createObj();
var obj2 = createObj();
obj1===obj2;//--->true