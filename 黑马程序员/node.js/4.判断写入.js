const fs = require('fs')
fs.writeFile('./files/2.txt','hello shuo' ,function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})