(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h5",{attrs:{id:"tostring-跟-valueof-返回的都是自己"}},[t._v("toString 跟 valueOf 返回的都是自己")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var str = 'abcdefg'\nconsole.log(str.toString("),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> 'abcdefg'\nconsole.log(str.valueOf("),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> 'abcdefg'\n")])])]),a("h5",{attrs:{id:"charat-index-返回在指定位置的字符"}},[t._v("charAt(index): 返回在指定位置的字符")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var charAtStr = 'abcdefg'\nvar charAtEle = charAtStr.charAt("),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(charAtEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> d\n")])])]),a("h5",{attrs:{id:"charcodeat-index-返回指定位置的字符的-unicode-编码"}},[t._v("charCodeAt(index): 返回指定位置的字符的 Unicode 编码")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var charCodeAtStr = 'abcdefg'\nvar charCodeAtEle = charCodeAtStr.charCodeAt("),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(charCodeAtEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> "),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("  (d 的 Unicode编码是 "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h5",{attrs:{id:"fromcharcode-n1-n2-nx-将-unicode-编码转为一个字符-接受一个或多个-unicode-值，即要创建的字符串中的字符的-unicode-编码"}},[t._v("fromCharCode(n1, n2, ..., nX): 将 Unicode 编码转为一个字符 接受一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var fromCharCode1 = String.fromCharCode("),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar fromCharCode2 = String.fromCharCode("),a("span",{attrs:{class:"token number"}},[t._v("72")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("69")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("76")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("76")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("79")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(fromCharCode1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> d\nconsole.log(fromCharCode2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> HELLO\n")])])]),a("h5",{attrs:{id:"string-indexof-searchvalue-start"}},[t._v("string.indexOf(searchvalue,start):")]),a("p",[t._v("返回某个指定的字符串值在字符串中首次出现的位置,如果没有找到匹配的字符串则返回 -1")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("/*\n    searchvalue"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 必需。规定需检索的字符串值\n    start"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("  可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" 到 string Object.length - "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("。如省略该参数，则将从字符串的首字符开始检索\n*/json\nvar indexOfStr = 'abcdbfg'\nvar indexOfEle1 = indexOfStr.indexOf('b'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar indexOfEle2 = indexOfStr.indexOf('b'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(indexOfEle1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsole.log(indexOfEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v("\n\n")])])]),a("h5",{attrs:{id:"string-lastindexof-searchvalue-start-返回一个指定的字符串值最后出现的位置，如果指定第二个参数-start，则在一个字符串中的指定位置从后向前搜索"}},[t._v("string.lastIndexOf(searchvalue,start): 返回一个指定的字符串值最后出现的位置，如果指定第二个参数 start，则在一个字符串中的指定位置从后向前搜索")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("/*\n    searchvalue"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 必需。规定需检索的字符串值\n    start"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" 到 stringObject.length - "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("。如省略该参数，则将从字符串的最后一个字符处开始检索。\n*/\nvar lastIndexOfStr = 'abcdbfg'\nvar lastIndexOfEle1 = lastIndexOfStr.lastIndexOf('b'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar lastIndexOfEle2 = lastIndexOfStr.lastIndexOf('b'"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(lastIndexOfEle1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v("\nconsole.log(lastIndexOfEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])]),a("h5",{attrs:{id:"string-concat-string1-string2-stringx-concat-方法用于连接两个或多个字符串。该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串"}},[t._v("string.concat(string1, string2, ..., stringX): concat() 方法用于连接两个或多个字符串。该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var concatStr1 = 'abcd'\nvar concatStr2 = 'efg'\nvar concatStr = concatStr1.concat(concatStr2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(concatStr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> 'abcdefg'\n")])])]),a("h5",{attrs:{id:"string-match-regexp-在字符串内检索指定的值，或找到一个或多个正则表达式的匹配"}},[t._v("string.match(regexp): 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var matchStr = 'abcdbef'\nvar matchEle = matchStr.match(/b/gi"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(matchEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h5",{attrs:{id:"string-replace-searchvalue-newvalue-在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串"}},[t._v("string.replace(searchvalue,newvalue): 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("/*\n    searchvalue"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 必须。规定子字符串或要替换的模式的 RegExp 对象。 请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。\n    newvalue"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 必需。一个字符串值。规定了替换文本或生成替换文本的函数。\n*/\nvar replaceStr1 = 'abcdafg'\nvar replaceEle1 = replaceStr1.replace(/a/g"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'z'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(replaceEle1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> zbcdzfg\n\nvar replaceStr2 = 'a1b2c3d4'\nvar replaceEle2 = replaceStr2.replace(/\\d/g"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function(v"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return Math.pow(v"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(replaceEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> a1b4c9d16\n\n")])])]),a("h5",{attrs:{id:"search-searchvalue-检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回-1"}},[t._v("search(searchvalue): 检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果没有找到任何匹配的子串，则返回 -1")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var searchStr = 'Abcdaef'\nsearchStrEle = searchStr.search(/a/"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsearchStrEle2 = searchStr.search(/a/i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(searchStrEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v("\nconsole.log(searchStrEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("说明:\nsearch() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置")]),a("h5",{attrs:{id:"string-slice-start-end-提取字符串的某个部分，并以新的字符串返回被提取的部分"}},[t._v("string.slice(start,end): 提取字符串的某个部分，并以新的字符串返回被提取的部分")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("/*\n    start"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("必须. 要抽取的片断的起始下标。第一个字符位置为 "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    end"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可选。 紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。\n*/\nvar sliceStr = 'abcdefg'\nvar sliceStrEle = sliceStr.slice("),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" -"),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(sliceStrEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> bcdef\n")])])]),a("h5",{attrs:{id:"string-split-separator-limit-把一个字符串分割成字符串数组。如果把空字符串-用作-separator，那么-stringobject-中的每个字符之间都会被分割"}},[t._v('string.split(separator,limit): 把一个字符串分割成字符串数组。如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割')]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("/*\n    separator"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。\n    limit"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。\n*/\nvar splitStr = 'abcdecg'\nvar splitStrEle1 = splitStr.split('c'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar splitStrEle2 = splitStr.split(''"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(splitStrEle1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"ab"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"de"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"g"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nconsole.log(splitStrEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"c"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"f"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"g"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h5",{attrs:{id:"string-substr-start-length-在字符串中抽取从-开始-下标开始的指定数目的字符"}},[t._v("string.substr(start,length): 在字符串中抽取从 开始 下标开始的指定数目的字符")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("/*\n    start"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-"),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" 指字符串中最后一个字符，-"),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" 指倒数第二个字符，以此类推。\n    length"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。\n*/\nvar substrStr = 'abcdefg'\nvar substrStrEle = substrStr.substr("),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(substrStrEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> cd\n")])])]),a("h5",{attrs:{id:"string-substring-from-to-用于提取字符串中介于两个指定下标之间的字符。返回的子串包括-开始-处的字符，但不包括-结束-处的字符"}},[t._v("string.substring(from, to): 用于提取字符串中介于两个指定下标之间的字符。返回的子串包括 开始 处的字符，但不包括 结束 处的字符")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\n/*\n    from"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。\n    to"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" 可选。一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("。如果省略该参数，那么返回的子串会一直到字符串的结尾。\n*/\nvar substringStr = 'abcdefg'\nvar substringStrEle = substringStr.substring("),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(substringStrEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> cd\n")])])]),a("h5",{attrs:{id:"tolowercase-把字符串转换为小写"}},[t._v("toLowerCase(): 把字符串转换为小写")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var toLowerCaseStr = 'ABCDEFG'\nvar toLowerCaseStrEle = toLowerCaseStr.toLowerCase("),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(toLowerCaseStrEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> abcdefg\n")])])]),a("h5",{attrs:{id:"touppercase-把字符串转换为大写"}},[t._v("toUpperCase(): 把字符串转换为大写")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var toUpperCaseStr = 'abcdefg'\nvar toUpperCaseStrEle = toUpperCaseStr.toUpperCase("),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(toUpperCaseStrEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> ABCDEFG\n")])])]),a("h5",{attrs:{id:"trim-去除字符串两边的空白"}},[t._v("trim(): 去除字符串两边的空白")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var trimStr = ' abcdefg '\nvar trimStrEle = trimStr.trim("),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(trimStrEle"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// ->abcdefg\n")])])]),a("h5",{attrs:{id:"includes-searchvalue-start-用来判断一个字符串是否包含一个指定的值，如果是返回-true，否则false"}},[t._v("includes(searchvalue, start): 用来判断一个字符串是否包含一个指定的值，如果是返回 true，否则false")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var includesStr = 'abcdefg'\nvar includesEle1 = includesStr.includes('a'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar includesEle2 = includesStr.includes('z'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(includesEle1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nconsole.log(includesEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h5",{attrs:{id:"startswith-searchvalue-start-表示是否字符-串-位于string的头部位置-如果是返回-true，否则false"}},[t._v("startsWith(searchvalue, start): 表示是否字符(串)位于string的头部位置, 如果是返回 true，否则false")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var startsWithStr = 'abcdefg'\nvar startsWithStrEle1 = startsWithStr.startsWith('a'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar startsWithStrEle2 = startsWithStr.startsWith('b'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(startsWithStrEle1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nconsole.log(startsWithStrEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("h5",{attrs:{id:"endswith-searchvalue-start-表示是否字符-串-位于string的尾部位置-如果是返回-true，否则false"}},[t._v("endsWith(searchvalue, start): 表示是否字符(串)位于string的尾部位置, 如果是返回 true，否则false")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var endsWithStr = 'abcdefg'\nvar endsWithStrEle1 = endsWithStr.endsWith('f'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar endsWithStrEle2 = endsWithStr.endsWith('g'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole.log(endsWithStrEle1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nconsole.log(endsWithStrEle2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // -> "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("h5",{attrs:{id:"模板字符串"}},[t._v("${}: 模板字符串")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("var str1 = 'iamlqy'\nvar template = `我是$"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("str1"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("`\nconsole.log(template"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// -> 我是iamlqy\n")])])]),a("h5",{attrs:{id:"repeat-num-repeat方法返回一个新字符串，表示将原字符串重复n次"}},[t._v("repeat(num): repeat方法返回一个新字符串，表示将原字符串重复n次")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'x'.repeat("),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n'hello'.repeat("),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"hellohello"')]),t._v("\n'na'.repeat("),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),a("p",[t._v("参数如果是小数，会被取整")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'na'.repeat("),a("span",{attrs:{class:"token number"}},[t._v("2.9")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"nana"')]),t._v("\n")])])]),a("p",[t._v("如果repeat的参数是负数或者Infinity，会报错")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'na'.repeat(Infinity"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// RangeError\n'na'.repeat(-"),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// RangeError\n")])])]),a("p",[t._v("但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'na'.repeat(-"),a("span",{attrs:{class:"token number"}},[t._v("0.9")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),a("p",[t._v("参数NaN等同于 0")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\n'na'.repeat(NaN"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n```json\n如果repeat的参数是字符串，则会先转换成数字\n```json\n'na'.repeat('na'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("\n'na'.repeat('"),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"nanana"')]),t._v("\n")])])]),a("h4",{attrs:{id:"at"}},[t._v("at()")]),a("p",[t._v("ES5 对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'abc'.charAt("),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),t._v("\n'𠮷'.charAt("),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"\\uD842"')]),t._v("\n")])])]),a("p",[t._v("上面代码中的第二条语句，charAt方法期望返回的是用2个字节表示的字符，但汉字“𠮷”占用了4个字节，charAt(0)表示获取这4个字节中的前2个字节，很显然，这是无法正常显示的。")]),a("p",[t._v("目前，有一个提案，提出字符串实例的at方法，可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符。")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'abc'.at("),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),t._v("\n'𠮷'.at("),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"𠮷"')]),t._v("\n")])])]),a("h4",{attrs:{id:"padstart-minlength-string-，用于头部补齐-padend-minlength-string-用于尾部补齐"}},[t._v("padStart(minLength, string)，用于头部补齐,padEnd(minLength,string) ,用于尾部补齐")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'x'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ab'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 'ababx'\n'x'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ab'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 'abax'\n\n'x'.padEnd("),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ab'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 'xabab'\n'x'.padEnd("),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ab'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 'xaba'\n\n")])])]),a("p",[t._v("如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'xxx'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ab'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 'xxx'\n'xxx'.padEnd("),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ab'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 'xxx'\n```json\n如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串\n```json\n'abc'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" '"),a("span",{attrs:{class:"token number"}},[t._v("0123456789")]),t._v("'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// '"),a("span",{attrs:{class:"token number"}},[t._v("0123456")]),t._v("abc'\n")])])]),a("p",[t._v("如果省略第二个参数，默认使用空格补全长度")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'x'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // '   x'\n'x'.padEnd("),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 'x   '\n")])])]),a("p",[t._v("padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'"),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" '"),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"0000000001"')]),t._v("\n'"),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" '"),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"0000000012"')]),t._v("\n'"),a("span",{attrs:{class:"token number"}},[t._v("123456")]),t._v("'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" '"),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"0000123456"')]),t._v("\n")])])]),a("p",[t._v("另一个用途是提示字符串格式")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("'"),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'YYYY-MM-DD'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"YYYY-MM-12"')]),t._v("\n'"),a("span",{attrs:{class:"token number"}},[t._v("09")]),t._v("-"),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("'.padStart("),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'YYYY-MM-DD'"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // "),a("span",{attrs:{class:"token string"}},[t._v('"YYYY-09-12"')]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);