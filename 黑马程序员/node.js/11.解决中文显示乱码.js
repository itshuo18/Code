//  导入 http模块
const http = require('http')

//  创建 web服务器实例
const server = http.createServer()

//  req是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
  const str = `您请求的URL地址是 ${req.url}, 请求的method类型是 ${req.method}`

  //  调用 res.setHeader方法，设置 Content-Type响应头，解决中文乱码问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  //  调用 res.end() 方法，向客户端响应一些内容
  res.end(str)
})

//  启动服务器
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1:8080')
})