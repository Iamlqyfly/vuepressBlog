---
title: CSS Variable Study
lang: zh-CN
---
<!-- more -->


#### CSS变量能帮助我们干什么
> 在一些命令式编程语言中，像Java、C++亦或是JavaScript，通过变量我们能够跟踪某些状态。变量是一种符号，关联着一个特定的值，变量的值能随着时间的推移而改变。
在像CSS这种声明式语言中，随着时间而改变的值并不存在，也就没有所谓变量的概念了。
CSS 引入了一种层级变量的概念，从而能够从容应对可维护性的挑战。这就会使得在整个 CSS tree 中都可以象征性的引用一个变量

#### 一、什么是CSS变量
CSS 变量当前有两种形式：

变量，就是拥有合法标识符和合法的值。可以被使用在任意的地方。可以使用var()函数使用变量。例如：var(--example-variable)会返回--example-variable所对应的值
自定义属性。这些属性使用--*where*的特殊格式作为名字。例如--example-variable: 20px;即使一个css声明语句。意思是将20px赋值给--example-varibale变量

#### 二、变量的声明
##### 变量的命名
变量声明使用两根连词线--表示变量，$color是属于Sass的语法，@color是属于Less的语法，为避免冲突css原生变量使用--）<br>
注意: 变量名大小写敏感，`--header-color`和`--Header-Color`是两个不同变量

##### 声明方式
CSS变量声明的方式非常简单，如下，声明了一个名叫color的CSS变量。
+ 在css文件中写
+ 写在html标签的inline-style里
+ 用JS给某个元素声明，方法.style.setProperty
```
body{
  --color: red;
}
<body style="--color: red;"></body>
document.getElementsByTagName('body')[0].style.setProperty('--color', 'red')
```
##### 变量值的类型
如果变量值是一个字符串，可以与其他字符串拼接
```
--bar: 'hello';
--foo: var(--bar)' world';


body:after {
  content: '--screen-category : 'var(--screen-category);
}
```
如果变量值是数值，不能与数值单位直接连用,必须使用calc()函数，将它们连接
```
.foo {
  --gap: 20;
  /* 无效 */
  margin-top: var(--gap)px;
}

.foo {
  --gap: 20;
  margin-top: calc(var(--gap) * 1px);
}
```
如果变量值带有单位，就不能写成字符串
```

/* 无效 */
.foo {
  --foo: '20px';
  font-size: var(--foo);
}

/* 有效 */
.foo {
  --foo: 20px;
  font-size: var(--foo);
```
注意: 变量值只能用作属性值，不能用作属性名

```
.foo {
  --side: margin-top;
  /* 无效 */
  var(--side): 20px;
}
```
上面代码中，变量--side用作属性名，这是无效的
#### 三、CSS变量的继承&作用域 
自定义属性同样支持继承。一个元素上没有定义自定义属性，该自定义属性的值会继承其父元素
```
class="one">
  <div class="two">
    <div class="three">
    </div>
    <div class="four">
    </div>
  <div>
</div>
```
定义下面的CSS：
```
.two { --test: 10px; }
.three { --test: 2em; }
```
在这个例子中，var(--test)的结果是：

+ class="two" 对应的节点: 10px
+ class="three" 对应的节点: element: 2em
+ class="four" 对应的节点: 10px (inherited from its parent)
+ class="one" 对应的节点: 无效值, 即此属性值为未被自定义css变量覆盖的默认值

最顶层的作用域就是:root

#### 四、响应式
```
div {
  --color: #7F583F;
  --bg: #F7EFD2;
}

.mediabox {
  color: var(--color);
  background: var(--bg);
}

@media screen and (min-width: 768px) {
  body {
    --color:  #F7EFD2;
    --bg: #7F583F;
  }
}
```
#### 五、与预处理器的不同
1、预处理器变量不是实时的
```
$color:#7F583F;

@media screen and (min-width: 768px) {
	$color: #F7EFD2;
}

.mediabox {
  	background: $color;
}

```
编译结果
```
.mediabox {
  background: #7F583F; 
}
```  
2、预处理器不能限定作用域
```
$zcolor:blue;
.ulbox {
	$zcolor:red;
}
ul{
	color: $zcolor;
}
```
编译为
```
ul {
  color: blue; 
}
```
3、预处理器变量不可互操作

原生的CSS自定义属性可以与任何CSS预处理器或纯CSS文件一起使用
#### 六、JS操作变量
CSS 变量可以和 JS 互相交互
```
:root{
  --testMargin:70px;
}
//  读取
var root = getComputedStyle(document.documentElement);
var cssVariable1 = root.getPropertyValue('--testMargin').trim();
console.log(cssVariable1); // '70px'
 
// 写入
document.documentElement.style.setProperty('--testMargin', '100px');
var cssVariable2 = root.getPropertyValue('--testMargin').trim();
console.log(cssVariable2);  // '100px'

// 删除
document.documentElement.style.removeProperty('--testMargin');
var cssVariable3 = root.getPropertyValue('--testMargin').trim();
console.log(cssVariable3); // '70px'
```
#### 七、兼容性
检测浏览器是否支持CSS自定义属性的方法
```
/*css*/

@supports ( (--a: 0)) {
    /* supported */
}

@supports ( not (--a: 0)) {
    /* not supported */
}
// Js

if (window.CSS && window.CSS.supports && window.CSS.supports('--a', 0)) {
    alert('CSS properties are supported');
} else {
    alert('CSS properties are NOT supported');
}
```
https://caniuse.com/#search=css%20var
### 总结
相较于传统的 LESS 、SASS 等预处理器变量，CSS 变量的优点在于:
+ CSS 变量的动态性，能在页面运行时更改，而传统预处理器变量编译后无法更改
+ CSS 变量能够继承，能够组合使用，具有作用域
+ 配合 Javascript 使用，可以方便的从 JS 中读/写
参考<br>
[CSS 变量教程](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)
[使用CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables)
[CSS变量和预处理器变量的差异](https://www.w3cplus.com/css/difference-between-types-of-css-variables.html)