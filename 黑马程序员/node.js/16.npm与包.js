//  npm install 包完整的名称
//  简写：npm i 包完整的名称

//  安装包时 可以在包名之后，通过 @指定下载的版本
//  导入的名称，就是装包时的名称

const moment = require('moment')
const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)

//  node_modules 文件夹存放所有已安装的包
//  package-lock.json 配置文件，记录 node_modules目录下的每一个包的下载信息(名字，版本号，下载地址)
//  package.json 配置文件，记录项目中安装了哪些包

//  npm init -y  创建 package.json这个包管理(文件夹不能有中文和空格)

//  npm install  读取 package.json中的 dependencies节点中的包的名称和版本，并一次性下载到项目中

//  npm uninstall  卸载包，并自动从 package.json中的 dependencies中移除掉



//  只在开发时用到，项目上线之后不会用的包，记录在 devDependencies节点中
//  安装指定的包，并记录到 devDependencies节点中
//  npm i -D 包名



//  解决下包速度慢的问题
//  查看当前下包的镜像源
//  npm config get registry
//  切换下包的镜像源为淘宝镜像源
//  npm config set registry = https://registry.npm.taobao.org/
//  检查镜像源是否下载成功
//  npm config get registry



//  更方便的切换镜像源，可以安装nrm
//  npm i nrm -g
//  npm uninstall nrm -g

//  查看所有可用的镜像源
//  nrm ls
//  切换镜像源
//  nrm use taobao



//  包的分类
//  1、项目包：被安装到node_modules目录中的包
//  开发依赖包(被记录到devDependencies节点中的包，在开发时用到)
//  核心依赖包(被记录到dependencies节点中的包，开发和项目上线后都会用到)

//  2、全局包：执行 npm install时，如果提供了-g参数，则为全局包

//  3、i5ting_toc (可以把 md文档转化为 html页面)
//  npm i - g i5ting_toc
//  i5ting_toc -f 要转换的md文件路径 -o




//  包必须以单独的目录存在
//  包的顶级目录下必须有 package.json
//  package.json 中必须有 name，version，main三个属性(包名，版本号，包的入口)