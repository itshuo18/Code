// 1. 导入 fs 模块
const fs = require('fs')
//  导入 http模块
const http = require('http')
//  导入 path模块
const path = require('path')

//  创建 web服务器实例
const server = http.createServer((req, res) => {
  const url = req.url
  //  把请求的url地址映射为存放路径
  //  优化资源存放路径
  let fpath = ''
  if (url === '/') {
    fpath = path.join(__dirname, './clock/index.html')
  }
  else {
    fpath = path.join(__dirname, './clock', url)
  }

  //  根据映射的文件路径读取文件内容
  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    //  读取失败
    if (err) return res.end('404 Not Found!')
    res.end(dataStr)
  })
})

//  为服务器实例绑定 request事件，监听客户端请求
server.on('request', (req, res) => {
  //  只要有客户端请求我们的服务器，就会触发 request事件
  console.log('Someone visit our web server')
})

//  启动服务器
server.listen(8080, () => {
  console.log('http server running at http://127.0.0.1:8080')
})