//  导入 http模块
const http = require('http')

//  创建 web服务器实例
const server = http.createServer((req, res) => {

})

//  为服务器实例绑定 request事件，监听客户端请求
server.on('request', (req, res) => {
  //  只要有客户端请求我们的服务器，就会触发 request事件
  console.log('Someone visit our web server')
})

//  启动服务器
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})