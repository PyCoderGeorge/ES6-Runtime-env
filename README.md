# ES6-Runtime-env
学习使用ECMAScript2015语法，以一个项目实例来透彻ES6.

<p align="center">
<img src="https://img.shields.io/badge/Language-%20ECMAScript2015%20-f9e229.svg">
<img src="http://progressed.io/bar/1?title=Progress">
</p>

## 项目说明
构建了一套基础的ES2015运行环境，为了后续学习、练习 ES6；也已一个涵盖比较全的知识面的彩票项目，来更加清晰的了解和掌握ES6。

## 项目中使用到的相关技术栈和工具

* ECMAScript 2015
* express （构建服务器）、Mock.js (模拟生成数据API接口)
* Gulp（基于流的自动化构建工具）、Babel（javascript转码器）、Webpack（JavaScript 应用程序的模块打包器）、Npm（包管理工具）

```
|-- app                                    // 前端目录
|   |-- css                                // 样式目录
|   |-- js                                 // Js目录
|   |-- views                              // 页面目录
|-- server                                 // 服务端目录
|-- tasks                                  // 自动化构建工具配置目录
|   |-- util                               // 工具
|   |   |-- args.js                        // 命令行处理脚本
|   |-- browser.js                         // 
|   |-- build.js                           // 
|   |-- clean.js                           // 
|   |-- css.js                             // 
|   |-- default.js                         // 
|   |-- pages.js                           // 
|   |-- scripts.js                         // 
|   |-- server.js                          // 
|-- .babelrc                               // ES6语法编译配置
|-- .gitignore                             // git忽略文件
|-- gulpfile.babel.js                      // gulp自动化构建工具，默认是`gulpfile.js`，加上`babel`是让自动化构建工具支持ES6语法编译
|-- package.json                           // 依赖及配置
|-- README.md                              // 简介

```
