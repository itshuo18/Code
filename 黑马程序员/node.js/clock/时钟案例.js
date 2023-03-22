const path = require('path')
const fs = require('fs')

//  定义正则表达式，分别匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './素材/index.html'), 'utf8', function (err, dataStr) {
  if (err) return console.log('读取文件失败！' + err.message)
  //  调用三个方法，分别拆解出 css，js,html文件
  resolveCSS(dataStr)
  resolveJS(dataStr)
  resolveHTML(dataStr)
})

//  定义处理 css的方法
function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
  fs.writeFile(path.join(__dirname, './index.css'), newCSS, function (err) {
    if (err) return console.log('写入CSS样式失败！' + err.message)
    console.log('写入样式成功！')
  })
}
//  定义处理 js的方法
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr)
  const newJS = r2[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './index.js'), newJS, function (err) {
    if (err) return console.log('写入Javascript脚本失败！' + err.message)
    console.log('写入Javascript脚本成功！')
  })
}
//  定义处理 html的方法
function resolveHTML(htmlStr) {
  const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>/>')
  fs.writeFile(path.join(__dirname, './index.html'), newHTML, function (err) {
    if (err) return console.log('写入HTML文件失败！' + err.message)
    console.log('写入HTML文件成功！')
  })
}
