/**
 * ECMAScript 6中的正则
 * 1、构造函数的变化，与ECMAScript 5中不同
 * 2、正则方法的扩展
 * 3、u修饰符、y修饰符、s修饰符
 */

// 构造函数的变化
{
    // ES5
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);

    console.log(regex.test('Xyz123'), regex2.test('xYz123'));

    // ES6
    let regex3 = new RegExp(/xyz/ig, 'i'); // 后面修饰符会覆盖前面的修饰符

    console.log(regex3.flags); // flags 获取正则对象使用什么修饰符（ES6新增）
}

// 修饰符： y
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('One', a1.exec(s), a2.exec(s)); // 第一步匹配
    console.log('Two', a1.exec(s), a2.exec(s)); // 第二次匹配
    
    // g和y都是全局匹配，g修饰符从上一次匹配位置开始匹配，直到匹配上为止；y修饰符匹配第二次的时候必须是第一次匹配后紧跟的后一位开始匹配（强调下一次匹配紧跟的后一位开始匹配才算）
}

// 修饰符： u (Unicode模式)
{
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));   // 沒加u,'\uD83D\uDC2A' 4个字节被当成了两个字符
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));  // 加u, '\uD83D\uDC2A' 会被当成一个

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a')); // 会被识别

    console.log(`\u{20BB7}`);   // 𠮷

    let s = '𠮷';
    console.log(s.length); // 2

    console.log('u', /^.$/.test(s)); // 匹配任意字符
    console.log('u-2', /^.$/u.test(s)); // 匹配任意字符,Unicode编码超出2个字节一定要加个u

    console.log('test', /𠮷{2}/.test('𠮷𠮷'));
    console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));
}