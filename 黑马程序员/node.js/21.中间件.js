const express = require('express')
const app = express()

//  一定要在路由之前注册中间件
//  客户端发送的请求，可以连续调用多个中间件进行处理
//  中间件业务处理完毕之后，必须调用 next函数
//  next函数之后，不要再写代码
//  连续调用多个中间件，多个中间件共享 req和 res对象

//  定义一个最简单的中间件函数
const mw = (req, res, next) => {
  console.log('这是中间件函数')
  //console.log(req.url)
  //  中间件业务处理完毕之后，必须调用 next函数，把流转关系转交给下一个路由
  next()
}

const mw1 = (req, res, next) => {
  next()
}

//  全局中间件：客户端的任何请求，到达服务器之后，都会触发的中间件
//  将 mw注册为全局中间件
//  app.use(mw)

//  简写中间件
app.use((req, res, next) => {
  console.log('这是中间件函数')
  next()
})


//  mw为局部中间件，只在当前路由生效，不会影响其他路由
app.get('/', mw, mw1, (req, res) => {
  console.log('这是路由')
  res.send('Home page.')
})
app.get('/user', (req, res) => {
  console.log('这是user路由')
  res.send('User page.')
})

app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})


