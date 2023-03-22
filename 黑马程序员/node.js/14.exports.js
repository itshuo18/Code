//  在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
//  外界用 require()方法导入自定义模块时，得到的就是 module.exports 所指向的对象。

//  在自定义模块中，默认情况下，module.exports={}
//  在外界使用 require导入自定义模块时，得到的成员是通过 module.exports指向的对象

const age = 20
// module.exports.username = 'zs'
// module.exports.age = age
// module.exports.sayHello = function () {
//   console.log('Hello!')
// }

//  exports和 module.exports指向同一个对象
exports.username = 'zs'
exports.age = age
exports.sayHello = function () {
  console.log('Hello!')
}

//  require()导入模块，导入的结果永远以module.exports指向的对象为准
module.exports = {
  nickname: 'shuo',
  sayHi() {
    console.log('Hi!')
  }
}

