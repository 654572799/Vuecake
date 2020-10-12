const express=require('express');
const bodyParser=require('body-parser');
const indexRouter=require('./router/index.js');
const cors=require('cors');
//创建web服务器
const app=express();
// 设置端口
app.listen(3000);
//配置跨域
app.use(cors({
	origin:['http://127.0.0.1:8080','http://localhost:8080']
}))
//在路由器之前，应用body-parser中间件，将post请求的数据解析为对象
app.use( bodyParser.urlencoded({
  extended:false
}) );

// 托管静态资源到public目录
app.use('/public',express.static('./public'))


// 挂载路由
app.use('/index',indexRouter);