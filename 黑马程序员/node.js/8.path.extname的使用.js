const path = require('path')

const fpath = '/a/b/c/index.html'

//   path.extname(path) 方法可以获取文件扩展名
const fest = path.extname(fpath)
console.log(fest)
