const path = require('path')

const fpath = '/a/b/c/index.html'

//  path.basename() 方法，可以获取路径中的最后一部分，经常用这个方法获取路径中的文件名
//  path.basename(path[,ext])   
//  path为一个路径的字符串，ext为文件扩展名
const fullName = path.basename(fpath)
console.log(fullName)
