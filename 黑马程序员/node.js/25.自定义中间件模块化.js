//  6、自定义中间件
const qs = require('querystring')

const bodyParser = ((req, res, next) => {
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

module.exports = bodyParser