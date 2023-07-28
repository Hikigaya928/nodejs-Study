//这是路由模块

//1.导入express
const express = require('express');

//2.创建一个路由对象
const router = express.Router();

//3.挂载具体的路由
router.get('/router-get', (request, response) =>{
    response.send('通过路由对象，GET');
});

router.post('/router-post',(request,response)=>{
    response.send('通过路由对象，POST');
});

//4.向外导出路由对象
module.exports = router;