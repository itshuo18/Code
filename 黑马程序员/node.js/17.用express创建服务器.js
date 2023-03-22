//  导入 express
const express = require('express')

//  创建 web服务器
const app = express()

//  调用 app.listen(端口号，回调函数) 启动服务器
app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})