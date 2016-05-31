# 快速开始框架-搭建官网-源码一

本框架是一套完全免费的开始框架，能让您再此代码基础上快速开始您的业务功能。

您可以完全免费的使用此框架，并且可以随便修改，如果您在使用过程中遇到任何问题，欢迎随时留言，我会尽力帮助解答。如果您觉得本框架对您有帮助，希望能给我一个 `Star`，谢谢。

## 核心思想

SPA - Single Page Application - 单页面应用

查看示例：http://www.night123.com/sqsf-homepage-d1

## 开发原则

* 分模块开发
* 基于JS模板机制

## 浏览器兼容

* IE7+
* Chrome/Firefox/Safari

## 插件应用

###  核心插件

* RequireJs.js - AMD模块加载器
* jQuery.js - Js引擎
* Ejs.js - Js模板
* Sass  - CSS开发引擎
* SassCore - Sass框架

### 兼容插件

* html5shiv.js - H5标签兼容
* respond.min.js - CSS3媒体查询兼容

### 应用插件

* sliders - 容器左右滑动组件

## 目录结构

```

-- lib
-- res
	-- css
	-- data
	-- img
	-- js
		-- app                     // 业务模块js目录
		-- common            // 公共js
		main.js
-- tmpl
	-- app                           // 业务html模板目录
	-- header.ejs
	-- footer.ejs
-- app.js
-- index.html

```

## 快速开始

1. 下载源码
2.  在 `res/js/app` 中
