//  1、导入fs模块，来操作文件
const fs = require('fs')

//  2、调用 fs.writeFile()方法写入文件内容
//  参数1：文件的存放路径
//  参数2：写入的内容
//  参数3：回调函数，拿到读取失败或成功的结果
fs.writeFile('./files/2.txt','shuoshuonice',function(err){
  //  如果文件写入成功，则err的值为 null
  //console.log(err)
  if(err){
    return console.log('文件写入失败！')
  }
  console.log('文件写入成功！')
})