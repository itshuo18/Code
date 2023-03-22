const path = require('path')
const fs = require('fs')

//  ../ 会抵消上层目录
const pathStr = path.join('/a', '/b/c', '../', '/d', '/e')
console.log(pathStr)
const pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2)

//  拼接路径一定要使用path.join
fs.readFile(path.join(__dirname, './files/1.txt'), function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

