const express = require('express')
const app = express()

//  导入自定义中间件
const customBodyParser = require('./25.自定义中间件模块化')

//  注册自定义中间件
app.use(customBodyParser)

//  第一个全局中间件
app.use((req, res, next) => {
  //  获取请求到达服务器的时间
  console.log('调用第一个全局中间件')
  const time = Date.now()
  req.startTime = time
  next()
})
//  第二个全局中间件
app.use((req, res, next) => {
  console.log('调用第二个全局中间件')
  next()
})


app.get('/', (req, res) => {
  res.send('Home page.' + req.startTime)
})
app.get('/user', (req, res) => {
  res.send('User page.' + req.startTime)
})

app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})


