/**
 * 解构赋值
 *    '作用': 就是赋值
 *    '解构'：左边一种结构，右边一种结构，左右依依对应进行赋值;
 *    '解构赋值': 对应位置的赋值，解构（结构分解）
 *
 * 分类：
 *     数组解构赋值、对象解构赋值、字符串解构赋值、布尔值解构赋值、函数参数解构赋值、数值解构赋值
 */

// 块作用域. 数组解构赋值
{
    let a, b, rest;
    [a, b] = [1, 2];

    console.log(a, b);
}

{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6];

    console.log(a, b, rest);
}

// 对象解构赋值
{
    let a, b;
    ({a , b} = {a: 1, b: 2});
    console.log(a, b);
}

// 默认值，防止默认值没有的情况下出现undefined
{
    let a, b, c, rest;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c);
}

// 使用场景


// 关于变量的交换,轻松实现变量交换
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}
// 渐变的取出函数返回值
{
    function f() {
        return [1, 2];
    }
    let a, b;
    [a, b] = f();
    console.log(a, b);

}
//
{
    function f() {
        return [1, 2, 3, 4, 5];
    }

    let a, b, c;
    [a, , , ,b] = f();
    console.log(a, b);
}
// 除了第一个数，其余的赋值给一个数组 数组解构赋值
{
    function f() {
        return [1, 2, 3, 4, 5];
    }

    let a, b, c;
    [a, ...b] = f();
    console.log(a, b);
}

{
    function f() {
        return [1, 2, 3, 4, 5];
    }

    let a, b, c;
    [a, ,...b] = f();
    console.log(a, b);
}
// 对象解构赋值
{
    let o = {p : 42, q : true};
    let {p, q} = o;
    console.log(p, q);
}

{
    let metaData = {
        title: '从零开始学Recat',
        author: '余博伦',
        url: 'http://mp.weixin.qq.com/s/kiUYyV_002_nsrctHAs4eg',
        data: {
            learner: 'Junting',
            job: '正在从Web初级开发者转向Web中级开发者进阶'
        }
    };

    let {title: Title, author: Author, url: Url, data: { learner: Learner}} = metaData;
    console.log(Title, Author, Url, Learner);
}