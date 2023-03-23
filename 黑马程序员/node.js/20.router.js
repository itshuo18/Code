//  这是路由模块

//  创建路由对象
//  const express = require('express')
//  const router = express.Router()
const router = require('express').Router()

//  挂载具体路由
router.get('/get', (req, res) => {
  //  通过 req.query 获得客户端通过查询字符串，发送到服务器的请求
  const query = req.query
  res.send({
    status: 0,  //  0 表示处理成功，1 表示处理失败
    msg: 'GET请求成功',
    data: query   //  需要响应给客户端的数据
  })
})

router.post('/post', (req, res) => {
  //  req.body 接收请求体数据
  const body = req.body
  res.send({
    status: 0,  //  0 表示处理成功，1 表示处理失败
    msg: 'POST请求成功',
    data: body   //  需要响应给客户端的数据
  })
})


//  向外导出路由对象
module.exports = router