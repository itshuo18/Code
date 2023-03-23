//  路由指客户端的请求与服务端处理函数之间的映射关系
//  路由分三部分：请求的类型、请求的 URL地址、处理函数
//  app.method(path, handler)

//  每当一个请求到达服务器，需要先 "按照路由定义的顺序" 进行匹配，如果 "请求类型" 和请求的 "URL" 同时匹配成功，才会调用对应的处理函数

const express = require('express')
const app = express()

//  挂载路由
//  最简单的路由
//   app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
//   app.post('/users', (req, res) => {
//     res.send('Post Request')
//   })


//  导入路由模块
const router = require('./20.router')

//  注册路由模块，可以添加访问前缀
app.use('api', router)


app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})





