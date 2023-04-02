//  1、导入 express
const express = require('express')
const history = require('connect-history-api-fallback')

//  2、创建 web服务器
const app = express()
app.use(history())

//  3、用 express.static('目录') 方法，快速对外提供静态资源
//  express.static()函数会根据目录的添加顺序查找所需的文件
//  (在静态资源访问路径之前加一个前缀可以使用如下的方式)
app.use(express.static(__dirname+'./static'))

app.get('/person', (req, res) => {
  res.send({
    name:'tom',
    age:18
  })
})

//  4、调用 app.listen(端口号，回调函数) 启动服务器
app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})