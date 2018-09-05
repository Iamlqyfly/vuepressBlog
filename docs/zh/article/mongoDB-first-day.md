---
title: MongoDB体验第一天
lang: zh-CN
---
<!-- more -->

##### 一.下载MongoDB
打开官网下载地址：https://www.mongodb.com/download-center#community
下载安装过程中在最后一步会跨掉，解决方法是在最后一步如下图所示操作

![iamge](http://wx2.sinaimg.cn/mw690/0060lm7Tly1ftakyvqkoqj30h80dfgmc.jpg)

然后点击next进行安装
#####  二.配置MongoDB
因为题主是安装在d盘里，所以是对d盘进行操作
a.在d:\mongo（可随意起）下面建一个data文件夹 d:\mongo\data
b.在d:\mongo（可随意起）下面建一个logs文件夹<br> d:\mongo\logs ，在里面建一个文件mongodb.log
c.在d:\mongo（可随意起）下面建一个etc(随意起，放配置文件)文件夹 d:\mongo\etc ,在里面建一个文件mongo.conf
d.打开mongo.conf文件，修改如下：
数据库路径
```
dbpath=d:\mongo\data\
```
日志输出文件路径
```
logpath=d:\mongo\logs\mongodb.log
```
错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
```
logappend=true
```
启用日志文件，默认启用
```
journal=true
```
这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
```
quiet=false
```
端口号 默认为27017
```
port=27017
```
##### 三. 通过在命令中传参的形式启动Mongo
1.首先，用win+R快捷键打开cmd.exe
2.进入到安装的mongo文件夹中，一直进入到bin目录（存放命令的目录，里面有mongod.exe）,进入到安装好的MongoDB文件夹中，一直进入到bin目录，如下图所示
![image](http://wx1.sinaimg.cn/mw690/0060lm7Tly1ftalb0gjs0j30mf02o0jr.jpg
)
1. 输入如下命令行
```
mongod --dbpath d:\mongo\data --journal
```
看到 waiting for connections on port 27017 等，说明启动成功
在浏览器输入 
```
localhost:27017
```
![image](http://wx2.sinaimg.cn/mw690/0060lm7Tly1ftalgd7kcfj30nf0db3ye.jpg)

看到此图，说明启动成功

5.再次找到cmd.exe,再次进入到mongoDB的bin目录（因为，我没有配置环境变量，所以需要进到bin下面执行），输入mongo回车
![image](http://wx2.sinaimg.cn/mw690/0060lm7Tly1ftaljlflmjj30my0qfaae.jpg)

说明启动成功啦

参考: 
[windows32位系统 安装MongoDB](http://www.imooc.com/article/18438)