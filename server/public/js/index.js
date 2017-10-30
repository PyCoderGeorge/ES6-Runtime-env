/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_lesson_10__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_lesson_10___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__class_lesson_10__);



class Test {
    constructor () {
        this.a = '构建ECMAScript 2015 运行环境成功,开始刷起来吧...'
    }
}

let test = new Test();

document.body.innerHTML = test.a;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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






























/***/ })
/******/ ]);