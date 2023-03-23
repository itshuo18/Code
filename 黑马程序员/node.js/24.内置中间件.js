const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Home page.')
})
app.post('/user', (req, res) => {
  //  req.body 接收请求体数据
  console.log(req.body)
  res.send('User page.')
})


app.listen(8080, () => {
  console.log('server is running at http://127.0.0.1:8080')
})