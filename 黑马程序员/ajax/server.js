const express = require('express')
const app = express()

app.get('/ie', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('Hello IE')
})

app.get('/server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', 'Post')
  //res.send('Hello Ajax.get')
  setTimeout(() => {
    res.send('延时响应')
  }, 3000)
})

app.all('/server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.send('Hello Ajax.post')
})

app.all('/json-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  const data = {
    name: '尚硅谷'
  }
  let str = JSON.stringify(data)
  res.send(str)
})

app.all('/axios-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  const data = {
    name: '尚硅谷'
  }
  res.send(JSON.stringify(data))
})

app.all('/fetch-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  const data = {
    name: '尚硅谷'
  }
  res.send(JSON.stringify(data))
})

app.all('/jsonp-server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  const data = {
    name: '尚硅谷'
  }
  res.send(JSON.stringify(data))
})

app.listen(8080, () => {
  console.log('http server running at http://127.0.0.1:8080')
})