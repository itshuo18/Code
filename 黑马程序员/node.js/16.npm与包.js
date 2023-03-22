//  npm install 包完整的名称
//  简写：npm i 包完整的名称

//  安装包时 可以在包名之后，通过 @指定下载的版本
//  导入的名称，就是装包时的名称

const moment = require('moment')
const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)