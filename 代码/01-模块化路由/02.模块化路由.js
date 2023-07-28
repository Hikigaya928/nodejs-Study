const express = require('express');

const app = express();

//1.导入路由模块
const userRouter = require('./03.router');

/* 2.使用 app.use() 注册路由模块，并添加统一的访问前缀 /api
这样做是为了管理不同的网页模块（例如：用户模块、注册模块...） */
app.use('/api',userRouter);

app.listen(8000, (request, response) => {
    console.log('8000端口已启动....');
});