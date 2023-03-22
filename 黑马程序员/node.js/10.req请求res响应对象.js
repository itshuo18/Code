//  导入 http模块
const http = require('http')

//  创建 web服务器实例
const server = http.createServer()

//  req是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
  //  req.url是客户端请求的 URL地址
  const url = req.url

  //  req.method是客户端请求的 method类型
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`

  console.log(str)
  //  调用 res.end() 方法，向客户端响应一些内容
  res.end(str)
})

//  启动服务器
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})