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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_lesson_4__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_lesson_4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__class_lesson_4__);



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

/***/ })
/******/ ]);