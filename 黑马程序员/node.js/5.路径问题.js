const fs = require('fs')
//  出现路径拼接问题，直接提供绝对路径
//  但是不利于维护，移植性差！！！
// fs.readFile('D:/VS Code/黑马程序员/node.js/files/1.txt', function (err, dataStr) {
//   if (err) {
//     return console.log('读取文件失败！' + err.message)
//   }
//   console.log('读取文件成功！' + dataStr)
// })

//  __dirname  表示当前文件所处的目录
fs.readFile(__dirname + '/files/1.txt', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})