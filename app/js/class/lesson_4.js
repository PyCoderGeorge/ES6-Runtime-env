/**
 * 字符串扩展
 * 字符串新增特性：
 * Unicode表示法、遍历接口、模版字符串、新增方法（10种）
 * 里面有几种常用的方法时ES7的，所以需要安装babel-polyfill进行处理
 */

// Unicode 表示法
{
    // Unicode 编码超出 \u0000~\uFFFF 的范围就会以两个字节来处理
    console.log('a', '\u0061');
    console.log('a', '\u20BB7');

    console.log('a', '\u{20BB7}'); // 解决办法

    let s = '𠮷';
}

{
    let s = '𠮷';
    console.log('length', s.length);
    // ES5处理编码值是不到位的
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    console.log('at0', s.charCodeAt(0));
    console.log('at1', s.charCodeAt(1));

    // ES6
    let s1 = '𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0));
    console.log('code0', s1.codePointAt(0).toString(16));
    console.log('code1', s1.codePointAt(1));
    console.log('code2', s1.codePointAt(2));
}


{
    // 能不能处理Unicode 字符 大于 两个字节的字符
    console.log(String.fromCharCode('0x20bb7')); // ES5 
    console.log(String.fromCodePoint('0x20bb7'));
}

{
    // 字符串遍历器
    let str = "\u{20bb7}abc";
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }

    for (let code of str) {
        console.log('es6', code);
    }
}

{
    // 字符串操作api
    let str = "string";
    console.log('includes', str.includes('c'));
    console.log('startsWith', str.startsWith('str'));
    console.log('endsWith', str.endsWith('ng'));
}

{
    // 字符串复制
    let str = "abc";
    console.log(str.repeat(2));
}

{
    // 模板字符串
    let name = "list";
    let info = "Hello world";
    let m = `I am ${name}, ${info}`;
    console.log(m);
}

{
    // ES7草案，加了babel库的话，在es6里也是可以用的，很有用
    // 补白
    console.log('1'.padStart(2, '0'));
    console.log('1'.padEnd(2, '0'));
}

{
    // 标签模板 多语言，xss攻击
    let user = {
        name: 'list',
        info: 'hello world'
    };

    abc`I am ${user.name}, ${user.info}`;
    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        console.log(s+v1+v2);
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}