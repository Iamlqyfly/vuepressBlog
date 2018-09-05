---
title: JavaScript的字符串总结
lang: zh-CN
---
<!-- more -->

#####  toString 跟 valueOf 返回的都是自己
```json
var str = 'abcdefg'
console.log(str.toString()) // -> 'abcdefg'
console.log(str.valueOf()) // -> 'abcdefg'
```
##### charAt(index): 返回在指定位置的字符
```json
var charAtStr = 'abcdefg'
var charAtEle = charAtStr.charAt(3)
console.log(charAtEle)
// -> d
```
##### charCodeAt(index): 返回指定位置的字符的 Unicode 编码
```json
var charCodeAtStr = 'abcdefg'
var charCodeAtEle = charCodeAtStr.charCodeAt(3)
console.log(charCodeAtEle)
// -> 100  (d 的 Unicode编码是 100)
```
##### fromCharCode(n1, n2, ..., nX): 将 Unicode 编码转为一个字符 接受一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码
```json
var fromCharCode1 = String.fromCharCode(100)
var fromCharCode2 = String.fromCharCode(72,69,76,76,79)
console.log(fromCharCode1) // -> d
console.log(fromCharCode2) // -> HELLO
```
##### string.indexOf(searchvalue,start):
返回某个指定的字符串值在字符串中首次出现的位置,如果没有找到匹配的字符串则返回 -1
```json
/*
    searchvalue: 必需。规定需检索的字符串值
    start:  可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1。如省略该参数，则将从字符串的首字符开始检索
*/json
var indexOfStr = 'abcdbfg'
var indexOfEle1 = indexOfStr.indexOf('b')
var indexOfEle2 = indexOfStr.indexOf('b', 2)
console.log(indexOfEle1) // -> 1
console.log(indexOfEle2) // -> 4

```
##### string.lastIndexOf(searchvalue,start): 返回一个指定的字符串值最后出现的位置，如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索
```json
/*
    searchvalue: 必需。规定需检索的字符串值
    start: 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。
*/
var lastIndexOfStr = 'abcdbfg'
var lastIndexOfEle1 = lastIndexOfStr.lastIndexOf('b')
var lastIndexOfEle2 = lastIndexOfStr.lastIndexOf('b', 2)
console.log(lastIndexOfEle1) // -> 4
console.log(lastIndexOfEle2) // -> 1

```
##### string.concat(string1, string2, ..., stringX): concat() 方法用于连接两个或多个字符串。该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串
```json
var concatStr1 = 'abcd'
var concatStr2 = 'efg'
var concatStr = concatStr1.concat(concatStr2)
console.log(concatStr)
// -> 'abcdefg'
```
##### string.match(regexp): 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
```json
var matchStr = 'abcdbef'
var matchEle = matchStr.match(/b/gi)
console.log(matchEle)
// -> ["b", "b"]
```
##### string.replace(searchvalue,newvalue): 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
```json
/*
    searchvalue: 必须。规定子字符串或要替换的模式的 RegExp 对象。 请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。
    newvalue: 必需。一个字符串值。规定了替换文本或生成替换文本的函数。
*/
var replaceStr1 = 'abcdafg'
var replaceEle1 = replaceStr1.replace(/a/g, 'z')
console.log(replaceEle1) // -> zbcdzfg

var replaceStr2 = 'a1b2c3d4'
var replaceEle2 = replaceStr2.replace(/\d/g, function(v){
    return Math.pow(v, 2)
})
console.log(replaceEle2) // -> a1b4c9d16

```
##### search(searchvalue): 检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 -1
```json
var searchStr = 'Abcdaef'
searchStrEle = searchStr.search(/a/)
searchStrEle2 = searchStr.search(/a/i)
console.log(searchStrEle) // -> 4
console.log(searchStrEle2) // -> 0
```
说明:
search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置
##### string.slice(start,end): 提取字符串的某个部分，并以新的字符串返回被提取的部分
```json
/*
    start:必须. 要抽取的片断的起始下标。第一个字符位置为 0
    end: 可选。 紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
*/
var sliceStr = 'abcdefg'
var sliceStrEle = sliceStr.slice(1, -1)
console.log(sliceStrEle)
// -> bcdef
```
##### string.split(separator,limit): 把一个字符串分割成字符串数组。如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割
```json
/*
    separator: 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
    limit: 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
*/
var splitStr = 'abcdecg'
var splitStrEle1 = splitStr.split('c')
var splitStrEle2 = splitStr.split('')
console.log(splitStrEle1) // -> ["ab", "de", "g"]
console.log(splitStrEle2) // -> ["a", "b", "c", "a", "e", "f", "g"]
```
##### string.substr(start,length): 在字符串中抽取从 开始 下标开始的指定数目的字符
```json
/*
    start: 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
    length: 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
*/
var substrStr = 'abcdefg'
var substrStrEle = substrStr.substr(2, 2)
console.log(substrStrEle)
// -> cd
```
##### string.substring(from, to): 用于提取字符串中介于两个指定下标之间的字符。返回的子串包括 开始 处的字符，但不包括 结束 处的字符
```json

/*
    from:必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。
    to: 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。
*/
var substringStr = 'abcdefg'
var substringStrEle = substringStr.substring(2, 4)
console.log(substringStrEle)
// -> cd
```
##### toLowerCase(): 把字符串转换为小写
```json
var toLowerCaseStr = 'ABCDEFG'
var toLowerCaseStrEle = toLowerCaseStr.toLowerCase()
console.log(toLowerCaseStrEle)
// -> abcdefg
```
##### toUpperCase(): 把字符串转换为大写
```json
var toUpperCaseStr = 'abcdefg'
var toUpperCaseStrEle = toUpperCaseStr.toUpperCase()
console.log(toUpperCaseStrEle)
// -> ABCDEFG
```
##### trim(): 去除字符串两边的空白
```json
var trimStr = ' abcdefg '
var trimStrEle = trimStr.trim()
console.log(trimStrEle)
// ->abcdefg
```
##### includes(searchvalue, start): 用来判断一个字符串是否包含一个指定的值，如果是返回 true，否则false
```json
var includesStr = 'abcdefg'
var includesEle1 = includesStr.includes('a')
var includesEle2 = includesStr.includes('z')
console.log(includesEle1) // -> true
console.log(includesEle2) // -> false
```
##### startsWith(searchvalue, start): 表示是否字符(串)位于string的头部位置, 如果是返回 true，否则false
```json
var startsWithStr = 'abcdefg'
var startsWithStrEle1 = startsWithStr.startsWith('a')
var startsWithStrEle2 = startsWithStr.startsWith('b')
console.log(startsWithStrEle1) // -> true
console.log(startsWithStrEle2) // -> false
```
##### endsWith(searchvalue, start): 表示是否字符(串)位于string的尾部位置, 如果是返回 true，否则false
```json
var endsWithStr = 'abcdefg'
var endsWithStrEle1 = endsWithStr.endsWith('f')
var endsWithStrEle2 = endsWithStr.endsWith('g')
console.log(endsWithStrEle1) // -> false
console.log(endsWithStrEle2) // -> true
```

##### ${}: 模板字符串
```json
var str1 = 'iamlqy'
var template = `我是${str1}`
console.log(template)
// -> 我是iamlqy
```
##### repeat(num): repeat方法返回一个新字符串，表示将原字符串重复n次
```json
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```
参数如果是小数，会被取整
```json
'na'.repeat(2.9) // "nana"
```

如果repeat的参数是负数或者Infinity，会报错
```json
'na'.repeat(Infinity)
// RangeError
'na'.repeat(-1)
// RangeError
```
但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
```json
'na'.repeat(-0.9) // ""
```
参数NaN等同于 0
```json

'na'.repeat(NaN) // ""
```json
如果repeat的参数是字符串，则会先转换成数字
```json
'na'.repeat('na') // ""
'na'.repeat('3') // "nanana"
```
#### at() 
ES5 对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。
```json
'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842"
```
上面代码中的第二条语句，charAt方法期望返回的是用2个字节表示的字符，但汉字“𠮷”占用了4个字节，charAt(0)表示获取这4个字节中的前2个字节，很显然，这是无法正常显示的。

目前，有一个提案，提出字符串实例的at方法，可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符。
```json
'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"
```
#### padStart(minLength, string)，用于头部补齐,padEnd(minLength,string) ,用于尾部补齐
```json
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

```
如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串
```json
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
```json
如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串
```json
'abc'.padStart(10, '0123456789')
// '0123456abc'
```
如果省略第二个参数，默认使用空格补全长度
```json
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
```
padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串
```json
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
```
另一个用途是提示字符串格式
```json
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```