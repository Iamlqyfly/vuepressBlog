---
title: JavaScript的数组总结
lang: zh-CN
---
<!-- more -->

学习JavaScript有段时间了，但是还未能熟练的掌握数组，每次使用数组进行一些逻辑处理时，总的去控制台写个demo测试一下，殊不知，耗费了很多时间，刚好趁周末时间总结数组的基本使用

##### 1. 数组的创建
```
var array = new Array() //创建一个数组

var array = new Array([size]) // 创建一个数组并指定长度,数组的元素对应的值为undefined

var array = new Array([element0[, element1[, ...[, elementN]]]]);　//创建一个数组并赋值

```
要说明的是，虽然第二种方法创建数组指定了长度，但实际上所有情况下数组都是变长的，也就是说即使指定了长度为5，仍然可以将元素存储在规定长度以外的，注意：这时长度会随之改变

##### 2. 数组的元素的访问
```
var testGetArrValue=array[1]; //获取数组的元素值
array[1]= "这是新值"; //给数组元素赋予新的值
```
##### 3、数组元素的添加
```
array.push([item1 [item2 [. . . [itemN ]]]]);// 将一个或多个新元素添加到数组结尾，并返回数组新长度

array.unshift([item1 [item2 [. . . [itemN ]]]]);// 将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度

array.splice(insertPos,0,[item1[, item2[, . . . [,itemN]]]]);//将一个或多个新元素插入到数组的指定位置，插入位置的元素自动后移，返回""。

```
说明: splice()方法向/从数组中添加/删除项目，然后返回
被删除的项目，<span style="color:red">该方法会改变原始数组</span>

##### 4. 数组元素的删除
```
array.pop(); //移除最后一个元素并返回该元素值

array.shift(); //移除最前一个元素并返回该元素值，数组中元素自动前移

array.splice(deletePos,deleteCount);
//删除从指定位置deletePos开始的指定数量deleteCount的元素，数组形式返回所移除的元素
```
##### 5. 数组的截取和合并
```
array.slice(start, [end]);
//以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素

array.concat([item1[, item2[, . . . [,itemN]]]]);
//将多个数组（也可以是字符串，或者是数组和字符串的混合）连接为一个数组，返回连接好的新的数组
```

ES6 新增合并数组 ···操作符

ex:
```
var arr1 = ['a', 'b'];  
var arr2 = ['c'];  
var arr3 = ['d', 'e']; 

//ES5
arr1.concat(arr2, arr3)  // [ 'a', 'b', 'c', 'd', 'e' ]  

//ES6 
[...arr1, ...arr2, ...arr3]   // [ 'a', 'b', 'c', 'd', 'e' ] 

```

#### 6. 数组的拷贝
```
array.slice(0); //返回数组的拷贝数组，注意是一个新的数组，不是指向
arrayObj.concat(); //返回数组的拷贝数组，注意是一个新的数组，不是指向
```

#### 7、数组元素的排序
```
array.reverse(); //反转元素（最前的排到最后、最后的排到最前），返回数组地址
ex: [1,2,4,7,3].reverse() // [3, 7, 4, 2, 1]
注释：该方法会改变原来的数组，而不会创建新的数组

array.sort(); //对数组元素排序，返回数组地址

ex: [1,2,4,7,3].sort()  //[1,2,3,4,7]
```

#### 8、数组元素的字符串化
```
arrayObj.join(separator); //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。

toLocaleString 、toString 、valueOf：可以看作是join的特殊用法，不常用
```

### 二数组对象的三个属性
Length属性表示数组的长度，即其中元素的个数。因为数组的索引总是由0开始，所以一个数组的上下限分别是：0和length-1。和其他大多数语言不同的是，JavaScript数组的length属性是可变的，这一点需要特别注意。当length属性被设置得更大时，整个数组的状态事实上不会发生变化，仅仅是length属性变大；当length属性被设置得比原来小时，则原先数组中索引大于或等于length的元素的值全部被丢失

```
var arr=[12,23,5,3,25,98,76,54,56,76];

//定义了一个包含10个数字的数组

alert(arr.length); //显示数组的长度10

arr.length=12; //增大数组的长度

alert(arr.length); //显示数组的长度已经变为12

alert(arr[8]); //显示第9个元素的值，为56

arr.length=5; //将数组的长度减少到5，索引等于或超过5的元素被丢弃

alert(arr[8]); //显示第9个元素已经变为"undefined"

arr.length=10; //将数组长度恢复为10

alert(arr[8]); //虽然长度被恢复为10，但第9个元素却无法收回，显示"undefined"
```

length对象不仅可以显式的设置，它也有可能被隐式修改。JavaScript中可以使用一个未声明过的变量，同样，也可以使用一个未定义的数组元素（指索引超过或等于length的元素），这时，length属性的值将被设置为所使用元素索引的值加1

```
var arr=[12,23,5,3,25,98,76,54,56,76];

alert(arr.length);

arr[15]=34;

alert(arr.length);

```
使用new Array()形式创建的数组，其初始长度就是为0，正是对其中未定义元素的操作，才使数组的长度发生变化

#### prototype 属性
返回对象类型原型的引用。prototype 属性是 object 共有的。

objectName.prototype:objectName 参数是object对象的名称。
说明：用 prototype 属性提供对象的类的一组基本功能。 对象的新实例“继承”赋予该对象原型的操作。
对于数组对象，以以下例子说明prototype 属性的用途。

给数组对象添加返回数组中最大元素值的方法。要完成这一点，声明一个函数，将它加入 Array.prototype， 并使用它
```
function array_max()
 {
    var i,
    max = this[0];
    for (i = 1; i < this.length; i++)
    {
        if (max < this[i])
        max = this[i];
    }
    return max;
}
Array.prototype.max = array_max;
var x = new Array(1, 2, 3, 4, 5, 6);
var y = x.max();
```
该代码执行后，y 保存数组 x 中的最大值，即：6

#### 3. constructor 属性
表示创建对象的函数。object.constructor //object是对象或函数的名称

说明：constructor 属性是所有具有 prototype 的对象的成员。它们包括除 Global 和 Math 对象以外的所有 JScript 固有对象。constructor 属性保存了对构造特定对象实例的函数的引用

```
x = new String("Hi");
if (x.constructor == String) // 进行处理（条件为真）。

function MyFunc {
   // 函数体。
}
y = new MyFunc;
if (y.constructor == MyFunc) // 进行处理（条件为真）。

y = new Array();
```

#### 三 判断是否为数组
js因为设计上的某些缺陷，导致在对于Array的判断，也是颇费周折的。
typeof 操作符:对于Function， String， Number ，Undefined 等几种类型的对象来说，他完全可以胜任，但是为Array时,难免会让人失望：

```
var arr=new Array("1","2","3","4","5");
alert(typeof(arr));  // Object
```
instanceof 操作符: 运算符会返回一个 Boolean 值，指出对象是否是特定类的一个实例。
```
var arrayStr=new Array("1","2","3","4","5");
alert(arrayStr instanceof Array);  //true
```
ECMA-262中规范定义了Object.prototype.toString的行为：首先，取得对象的一个内部属性[[Class]]，然后依据这个属性，返回一个类似于”[object Array]”的字符串作为结果（看过ECMA标准的应该都知道，[[]]用来表示语言内部用到的、外部不可直接访问的属性，称为“内部属性”）。利用这个方法，再配合call，我们可以取得任何对象的内部属性[[Class]]，然后把类型检测转化为字符串比较，以达到我们的目的。于是利用这点，就有了下面这种方法：
```
function isArray(obj) {  
  return Object.prototype.toString.call(obj) === '[object Array]';   
}
```
call改变toString的this引用为待检测的对象，返回此对象的字符串表示，然后对比此字符串是否是’[object Array]’，以判断其是否是Array的实例。也许你要问了，为什么不直接o.toString()？嗯，虽然Array继承自Object，也会有toString方法，但是这个方法有可能会被改写而达不到我们的要求，而Object.prototype则是老虎的屁股，很少有人敢去碰它的，所以能一定程度保证其“纯洁性”：）。这也是Array.isArray()方法的兼容旧环境（Polyfill）

如此很好的解决了跨frame对象构建的问题，经过测试，各大浏览器兼容性也很好，可以放心使用。很多框架，比如jQuery、Base2等等，都计划借鉴此方法以实现某些特殊的，比如数组、正则表达式等对象的类型判定！当然也可以写成如下这样：
```
function isArray2 (v){
    return toString.apply(v) === '[object Array]';
}
```
要注意的是：<p style="color:red">toString方法极有可能被重写，所以需要使用的时候，可以直接使用Object.prototype.toString()方法。<p>

Array.isArray()方法用来判断某个值是否为数组。如果是，则返回 true，否则返回 false。
```
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```
##### instanceof 和 isArray
当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes

```
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false
```

参考<br>
[Array.isArray()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) <br>
[js数组的操作](http://www.cnblogs.com/qiantuwuliang/archive/2011/01/08/1930499.html)


