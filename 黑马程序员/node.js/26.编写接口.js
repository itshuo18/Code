const express = require('express')
const app = express()

//  配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//  必须在配置 cors中间件之前，配置 JSONP接口
app.get('/api/jsonp', (req, res) => {
  const funcName = req.query.callback
  const data = {
    name: 'zs',
    age: 22
  }
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  res.send(scriptStr)
})

//  一定要在路由之前，配置 cors这个中间件，从而解决接口跨域的问题
//  
const cors = require('cors')
app.use(cors())

//  导入路由模块
const router = require('./20.router.js')
app.use('/api', router)







app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})
