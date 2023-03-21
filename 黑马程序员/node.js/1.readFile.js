//  1、导入fs模块，来操作文件
const fs = require('fs')

//  2、调用 fs.readFile()方法读取文件
//  参数1：读取文件的存放路径
//  参数2：编码格式，一般为 utf8
//  参数3：回调函数，拿到读取失败或成功的结果
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
  // 如果读取成功，则 err结果为 null
  // 如果读取失败，则 err结果为错误对象，dataStr的值为 undefined
  console.log(err)
  console.log('-----------')
  console.log(dataStr)
})
