---
title: 搭建基于express框架的运行环境
lang: zh-CN
---
<!-- more -->

#### 搭建基于Express框架运行环境
* 安装express generator生成器
* 通过生成器自动创建项目
* 配置分析

#### 安装
通过应用生成器工具 express 可以快速创建一个应用的骨架
```
npm i -g express-generator
express --version        // 查看版本

```
注意:一定要全局安装，要不然express --version报命令不存在
<p style="color:red">执行如下命令后</p>

```
express server  // 创建项目

```
生成如下图所示<br>
![](http://wx2.sinaimg.cn/mw690/0060lm7Tly1ftc2rif0btj306y0f6glg.jpg)

正常是前后端分离，建立两个项目。此项目为了测试前后端未分离，将package.json的dependencies合并到根目录的package.json
```
npm install   // 安装依赖
cd server
node bin/www   // 运行
```
浏览器输入localhost:3000
![](http://wx2.sinaimg.cn/mw690/0060lm7Tly1ftc2xdl98cj30b2052dfp.jpg)

更换html模板引擎
express项目views文件夹内文件格式是.jade格式，若要改成HTML文件。
```
cnpm install ejs --save   //安装ejs  
```
app.js
```
var ejs = require('ejs');
app.engine('.html',ejs.__express);  // 设置html后缀模板引擎
app.set('view engine', 'jade'); 改成 app.set('view engine', 'html');
```

在views文件夹内建立index.html文件，重新启动express
```
node bin/www
```
localhost:3000

![](http://wx2.sinaimg.cn/mw690/0060lm7Tly1ftc2xqnqeuj30s504at8t.jpg)

参考<br>
[Express搭建](http://www.expressjs.com.cn/starter/generator.html)