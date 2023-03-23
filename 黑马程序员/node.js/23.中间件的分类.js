//  1、应用级别的中间件：绑定到 app实例上的中间件
//  app.use()、app.get('/', mw , function() )


//  2、路由级别的中间件：绑定到 express.Router()实例上的中间件
//  router.use()


//  3、错误级别的中间件：专门捕获项目中发生的异常错误
app.get(function (req, res) {
  throw new Error('服务器内部发生了错误！')
  res.send('Home Page')
})
//  错误中间件必须注册在路由之后
app.use(function (err, req, res, next) {
  res.send('Error!' + err.message)
})


//  4、express内置中间件
//  express.static    快速托管静态资源
//  express.json    解析 JSON格式的请求体数据
app.use(express.json())
//  express.urlencoded  解析 URL-encoded格式的请求体数据
app.use(express.urlencoded({ extended: false }))


//  5、第三方中间件
//  npm i 安装中间件
//  require 导入中间件
//  调用 app.use() 注册中间件

//  6、自定义中间件
const express = require('express')
const app = express()
const qs = require('querystring')

app.use((req, res, next) => {
  //  定义中间件具体业务逻辑
  let str = ''
  //  监听 req的 data事件
  req.on('data', (chunk) => {
    str += chunk
  })
  //  监听 req的 end事件
  req.on('end', () => {
    const body = qs.parse(str)
    req.body = body  //  挂载为 req属性供其他使用
    next()
  })
})

app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})