(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{300:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("p",[t._v("学习JavaScript有段时间了，但是还未能熟练的掌握数组，每次使用数组进行一些逻辑处理时，总的去控制台写个demo测试一下，殊不知，耗费了很多时间，刚好趁周末时间总结数组的基本使用")]),t._v(" "),s("h5",{attrs:{id:"_1-数组的创建"}},[t._v("1. 数组的创建")]),t._v(" "),t._m(0),s("p",[t._v("要说明的是，虽然第二种方法创建数组指定了长度，但实际上所有情况下数组都是变长的，也就是说即使指定了长度为5，仍然可以将元素存储在规定长度以外的，注意：这时长度会随之改变")]),t._v(" "),s("h5",{attrs:{id:"_2-数组的元素的访问"}},[t._v("2. 数组的元素的访问")]),t._v(" "),t._m(1),s("h5",{attrs:{id:"_3、数组元素的添加"}},[t._v("3、数组元素的添加")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("h5",{attrs:{id:"_4-数组元素的删除"}},[t._v("4. 数组元素的删除")]),t._v(" "),t._m(4),s("h5",{attrs:{id:"_5-数组的截取和合并"}},[t._v("5. 数组的截取和合并")]),t._v(" "),t._m(5),s("p",[t._v("ES6 新增合并数组 ···操作符")]),t._v(" "),s("p",[t._v("ex:")]),t._v(" "),t._m(6),s("h4",{attrs:{id:"_6-数组的拷贝"}},[t._v("6. 数组的拷贝")]),t._v(" "),t._m(7),s("h4",{attrs:{id:"_7、数组元素的排序"}},[t._v("7、数组元素的排序")]),t._v(" "),t._m(8),s("h4",{attrs:{id:"_8、数组元素的字符串化"}},[t._v("8、数组元素的字符串化")]),t._v(" "),t._m(9),s("h3",{attrs:{id:"二数组对象的三个属性"}},[t._v("二数组对象的三个属性")]),t._v(" "),s("p",[t._v("Length属性表示数组的长度，即其中元素的个数。因为数组的索引总是由0开始，所以一个数组的上下限分别是：0和length-1。和其他大多数语言不同的是，JavaScript数组的length属性是可变的，这一点需要特别注意。当length属性被设置得更大时，整个数组的状态事实上不会发生变化，仅仅是length属性变大；当length属性被设置得比原来小时，则原先数组中索引大于或等于length的元素的值全部被丢失")]),t._v(" "),t._m(10),s("p",[t._v("length对象不仅可以显式的设置，它也有可能被隐式修改。JavaScript中可以使用一个未声明过的变量，同样，也可以使用一个未定义的数组元素（指索引超过或等于length的元素），这时，length属性的值将被设置为所使用元素索引的值加1")]),t._v(" "),t._m(11),s("p",[t._v("使用new Array()形式创建的数组，其初始长度就是为0，正是对其中未定义元素的操作，才使数组的长度发生变化")]),t._v(" "),s("h4",{attrs:{id:"prototype-属性"}},[t._v("prototype 属性")]),t._v(" "),s("p",[t._v("返回对象类型原型的引用。prototype 属性是 object 共有的。")]),t._v(" "),s("p",[t._v("objectName.prototype:objectName 参数是object对象的名称。\n说明：用 prototype 属性提供对象的类的一组基本功能。 对象的新实例“继承”赋予该对象原型的操作。\n对于数组对象，以以下例子说明prototype 属性的用途。")]),t._v(" "),s("p",[t._v("给数组对象添加返回数组中最大元素值的方法。要完成这一点，声明一个函数，将它加入 Array.prototype， 并使用它")]),t._v(" "),t._m(12),s("p",[t._v("该代码执行后，y 保存数组 x 中的最大值，即：6")]),t._v(" "),s("h4",{attrs:{id:"_3-constructor-属性"}},[t._v("3. constructor 属性")]),t._v(" "),s("p",[t._v("表示创建对象的函数。object.constructor //object是对象或函数的名称")]),t._v(" "),s("p",[t._v("说明：constructor 属性是所有具有 prototype 的对象的成员。它们包括除 Global 和 Math 对象以外的所有 JScript 固有对象。constructor 属性保存了对构造特定对象实例的函数的引用")]),t._v(" "),t._m(13),s("h4",{attrs:{id:"三-判断是否为数组"}},[t._v("三 判断是否为数组")]),t._v(" "),s("p",[t._v("js因为设计上的某些缺陷，导致在对于Array的判断，也是颇费周折的。\ntypeof 操作符:对于Function， String， Number ，Undefined 等几种类型的对象来说，他完全可以胜任，但是为Array时,难免会让人失望：")]),t._v(" "),t._m(14),s("p",[t._v("instanceof 操作符: 运算符会返回一个 Boolean 值，指出对象是否是特定类的一个实例。")]),t._v(" "),t._m(15),s("p",[t._v("ECMA-262中规范定义了Object.prototype.toString的行为：首先，取得对象的一个内部属性[[Class]]，然后依据这个属性，返回一个类似于”[object Array]”的字符串作为结果（看过ECMA标准的应该都知道，[[]]用来表示语言内部用到的、外部不可直接访问的属性，称为“内部属性”）。利用这个方法，再配合call，我们可以取得任何对象的内部属性[[Class]]，然后把类型检测转化为字符串比较，以达到我们的目的。于是利用这点，就有了下面这种方法：")]),t._v(" "),t._m(16),s("p",[t._v("call改变toString的this引用为待检测的对象，返回此对象的字符串表示，然后对比此字符串是否是’[object Array]’，以判断其是否是Array的实例。也许你要问了，为什么不直接o.toString()？嗯，虽然Array继承自Object，也会有toString方法，但是这个方法有可能会被改写而达不到我们的要求，而Object.prototype则是老虎的屁股，很少有人敢去碰它的，所以能一定程度保证其“纯洁性”：）。这也是Array.isArray()方法的兼容旧环境（Polyfill）")]),t._v(" "),s("p",[t._v("如此很好的解决了跨frame对象构建的问题，经过测试，各大浏览器兼容性也很好，可以放心使用。很多框架，比如jQuery、Base2等等，都计划借鉴此方法以实现某些特殊的，比如数组、正则表达式等对象的类型判定！当然也可以写成如下这样：")]),t._v(" "),t._m(17),s("p",[t._v("要注意的是：")]),s("p",{staticStyle:{color:"red"}},[t._v("toString方法极有可能被重写，所以需要使用的时候，可以直接使用Object.prototype.toString()方法。")]),s("p"),t._v(" "),s("p",[t._v("Array.isArray()方法用来判断某个值是否为数组。如果是，则返回 true，否则返回 false。")]),t._v(" "),t._m(18),s("h5",{attrs:{id:"instanceof-和-isarray"}},[t._v("instanceof 和 isArray")]),t._v(" "),s("p",[t._v("当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes")]),t._v(" "),t._m(19),s("p",[t._v("参考"),s("br"),t._v(" "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array.isArray()"),s("OutboundLink")],1),t._v(" "),s("br"),t._v(" "),s("a",{attrs:{href:"http://www.cnblogs.com/qiantuwuliang/archive/2011/01/08/1930499.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("js数组的操作"),s("OutboundLink")],1)])])},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var array = new Array("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" //创建一个数组\n\nvar array = new Array("),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("size"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 创建一个数组并指定长度"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("数组的元素对应的值为undefined\n\nvar array = new Array("),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("element0"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" element1"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elementN"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("　//创建一个数组并赋值\n\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var testGetArrValue=array"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //获取数组的元素值\narray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("= "),s("span",{attrs:{class:"token string"}},[t._v('"这是新值"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //给数组元素赋予新的值\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("array.push("),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item1 "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item2 "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(". . . "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("itemN "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("// 将一个或多个新元素添加到数组结尾，并返回数组新长度\n\narray.unshift("),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item1 "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item2 "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(". . . "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("itemN "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("// 将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度\n\narray.splice(insertPos"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item1"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item2"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" . . . "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("itemN"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("//将一个或多个新元素插入到数组的指定位置，插入位置的元素自动后移，返回"),s("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("。\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("说明: splice()方法向/从数组中添加/删除项目，然后返回\n被删除的项目，"),a("span",{staticStyle:{color:"red"}},[this._v("该方法会改变原始数组")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("array.pop("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //移除最后一个元素并返回该元素值\n\narray.shift("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //移除最前一个元素并返回该元素值，数组中元素自动前移\n\narray.splice(deletePos"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("deleteCount"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n//删除从指定位置deletePos开始的指定数量deleteCount的元素，数组形式返回所移除的元素\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("array.slice(start"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("end"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n//以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素\n\narray.concat("),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item1"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item2"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" . . . "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("itemN"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n//将多个数组（也可以是字符串，或者是数组和字符串的混合）连接为一个数组，返回连接好的新的数组\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var arr1 = "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'a'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'b'"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nvar arr2 = "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'c'"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nvar arr3 = "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'d'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'e'"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n//ES5\narr1.concat(arr2"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr3"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" 'a'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'b'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'c'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'd'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'e' "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n\n//ES6 \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("...arr1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...arr2"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ...arr3"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   // "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" 'a'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'b'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'c'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'd'"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'e' "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("array.slice("),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //返回数组的拷贝数组，注意是一个新的数组，不是指向\narrayObj.concat("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //返回数组的拷贝数组，注意是一个新的数组，不是指向\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("array.reverse("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //反转元素（最前的排到最后、最后的排到最前），返回数组地址\nex"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("7")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".reverse("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("7")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n注释：该方法会改变原来的数组，而不会创建新的数组\n\narray.sort("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //对数组元素排序，返回数组地址\n\nex"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("7")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".sort("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  //"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("7")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[this._v("arrayObj.join(separator"),a("span",{attrs:{class:"token punctuation"}},[this._v(")")]),a("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v(" //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。\n\ntoLocaleString 、toString 、valueOf：可以看作是join的特殊用法，不常用\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var arr="),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("23")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("25")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("98")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("76")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("54")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("56")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("76")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n//定义了一个包含"),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("个数字的数组\n\nalert(arr.length"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //显示数组的长度"),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n\narr.length="),s("span",{attrs:{class:"token number"}},[t._v("12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //增大数组的长度\n\nalert(arr.length"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //显示数组的长度已经变为"),s("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("\n\nalert(arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //显示第"),s("span",{attrs:{class:"token number"}},[t._v("9")]),t._v("个元素的值，为"),s("span",{attrs:{class:"token number"}},[t._v("56")]),t._v("\n\narr.length="),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //将数组的长度减少到"),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("，索引等于或超过"),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("的元素被丢弃\n\nalert(arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //显示第"),s("span",{attrs:{class:"token number"}},[t._v("9")]),t._v("个元素已经变为"),s("span",{attrs:{class:"token string"}},[t._v('"undefined"')]),t._v("\n\narr.length="),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //将数组长度恢复为"),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n\nalert(arr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("8")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //虽然长度被恢复为"),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("，但第"),s("span",{attrs:{class:"token number"}},[t._v("9")]),t._v("个元素却无法收回，显示"),s("span",{attrs:{class:"token string"}},[t._v('"undefined"')]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var arr="),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("23")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("25")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("98")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("76")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("54")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("56")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("76")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nalert(arr.length"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\narr"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("="),s("span",{attrs:{class:"token number"}},[t._v("34")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nalert(arr.length"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("function array_max("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    var i"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    max = this"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    for (i = "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i < this.length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i++"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        if (max < this"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        max = this"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    return max"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nArray.prototype.max = array_max"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvar x = new Array("),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("6")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvar y = x.max("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("x = new String("),s("span",{attrs:{class:"token string"}},[t._v('"Hi"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nif (x.constructor == String"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 进行处理（条件为真）。\n\nfunction MyFunc "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   // 函数体。\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ny = new MyFunc"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nif (y.constructor == MyFunc"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 进行处理（条件为真）。\n\ny = new Array("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var arr=new Array("),s("span",{attrs:{class:"token string"}},[t._v('"1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"2"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"3"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"4"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"5"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nalert(typeof(arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  // Object\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var arrayStr=new Array("),s("span",{attrs:{class:"token string"}},[t._v('"1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"2"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"3"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"4"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"5"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nalert(arrayStr instanceof Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //"),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("function isArray(obj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  return Object.prototype.toString.call(obj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" === '"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object Array"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("function isArray2 (v"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return toString.apply(v"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" === '"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object Array"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("// 下面的函数调用都返回 "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray(new Array("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n// 鲜为人知的事实：其实 Array.prototype 也是一个数组。\nArray.isArray(Array.prototype"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n// 下面的函数调用都返回 "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token null"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray(undefined"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token number"}},[t._v("17")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray('Array'"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray.isArray("),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" __proto__"),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array.prototype "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("var iframe = document.createElement('iframe'"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument.body.appendChild(iframe"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxArray = window.frames"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("window.frames.length-"),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvar arr = new xArray("),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n// Correctly checking for Array\nArray.isArray(arr"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  // "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n// Considered harmful"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" because doesn't work though iframes\narr instanceof Array"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="array-summary.md";a.default=r.exports}}]);