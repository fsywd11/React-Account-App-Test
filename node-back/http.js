const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("hello world");//响应体
});
//拦截
server.on('request',(req,res)=>{
    console.log("收到请求了，请求路径是："+req.url);
    //设置响应头  设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    res.write('hello world');
    res.end();
});

// 监听端口号
server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});

const moment=require('moment');
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));


const fsy=require('./fsy-tools');
console.log(fsy.dateFormate('2021-01-01')); 
console.log(fsy.htmlEscape('<h1>hello world</h1>'));