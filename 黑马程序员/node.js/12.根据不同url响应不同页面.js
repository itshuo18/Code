//  导入 http模块
const http = require('http')

//  创建 web服务器实例
const server = http.createServer()

//  req是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
  const url = req.url
  //  设置默认响应内容
  let content = '<h1>404 Not Found!</h1>'

  //  判断请求 url
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  }
  else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }

  //  调用 res.setHeader方法，设置 Content-Type响应头，解决中文乱码问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  //  调用 res.end() 方法，向客户端响应一些内容
  res.end(content)
})

//  启动服务器
server.listen(8080, () => {
  console.log('http server running at http://127.0.0.1:8080')
})