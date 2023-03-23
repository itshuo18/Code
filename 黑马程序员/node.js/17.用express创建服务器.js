//  1、导入 express
const express = require('express')


//  2、创建 web服务器
const app = express()


//  3、监听客户端 GET和 POST请求，并向客户端响应相关内容
app.get('/user', (req, res) => {
  //  调用 express提供的 res.send()方法，向客户端响应一个 JSON对象
  res.send({
    name: '张三',
    age: 18,
    gender: '男'
  })
})
app.post('/user', (req, res) => {
  //  调用 express提供的 res.send()方法，向客户端响应一个文本字符串
  res.send('请求成功')
})


//  通过 req.query可以获取到客户端发送过来的 查询参数
//  默认情况下 req.query是一个空对象
app.get('/', (req, res) => {
  console.log(req.query)
  res.send(req.query)
})


//  通过 req.params是动态匹配到的 URL参数，默认也是一个空对象
//  注意这里的 :id是一个动态参数，id、name的名字是可变的
app.get('/user/:id/:name', (req, res) => {
  console.log(req.params)
  res.send(req.params)
})


//  4、调用 app.listen(端口号，回调函数) 启动服务器
app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})