## 安装

```
npm install fsy-tools

```


## 导入

```js
const fsy = require('fsy-tools');

```


## 格式化
```js
// 调用dateFormat,对时间进行格式化
const dtStr = fsy.dateFormat(new Date());

//结果：2023-03-22 16:20:00
console.log(dtStr);

```

## 转义HTML中的特殊字符
```js
// 带转换的HTML字符串
const htmlStr = '<h1>这是h1标题</h1>';
//调用htmlEncode,对HTML中的特殊字符进行转义
const str = fsy.htmlEncode(htmlStr);
//结果：&lt;h1&gt;这是h1标题&lt;/h1&gt;
console.log(str);

```

## 还原HTML中的特殊字符
```js
// 待还原的HTML字符串
const htmlStr = '&lt;h1&gt;这是h1标题&lt;/h1&gt;';
//调用htmlDecode,对HTML中的特殊字符进行还原
const str = fsy.htmlDecode(htmlStr);
//结果：<h1>这是h1标题</h1>
console.log(str);
    
```

## 开源协议
ISC