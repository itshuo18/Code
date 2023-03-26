//  node.js仅支持 CommonJS模块化规范，需按照如下配置
//  1、安装 V14.15.1 的node.js
//  2、在 package.json的根节点中添加 "type":"module" 节点

//  html 代码  <script type="module">


//  ES6 模块化语法
//  1、默认导出和默认导入
//  每个模块中只允许使用一次 export default

//  export default 默认导出的成员
export default {}

//  import 接受名称  from '模块标识符'
import m1 from './a'



//  2、按需导出和按需导入
//  每个模块可以多次使用按需导出
//  导入的成员名称必须和导出的成员名称保持一致
//  导入时，可以使用 as 进行重命名
//  按需导入可以和默认导入一起使用

//  export 按需导出的成员
export let s1 = 'aaa'
export function say(){}

//  import {成员}  from '模块标识符'
import { s1 as str1, say} from './a'
import info,{ s1 as str1, say } from './a'



//  3、整体暴露
export {
  a,
  b,
  c
}
import * as content from './a'


//  4、直接导入并执行模块中的代码，并不需要得到模块中向外共享的成员
import './a'
