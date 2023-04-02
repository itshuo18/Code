function sumNumber(a: number, b: number): number {
  return a + b
}

sumNumber(100, 200)

// 声明变量不指定类型，会自动检测并指定类型
let b = 1
let a: unknown   // unknown表示未知类型的值，unknown类型的变量不能直接赋值给其他变量
let c: number | string
c = '1'

//  类型断言
a = c as string
a = <string>c

let d: { name: string, age?: number }   //  ?表示可选参数
let e: { name: string, [propName: string]: any }    //  表示任意类型的属性
let f: { name: string, [propName: string]: number | string }

//  函数类型的声明
let g: (a: number, b: number) => number
g = function (a, b): number {
  return a + b
}

//  数组的声明
let h: string[]
h = ['a', 'b', 'c']
let i: Array<number>
i = [1, 2, 3]

//  元组：固定长度的数组
let k: [string, number]
k = ['hello', 1]

//  枚举
enum Gender {
  Male = 0,
  Female = 1

}

let l: { name: string, gender: Gender.Male }
l = {
  name: 'shuo',
  gender: 1
}

//  类型的别名
type MyType = 1 | 2 | 3 | 4 | 5
let m: MyType
