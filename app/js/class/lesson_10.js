/**
 * map-set 与 数组和对象的比较
 */
{
    // 数据结构横向对比，增、查、改、删

    // map 和 array 的对比
    var map = new Map();
    let arr = new Array(); // let arr = []

    // 增
    map.set('t', 1);
    arr.push({'t': 1});
    console.log('map-array-add', map, arr);

    // 查
    let map_exist = map.has('t');
    let arr_exist = arr.find(item => item.t);
    console.log('map-array-find', map_exist, arr_exist);

    // 改
    map.set('t', 2);
    arr.forEach(item => item.t?item.t = 2: '');
    console.info('map-array-modify', map, arr);

    // 删
    map.delete('t');
    let index = arr.findIndex(item => item.t);
    arr.splice(index, 1);
    console.info('map-array-delete', map, arr);
}

{
    // set 和 array 的对比
    let set = new Set();
    let arr = [];
    let test = {t:1};
    // 增
    set.add({t:1});
    set.add(test);
    arr.push({t:1});

    console.log('set-array-add', set, arr);

    // 查
    let set_exist = set.has({t:1});
    let set_exist2 = set.has(test);
    let arr_exist = arr.find(item => item.t);

    console.log('set-array-exist', set_exist, set_exist2, arr_exist); // set 查不到，因为添加的时候就是一个对像址，替换成一个变量，就可以查到了

    // 改
    set.forEach(item => item.t ? item.t = 2 : '');
    arr.forEach(item => item.t ? item.t = 2 : '');

    console.log('set-array-modify', set, arr);

    // 删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = arr.findIndex(item => item.t);
    arr.splice(index, 1);
    console.log('set-array-delete', set, arr);
}




























